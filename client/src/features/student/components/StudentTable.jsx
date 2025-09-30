import React from "react";
import { Button } from "@/components/ui/button";

export default function StudentTable({ students, onEdit, onDelete }) {
  return (
    <table className="w-full text-left border-collapse">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 border">Name</th>
          <th className="p-3 border">Roll Number</th>
          <th className="p-3 border">Course</th>
          <th className="p-3 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s._id} className="hover:bg-gray-50">
            <td className="p-3 border">{s.name}</td>
            <td className="p-3 border">{s.rollNumber}</td>
            <td className="p-3 border">{s.courseName}</td>
            <td className="p-3 border flex gap-2">
              <Button size="sm" variant="outline" onClick={() => onEdit(s)}>
                Edit
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => onDelete(s._id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
