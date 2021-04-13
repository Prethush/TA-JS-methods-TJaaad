Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

    -Parameter: no parameter
    -Return:  A new stringwhich represents the calling string in uppercase(string data type)
      -Example: 
      ```js
            let name = "Arya Stark";
            name.toUpperCase(); //"Arya Stark"

            "hello".toUpperCase(); //"Hello"
            "a".toUpperCase(); //"A"
     ```
    `toUpperCase` : it coverts the calling string to uppercase letters

3. `toLowerCase`

  -Parameter: no parameter
  -Return: The calling string converted to lowercase (string data type).
  -Example:

       let name = "Arya Stark";
       name.toLOwerCase();  //"arya stark"
       "Hello".toLowerCase(); //"hello"
       "ABC".toLOwerCase(); //"abc"

  `toLowerCase` : it converts the calling string in to lowercase letters

4. `trim`

-Parameter:  no parameters
-Return: A new string with no white space at both ends (string data type)
-Example:  

```js
    let name= "   Arya Stark";
    name.trim(); //"Arya Stark"
    "Hello      ".trim(); //"Hello"
    "    abc     ".trim(); //"abc"

```
`trim`  This method returns a new string with no white spaces at both ends

5. `trimEnd`

-Parameter:  no parameter
-Return:-  A new string with no white spaces at the end of the string(string data type)
-Example: 

```js
        let name = "Arya Stark     ";
        name.trimEnd();  //"Arya Stark"
        "Hello     ".trimEnd(); //"Hello"
        "     abc".trimEnd(); //"     abc"
```

`trimEnd`  This method returns a new string with no white space at the end of the string


6. `trimStart`

-Parameter: no parameter
-Return: A new strring with no white spaces at the starting of the string(string data type)
-Example:

```js

      let name = "    Arya Stark";
      name.trimStart(); //"Arya Stark"
      "   Hello".trimStart(); //"Hello"
      "abc    ".trimStart(); //"abc    "

```
`trimStart` This method returns a new string with no white space at the starting of the string

7. `concat`

-Parameter: strings to containate with the original string (2 or more strings)
-Return: A new string contained the combined text of all the concatinated strings (string data type)
Example:
```js
        let name = "Arya Stark";
        name.concat(" ", "Lady of Winterfell"); //"Arya Stark Lady of Winterfell"
        "Hello".concat(" World!"); //"Hello World!"
        let userName = "John Snow";
        name.concat(" is the sister of ", userName); //"Arya Stark is the sister of John Snow"

```
`concat`  This method returns a new string contained the combined text of all the concatinated strings 

8. `endsWith`

-Parameter:  accepts two parameters  1. The character to be searched for at the end of the sting
                                    2. length of the string(optional) if we are mentioning this value then search will happen with in this length of the string if not length of the string will taken as default
-Return: return true or false if the specified character found at the end of the string or not (boolean type)
Example: 

```js

      let name = "Arya Stark";
      name.endsWith("rk");  //true
      name.endsWith("St"); //false
      name.endsWith("rk", 5); //false

```
`endsWith`  This method checks if a character is present at the end of the string based on that it returns true or false.

9. `includes`
-Parameter: Accepts two parameters 1. A string to be searched wheather it is present in the original string
                                    2. position(optional) mentions the position to start the search in a string by default it will be zero
-Return: true if the string is found else false(boolean data type)
-Example:

```js
         let name = "Arya Stark";
         name.includes("Stark"); //true
         name.includes("stark") //false
         name.includes("Stark", 8); //false

```
`includes` THis method checks if a character or a word is present in the string if it is it will return true and if it is not it will return false.

10. `indexOf`
-Parameter: accepts to parameters 1. The string value to search for if no string value is provided search value wiil be changed to "undefined"
                                  2. fromIndex(optional) the search will start from the from index by default it will search from 0

-Return: it will return the index first occurance of the string if the string is present else -1 (number data type)
-Example:

```js

   let name = "Arya Stark";
   name.indexOf("a"); //3
   name.indexOf("a", 5); //-1
   name.indexOf("r"); //1

```
`indexOf` It is used to search a word or character if present it will return the index of the first occurance else  returns  -1

11. `lastIndexOf`
-Parameter: accepts two parameters  1. A string value which needs to be searched. if not provided provided it will return -1.
                                    2. fromIndex(optional) it is provided the search will start from here to the beginning of the string by default the value +infinity
