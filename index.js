const express = require("express");
const app = express();
const PORT = 4000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(require("./router/router"));
app.listen(PORT,()=>{
    console.log(`Server has been started in http://localhost:${PORT}`);
})