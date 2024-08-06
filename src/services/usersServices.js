import User from "../models/User.js"

export const getAllUsers = async () =>{
    try {
        console.log('Select * from User Table')
        const response = await User.findAll()
        return {
            status : 200,
            value: response
        }
    } catch (error) {
        throw error
    }
}


export const postUser = async (document) =>{
    try {
        console.log('Insert Query to User Table')
        console.log(document)
        const response = await User.create(document)
        return {
            status : 200,
            value: response
        }
    } catch (error) {
        if(error.name === 'SequelizeValidationError'){
            error.status = 400
        }
        throw error
    }
}

export const putUser = async (id, updateDocument) =>{
    try {
        console.log('Update Query to User Table')
        console.log(updateDocument)
        const response = await User.update(
            updateDocument, 
            { 
                where : {id : id}
            })
        return response[0] !== 0 ? {
            status : 200,
            value: {updatedID : response[0]}
        }:{
            status : 400,
            value: 'ID not Found'
        }
    } catch (error) {
        if(error.name === 'SequelizeValidationError'){
            error.status = 400
        }
        throw error
    }
}

export const deleteUser = async (id) =>{
    try {
        console.log('Delete Query to User Table')
        const response = await User.destroy(
            { 
                where : {id : id}
            })
        return response !== 0 ? {
            status : 200,
            value: 'ID Deleted'
        }:{
            status : 400,
            value: 'ID not Found'
        }
    } catch (error) {
        if(error.name === 'SequelizeValidationError'){
            error.status = 400
        }
        throw error
    }
}