/*
1. Declare a variable named `student` and create the following properties (key-value pairs) to the object:
   
    - add a key named `name` and set it to a string value of your choice
    - add a key named `age` and set it to a number value of your choice
    - add a key named `favFood` and set it to a string value of your choice
    - add a key named `favMovie` and set it to an array with two string elements in it
    - add a key named `favHobby` whindexich will be a method that return a string of your choice; 
 */ 

var student= {
               name: "haden",
               age:15,
               favfood: "Hawaiin",
               favMovie: ["Dragon Ballz", "bird box"],
               favhobby: "gaming"

              };

//var student=1;
//var student=[]
/*
 
 2. Console.log the following phrase by accessing the appropriate object properties that you created in #1:
 
 "'name' is 'age' years old and likes to 'favHobby'."
 */
console.log(student.name + student.age + "years old and likes" + student.favhobby)
  /*
    3.  Declare a variable named `house` and assign it to an EMPTY object.
  */
 var house ={};
  /*
    4.  Add the following properties to this object. Each property declaration expression will be on its own line and
     ending with semicolons (`;`). 
              - add a property named `stories` and set it to a number of your choice
              - add a property named `color` and set it to a string of your choice
              - add a property named `size` and set it to a string of your choice including the unit sq feet.
              - add a property named `buy` and set it to a method that will return a string "Hell Yeah!"
*/
  house.stories = 3;
  house.color = "light grey";
  house.size = "6000 sq feet";
  house.buy = function(){
    return "hell yeah!";
  };
/*
    5.  Complete the following:
            - Console.log the object.
            - Invoke the method set for the property 'buy'.
*/
console.log(house);
console.log(house.buy())
  /* 
    6. Declare a variable named `birthdayGift` and set its value to be an EMPTY object.
     Next, you will add three properties to this object. 
              - add a property named `bagOrBox` and set it to a string of your choice (would you like a bagged or boxed gift?).
              - add a property named `size` and set it to a number value between `0` and `20`.
              - add a property named `contents` and set it to be an empty array.
  */
  var Birthdaygift = {};
  Birthdaygift.bagorbox = "box";
  Birthdaygift.size = 10;
  Birthdaygift.content = [];

  /*
     7. Add 3 elements to your birthdayGift contents property
 */
 Birthdaygift.contents[0] = "xbox";
 Birthdaygift.contents[1] = "gucci";
 Birthdaygift.contents[2] = "chainz";

console.log(birthdaygift.contents);
 /*
     8. Declare a variable named `bestMusicAlbum` and create the following properties (key-value pairs) to the object:
              - add a key named `artist` and set its value to the name of an artist of your choice.
              - add a key named `year` and set it to be a number value of your choice.
              - add a key named `albumCover` and set it to a string of your choice.
              - add a key named `user` and set it to be `null`.
              - add a key named `songs` and set it to be an empty array.
  */
  var bestMusicAlbum = {
                      artist: "queen",
                      year: 1980,
                      albumcover: "Bohemian Rhapsody",
                      user: "null",
                      song: []
                       };




     /* 9. Add 3 elements to your birthdayGift contents property
     */

bestMusicAlbum.songs[0] = "killer queen";
bestMusicAlbum.songs[1] = "love of my life ";
bestMusicAlbum.songs[2] = "i'm in love with my car";

console.log(bestMusicAlbum.songs);


  //building & defining key pairs inside of the object, use a colon (:), inside of the { }
  //assigning & modifying require equal signs (=)
