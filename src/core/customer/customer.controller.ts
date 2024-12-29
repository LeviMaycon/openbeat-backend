import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  HttpStatus,
  HttpCode,
  Patch,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @ApiOperation({ summary: 'Create a customer' })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a customer' })
  async delete(@Param('id') id: number) {
    return this.customerService.delete(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update by id' })
  @HttpCode(HttpStatus.OK)
  edit(@Param('id') id: string, @Body() dto: CreateCustomerDto) {
    return this.customerService.edit(+id, dto);
  }
}
