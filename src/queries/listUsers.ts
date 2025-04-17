import { Request, Response } from "express";

import {getAllUsers} from "../models/userModel";

export async function getUsers(req: Request, res: Response): Promise<void> {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json(`Erro ao listar os usuarios -> ${error}`);
    }
}