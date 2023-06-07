import { Schema, model, Types } from 'mongoose'
import { IUser } from '../interfaces/auth.user.interface'


const UserSchema  = new Schema<IUser>(
    {
        email: {type: String, required: true, unique: true},
        hashedPassword: {type: String, require: true},
        fullName: {type: String, require: true},
    },
    {   
        timestamps: true
    }
)

export const UserModel = model<IUser>('User', UserSchema);