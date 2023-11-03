import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDTO } from './dtos/create-usuario.dto';
import { UsuarioEntity } from './entities/usuario.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async createUsuario(
    createUsuarioDTO: CreateUsuarioDTO,
  ): Promise<UsuarioEntity> {
    const saltOrRounds = 10;

    const passwordHashed = await hash(createUsuarioDTO.senha, saltOrRounds);

    return this.usuarioRepository.save({
      ...createUsuarioDTO,
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
}
