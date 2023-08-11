// alert('toi la hoang')

// confirm("ban da du 18 chua!");

// const a = prompt("Nhap ho ten cua ban!", "Tran Vu Hoang");//tham so thu 2 mac dinh(khong bat buoc)
// console.log(a);


// console.log('xin chao ' + a);
// console.log(`xin chao ${a}`);

//setTimeout( ) - chay 1 lan duy nhat  1000 = 1s 

// setTimeout(function(){
//     console.log(`hoang`)
// }, 3000);

// //setInterval() - chay nhieu lan sau bnh s
// setInterval( function (){
//     console.log('hoanggggf')
// },3000);

// //type of
// var a = 10; 
// var b = 4.3;
// var c; 
// var d = 'hoang';
// var e = null;

// console.log(typeof a);
// console.log(typeof b); 
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);

//string
//length - Do dai cua chuoi 
// var a = "Tran Vu Hoang";
// console.log(a.length);

// //indexOf(value, start) - tim vi tri dau tien cua chuoi trong 1 chuoi(khong tim thay tra ve -1)
// var a = "Tran Tran Vu Hoang";
// console.log(a.indexOf('Tran')); // tra ve 0
// console.log(a.indexOf('Tran', 4)); // return 5
// console.log(a.indexOf('Vu')) // return 10

// // lastIndexOf(value, start) - tim vi tri cuoi cung cua chuoi trong 1 chuoi(khong tim thay tra ve -1)
// var myString = "xin chao toi ten la hoang. toi nam nay 21 tuoi";
// console.log(myString.lastIndexOf('toi')); //return 27;
// console.log(myString.lastIndexOf('xin')); //return 0;

// 7.4 string.slice(start, end) = cat mot chuoi va Tra Ve mot chuoi moi (khong thay doi chuoi)

// var myString = 'Toi ten la Tran Vu Hoang';
// var a = myString.slice(1, 3);
// var b = myString.slice(3);
// var c = myString.slice(-1);
// console.log(a); //return 'oi'
// console.log(b); // return ' ten la Tran Vu Hoang'
// console.log(c); // return 'g'


//7.5 replace('searchValue', 'newValue') - dung de thay the 1 thanh 1 chuoi moi(chi thay the duoc chuoi dau tien)

// var myString = 'toi ten la a';
// console.log(myString.replace('a', 'hoang'))  // return toi ten lhoang a
// console.log(myString.replace(/a/g, 'hoang')); //toi ten lhoang hoang

//7.6 toUpperCase, toLowerCase

// var myString = 'Toi ten la Tran Vu Hoang';
// console.log(myString.toLowerCase());
// console.log(myString.toUpperCase());

// //7.7 trim() bo di khoang trang o dau va o cuoi
// var myString = "     toi ten la hoangg       ";
// console.log(myString.trim()); //return 'toi ten la hoangg'

//7.8 charAt()
// var myString = 'Tran Vu Hoang';
// console.log(myString.charAt()); // return 't'
// console.log(myString.charAt(myString.length - 1)); // return 'g'

// //7.9 split() - chuyen mot chuoi thanh mot array, nhung can tim ra diem chung cua chuoi do 
// var myString = "toi, ten, la, tran, vu, hoang";
// console.log(myString.split(", ")); //return ['toi', 'ten', 'la', 'tran', 'vu', 'hoang']
// console.log(myString.split(", ", 3)); //return ['toi', 'ten', 'la']


//8. Lam viec voi number
// //8.1 isNaN() - kiem tra xem bien co phai la NaN khong(not a number)
// var a = 10; 
// var b = 'test';
// var result = a / b; 
// console.log(result); //NaN
// console.log(isNaN(result)); //true

//8.2 toString() - chuyen mot so thanh mot chuoi 
// var a = 10; 
// var b = a.toString();
// console.log(b); // return '10'
// console.log(typeof b); //return string


// //8.3 toFixed() - lam tron so thap phan (khong dien mac dinh la 0)
// var a = 1.23545;
// console.log(a.toFixed(1)); 1.2
// console.log(a.toFixed(2)); 1.23
// console.log(a.toFixed(3)); 1.235


//9 Array

// //join
// var list = ['toi', 'ten', 'la'];
// var string = list.join(" ");
// console.log(string);

// //pop - xoa phan tu cuoi cung
// var list = ['Tran', 'Vu', 'Hoang'];
// console.log(list.pop()); // 'Hoang'
// console.log(list); // 'tran', 'vu'


// // push - day phan tu vao cuoi mang mang
// var list = ['html5', 'Css3', 'javascript'];
// console.log(list.push('vu', 'hoang')); // return 5;
// console.log(list); // ['html5', 'Css3', 'javascript', 'vu', 'hoang']

// //shift() - xoa phan tu o dau mang
// var list = ['html5', 'Css3', 'javascript'];
// console.log(list.shift()); // html5
// console.log(list); // ['Css3', 'javascript']


// // unshift() - them mot hoac nhieu phan tu vao dau mang 
// var list = ['html5', 'Css3', 'javascript'];
// console.log(list.unshift('Hoang', 'Vu')); 5
// console.log(list); ['Hoang', 'Vu', 'html5', 'Css3', 'javascript']

// //splice(index, howmany, item1..itemx) xoa hoac chen phan tu mang
// var list = ['html5', 'Css3', 'javascript'];
// console.log(list.splice(2, 0, 'Vu', 'hoang'));
// console.log(list);
// console.log(list.splice(2, 4));
// console.log(list);


// console.log("Vu" + "Hoang");

// var value1 = "one";
// var value2 = 'tow';
// var value3 = value1; 
// value1 = value2;
// value2 = value3;
// console.log(value1 + " " + value2);

// const res = (r) =>{
//     var S = 2 * r ** 2; 
//     return S;
// }


// // var a = res(5);
// // console.log(6);

// function palindone(string){
//     const res = string.split("").reverse().join("");
//     return res === string;
// }

// console.log(palindone('aba'));

// console.log(typeof "Le Van A"); //string
// console.log(typeof 5000); //number
// console.log(typeof 5000.99); //number
// console.log(typeof [10, 15, 17]); //array
// console.log(typeof { name: "Le Van A", age: 18, country: "Viet Nam" }); //object
// console.log(typeof true); //boolean
// console.log(typeof false); //boolean
// console.log(typeof undefined); //undefined
// console.log(typeof null); //object


// var img = "imgggggggg";
// var title = 'Toi ten la Hoang';
// var decs = "verry handsome!!";

// var string = `Day la ${img} + va xin tu gioi thieu ${title} + la l mot nguoi ${decs}`;
// console.log(string);


// var x = "100";
// var y = 20; 
// var z = true; 

// console.log(+x + y + z); //100 + 20 + 1


// var a = 10;

// a = a + 20;
// console.log(a); //30

// a = a + 70;
// console.log(a); //100

// a += 100;
// console.log(a); //200

// a -= 50;
// console.log(a); //150

// a /= 50; //3
// console.log(a);



var a = 10;
var b = "20";
var c = 80;

var test1 = ++a + +b++ + +c++ - +a++; //11 + 20 + 80 - 11
console.log(test1); //101
console.log(a, b, c); // 12 21 81
console.log("------------");

var test2 = ++a + -b + +c++ - -a++ + +a;  //13 - 21 81 13 14
console.log(test2);
console.log(a, b, c); //14 21 82
console.log("------------");

var test3 = --c + +b + --a * +b++ - +b * a + --a - +true; //81 + 21 + 13 * 21 - 22 * 13 + 12 - 1
console.log(test3);
console.log(a, b, c);
console.log("------------");