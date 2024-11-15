import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

// Deklarasikan prisma sebagai PrismaClient, atau undefined untuk globalThis
declare const globalThis: {
  prisma?: PrismaClient;
};


if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // Cegah multiple instances dalam pengembangan
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
  }
  prisma = globalThis.prisma;
}

export default prisma;
