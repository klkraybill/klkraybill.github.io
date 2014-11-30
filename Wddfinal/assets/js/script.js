$(document).ready(function() {

//connection


$(".alarm-img").hover(function(){
	$(".alarm-text").fadeIn(500); },
	function() {$(".alarm-text").fadeOut(500);
});

$(".neuron-img").hover(function(){
	$(".neuron-text").fadeIn(500); },
	function() {$(".neuron-text").fadeOut(500);
});

$(".ball-img").hover(function(){
	$(".ball-text").fadeIn(500); },
	function() {$(".ball-text").fadeOut(500);
});

$(".money-img").hover(function(){
	$(".money-text").fadeIn(500); },
	function() {$(".money-text").fadeOut(500);
});

//pain

$(".pill-container").click(function(){
	if($(".pill-text").hasClass(".pill-active")){
		$(".pill-text").removeClass(".pill-active")
	} else {
		$(".pill-text").addClass("pill-active")
	}
});

//symmetry 
 
 $(".male-container").click(function(){
    alert($(".male-text2").text());
  });
 
 $(".both-container").click(function(){
    alert($(".both-text2").text());
  });

/* ATTEMPT AT .text()
$(".male-container").click(function(){
    $("male-text").text(function(){
    return "Numerous studies show that nonfacial body symmetry of men positively correlates with their mating success. This pattern is not seen in women.";
    });
  });

$(".both-container").click(function(){
    $("both-text").text(function(){
    return "Attractive expressions of secondary sexual traits require high hormone titers during their construction, and thus can be afforded only by immunocompetent individuals.";
    });
  });
*/














});