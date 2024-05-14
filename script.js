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
async function awaitCall(){
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(await data.json() );
}
awaitCall();