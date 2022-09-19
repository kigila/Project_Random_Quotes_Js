// Quotes API settings 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a763a25e6emsh48393aa77668fb3p19d637jsn294f0c21a4f5',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};


// Background Image API settings
const options2 = {
	method: 'GET',
	headers: {
		Authorization: '563492ad6f91700001000001803fe7f9a5144ecea52420d3021beea9',
		'X-RapidAPI-Key': 'a763a25e6emsh48393aa77668fb3p19d637jsn294f0c21a4f5',
		'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
	}
};




async function getData() {
	const response = await fetch('https://quotes15.p.rapidapi.com/quotes/random/', options);
	const data = await response.json();	
	
	let quote = data.content;
	let author = data.originator.name;
	

	document.getElementById('quote').innerHTML = quote;
	document.getElementById('author').innerHTML = author;

	
	
	const responseimg  = await fetch(`https://pexelsdimasv1.p.rapidapi.com/v1/search?query=${author}&locale=en-US&per_page=1&page=1`, options2);
	const dataimg = await responseimg.json();	
	console.log(dataimg);

	let imgUrl = dataimg['photos']['0']['src']['large2x'];
	console.log(imgUrl);
	let urlx = "url('"+imgUrl+"')";

	
	document.body.style.backgroundImage = urlx;
	
	
	}


	
//Project Change Background Color
// My function

function changeColor() {
	
	let quote = document.querySelector('body'); //Select the body element
	let h1 = document.querySelector('h1'); //Select the header element
	let author = document.querySelector('author'); //Select the author element
  
	//Set the background color
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);
	var col = "rgb(" + red + "," + green + "," + blue + ")";   
	
		
  
	quote.style.color = col;
	h1.style.color = col;
	author.style.color = col;
  
  }

	
	
getData();
changeColor();





