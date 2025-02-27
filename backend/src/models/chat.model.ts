import mongoose, { Schema, Document } from "mongoose";

export interface IChat extends Document {
  requestId: string;
  messages: { senderId: string; text: string; timestamp: Date }[];
}

const ChatSchema = new Schema<IChat>({
  requestId: { type: String, required: true },
  messages: [
    {
      senderId: { type: String, required: true },
      text: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

export default mongoose.model<IChat>("Chat", ChatSchema);
