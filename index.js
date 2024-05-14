const express = require('express');
const app = express();

app.get('/',(req,res)=>res.json({message:'hello'}))
app.listen(3009, () => {
    console.log(`Server is running on port `);
});
