import express from 'express';
import exempleRouter from './exemple';

const router = new express.Router();

router.use('/exemple', exempleRouter);

export default router;
