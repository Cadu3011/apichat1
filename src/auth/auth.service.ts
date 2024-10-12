import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    @Inject()
    private readonly userService: UserService

    @Inject()
    private readonly jtwService:JwtService

    async signin(params:Prisma.UserCreateInput):Promise<{access_token:String}>{
        const user = await this.userService.User({email:params.email})
        if(!user)throw new NotFoundException("user not found")
        const passwordMatch = await bcrypt.compare(params.pasword, user.pasword)
        if(!passwordMatch) throw new UnauthorizedException("Invalid credentials")
        const payload = { sub: user.id }
        return { access_token: await this.jtwService.signAsync(payload) }
    }
}
