import { Module } from '@nestjs/common';
import { TableService } from './tabble.service';
import { TableController } from './table.controller';

@Module({
  controllers: [TableController],
  providers: [TableService],
})
export class TableModule {}
