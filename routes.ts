import { Router, Request, Response } from "express";
import ratesController from './src/controllers/ratesController';
import convertController from './src/controllers/convertController';

const router: Router = Router();

router.use('/rates', ratesController);
router.use('/convert', convertController);
router.get('*', (req: Request, res: Response) => {
    res.status(404).json({ error: 'Page not found' });
});

export default router;