const openForm = () => {
	document.getElementById("myForm").style.display = "block";
}


const openTaskForm = () => {
	document.getElementById("myTaskForm").style.display = "block";
}
//this one below is the form for creating goals
const closeForm = () => {
	document.getElementById("myForm").style.display = "none";
}
//this one below is the form for creating goals
const closeTaskForm = () => {
	document.getElementById("myTaskForm").style.display = "none";
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
// DOM elements for the goal panel
var addGoalBtn = getElem('add-goal-btn');
var goalList = getElem('goal-list');
var goalTitle = getElem('goal-title');
var editPopup = getElem('edit');
var editForm = getElem('edit-value');
var editBtn = getElem('edit-goal-btn');
var drop = getElem('clone');

// DOM elements for the task panel
let addTaskButton = document.querySelector('[addTask]');
let taskList = document.querySelector('[taskList]');
let taskTitle = document.querySelector('[taskTitle]');
// Use editPopup from above
let editTaskForm = getElem('edit-task-value');
let editTaskBtn = getElem('edit-task-btn');
// The dropdown element built for the goal section will be reused here

// var idCount = 3;

// This is where interactions from the user will be stored for a given session
let newGoalsList = [];
let newTaskList = [];
let currentGoalSelection; //This lets us know what goal the user currently selected
let goalsAndTasksForCurrentSession = {};

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
		this.newTask = makeElem('li'); //This creates a new list element for the tasks
		this.dropdown = addDropdown();
		this.deleter = this.dropdown.lastElementChild.lastElementChild;
		this.editor = this.dropdown.lastElementChild.firstElementChild;
	}

	// This actually adds the task
	addTask() {
		if (taskTitle.value !== undefined && taskTitle.value !== '') {
			//This next line adds the newly defined goal to an array of goals created in this session
			newTaskList.push(taskTitle.value);
			console.log(`New Task List: ${newTaskList}`); //Goals are stored correctly
			this.newTask.innerText = taskTitle.value;
			this.newTask.appendChild(this.dropdown)
			this.newTask.id = ''; //What's this line for?
			this.editor.addEventListener('click', (e) => {
				e.preventDefault();
				openEdit();
				editBtn.addEventListener('click', (f) => {
						f.preventDefault();
						if (editTaskForm.value !== '' && editTaskForm.value !== undefined) {
							this.newGoal.childNodes[0].data = editTaskForm.value;
							closeEdit();
							editTaskForm.value = '';
						}
				 	});
				});
			console.log(this.newTask);
			taskList.appendChild(this.newTask);
			taskTitle.value = '';
			closeTaskForm();
		}
		else{
			alert('Please enter new tasktitle')
		}

		this.removeTask();
		// this.edit();
	}

	// Not sure what this does but it was implemented in the add goal functionality so I just replicated it here
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

const addTaskFunction = () => {
	let task = new tasksForEachGoal();
	task.addTask();
	return task;
};

// Adds a goal when the add goal button is clicked
addGoalBtn.addEventListener('click', (e) => {
    e.preventDefault();
	addGoalFunction();
});

// Adds a task when the add goal button is clicked
addTaskButton.addEventListener('click', (e)=>{
	e.preventDefault();
	addTaskFunction();
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


























