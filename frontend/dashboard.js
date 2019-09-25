const openForm = () => {
	document.getElementById("myForm").style.display = "block";
}

const closeForm = () => {
	document.getElementById("myForm").style.display = "none";
}

const getElem = (id) => {
	return document.getElementById(id);
}

var addGoalBtn = getElem('add-goal-btn');
var goalList = getElem('goal-list');
var goalTitle = getElem('goal-title');

// var drop = getElem('drop');
// var dropToggle = getElem('drop-toggle');
// var changeDrop = Object.assign({}, dropToggle);


addGoalBtn.addEventListener('click', (e) => {
	e.preventDefault();
	let newGoal = document.createElement('li');
	if (goalTitle.value !== undefined && goalTitle.value !== '') {
		newGoal.innerText = goalTitle.value;
		goalList.appendChild(newGoal);
		goalTitle.value = '';
		closeForm();
	}
	else{
		alert('please enter new goal title')
	}
})

