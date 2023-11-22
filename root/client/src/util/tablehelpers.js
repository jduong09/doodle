export const calculateTimeFrame = (startTime, duration) => {
  const [hour, minutes] = startTime.split(':');
  console.log(hour);
  const timeSuffix = parseInt(hour) > 12 ? 'PM' : 'AM';
  const convertedHours = hour < 12  ? `${hour === '00' ? 12 : parseInt(hour)}` : `${hour - 12 === 0 ? 12 : parseInt(hour) - 12}`;
  let newMinutes = parseInt(minutes) + parseInt(duration);
  
  if (newMinutes < 60) {
    if (convertedHours === '0') {
      return `12:${minutes}${timeSuffix} - 12:${newMinutes}${timeSuffix}`;
    } else {
      return `${convertedHours}:${minutes}${timeSuffix} - ${convertedHours}:${newMinutes}${timeSuffix}`;
    }
  } else {
    let newHour = newMinutes < 120 ? parseInt(convertedHours) + 1 : parseInt(convertedHours) + 2;
    console.log(newHour);
    newMinutes = duration < 60 ? newMinutes - 60 : newMinutes - duration;

    let endTimeSuffix = newHour >= 12 ? 'PM' : 'AM';

    if (newHour >= 12 && timeSuffix === 'PM') {
      endTimeSuffix = 'AM';
    }

    if (convertedHours === '0') {
      return `12:${minutes}${timeSuffix} - ${newHour > 12 ? newHour - 12 : newHour}:${newMinutes === 0 ? '00' : newMinutes}${endTimeSuffix}`;
    } else {
      return `${convertedHours > 12 ? `${parseInt(convertedHours) - 12}:${minutes}` : `${parseInt(convertedHours)}:${minutes}`}${timeSuffix} - ${newHour > 12 ? newHour - 12 : newHour}:${newMinutes === 0 ? '00' : newMinutes}${endTimeSuffix}`;
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

export const getDbTime = (date, startTime) => {
  const timestamp = new Date(`${date}T${startTime}`);
  return Intl.DateTimeFormat('default', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false, timeZone: 'UTC' }).format(timestamp);
}

export const getDayOfTheWeek = (dateObj) => {
  const utcDay = dateObj.getUTCDay();
  let dayOfWeek;

  switch(utcDay) {
    case 0:
      dayOfWeek = 'Sunday';
      break;
    case 1:
      dayOfWeek = 'Monday';
      break;
    case 2:
      dayOfWeek = 'Tuesday';
      break;
    case 3:
      dayOfWeek = 'Wednesday';
      break;
    case 4:
      dayOfWeek = 'Thursday';
      break;
    case 5:
      dayOfWeek = 'Friday';
      break;
    case 6:
      dayOfWeek = 'Saturday';
      break;
    default:
      break;
  }
  return dayOfWeek;
}

export const createPossibleTimeBlock = (startTime, duration) => {
  const span = document.createElement('span');
  const [hour, minutes] = startTime.split(':');
  const twelveHourStartTime = `${hour < 12  ? `${hour === '00' ? 12 : hour}:${minutes}` : `${hour - 12 === 0 ? 12 : hour - 12}:${minutes}`}`;
  const timeframe = calculateTimeFrame(twelveHourStartTime, duration);
  console.log(timeframe);
  const position = classTopPosition(minutes);

  span.innerHTML = timeframe;
  span.classList.add('temp-timeblock', position, `h-${duration}`);
  return span;
}