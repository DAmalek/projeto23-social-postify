import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  isNotEmpty,
} from 'class-validator';

export class creatUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minNumbers: 1,
    minUppercase: 1,
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  avatar: string;
}
