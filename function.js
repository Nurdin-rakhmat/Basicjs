/*
 BUATLAH KODE FUNCTION DISINI
*/
function shoutOut(){
    return("Halo Funnction!")
}
console.log(shoutOut()) // Menampilkan "Halo Function!" di console
function tampilkan(a,b) {
    console.log("halo!");
    console.log(a+b);
  }
  tampilkan()

  function f(g,h){
    return(g*h)
  }
  f(3,50)

  /*
 BUATLAH KODE FUNCTION DISINI
 */
 function calculatemultiply(num1,num2){
return(num1*num2)
 }
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculatemultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

// Tugas 3

/*
 BUATLAH KODE FUNCTION DISINI
*/
function processSentence(name,age,address,hobby){
  return("nama saya " + name +", "+"umur saya "+ age +", alamat saya di "+ address +", dan saya punya "+ hobby)
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 
// Menampilkan "Nama saya Agus, umur saya 30 tahun,
//  alamat saya di Jln. Malioboro, Yogjakarta, 
//  dan saya punya hobby yaitu gaming!"

function luasLingkaran(r){
  return(Math.PI*r*r)
}
var tampung1=luasLingkaran(10)
console.log(tampung1)

function kelilingLingkaran(r){
  return(2*Math.PI*r)
}
var tampung2=kelilingLingkaran(10)
console.log(tampung2)

function lingkaran(instruksi,r){
  if(instruksi=="luas"){
    return(luasLingkaran(r))
  }else if(instruksi=="keliling"){
    return(kelilingLingkaran(r))
  }
}

console.log(lingkaran("luas",100))
console.log(lingkaran("keliling",100))

// Menentukan Akar-akar persamaan Kuadrta

function akarPersamaan(a,b,c){
  let D=(b*b-(4*a*c))
  if(D>=0){
    let x1= ((-b+Math.sqrt(D))/(2*a))
    let x2= ((-b-Math.sqrt(D))/(2*a))
    return("akar x1= "+x1 +" akar x2 ="+ x2)
  }else {
    return("akar-akar tidak real")}
}
console.log(akarPersamaan(1,5,6))
console.log(akarPersamaan(1,1,2))

function luasBelahKetupat(d1,d2){
  return((d1*d2)/2)
} 
console.log(luasBelahKetupat(10,15))

