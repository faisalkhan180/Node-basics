import Express  from "express";

const app = Express();


app.get("/", (req, res)=>{
    res.send("Hello from Express")
});

const PORT= 8000;

app.listen(PORT, ()=>{
    console.log("Server is listening on port: "+ PORT);
})
  