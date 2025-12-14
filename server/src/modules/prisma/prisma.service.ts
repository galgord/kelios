import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private prisma: PrismaClient;
  private pool: Pool;

  constructor(configService: ConfigService) {
    const databaseUrl = configService.get<string>('DATABASE_URL');

    // Create a pg Pool for the adapter
    this.pool = new Pool({
      connectionString: databaseUrl,
    });

    // Prisma v7: Use adapter for prisma+postgres:// URLs
    const adapter = new PrismaPg(this.pool);

    this.prisma = new PrismaClient({ adapter });
  }

  async onModuleInit() {
    await this.prisma.$connect();
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
    await this.pool.end();
  }

  // Expose prisma client methods
  get client() {
    return this.prisma;
  }

  // Common proxy methods
  get user() {
    return this.prisma.user;
  }

  get event() {
    return this.prisma.event;
  }
}
