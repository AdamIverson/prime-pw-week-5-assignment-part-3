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

addToCollection('Feels', 'Animal Collective', '2005');
console.log(collection);
