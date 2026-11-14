import express from "express"

const app = express()


app.get("/weather",(req,res)=>{
    res.status(200).json({
        city: "Lahore",
        temp_c: 30,
    });
});
app.listen(5500,()=>{
    console.log("Server is Running on port 5500")
})