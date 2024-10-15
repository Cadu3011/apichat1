import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUsersDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsAlphanumeric()
    @IsNotEmpty()
    pasword: string;
}