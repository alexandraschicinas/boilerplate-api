import express from 'express';
import exempleRouter from './exemple';
import titlesRouter from './titles';

const router = new express.Router();

router.use('/exemple', exempleRouter);
router.use('/titles', titlesRouter);

export default router;
