var pants = [{
        "brand": "Levis",
        "waist": 32,
        "len": 34
    }, {
        "brand": "Lucky",
        "waist": 38,
        "len": 32
    }, {
        "brand": "Diesel",
        "waist": 28,
        "len": 30
    }, ];

    var table = "<table><thead><tr><td>Brand</td><td>Waist</td><td>Length</td></tr></thead><tbody>"

    // Create your for loop here
    // you want to loop through all of the information and present it in a table 
    // HINT: the string should look like '<tr><td>' + pants[x].brand + "</td><td>" + ....
    // HINT 2: to add to the table string, do table += line.
    // document.write('<table>');
    // document.write('<tr><td>' + pants[x].brand + '</td><td>' + pants[x].waist + '</td><td>' + pants[x].len + '</td></tr>');
 	

 	//document.write('<table border="1" cellspacing="1" cellpadding="5">');
   

    for (var x = 0; x < pants.length; x++) {
 
    	table += ' <tr><td> ' + pants[x].brand + ' </td><td> ' + pants[x].waist + ' </td><td> ' + pants[x].len + ' </td></tr> ';
    
    }

   // document.write('<table border="1" cellspacing="1" cellpadding="5">');

    /*document.write('</table>');*/

    table = table + '</tbody></table>'

    // Use jQuery to select the body tag on the index and append the finish table string
     $('#body').append(table);
    // document.write(table);