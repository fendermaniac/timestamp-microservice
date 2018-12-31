import express from 'express';
import { isNullOrUndefined } from 'util';

const app = express();
const PORT = 3000;


app.get('/api/timestamp/', (req,res) => {
    const now = new Date();
    // const date = Number(Date.now());
    const unix = now.getTime();
    const utc = now.toUTCString();
    res.json({unix, utc})
});

app.get('/api/timestamp/:date', (req,res) => {
    // this is the middleware that transforms the date object
    let rawDate = req.params.date;
    let date = new Date(req.params.date);
    let unix = date.getTime();  
    let utc = date.toUTCString();
    // everything above is middleware
     res.send(date === null);

    // if (Date(req.params.date) === null) {
    //     res.send({'error': 'Invalid Date'})
    // } else {
    //     res.send({rawDate, date, unix, utc}); 
    // }
    
});

app.listen(PORT, () => {
    console.log(`Timestamp Microservice is running on port ${PORT}...`);
});
