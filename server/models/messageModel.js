const { model, Schema } = require("mongoose");
const mongoose = require("mongoose");

const messageSchema = new Schema(
  {
    text: String,
    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Messages", messageSchema);
