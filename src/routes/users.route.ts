import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";


const usersRoute = Router()

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
    const users = [
        { 
            userName: "David",
            userID: 1,
            birthDate: "07/09/2001"
        }
    ]

    res.status(StatusCodes.OK).json(users[0])
})

usersRoute.get("/users/:uuid", (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid

    res.status(200).json({ uuid })
})

usersRoute.post("/users", (req: Request<{ uuid: string }>, res:Response, next:NextFunction) => {
    const newUser = req.body
    res.status(StatusCodes.CREATED).json(newUser)
})

usersRoute.put("/users/:uuid", (req: Request<{ uuid: string }>, res:Response, next:NextFunction) => {
    const uuid = req.params.uuid
    const modifiedIUer = req.body

    modifiedIUer.uuid = uuid
    res.status(StatusCodes.OK).json(modifiedIUer)
})

usersRoute.delete("/users/:uuid", (req: Request<{ uuid: string }>, res:Response, next:NextFunction) => {
    const uuid = req.params.uuid

    res.status(StatusCodes.OK).send()
})

export default usersRoute