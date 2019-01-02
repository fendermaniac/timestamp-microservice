import moment from 'moment';

const formats = [
    'X',
    'MMMM D, YYYY',
    'MMMM D YYYY',
    'MMM D, YYYY',
    'MMM D YYYY',
    'D MMMM YYYY',
    'D MMM YYYY',
  ];

const dateParse = moment(date, formats, true);

export default moment;