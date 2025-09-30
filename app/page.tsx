import { EmployeeList } from "./components/EmployeeList";
import { NewEmployee } from "./components/NewEmployee";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-24">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-5xl font-bold">Celtiberian Employees</h1>
        <p className="text-lg">
          Welcome to the Celtiberian Employees Management System
        </p>
      </div>

      <EmployeeList />
      <NewEmployee />
    </main>
  );
}
