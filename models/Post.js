const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
  },
  project: {
    type: String,
    // required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  articlebody: [
    {
      articlebodyimage: {
        type: String,
      },
      articlebodytext: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("post", PostSchema);
