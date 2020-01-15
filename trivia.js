var score = 0
var i = 1
var ans = 1
var right = new Audio('sounds/correct.mp3');
var wrong = new Audio('sounds/incorrect.mp3');

function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"       
        score++
		right.play();
		document.getElementById("myImg").src="./images/yes.png"

    }
    else {
        document.getElementById("question").value="You are wrong"
		wrong.play();
		document.getElementById("myImg").src="./images/no.png"   
    } 
    document.view.qscore.value=score
	}

else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        score++
		right.play();
		document.getElementById("myImg").src="./images/yes.png"
    }
    else {
        document.getElementById("question").value="You are wrong"
        wrong.play();
		document.getElementById("myImg").src="./images/no.png"
    }
    document.view.qscore.value=score
}
    
else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        score++
		right.play();
		document.getElementById("myImg").src="./images/yes.png"
	}
    else {
        document.getElementById("question").value="You are wrong"
        wrong.play();
    }
    document.view.qscore.value=score
}    

else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        score++
		right.play();
		document.getElementById("myImg").src="./images/yes.png"
    }
    else {
        document.getElementById("question").value="You are wrong"
        wrong.play();
		document.getElementById("myImg").src="./images/no.png"
    }
    document.view.qscore.value=score
}    

else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        score++
		right.play();
		document.getElementById("myImg").src="./images/yes.png"
	}
    else {
        document.getElementById("question").value="You are wrong"
        wrong.play();
		document.getElementById("myImg").src="./images/no.png"
    }
    document.view.qscore.value=score
}    

else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        score++
		right.play();
		document.getElementById("myImg").src="./images/yes.png"
    }
    else {
        document.getElementById("question").value="You are wrong"
		wrong.play();
		document.getElementById("myImg").src="./images/no.png"
    }
    document.view.qscore.value=score
}    

else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        score++
		right.play();
		document.getElementById("myImg").src="./images/yes.png"
	}
    else {
        document.getElementById("question").value="You are wrong"
        wrong.play();
		document.getElementById("myImg").src="./images/no.png"
    }
    document.view.qscore.value=score
}       

else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        score++
		right.play();
		document.getElementById("myImg").src="./images/yes.png"
	}
    else {
        document.getElementById("question").value="You are wrong"
        wrong.play();
		document.getElementById("myImg").src="./images/no.png"
    }
    document.view.qscore.value=score
}       

else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        score++
		right.play();
		document.getElementById("myImg").src="./images/yes.png"
	}
    else {
        document.getElementById("question").value="You are wrong"
        wrong.play();
		document.getElementById("myImg").src="./images/no.png"
    }
    document.view.qscore.value=score
}       
        
else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        score++
		right.play();
		document.getElementById("myImg").src="./images/yes.png"
	}
    else {
        document.getElementById("question").value="You are wrong"
        wrong.play();
		document.getElementById("myImg").src="./images/no.png"
    }
    document.view.qscore.value=score
}       
        
	ans++; 
}
        

function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="What does Sokka and Katara call their grandmother? \na)Grandmother \nb)Gran Gran \nc)Mama \nd)Granny";
    document.view.qans.value=""
}
    
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What was the puppetmaster's name? \na)Hana \nb)Nini \nc)Hama \nd)Hella";
    document.view.qans.value=""
}
    
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="In 'The Blue Spirit', what was Zhao promoted to? \na)Admiral \nb)General \nc)Commander \nd)Sir";
    document.view.qans.value=""
}

else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who was Aang's first firebending teacher? \na)Zhao \nb)Jang \nc)Zuko \nd)Jeong-Jeong";
    document.view.qans.value=""
}

else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who were the 2 freedom fighters that stayed in Ba Sing Se? \na)Pipsqueak and Longshot \nb)The Duke and Pipsqueak \nc)Smellerbee and The Duke \nd)Smellerbee and Longshot";
    document.view.qans.value=""
}

else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What was the name of Iroh's son? \na)Lee \nb)Lu Ten \nc)Tenten \nd)Jang";
    document.view.qans.value=""
}

else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What was the name of Avatar Roku's dragon? \na)Fang \nb)Scales \nc)Thorn \nd)The dragon doesn't have a name";
    document.view.qans.value=""
}      

else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What episodes were 'The Boiling Rock' (out of 61 episodes)? \na)33,34 \nb)20,21 \nc)54,55 \nd)49,50 ";
    document.view.qans.value=""
}      
      
else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="In 'The Painted Lady', what were the names of the 3 'brothers'? \na)Xu, Bushi, Don \nb)Don, Dock, Xu \nc)Dock, Xu, Bushi \nd)Bushi, Lee, Don";
    document.view.qans.value=""
}      
         
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="In The 'Southern Air Temple', what was the score in the air game between Aang and Sokka? \na)Aang-10, Sokka-0 \nb)Aang-5, Sokka-0 \nc)Aagn-8, Sokka-0 \nd)Aang-7, Sokka-0";
    document.view.qans.value=""
}      
     
    i++; 
}