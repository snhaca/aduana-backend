import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsuarioEntity } from './entities/usuario.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateSenha } from './dtos/update-senha.dto';
import { createPasswordHashed, validatePassword } from 'src/utils/password';
import { CreateUsuario } from './dtos/create-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async createUsuario(createUsuario: CreateUsuario): Promise<UsuarioEntity> {
    const saltOrRounds = 10;

    const passwordHashed = await hash(createUsuario.senha, saltOrRounds);

    return this.usuarioRepository.save({
      ...createUsuario,
      tipoUsuario: 1,
      senha: passwordHashed,
    });
  }

  async findUsuarios(): Promise<UsuarioEntity[]> {
    return this.usuarioRepository.find();
  }

  async findUserById(idUsuario: number): Promise<UsuarioEntity> {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        id: idUsuario,
      },
    });

    if (!usuario) {
      throw new NotFoundException(`Id Usuario: ${idUsuario} Not Found`);
    }

    return usuario;
  }

  async findUsuarioByEmail(email: string): Promise<UsuarioEntity> {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        email,
      },
    });

    if (!usuario) {
      throw new NotFoundException(`Email: ${email} Not Found`);
    }

    return usuario;
  }

  async updatePasswordUser(
    updateSenha: UpdateSenha,
    idUsuario: number,
  ): Promise<UsuarioEntity> {
    const usuario = await this.findUserById(idUsuario);

    const passwordHashed = await createPasswordHashed(updateSenha.novaSenha);

    const isMatch = await validatePassword(
      updateSenha.ultimaSenha,
      usuario.senha || '',
    );

    if (!isMatch) {
      throw new BadRequestException('Ultima senha invalid');
    }

    return this.usuarioRepository.save({
      ...usuario,
      senha: passwordHashed,
    });
  }
}
