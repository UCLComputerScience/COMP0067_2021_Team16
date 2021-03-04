let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let slideshows = new Schema({
    slideshow_id: {
        type: Number,
        unique: true,
        required: true
    },
    slideshow_type: {
        type: String,
        required: true
    },
    slideshow_name: {
        type: String,
        required: true
    },
    slideshow_images: Array
});

let Slideshows = mongoose.model("Slideshows", slideshows);

module.exports = Slideshows;
