import { Request, Response } from "express";

import {createUser, User } from "../models/userModel";

export async function create(req: Request, res: Response): Promise<void> {
    try {
        //a constante user, guarda o usuario enviado pelo frontend e passa para o método createUser
        const user: Omit<User, "id"> = req.body
        const rs = await createUser(user);
        res.status(201).json(`Cadastro realizado -> ${rs}`);
    }
    catch (err) {
        res.status(500).json(`Erro ao tentar cadastrar ${err}`);
    }
}