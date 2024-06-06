import { Router, Request, Response } from "express";
import getRates from "../api/api";

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const data = await getRates();
        res.status(200).json(data.rates);
    } catch (error: any) {
        res.status(500).json({error: error.message} );
    }
});

export default router;