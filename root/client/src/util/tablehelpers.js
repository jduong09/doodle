export const calculateTimeFrame = (startTime, duration) => {
  const splitTime = startTime.split(':');

  const minutes = parseInt(splitTime[1]);
  let newMinutes = minutes + parseInt(duration);
  let adjustedHour = splitTime[0] > 12 ? `${parseInt(splitTime[0]) - 12}` : splitTime[0];

  if (newMinutes < 60) {
    if (splitTime[0] === '0') {
      return `${12}:${splitTime[1]} - ${adjustedHour}:${newMinutes}`;
    } else {
      return `${adjustedHour}:${splitTime[1]} - ${adjustedHour}:${newMinutes}`;
    }
  } else {
    let newHour = newMinutes < 120 ? parseInt(splitTime[0]) + 1 : parseInt(splitTime[0]) + 2;
    newMinutes = duration < 60 ? newMinutes - 60 : newMinutes - duration;

    if (splitTime[0] === '0') {
      return `${12}:${splitTime[1]} - ${newHour > 12 ? newHour - 12 : newHour}:${newMinutes === 0 ? '00' : newMinutes}`;
    } else {
      return `${splitTime[0] > 12 ? `${parseInt(splitTime[0]) - 12}:${splitTime[1]}` : startTime} - ${newHour > 12 ? newHour - 12 : newHour}:${newMinutes === 0 ? '00' : newMinutes}`;
    }
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
  if (duration === 15) {
    return 'h-25';
  } else if (duration === 30) {
    return 'h-50';
  } else if (duration === 45) {
    return 'h-75';
  } else if (duration === 60) {
    return 'h-100';
  }
}

export const getDbTime = (date, startTime) => {
  const timestamp = new Date(`${date}T${startTime}`);
  return Intl.DateTimeFormat('default', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false, timeZone: 'UTC' }).format(timestamp);
}