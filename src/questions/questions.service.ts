import { Inject, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class QuestionsService {
  @Inject()
  private readonly prisma: PrismaService
  async create(createQuestionDto: CreateQuestionDto , req: any) {
    return this.prisma.questions.create({data:{...createQuestionDto , userId :req.sub}});
  }

  async findAll() {
    return await this.prisma.questions.findMany()
  }

  async findOne(id: number) {
    return await this.prisma.questions.findUnique({where:{id}})
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return await this.prisma.questions.update({where: {id} ,data: updateQuestionDto });
  }

  remove(id: number) {
    return this.prisma.questions.delete({where:{id}})
  }
}
