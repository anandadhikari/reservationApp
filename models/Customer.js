const mongoose = require("mongoose");


const RESERVATIONSchema = {
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   number: {
      type: Number,
      required: true
   },
   address: {
      type: String,
      required: true
   },
   date: {
      type: Date,
      default: Date.now
   }
};
module.exports = RESERVATION = mongoose.model('RESERVATION', RESERVATIONSchema);
