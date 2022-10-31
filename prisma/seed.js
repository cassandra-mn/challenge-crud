import prisma from "../config/database.js";

async function main() {
  const hobbies = [
    { id: 1, hobby: "Ler" },
    { id: 2, hobby: "Escrever" },
    { id: 3, hobby: "Cozinhar" },
    { id: 4, hobby: "Desenhar" },
    { id: 5, hobby: "Treinar" },
  ];

  await prisma.user.deleteMany();
  await prisma.userHobbies.deleteMany();
  await prisma.hobbies.deleteMany();
  await prisma.hobbies.createMany({ data: hobbies });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
