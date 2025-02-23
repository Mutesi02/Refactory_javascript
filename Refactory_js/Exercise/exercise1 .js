//Break out session
// Get the current date and time
let now = new Date();

// Get the current year
console.log("Year:", now.getFullYear());

// Get the current month (Months are zero-based, so add 1)
console.log("Month:", now.getMonth() + 1);

// Get the current date (day of the month)
console.log("Date:", now.getDate());

// Get the current day of the week (0 = Sunday, 6 = Saturday)
console.log("Day:", now.getDay());

// Get the current hours
console.log("Hours:", now.getHours());

// Get the current minutes
console.log("Minutes:", now.getMinutes());

// Get the seconds elapsed from January 1, 1970 to now
console.log("Seconds elapsed since 1970:", Math.floor(now.getTime() / 1000));
