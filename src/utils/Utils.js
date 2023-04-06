import Moment from 'moment';

export function tglIndoNormal(tgl) {
  if (tgl) {
    return Moment(tgl).format('DD MMMM YYYY');
  }
  return '';
}
