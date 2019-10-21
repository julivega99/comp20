var Art = function(name, price, small, large) {
	this.name = name;
	this.price = price;
	this.small = small;
	this.large = large;
}

var arr;

function createArray () {

	arr = new Array();

	var a = new Art( "Starry Night", "priceless", "will1.jpg", "will1.jpg");
	var b = new Art( "Starry Night", "priceless", "will2.jpg", "will2.jpg");
	var c = new Art( "Starry Night", "priceless", "will3.jpg", "will3.jpg");
	var d = new Art( "Starry Night", "priceless", "will4.jpg", "will4.jpg");
	var e = new Art( "Starry Night", "priceless", "will5.jpg", "will5.jpg");

	arr.push(a);
	arr.push(b);
	arr.push(c);
	arr.push(d);
	arr.push(e);
}

function showCase () {
	createArray();
	for (i = 0; i < 5; i++) {
		$('#img' + (i+1)).html("<img id= 'img" 
			+ (i+1) + "'class= 'imgBar' src='" + arr[i].small + "' >");
	}
}

$("#smallImages span").hover ( function() {
	var i = parseInt(this.id[3]) - 1;
	$('#big').html("<img class='bigImage' src='" + arr[i].large +"'>");
	}, function () {
		$('#big').html('');
	}
);

showCase();