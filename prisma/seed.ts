import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@goabroadly.com";
  const password = process.env.ADMIN_PASSWORD || "Admin123!";
  const hashedPassword = await bcrypt.hash(password, 12);

  await prisma.admin.upsert({
    where: { email },
    update: {},
    create: { email, password: hashedPassword },
  });

  const categories = [
    { name: "Study Tips", slug: "study-tips" },
    { name: "Visa Guide", slug: "visa-guide" },
    { name: "Country Insights", slug: "country-insights" },
    { name: "Scholarships", slug: "scholarships" },
  ];

  for (const cat of categories) {
    await prisma.blogCategory.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }

  console.log("Seed completed:", { email });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
