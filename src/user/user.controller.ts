import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { UserService } from './user.service';
import {Prisma ,User as UserModel}from '@prisma/client'
@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    @Post()
    async signupUser(@Body() userData: Prisma.UserCreateInput,):Promise<UserModel>{
        return this.userService.createUser(userData)
    }
    @Get(':id')
    async getUser(@Param('id') id:String):Promise<UserModel>{
        return this.userService.User({id:Number(id)})
    }
    @Put('update/:id')
    async updateUser(@Body() userData:Prisma.UserUpdateInput, @Param('id') id:String):Promise<UserModel>{
        return this.userService.updateUser({where: {id:Number(id)},data: userData})
    }
    @Delete(':id')
    async deleteUser(@Param('id') id:String):Promise<UserModel>{
            return this.userService.deleteUser({id:Number(id)})
        
    }
}
 