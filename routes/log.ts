import { Request, Response, NextFunction } from "express";

module.exports = function logInsecure() {
  return (req: Request, res: Response, next: NextFunction) => {
    let file: any = req.query.file ? req.query.file : "";
    let target: any = req.query.target ? req.query.target : "";
    console.log(`${file} target: `, JSON.stringify(target, null, 2));
  };
};
