import { JwtModuleOptions } from '@nestjs/jwt';
import { JWT_SECRET } from '../enivronment';

export const JwtConfig: JwtModuleOptions = {
  global: true,
  secret: JWT_SECRET,
  signOptions: { expiresIn: '1h' },
};
