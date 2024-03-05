// equality & inequality with strings
const str1:string = "Areeba";
const str2:string = "Hammad";
console.log(str1 !== str2)//true
console.log(str2 === str1)//false

// test using the lower case function
const str3:string = "Hello world";
const str4:string = "hello world";
console.log(str3.toLowerCase() === str4)//true

/* numerical tests:
equality & inequality*/
const num1:Number = 8;
const num2:Number = 16;
console.log(num1 === num2);//false 
console.log(num2 !== num1);//true

// greater than & less than
console.log(num1 > num2);//false
console.log(num1 < num2);//true

// greater than or equal to & less than or equal to
const num3:Number = 40;
const num4:Number = 44;
console.log(num3 <= num4);//true
console.log(num3 >= num4)//false

// test using "and" & "or" operators
const a:number = 30;
const b:number = 20;
const c:number = 10;
console.log(a > b && b > c);//true
console.log(a < c || b < a);//true at least 1
console.log(a > b && b < c);//false
console.log(c > a || b > a);//false

// test whether an item is in a array
const basket: string[]= ["Mango","Stawberry","Pineapple","Guava"];
console.log(basket.indexOf("Stawberry") === 1)//true
console.log(basket.indexOf("Grapes") !== -1);//false

// test whether an item is not in a array
const flowers: string[] =["Red Rose","Jasmine","Sun Flower","Lily"];
console.log(!flowers.indexOf("Red Rose"));true
console.log(!flowers.indexOf("Lotus"));false