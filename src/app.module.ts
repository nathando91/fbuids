import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FbidPhone, FbidPhoneSchema } from './schemas/fbid-phone.schema';
import { TelegramService } from './telegram.service';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://mongo:27017/fbid_phones"),
    MongooseModule.forFeature([{ name: FbidPhone.name, schema: FbidPhoneSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService, TelegramService],
})
export class AppModule { }
