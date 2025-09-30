import { Suspense } from "react";
import { addEmployeeAction } from "../actions";
import { getRoles } from "../lib/db";

export async function NewEmployee() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold">Add New Employee</h2>
      <Suspense fallback={<NewEmployeeFormSkeleton />}>
        <NewEmployeeForm />
      </Suspense>
    </div>
  );
}

function NewEmployeeFormSkeleton() {
  return <div className="animate-pulse text-gray-400">Loading form...</div>;
}

export async function NewEmployeeForm() {
  const roles = await getRoles();

  return (
    <form className="flex flex-col gap-4" action={addEmployeeAction}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="border border-gray-300 p-2 rounded"
      />
      <select
        className="border border-gray-300 p-2 rounded"
        name="role"
        defaultValue=""
      >
        <option value="" disabled>
          Select Role
        </option>
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
