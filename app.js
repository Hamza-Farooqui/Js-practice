// 1) Write a program to display the message “Hello World” 5 times in your browser using for loop.

// for(var i=1; i<=5; i++){
//     document.write("Hello World <br>")
// }

// 2) Write a program to print numeric counting from 1 to 10.

// for(var i=1; i<=10; i++){
//     document.write(i)
// }

// 3) Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user

// var UserInput = +prompt("Enter a number")
// var tableLength = +prompt("Enter a number")
// for(var i=1; i<=tableLength; i++){
//     var result = i * UserInput
//     document.write(UserInput + "x" + i + "=" + result + "<br>")
// }

// 4) You have an array A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”] Write each element on new line with the help of for loop

// var Mobilecom = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]

// document.write("<ul>")
// for(var i=0; i<Mobilecom.length; i++){
//     document.write(`<li>${Mobilecom[i]}</li>`)
// }
// document.write("</ul>")

// 5) Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”

// fruits = ["apple", "banana", "mango", "orange", "strawberry"]


// document.write("<ul>")
// for(var i=0; i<fruits.length; i++){
//     document.write(`<li>${fruits[i]}</li>`)
// }
// document.write("</ul>")

// 6) Write a program to initialize an array of N items by using prompt. Where N is number of items as entered by the user

// var usernumber = +prompt("Enter a number")
// var items = []
// for(var i=0; i<usernumber; i++){
//     var item = prompt("Enter Value item" + (i + 1) +  ".");
//     items.push(item+"<br>")
//  }
//  document.write("Number of  items:"  + usernumber + " <br> items: <br>" + items  )

// 7) Generate the following series in your browser. See example output.
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20

//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// for(var i=1; i<=15; i++){
//    document.write(`${i}, `)
//  }

//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// for (var i=10; i>=0; i--) {
//     document.write(`${i}, `)
//}

//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// for (var i = 0; i <=20; i+=2) {
//     document.write(`${i}, `)
// }

//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// for (var i = 1; i <=19; i+=2) {
//          document.write(`${i}, `)
//      }

//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// for (var i = 2; i <=20; i+=2) {
//          document.write(`${i}k, `)
//      }

// 8) You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example

//  var Bakery = ["cake", "apple pie", "cookie", "chips", "patties"] 

//  function Search(item){
//     for(var i=0; i< Bakery.length; i++){
//         if(Bakery[i] === item){
//             return true
//         }
//     }
//     return false
//  }


//  var UserInput = prompt("Search items")

//  if(Search(UserInput)){
//     alert("Hn bhai hai yr lena hai apko")

//  }
// else{
//     alert("Hn bhai ye available nh hai")
// }

// 9) Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]

// let number = [24, 53, 78, 91, 12,123,214]

// let largest = number[0]
//  for(var i=1; i< number.length; i++){
//     if(number[i] > largest){
//         largest = number[i]
//     }
//  }
// alert("The largest number in the given array is " +largest)

// 10) Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]

//  let number = [7,35,5,24, 53, 78, 91, 12]

// let smallest = number[0]
//   for(var i=1; i< number.length; i++){
//      if(number[i] < smallest){
//         smallest = number[i]
//     }
//   }
//  alert("The largest number in the given array is " +smallest)

// 11) Write a program to identify the largest & the smallest number in the given array. A = [24, 53, 78, 91, 12]

//  let number = [24, 53, 78, 91, 12,123,214]

//  let largest = number[0]
//   for(var i=1; i< number.length; i++){
//      if(number[i] > largest){
//          largest = number[i]
//      }
//   }
//  alert("The largest number in the given array is " +largest)

//  let smallest = number[0]
//    for(var i=1; i< number.length; i++){
//       if(number[i] < smallest){
//          smallest = number[i]
//     }
//    }
//   alert("The largest number in the given array is " +smallest)


  
  
  
  
  
  