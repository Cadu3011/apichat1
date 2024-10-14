import { Answers } from "@prisma/client";
import { Question } from "../../questions/entities/question.entity";
import {Users} from "../../user/entities/user.entity"
export class Answer implements Answers{
    id: number;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    questionId: number;
    user:Users
    question:Question
}
