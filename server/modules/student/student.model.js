import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Student name
    rollNumber: { type: String, required: true, unique: true }, // Roll number
    courseName: { type: String, required: true }, // Course name
  },
  { timestamps: true } // createdAt & updatedAt automatically
);

export default mongoose.model("Student", studentSchema);
