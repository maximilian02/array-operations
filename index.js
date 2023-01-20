const FlattenArray = (arr) => {
   if (arr instanceof Array) {
      if (arr.length === 0) {
          return []
      } 
      if (arr.length > 0) { 
          return FlattenArray(arr[0]).concat(FlattenArray(arr.slice(1)))
      } 
   }
   return [arr]  
}

let arr = [
    1,
    [2],
    [[3], [4]],
    [5],
    [[[6, 7, 8]]]
]
const result = FlattenArray(arr)
 
// Result: [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log('result', result)

const CHECK_FOR_VALUE_2 = 2
const CHECK_FOR_VALUE_9 = 9
console.log(`Look up for value: ${CHECK_FOR_VALUE_2}`, result.includes(CHECK_FOR_VALUE_2))
console.log(`Look up for value: ${CHECK_FOR_VALUE_9}`, result.includes(CHECK_FOR_VALUE_9))
