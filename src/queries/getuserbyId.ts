import { Request, Response } from "express";

import {getUserByid} from "../models/userModel";

export async function getuse(req: Request, res: Response): Promise<void> {
    try {
        const users = await getUserByid();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json(`Erro ao listar os usuarios -> ${error}`);
    }
}