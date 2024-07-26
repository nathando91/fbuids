// src/fbid-phones/schemas/fbid-phone.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type FbidPhoneDocument = FbidPhone & Document;

@Schema({ collection: 'fbid_phones' })  // Custom collection name
export class FbidPhone {
    @Prop({ required: true, unique: true })
    uid: number;

    @Prop({ required: true })
    phone: number;

    @Prop()
    birthday: string;

    @Prop()
    email: string;

    @Prop()
    gender: number;

    @Prop()
    locationId: number;

    @Prop()
    locationName: string;

    @Prop()
    name: string;

    username: string;
}

export const FbidPhoneSchema = SchemaFactory.createForClass(FbidPhone);
