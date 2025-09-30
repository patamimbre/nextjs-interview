import { Suspense } from "react";
import { getRoles } from "../lib/db";
import { NewEmployeeForm } from "./NewEmployeeForm";

export async function NewEmployee() {
  const rolesPromise = getRoles();
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold">Add New Employee</h2>
      <Suspense fallback={<NewEmployeeFormSkeleton />}>
        <NewEmployeeForm rolesPromise={rolesPromise} />
      </Suspense>
    </div>
  );
}

function NewEmployeeFormSkeleton() {
  return <div className="animate-pulse text-gray-400">Loading form...</div>;
}
