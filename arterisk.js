// for(let arterisk=1; arterisk<6 ; arterisk++){
//     console.log("*")
// }
// for(let arterisk=1; arterisk <6; arterisk++){
//     console.log("*****")
// }
// let starRow=""
// for (let rows= 1; rows <6; rows++) {
//     starRow=""
//     for (let collumn = 1; collumn < 6; collumn++) {
//         starRow = starRow + "*"
//         if(collumn==5){
//             console.log(starRow);
//         }
//     }
//   }

let starRow=""
for (let rows= 1; rows <6; rows++) {
    starRow=""
    for (let collumn = 1; collumn <=rows; collumn++) {
        starRow = starRow + "*"
        if(collumn==rows){
            console.log(starRow);
        }
    }
}