Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
-Parameter: seperator(optional) a seperator which specifies how we want the seperate the string value using which seperator. By default "," will be the seperator
-Return: A string is returned with all the array elements if the array length is 0 empty string is returned(string data type)
-Example:
```js

    let numbers = [1, 2, 3];
    numbers.join(); //"1,2,3"
    numbers.join(" "); //"1 2 3"
    numbers.join("*"); //"1*2*3

```
`join`  This methods returns a string is returned with all the array elements if the array length is 0 empty string is returned
No it does not mutate the original array

3. `flat`
-Parameter: n(optional) n specifies the depth which means how deep we want to perform this operation on nested arrays by default it will be 1(number)
-Return: it returns a new array with nested array elements are concatinated to original array
-Example:
```js

      let numbers = [1,2,3];
      numbers.flat(); //[1, 2, 3]
      numbers = [1,2,[3,4]];
      numbers.flat(); //[1,2,3,4,5]
      [1,2,3,[4,5,[6,7]]].flat(2); //[1, 2,3,4,5,6,7]
```
`flat`  This method returns a new new array with nested array elements are concatinated to original array
No it does not mutate the original array

4. `push`
-Parameter: n this specifies the element or elements we want add to the end of the array
-Return: this method returns the length of the new array
-Example: 
```js
        let numbers = [1, 2, 3];
        numbers.push(4); //4
        numbers.push(5, 6); //6
        numbers.push("abc"); //7

```
`push`  This method is used to add element or elements to the end of the array. 
Yes it mutates the original array

5. `indexOf`
-Prameter: Two parameters searchValue The value we want to search
            startIndex specifies from where to start the search by default it will be 0. if it is same as the length of the array it will return -1 and if it is negative the starting point will calculated from the end of the array
-Return: It will return the indexof the first occcurance if the element is present or else -1
-Example:
```js
        let numbers = [1, 2, 3, 4, 5];
        numbers.indexOf(1) //0
        numbers.indexOf(7); //-1
        numbers.indexOf(1, 3); //-1

```
`IndexOf` This method checks for a value is present in array or not if present the index of the first occurance is returned or -1 is returned.
No it does not mutate the original array
6. `lastIndexOf`
-Parameter: Two parameters searchValue The value we want to search(Any data type)
            startIndex(optional) specifies from where to start the search by default it will be length of the array. In this method the searching will start from end of the array to the beginning of the array. We will start searchin gfrom the startIndex to the beginning of the array(number)
-Return: It will return the indexof the last occcurance if the element is present or else -1
-Example:
```js
         let numbers = [1, 2, 3, 4, 5];
        numbers.lastIndexOf(1) //0
        numbers.lastIndexOf(7); //-1
        numbers.lastIndexOf(3, 1); //-1

```
`IndexOf` This method checks for a value is present in array or not if present the index of the last occurance is returned or -1 is returned.
No it does not mutate the original array


7. `includes`
-Parameter: accepts two parameters element specifies the element to be searched for(any data type)
            startIndex the position from which to start the searching by default it is 0(number)
-Return: It will return true if the element is present and false if it is not
-Example: 
```js

      let colors = ["Aqua", "Brown", "green", "red", "orange"];
      colors.includes("Aqua"); //true
      colors.includes("orange", -1); //true
      colors.includes("brown"); //false

```
`includes` This method will search if a certain entry is present in the array if it is it returns true or else it returns false
No it does not mutate the original array

8. `reverse`
-Parameter: accepts no parameter
-Return: returns the revised array
-Example: 
```js
          [1, 2, 3, 4].reverse(); //[4, 3, 2, 1]
           let colors = ["Aqua", "Brown", "green", "red", "orange"];
           colors.reverse(); //["orange", "red", "green", "Brown", "Aqua"];
           colors.reverse(); //["Aqua", "Brown", "green", "red", "orange"]

```
`reverse` This method returns the reverse of the original array
Yes it mutates the original array

9. `every`
-Prameter: 1. callBackfn: This function is used to test every element in the original array. This function takes three arguments(object)
                  1. element(optional) the current element which is being processed in the array(any data type)
                  2. index(optional) index of the cuurent element(number)
                  3. array(optional) the original array(object)
  -Return: it returns true if the callback function returns true for every array elements or else false
  -Example:
  ```js
        let numbers = [1, 2, 3, 4, 5, 6];

        function isGraeterThanZero(num) {
          return num > 0;
        }

        numbers.every(isGreaterThanZero); //true

        function isGraeterThanFive(num) {
          return num > 5; 
        }

        numbers.every(isGreaterThanFive); //false

        let result = numbers.every(function(num) {
          return num % 2 === 0;
        });
         console.log(result); //false

  ```
  `every` This method returns true if the callback function returns true for every array elements or else false
  No it does not mutate the original array

