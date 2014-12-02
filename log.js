$(document).ready(function(){
	    var newLi = $("<li>");			
		var newH1 = $("<h3>");
		newH1.html("Log");
		newLi.append(newH1);
		$("ul").append(newLi);
		$("#movingBox").animate({marginTop: "400px"}, 1000 ,function(){
			var newLi = $("<li>");			
			var newDiv = $("<div>");
			newDiv.html("Go down 400px");
			newLi.append(newDiv);
			$("ul").append(newLi);
		});
		$("#movingBox").animate({marginLeft: "400px"}, 1000 ,function(){
			var newLi = $("<li>");			
			var newDiv = $("<div>");
			newDiv.html("Move to the right 400px");
			newLi.append(newDiv);
			$("ul").append(newLi);
		});
		$("#movingBox").animate({marginTop: "0"}, 1000,function(){
			var newLi = $("<li>");			
			var newDiv = $("<div>");
			newDiv.html("move up 400px");
			newLi.append(newDiv);
			$("ul").append(newLi);
		});
		$("#movingBox").animate({marginLeft: "0"}, 1000,function(){
			var newLi = $("<li>");			
			var newDiv = $("<div>");
			newDiv.html("Go back to start point");
			newLi.append(newDiv);
			$("ul").append(newLi);
		});
		$("#movingBox").animate({height: "100px"},1000,function(){
			var newLi = $("<li>");			
			var newDiv = $("<div>");
			newDiv.html("Double your height");
			newLi.append(newDiv);
			$("ul").append(newLi);
		});
		$("#movingBox").animate({width: "100px"},1000,function(){
			var newLi = $("<li>");			
			var newDiv = $("<div>");
			newDiv.html("Double your width");
			newLi.append(newDiv);
			$("ul").append(newLi);
		});
		$("#movingBox").animate({padding:"+=55px"},1000,function(){
			var newLi = $("<li>");			
			var newDiv = $("<div>");
			newDiv.html("Increase padding");
			newLi.append(newDiv);
			$("ul").append(newLi);
		});		
		$("#movingBox").animate({borderWidth:"10px"},500,function(){
			var newLi = $("<li>");			
			var newDiv = $("<div>");
			newDiv.html("Add border");
			newLi.append(newDiv);
			$("ul").append(newLi);
		});
		$("#movingBox").animate({marginLeft: "500px"}, 1000 ,function(){
			var newLi = $("<li>");			
			var newDiv = $("<div>");
			newDiv.html("Grande finale!!");
			newLi.append(newDiv);
			$("ul").append(newLi);
		});
		
    });
