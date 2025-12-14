import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {
  private stripe: Stripe | null;

  constructor(private readonly configService: ConfigService) {
    const secretKey = this.configService.get<string>('STRIPE_SECRET_KEY');
    this.stripe = secretKey ? new Stripe(secretKey) : null;
  }

  async createConnectAccountLink(userId: string, email: string) {
    // If Stripe is not configured, return a mock URL
    if (!this.stripe) {
      return {
        url: 'https://mock-stripe-onboarding.example.com?user=' + userId,
        isMock: true,
      };
    }

    // Create a Stripe Connect Express account
    const account = await this.stripe.accounts.create({
      type: 'express',
      email,
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
    });

    // Generate account link for onboarding
    const accountLink = await this.stripe.accountLinks.create({
      account: account.id,
      refresh_url: `${this.configService.get('FRONTEND_URL')}/dashboard?refresh=true`,
      return_url: `${this.configService.get('FRONTEND_URL')}/dashboard?success=true`,
      type: 'account_onboarding',
    });

    return {
      url: accountLink.url,
      accountId: account.id,
      isMock: false,
    };
  }
}
