import prisma from "../../config/database.js";

export async function create(user) {
  return await prisma.user.create({ data: user });
}

export async function findUsers() {
  return await prisma.user.findMany();
}

export async function findById(id) {
  return await prisma.user.findUnique({ where: { id } });
}

export async function findByEmail(email) {
  return await prisma.user.findUnique({ where: { email } });
}

export async function update(id, user) {
  await prisma.user.update({ where: { id }, data: user });
}

export async function remove(id) {
  await prisma.user.delete({ where: { id } });
}

export async function userHobbies(userId, hobbyId) {
  await prisma.userHobbies.create({ data: { userId, hobbyId } });
}

export async function userHobbiesId(hobby) {
  return await prisma.hobbies.findUnique({ where: { hobby } });
}

export async function findHobbies() {
  return await prisma.hobbies.findMany();
}

export async function findUserHobbies() {
  return await prisma.userHobbies.findMany();
}

export async function findHobbiesByUserId(userId) {
  return await prisma.userHobbies.findMany({ where: { userId } });
}

export async function findHobbyById(id) {
  return await prisma.hobbies.findUnique({ where: { id } });
}
