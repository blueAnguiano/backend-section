const mongoose = require('mongoose');
const {Schema} = mongoose.Schema;

const CommentSchema = new Schema({
    comment: {type: String, require: true},
    description: {type: String},
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        require: true,
        autopopulate: true
    }
});

mongoose.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('comment', CommentSchema);