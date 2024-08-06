export default function errorHandler(error, req, res, next){
    console.log(error.status)
    if(error.status === 404){
        res.status(404).send({
            status: 404,
            value: "From Handler: Ruta no encontrada"
        })
    }
    else if(error.status === 400){
        res.status(400).send({
            status: 400,
            value: "From Handler: Check the incoming Data"
        })
    }
    else{
        res.status(500).send({
            status: 500,
            value: "From Handler: Internal Server Error"
        })
    }
    next()
}