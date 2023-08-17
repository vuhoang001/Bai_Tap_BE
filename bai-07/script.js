//Bai 1

// var input = prompt("Nhap so nguyen duong: ");
// const check = (input) => {
//     return input % 1 == 0 && input > 0;
// }

// alert(check(input) ? "YES" : "NO");

//Bai 2
// B1: tong cac phan tu cua mang
// B2: n < 3 return false; n <= 0 return false || n > 180 return false; 
// tong == (n - 2) * 180

// const sum = (array) => {
//     const total = array.reduce((tong, so) => tong + so, 0);
//     return total;
// }

// const isShapePossible = (n, array) => {
//     if(n < 2) return false; 
//     if(array.some((array) => array <= 0) || array.some((array) => array > 180)) return false;
//     return sum(array) === (n / 2) * 180;
// }

// const test1 = isShapePossible(4, [90, 90, 90, 90]);
// console.log(test1); // true

// const test2 = isShapePossible(3, [20, 20, 140]);
// console.log(test2); // true

// const test3 = isShapePossible(1, [21]);
// console.log(test3); // false

// const test4 = isShapePossible(5, [500, 0, 20, 10, 10]);
// console.log(test4); // false

//Bai 3

// var abbreviate = (string, n = 0) => {
//     let array = string.split(" ");
//     let lengthString = array.filter((word) => word.length >= n);
//     let charArray = lengthString.map((char) => {
//         return char[0];
//     });

//     let res = charArray.join("");
//     return res.toUpperCase();
// }

// //Cach 2: 
// var abbreviate = (string, n = 0) => {
//     return (
//         string
//             .split(" ")
//             .filter((word) => word.length >= n)
//             .map((item) => item[0])
//             .join("")
//             .toUpperCase()
//     )
// }
// const test1 = abbreviate("Xin chào! Tôi tên là Nam.");
// console.log(test1); // XCTTLN

// const test2 = abbreviate("Xin chào! Tôi tên là Nam.", 3);
// console.log(test2); // XCTTN --> Chữ "là" bị bỏ qua, vì có 2 ký tự, nhỏ hơn n = 3

// const test3 = abbreviate("Xin chào! Tôi tên là Nam.", 4);
// console.log(test3); // CN --> Các chữ có 3 ký tự trở xuống bị bỏ, vì n = 4


// //Cau 4: 
// const alternatingCaps = (string) => { 
//     let array = string.split("");
//     count = 0;
//     let newArray = (array.map((character) => { 
//         if(character == " ") return " ";
//         count += 1; 
//         return count % 2 ? character.toUpperCase() : character.toLowerCase();
//     }))

//     newArray = newArray.join("");
//     return newArray;
// }

// const test1 = alternatingCaps("Khá Bảnh");
// console.log(test1); // KhÁ bẢnH

// const test2 = alternatingCaps("Khổ trước sướng sau thế mới giàu.");
// console.log(test2); // KhỔ tRưỚc SưỚnG sAu ThẾ mỚi GiÀu.

// const test3 = alternatingCaps("Giàu trước khổ sau thế càng đau.");
// console.log(test3); // GiÀu TrƯớC kHổ SaU tHế CàNg ĐaU.


// //Cau 5

// const sum = (array) => { 
//     return array.reduce((total, index) => total + index, 0);
// }

// const mean = (arr) => { 
//     return sum(arr) / arr.length;
// }


// const median = (arr) => {
//     const numberBefore = arr[Math.ceil((arr.length - 1) / 2)];
//     const numberAfter = arr[Math.floor((arr.length - 1) / 2)];
//     return mean([numberAfter, numberBefore]);
// }




// const test1 = median([1, 2, 4, 5, 6, 8, 8, 8, 10]);
// console.log(test1); // 6

// const test2 = median([2, 2, 6, 8, 8, 10, 10]);
// console.log(test2); // 8

// const test3 = median([1, 2, 2, 4, 7, 8, 9, 10]);
// console.log(test3); // 5.5

// const getBirthdayCake = (string, n) => {
//     const char = n % 2 ? "*" : "#";
//     const chuc = `${char} Chuc mung sinh nhat ${string}! ${n} ${char}`;
//     const edge = char.repeat(chuc.length);
//     return `
//         ${edge}
//         ${chuc}
//         ${edge}
//     `;
// }

