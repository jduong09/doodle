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

export const getDbTime = (date, startTime) => {
  const timestamp = new Date(`${date}T${startTime}`);
  return Intl.DateTimeFormat('default', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false, timeZone: 'UTC' }).format(timestamp);
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

export const convertIntToMonth = (monthInt) => {
  switch (monthInt) {
    case 0:
      return 'January';
    case 1:
      return 'February';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'June';
    case 6:
      return 'July';
    case 7:
      return 'August';
    case 8:
      return 'September';
    case 9:
      return 'October';
    case 10:
      return 'November';
    case 11:
      return 'December';
    default:
      return 'Error: Error finding month.';
  }
}

export const findDaysInMonth = (month, year) => {
  switch (month) {
    case 0:
      return 31;
    case 1:
      return leapyear(year) === true ? 29 : 28;
    case 2:
      return 31;
    case 3:
      return 30;
    case 4:
      return 31;
    case 5:
      return 30;
    case 6:
      return 31;
    case 7:
      return 31;
    case 8:
      return 30;
    case 9:
      return 31;
    case 10:
      return 30;
    case 11:
      return 31;
    default:
      return 'Error: error finding days.';
  }
}

const leapyear = (year) => {
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
};

export const findDayOfWeek = (day) => {
  switch (day) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return 'Error: Error finding Day Of Week.';
  }
}