import express, { Request, Response, NextFunction } from 'express'

const app = express()

app.use('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({foo: 'Mudou'})
})

app.listen(3333, () =>{
    console.log("rodando!")
})