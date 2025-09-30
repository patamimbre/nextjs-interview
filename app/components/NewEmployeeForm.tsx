"use client";

import { use, useState } from "react";
import { addEmployeeAction } from "../actions";

type NewEmployeeFormProps = {
  rolesPromise: Promise<string[]>;
};

export function NewEmployeeForm({ rolesPromise }: NewEmployeeFormProps) {
  const roles = use(rolesPromise);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addEmployeeAction(name, role);
    setName("");
    setRole("");
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="border border-gray-300 p-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select
        className="border border-gray-300 p-2 rounded"
        name="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Employee
      </button>
    </form>
  );
}
