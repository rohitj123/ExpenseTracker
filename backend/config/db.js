import mongoose from 'mongoose';

export const connectDB = async()=>{
  await mongoose.connect("mongodb+srv://rohitjain8594_db_user:bdAOmTgZwvgXiNFk@cluster0.t7zpn6l.mongodb.net/Expense")
  .then(()=> console.log('DB CONNECTED'));
}

