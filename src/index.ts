import express, { Request, Response, NextFunction } from 'express'
import usersRoute from './routes/users.route'

const app = express()

app.use(usersRoute)

app.use('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({foo: 'Mudou dnv'})
})

app.listen(3333, () =>{
    console.log("rodando!")
})