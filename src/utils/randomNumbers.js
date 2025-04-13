export const generateRandomNumbers = (start, end) => {
    const randomNumbers = [];
    for (let i = 0; i < 6; i++) {
      const number = Math.floor(Math.random() * (end - start + 1)) + start;
      if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
      }
    }
    return randomNumbers;
  };
  