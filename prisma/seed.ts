import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"; // Pastikan menggunakan bcryptjs

const prisma = new PrismaClient();

async function main() {
  const password = bcrypt.hashSync("admin123", 10);
  const userSeed = await prisma.user.create({
    data: {
      email: "admin@mail.com",
      name: "Admin",
      role: "ADMIN",
      password,
    },
  });
  console.log(userSeed);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
