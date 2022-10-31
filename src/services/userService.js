import * as userRepository from "../repositories/userRepository.js";

export async function create(user) {
  const userExist = await userRepository.findByEmail(user.email);
  if (userExist) return { error: 409, message: "Usuário já existente!" };

  const { name, email, address, hobbies } = user;
  const { id: userId } = await userRepository.create({ name, email, address });
  
  hobbies.forEach(async (hobby) => {
    const { id: hobbyId } = await userRepository.userHobbiesId(hobby);
    await userRepository.userHobbies(userId, hobbyId);
  });
}

export async function findUsers() {
  return await userRepository.findUsers();
}

export async function findById(id) {
  return await userRepository.findById(id);
}

export async function update(id, user) {
  const userExist = await userRepository.findById(id);
  if (!userExist) return { error: 404, message: "Usuário não existente!" };

  return await userRepository.update(id, user);
}

export async function remove(id) {
  const userExist = await userRepository.findById(id);
  if (!userExist) return { error: 404, message: "Usuário não existente!" };

  return await userRepository.remove(id);
}

export async function findHobbies() {
  return await userRepository.findHobbies();
}

export async function findUserHobbies() {
  return await userRepository.findUserHobbies();
}
