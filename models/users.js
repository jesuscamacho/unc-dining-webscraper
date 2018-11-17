var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId,
    passportLocalMongoose = require('passport-local-mongoose');

// Schema for USER
var User = new Schema ({
  name: String,
  email: String,
  food: {type: [String], required: false}
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
