import * as userRepository from "../repositories/userRepository.js";

export async function create(user) {
  const userExist = await userRepository.findByEmail(user.email);
  if (userExist) return { error: 409, message: "Usuário já existente!" };

  const { name, email, state, city, hobbies } = user;
  const { id: userId } = await userRepository.create({ name, email, state, city });
  
  hobbies.forEach(async (hobby) => {
    const { id: hobbyId } = await userRepository.userHobbiesId(hobby);
    await userRepository.userHobbies(userId, hobbyId);
  });
}

export async function findById(id) {
  const user = await userRepository.findById(id);
  const userHobbies = await userRepository.findHobbiesByUserId(id);

  const promise = userHobbies.map(async (userHobby) => {
    const {hobbyId} = userHobby;
    const {hobby} = await userRepository.findHobbyById(hobbyId);
    return hobby;
  });

  try {
    const hobbiesByUser = await Promise.all(promise);
    return {...user, hobbies: hobbiesByUser};
  } catch(e) {
    console.log(e);
  }
}

export async function findUsers() {
  const users = await userRepository.findUsers();

  const promise = users.map(async (user) => {
    return await findById(user.id);
  });

  try {
    const usersWithHobbies = await Promise.all(promise);
    return usersWithHobbies;
  } catch(e) {
    console.log(e);
  }
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
