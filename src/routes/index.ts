const router = require("express").Router();
import express, { NextFunction, Response, Request } from 'express';

router.get('/', (req: Request, res: Response) => {
  res.render('home');
}); 

module.exports = router;
