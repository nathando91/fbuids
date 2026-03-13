import { ApiProperty } from '@nestjs/swagger';

export class UsernameLookupDto {
    @ApiProperty({
        description: 'Danh sách username Facebook cần tra cứu',
        example: ['ratkhiemton', 'johndoe'],
        type: [String],
    })
    usernames: string[];
}
