class Sorter {
  constructor() {
    this.arr = []; // создаём "store" внутри instance
    // функция сортировки по возрастанию
    this.incFunc = function (a, b) { 
      return a - b;
    }
  }
  // метод добавления элементов в "store"
  add(element) {
    return this.arr.push(element);
  }
  // возвращаем указанный по индексу элемент
  at(index) {
    return this.arr[index];
  }
  // возвращаем количество элементов в "store"
  get length() {
    return this.arr.length;
  }
  // возвращаем "store"
  toArray() {
    return this.arr;
  }
  // принимаем индексы существующих элементов и сортиуем только их
  sort(indices) {
    
    var tempArr = [];
    // сортировка по возрастанию массива индексов
    indices.sort(function (a, b) {
      return a - b;
    });

    // заносим нужные для сортировки элементы во временный массив
    for (var i = 0; i < indices.length; i++) {
      tempArr.push(this.arr[indices[i]]);
    }

    
    // сортировка
    tempArr.sort(this.incFunc);
    // возвращаем элементы обратно в "store"
    for (var i = 0; i < indices.length; i++) {
      this.arr[indices[i]] = tempArr[i];
    }
  }

  // принимаем переданную функцию для порядка сортировки
  setComparator(compareFunction) {
    this.incFunc = compareFunction;
  }
}

module.exports = Sorter;