import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Customer } from '../entities/customer.entity';

export class CreateCustomerDto implements Customer {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(60)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(60)
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  password: string;
}