// const test1 = getBirthdayCake("Nam", 18);
// console.log(test1);
// /*
//   ##################################
//   # 18 Chúc mừng sinh nhật Nam! 18 #
//   ##################################
// */

// const test2 = getBirthdayCake("Long", 17);
// console.log(test2);
// /*
//   ***********************************
//   * 17 Chúc mừng sinh nhật Long! 17 *
//   ***********************************
// */

// //bai 7
// const  blahBlah = (string , n) => { 
//     const arr = string.split(" ");
//     const newArray = arr.map((value, index, mang) => {
//         return n > mang.length - 1 - index ? "blah" : value;
//     })
//     const newString = newArray.join(" ");
//     return newString
// }


// const test1 = blahBlah("Anh học CNTT hả, cài win dùm em nhé!", 3);
// console.log(test1); // Anh học CNTT hả, cài win blah blah blah...

// const test2 = blahBlah(
//   "Cảm giác bất an khi tự dưng một đứa bạn cũ hỏi mình đang học IT phải không.",
//   5
// );
// console.log(test2); // Anh học CNTT hả, cài win blah blah blah...

// //bai 8 

// const sum = (arr) => {
//     return arr.reduce((total, item) => total + item, 0);
// }

// const getTotalPrice = (obj) => {
//     const newArr = obj.map((item) => item.price * item.quantity);
//     return sum(newArr)
// }
// const test1 = getTotalPrice([
// 	{ product: "Sữa", quantity: 1, price: 7000 }
// ]);
// console.log(test1); // 7000

// const test2 = getTotalPrice([
//   { product: "Sữa", quantity: 1, price: 7000 },
//   { product: "Ngũ cốc", quantity: 1, price: 50000 },
// ]);
// console.log(test2); // 57000

// const test3 = getTotalPrice([
// 	{ product: "Sữa", quantity: 3, price: 7000 }
// ]);
// console.log(test3); // 21000

// const test4 = getTotalPrice([
//   { product: "Sữa", quantity: 1, price: 7000 },
//   { product: "Trứng", quantity: 12, price: 3000 },
//   { product: "Bánh mỳ", quantity: 2, price: 15000 },
//   { product: "Phô mai", quantity: 1, price: 5000 },
// ]);
// console.log(test4); // 78000

// const test5 = getTotalPrice([
//   { product: "Sô cô la", quantity: 1, price: 12000 },
//   { product: "Kẹo", quantity: 1, price: 2000 },
// ]);
// console.log(test5); // 14000


//bai 9
// const capitalize = (string) => {
//     return string.slice(0, 1).toUpperCase() + string.slice(1);
// }

// const makeTitle = (string) => {
//     return (
//         string
//             .split(" ")
//             .map((item) => capitalize(item))
//             .join(" ")
//     )
// }
// const test1 = makeTitle("Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó.");
// console.log(test1);

// const test2 = makeTitle("Khi tui biên dịch và code chạy suôn sẻ trong lần đầu. Tui tự hỏi đã làm sai chỗ nào.");
// console.log(test2);

// //bai 10
// const chooseFuse = (arr, fuse) => {
//     const number = parseFloat(fuse);
//     const res = arr.map(parseFloat).filter((item) => item >= number)
//     return Math.min(...res) + "V";

// } 
// const test1 = chooseFuse(["3V", "5V", "12V"], "4.5V");
// console.log(test1); // 5V

// const test2 = chooseFuse(["5V", "14V", "2V"], "5.5V");
// console.log(test2); // 14V

// const test3 = chooseFuse(["17V", "15V", "12V"], "9V");
// console.log(test3); // 12V

//bai 11

// const countOnes = (arr) => {
//     return arr.reduce((total, num) => total + num.filter((item) => item == "1").length, 0);
// }
  
//   const test1 = countOnes([
//     [1, 0],
//     [0, 0],
//   ]);
//   console.log(test1); // 1
  
//   const test2 = countOnes([
//     [1, 1, 1],
//     [0, 0, 1],
//     [1, 1, 1],
//   ]);
//   console.log(test2); // 7
  
//   const test3 = countOnes([
//     [1, 2, 3],
//     [0, 2, 1],
//     [5, 7, 33],
//   ]);
//   console.log(test3); // 2


