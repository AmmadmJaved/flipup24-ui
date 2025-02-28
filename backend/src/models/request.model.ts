import mongoose, { Schema, Document } from "mongoose";

export interface IRequest extends Document {
  customerId: string;
  partnerId?: string;
  service: string;
  location: string;
  cost: string;
  status: "pending" | "accepted" | "completed";
  createdAt: Date;
}

const RequestSchema = new Schema<IRequest>({
  customerId: { type: String, required: true },
  partnerId: { type: String, default: null },
  service: { type: String, required: true },
  location: { type: String, required: true },
  cost: { type: String, required: true },
  status: { type: String, enum: ["pending", "accepted", "completed"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IRequest>("Request", RequestSchema);
