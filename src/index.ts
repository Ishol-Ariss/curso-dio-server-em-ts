import express, { Request, Response, NextFunction } from 'express'
import usersRoute from './routes/users.route'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(usersRoute)

app.listen(3333, () =>{
    console.log("rodando!")
})