import express from 'express';

const app = express();
const PORT = 3000;

app.use("/", express.static("./public"));

app.get('/test', (req,res) => {
    res.send(dateParse.now)
})

app.get('/api/timestamp/', (req,res) => {
    const now = new Date();
    // const date = Number(Date.now());
    const unix = now.getTime();
    const utc = now.toUTCString();
    res.json({ unix , utc })
});

app.get('/api/timestamp/:date', (req,res) => {
    let date = new Date(req.params.date);

    if (req.params.date) {
      let unix = date.getTime();  
      let utc = date.toUTCString();
      res.send({unix, utc}); 
    } else {
      res.send({'error': 'Invalid Date'});
    }
});
   
app.listen(PORT, () => {
    console.log(`Timestamp Microservice is running on port ${PORT}...`);
});