10. `shift`
-Parameter: no parameters
-Return: it returns the removed element
-Example: 
```js
          let numbers = [1, 2, 3, 4];
          numbers.shift(); // 1
          let colors = ["Aqua", "Brown", "green", "red", "orange"];
          colors.shift(); //"Aqua"
          numbers.shift(); //2
```
`shift` This method is used to remove the first element of the array and it returns the removed element.
Yes it mutates the original array

11. `splice`
-Parameter: accepts 3 parameters 1. startIndex specifies from where to start changing the elements. If only startIndex is mentioned the elements will remeoved from the start index to end of the array(number)
2. deleteCount(optional) specifies the number of elements we want to delete from the start index(number)
3. item1, item2,..(optional) it specifies the lements we want to add to the arrau starting from the start index.(any data type)
-Return: returns the array of removed elements
-Example:
```js
      let numbers = [1, 2, 3, 4];
      numbers.splice(1); //[2, 3, 4]
      numbers.splice(1, 0, 2, 3, 4); //[1, 2, 3, 4,]
      numbers.splice(2, 2); //[3, 4]

```
`splice` This method is used to remove or add new elements to the original array and it returns the removed elements in an array.
Yes it mutates the original array

12. `find`
-Prameter: 1. callBackfn: This function is used to test every element in the original array. This function takes three arguments(object)
                  1. element(optional) the current element which is being processed in the array(number, string, boolean, undefined etc)
                  2. index(optional) index of the cuurent element(number)
                  3. array(optional) the original array (object)
-Return: returns the value of the first element in the array that satisfies the callback function or else it returns undefined
-Example:
  ```js
          let numbers = [34, 20, 21, 86, 10, 4, 8, 67];
          numbers.find(function(num) {
            return num > 50;
          });         //86
          numbers.find(function(num){
            return num % 2 === 0;
          });    //34
        numbers.find(function(num) {
          return num > 1000;
        });  //undefined
```
`find` This method checks the callback function with every element in the array. first element in the array that satisfies the callback function or else it returns undefined
  No it does not mutate the original array

13. `unshift`
-Parameter: element the element to be added at the front of the array(any data type)
-Return: The length of the updated array
-Example: 
```js

        let numbers = [1, 2, 3, 4, 5];
        numbers.unshift(10, 20); //7
        numbers.unshift("abc", "xyz"); //9
        numbers.unshift(undefined); //10

```
`shift` This method is used to add elements at the front of the array and it returns the length of the updated array
Yes it mutates the original array

14. `findIndex`
-Parameter: 1. callBackfn: This function is used to test every element in the original array. This function takes three arguments(object)
                  1. element(optional) the current element which is being processed in the array(number, string, boolean, undefined etc)
                  2. index(optional) index of the cuurent element(number)
                  3. array(optional) the original array (object)
-Return: returns the index of the first element that passes the callback function otherwise -1
-Example: 
```js
        let numbers = [34, 20, 21, 86, 10, 4, 8, 67];
        numbers.findIndex(function(num) {
          return num > 0;
        });  //0

        numbers.findIndex(function(num) {
          return num > 80;
        }); //3
        numbers.findIndex(function(num) {
          return num < 0 ;
        }); //-1

```
`findIndex` This method returns the index of the first element that passes the callback function otherwise -1
No it does not mutate the original array

15. `filter`
-Prameter:  1. callBackfn: This function is used to test every element in the original array. This function takes three arguments(object)
                  1. element(optional) the current element which is being processed in the array(number, string, boolean, undefined etc)
                  2. index(optional) index of the cuurent element(number)
                  3. array(optional) the original array (object)
-Return: It returns the elements that pass the callback function in a new array otherwise it returns an empty array
-Example: 
```js
        let numbers = [34, 20, 21, 86, 10, 4, 8, 67];
          numbers.filter(function(num) {
            return num % 2 == 0;
          }); //[34, 20, 86, 10, 4, 8]
        numbers.fiter(function(num) {
          return num > 30;
        }); //[34, 86, 67]
        numbers.filter(filter(num) {
          return num > 1000;
        }); //[]
```
`filter` This method returns an array of elements based on the result of the callback function. It returns the elements that pass the callback function in a new array otherwise it returns an empty array
No it does not mutate the original array

16. `flat`
-Parameter: n(optional) n specifies the depth which means how deep we want to perform this operation on nested arrays by default it will be 1(number)
-Return: it returns a new array with nested array elements are concatinated to original array
-Example:
```js

      let numbers = [1,2,3];
      numbers.flat(); //[1, 2, 3]
      numbers = [1,2,[3,4]];
      numbers.flat(); //[1,2,3,4,5]
      [1,2,3,[4,5,[6,7]]].flat(2); //[1, 2,3,4,5,6,7]
```
`flat`  This method returns a new new array with nested array elements are concatinated to original array
No it does not mutate the original array

