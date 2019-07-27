var playing=false;
var score;
var i;
var trials_left;
var fruits = ['apple', 'banana', 'cherry', 'grapes',
'mango', 'orange', 'peach', 'pear', 'watermelon'];
var step;
var action;
$(function(){
		$("#startreset").click(function(){
			if(playing==true){
				location.reload();
			}
			else{
			playing=true;	
			score=0;
			$("#scorevalue").html(score);
				
			$("#trialsleft"	).show();
				trials_left=3;
				addhearts();
				$("#gameover").hide();
				$("#startreset").html("Reset Game");
				startaction();
			}
			
			
		});
	
	


//click on Start reset button
	//are we playing?
		//yes
			//reload the page
		//no
			//show trialsleft box
			//change button text to reset game
			//1.create random fruit
			//define a random step
			//2.move fruit down by one step in every 30 security
				
				//is fruit too low?
					//no ---->repeat the move fruit down by one step
					//yes---->trials left? 
						//repeat 1.
					//no:show gameover,button text to strart game
					
$("#fruit1").mouseover(function(){
	score++;
	$("#scorevalue").html(score);
	$("#slicecount")[0].play();
	stopaction();
	//clearInterval(action);
	
	$("#fruit1").hide("explode",500);
	setTimeout(startaction,500);
});
//slice fruit	
	//play sound
	//explode fruit
	
function addhearts()
{
	$("#trialsleft").empty();
	for(i=0;i<trials_left;i++)
				{
					$("#trialsleft").append('<img src="heart.png"  class="life">');
				}
}
function startaction()
{
	
	$("#fruit1").show();
	choosefruit();
	$("#fruit1").css({'left' :
Math.round(550*Math.random()), 'top' : -50});
step=1+Math.round(5*Math.random());	//changing the step
action=setInterval(function(){
	$("#fruit1").css('top',$("#fruit1").position().top+step);

if($("#fruit1").position().top>$("#fruitscontainer").height())
{
	if(trials_left>1)
	{
		$("#fruit1").show();
	choosefruit();
	$("#fruit1").css({'left' :
fruits[Math.round(8*Math.random())] , 'top' : -50});
step=1+Math.round(5*Math.random());
trials_left--;
addhearts();	
	}
	else{
		playing=false;
		$("#startreset").html("start game");
		$("#gameover").show();
		$("#gameover").html('<p>Game over!</p><p>Your score is ' +score+'</p>');
		$("#trialsleft").hide();
		stopaction();
	}
}
},20);
}


function choosefruit()
{
	$("#fruit1").attr('src' ,  
fruits[Math.round(8*Math.random())] +'.jpg'); 
	
}
function stopaction()
{
	clearInterval(action);
	$("#fruit1").hide();
	
}
});