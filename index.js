// console.log("Hello world!")


// var myPromise=new Promise(()=>{})

// var myPromise=new Promise(()=>{     using arrow function(()=>) we can direclty write function
//     resolve("Success");
//     PromiseRejectionEvent("Error occured");
// });

// myPromise
// .then((data)=>console.log(data))
// .catch((err)=>{console.log(err)});




// var myPromise=new Promise((resolve, reject)=>{     //using arrow function(()=>) we can direclty write function
//     setTimeout(()=>{
//         resolve("success");
//     }, 5000);

//     setTimeout(()=> {
//         reject("Error occured");  
//     }, 2000)
// });

// myPromise
// .then((data)=>{console.log(data)})//success
// .catch((error)=>{console.log(error)});//failure

// console.log("this is at the last" );




// var myPromise=new Promise((resolve, reject)=>{     //using arrow function(()=>) we can direclty write function
//     setTimeout(()=>{
//         resolve("success");
//     }, 5000);
// });

// myPromise         

// //.then((data)=>data+="hey")
// //           OR
// .then((data)=>{         
//     data="hey"+data;
//     return data;
// })

// .then((data)=>{
//     console.log(data);
// })

// .catch((error)=>
//     {console.log(error);
// });

// console.log("thid id st last -2" );


// ______________________________________________________________________

// var myPromise=new Promise((resolve, reject)=>{     //using arrow function(()=>) we can direclty write function
//     setTimeout(()=>{
//         resolve("success");
//     }, 5000);

//     setTimeout(()=> {
//         reject("Error occured");  
//     }, 2000)
// });

// myPromise         

// //.then((data)=>data+="hey")
// //           OR
// .then((data)=>{         
//     data="hey"+data;
//     return data;
// })

// .then((data)=>{
//     console.log(data);
// })

// .catch((error)=>
//     {console.log("catch block ", error);
// });

// console.log("thid id st last -2" );

// ______________________________________________________________________

// ASYNC AND AWAIT IN JS
// setTimeout(() => {
//     console.log("1");
// }, 2000);
// console.log("2");




// var myPromise = new Promise((resolve, reject) => {     //using arrow function(()=>) we can direclty write function
//     setTimeout(() => {
//         resolve("success");
//     }, 2000);
// });

// var getOurPromise = async () => {
//     var getOurPromiseResult = await myPromise;
//     console.log(getOurPromiseResult);
// };




// var myPromise = new Promise((resolve, reject) => {     //using arrow function(()=>) we can direclty write function
//     setTimeout(() => {
//         resolve("success");
//     }, 1000);
//     setTimeout(() => {
//         reject("error");
//     }, 5000);
// });

// var getOurPromise = async () => {
//     try {
//         let getOurPromiseResult = await myPromise;
//         console.log(getOurPromiseResult);
//     }
//     catch (error) {
//         console.log(error);
//     }
// };

// getOurPromise();


// var myPromise=new Promise((resolve, reject)=>{     //using arrow function(()=>) we can direclty write function
//   setTimeout(()=>{
//       resolve("success");
//   }, 7000);
//   setTimeout(()=>{
//     reject("error");
// }, 5000);
// });

// var getOurPromise=async()=>{
//   try{
//     let getOurPromiseResult=await myPromise;
//     console.log(getOurPromiseResult);
//   }
//   catch(error){
//     // throw new Error(error);
//     // console.log(error);
//     console.error(error);
//   }
// };

// getOurPromise();





// var state = {
//     taskList: [
//         {
//             imageUrl: "",
//             taskTitle: "",
//             tags: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl: "",
//             taskTitle: "",
//             tags: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl: "",
//             taskTitle: "",
//             tags: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl: "",
//             taskTitle: "",
//             tags: "",
//             taskDescription: ""
//         }
//     ]
// }


// var state = {
//     taskList: []
// };


// // DOM Operations

// var taskContents = document.querySelector(".task__contents");
// var taskModal = document.querySelector(".task__modal__body")

// console.log(taskContents)
// console.log(taskModal) 