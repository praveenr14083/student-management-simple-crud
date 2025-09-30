import Student from "./student.model.js";

export const createStudent = async (data) => {
  return await Student.create(data);
};

export const getStudents = async () => {
  // Removed populate since userId doesn't exist
  return await Student.find();
};

export const getStudentById = async (id) => {
  return await Student.findById(id); // Removed populate
};

export const updateStudent = async (id, data) => {
  return await Student.findByIdAndUpdate(id, data, { new: true });
};

export const deleteStudent = async (id) => {
  return await Student.findByIdAndDelete(id);
};
