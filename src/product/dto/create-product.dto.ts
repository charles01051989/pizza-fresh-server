import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString, IsUrl } from "class-validator"

export class CreateProductDto{
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Pizza de Mussarela',
  })
  @IsString()
  name: string
  @ApiProperty({
    description: 'Descrição do produto',
    example: 'Queijo mussarela fino do fino, massa fina e borda recheada de catupiry'
  })
  @IsString()
  description: string
  @ApiProperty({
    description: 'Preço do produto',
    example: 12.34
  })
  @IsNumber({
    maxDecimalPlaces:2,
  })
  price: number
  @ApiProperty({
    description: 'Url da imagem',
  })
  @IsUrl()
  image: string
}
