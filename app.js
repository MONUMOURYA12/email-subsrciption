// async fxn using fetched api

async function getData() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(300)
    },3500);
  })
}
// console.log("hello this is lucky");
 async function main(){
  console.log("hey hhhhhhh")
  let data= await getData()
console.log(data);
console.log("hey bby ");

 }

main();