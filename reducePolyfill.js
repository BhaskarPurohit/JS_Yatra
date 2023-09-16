const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);
// Expected output: 10


//polyfill for reduce
Array.prototype.customReduce = function(callback, initialValue){
    let accumulator = initialValue
    for (let i = 0; i< this.length; i++){
        accumulator = accumulator ? callback(accumulator, this[i], i,this) : this[i]
  
    }
    return accumulator
}

let checkReduce = array1.customReduce((acc,curr, i, arr)=>{
    return acc + curr
},0)

console.log(`custom reduce method ${checkReduce}`)