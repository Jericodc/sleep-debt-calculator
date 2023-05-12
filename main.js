const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 7;
      break;
    case 'saturday':
      return 6;
      break;
    case 'sunday':
      return 9;
      break;
  };
};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

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