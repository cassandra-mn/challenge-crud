import Error from 'next/error.js';
import * as userRepository from '../repositories/userRepository.js';

export function hello () {
    return {message: 'hello'};
}

export async function create(user) {
    const userExist = await userRepository.findByEmail(user.email);
    if (userExist) return {error: 409, message: 'Usuário já existente!'};

    return await userRepository.create(user);
}

export async function findUsers() {
    return await userRepository.findUsers();
}

export async function findById(id) {
    return await userRepository.findById(id);
}

export async function update(id, user) {
    const userExist = await userRepository.findById(id);
    if (!userExist) return {error: 404, message: 'Usuário não existente!'};

    return await userRepository.update(id, user);
}