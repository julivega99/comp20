var Art = function(name, price, small, large) {
	this.name = name;
	this.price = price;
	this.small = small;
	this.large = large;
}

var arr;

function createArray () {

	arr = new Array();

	var a = new Art( "A quick guitar tune before class", "$1", "will1.jpg", "will1.jpg");
	var b = new Art( "A smile to warm your day", "Priceless", "will2.jpg", "will2.jpg");
	var c = new Art( "When you have not finished 105", "$105", "will3.jpg", "will3.jpg");
	var d = new Art( "Hover did not work", "$20", "will4.jpg", "will4.jpg");
	var e = new Art( "Ryan, can we bike?", "$13", "will5.jpg", "will5.jpg");

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
		$('#big').html("<div class='title' id='title'> Will, </br> multifaceted </div>");
	}
);

$("#smallImages span").click ( function() {
	var i = parseInt(this.id[3]) - 1;
	$("#text").html("'" + arr[i].name + "'" + "</br>" + arr[i].price);
	$("#overlay").show().delay(5000).fadeOut();

}
);

showCase();