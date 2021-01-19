const mongoose = require("mongoose");

const catergorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    categoryDescription:{
        type: String,
        required: true
    },
    belongs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "items"
    }]
}); 

module.exports = mongoose.model("catergories", catergorySchema)