var mongoose = require('mongoose');

const options = { discriminatorKey: 'type' };

var itemSchema = new mongoose.Schema(
    {
        creationTime: {type: Date, required: true, default: Date.now},
        modifiedTime: {type: Date, required: true, default: Date.now},
    }, options);


export const Item = mongoose.model('Item', itemSchema);
export const schemaOptions = options;