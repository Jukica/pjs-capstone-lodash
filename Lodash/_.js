const _ = {
  clamp(number, lower, upper) {
      const clamp1 = Math.max(number, lower);
      const clamp2 = Math.min(clamp1, upper);
      return clamp2
    },

  inRange(number, start, end) {
    if(end === undefined) {
      end = start;
      start = 0;
    };
    if(start > end) {
      let var1 = end;
      end = start;
      start = var1;
    };
    const isInRange = (start <= number && number < end);
      return isInRange;
    },

    words(string) {
      const array = string.split(' ')
      return array
    },

    pad(string, length) {
      if(length <= string.length) {
        return string;
    }
      let totalPad = Math.abs(string.length - length);
      let startPad = Math.floor(totalPad / 2);
      let endPad = totalPad - startPad;
      const newString = (' '.repeat(startPad) + string + ' '.repeat(endPad))
      return newString
    },

    has(object, key) {
       let hasValue;
        if(object[key] != undefined) {
         hasValue = true
       } else {
         hasValue = false
       }
      return hasValue
    },

    invert(object) {
      let newObject = {}
      for(const key in object) {
        let originalValue = object[key];
        newObject.originalValue = key;
      }
      return newObject
    },


    findKey(object, predicate) {
      for(let key in object) {
        value = object[key];
        predicateReturnValue = predicate(value);
        if(predicateReturnValue) {
          return key;
          }
        }
      return undefined;
    },

    drop(array, droppedItems) {
      let newArray = array.slice(droppedItems);
      if(droppedItems == undefined) {
        newArray = array.slice(1)
      };
      return newArray;
    },



    dropWhile(array, predicate) {
      const returnPredicate = (element, index) => {
        return !predicate(element, index, array);
      };
      let dropNumber = array.findIndex(returnPredicate);
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray;

    },


    chunk(array, size) {
      if(size == undefined) {
        size = 1;
      };
      let chunkedArray = []
      for(i = 0; i < array.length; i+=size) {
        let arrayChunk = array.slice(i, i+size);
        chunkedArray.push(arrayChunk);
      }
      return chunkedArray
    }

}






// node lodash/_.js
// Do not write or modify code below this line.
module.exports = _;
