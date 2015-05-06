// var myApp = myApp || {}

// myApp.showSecretMessage = function(){
// 	$('.secret_message').slideToggle(1000);
// }

// myApp.setUpEventListeners = function(){
// 	$('li').on('mouseover', function(){
// 		$('li').removeClass('active');
// 		$(this).addClass('active');
// 	});

// 	$('.picture').on('mouseover', function(){
// 		$(this).attr('src', 'images/paulirish.jpg')
// 	}).on('mouseout', function(){
// 		$(this).attr('src', 'http://www.legaltechnology.com/wp-content/uploads/2013/06/timbernerslee.jpg')
// 	});

// 	$('#helloButton').on('click', myApp.showSecretMessage)
// }

// myApp.initialise = function(){
// 	$('section').removeClass('no_js');
// 	$('p.message').addClass('hidden');
// }

// $(document).ready(function(){
// 	myApp.initialise()
// 	myApp.setUpEventListeners();
// })

var setUpEventListeners = function(){
	var helloButton = document.getElementById('helloButton');
	helloButton.addEventListener('click', function(){
		alert('helloWorld');
	});
};

var initialize = function(){
	document.getElementsByTagName('section')[0].className = "";
	document.getElementsByClassName('message')[0].className = "hidden";
};

initialize();
setUpEventListeners();








