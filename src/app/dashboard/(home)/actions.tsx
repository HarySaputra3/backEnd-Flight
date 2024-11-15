"use server";
import { getUser, lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout(): Promise<void> {
  const { session } = await getUser();

  if (!session) {
    // Jika tidak ada sesi, arahkan ke halaman login
    redirect("/dashboard/signin");
    return;
  }

  // Invalidate session
  await lucia.invalidateSession(session.id);

  // Buat cookie kosong setelah logout
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  // Redirect ke halaman login setelah logout
  redirect("/dashboard/signin");
}
