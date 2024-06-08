import moment from 'moment-timezone';

moment.tz.setDefault('America/New_York');

export default function (time) {
  return moment(new Date(time));
}
