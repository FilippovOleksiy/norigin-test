import convertDateToObject from './convertDateToObject';

export default (date, range) => {
  const generatedDays = [];
  const midleElement = convertDateToObject(date);

  for (let index = range[0]; index <= range[1]; index++) {
    if (index === 0) {
      generatedDays.push(midleElement);
    } else {
      generatedDays.push(
        convertDateToObject(
          new Date(
            midleElement.year,
            midleElement.month,
            midleElement.day + index
          )
        )
      );
    }
  }
  return generatedDays;
};
