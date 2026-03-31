import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { Prisma, User as UserModel} from 'generated/prisma';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor (private UserService ){

    }

    @Post('signup')
  async signupUser(
    @Body() userData: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    return this.UserService.createUser(userData);
  }
}
