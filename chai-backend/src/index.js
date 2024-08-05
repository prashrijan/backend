
import dotenv from "dotenv"
import app from "./app.js"
import connectDB from "./db/index.js";


dotenv.config({
    path : './.env'
})

connectDB()
.then(
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is ready at port: ${process.env.PORT}`);
    })
)
.catch(error => {
    console.log("MonogDb connection error" ,error)
    throw error;
})



// ;(async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("Something went wrong connecting", error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening om port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log("Error: ", error);
//         throw error;
//     }
// })()