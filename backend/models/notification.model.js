import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["follow", "like"],
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;

// https://www.youtube.com/watch?v=MDZC8VDZnV8&list=PLMIKhW5c47rS1Zp41p4PRTj-T_9Q15-Az&ab_channel=Codesistency
// 2:50:36
// https://github.com/burakorkmez/twitter-clone/blob/master/backend/models/notification.model.js
