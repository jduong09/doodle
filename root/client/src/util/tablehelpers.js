export const calculateTimeFrame = (startTime, duration) => {
  const splitTime = startTime.split(':');

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

export const classTopPosition = (minutes) => {
  if (minutes === '00') {
    return 'p-0';
  } else if (minutes === '15') {
    return 'p-15';
  } else if (minutes === '30') {
    return 'p-30';
  } else if (minutes === '45') {
    return 'p-45';
  }
}

export const classHeight = (duration) => {
  if (duration === '15') {
    return 'h-25';
  } else if (duration === '30') {
    return 'h-50';
  } else if (duration === '45') {
    return 'h-75';
  } else if (duration === '60') {
    return 'h-100';
  }
}