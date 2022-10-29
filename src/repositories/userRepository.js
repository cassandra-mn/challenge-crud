import prisma from '../../config/database.js';

export async function create(user) {
    await prisma.user.create({data: user});
}

export async function findUsers() {
    return await prisma.user.findMany();
}

export async function findById(id) {
    return await prisma.user.findUnique({where: {id}});
}

export async function findByEmail(email) {
    return await prisma.user.findUnique({where: {email}});
}

export async function update(id, user) {
    await prisma.user.update({where: {id}, data: user});
}

export async function remove(id) {
    await prisma.user.delete({where: {id}});
}