// const students = [
//   { hoTen: "Le Van A", lop: "A", diem: 7.5 },
//   { hoTen: "Do Van B", lop: "B", diem: 6.8 },
//   { hoTen: "Nguyen Thi C", lop: "A", diem: 8 },
//   { hoTen: "Dao Van D", lop: "C", diem: 9 },
//   { hoTen: "Hoang Thi E", lop: "B", diem: 8.5 },
//   { hoTen: "Vu Van F", lop: "B", diem: 7.2 },
// ];

// const sumByClass = students.reduce((totalByClass, item) => {
//   const lop = item.lop;
//   if (!totalByClass[lop]) {
//     totalByClass[lop] = 0;
//   }
//   totalByClass[lop] += item.diem;
//   return totalByClass;
// }, {});

// console.log(sumByClass);
// /*
// Trả về:
// {
//   A: 15.5,
//   B: 22.5,
//   C: 9
// }
// */


// const numbers = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];


// const sumByNumber = numbers.reduce((total, item) => {
//   const sum = item.reduce((tong, item) => tong + item, 0);
//   total.push(sum);
//   return total
// }, [])

// console.log(sumByNumber);

//Bai 1: 

// var input = prompt("Vui long nhap gia tri: ");
// input = parseFloat(input);
// var check = input => {
//   if(input > 0 && input % 1 == 0) return true;
// }
// if(isNaN(input)){
//   alert("Vui long nhap so");
// } else{
//   if(check(input)) alert("Day la so nguyen");
//   else alert("Day khong phai la so nguyen");
// }

//Bai 2: 

// const isShapePossible = (n, array) => {
//   if(n < 3 ) return false;

//   if((array.reduce((total, sum) => total + sum, 0) !== (n - 2) * 180) || array.some((item) => item <= 0 || item > 180)) return false; 
//   return true;
// }



// const test1 = isShapePossible(4, [90, 90, 90, 90]);
// console.log(test1); // true

// const test2 = isShapePossible(3, [20, 20, 140]);
// console.log(test2); // true

// const test3 = isShapePossible(1, [21]);
// console.log(test3); // false

// const test4 = isShapePossible(5, [500, 0, 20, 10, 10]);
// console.log(test4); // false


//bai 3

// const abbreviate = (string , n = 0) => {
//   const arr = string.split(" ");
//   const newArray = arr.filter((word) => word.length >= n);
//   const newArray1 = newArray.map((item) => {return item[0].toUpperCase()});
//   const newString = newArray1.join("");
//   return newString;
// // }

// const abbreviate = (string, n = 0) => {
//   return (
//     string  
//       .split(" ")
//       .filter((item) => item.length >= n)
//       .map((word) => {return word[0].toUpperCase()})
//       .join("")
//   )
// }


// const test1 = abbreviate("Xin chào! Tôi tên là Nam.");
// console.log(test1); // XCTTLN

// const test2 = abbreviate("Xin chào! Tôi tên là Nam.", 3);
// console.log(test2); // XCTTN --> Chữ "là" bị bỏ qua, vì có 2 ký tự, nhỏ hơn n = 3

// const test3 = abbreviate("Xin chào! Tôi tên là Nam.", 4);
// console.log(test3); // CN --> Các chữ có 3 ký tự trở xuống bị bỏ, vì n = 4

//Bai 4: 

// let alternatingCaps = (string) => { 
//   const arr = string.split("");
//   let cnt = 0; 
//   let newString = arr.map((item) => {  
//     if(item == " ") return " ";
//     ++cnt; 
//     return cnt % 2 == 0 ? item.toLowerCase() : item.toUpperCase();
//   })
//   newString = newString.join("");
//   return newString;
  
// }


// const test1 = alternatingCaps("Khá Bảnh");
// console.log(test1); // KhÁ bẢnH

// const test2 = alternatingCaps("Khổ trước sướng sau thế mới giàu.");
// console.log(test2); // KhỔ tRưỚc SưỚnG sAu ThẾ mỚi GiÀu.

// const test3 = alternatingCaps("Giàu trước khổ sau thế càng đau.");
// console.log(test3); // GiÀu TrƯớC kHổ SaU tHế CàNg ĐaU.

//Bai 5
// const sum = (arr) => { 
//   return arr.reduce((total, item) => total + item, 0);
// }

// const sum = (arr) => {
//   return arr.reduce((total, num) => total + num, 0);
// };


// const mean = (arr) => { 
//   return sum(arr) / arr.length;
// }

