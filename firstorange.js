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




function reverse1(str){
    if(!(str.length>1)){
         return str;
    }
    

    return str.charAt(str.length-1)+ reverse1(str.substring(0,str.length-1))


}


let helo="hello"
console.log(reverse1("santhosh kumar singuru"))






liste=["santhosh","kumar","singuru"]


console.log(liste.join(" ").replace(/\b\w/g,(chare)=>{
    return chare.toUpperCase();
}).split(" "))



