import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TableService } from './tabble.service';
import { TableController } from './table.controller';

@Module({
  imports: [PrismaModule],
  controllers: [TableController],
  providers: [TableService],
})
export class TableModule {}
