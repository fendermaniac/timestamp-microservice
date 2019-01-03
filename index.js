import express from 'express';
import moment from 'moment';

const app = express();
const PORT = 3000;

const dateParse = (req, res) => {
    let date =  req.params.date;
    // Check if format is a natural date
    if (isNaN(date)) {
      if (moment(date, 'MMMM DD YYYY').isValid()) {
        let unix = Math.round((new Date(date).getTime()/1000));
        let utc = moment(date).format('ddd, DD MMM YYYY HH:mm:ss');
        res.send({unix, utc})
      }
      else {
        res.json({'error': 'Invalid Date'});
      }
    // Check if format is a unix date
    } else {      
      if (moment.unix(date).isValid()){
        let unix = date;
        let utc = moment.unix(date).format('ddd, DD MMM YYYY HH:mm:ss');
        res.send({unix, utc});
      } else {
        res.json({'error': 'Invalid Date'});
      }
    }
  }

app.use("/", express.static("./public"));

app.get('/api/timestamp/', (req,res) => {
    const now = new Date();
    // const date = Number(Date.now());
    const unix = Math.round(now.getTime() / 1000);
    const utc = now.toUTCString();
    res.json({ unix , utc })
});

app.get('/api/timestamp/:date', dateParse);
   
app.listen(PORT, () => {
    console.log(`Timestamp Microservice is running on port ${PORT}...`);
});
