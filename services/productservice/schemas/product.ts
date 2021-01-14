import mongoose from 'mongoose'
import {Item, schemaOptions} from './item'

export const ProductSchema = Item.discriminator('Product', new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: { required: true, type: String },
    name: { required: false, type: Map },
    categories: [{ required: false,  type: mongoose.Schema.Types.ObjectId, ref: 'Category' }]

}, schemaOptions));