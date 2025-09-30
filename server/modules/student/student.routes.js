import express from "express";
import {
  addStudent,
  listStudents,
  getStudent,
  editStudent,
  removeStudent,
} from "./student.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, addStudent);
router.get("/", authMiddleware, listStudents);
router.get("/:id", authMiddleware, getStudent);
router.put("/:id", authMiddleware, editStudent);
router.delete("/:id", authMiddleware, removeStudent);

export default router;
