
// ----------------  ch no 1  ------------
// QNO: 01:
// let greet = alert ("Welcome to our website! We're glad to have you here.")   

// QNO: 02:
// let msg = alert("Error! please enter a valid number ")

// QNO: 03;
// let msgs = alert("Welcome to JS land..Happy coding!")

// QNO 04:
// let mesage = alert("Welcome Js land")
// alert("prevent to some additional");
// QNO: 05;
// let mesg = alert("hello  i can run JS code.")

// QNO:06;
// alert("welcome to Js project!!")


// --------------------- CH___#02; ----------------
// QNO #01;
let msg = "My name";
console.log(msg);

// QNO #02;
let myName = "noor-ul-ain"
console.log(myName);

// QNO #03;
// let title = "Hello world!"
// alert(title);

// QNO #04;
// let stdName = "Noor-ul-ain"
// let age = 19;
// let course = "Webdevelopment"
// alert(stdName);
// alert(age);
// alert(course);

// QNO #04;
// alert("PIZZA");
// alert("PIZZ");
// alert("PIZ");
// alert("PI");
// alert("P");

// QNO #05;
// let email = "noor@gmail.com";
// let adr = alert(`the email address you have entered is: ${email}`);

// QNO #06;
// let book = "A SMARTER WAY TO LEARN JAVASCRIPT";
// alert(`I am trying to learn ${book}`);

// QNO #07;
let scr = "Yah! I can write HTML content through JAVASCRIPT";
document.getElementById("message").innerHTML = scr;

// QNO #08;
// let emg = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” ";
// alert(emg);

// ----------------------- CH___ #03 -------------------------
// QNO #01;
// let age = 19;
// alert(age);

// QNO 02;
// p = "<h2>Visited site</h2>"
// document.write(p);
// let visitCount = localStorage.getItem('visitCount');
// if (!visitCount) {
//     visitCount = 0;
// }
// visitCount++;
// localStorage.setItem('visitCount', visitCount);
// alert(`You have visited this site ${visitCount} times.`);
// document.write(visitCount);

// QNO #04;
let brand = "<b>JOHN DOE</b> ordered <b>5-T-shirt</b>s on <a>XYZ clothing brand</a>."
document.getElementById("store").innerHTML = brand;

// QNO #03;
let birth = "<b>My birth year is 1990";
document.getElementById("birth").innerHTML = birth;   


// --------------------------- CH_______ #05--------------
// QNO #01;
p = "<h2>Operations</h2>"
document.write(p);
let a = 3;
let b = 5;
// addition
let sum = `The sum of ${3} and ${5} are = ${a+b}`;
document.getElementById("sum").innerHTML = sum;
// subtraction
let sub = `The subtraction of ${3} and ${5} are = ${a-b}`;
document.getElementById("sub").innerHTML = sub;
// divide
let divide = `The division of ${3} and ${5} are = ${a/b}`;
document.getElementById("divide").innerHTML = divide;
// multiplication
let mul = `The multiplication of ${3} and ${5} are = ${a*b}`;
document.getElementById("mul").innerHTML = mul;
// modulus
let modulus = `The modulus of ${3} and ${5} are = ${a%b}`;
document.getElementById("modulus").innerHTML = modulus;

// QNO #03:
// p = "<h2>Decleration</h2>"
// document.write(p)
// a. Declare a variable
let number ;
// b. Show the value of the variable after declaration
document.write(`"Value after variable declaration is:`);

// c. Initialize the variable with some number (e.g., 5)
number = 5;

// d. Show the initial value of the variable
document.write(`"Initial value: " ${+ number} "<br>"`);

// e. Increment the variable
number++;

// f. Show the value after increment
document.write("Value after increment is: " + number + "<br>");

// g. Add 7 to the variable
number += 7;

// h. Show the value after addition
document.write("Value after addition is: " + number + "<br>");

// i. Decrement the variable
number--;

// j. Show the value after decrement
document.write("Value after decrement is: " + number + "<br>");

// k. Get the remainder after dividing by 3
let remainder = number % 3;

// l. Show the remainder
document.write("The remainder is: " + remainder + "<br>");

//QNO #04;
p = "<h2>Ticket Counter</h2>"
document.write(p)
let ticketPrice = 600;
document.write(`Total cost to buy 5 tickets is = ${600*5} "<br>"`);

//  QNO #05;
p = "<h2>Table</h2>"
document.write(p)
let table = "Printing the multiplication table:";
document.write(table + "<br>");

// Prompt user to enter a number
// let n = prompt("Enter a number:");
// n = parseInt(n);

// Loop to generate and display the multiplication table
// for (let i = n; i <= n * 10; i += n) {
//     document.write(i + "<br>");
// }

// QNO #06;
p = "<h2>Temperature Conversions</h2>"
document.write(p)
let temperature = "Here are temperature converters `C` to `F`";
document.write(temperature + "<br>");
let celsius = 30; // You can change this value to any Celsius temperature

        // b. Convert Celsius to Fahrenheit
        let fahrenheit = (celsius * 9/5) + 32;

        // Output "NNoC is NNoF"
        document.write(celsius +"°C is " + fahrenheit + "°F<br>");

 fahrenheit = 40;
    // convert fahrenheit into celsius
    celsius = (fahrenheit - 32) * 5/9;
    // output NNoF is NNoC
    document.write(fahrenheit + "°F is " + celsius.toFixed(2) + "°C<br> <br>");

