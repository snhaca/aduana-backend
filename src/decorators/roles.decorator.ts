/* eslint-disable prettier/prettier */
import { SetMetadata } from '@nestjs/common';  
import { TipoUsuario } from 'src/usuario/enum/tipo-usuario.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: TipoUsuario[]) => SetMetadata(ROLES_KEY, roles);