import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('onboard')
  @UseGuards(JwtAuthGuard)
  async onboard(@Request() req: any) {
    return this.paymentsService.createConnectAccountLink(
      req.user.id,
      req.user.email,
    );
  }
}