// QNO #07
h3 = "<h2>Shopping Cart</h2> <br>"
document.write(h3)
let priceItem1 = 650;
let priceItem2 = 550;
let quantityItem1 = 3;
let quantityItem2 = 2;
let shippingCharges = 100;
document.write(`price of item 1 is : ${650} <br>`);
document.write(`price of item 2 is : ${550} <br>`);
document.write(`Quantity of item 1 is : ${3} <br>`);
document.write(`Quantity of item 2 is : ${2} <br>`);
document.write(`Shipping charges is : ${100} <br>`);
document.write(`Total cost of your order is = ${(priceItem1*quantityItem1) + (priceItem2*quantityItem2)+ 100} <br> <br>`);

// QNO 08;
h3 = "<h2>Marksheet</h2> <br>";
document.write(h3)
let totalMarks = 1100 ;
let obtainedMarks = 880;
let percentage = (obtainedMarks/totalMarks) * 100 ;
document.write(`Total marks = ${totalMarks}` + "<br>")
document.write(`obtained marks = ${obtainedMarks}` + "<br>")
document.write(`percenatge = ${percentage} %` + "<br>")
document.write(`The Grade of result is = A <br> <br>`);

// QNO 09;
p = "<h2>Conversion</h2> <br>";
document.write(p)
 // Given amounts
 let usd = 10; // US dollars
 let sar = 25; // Saudi Riyals

 // Exchange rates
 let usdToPkr = 104.80; // 1 US Dollar to Pakistani Rupee
 let sarToPkr = 28;     // 1 Saudi Riyal to Pakistani Rupee

 // Calculate total in Pakistani Rupees in a single expression
 let totalPkr = (usd * usdToPkr) + (sar * sarToPkr);

 // Display the total amount in Pakistani Rupees
 document.write("Total amount in Pakistani Rupees: " + totalPkr.toFixed(2) + " PKR <br> <br>");

 // QNO 10;
 p = "<h2>Arithematic Operation</h2>"
 document.write(p)
 let variable = 20;
 let result = `${((variable + 5) *10) / 2} `
 document.write(`The all operation perfomed and result is = ${result}<br> <br>`);

 // QNO 11;
 p = "<h2>Age Calculator</h2>"
 document.write(p);
 let currentYear = 2024;
 let birthYear = 2008;
 document.write(`"Current Year" = ${ currentYear }  "<br>"`)
 document.write(`"Birth Year" = ${ birthYear }  "<br>"`)
 document.write(`Your age is = ${currentYear - birthYear}`)
// let birthY =1981
// let currentY = 2024
// let ageCa = AgeCalc(birthY, currentY); 
// document.write("birthYear" = "Current Year: " + currentY);
// document.write("currentYear" = "Birth Year: " + birthY);
// document.write("AgeResult"= "Your Age is: " + age);
// document.write(currentY-birthY)

// function AgeCalc(birthYear, currYear) {
//   return currYear - birthYear;   
// }  

// QNO 12;
p = "<h2>Radius of Circumtances</h2>"
document.write(p)
let radius = 20;
let cal = `${2*3.142*radius}`
document.write(`The radius of circle is ${cal} <br> <br>`)

//QNO 13;
p = "<h2> Life time supply calculator</h2>"
document.write(p)
// a. Store your favorite snack into a variable
let favoriteSnack = "Chips"; // Change this to your favorite snack

// b. Store your current age into a variable
let currentAge = 15; // Change this to your current age

// c. Store a maximum age into a variable
let maxAge = 65; // Change this to your desired maximum age

// d. Store an estimated amount per day (as a number)
let estimatedAmountPerDay = 2; // Change this to the estimated amount you consume per day

// e. Calculate how many would you eat total for the rest of your life
let yearsLeft = maxAge - currentAge; // Calculate the remaining years
let totalAmountNeeded = yearsLeft * 365 * estimatedAmountPerDay; // Calculate total amount needed

// Output the result
document.write("You will need " + totalAmountNeeded + " " + favoriteSnack + "(s) to last you until the ripe old age of " + maxAge + ". <br> <br>");


// _______________________ CH______ #04_________________________________;
p = "<h1>CH______ #04:Legal & Illegal</h1>"
document.write(p)
// QNO 01
let firstName = "spiderman", lastName = "Doe", age = 30;
document.write(firstName, lastName);
// QNO 02
let legal = `<br><br>userName, totalAmount, item_123, _privateVariable<br><br>`;
let illegal = `123user, total$amnt, first name, @username<br><br>`;
document.write(legal, illegal)
// QNO 03
document.write(`A variables can contain : letters, $, ____, numbers <br> <br> `)
document.write(`variables must begin : letters, $, __. For example $name, _name or name <br><br>`)
document.write(`Variable names are case sensitive <br><br>`)
document.write(`Variable names should not be JS keywords <br><br>`)








