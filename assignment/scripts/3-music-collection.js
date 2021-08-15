console.log('***** Music Collection *****')
let collection = [];
let album = {}

function addToCollection(title, artist, yearPublished, trackName, duration) {
  album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: [trackName , duration]
  };
  collection.push(album)
  return album;
}


//Sad to say I was lost and looked at the messages on Slack to figure this part out.  Once I saw what others had done, it was difficult not to copy.
//At least I'm happy that I understand the logic behind it, so I can say I've learned something.
//My original idea did not have the function create the object, only push an object into the array.


// Console.log each album as added using the returned value.
console.log('Added:', addToCollection('EP', 'Sublime', 1997, `Garden Grove`, `2:00`));
console.log('Added:', addToCollection('White Pony', 'Deftones', 2001));
console.log('Added:', addToCollection('Core', 'Stone Temple Pilots', 1994));
console.log('Added:', addToCollection('Untitled', 'Aim To Head Music', 2020));
console.log('Added:', addToCollection('Untitled', 'Bachelors of Science', 2012));
console.log('Added:', addToCollection('YouTube', 'Deftones', 2018));
// console.log(collection[`0`]['tracks']);



function showCollection(array) {
  console.log(array.length);
  for (i = 0; i < array.length; i++) {
    console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}.`);
  };
}

// showCollection(collection);


let results = []

function findByArtist(artist) {
  for (i = 0; i < collection.length; i++) {
    if (artist === collection[i].artist) {
      results.push(collection[i]);
    }
  }
  return results;
}

console.log(findByArtist('Deftones')); //Deftones has 2 matches, both are found.


// ### Stretch goals
//
// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.
//
// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```

let newArray = [];
function search(artist, year) {
  for (i = 0; i < collection.length; i++) {
    if (artist === collection[i].artist && collection[i].yearPublished === year){
      // console.log(collection[i]);
      newArray.push(collection[i]);

    } else {
      console.log(`Match not found.`)
    }
  } return newArray; //
}

search('Deftones', 2001);
