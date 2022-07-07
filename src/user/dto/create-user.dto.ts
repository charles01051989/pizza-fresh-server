import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl, Matches, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome de usuário. Utilizado no login. Deve ser único',
    example: 'charlesmarques'
  })
  nickname: string
  @IsString()
  @ApiProperty({
    description: 'Nome de usuário. Apenas para exibição',
    example: 'Charles Marques'
  })
  name: string;
  @IsString()
  @MinLength(6)
  @Matches(/((?=.*|d)|(?=.*|w+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{
    message: 'Senha fraca',
  })
  @ApiProperty({
    description: 'Senha de usuário para login',
    example: 'Abcd@1234',
  })
  password: string;
  @IsString()
  @ApiProperty({
    description: 'A confirmação da senha deve ser igual a senha',
    example: 'Abcd@1234',
  })
  confirmPassword: string;
  @IsUrl()
  @ApiProperty({
    description: 'Imagem de perfil',
    example: 'https://mega.ibxk.com.br/2013/8/materias/22799410315123916.jpg?ims=610x'
  })
  image: string;
}
