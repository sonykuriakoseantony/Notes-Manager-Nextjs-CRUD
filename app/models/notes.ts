import mongoose, { model, models, Schema } from "mongoose";

export interface INote {
    title : string;
    description : string;
}

const noteSchema = new Schema<INote>({
    title : {
        type  : String,
        required : true
    },
    description : {
        type  : String,
        required : true
    }
},{
    timestamps : true
})

export default models.notes || model<INote>("notes", noteSchema)