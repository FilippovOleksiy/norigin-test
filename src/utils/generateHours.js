import convertDateToObject from './convertDateToObject';

const getHoursFromRange = (hours, range = [0, 24]) => {
  let hoursFromRange = hours;
  if (hours < range[0]) {
    hoursFromRange = range[1] + hours;
  } else if (hours > range[1]) {
    hoursFromRange = hours - range[1];
  }
  return hoursFromRange;
};

export default (date, range) => {
  const generatedHours = [];
  const midleElement = convertDateToObject(date);

  for (let index = range[0]; index <= range[1]; index++) {
    if (index === 0) {
      generatedHours.push(midleElement.hours);
    } else {
      generatedHours.push(getHoursFromRange(midleElement.hours + index));
    }
  }
  return generatedHours;
};
