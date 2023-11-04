import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { Login } from './dtos/login.dto';
import { ReturnUsuario } from 'src/usuario/dtos/return-usuario.dto';
import { UsuarioEntity } from 'src/usuario/entities/usuario.entity';
import { validatePassword } from 'src/utils/password';
import { ReturnLogin } from './dtos/return-login.dto';
import { LoginPayload } from './dtos/login-payload.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async login(login: Login): Promise<ReturnLogin> {
    const usuario: UsuarioEntity | undefined = await this.usuarioService
      .findUsuarioByEmail(login.email)
      .catch(() => undefined);

    const isMatch = await validatePassword(login.senha, usuario?.senha || '');

    if (!usuario || !isMatch) {
      throw new NotFoundException('Email ou senha invalido');
    }

    return {
      accessToken: this.jwtService.sign({ ...new LoginPayload(usuario) }),
      usuario: new ReturnUsuario(usuario),
    };
  }
}
