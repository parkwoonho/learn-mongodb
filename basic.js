//




//배열
// const dayOfWeeks = ["월요일",
//     "화요일",
//     "수요일",
//     "목요일",
//     "금요일",
//     "토요일"
// ]
// console.log(dayOfWeeks[dayOfWeeks.length -1])

//객체
//  const animals = ["cat","dog","tiger"];

//  for(let i = 0; i<animals.length; i++){
//     console.log(animals[i]);
//  }

//  animals.forEach((item,index,array) => {
//     console.log(array);
    
//  });

// `
// map
// filter
// find
// some/every
// `

//const test = [1,2,3,4,5];
//const test =["cat1","dog1","tiger1", "cow1"];

// let test2 = test.map((value,index,array)=>{
//     if(index == 2) {
//         return;
//     }   
//     return value *2;
// })

// console.log(test2);

// let test2 = test.filter((value  ,index,arrary)=> {
//     return value.startsWith("c");
// })

// console.log(test2);

// const test2 = test.find((value, index, array )=>{
//     //return value.startsWith("v");
//     return 1==1
// })
// console.log(test2);

// if(test2){
//     console.log(true);
// }else{
//     console.log(false);
// }


// //const test2 = test.some((value)=>{
// const test2 = test.every((value)=>{
//        return value.endsWith("1");
// })
// console.log(test2);


// //logical operators 
// const user = {
//     isLoggedIn : true, //로그인 여부
//     role : "user" //  유저 , 게스트역할
// }

// const isAccessAdminPage = (user.isLoggedIn || user.role ==='admin') ;
// console.log("~ isAccessAdminPage", isAccessAdminPage);
// if(isAccessAdminPage){
//     console.log("~관리자 페이지 접근가능 ");
// }else{
//     console.log("~관리자 페이지 접근불가능 ");
// }


//기본값
const double = (num=5)=> {
    return num*2;
}
console.log(double());


const score = 80
const result = score >= 60 ? "합격" : "탈락"

console.log( "🎁  ~", result)


//스프레드 syntax
const animals = ["cat","dog","tiger"];
const copyArr = [...animals, "value"]
console.log(animals);
console.log(copyArr);


const todoItem = {
    id:1,
    content : "react 공부하기"
}

const newItme = {
    ...todoItem,
    date: new Date(),
    isComplete : false,
    content : "mongodb 공부하기"  //존재하는 키값을 수정한다.
}

console.log(todoItem);
console.log(newItme);

if(1 === '1'){
    console.log("dd")
}

console.log(!![])