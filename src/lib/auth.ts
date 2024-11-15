// src/lib/auth.ts
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import Prisma from "../../lib/prisma"; // Pastikan path ini sesuai dengan struktur proyekmu
import { Lucia } from "lucia";
import { RoleUser } from "@prisma/client"; // Mengimpor tipe dari Prisma
import { cookies } from "next/headers"; // Mengimpor dari Next.js
import { cache } from "react";
import type { User, Session } from "lucia"; // Mengimpor tipe User dan Session dari Lucia

// Membuat Prisma adapter dengan Prisma session dan user
const adapter = new PrismaAdapter(Prisma.session, Prisma.user);

// Konfigurasi Lucia dengan adapter Prisma
export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production", // Sesuaikan dengan environment
    },
  },
  getUserAttributes: (attributes) => {
    return {
      name: attributes.name,
      role: attributes.role,
      email: attributes.email,
      passport: attributes.passport,
    };
  },
});

// Fungsi untuk mengambil user dan session secara aman dengan cache
export const getUser = cache(
  async (): Promise<
    { user: User; session: Session } | { user: null; session: null }
  > => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
    if (!sessionId) {
      return {
        user: null,
        session: null,
      };
    }

    const result = await lucia.validateSession(sessionId);

    try {
      if (result.session && result.session?.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id);

        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );
      }
    } catch (error) {
      console.error("Error setting cookies", error);
    }

    return result;
  }
);

// Deklarasi tipe untuk module lucia
declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: {
      name: string;
      email: string;
      role: RoleUser;
      passport: string | null;
    };
  }
}
