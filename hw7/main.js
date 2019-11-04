var set = { "Setlist": [
     {"Name": "Paper Rings", "Artist": "Taylor Swift", "Genre": "Pop", "Year": "2019" }, 
     {"Name": "Lover", "Artist": "Taylor Swift", "Genre": "Pop", "Year": "2019" }, 
     {"Name": "Call It What You Want", "Artist": "Taylor Swift", "Genre": "Pop", "Year": "2017" }, 
     {"Name": "Delicate", "Artist": "Taylor Swift", "Genre": "Pop", "Year": "2017" }, 
     {"Name": "Dress", "Artist": "Taylor Swift", "Genre": "Pop", "Year": "2017" }, 
     {"Name": "All to Well", "Artist": "Taylor Swift", "Genre": "Country", "Year": "2012" }, 
     {"Name": "Begin Again", "Artist": "Taylor Swift", "Genre": "Country", "Year": "2012" }, 
     {"Name": "Holy Ground", "Artist": "Taylor Swift", "Genre": "Country", "Year": "2012" }, 
     {"Name": "Style", "Artist": "Taylor Swift", "Genre": "Synth Pop", "Year": "2014" }, 
     {"Name": "I Wish You Would", "Artist": "Taylor Swift", "Genre": "Synth Pop", "Year": "2014" }, 
     {"Name": "I Know Places", "Artist": "Taylor Swift", "Genre": "Synth Pop", "Year": "2014" }
  ]};


serializedSet(); 
tableSet();

function serializedSet () {
    var setString = JSON.stringify(set);
    document.getElementById("first").innerHTML =  setString;
}

function tableSet() {
    w3.displayObject("second", set);
}

function displaySelected() {
    var selectGenre = document.querySelector('#drop'); 
    var genreString = selectGenre.value; 
    var match = new Array;
    for (i in set.Setlist) {
       if (set.Setlist[i].Genre == genreString) {
            match.push(set.Setlist[i]);
        }
    }

    var html = "<table id='third' style='width:70%'>";
        html+= "<tr> <th>Song</th> <th>Artist</th> <th> Year </th></tr>"
    for (var i = 0; i < match.length; i++) {
        html+="<tr>";
        html+="<td>"+match[i].Name+"</td>";
        html+="<td>"+match[i].Artist+"</td>";
        html+="<td>"+match[i].Year+"</td>";

        html+="</tr>";

    }
    html+="</table>";
    document.getElementById("extraTable").innerHTML = html;

}
