import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("uid2phone")
  async convertUID2Phone(@Body() data: number[]): Promise<any> {
    return await this.appService.findByUids(data)
  }


  @Post("phone2uid")
  async convertPhone2UID(@Body() data: number[]): Promise<any> {
    return await this.appService.findByPhones(data)
  }
}

