import * as userService from '../services/userService.js';

export function hello (req, res) {
    const data = userService.hello();
    res.status(200).send(data);
}

export async function create(req, res) {
    const {body} = req;
    
    try {
        const error = await userService.create(body);
        if (!error) res.status(201).send('Usuário criado!');
        else res.status(error.error).send(error.message);
    } catch(e) {
        console.log(e);
        res.status(500).send('Ocorreu um erro!');
    }
}

export async function findUsers(req, res) {
    try {
        const users = await userService.findUsers();
        res.status(200).send(users);
    } catch(e) {
        console.log(e);
        res.status(500).send('Ocorreu um erro!');   
    }
}

export async function findById(req, res) {
    const {id} = req.params;

    try {
        const users = await userService.findById(+id);
        res.status(200).send(users);
    } catch(e) {
        console.log(e);
        res.status(500).send('Ocorreu um erro!');
    }
}

export async function update(req, res) {
    const {id} = req.params;
    const user = req.body;

    try {
        const error = await userService.update(+id, user);
        if (!error) res.status(200).send('Dados atualizados!');
        else res.status(error.error).send(error.message);
    } catch(e) {
        console.log(e);
        res.status(500).send('Ocorreu um erro!');
    }
}

export async function remove(req, res) {
    const {id} = req.params;

    res.status(501).send();
}