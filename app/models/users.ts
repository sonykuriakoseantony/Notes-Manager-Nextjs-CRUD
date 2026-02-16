import { model, models, Schema } from "mongoose";


export interface IUser {
    name : string;
    email : string;
    password : string;
}

const userSchema = new Schema<IUser>({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
})

export default models.users || model<IUser>('users', userSchema);