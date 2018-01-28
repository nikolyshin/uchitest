var a = Math.floor(Math.random()*(9-6+1)+6);
var c = Math.floor(Math.random()*(14-11+1)+11);
var b = c-a;
var out = $(".out").eq(0)
var rule = $(".rule").eq(0)
var canvas = $("<canvas></canvas>").appendTo(rule);
canvas = canvas.get(0);
canvas.height = 120;
canvas.width  = 875;

out.append(
    $("<span>").addClass("count_a").html(a),
    $("<span>").html(" + "),
    $("<span>").addClass("count_b").html(b),
    $("<span>").html(" = "),
    $("<span>").addClass("count_c").html("?")
  );
  
var logic = function(arg){
	if(arg === 1){
    $(this).off();                        
     var context = canvas.getContext("2d");
    var startPointX = 35;
    var middlePointX = startPointX + (a/2) * 39;
    var middlePointY = -240/9*a +130;
    var endPointX = startPointX + (a) * 39;
    context.beginPath();
    context.moveTo(startPointX, 120);
    context.quadraticCurveTo(middlePointX,middlePointY,endPointX, 120);
    context.lineWidth = 2;
    context.strokeStyle = "red";
    context.lineTo(endPointX+2, 110);
    context.moveTo(endPointX, 120);
    context.lineTo(endPointX-12, 115);
    context.stroke();                                  
    inpt = $("<div/>").addClass("inpt").appendTo(rule); 
    var left = 35+((a/2)*39)-16;
		currCount = out.find(".count_a")
    inpt.css("left",left);
		inpt.css("top",-16*a);
    inpt.append($("<div/>").addClass("carriage"))
  	step_1(function(){logic(2)});
   }
  else if (arg === 2){
  	$(this).off();
    var context = canvas.getContext("2d");
    var startPointX =  35 + (a) * 39;
    var middlePointX = startPointX + (b/2) * 39;
    var middlePointY = -240/9*b +130;
    var endPointX = startPointX + (b) * 39;
    context.beginPath();
    context.moveTo(startPointX, 120);
    context.quadraticCurveTo(middlePointX,middlePointY,endPointX, 120);
    context.lineWidth = 2;
    context.strokeStyle = "red";
    context.lineTo(endPointX+2, 110);
    context.moveTo(endPointX, 120);
    context.lineTo(endPointX-12, 115);
    context.stroke(); 
       
    inpt = $("<div/>").addClass("inpt").appendTo(rule); 
    var left = 35+(a*39+(b/2)*39)-16;
		currCount = out.find(".count_b")
    inpt.css("left",left);
		inpt.css("top",-17*b);
    inpt.append($("<div/>").addClass("carriage"))
  step_2(function(){logic(3)})
  } else if (arg === 3){
  $(this).off();
  	inpt = out.find(".count_c")
    inpt.addClass("input").html(" ")
    inpt.append($("<div/>").addClass("carriage"))
  	step_3(function(){logic(4)})
  } else{
  	$(this).off();
  }
			  
}

var step_1 = function(cb){
	$(this).keydown(function(e){
	var char = e.key;
  if (!(char<"0" || char >"9")){
    inpt.html(char);
    if(currCount.html() ===  inpt.html()){
    		inpt.removeClass("wrong").addClass("blank");
        currCount.removeClass("mark");
        cb();
        }
    else
    {
    	currCount.addClass("mark");
    	inpt.addClass("wrong");
      
      }
}
})
}
var step_2 = function(cb){
	$(this).keydown(function(e){
	var char = e.key;
  if (!(char<"0" || char >"9")){
    inpt.html(char);
    if(currCount.html() ===  inpt.html()){
    		inpt.removeClass("wrong").addClass("blank");
        currCount.removeClass("mark");
        cb();
        }
    else
    {
    	currCount.addClass("mark");
    	inpt.addClass("wrong");
      }
}
})
}
var step_3 = function(cb){
	$(this).keydown(function(e){
	var char = e.key;
  if (!(char<"0" || char >"9")){
    if(inpt.text() == " "){
    	inpt.html("")
      }
  	if(inpt.text().length==2)
    	{
      inpt.removeClass("wrong");
      inpt.html(char);}
    else{
    inpt.html(inpt.text()+char);
    }
    if(inpt.text().length==2){
    if(c ==  inpt.html()){
    		inpt.removeClass("wrong input");
        cb();
        }
    else
    {
    	inpt.addClass("wrong");
      }
    
    }
    
}
})
}
logic(1);
  