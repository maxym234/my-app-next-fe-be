import { Schema, model, Types } from 'mongoose'
import { IAvalibleTime } from '../interfaces/avalibleTime.interface'


const PostSchema  = new Schema<IAvalibleTime>({
    date: {type: String},
    time: [{type: String}]
})

export const AvalibleTimeModel = model<IAvalibleTime>('AvalibleTime', PostSchema);