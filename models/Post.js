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
  /*
  articlebodytext: {
    type: String,
  },
  articlebodyimage: {
    type: String,
  },
  */

  articlebody: [
    {
      articlebodytext: {
        type: String,
      },
      articlebodyimage: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("post", PostSchema);

/*
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
  },
  project: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("post", PostSchema);
*/
