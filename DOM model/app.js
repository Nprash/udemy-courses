// //1. while click to change text on the document
// changeText= (id) => {
//     id.innerHTML = "New Text"
// }

// // 2 Find your age in dog years

// dogyears= (form)=>{
//     form.dogage.value = form.myage.value*7
// }

// // 3. document.write function                                  
// document.write(2+8);

// // 4.for window alert we use window.alert
// // window.alert(2+12);

// // 5.getElementById with innerhtml
// document.getElementById('value').innerHTML = 6+44;

// // print minimm number
// let p = document.getElementById('demo2').innerHTML= Math.min(200,300,150,-90,400);
// let q = document.getElementById('demo2').innerHTML= Math.max(200,300,150,-90,400);
// let r = document.getElementById('demo2').innerHTML= Math.round(15.6); // it will rounds up
// let s = document.getElementById('demo2').innerHTML= Math.floor(15.6); // it will rounds down
// // let t = document.getElementById('demo2').innerHTML= Math.cell(15.1); // it will rounds down
// console.log(p,q,r,s);
// // array attributes print array with , not enclosing with quotes
// var fruits= ["apple", "orange", "tamarind", "pineapple"];
// document.getElementById('test').innerHTML = fruits.toString(); //by default it will print with seperated by ,
// document.getElementById('test').innerHTML = fruits.join("@"); //we can define how to print with seperation by
// fruits.pop(); // removes last one from fruits array
// fruits.push("cherry"); //  adds to aray at very end
// fruits.shift("turmeric"); // removes beginning one from fruits array
// fruits.unshift("budd"); // adds to beginning of an aray
// fruits[0] = "kivis"  //replace at the desired index position in an array
// delete fruits[3]; // delete certain given index positined value
// console.log(fruits);
// //  splice method will add or delete symultaneously
// fruits.splice(2, 2, "lemon", "banana") //2 indicates index position that we want to add after it, 0 or 2nd argument indicates how many values we want to delete after given index position
// console.log(fruits);
// //slice will catch the substring in a string
// fruits.slice(0, 1) // which means 1st argument is index position 2nd argument will be the number of charactersthat we want to print

// // to sort alphabetical order of an array ; sorting different methods 
// fruits.sort(); //sorts alphabetical order of an array
// fruits.reverse(); //sorts revers order of an array
// console.log(fruits);

// // join array with concat  methos
// let girls = ["julie", "jill", "sannti"]
// let boys = ["bob", "antonio","fred"]
// let combine = girls.concat(boys);
// console.log(combine);

// // for loop

// var count;
// for (count=0; count<= 15; count++){
//     // console.log(count);
//     document.write(count);
//     document.write("<br/>")  // it willbreaks the newline formation, which means it will print in a single line             
// }

// // for in loop
// var text="";
// var person = {firstname:"john", lastname:"smith", age:40};

// for (x in person){
//     // text+=person[x] + " ";
//     text= text+person[x] + "; " // it will ; semicoln for each iteration
// }
// document.getElementById('red').innerHTML = text;
// console.log(text);

// //while loop

// var cc= 4;
// while(cc<8){
//     console.log(cc);
//     cc++;
// }

// // do wile loop

whileclick = () => {
    var xl =0;
    do{
        document.write(xl + "<br/>");
        xl++;
    }
    while (xl < 10)
}

// break and continue

// var k;
// for (k = 0; k < 10; k++) {
//     if (k === 5) break //it breaks when k reaches 5
//         document.write(k + "<br>");
    
// }

// var k;
// for (k = 0; k < 10; k++) {
//     if (k === 5) continue // it continues even if k reaches 5
//         document.write(k+ ",");
    
// }

// Java Script Events
//  EX:-  Mouse clicks ; MouseOover; Mouse Out; Key Down; document Load