-Return:-  index of the last occurance or -1 (number data type)
-Example:  
```js
          let name = "Arya Stark";
          name.lastIndexOf("r"); //7
          name.lastIndexOf("r", 4); //1
          name.lastIndexOf("xyz")// -1

```
`indexOf` It is used to search a word or character if present it will return the index of the last occurance else  returns  -1

12. `padEnd`
-Parameter:  accepts two parameters  1. targetLength: The length of the resulting string once the current string has been padded
                                      2. padString(optional): The string to pad the current string with. (string dtat type)
                                
-Return: A string of the specified target length with padString applied at the end of the current string.
-Example:
```js
      let name = "Arya Stark";
      name.padEnd(20); //"Arya Stark     "
      name.padEnd(20, "*"); //"Arya Stark*******"
      name.padEnd(30); //"Arya Stark           "

```
`padEnd` This method returns a string of the specified target length with padString applied at the end of the current string.

13. `padStart`
-Parameter:  accepts two parameters  1. targetLength: The length of the resulting string once the current string has been padded
                                      2. padString(optional): The string to pad the current string with. 
                                
-Return: A string of the specified target length with padString applied at the start of the current string.(String data type)
-Example:
```js
      let name = "Arya Stark";
      name.padStart(20); //"       Arya Stark"
      name.padStart(20, "*"); //"*********Arya Stark"
      name.padStart(30); //"                 Arya Stark           "

```
`padStart` This method returns a string of the specified target length with padString applied at the start of the current string.

14. `repeat`
-Parameter- count:- A value between 0 and +infinity
-Return: A new string containing the specified copies of the current string(string data type)
-Example
```js
      let name = "Arya Stark";
      name.repeat(3); //"Arya StarkArya StarkArya Stark"
      name.repeat(0); //""
      name.repeat(1); //"Arya Stark"

```
`repeat`  This method returns a  new string containing the specified copies of the current string.

15. `replace`
-Parameter: accept two parameters  1. substr: A character or a word that we want to replace. Only first occurance will be replaced
                                    2. newSubstr: The string that replaces the subStr
-Return: A new string with some or all matches of a pattern replaced by a replacement(string data type)
-Example:

```js
    let name = "Arya Stark";
    name.replace("Stark", "Winterfell"); //"Arya WinterFell"
    name.replace("Arya", "Sansa"); //"Sansa Stark"
    name.replace("Arya Stark", "John Snow"); //"John Snow"

```
`replace`  THis method returns a new string with some or all matches of a pattern replaced by a replacement

16. `slice`
-Parameter: accepts to parameters  1. beginIndex: The index at which begin extraction. If it is not a number it is considered as 0, if it freater or equal to the length of the string an empty string is returned
   2. endIndex: The index before which to end extraction. This index is not included. If we don't mention this index the extraction will start from the beginIndex and move towards the end of the string

-Return: A new string containing the extracted part of the original string(string data type)
-Example

```js

    let name = "Arya Stark"
    name.slice(2, 5); //"ya "
    name.slice(); //"Arya Stark"
    name.slice(1); //"rya Stark"

```
`slice` This meethod will return a A new string containing the extracted part of the original string.

17. `split`
-Parameter: accepts two parameters 1. Seperator: The pattern describing where each split should occur. If the seperator is an empty string the original string will be divided in to character of strings. If the seperator is not present in the original string then an array of the original string will be returned
   2. Limit: specifies the limit for the split it is a non-negative integer
-Return: An array of strings split at each point where the seperator occurs in the given string(string data type)
-Example
```js
  let name = "Arya Stark"
  name.split(""); //["A", "r", "y", "a", " ", "S", "t", "a", "r", "k"];
  name.split(" "); //["Arya" "Stark"]
  name.split("*"); //["Arya Stark"]


```
`split` This method returns An array of strings split at each point where the seperator occurs in the given string.

18. `substring`

-Parameter: accepts two parameters 1. startIndex: The index at which the extraction will start
                                    2. endIndex(optional): The index before which the extraction will stop(not including)
-Return: A new string containing the specified part of the original string(string data type)
-Example:

```js

      let name = "Arya Stark";
      name.substring(); //"Arya Stark"
      name.substring(1, 5); //"rya "
      name.substring(5, 1); //"rya "

```
`substring` This method will return A new string containing the specified part of the original string
