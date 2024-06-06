import { Router, Request, Response } from "express";
import getRates from "../api/api";

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    const { from, to, amount } = req.query;

    if (!from || !to || !amount) {
        return res.status(400).json({ error: 'Provide from, to, and amount query parameters' });
    }

    try {
        const data = await getRates();
        const rates = data.rates;

        if (!rates[from as string] || !rates[to as string]) {
            return res.status(400).json({ error: 'Invalid currency code' });
        }

        const convertedAmount = (Number(amount) / rates[from as string]) * rates[to as string];
        res.status(200).json({ from, to, amount, convertedAmount });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default router;