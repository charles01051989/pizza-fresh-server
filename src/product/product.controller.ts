import { Body, Controller, Get, Param, Patch, Post, Delete, HttpCode, HttpStatus, UseGuards } from "@nestjs/common";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";

@ApiTags('product')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar um produto!'
  })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os produtos!'
  })
  findAll() {
    return this.productService.findAll();
  }

  @Get (':id')
  @ApiOperation({
    summary: 'Visualizar um produto!'
  })
  findOne(@Param('id') id: string){
    return this.productService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um produto!'
  })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto){
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover um produto!'
  })
  delete(@Param('id') id: string){
    this.productService.delete(id);
  }
}
