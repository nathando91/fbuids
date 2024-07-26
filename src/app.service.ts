import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FbidPhone, FbidPhoneDocument } from './schemas/fbid-phone.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(FbidPhone.name) private fbidPhoneModel: Model<FbidPhoneDocument>,
  ) { }

  async onModuleInit(): Promise<void> {
    console.log('FbidPhones Module initialized!');
    const accounts = await this.findByUids([100003199137965]);
    console.log({ accounts })
  }

  async findByUids(uids: number[]): Promise<FbidPhone[]> {
    return this.fbidPhoneModel.find({ uid: { $in: uids } }).exec();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
