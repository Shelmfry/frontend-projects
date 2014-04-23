var superBowlLineup = {
  date: "1/27/2014",
  fireworksUsed: 534,
  lightShow: true,
  bands: [
    {
      "name": "Bruno Mars",
      "songs": 5
    }
  ]
};


superBowlLineup.addBand = function(band) {
  superBowlLineup.bands.push(band)
};

// console.log(superBowlLineup);
// console.log(superBowlLineup['date']);
// console.log(superBowlLineup.lightShow);

var rhcp = {
  "name": "Red Hot Chili Peppers",
  "songs": 5
};


superBowlLineup.changeAmountOfSongs = function (band, numberSongs) {
  for (var i = 0; i < superBowlLineup.bands.length; i ++ ) {
   if (band === superBowlLineup.bands[i].name) {
    superBowlLineup.bands[i].songs = numberSongs;
   }
  }
};

superBowlLineup.addBand(rhcp);

console.log(superBowlLineup.bands.length);
console.log(superBowlLineup.bands[1].name);
console.log(superBowlLineup.bands[1].songs);

superBowlLineup.changeAmountOfSongs("Red Hot Chili Peppers", 1);

console.log(superBowlLineup.bands.length);
console.log(superBowlLineup.bands[1].name);
console.log(superBowlLineup.bands[1].songs);

var table = "<table><thead><tr><td>Artist</td><td>Songs</td></tr></thead><tbody>"

  for (var x = 0; x < superBowlLineup.bands.length; x++) {
 
      table += ' <tr><td> ' + superBowlLineup.bands[x].name + ' </td><td> ' + superBowlLineup.bands[x].songs + ' </td></tr> ' ;
    
    }

    table = table + '</tbody></table>'

     $('#body').append(table);


// Using the code above, add a function changeAmountOfSongs that can take two parameters, "band", and "number".
// Then change the Red Hot Chili Peppers songs to 1.
// Take the object, and create a table in the index.html that shows columns "name, and "songs played"