const mongoose =require('mongoose');

const animesSchema = new mongoose.Schema({
    pagination:Object,
    data:Array,
    links:Object,
    meta:Object
});

//new collection
const Animes = new mongoose.model('Anime',animesSchema);

module.exports = Animes;