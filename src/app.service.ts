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

    // OK
    const accounts = await this.findByUids([100005625150066]);
    console.log({ accounts });
    const accounts2 = await this.findByPhones([84375699791]);
    console.log({ accounts2 })
    const accounts3 = await this.findByUsernames(["ratkhiemton"]);
    console.log({ accounts3 });
  }

  async findByUids(uids: number[]): Promise<FbidPhone[]> {
    return this.fbidPhoneModel.find({ uid: { $in: uids } }).exec();
  }

  async findByPhones(phones: number[]): Promise<FbidPhone[]> {
    return this.fbidPhoneModel.find({ phone: { $in: phones } }).exec();
  }

  async findByUsernames(usernames: string[]): Promise<FbidPhone[]> {
    return this.fbidPhoneModel.find({ username: { $in: usernames } }).exec();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
