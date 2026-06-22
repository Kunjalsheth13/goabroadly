import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function getAdminSession() {
  return getServerSession(authOptions);
}

export async function requireAdminSession() {
  const session = await getAdminSession();
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }
  return session;
}
