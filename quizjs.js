let points = 0;
uncheck_all_radio_buttons();

const check_quiz = document.getElementById('check');
const try_again_val = document.getElementById('try-again');

check_quiz.addEventListener('click',check_answer_one);
check_quiz.addEventListener('click',check_answer_two);


check_quiz.addEventListener('click',total_points);
check_quiz.addEventListener('click',unactive_button);
check_quiz.addEventListener('click',show_button_try_again);

try_again_val.addEventListener('click',try_again);


function check_answer_one() 
{
		
		const birthRadio = document.querySelectorAll('input[name="birth"]');
   
  	checkError(birthRadio,1);
  	
		for (i = 0; i<birthRadio.length ; i++)
			{
					if (birthRadio[3].checked)
					 {
					 		points++;
					 		break;	
					 }	 	
			}
				
}

function check_answer_two() 
{
		const rebelionRadio = document.querySelectorAll('input[name="rebelion"]');
		checkError(rebelionRadio,2);
		for (i = 0; i<rebelionRadio.length ; i++)
			{
					if (rebelionRadio[2].checked)
					 {
					 		points++;
					 		break;	
					 }	 	
			}	
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

function checkError(allInputs, set_number)
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





