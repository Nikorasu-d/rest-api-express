import { getAllUsers as getAllUsersService, postUser as postUserService, putUser as putUserService, deleteUser as deleteUserService } from "../services/usersServices.js"

export const getAllUsers = (req,res,next) =>{
    getAllUsersService().then((response)=>{
        res.status(response.status).send(response)
    }).catch((error) => {
        next(error)
    })
}

export const postUser = (req,res,next) =>{
    postUserService(req.body).then((response)=>{
        res.status(response.status).send(response)
    }).catch((error) => {
        console.log(error)
        next(error)
    })
}
export const putUser = (req,res,next) =>{
    putUserService(req.params.id, req.body).then((response)=>{
        res.status(response.status).send(response)
    }).catch((error) => {
        console.log(error)
        next(error)
    })
}
export const deleteUser = (req,res,next) =>{
    deleteUserService(req.params.id).then((response)=>{
        res.status(response.status).send(response)
    }).catch((error) => {
        console.log(error)
        next(error)
    })
}