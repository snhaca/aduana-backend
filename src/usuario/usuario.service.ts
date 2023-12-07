import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateSenha } from './dtos/update-senha.dto';
import { createPasswordHashed, validatePassword } from 'src/utils/password';
import { CreateUsuario } from './dtos/create-usuario.dto';
import { TipoUsuario } from './enum/tipo-usuario.enum';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(create: CreateUsuario): Promise<Usuario> {
    const usuario = await this.findByEmail(create.email).catch(() => undefined);

    if (usuario) {
      throw new BadGatewayException('email já existe no sistema');
    }

    const saltOrRounds = 10;

    const passwordHashed = await hash(create.senha, saltOrRounds);

    return this.usuarioRepository.save({
      ...create,
      tipoUsuario: TipoUsuario.Usuario,
      senha: passwordHashed,
    });
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        id,
      },
    });

    if (!usuario) {
      throw new NotFoundException(`Id Usuario: ${id} Não encontrado`);
    }

    return usuario;
  }

  async findByEmail(email: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        email,
      },
    });

    if (!usuario) {
      throw new NotFoundException(`Email: ${email} Não encontrado`);
    }

    return usuario;
  }

  async updatePasswordUser(
    updateSenha: UpdateSenha,
    idUsuario: number,
  ): Promise<Usuario> {
    const usuario = await this.findOne(idUsuario);

    const passwordHashed = await createPasswordHashed(updateSenha.novaSenha);

    const isMatch = await validatePassword(
      updateSenha.ultimaSenha,
      usuario.senha || '',
    );

    if (!isMatch) {
      throw new BadRequestException('Última senha inválida');
    }

    return this.usuarioRepository.save({
      ...usuario,
      senha: passwordHashed,
    });
  }
}
