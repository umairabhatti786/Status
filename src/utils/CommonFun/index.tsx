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
      const duration = moment.duration(now.diff(inputDate));
      const hours = duration.hours();
      const minutes = duration.minutes();
      console.log("hours",hours)
  
      if (hours > 0) {
        return `${hours}h ago`;
      }
      if (minutes > 0) {
        return `${minutes}m ago`;
      }
      return 'few second ago';
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