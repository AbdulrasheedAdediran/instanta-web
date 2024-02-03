const getRandomValue = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomArray = (
  length: number = arrayLength,
  min: number = minValue,
  max: number = maxValue,
) => {
  const randomArray = [];

  for (let i = 0; i < length; i++) {
    const randomValue = getRandomValue(min, max);
    randomArray.push(randomValue);
  }

  return randomArray;
};

const minValue = 20000;
const maxValue = 350000;
const arrayLength = 12;
