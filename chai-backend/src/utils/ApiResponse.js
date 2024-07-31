class ApiResponse{
    constructor(message = "Sucess", statusCode, data){
        this.message = message,
        this.data = data,
        this.success = statusCode < 400
        this.statusCode = statusCode
    }
}

export default ApiResponse