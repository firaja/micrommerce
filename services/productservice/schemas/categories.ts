import mongoose from 'mongoose'
import {Item, schemaOptions} from './item'

export const CategorySchema = Item.discriminator('Category', new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: { required: true, type: String },
    name: { required: false, type: Map },
    parent: [{ required: false,  type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    catalog: { required: true,  type: mongoose.Schema.Types.ObjectId, ref: 'Catalog' }

}, schemaOptions));