17. `forEach`
-Parameter: 1. callBackfn: This function is used to test every element in the original array. This function takes three arguments(object)
                  1. element(optional) the current element which is being processed in the array(number, string, boolean, undefined etc)
                  2. index(optional) index of the cuurent element(number)
                  3. array(optional) the original array (object)
-Return:  undefined
-Example: 
```js

        let numbers = [34, 20, 21, 86, 10, 4, 8, 67];
        numbers.forEcah(function(num) {
          console.log(num);
        }); 
        // 34
          20
          21
          86
          10
          4
          8
          67
          let sum = 0;
        numbers.forEach(function(num) {
          sum += num;
        });
        console.log(sum); //250

        let finalArray [];
        numbers.forEach(function(num) {
          if(num % 2 === 0) {
            finalArray.push(num);
          }
        });

        console.log(finalArray); //[34, 20, 21, 86, 10, 4, 8]



```
`forEach` This method executes the callback function with every element in the array
No it does not mutate the original array
18. `map`
-Parameter: 1. callBackfn: This function is used to test every element in the original array. This function takes three arguments(object)
                  1. element(optional) the current element which is being processed in the array(number, string, boolean, undefined etc)
                  2. index(optional) index of the cuurent element(number)
                  3. array(optional) the original array (object)
-Return: it returns a new array with results of callback function
-Example:
```js
        let numbers = [34, 20, 21, 86, 10, 4, 8, 67];

        function addTwo(num) {
          return num + 2;
        }
          numbers.map(addTwo); //[36, 22, 23, 88, 12, 6, 10, 69]

        function multiplyByFive(num) {
          return num * 5;
        }

        numbers.map(multiplyByFive); //[170, 100, 105, 430, 50, 20, 40, 335]

        function addFive(num) {
          return num + 5;
        }
        numbers.map(addFive); //[39, 25, 26, 91, 15, 9, 13, 72]
```
`map` This function returns a new array based on the callback function. The array size will be same as that of the original array
No it does not mutate the original array

19. `pop`
-Parameter: no parameter
-Return: it returns the removed element from the array
-Example
```js
        let numbers = [1, 2, 3, 4];
        numbers.pop(); //4
        numbers.pop(); //3
        numbers = [34, 20, 21, 86, 10, 4, 8, 67];
        numbers.pop(); //67


```
`pop` This method removes element from the end of the array and it returns the removed element
Yes it mutates the original array

20. `reduce`
-Parameter: 1. callBackfn: This function is used to test every element in the original array. This function takes four arguments(object)
                  1. accumulator The accumulator accumulates callback's return values if initial value parameter is supplied this will be the initial value of the accumulator (any data type)
                  2. currentValue the current element which is being processed in the array(number, string, boolean, undefined etc)
                  3. index(optional) index of the cuurent element(number)
                  4. array(optional) the original array (object)
            2. initialValue(optional) :- If this value is passed it will the initial value for the accumulator or else the first lement in the array will be the first element of the accumulator
-Return: returns a single value based on the callback function
-Example: 
```js

        let numbers = [34, 20, 21, 86, 10, 4, 8, 67];
        numbers.reduce((acc, curr) => {
          return acc + curr;
        }, 0); //250

        let colors = ["orange", "red", "green", "Brown", "Aqua"];
        colors.reduce((acc, curr) => {
          return acc + curr
        }, ""); //"orangeredgreenBrownAqua"

        numbers = [1, 2, 3, 4];
        numbers.reduce((acc, curr) => {
          return acc + curr;
        }, 0); //10

```
`reduce` This method executes the callback function on every element in the array return a single value based on the callback function
No it does not mutate the original array

21. `slice`
-Paramter: accepts two parameters 1. start(option) specifies from where to start the extraction. By default it will be 0.(number)
                                  2. end(optional) specifies the position before the extraction stops. If not defined the array will be extracted from start to end of the array(number)
-Return: a new array containing the extracted elements
-Example:
```js
        let colors = ["orange", "red", "green", "Brown", "Aqua"];
        colors.slice(2, 5); //["green", "Brown", "Aqua"]
        colors.slice(); //["orange", "red", "green", "Brown", "Aqua"]
        colors.slice(-4, -1); //["red", "green", "Brown"]


```
`slice` This method extracts an array and returns the a new array containing the extrated elements
No it does not mutate the original array

22. `some`
-Parameter: 1. callBackfn: This function is used to test every element in the original array. This function takes three arguments(object)
                  1. element(optional) the current element which is being processed in the array(number, string, boolean, undefined etc)
                  2. index(optional) index of the cuurent element(number)
                  3. array(optional) the original array (object)
-Return: it returns true if the callback function return true for any array element otherwise false
-Example: 
```js

        let colors = ["orange", "red", "green", "Brown", "Aqua"];
           colors.some(function(color) {
                return color.includes("red");
            }); //true

            colors.some(function(color) {
              return color.includes("yellow");
            }); //false
          colors.some(function(color) {
            return color.length > 2;
          }); //true


```
