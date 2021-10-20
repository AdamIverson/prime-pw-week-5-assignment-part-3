console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  } //end album
  collection.push(album);
  console.log(album.title);
  return album;
} // end addToCollection

addToCollection('Today', 'Galaxie 500', '1989');
addToCollection('This Is Our Music', 'Galaxie 500', '1990')
addToCollection('Exile in Guyville', 'Liz Phair', '1993');
addToCollection("Sackcloth 'N' Ashes", '16 Horsepower', '1996');
addToCollection('Saint Cloud', 'Waxahatchee', '2020');
addToCollection('A Love Supreme', 'John Coltrane', '1965');

console.log(collection);
//console.log(album);

function showCollection(arr){
  console.log(arr.length);
  for (i=0; i<arr.length; i++){
    console.log(`${arr[i].title} by ${arr[i].artist}, published in ${arr[i].yearPublished}`);
  } //end loop
} //end showCollection

showCollection(collection);

function findByArtist(artist){
  let foundArtist = [];
  for (i=0; i<collection.length; i++){
    if (artist === collection[i].artist){
      foundArtist.push(artist)
      console.log(artist);
    } // end if statement
  } return [];// end for loop
} //end findByArtist

findByArtist('Liz Phair');
findByArtist('Galaxie 500');
findByArtist('Prince');
