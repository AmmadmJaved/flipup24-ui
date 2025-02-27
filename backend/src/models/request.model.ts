import mongoose, { Schema, Document } from "mongoose";

export interface IRequest extends Document {
  customerId: string;
  partnerId?: string;
  status: "pending" | "accepted" | "completed";
  createdAt: Date;
}

const RequestSchema = new Schema<IRequest>({
  customerId: { type: String, required: true },
  partnerId: { type: String, default: null },
  status: { type: String, enum: ["pending", "accepted", "completed"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IRequest>("Request", RequestSchema);
