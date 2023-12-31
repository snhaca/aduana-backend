/* eslint-disable prettier/prettier */
import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { authorizantionToLoginPayload } from 'src/utils/base-64-converter';

export const IdUsuario = createParamDecorator((_, ctx: ExecutionContext) => {
  const { authorization } = ctx.switchToHttp().getRequest().headers; 

  const loginPayload = authorizantionToLoginPayload(authorization);

  return loginPayload?.id;
});
