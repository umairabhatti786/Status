import moment from "moment";

export const isInteger = (value: number): boolean => {
    return Number.isInteger(value);
}


export function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }


export const dateFormat = date => {
  const now = moment();
  const inputDate = moment(date);

  if (now.isSame(inputDate, 'day')) {
    return inputDate.fromNow(); // Shows "3 minutes ago", "1 hour ago", etc.
  }

  return inputDate.calendar(null, {
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'DD MMM YY',
  });
};