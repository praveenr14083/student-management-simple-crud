import {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "./student.service.js";

export const addStudent = async (req, res) => {
  try {
    const student = await createStudent(req.body);
    res.status(201).json({ message: "Student added successfully", student });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const listStudents = async (req, res) => {
  try {
    const students = await getStudents();
    res.json(students);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getStudent = async (req, res) => {
  try {
    const student = await getStudentById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const editStudent = async (req, res) => {
  try {
    const student = await updateStudent(req.params.id, req.body);
    res.json({ message: "Student updated successfully", student });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const removeStudent = async (req, res) => {
  try {
    await deleteStudent(req.params.id);
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
