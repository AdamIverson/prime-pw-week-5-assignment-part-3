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
  return album.title;
} // end addToCollection

addToCollection('Feels', 'Animal Collective', '2005');
addToCollection('Today', 'Galaxie 500', '1989');
addToCollection('Exile in Guyville', 'Liz Phair', '1993');
addToCollection("Sackcloth 'N' Ashes", '16 Horsepower', '1996');
addToCollection('Saint Cloud', 'Waxahatchee', '2020');
addToCollection('A Love Supreme', 'John Coltrane', '1965');

console.log(collection);
