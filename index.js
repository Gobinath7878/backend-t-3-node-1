const express = require('express');
const fs = require('fs');
require("dotenv").config();

const app = express();


app.use(express.json())


  let timeStamp = new Date()
  let dat = timeStamp.getDate();
  let month = timeStamp.getMonth() +1;
  let year = timeStamp.getFullYear();
  let hours = timeStamp.getHours()
  let minutes = timeStamp.getMinutes()
  let seconds = timeStamp.getSeconds()
  let date = `${year}${month}${dat}`;
  let dateTime = `${date}-${hours}${minutes}${seconds}`
  
  fs.appendFile(`./Create/${dateTime}.txt`, `${timeStamp}`, function (err) {
    if (err) {
      console.log(err)
      console.log('done')
    }
  })
  
  fs.readdir('./Create', (err, files) => {
    if (err) console.log(err)
    else {
      app.get('/', function (req, res) {
        res.send(files);
      })
    }
    console.log(files)
  })



const PORT=process.env.PORT || 5000  ;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})


