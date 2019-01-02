import moment from 'moment';

const dateParse = (req, res) {
  let date =  req.params.date;
  // Check if format is a natural date
  if (isNaN(date)) {
  // Check for valid date
    if (moment(date, 'MMMM DD YYYY').isValid()) {
      let unix = Math.round((new Date(date).getTime()/1000));
      let utc = moment(date).format('ddd, DD MMM YYYY HH:mm:ss z');
      res.send({unix, utc})
    }
    else {
      res.json({'error': 'Invalid Date'});
    }

  } else {
    if (moment.unix(date).isValid()){
      let unix = moment.unix(date);
      let utc = moment(date).format('ddd, DD MMM YYYY HH:mm:ss z');
    } else {
      res.json({'error': 'Invalid Date'});
    }
  }
}