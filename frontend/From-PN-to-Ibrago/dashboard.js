const openForm = () => {
	document.getElementById("myForm").style.display = "block";
}

const closeForm = () => {
	document.getElementById("myForm").style.display = "none";
}

const openEdit = () => {
	document.getElementById("edit").style.display = "block";
}

const closeEdit = () => {
	document.getElementById("edit").style.display = "none";
}

const getElem = (id) => {
	return document.getElementById(id);
}

const makeElem = (elem) => {
	return document.createElement(elem);
}

var addGoalBtn = getElem('add-goal-btn');
var goalList = getElem('goal-list');
var goalTitle = getElem('goal-title');
var editPopup = getElem('edit');
var editForm = getElem('edit-value');
var editBtn = getElem('edit-goal-btn');
var drop = getElem('clone');


// Fix

var idCount = 3;

let newGoalsList = [];

const addDropdown = () => {
	return drop.cloneNode(true);
}


class Goals{
	constructor(){
		this.newGoal = makeElem('li');
		this.dropdown = addDropdown();
		this.deleter = this.dropdown.lastElementChild.lastElementChild;
		this.editor = this.dropdown.lastElementChild.firstElementChild;
	}

	addGoal() {
		if (goalTitle.value !== undefined && goalTitle.value !== '') {
			//This next line adds the newly defined goal to an array of goals created in this session
			newGoalsList.push(goalTitle.value);
			console.log(`New Goals List: ${newGoalsList}`); //Goals are stored correctly
			this.newGoal.innerText = goalTitle.value;
			this.newGoal.appendChild(this.dropdown)
			this.newGoal.id = '';
			this.newGoal.addEventListener('click', () => {
				this.newGoal.classList.toggle('active');
				$(this.newGoal).siblings().removeClass('active');
				this.editor.addEventListener('click', (e) => {
					e.preventDefault();
					openEdit();
					editBtn.addEventListener('click', (f) => {
						f.preventDefault();
						if (editForm.value !== '' && editForm.value !== undefined) {
							this.newGoal.childNodes[0].data = editForm.value;
							closeEdit();
							editForm.value = '';
						}
					});
				});
			});
			goalList.appendChild(this.newGoal);
			goalTitle.value = '';
			closeForm();

		}
		else{
			alert('please enter new goal title')
		}

		this.removeGoal();
		// this.edit();
	}

	removeGoal() {
		this.deleter.addEventListener('click', (e) => {
			e.target.parentNode.parentNode.parentNode.remove();
		});
	}

}

class tasksForEachGoal {
	//This constructs the frame for the task
	constructor(){
		this.newTask = makeElem('div'); //This creates a new div element for the tasks
		this.dropdown = addDropdown;
		this.deleter = this.dropdown.lastElementChild.lastElementChild;
		this.editor = this.dropdown.lastElementChild.firstElementChild;
	}

	// This actually adds the task
	addTask() {
		if (goalTitle.value !== undefined && goalTitle.value !== '') {
			//This next line adds the newly defined goal to an array of goals created in this session
			newTaskList.push(taskTitle.value);
			console.log(`New Goals List: ${newGoalsList}`); //Goals are stored correctly
			this.newGoal.innerText = goalTitle.value;
			this.newGoal.appendChild(this.dropdown)
			this.newGoal.id = '';
			this.newGoal.addEventListener('click', () => {
				this.newGoal.classList.toggle('active');
				$(this.newGoal).siblings().removeClass('active');
				this.editor.addEventListener('click', (e) => {
					e.preventDefault();
					openEdit();
					editBtn.addEventListener('click', (f) => {
						f.preventDefault();
						if (editForm.value !== '' && editForm.value !== undefined) {
							this.newGoal.childNodes[0].data = editForm.value;
							closeEdit();
							editForm.value = '';
						}
					});
				});
			});
			goalList.appendChild(this.newGoal);
			goalTitle.value = '';
			closeForm();
		}
		else{
			alert('please enter new goal title')
		}

		this.removeGoal();
		// this.edit();
	}

	removeTask () {
		this.deleter.addEventListener('click', (e) => {
			e.target.parentNode.parentNode.parentNode.remove();
		});
	}
}

const addGoalFunction = () => {
	let goal = new Goals();
	goal.addGoal();
	return goal;
}

addGoalBtn.addEventListener('click', (e) => {
    e.preventDefault();
	addGoalFunction();
});

$(document).ready(function(){
	// $('body #goal-list:nth-child(1)').addClass('active');
	$('body #goal-list > *').click( function(){
		$(this).each(function(){
		    $(this).addClass('active').siblings().removeClass('active');
		});
	})

	$('body #goal-list li div').find('.delete').click(function(e){
		e.preventDefault();
		$(this).parent().parent().parent().remove();
	});

	$('body #goal-list > li .edit').click(function(e){
		editForm.value = '';
		e.preventDefault();
		openEdit();
		editBtn.addEventListener('click', (j) => {
			j.preventDefault();
			e.target.parentNode.parentNode.parentNode.childNodes[0].data = editForm.value;
			editForm.value = '';
			closeEdit();
		});
		
	});
});




























