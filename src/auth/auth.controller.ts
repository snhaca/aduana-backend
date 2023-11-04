import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Login } from './dtos/login.dto';
import { ReturnLogin } from './dtos/return-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async login(@Body() login: Login): Promise<ReturnLogin> {
    return this.authService.login(login);
  }
}
