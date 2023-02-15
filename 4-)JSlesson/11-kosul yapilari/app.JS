/* 
!if(kosul)
 *kodlar
}else {      
 *kodlar
}
TODO: if kosulu dogru degilse else blogu calisir dogru ise if blogu calisir
*/

let note = 85;

if(note>=50) {
    console.log("You passed the lesson: " + note);
}else {
    console.log("You couldn't pass the lesson: " + note);
}




let age = prompt("Age: ");
let  money = prompt("Your Money: ");

if(age>=18 && money>=1500) {
console.log("You are rich! ");

}else {
console.log("You are broke! ");
}