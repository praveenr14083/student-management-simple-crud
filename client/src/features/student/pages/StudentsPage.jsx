import React, { useEffect, useState, useCallback } from "react";
import {
  fetchStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../api";
import StudentTable from "../components/StudentTable";
import StudentModal from "../components/StudentModal";
import { Button } from "@/components/ui/button";
import useAuthStore from "../../auth/authStore";
import { useNavigate } from "react-router-dom";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editStudent, setEditStudent] = useState(null);
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  // Wrap loadStudents in useCallback to avoid unnecessary recreations
  const loadStudents = useCallback(async () => {
    try {
      const res = await fetchStudents();
      setStudents(res.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    if (!token) navigate("/login");
    loadStudents();
  }, [token, navigate, loadStudents]); // Added navigate and loadStudents as dependencies

  const handleCreate = () => {
    setEditStudent(null);
    setModalOpen(true);
  };

  const handleSubmit = async (data) => {
    try {
      if (editStudent) {
        await updateStudent(editStudent._id, data);
      } else {
        await createStudent(data);
      }
      setModalOpen(false);
      loadStudents();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (student) => {
    setEditStudent(student);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      await deleteStudent(id);
      loadStudents();
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
        <div className="flex gap-2">
          <Button onClick={handleCreate}>Create New Student</Button>
          <Button variant="destructive" onClick={logout}>
            Logout
          </Button>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <StudentTable
          students={students}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <StudentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={editStudent}
      />
    </div>
  );
}