// const median = (arr) => { 
//   const numberBefore = arr[Math.ceil((arr.length - 1) / 2 )];
//   const numberAfter = arr[Math.floor((arr.length - 1) / 2)];
//   return mean([numberAfter, numberBefore]);
// }


// const test1 = median([1, 2, 4, 5, 6, 8, 8, 8, 10]);
// console.log(test1); // 6

// const test2 = median([2, 2, 6, 8, 8, 10, 10]);
// console.log(test2); // 8

// const test3 = median([1, 2, 2, 4, 7, 8, 9, 10]);
// console.log(test3); // 5.5

// //bai 6

// const getBirthdayCake = (string, n) => { 
//   let char; 
//   if(n % 2 == 0) char = "#";
//   else char = "*";
//   const middleString = `${char} ${n} Chuc mung sinh nhat ${string} ${n} ${char}`;
//   const edge = char.repeat(middleString.length);
//   return `
//     ${edge}
//     ${middleString}
//     ${edge}
//     `
// }

// const test1 = getBirthdayCake("Nam", 18);
// console.log(test1);
// /*
//   ##################################
//   # 18 Chúc mừng sinh nhật Nam! 18 #
//   ##################################
// */

// const test2 = getBirthdayCake("Long", 17);
// console.log(test2);
// /*
//   ***********************************
//   * 17 Chúc mừng sinh nhật Long! 17 *
//   ***********************************
// */

// //Bai 7 

// const blahBlah = (string, n) => { 
//   const arr = string.split(" ");
//   const newString = arr.map((value, index) => {
//     return n > arr.length - index - 1 ? "blah" : value;  
//   })
//   return newString.join(" ");

// }

// const test1 = blahBlah("Anh học CNTT hả, cài win dùm em nhé!", 3);
// console.log(test1); // Anh học CNTT hả, cài win blah blah blah...

// const test2 = blahBlah(
//   "Cảm giác bất an khi tự dưng một đứa bạn cũ hỏi mình đang học IT phải không.",
//   5
// );
// console.log(test2); // Anh học CNTT hả, cài win blah blah blah...


// //Bai 8
// const sum = (arr) => {
//   return arr.reduce((total, index) => total + index, 0);
// }

// const getTotalPrice = (arr) => {
//   const res = arr.map((item) => item.quantity * item.price);
//   return sum(res);
// }


// const test1 = getTotalPrice([
// 	{ product: "Sữa", quantity: 1, price: 7000 }
// ]);
// console.log(test1); // 7000

// const test2 = getTotalPrice([
//   { product: "Sữa", quantity: 1, price: 7000 },
//   { product: "Ngũ cốc", quantity: 1, price: 50000 },
// ]);
// console.log(test2); // 57000

// const test3 = getTotalPrice([
// 	{ product: "Sữa", quantity: 3, price: 7000 }
// ]);
// console.log(test3); // 21000

// const test4 = getTotalPrice([
//   { product: "Sữa", quantity: 1, price: 7000 },
//   { product: "Trứng", quantity: 12, price: 3000 },
//   { product: "Bánh mỳ", quantity: 2, price: 15000 },
//   { product: "Phô mai", quantity: 1, price: 5000 },
// ]);
// console.log(test4); // 78000

// const test5 = getTotalPrice([
//   { product: "Sô cô la", quantity: 1, price: 12000 },
//   { product: "Kẹo", quantity: 1, price: 2000 },
// ]);
// console.log(test5); // 14000


// //bai 9
// const Upper = (string) => {
//   return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
// }
// const makeTitle = (string) => { 

//   return string.split(" ").map((item) => Upper(item)).join(" ");  
// }

// const test1 = makeTitle("Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó.");
// console.log(test1);

// const test2 = makeTitle("Khi tui biên dịch và code chạy suôn sẻ trong lần đầu. Tui tự hỏi đã làm sai chỗ nào.");
// console.log(test2);


// const chooseFuse = (list, string) => {
//   const number = parseFloat(string);
//   const res  = list.map((item) => {return parseFloat(item)}).filter((item) => item > number);
//   return  `${Math.min(...res)}V`;
// }
// const test1 = chooseFuse(["3V", "5V", "12V"], "4.5V");
// console.log(test1); // 5V

// const test2 = chooseFuse(["5V", "14V", "2V"], "5.5V");
// console.log(test2); // 14V

// const test3 = chooseFuse(["17V", "15V", "12V"], "9V");
// console.log(test3); // 12V


