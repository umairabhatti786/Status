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
      // Same day: show time difference
      return inputDate.fromNow(); // Shows "3 minutes ago", "1 hour ago", etc.
    }
  
    if (now.diff(inputDate, 'days') === 1) {
      // Yesterday: show "Yesterday"
      return 'Yesterday';
    }
  
    if (now.diff(inputDate, 'days') < 7) {
      // Within the last week: show day of the week
      return inputDate.format('dddd');
    }
  
    // Older than a week: show date
    return inputDate.format('DD MMM YY');
  };