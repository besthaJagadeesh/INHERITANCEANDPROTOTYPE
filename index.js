//Answer to Q1//

// const parent ={
//     firstname : "Bestha",
//     lastname : "Jagadeesh",
//     fullname : function title(){
//         console.log(this.firstname+" "+this.lastname);
//     }
// }

// const child ={
//     _proto_: parent
// }
// child.fullname();







//Answer to Q2

//  let obj={
//     name : "bestha"
// }

// let obj1 ={
//     _proto_: obj,
//     lastname : "Jagadeesh"
// }

// let obj2 = {
//     _proto_: obj1,
//     age :   "20",
// }

// console.log(obj.name)





//Answer to Q3

// Array.prototype.sum = function() {
//     let result = 0;
//     for (let i = 0; i &lt; this.length; i++) {
//       result += this[i];
//     }
//     return result;
//   };

// let N1 = [6, 8, 9];
// let N2 = [7, 8, 6];


// let addition = N1.sum() + N2.sum()
// console.log(addition);


//Answer to Q4

// class student {
//     constructor(name, rollno, division){
//         this.name= name;
//         this.rollno= rollno;
//         this.division = division; 
//     }

//     set setFriend(friend){
//         this.friend= friend
//     }
// }

// let obj = new student("Jagadeesh", "50","A")
// obj.friend="Rakesh"
// console.log(obj)

// class senior extends student{
//      constructor(){
//         super("Ramesh", "45", "B")
//      }
// }
//  let seniorobj = new senior();
//  console.log(seniorobj)
