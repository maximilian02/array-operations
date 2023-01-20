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
const res = FlattenArray(arr)
 
// Result: [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log('res', res)
