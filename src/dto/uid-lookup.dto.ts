import { ApiProperty } from '@nestjs/swagger';

export class UidLookupDto {
    @ApiProperty({
        description: 'Danh sách Facebook UID cần tra cứu',
        example: [100005625150066, 100001234567890],
        type: [Number],
    })
    uids: number[];
}
