import "server-only";

type Employee = {
  id: number;
  name: string;
  role: string;
};

let employees: Employee[] = [
  { id: 1, name: "Juan", role: "Frontend" },
  { id: 2, name: "Maria", role: "Backend" },
  { id: 3, name: "Pedro", role: "DevOps" },
];

export async function getEmployees() {
  return employees;
}

export async function addEmployee(employee: Employee) {
  employees.push(employee);
  return employee;
}
