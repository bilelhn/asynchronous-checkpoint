//------------- task 1-------------
// async function iterateWithAsyncAwait(arr){
//     for(let i=0;i<arr.length;i++){
//         setTimeout(() => {
//            console.log(arr[i]);
//         }, 1000*i);
//     }
// }
// iterateWithAsyncAwait(['a1','a2','a3']);


// ------------ task 2 ------------
// async function awaitCall(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log(await data.json() );
// }

// ----------tak 3 ----------

// async function awaitCall() {
//     try {
//         let data = await fetch('https://jsonplaceholder.typicode.com/users');
//         console.log(await data.json());
//     } catch (error) {
//         console.log(`error is: ${error}`);
//     }
// }
// awaitCall();

function func1(){
   return 'message 1';
}
function func2(){
    return 'message 2';
}
function func3(){
    return 'message 3';
}
async function  chainedAsyncFunction(){
    let tab=[func1(), func2(), func3()];
    for(let i=0; i<tab.length;i++)
    {

            setTimeout( async() => {
               console.log(tab[i]);
            }, 1000*i);
  }
}
chainedAsyncFunction();
