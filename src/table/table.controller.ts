import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTableDto } from './dto/create-table.dto';
import { TableService } from './table.service';
import { Table } from './entities/table.entity';
import { UpdateTableDto } from './dto/update-table.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('table')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('table')
export class TableController {

  constructor(private readonly tableService: TableService){}

  @Get()
  @ApiOperation({
    summary: 'Listar todas as mesas',
  })

  findAll(): Promise<Table[]> {
    return this.tableService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar uma mesa',
  })

  findOne(@Param('id') id: string): Promise<Table>{
    return this.tableService.findById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar uma mesa',
  })
  create(@Body() dto: CreateTableDto): Promise<Table> {
    return this.tableService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar uma mesa pelo ID',
  })

  update(@Param('id') id: string, @Body() dto: UpdateTableDto) : Promise<Table>{
    return this.tableService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover uma mesa pelo ID',
  })
  
  delete(@Param('id') id: string){
    this.tableService.delete(id);
  }
}
