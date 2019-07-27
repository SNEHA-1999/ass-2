
var playing=false;
var score;
var action;
var timerem;
var correctans;
var i;
//if we are clicking the start or reset button
document.getElementById("startreset").onclick=
function(){
	

	//if we are playing
	if(playing==true){
		location.reload();// yes,reload the page
	}
	else{//if we are not playing
		playing=true;//change mode to playing
		score=0;//set score to 0
		document.getElementById("scorevalue").innerHTML=score;
		//show countdown box
		show("timerem");
		timerem=60;
		document.getElementById("timeremvalue").innerHTML=timerem;
		hide("gameover");//hide gameover
		document.getElementById("startreset").innerHTML="Reset Game";
			//start countdown
			startcountdown();
			//generate a new q&a
			generateqa();
			
	}
	
	
}
	for(i=1;i<5;i++){
	document.getElementById("box"+i).onclick=function(){
		
		if(playing==true){
			if(this.innerHTML==correctans)
			{
				score++;
				document.getElementById("scorevalue").innerHTML=score;
				//hide tryagain nd show correct box1
				hide("wrong");
				show("correct");
				setTimeout(function(){
				hide("correct");}
					,1000);
					generateqa();
				
			}
			else{
					hide("correct");
					show("wrong");
					setTimeout(function(){
					hide("wrong");}
					,1000);
					
					
			}
			
		}
	}
	}
		
		
//if we click on answer box
	//if we are playing
		//correct?
			//yes
				//increase score
				//show correct box fr 1 sec
				//generate new question and answer
			//no
				//try again box fr 1 sec
				
//functions
//function counter				
function startcountdown(){
	action=setInterval(function(){
	timerem-=1;
document.getElementById("timeremvalue").innerHTML=timerem;	
	if(timerem==0){//game over
		stopcountdown();
		show("gameover");
			document.getElementById("gameover").innerHTML="<p>game over<p>your score is "+score+"</p>";
			
			hide("timerem");
			hide("correct");
			hide("wrong");
			playing=false;
			document.getElementById("startreset").innerHTML="Play Again";
	}
	},1000);
	
	
}
//stop counter
function stopcountdown()
{
	clearInterval(action);
}
//hide an element
function hide(Id){
 document.getElementById(Id).style.display = "none";
}
//show an element
function show(Id){
 document.getElementById(Id).style.display = "block";
}
//generate q&a
function generateqa()
{
	var i;
	var x=1+Math.round(Math.random()*9);
	var y=1+Math.round(Math.random()*9);
	 correctans=x*y;
	 document.getElementById("question").innerHTML=x+"x"+y;
	 var correctpos=1+Math.round(Math.random()*3);
	 //filling one box with correct ans
	document.getElementById("box"+ correctpos).innerHTML=correctans;
	//fill other box with wrong ans
	var ans=[correctans];
	for(i=1;i<5;i++)
	{
		if(i !=correctpos){
			var wrongans;
			do
			{
			 wrongans=(1+Math.round(Math.random()*9))*(1+Math.round(Math.random()*9));
			 }while(ans.indexOf(wrongans)>-1)
			document.getElementById("box"+i).innerHTML=wrongans;
		ans.push(wrongans);
			
		}
	}
}
	
	
