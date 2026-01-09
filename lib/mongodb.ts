const mongoose = require('mongoose');

const connectionstring = process.env.MONGODB_URL as string;

// mongoose.connect(connectionstring).then((res : any)=>{
//     console.log("Connetion Established", res);
// }).catch((err : any) => {
//     console.log("Connection Failed", err);
// })

export const connectDB = async ()=>{
    try{
        const res = await mongoose.connect(connectionstring);
        console.log("Connetion Established", res);
    }catch(err){
        console.log("Connection Failed", err);
    }
}

