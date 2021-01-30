document.addEventListener("DOMContentLoaded", function(){

	var slideIndex = 1;


//displays the correct slide
	function showPic(n){

		images = document.getElementsByClassName("pic");

		if (n > images.length){
			slideIndex = 1;
		}
		if (n < 1){
			slideIndex = images.length;
		}
		for (var i = 0; i < images.length; i++){
			images[i].style.display = "none";
		}
		images[slideIndex - 1].style.display = "block";
		images[slideIndex - 1].style.width = "350px";
		images[slideIndex -1].style.height = "auto";
			
	}
		

	showPic(slideIndex);


//displays how far through carousel

	const counter = document.getElementById("count");
	var quantity = document.getElementsByClassName("pic").length;

	function newCount(){
		count.innerHTML = slideIndex + " / " + quantity;
		combineBoth();
	};


//moves you to first image of clicked category

	const city = document.getElementById("city");
	city.addEventListener("click", function(){
		slideIndex = 1;
		showPic(slideIndex);
		newCount();
	});

	const interiors = document.getElementById("interiors");
	interiors.addEventListener("click", function(){
		slideIndex = 21;
		showPic(slideIndex);
		newCount();
	});

	const narrative = document.getElementById("narrative");
	narrative.addEventListener("click", function(){
		slideIndex = 41;
		showPic(slideIndex);
		newCount();
	});

	const landscapes = document.getElementById("landscapes");
	landscapes.addEventListener("click", function(){
		slideIndex = 64;
		showPic(slideIndex);
		newCount();
	});

	const misc = document.getElementById("misc");
	misc.addEventListener("click", function(){
		slideIndex = 86;
		showPic(slideIndex);
		newCount();
	});


//highlights correct category

	var items = [
   	 	{
			name: city, 
   			index: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
		}, 
    		{
			name: interiors, 
    			index: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
		}, 
    		{
			name: narrative,
    			index: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]
		}, 
    		{	
			name: landscapes, 
    			index: [64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85]
		}, 
    		{	
			name: misc, 
    			index: [86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108]
		} 
	];


	function allBlack(){
   		for (var t = 0; t < items.length; t++){
       			items[t].name.style.color = "black";
    		}
	};

	function highlight(){
   		for (var j = 0; j < items.length; j++){
        		if (items[j].index.includes(slideIndex)){
           			 items[j].name.style.color = "#F08C52";  
       	 		}
    		}
	};

	function combineBoth(){
		allBlack();
		highlight();
	};


//move you back or forth  when directional arrows are clicked

	function plus(){	
		showPic(slideIndex += 1);
		newCount();
	};

	function minus(){
		showPic(slideIndex -= 1);
		newCount();
	}
	
	const prev = document.getElementById("prev");
	prev.addEventListener("click", function(){
		minus();
		combineBoth();
	});

	const next = document.getElementById("next");
	next.addEventListener("click", function(){
		plus();
		combineBoth();
	});


});

