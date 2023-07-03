// for (let deret=2; deret<=20; deret+=2){
//     console.log(deret + " - I Love Coding")
// }
// for(let deret=20; deret>=2; deret-=2){
//     console.log(deret + " - I will become fullstack developer")
// }
// for (let deret=0; deret<20; deret++){
//     console.log(deret+1 + " - I Love Coding")
// }
// for(let deret=20; deret>0; deret--){
//     console.log(deret + " - I will become fullstack developer")
// }

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:
// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:
// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3" dan seterusnya.

// for(let counter=0; counter <101; counter++){
//     if(counter ==0) continue;
//     if(counter % 2 ==1){
//         console.log("GANJIL", counter)
//     } else console.log("GENAP", counter)
// }

for(let counter=1; counter<101; counter+=2){
    if(counter % 3 == 0 ){
        console.log(counter + " Kelipatan 3")
    } else console.log('" "');
}
for(let counter=1; counter<101; counter+=5){
    if(counter % 6 == 0){
        console.log(counter + " Kelipatan 6");
    }else console.log('""');
}
for(let counter=1; counter<101; counter+=9){
    if(counter % 10 == 0){
        console.log(counter + " Kelipatan 10");
    }else console.log('"');
}
//cara ngopy alt + shift + kursor ke bawah
// git add .
//git commit -m "for-loop"
//git push origin master