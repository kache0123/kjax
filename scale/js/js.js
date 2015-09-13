$(".section").eq(0).addClass("current");
var int=-1;
var	sta=false;
var $a=$(".section");
var intN;
$(document).click(function(e) {
	if(int==-1||sta){
	int++
	if(int==4)int=0;
	intN=int==3?0:int+1
	
	$a.eq(int).removeClass("current").addClass("active");
	$a.eq(intN).addClass("current");
	sta=false;
	setTimeout(function(){
		zIndex(intN);
		$a.eq(int).removeClass("active");
		sta=true;
	},800)
	}
});

function zIndex(i){
	if(i==0){
		$a.eq(0).css("z-index",4);
		$a.eq(1).css("z-index",3);
		$a.eq(2).css("z-index",2);
		$a.eq(3).css("z-index",1);	
	}else if(i==1){
		$a.eq(1).css("z-index",4);
		$a.eq(2).css("z-index",3);
		$a.eq(3).css("z-index",2);
		$a.eq(0).css("z-index",1);	
	}else if(i==2){
		$a.eq(2).css("z-index",4);
		$a.eq(3).css("z-index",3);
		$a.eq(0).css("z-index",2);
		$a.eq(1).css("z-index",1);			
	}else if(i==3){
		$a.eq(3).css("z-index",4);
		$a.eq(0).css("z-index",3);
		$a.eq(1).css("z-index",2);
		$a.eq(2).css("z-index",1);		
	}
}


/*$(".section").eq(0).find(".big").remove();
var num=0;
$(document).click(function(){
	num++;
	if(num==4)num=1;
	if(num==1){
		$(".section").eq(0).find(".small li").addClass("active");
		$(".section").eq(1).find(".big").addClass("active");
		var ind=3;
		var a="<ul class='small'><li><img src='css/"+ind+".jpg'/></li><li><img src='css/"+ind+".jpg'/></li><li><img src='css/"+ind+".jpg'/></li><li><img src='css/"+ind+".jpg'/></li></ul><div class='big'><img src='css/"+ind+".jpg'/></div>";
		var $b=$("<div>").addClass("section").html(a).appendTo(".container");				
	}else if(num==2){
		$(".section").eq(0).remove();
		$(".section").eq(0).find(".big").remove();
		$(".section").eq(0).find(".small li").addClass("active");
		$(".section").eq(1).find(".big").addClass("active");
		var ind=4;
		var a="<ul class='small'><li><img src='css/"+ind+".jpg'/></li><li><img src='css/"+ind+".jpg'/></li><li><img src='css/"+ind+".jpg'/></li><li><img src='css/"+ind+".jpg'/></li></ul><div class='big'><img src='css/"+ind+".jpg'/></div>";
		var $b=$("<div>").addClass("section").html(a).appendTo(".container");
	}else if(num==3){
		$(".section").eq(0).remove();
		$(".section").eq(0).find(".big").remove();
		$(".section").eq(0).find(".small li").addClass("active");
		$(".section").eq(1).find(".big").addClass("active");
		
		
	}
	
	
	
})*/

