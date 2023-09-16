let sampleArr = [1,2,3,4]

Array.prototype.customFilter = function(callback){
    let result = []
    for(let i=0; i< this.length; i++){
        callback(this[i], i, this) ? result.push(this[i]): this[i]
    }
    return result

}

let testArr = sampleArr.customFilter((val,i, arr)=>{
    return val > 3
})

console.log(testArr);