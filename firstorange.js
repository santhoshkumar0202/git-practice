//This is supper perfect added firstorange to orangemode
console.log("print line 1")
 let promises= new Promise((resolve,reject)=>{
    setTimeout(()=>{
    if("hello".length>3){
        resolve("hello is greater than 3")
    }else{
        reject("not greater than 3")
    }},1000)
}) .then((result)=>{console.log(result)})




console.log("last line")


async function linear(){
    let name =await "san"
    console.log(name)
    return "hello"

}

let res=linear().then((r)=>{console.log(r)})

console.log(res)
