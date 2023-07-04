//Diberikan sebuah function konversiMenit(menit) 
// yang menerima satu parameter berupa angka 
// yang merupakan ukuran waktu dalam menit. 
// Function akan me-return string waktu dalam 
// format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, 
// maka function akan me-return "1:03".

function konversiMenit(menit) {
    // you can only write your code here!
    const getMenit= menit % 60
    const getJam= (menit-getMenit)/60
    let formatMenit=getMenit
    if (getMenit<10) {
        formatMenit="0"+getMenit
    }
    return(getJam + ":" + formatMenit)
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00

// Diberikan sebuah function xo(str) yang menerima
// satu parameter berupa string. Function akan me-return 
// true jika jumlah karakter x sama dengan jumlah karakter 
// o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    let simpanX=""
    // let simpanO=""
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (element=="x") {
            simpanX= simpanX + "x"
        // } else {
            // simpanO=simpanO + "O"
        }
    }
    
    return(simpanX.length==str.length-simpanX.length)
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true