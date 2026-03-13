import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse, ApiOkResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('FBUID Lookup')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @ApiOperation({ summary: 'Health check' })
  @ApiOkResponse({ description: 'Trả về "Hello World!"' })
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('uid2phone')
  @ApiOperation({
    summary: 'Tra cứu thông tin từ Facebook UID',
    description: 'Gửi mảng các Facebook UID (số) để tra cứu thông tin tương ứng (phone, email, name, ...)',
  })
  @ApiBody({
    description: 'Mảng các Facebook UID',
    schema: {
      type: 'array',
      items: { type: 'number' },
      example: [100005625150066, 100001234567890],
    },
  })
  @ApiOkResponse({
    description: 'Danh sách kết quả tra cứu',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          uid: { type: 'number', example: 100005625150066 },
          phone: { type: 'number', example: 84375699791 },
          name: { type: 'string', example: 'Nguyễn Văn A' },
          email: { type: 'string', example: 'example@email.com' },
          birthday: { type: 'string', example: '01/01/1990' },
          gender: { type: 'number', example: 1 },
          username: { type: 'string', example: 'nguyenvana' },
          locationId: { type: 'number', example: 106 },
          locationName: { type: 'string', example: 'Hà Nội' },
        },
      },
    },
  })
  async convertUID2Phone(@Body() data: number[]): Promise<any> {
    return await this.appService.findByUids(data);
  }

  @Post('phone2uid')
  @ApiOperation({
    summary: 'Tra cứu thông tin từ số điện thoại',
    description: 'Gửi mảng các số điện thoại để tra cứu UID và thông tin Facebook tương ứng',
  })
  @ApiBody({
    description: 'Mảng các số điện thoại',
    schema: {
      type: 'array',
      items: { type: 'number' },
      example: [84375699791, 84912345678],
    },
  })
  @ApiOkResponse({
    description: 'Danh sách kết quả tra cứu',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          uid: { type: 'number', example: 100005625150066 },
          phone: { type: 'number', example: 84375699791 },
          name: { type: 'string', example: 'Nguyễn Văn A' },
          email: { type: 'string', example: 'example@email.com' },
          birthday: { type: 'string', example: '01/01/1990' },
          gender: { type: 'number', example: 1 },
          username: { type: 'string', example: 'nguyenvana' },
          locationId: { type: 'number', example: 106 },
          locationName: { type: 'string', example: 'Hà Nội' },
        },
      },
    },
  })
  async convertPhone2UID(@Body() data: number[]): Promise<any> {
    return await this.appService.findByPhones(data);
  }

  @Post('username2uid')
  @ApiOperation({
    summary: 'Tra cứu thông tin từ username',
    description: 'Gửi mảng các Facebook username để tra cứu UID và thông tin tương ứng',
  })
  @ApiBody({
    description: 'Mảng các username',
    schema: {
      type: 'array',
      items: { type: 'string' },
      example: ['ratkhiemton', 'johndoe'],
    },
  })
  @ApiOkResponse({
    description: 'Danh sách kết quả tra cứu',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          uid: { type: 'number', example: 100005625150066 },
          phone: { type: 'number', example: 84375699791 },
          name: { type: 'string', example: 'Nguyễn Văn A' },
          email: { type: 'string', example: 'example@email.com' },
          birthday: { type: 'string', example: '01/01/1990' },
          gender: { type: 'number', example: 1 },
          username: { type: 'string', example: 'ratkhiemton' },
          locationId: { type: 'number', example: 106 },
          locationName: { type: 'string', example: 'Hà Nội' },
        },
      },
    },
  })
  async convertUsername2UID(@Body() data: string[]): Promise<any> {
    return await this.appService.findByUsernames(data);
  }
}
