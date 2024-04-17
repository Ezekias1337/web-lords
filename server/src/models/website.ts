import { InferSchemaType, model, Schema } from "mongoose";

const websiteSchema = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    needLogo: {
      type: ["Yes", "No"],
      required: true,
    },
    websiteDescription: {
      type: String,
      required: true,
    },
    websiteStatus: {
      type: ["Not Started", "In Progress", "Completed", "Rejected"],
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

type Website = InferSchemaType<typeof websiteSchema>;

export default model<Website>("Website", websiteSchema);
