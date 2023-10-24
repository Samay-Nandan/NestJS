import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '@src/httpApi/services';
import { UserController } from '@src/httpApi/controllers';
import { UserEntity } from '@src/httpApi/entities';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
