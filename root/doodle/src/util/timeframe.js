export const calculateTimeFrame = (startTime, duration) => {
  console.log(duration);
  /* Given a start time, and a duration of meeting, return string of meeting time in format x - x */
  /* Available start times: :00, :15, :30, :45 */
  // Exampele: 12:00
  const splitTime = startTime.split(':');
  // --> ['12', '00']
  // console.log(splitTime);

  const minutes = parseInt(splitTime[1]);
  let newMinutes = minutes + parseInt(duration);

  if (newMinutes < 60) {
    return `${startTime} - ${splitTime[0]}:${newMinutes}`;
  } else {
    let newHour = newMinutes < 120 ? parseInt(splitTime[0]) + 1 : parseInt(splitTime[0]) + 1;
    newMinutes -= 60;
    return `${startTime} - ${newHour > 12 ? newHour - 12 : newHour}:${newMinutes === 0 ? '00' : newMinutes}`;
  }
}

/*
console.log(calculateTimeFrame('12:00', '30'));
console.log(calculateTimeFrame('12:00', '60'));
console.log(calculateTimeFrame('12:15', '90'));
console.log(calculateTimeFrame('12:00', '90'));
*/