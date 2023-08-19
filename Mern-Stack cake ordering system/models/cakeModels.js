// const { default: mongoose } = require('mongoose');
// const packageName = require('packageName');

// const cakeSchema = mongoose.Schema({

//     name: {type:String , require},
//     price:{ type : Number,require },
//     size: { type : Number,require },
//     category: {type:String , require},
//     image: {type:String , require},
//     description: {type:String , require},


// },
// {
//     timestamps:true,
// }) 

// const cakeModel = mongoose.model('cake',cakeSchema)

// module.exports = cakeModel



const mongoose = require('mongoose');

const cakeSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
}, {
    timestamps: true,
});

const CakeModel = mongoose.model('Cake', cakeSchema);

module.exports = CakeModel;
