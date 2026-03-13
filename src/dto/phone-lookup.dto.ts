import { ApiProperty } from '@nestjs/swagger';

export class PhoneLookupDto {
    @ApiProperty({
        description: 'Danh sách số điện thoại cần tra cứu',
        example: [84375699791, 84912345678],
        type: [Number],
    })
    phones: number[];
}
