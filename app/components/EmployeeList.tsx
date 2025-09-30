import { getEmployees } from "@/app/lib/db";
import { Suspense } from "react";

export function EmployeeList() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold">Employee List</h2>
      <Suspense fallback={<EmployeeListSkeleton />}>
        <EmployeeListContent />
      </Suspense>
    </div>
  );
}

async function EmployeeListContent() {
  const employees = await getEmployees();

  return (
    <ul className="list-disc pl-5">
      {employees.map((employee) => (
        <li key={employee.id}>
          {employee.name} ({employee.role})
        </li>
      ))}
    </ul>
  );
}

function EmployeeListSkeleton() {
  return (
    <ul className="list-disc pl-5">
      <li className="animate-pulse text-gray-400">Loading employees...</li>
    </ul>
  );
}
