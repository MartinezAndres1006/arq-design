import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  products: [
    {
        nombre:String,
        precio:Number,
        imagen:String
      },
    
  ],
});

export default cartSchema

