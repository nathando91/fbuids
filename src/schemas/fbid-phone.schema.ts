// src/fbid-phones/schemas/fbid-phone.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';

export type FbidPhoneDocument = FbidPhone & Document;

@Schema({ collection: 'fbid_phones' })
export class FbidPhone {
    @ApiProperty({ description: 'Facebook User ID', example: 100005625150066 })
    @Prop({ required: true, unique: true, index: true })
    uid: number;

    @ApiProperty({ description: 'Số điện thoại', example: 84375699791 })
    @Prop({ required: true, index: true })
    phone: number;

    @ApiProperty({ description: 'Ngày sinh', example: '01/01/1990', required: false })
    @Prop()
    birthday: string;

    @ApiProperty({ description: 'Email', example: 'example@email.com', required: false })
    @Prop()
    email: string;

    @ApiProperty({ description: 'Giới tính (1: Nam, 2: Nữ)', example: 1, required: false })
    @Prop()
    gender: number;

    @ApiProperty({ description: 'ID vị trí', example: 106, required: false })
    @Prop()
    locationId: number;

    @ApiProperty({ description: 'Tên vị trí', example: 'Hà Nội', required: false })
    @Prop()
    locationName: string;

    @ApiProperty({ description: 'Tên người dùng', example: 'Nguyễn Văn A', required: false })
    @Prop()
    name: string;

    @ApiProperty({ description: 'Facebook username', example: 'nguyenvana', required: false })
    @Prop({ index: true })
    username: string;
}

export const FbidPhoneSchema = SchemaFactory.createForClass(FbidPhone);
