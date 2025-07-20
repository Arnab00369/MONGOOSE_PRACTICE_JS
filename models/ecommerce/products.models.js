import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    productImage: {
      type: String,
    },
    price:{
      type: Number,
      default: 0,
      stock:{
        default: 0,
        type: Number,
      }},
      //referring from the Ctaegory Model
      category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
  },
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
},
  {timestamps: true}
);

export const Products = mongoose.model('Products', productsSchema);
