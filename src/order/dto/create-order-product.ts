import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsString, IsUUID } from "class-validator";

export class CreateOrderProductDto{
  @IsUUID()
  @ApiProperty({
    description: 'ID do usuário',
    example: '18491930-6300-4e62-92ff-d28fdee1f841',
  })
  productId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Quantidade de itens do pedido',
    example: 2,
  })
  quantity: number;
  @IsString()
  @ApiProperty({
    description: 'Observações do produto',
    example: 'Sem tomate',
  })
  description: string;
}
