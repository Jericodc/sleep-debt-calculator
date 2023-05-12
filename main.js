const getSleepHours = day => {
    const hours = {
    Monday: 8,
    Tuesday: 7,
    Wednesday: 6,
    Thursday: 8,
    Friday: 7,
    Saturday: 6,
    Sunday: 9
    };
    return hours[day];
  }

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  
  if (actualSleepHours === idealSleepHours) {
    return console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    return console.log(`You sleep ${actualSleepHours}. You got more sleep than needed.`);
  } else if (actualSleepHours < idealSleepHours) {
    return console.log(`You just sleep ${actualSleepHours}. You should get some rest.`);
  };
};

calculateSleepDebt();