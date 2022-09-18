import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { JwtModule } from '@nestjs/jwt';
import { ScheduleModule } from '@nestjs/schedule';
import validationEnv from 'config/joi.config';
import env from 'config/env';
import { MenuModule } from 'modules/menu/menu.module';
import { TagsModule } from 'modules/tags/tags.module';

export const RootModule = [
  ConfigModule.forRoot({
    // validationSchema: Joi.object({
    //   validationEnv,
    // }),
    isGlobal: true,
  }),
  JwtModule.register({
    secretOrPrivateKey: `${env.JWT_SECRET_KEY || 'nami'}`,
    signOptions: {
      expiresIn: 1000 * 60 * 60, // 1 hour,
    },
  }),
  ScheduleModule.forRoot(),
  MongooseModule.forRoot(env.MONGO_URL),
  MenuModule,
  TagsModule,
];
