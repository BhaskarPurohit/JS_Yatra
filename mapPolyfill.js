let myArr = [1,2,3,4]

let mappedArr = myArr.map((val)=>{return val+2}) //adds 2 to each element

console.log(mappedArr);

//polyfill for map

Array.prototype.customMap = function(callback){
    const newMap = []
    for(let i =0; i< this.length; i++){
        newMap.push(callback(this[i], i, this))
    }
    return newMap

}

let finalArr = myArr.customMap((val)=>{return val*10})

console.log(finalArr)