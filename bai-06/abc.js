// Bai 1:
// var maxVal = (a, b) => {
//     return a > b ? a : b;
// }

// console.log(maxVal(5, 10));

//Bai 2

// var isfizzBuzz = (par) => {
//     if(typeof par !== "number"){
//         return "Vui long nhap so!";
//     } else {
//         if(par % 3 == 0 && par % 5 == 0) return "FizzBuzz";
//         else if(par % 3 == 0) return "Fizz";
//         else if(par % 5 == 0) return "Buzz";
//         else return par;
//     }
// }


// const checkFizzBuzz1 = isfizzBuzz("one");
// console.log(checkFizzBuzz1); // Vui lòng nhập số!

// const checkFizzBuzz2 = isfizzBuzz(true);
// console.log(checkFizzBuzz2); // Vui lòng nhập số!

// const checkFizzBuzz3 = isfizzBuzz(9);
// console.log(checkFizzBuzz3); // Fizz

// const checkFizzBuzz4 = isfizzBuzz(10);
// console.log(checkFizzBuzz4); // Buzz

// const checkFizzBuzz5 = isfizzBuzz(30);
// console.log(checkFizzBuzz5); // FizzBuzz

// const checkFizzBuzz6 = isfizzBuzz(11);
// console.log(checkFizzBuzz6); // 11



// //Bai 3:

// const SPEEDLIMIT = 70;
// const KMPERPOINT = 5; 
// const MONEY = 30000;
// var checkSpeedLimit = (speed) => {
//     if(speed >= 120) return "Ban da bi tuong bang giay phep lai xe";
//     else if(speed > 70){
//         let x = speed - 70; 
//         x = Math.floor(x / 5); 
//         const tienPhat = x * MONEY;
//         return "Ban bi phat: " + tienPhat;
//     } else {
//         return "Van toc an toan";
//     }
// }


// const checkPoin1 = checkSpeedLimit(40);
// console.log(checkPoin1); // Vận tốc an toàn

// const checkPoin2 = checkSpeedLimit(70);
// console.log(checkPoin2); // Vận tốc an toàn

// const checkPoin3 = checkSpeedLimit(75);
// console.log(checkPoin3); // Bạn đã bị phạt: 30000đ

// const checkPoin4 = checkSpeedLimit(99);
// console.log(checkPoin4); // Bạn đã bị phạt: 150000đ

// const checkPoin5 = checkSpeedLimit(120);
// console.log(checkPoin5); // Bạn đã bị tước giấy phép lái xe


// //Bai 4: 

// const person = {
//     name: "Le Van A",
//     age: 40,
//     height: 175,
//     country: "Viet Nam",
//     designation: "UI Developer",
//   };
//   // In ra:
//   // name : Le Van A
//   // country : Viet Nam
//   // designation : UI Developer
//   // ----------
  
// const technology = {
//    name: "JavaScipt",
//    version: 6,
//    purpose: "Scripting language for Web",
//    developer: "Netscape Corporation",
// };


// const res = (object) => {
//     for (const key in object) {
//         if(typeof object[key] === "string"){
//             console.log("key: " + object[key]);
//         }
//     }
// }

// res(person);


// //Bai 5; 

// var checkPrime = (n) => {
//     for(let i = 2; i <= Math.sqrt(n); i++){
//         if(n % i == 0) return false;
//     }
//     return true;
// }

// var soNguyenTo = (n) => {
//     for(let i = 2; i < n; i++){
//         if(checkPrime(i)) console.log(i);
//     }
// }

// soNguyenTo(20);


//bai 6
// var myString = "tran vu hoang";

// var convertTime = (string) => {
//     const time = string.slice(0, -2);
//     const ampm = string.slice(-2);
//     const units = time.split(":");

//     let hours = units[0];
//     const mins = units[1];
//     const sec = units[2];

//     if(hours == 12){
//         hours = '00';
//     }

//     if(ampm == 'PM'){
//         hours = parseInt(hours) + 12;
//     }

//     const newString = [hours, mins, sec].join(":");
//     return newString;
// }

// var test1 = convertTime("07:05:45PM");
// console.log(test1); // 19:05:45

// var test2 = convertTime("12:40:22AM");
// console.log(test2); // 00:40:22

// var test3 = convertTime("12:45:54PM");
// console.log(test3); // 12:45:54


//Bai 7 
// var leapYear = (x) => {
//     if(x % 400 === 0 || (x % 100 == 0 && x % 4 == 0)) return true;
//     return false;
// }

// console.log(leapYear(2016));
// console.log(leapYear(2000));
// console.log(leapYear(1700));
// console.log(leapYear(1800));
// console.log(leapYear(100));

// function leapYear(year) {
//     return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
//   }
  
//   console.log(leapYear(2016));
//   console.log(leapYear(2000));
//   console.log(leapYear(1700));
//   console.log(leapYear(1800));
//   console.log(leapYear(100));

//bai 8

// var extensionFilename = (x) => {
//     return x.includes('.') ? x.split('.').pop() : "day khong phai la file";
// }

// const input = prompt("nhap ten file");
// const res = extensionFilename(input);
// console.log(res);

// let price = 100;
// const discount = true;
// const discountAmount = 30;
// const country = "Việt Nam";

// if (discount === true) {
//   price -= discountAmount; 
// } else if (country === "Thái Lan") {
//   price -= 40;
// } else if (country === "Hàn Quốc") {
//   price -= 50;
// } else {
//   price -= 10;
// }

// console.log(price);

// let price = 100;
// const discount = false;
// const discountAmount = 30;
// const country = "Việt Nam";
// const student = true;

// if (discount === true) {
//   price -= discountAmount;
// } else if (country === "Việt Nam") {
//   if (student === true) {
//     price -= discountAmount + 30;
//   } else {
//     price -= discountAmount + 10;
//   }
// } else {
//   price -= 10;
// }

// console.log(price);



// const fullName = "Đặng Phương Nam";
// const gender = "Nam";
// const age = 17;

// const vocative = gender === "Nam" ? "Ông" : "Bà";

// console.log(vocative);

// console.log(`Xin chào ${gender === "Nam" ? "Ông" : "Bà"} ${fullName}`);

// console.log(`Xin chào ${vocative} ${fullName}`);

// const drinkAlcohol =
//   age < 18
//     ? "Bạn chưa được phép uống rượu."
//     : age >= 18 && age <= 60
//     ? "Bạn nên uống ít rượu."
//     : age > 60
//     ? "Bạn không nên uống rượu."
//     : "Bạn ơi! Bạn còn đó chứ!";

// console.log(drinkAlcohol);

// //Cau 12: 
// const object = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];
// var list = [];
// for (const key in object) {
//     if(typeof object[key] === 'string'){
//         list.push(object[key]);
//     }
// }
// console.log(list);

asdfasdf