"use server";
import { revalidatePath } from "next/cache";
import { addEmployee } from "@/app/lib/db";

export async function addEmployeeAction(formData: FormData) {
  const name = formData.get("name")?.toString() || "";
  const role = formData.get("role")?.toString() || "";

  if (name.length === 0) {
    throw new Error("Name is required");
  }
  if (role.length === 0) {
    throw new Error("Role is required");
  }

  const newEmployee = await addEmployee({ name, role });

  revalidatePath("/");
}
