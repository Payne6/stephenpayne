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


//inserts correct info into info box

	const infoArr = [
		{index: 1, title: "View from a Window", medium: "Oil pastel on paper", size: "29 x 22 inches"}, 
		{index: 2, title: "View from a Window 2", medium:"Oil pastel on paper", size: "29 x 22 inches"},
		{index: 3, title: "View From a Window 3", medium: "Oil pastel on paper", size: "29 x 22 inches"},
		{index: 4, title: "Crossing", medium: "Oil pastel on paper", size: "29 x 22 inches"},
		{index: 5, title: "Crossing 2", medium: "Oil pastel on paper", size: "29 x 22 inches"},
		{index: 6, title: "Traffic", medium: "Oil pastel on paper", size: "29 x 22 inches"},
		{index: 7, title: "Narrow Street", medium:"Oil pastel on paper", size: "29 x 22 inches"},
		{index: 8, title: "St Mary's Way", medium: "Oil pastel on paper", size: "29 x 22 inches"},
		{index: 9, title: "Crowd", medium: "Charcoal on paper", size: "29 x 22 inches"},
		{index: 10, title: "Steps", medium: "Oil pastel on paper", size: "29 x 22 inches"},
		{index: 11, title: "Unreal City", medium: "Oil pastel on paper", size: "29 x 22 inches"},
		{index: 12, title: "Homeward Bound", medium: "Oil pastel on paper", size: "29 x 22 inches"},
		{index: 13, title: "Figures in a Landscape", medium: "Oil pastel on paper", size: "29 x 22 inches"},
		{index: 14, title: "Figures in a Landscape 2", medium: "Oil pastel on paper", size: "29 x 22 inches"},
		{index: 15, title: "Red City", medium: "Oil on paper", size: "29 x 22 inches"},
		{index: 16, title: "Rush Hour", medium: "Oil paint on paper", size: "29 x 22 inches"},
		{index: 17, title: "Pink Underpass", medium: "Oil on paper", size: "29 x 22 inches"},
		{index: 18, title: "Red Bridge", medium: "Oil paint on paper", size: "29 x 22 inches"},
		{index: 19, title: "White Bridge", medium: "Oil paint on paper", size: "29 x 22 inches"},
		{index: 20, title: "5.15", medium: "Oil paint, oil pastel on paper", size: "29 x 22 inches"},
	
		{index: 21, title: "Armchair for a Tired Businessman", medium: "Oil on canvas", size: "76 x 60 inches"},
		{index: 22, title: "Fried Chicken and Coca Cola", medium: "Oil on canvas", size: "76 x 60 inches"},
		{index: 23, title: "Notes Towards the Definition of Culture", medium: "Oil on canvas", size: "82 x 65 inches"},
		{index: 24, title: "Being and Time", medium: "Oil on canvas", size: "76 x 60 inches"},
		{index: 25, title: "The Secret Life of Objects" , medium: "Installation shot", size:""},
		{index: 26, title: "Nocturne", medium: "Oil on canvas", size: "78 x 60 inches"},
		{index: 27, title: "Objects in a Landscape", medium: "Oil on canvas", size: "76 x 60 inches"},
		{index: 28, title: "Stocks and Shares", medium: "Oil on canvas", size: "80 x 60 inches"},
		{index: 29, title: "Still Life", medium: "Oil on canvas", size: "60 x 48 inches"},
		{index: 30, title: "Commodities", medium: "Oil on canvas", size: "66 x 63 inches"},	
		{index: 31, title: "The Herald", medium: "Oil on canvas", size: "60 x 48 inches"},
		{index: 32, title: "Figure Reading a Newspaper", medium: "Acrylic on paper", size: "36 x 24 inches"},
		{index: 33, title: "Towards Evening", medium: "Oil on canvas", size: "60 x 48 inches"},
		{index: 34, title: "Man at Work", medium: "Oil on canvas", size: "48 x 36 inches"},
		{index: 35, title: "Working Late", medium: "Oil on canvas", size: "60 x 48 inches"},
		{index: 36, title: "Vitamins and Minerals", medium: "Oil on canvas", size: "40 x 40 inches"},
		{index: 37, title: "A Quiet Afternoon", medium: "Oil on canvas", size: "60 x 48 inches"},
		{index: 38, title: "After Hours", medium: "Oil on canvas", size: "70 x 74 inches"},
		{index: 39, title: "Market Forces", medium: "Acrylic on paper", size: "36 x 24 inches"},
		{index: 40, title: "Babylon", medium: "Acrylic on paper", size: "36 x 24 inches"},
		
		{index: , title: , medium: , size: },
		{index: , title: , medium: , size: },
		{index: , title: , medium: , size: },
		{index: , title: , medium: , size: },
		{index: , title: , medium: , size: },
		{index: , title: , medium: , size: },
	];




)};
