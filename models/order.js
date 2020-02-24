var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
	email: { type: String, required: true },
	cart: { type: Object, required: true },
	paymentId: { type: String, required: true }
});

module.exports = mongoose.model('Order', schema);