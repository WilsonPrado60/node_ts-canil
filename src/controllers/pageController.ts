import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.send('Home no controller');
    //req.render('pages/search');
}

export const dogs = (req: Request, res: Response) => {

    //req.render('pages/search');
}

export const cats = (req: Request, res: Response) => {

    //req.render('pages/search');
}

export const fishes = (req: Request, res: Response) => {

    //req.render('pages/search');
}