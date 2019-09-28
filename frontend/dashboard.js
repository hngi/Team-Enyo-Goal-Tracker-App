/* eslint-disable no-console */
const openForm = () => {
	document.getElementById('myForm').style.display = 'block';
	document.querySelector('.container').classList.add('blurredElement');
};


const openTaskForm = () => {
	document.getElementById('myTaskForm').style.display = 'block';
	document.querySelector('.container').classList.add('blurredElement');
};
//this one below is the form for creating goals
const closeForm = () => {
	document.getElementById('myForm').style.display = 'none';
	document.querySelector('.container').classList.remove('blurredElement');
};
//this one below is the form for creating goals
const closeTaskForm = () => {
	document.getElementById('myTaskForm').style.display = 'none';
	document.querySelector('.container').classList.remove('blurredElement');
};

const openEdit = () => {
	document.getElementById('edit').style.display = 'block';
};

const closeEdit = () => {
	document.getElementById('edit').style.display = 'none';
};

const getElem = (id) => {
	return document.getElementById(id);
};

const makeElem = (elem) => {
	return document.createElement(elem);
};
// DOM elements for the goal panel
var addGoalBtn = getElem('add-goal-btn');
var goalList = getElem('goal-list');
var goalTitle = getElem('goal-title');
var editPopup = getElem('edit');
var editForm = getElem('edit-value');
var editBtn = getElem('edit-goal-btn');
var drop = getElem('cloneTask');

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
};

const numberOfCompletedTasks = () => {
	let totalNumberOfTasks = document.querySelectorAll('.task');
	let completedTasks = document.querySelectorAll('.is-complete');
	return parseInt(completedTasks.length * 100 / (totalNumberOfTasks.length-1), 10);
};

// This value passed here will be computed based on the number of unmarked completed tasks
const updateProgess = (value) => {
	const progressBar = document.querySelector('.progress-bar');
	progressBar.style.width = value+'%';
	progressBar.setAttribute('aria-valuenow', value); 
	progressBar.innerHTML = value+'%';
};
// updateProgress(numberOfCompletedTasks())


const toggleTaskCompletion = () => {
	//Check the classlist for the task. If isComplete = true, set it to false else set it to true
	let clickedTask = event.target;
	if (clickedTask.classList.contains('is-complete')){
		// Add a line here to update the number of completed tasks
		clickedTask.classList.remove('is-complete');
		return updateProgess(numberOfCompletedTasks());
	}           
	// Add a line here to update the number of completed tasks
	clickedTask.classList.add('is-complete');
	return updateProgess(numberOfCompletedTasks());
};

//toggleTaskCompletion for previously added task upon login
const listenForPreviouslyCompletedTasks = () => {
	let oldTasks = document.querySelectorAll('.previouslyAddedTask');
	oldTasks.forEach(oldTask => oldTask.addEventListener('click', ()=>toggleTaskCompletion()));
};

listenForPreviouslyCompletedTasks();

class Goals{
	constructor(){
		this.newGoal = makeElem('li');
		this.newGoal.style['fontsize']='1em';
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
			this.newGoal.appendChild(this.dropdown);
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
			alert('please enter new goal title');
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
			
			this.newTask.appendChild(makeElem('span'));
			this.newTask.querySelector('span').innerText = taskTitle.value;
			this.newTask.querySelector('span').addEventListener('click', ()=>toggleTaskCompletion());
			this.newTask.appendChild(this.dropdown);
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
					console.log('e no work');
				});
			});
			// this.newTask.addEventListener('click', ()=>toggleTaskCompletion());
			
			console.log(this.newTask);
			taskList.appendChild(this.newTask);
			taskTitle.value = '';
			
			closeTaskForm();
		}
		else{
			alert('Please enter new tasktitle');
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
};

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

// Adds a task when the add task button is clicked
addTaskButton.addEventListener('click', (e)=>{
	e.preventDefault();
	addTaskFunction();
	updateProgess(numberOfCompletedTasks());
});


// Code for Displaying previously set goals and tasks which were received from the backend

//We'll fetch the userData from the backend API. This is just some test data

// const userData = {
//     "userID": "enyo00000000001",
// 	"name": "Mide",
// 	"numberOfGoals": 2,
//     "goals": [
//         {
//             "goalIndex":0,
//             "goalTitle": "Climb mount Kilimanjaro",
//             "goalTasks": [
//                 {"taskIndex": 0, "taskDecription":"Get Permision from boss", "isCompleted": true},
//                 {"taskIndex": 1, "taskDecription":"Buy supplies from tesco", "isCompleted": false},
//                 {"taskIndex": 2, "taskDecription":"Book flight to Tanzania", "isCompleted": false}
//             ]
//         },
//         {
//             "goalIndex":1,
//             "goalTitle": "Complete the HNG internship",
//             "goalTasks": []
//         }]
// }

// // Extract details from received object
// const {userID, name, numberOfGoals, goals} = userData; 
// const objectOfGoals = {};
// //copy goals from received object to a temp object
// goals.forEach(goal => objectOfGoals[goal.goalIndex] = goal);


// const insertReceivedGoalsIntoDOM = () => {
// 	//Extract goals into an array
// 	//For each item in the array, call the function that insterts goals into the DOM
// 	let goalCurrentlyBeingInsertedIntoDOM = makeElem('li');
// 	this.dropdown = addDropdown();
// };

// const insertTasksForSelectedGoalIntoDOM = () => {

// };


// let x = 1;
// let selectedGoal = `${x}`;
// console.log();
// console.log(objectOfGoalTasks[selectedGoal]);

// const displayGoalTitle = () => {
//     //This should simply get the goal that's currently selected and display its title. DONE!
//     //whoever calls this function gets to set the seleted goal
//     console.log(event.target);
//     return document.querySelector('[goalTitle]').textContent = objectOfGoalTitles[selectedGoal];
    
// };

// const toggleTaskCompletion = () => {
//     //Check the classlist for the task. If isComplete = true, set it to false else set it to true
//             let clickedTask = event.target;
//             if (clickedTask.classList.contains('is-complete')){
//                 // Add a line here to update the number of completed tasks
// 				return clickedTask.classList.remove('is-complete');
//             }           
//             // Add a line here to update the number of completed tasks
// 			return clickedTask.classList.add('is-complete');
// };

        
// const displayToDoList = () => {
//     //This should create a new element with checkbox, todo list, and menu button
//     //objectOfGoalTasks[selectedGoal];
//     //Currently working on this within the gdashboard.html file

//     //Then place the event listeners afterwards
    
//     //Add an identifier for the currently selected goal
//     const allToDoItems = document.querySelectorAll(".taskItem");
//     allToDoItems.forEach(task => task.addEventListener("click", toggleTaskCompletion()));
// };

// const displayProgress = () => {
//     /*This shoudld iterate over the gool tasks array and get the number of isCompleted 
//     that are true and compute what fraction of the total number of tasks it represents*/
// };  

// const displayStatistics = () => {};

// const openGoalDetails = () => {
//     //Maybe pass the goal index as an argument somewhere?
//     console.log("It worked");
//     displayGoalTitle();
//     displayToDoList();
//     displayProgress();
//     displayStatistics();
// };

// const allGoalItems = document.querySelectorAll(".goalItem");
    
// allGoalItems.forEach(goal => goal.addEventListener("click", ()=>openGoalDetails()));
        
// // Display progress, update the object based on what tasks have been completed.


$(document).ready(function(){
	// $('body #goal-list:nth-child(1)').addClass('active');
	$('body #goal-list > *').click( function(){
		$(this).each(function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
	});

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



























