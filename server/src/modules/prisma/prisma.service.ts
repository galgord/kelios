import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private prisma: PrismaClient;

  constructor(configService: ConfigService) {
    const databaseUrl = configService.get<string>('DATABASE_URL');

    // Prisma v7: Use adapter for prisma+postgres:// URLs
    const adapter = new PrismaPg({
      connectionString: databaseUrl,
    });

    this.prisma = new PrismaClient({ adapter });
  }

  async onModuleInit() {
    await this.prisma.$connect();
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }

  // Expose prisma client methods
  get client() {
    return this.prisma;
  }

  // Common proxy methods
  get user() {
    return this.prisma.user;
  }
}
