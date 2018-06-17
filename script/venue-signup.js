var current_fs, next_fs, previous_fs;
var left, opacity, scale;
var animating;

var stage = 1;

var contactName = "";
var contactPosition = "";
var contactEmail = "";
var contactPhone = "";
var name = "";
var email = "";
var password = "";
var address = "";
var type = "";
var capacity = "";
var rooftop = "";
var mobileOrdering = "";
var currentPos = "";
var tos = true;

$(".next").click(function() {
	if (stage === 1) {
		contactName = $('input[name=contactName]').val();
		contactPosition = $('input[name=contactPosition]').val();
		contactEmail = $('input[name=contactEmail]').val();
		contactPhone = $('input[name=contactPhone]').val();

		// if (contactPhone.match(/\d/g).length === 10;) {
		// 	contactPhone = .match(/\d/g);
		// }
	} else if (stage === 2) {
		name = $('input[name=name]').val();
		email = $('input[name=email]').val();
		password = $('input[name=password]').val();
		address = $('input[name=address]').val();
		type = $('select[name=type]').val();
		capacity = $('input[name=capacity]').val();
		rooftop = $('select[name=rooftop]').val();
		mobileOrdering = $('select[name=mobileOrdering]').val();
		currentPos = $('select[name=currentPos]').val();
	} else {
		tos = $('input[name=tos]').val();
	}

	if (animating) return false;
	animating = true;

	current_fs = $(this).parent();
	next_fs = $(this).parent().next();


	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

	next_fs.show();

	current_fs.animate({
		opacity: 0
	}, {
		step: function(now, mx) {


			scale = 1 - (1 - now) * 0.2;

			left = (now * 50) + "%";

			opacity = 1 - now;
			current_fs.css({
				'transform': 'scale(' + scale + ')',
				'position': 'absolute'
			});
			next_fs.css({
				'left': left,
				'opacity': opacity
			});
		},
		duration: 800,
		complete: function() {
			current_fs.hide();
			animating = false;
		},

		easing: 'easeInOutBack'
	});
	stage++;
	console.log(stage);
	if (stage === 3) {
		console.log(contactName)
		console.log(contactPosition)
		console.log(contactEmail)
		console.log(contactPhone)
		console.log(name)
		console.log(email)
		console.log(address)
		console.log(type)
		console.log(capacity)
		console.log(rooftop)
		console.log(currentPos)

		$('#contactName').text(contactName);
		$('#contactPosition').text(contactPosition);
		$('#contactEmail').text(contactEmail);
		$('#contactPhone').text(contactPhone);
		$('#name').text(name);
		$('#email').text(email);
		$('#address').text(address);
		$('#type').text(type);
		$('#capacity').text(capacity);
		$('#rooftop').text(rooftop);
		$('#currentPos').text(currentPos);
	}
});

$(".previous").click(function() {
	if (animating) return false;
	animating = true;

	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();


	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");


	previous_fs.show();

	current_fs.animate({
		opacity: 0
	}, {
		step: function(now, mx) {


			scale = 0.8 + (1 - now) * 0.2;

			left = ((1 - now) * 50) + "%";

			opacity = 1 - now;
			current_fs.css({
				'left': left
			});
			previous_fs.css({
				'transform': 'scale(' + scale + ')',
				'opacity': opacity
			});
		},
		duration: 800,
		complete: function() {
			current_fs.hide();
			animating = false;
		},

		easing: 'easeInOutBack'
	});
	stage--;
});

$(".submit").click(function() {
	window.alert("Thank you for registering for Invight!");
	return false;
})