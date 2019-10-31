$(document).ready(function(){
	
	$("#opening_fadein").fadeIn(1000);
});



$(document).ready(function(){
	changeFont();

	for (let i = 0; i < projects.length; i++){
		$("#attachProjects").append(generateProjects(projects[i]));
	}
	
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
});

function changeFont(){
	var text = $("#my_name");
	text.css("float", "left");
	text.css("color", "#86C232");
	if ($(window).width() > 759) {
		text.css("padding-left", "160px");
		text.css("font", "18px Consolas");
	}
	else{
		text.css("padding-top", "25px");
		text.css("font", "22px Consolas");
	}
	
}
$(window).resize(function(){
	var text = $("#my_name");
	if ($(window).width() > 759) {
		text.css("padding-left", "160px");
	}
});

$("#my_name").hover(function(){
	// var text = $("#my_name");
	// text.css.animate("background-color", "yellow");
	$("#my_name").css("background", "url(images/asfalt.png)");
});

function generateProjects(project){
	return `
	<div class="card bg-light" style="width: 18rem;">
	<img class="card-img-top" src="${project.pImg}" alt="Card image cap">
		<div class="card-body">
			<h4 class="card-title">${project.pName}</h4>
			<p class="card-text">${project.pDescription}</p>
			<a href="${project.pLink}" class="btn btn-primary">Try me!</a>
		</div>
		<div class="card-footer">
			<small class="text-muted">Last updated ${project.pLastUpdated}</small>
		</div>	
	</div>`
}