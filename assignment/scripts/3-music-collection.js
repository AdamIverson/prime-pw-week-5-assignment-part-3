console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  } //end album
  collection.push(album);
  return album;
} // end addToCollection

addToCollection('Today', 'Galaxie 500', 1989);
addToCollection('This Is Our Music', 'Galaxie 500', 1990)
addToCollection('Exile in Guyville', 'Liz Phair', 1993);
addToCollection("Sackcloth 'N' Ashes", '16 Horsepower', 1996);
addToCollection('Saint Cloud', 'Waxahatchee', 2020);
addToCollection('A Love Supreme', 'John Coltrane', 1965);

console.log(collection);

function showCollection(arr){
  console.log(arr.length);
  for (let album of arr) {
    console.log(album);
  }
  // for (i=0; i<arr.length; i++){
  //   console.log(`${arr[i].title} by ${arr[i].artist}, published in ${arr[i].yearPublished}`);
  //} //end loop
} //end showCollection

showCollection(collection);

// function findByArtist(artist){
//   let foundArtist = [];
//
//   for (i=0; i<collection.length; i++){
//     if (artist === collection[i].artist){
//       foundArtist.push(artist.title);
//       return foundArtist;
//   } // end if statement
//   } if (foundArtist.length === 0) {
//     return [];
//   } // end for loop
// } //end findByArtist

function findByArtist(artist) {
  let foundArtist = [];

  for (let album of collection) {
    if (artist === album.artist) {
      foundArtist.push(album);
    } else if (artist.length === 0) {// end if loop
      return [];
    } // end else
  } return foundArtist;// end for loop
} // end findByArtist

console.log(findByArtist('Liz Phair'));
console.log(findByArtist('Galaxie 500'));
console.log(findByArtist('16 Horsepower'));
console.log(findByArtist('Prince'));
console.log(findByArtist('Sigur Ros'));

// function search(term, arr){
//   let results = [];
//
//   for (i=0; i<arr.length; i++){
//     if (term === arr[i].artist){
//       results.push(arr[i].artist);
//       console.log(results);
//       return results;
//   } else if (term === arr[i].title){
//      results.push(arr[i].title)
//      console.log(results);
//      return results;
//   } else if (term === arr[i].yearPublished){
//      results.push(arr[i].yearPublished)
//      console.log(results);
//      return results;
//   } else if (term != arr[i].artist){
//      return [];
//   } // end for loop
// } //end search
// }

// function search(term){
//   let results = [];
//
//   for (i=0; i<collection.length; i++){
//     if (term === collection[i].artist){
//       results.push(collection[i].artist);
//       console.log(results);
//       return results;
//     } else if (term === collection[i].title){
//       results.push(collection[i].title);
//       console.log(results);
//       return results;
//   } else if (term === collection[i].yearPublished){
//      results.push(collection[i].yearPublished);
//      console.log(results);
//      return results;
// } else if (results.length === 0){
//    return [];
// } else if (term === null || term === NaN){
//     return collection;
// }
// }
// }

function search(term){
  let results = [];

  for (let album of collection) {
    if (term === album.artist || term === album.title || term === album.year){
    results.push(album);
  } else if (results.length === 0){
    return [];
  } console.log(results);// end else if statement
}// end for of loop
} // end search
console.log(search('Waxahatchee'));
console.log(search(1965));
console.log(search('Prince'));
