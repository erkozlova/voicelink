const calcLeftAndRigthUmbrellas = (N) => {
  if (N % 2 === 0) {
    return [N / 2 - 1, N / 2];
  }

  return [Math.floor(N / 2), Math.floor(N / 2)];
};

const umbrellasSolve = (umbrellasCount, peopleCount) => {
  if (peopleCount >= umbrellasCount) {
    return [0, 0];
  }

  // массив групп зонтов. Группа - зонты без людей стоящие рядом. Элемент массива количество зонтов в группе
  let arr = [umbrellasCount];

  // res количество свободных зонтов слева и справа от текущего человека
  let res = [];

  // Человек выбирает наиболее большую группу зонтов и встает туда, разбивая её на две другие группы
  for (let i = 1; i <= peopleCount; i++) {
    const max = Math.max(...arr);
    arr.splice(arr.indexOf(max), 1);
    res = calcLeftAndRigthUmbrellas(max);
    arr = [...arr, res[0], res[1]];
  }

  return res;
};

module.exports = { umbrellasSolve };
