let myArray = [2,3,4,5,6]

let mulTwo =    myArray.map((val)=>{
    return val*2

})

console.log(mulTwo);


//map has a for logic running in it
//polyfill for map

Array.prototype.myMapFunction = function(callback){
    const newArray = []
    for(let i =0; i< this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray

}

let tenX = myArray.myMapFunction((val)=>val*10)
console.log(tenX);

Array.prototype.mapPoly = function(callback){
    const polyArray = []
    for(let i =0; i < this.length ; i++){
        polyArray.push(callback(this[i], i, this))
    }
    return polyArray

}

let incrementTen = myArray.mapPoly((val)=> val +10)

console.log(incrementTen);



let sampleArr = [25,45,87,96,22]


Array.prototype.arrayPoly = function(callback){
    const modifiedArr = []
    for(let i=0; i< this.length; i++){
        modifiedArr.push(callback(this[i],i, this))
    }
    return modifiedArr
}


let resultArr = sampleArr.arrayPoly((val)=> val *100)
console.log(resultArr)







