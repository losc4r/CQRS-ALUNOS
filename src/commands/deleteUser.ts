import { Request, Response } from "express";

import {deleteUser} from "../models/userModel";

export async function deleta(req: Request, res: Response): Promise<void> {
    try {
        const rs = await deleteUser(parseInt(req.params.id))
        res.status(201).json(`Apagado -> ${rs}`);
    }
    catch (err) {
        res.status(500).json(`Erro ao tentar cadastrar ${err}`);
    }
}
