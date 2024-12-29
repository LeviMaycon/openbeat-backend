import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { PrismaService } from '../prisma/prisma.service';
import type { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: CreateCustomerDto) {
    await this.prismaService.$transaction(async (cs) => {
      const foundCustomer = await cs.customer.findFirst({
        where: {
          OR: [
            {
              email: dto.email,
            },
          ],
        },
      });
      if (foundCustomer) {
        throw new ConflictException('Usuário já cadastrado');
      }

      await cs.customer.create({
        data: {
          name: dto.name,
          email: dto.email,
          password: dto.password,
        },
      });
    });
  }

  async delete(id: number) {
    await this.prismaService.$transaction(async (cs) => {
      const customer = await cs.customer.findFirst({
        where: {
          id: id,
        },
      });
      if (!customer) {
        throw new NotFoundException('Usuário não localizado.');
      }

      await this.prismaService.customer.delete({
        where: {
          id: Number(id),
        },
      });
    });
  }

  async edit(id: number, dto: UpdateCustomerDto) {
    const foundCustomer = await this.prismaService.customer.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (foundCustomer) {
      throw new ConflictException('Usuário já cadastrado com esse email');
    }

    await this.prismaService.customer.update({
      where: { id },
      data: {
        name: dto.name,
        email: dto.email,
        password: dto.password,
      },
    });
  }
}
