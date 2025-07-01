const errorHandler = (error, req, res, next) => {
    console.log(error);
    const errorMessage = error.message || "Internal server error";
    const statusCode = error.statusCode || 500
    res.status(statusCode).send({status: "Fail", message: errorMessage})
};
export default errorHandler;