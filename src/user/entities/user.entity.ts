import { User } from "@prisma/client";
export class Users implements User{
    name: string;
    id: number;
    email: string;
    pasword: string;
    createdAt: Date;
    updatedAt: Date;
}
