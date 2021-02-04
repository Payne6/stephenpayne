document.addEventListener("DOMContentLoaded", function(){

	var slideIndex = 1;

	const infoArr = [
		{index: 1, title: "View from a Window", medium: "Oil pastel on paper", size: "29 x 22 inches"}, 
		{index: 2, title: "View from a Window 2", medium:"Oil pastel on paper", size: "29 x 22 inches"},
		{index: 3, title: "View From a Window 3", medium: "Oil pastel on paper", size: "29 x 22 inches"},
		{index: 4, title: "Crossing", medium: "Oil pastel on paper", size: "29 x 22 inches"},
		{index: 5, title: "Crossing 2", medium: "Oil pastel on paper", size: "29 x 22 inches"},
		{index: 6, title: "Traffic", medium: "Oil pastel on paper", size: "29 x 22 inches"},
		{index: 7, title: "Narrow Street", medium: "Oil pastel on paper", size: "29 x 22 inches"},
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
		
		{index: 41, title: "The Vision", medium: "Pigment and PVA on board", size: "12 x 11 inches"},
		{index: 42, title: "Messenger", medium: "Pigment, PVA, acrylic on board", size: "12 x 12 inches"},
		{index: 43, title: "From Another World", medium: "Pigment, PVA, acrylic on board", size: "12 x 12 inches"},
		{index: 44, title: "Two Figures", medium: "Pigment, PVA, acrylic on canvas", size: "18 x 13 inches"},
		{index: 45, title: "Man and Tree", medium: "Pigment and PVA on canvas", size: "15 x 12 inches"},
		{index: 46, title: "Shame", medium: "Pigment and PVA on canvas", size: "15 x 15 inches"},
		{index: 47, title: "The Tree", medium: "Pigment and PVA on canvas", size: "18 x 12 inches"},
		{index: 48, title: "Pyramid and Tree at Night", medium: "Pigment, PVA, acrylic on board", size: "12 x 12 inches"},
		{index: 49, title: "Exodus", medium: "Pigment and PVA on board", size: "12 x 12 inches"},
		{index: 50, title: "Two Figures in a Landscape", medium: "Pigment, PVA, acrylic on board", size: "12 x 12 inches"},	
		{index: 51, title: "Angels", medium: "Acrylic, pigment, PVA on canvas", size: "36 x 24 inches"},
		{index: 52, title: "An Anunciation", medium: "Acrylic, pigment, PVA on board", size: "12 x 12 inches"},
		{index: 53, title: "Holy Man", medium: "Pigment and PVA on board", size: "12 x 12 inches"},
		{index: 54, title: "Flight of the Cardinal", medium: "Acrylic, pigment, PVA on board", size: "12 x 12 inches"},
		{index: 55, title: "Pilgrims", medium: "Pigment, acrylic, PVA on board", size: "18 x 12 inches"},
		{index: 56, title: "Tree", medium: "Pigment, acrylic, PVA on board", size: "18 x 12 inches"},
		{index: 57, title: "Tree", medium: "Acrylic, pigment, PVA on board", size: "12 x 12 inches"},
		{index: 58, title: "Don't Look Back", medium: "Acrylic on canvas", size: "36 x 26 inches"},
		{index: 59, title: "Transformed", medium: "Acrylic on board", size: "36 x 24 inches"},
		{index: 60, title: "Unnamable", medium: "Oil, acrylic, pigment on canvas", size: "32 x 26 inches"},
		{index: 61, title: "Petrified", medium: "Acrylic on canvas", size: "20 x 20 inches"},
		{index: 62, title: "Fire", medium: "Oil, acrylic on canvas", size: "20 x 20 inches"},
		{index: 63, title: "Taking Hold", medium: "Acrylic on board", size: "30 x 20 inches"},
		
		{index: 64, title: "Dune", medium: "Acrylic, pigment on cardboard", size: "8 x 9 inches"},
		{index: 65, title: "Moorland", medium: "Oil, acrylic on board", size: "12 x 12 inches"},
		{index: 66, title: "Scorched Earth", medium: "Oil, acrylic on wood", size: "22 x 20 inches"},
		{index: 67, title: "Dry Land", medium: "Oil, acrylic on canvas", size: "20 x 15 inches"},
		{index: 68, title: "Rugged", medium: "Oil, acrylic on board", size: "16 x 12 inches"},
		{index: 69, title: "Moor", medium: "Oil, acrylic on canvas", size: "20 x 18 inches"},
		{index: 70, title: "Bush Fires", medium: "Oil, acrylic on canvas", size: "24 x 24 inches"},
		{index: 71, title: "River", medium: "Acrylic on canvas", size: "14 x 11 inches"},
		{index: 72, title: "Untitled", medium: "Unknown", size: "12 x 14 inches"},
		{index: 73, title: "Toward the Sea", medium: "Oil on wood", size: "24 x 12 inches"},	
		{index: 74, title: "Hillside", medium: "Ink, acrylic, marker, pencil on paper", size: "9 x 12 inches"},
		{index: 75, title: "Open Country", medium: "Ink, acrylic, marker, pencil on paper", size: "12 x 15 inches"},
		{index: 76, title: "Cross Country", medium: "Acrylic, pencil, marker, wood dye on paper", size: "12 x 15 inches"},
		{index: 77, title: "Fields", medium: "Oil, acrylic, ink, marker, collage on paper", size: "12 x 10 inches"},
		{index: 78, title: "Spoilt Land", medium: "Acrylic, ink, marker on paper", size: "12 x 10 inches"},
		{index: 79, title: "From the Edge of the Lane", medium: "Ink, collage on paper", size: "6 x 7 inches"},
		{index: 80, title: "Fences", medium: "Ink, collage on paper", size: "10 x 9 inches"},
		{index: 81, title: "Fields and Hedges", medium: "Ink, marker on paper", size: "6 x 7 inches"},
		{index: 82, title: "The Track", medium: "Ink, marker on paper", size: "7 x 10 inches"},
		{index: 83, title: "Path", medium: "Ink, pencil, marker on paper", size: "7 x 10 inches"},
		{index: 84, title: "Up the Hill", medium: "Ink, marker on paper", size: "7 x 8 inches"},
		{index: 85, title: "over the Hill", medium: "Ink, marker on paper", size: "7 x 7 inches"},
		
		{index: 86, title: "Laptop 1", medium: "Oil, collage on board", size: "30 x 27 inches"},
		{index: 87, title: "Laptop 2", medium: "Oil on canvas", size: "20 x 16 inches"},
		{index: 88, title: "Milk Carton 2", medium: "Oil on canvas", size: "24 x 20 inches"},
		{index: 89, title: "Milk Carton", medium: "Oil on canvas", size: "20 x 18 inches"},
		{index: 90, title: "Two Objects", medium: "Acrylic on paper", size: "22 x 15 inches"},
		{index: 91, title: "Objects (poised)", medium: "Acrylic on paper", size: "22 x 15 inches"},
		{index: 92, title: "Objects in a Landscape", medium: "Acrylic on paper", size: "29 x 22 inches"},
		{index: 93, title: "We Stood Alone", medium: "Acrylic on paper", size: "29 x 22 inches"},
		{index: 94, title: "On the Beach", medium: "Acrylic on paper", size: "29 x 22 inches"},
		{index: 95, title: "Carriage Clock", medium: "Oil, acrylic, pigment on canvas", size: "24 x 20 inches"},
		{index: 96, title: "Manoeuvers", medium: "Acrylic on paper", size: "29 x 22 inches"},
		{index: 97, title: "Milk Cartons", medium: "Ink on paper", size: "10 x 8 inches"},
		{index: 98, title: "Studies for a Milk Carton", medium: "Ink and collage on sketchbook pages", size: "10 x 16 inches"},
		{index: 99, title: "Fried Chicken Study 1", medium: "Charcoal on paper", size: "20 x 20 inches"},
		{index: 100, title: "Fried Chicken Study 2", medium: "Charcoal on paper", size: "22 x 22 inches"},
		{index: 101, title: "Fried Chicken Study 3", medium: "Charcoal on paper", size: "20 x 20 inches"},
		{index: 102, title: "Fried Chicken Study 4", medium: "Charcoal on paper", size: "22 x 20 inches"},
		{index: 103, title: "Fried Chicken Study 5", medium: "Charcoal on paper", size: "20 x 20 inches"},
		{index: 104, title: "Fried Chicken Study 6", medium: "Charcoal on paper", size: "20 x 20 inches"},
		{index: 105, title: "A Good Read", medium: "Charcoal on paper", size: "29 x 22 inches"},
		{index: 106, title: "Thriller", medium: "Charcoal on paper", size: "29 x 22 inches"},
		{index: 107, title: "Static", medium: "Birmingham City Art Gallery", size: "2014"},
		{index: 108, title: "Static", medium: "Birmingham City Art Gallery", size: "2014"}

	];


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
		info();
	});

	const interiors = document.getElementById("interiors");
	interiors.addEventListener("click", function(){
		slideIndex = 21;
		showPic(slideIndex);
		newCount();
		info();
	});

	const narrative = document.getElementById("narrative");
	narrative.addEventListener("click", function(){
		slideIndex = 41;
		showPic(slideIndex);
		newCount();
		info();
	});

	const landscapes = document.getElementById("landscapes");
	landscapes.addEventListener("click", function(){
		slideIndex = 64;
		showPic(slideIndex);
		newCount();
		info();
	});

	const misc = document.getElementById("misc");
	misc.addEventListener("click", function(){
		slideIndex = 86;
		showPic(slideIndex);
		newCount();
		info();
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


//inserts info into info boxes
	
	const infoTitle = document.getElementById("pic_title");
	const infoMedia = document.getElementById("pic_material");
	const infoSize = document.getElementById("pic_size");

	function info(){
		for (var x = 0; x < infoArr.length; x++){
			if (infoArr[x].index == slideIndex){
				infoTitle.innerHTML = infoArr[x].title;
				infoMedia.innerHTML = infoArr[x].medium;
				infoSize.innerHTML = infoArr[x].size;
			}
		}
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
		info();
	});

	const next = document.getElementById("next");
	next.addEventListener("click", function(){
		plus();
		combineBoth();
		info();
	});


//inserts correct info into info box


});
