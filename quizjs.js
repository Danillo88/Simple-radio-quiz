let points = 0;
uncheck_all_radio_buttons();

const correctAnswerTab = [3,2,0,2,1,3,1,3,1,2];

const check_quiz = document.getElementById('check');
const try_again_val = document.getElementById('try-again');

check_quiz.addEventListener('click',check_answer_one);
check_quiz.addEventListener('click',check_answer_two);
check_quiz.addEventListener('click',check_answer_three);
check_quiz.addEventListener('click',check_answer_four);
check_quiz.addEventListener('click',check_answer_five);
check_quiz.addEventListener('click',check_answer_six);
check_quiz.addEventListener('click',check_answer_seven);
check_quiz.addEventListener('click',check_answer_eight);
check_quiz.addEventListener('click',check_answer_nine);
check_quiz.addEventListener('click',check_answer_ten);

check_quiz.addEventListener('click',total_points);
check_quiz.addEventListener('click',unactive_button);
check_quiz.addEventListener('click',show_button_try_again);

try_again_val.addEventListener('click',try_again);


function check_answer_one() 
{
		
		const birthRadio = document.querySelectorAll('input[name="birth"]');
   
  	checkError(birthRadio,1);
  	checkIsAnswerCorrect(birthRadio,correctAnswerTab[0]);

				
}

function check_answer_two() 
{
		const rebelionRadio = document.querySelectorAll('input[name="rebelion"]');
		
		checkError(rebelionRadio,2);
		checkIsAnswerCorrect(rebelionRadio,correctAnswerTab[1]);

}

function check_answer_three() 
{
		const babtistRadio = document.querySelectorAll('input[name="babtist"]');
		
		checkError(babtistRadio,3);
		checkIsAnswerCorrect(babtistRadio,correctAnswerTab[2]);
}
function check_answer_four() 
{
		const orderRadio = document.querySelectorAll('input[name="order"]');
		
		checkError(orderRadio,4);
		checkIsAnswerCorrect(orderRadio,correctAnswerTab[3]);
}
function check_answer_five() 
{
		const dynastyRadio = document.querySelectorAll('input[name="dynasty"]');
		
		checkError(dynastyRadio,5);
		checkIsAnswerCorrect(dynastyRadio,correctAnswerTab[4]);
}

function check_answer_six() 
{
		const degRadio = document.querySelectorAll('input[name="deg"]');
		
		checkError(degRadio,6);
		checkIsAnswerCorrect(degRadio,correctAnswerTab[5]);
}

function check_answer_seven() 
{
		const reunionRadio = document.querySelectorAll('input[name="reunion"]');
		
		checkError(reunionRadio,7);
		checkIsAnswerCorrect(reunionRadio,correctAnswerTab[6]);
}

function check_answer_eight() 
{
		const disRadio = document.querySelectorAll('input[name="dis"]');
		
		checkError(disRadio,8);
		checkIsAnswerCorrect(disRadio,correctAnswerTab[7]);
}


function check_answer_nine() 
{
		const constRadio = document.querySelectorAll('input[name="const"]');
		
		checkError(constRadio,9);
		checkIsAnswerCorrect(constRadio,correctAnswerTab[8]);
}

function check_answer_ten() 
{
		const constRadio = document.querySelectorAll('input[name="house"]');
		
		checkError(constRadio,10);
		checkIsAnswerCorrect(constRadio,correctAnswerTab[9]);
}

function total_points()
{
	$("#show-score").append("Uzyskałeś: " + points +" punkt(y).")
}

function unactive_button() 
{
	$("#check").prop("disabled",true) 
	$("#check").addClass("unactive");
}


function show_button_try_again() 
{
	$('#try-again').addClass('try-again-visible');
}



function try_again()
{
		window.location.reload();
}

function uncheck_all_radio_buttons() 
{
	let uncheck = document.getElementsByTagName('input');
	for (let i = 0 ; i < uncheck.length ; i++) 
	{
		 $(uncheck[i]).prop('checked',false);
	}
}

function checkError(allInputs,set_number)
{
		let checkedIndex = -1;
		for (let i=0; i<allInputs.length; i++) 
		{
    if (allInputs[i].checked) 
    	{
        checkedIndex = i;
        
        break;
   		}
   }
		if (checkedIndex === -1) 
			{
				for (let i=0; i<allInputs.length; i++)
				{
						$(allInputs[i]).parents("p").addClass('red');				
				}
    alert('Nie zaznaczyłeś żadnego pola w zestawie pytań numer: ' + set_number);
			}
		
		return checkedIndex;
}


function checkIsAnswerCorrect(allInputs, answerNumber)
{
		let checkedIndex = -1;
		
		for (let i=0; i<allInputs.length; i++) 
		{
    if (allInputs[i].checked) 
    	{
        checkedIndex = i;
        
        break;
   		}
   }
   
   

    if (allInputs[answerNumber].checked) 
    	{
    			$(allInputs[answerNumber]).parents("p").addClass('green');
					points++;
        
   		}else {
   			$(allInputs[checkedIndex]).parents("p").addClass('red');
   			}
   
   

}