// const countOnes = (arr) => {
//   return arr.reduce((total, list) => total + list.filter((item) => item === 1).length, 0);
// }

// const test1 = countOnes([
//   [1, 0],
//   [0, 0],
// ]);
// console.log(test1); // 1

// const test2 = countOnes([
//   [1, 1, 1],
//   [0, 0, 1],
//   [1, 1, 1],
// ]);
// console.log(test2); // 7

// const test3 = countOnes([
//   [1, 2, 3],
//   [0, 2, 1],
//   [5, 7, 33],
// ]);
// console.log(test3); // 2



// const swappingCases = (string) => {
//   return (
//     string  
//       .split("")
//       .map((item) => { return item == item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()})
//       .join("")
//   )
// }
// const test1 = "Le VAn HunG";
// console.log(swappingCases(test1));
// // Trả về: lE vaN hUNg

// const test2 = "Đặng PhưƠnG NAm";
// console.log(swappingCases(test2));
// // Trả về: đẶNG pHƯơNg naM


// const invertedNumbers = (arr) => {
//   return arr.map((item) => {
//     return -item;
//   })
// }

// const test1 = [1, -10, -20, 15, 100, -30];
// console.log(invertedNumbers(test1));
// // Trả về: [-1, 10, 20, -15, -100, 30];

// const test2 = [-20, 30, 10, -25, -60, 20];
// console.log(invertedNumbers(test2));
// // Trả về: [20, -30, -10, 25, 60, -20];


// const ignoreNumbers = (string) => {
//   return string.split("").map((item) => {
//     return isNaN(item) ? item : "";
//   }).join("");
// }

// const test1 = "Test4Ag54SF";
// console.log(ignoreNumbers(test1));
// // Trả về: TestAgSF

// const test2 = "JHk34Gl3gG";
// console.log(ignoreNumbers(test2));
// // Trả về: JHkGlgG

// const smallWords = (string , n) => {
//   return string.split(" ").filter((item) => item.length <= n).join(" ");
// }

// const test1 = "I Love Foood Code Too Playing Much";
// console.log(smallWords(test1, 4));
// // Trả về: I Love Code Too Much

// const test2 = "I Love Foood Code Too Playing Much";
// console.log(smallWords(test2, 3));
// // Trả về: I Too

// const multiplyNumberInString = (string) => {
//   const res = string.split("").filter((item) => !isNaN(item)).map((item) => {return item * item}).join("");
//   return res.length == 0 ? "0" : res;
// }
// const test1 = "JG23BGH5BA";
// console.log(multiplyNumberInString(test1)); // "4925"

// const test2 = "VD23GS8S6AH";
// console.log(multiplyNumberInString(test2)); // "496436"

// const test3 = "AGD353GDSK8";
// console.log(multiplyNumberInString(test3)); // "925964"

// const test4 = "JBKJJKLDJ";
// console.log(multiplyNumberInString(test4)); // "0"


// const totalPrice = (arr) => {
//   return arr.map((item) => item.price * item.quantity).reduce((total, index) => total + index, 0  );
// }
// const cart = [
//   { name: "iPhone", price: 1000, quantity: 5 },
//   { name: "iPad", price: 500, quantity: 2 },
//   { name: "MacBook", price: 2000, quantity: 1 },
// ];
// console.log(totalPrice(cart));
// // Tính toán để trả về: 1000 * 5 + 500 * 2 + 2000 * 1 = 8000


const groupedStudents = (obj) => {
  return obj.reduce((groups, item) => {
    if(groups[item.gioiTinh]){
      groups[item.gioiTinh].push(item.hoTen);
    } else {
      
    }
  })
}
const students = [
  { hoTen: "Le Van A", gioiTinh: "Nam" },
  { hoTen: "Do Van B", gioiTinh: "Nam" },
  { hoTen: "Nguyen Thi C", gioiTinh: "Nu" },
  { hoTen: "Dao Van D", gioiTinh: "Nam" },
  { hoTen: "Hoang Thi E", gioiTinh: "Nu" },
  { hoTen: "Vu Van F", gioiTinh: "Nam" },
];

/*
Trả về:
{
  "Nam": [
      "Le Van A",
      "Do Van B",
      "Dao Van D",
      "Vu Van F"
  ],
  "Nu": [
      "Nguyen Thi C",
      "Hoang Thi E"
  ]
}
*/