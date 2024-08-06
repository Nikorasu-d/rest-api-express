export default function notFoundHandler  (req, res, next){
    const error = new Error('Ruta no encontrada')
    error.status = 404
    next(error)
}