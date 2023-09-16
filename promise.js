//using promise, diplay data from API

fetch('https://api.agify.io?name=meelad').then(
    (response)=>{
        if(!response.ok){
            throw new Error("network response was bad")
        }
        return JSON.stringify(response.json)
    }
).then((data)=>{
    console.log(`data from API `+{data})
}).catch((error)=>{
    console.log(error+" ERROR!!!")
})

