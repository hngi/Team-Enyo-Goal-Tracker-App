/* eslint-disable no-console */
// Create goal
const openForm = () => {
	document.getElementById('myForm').style.display = 'block';
	document.querySelector('.container').classList.add('blurredElement');
};
// Create task
const openTaskForm = () => {
	document.getElementById('myTaskForm').style.display = 'block';
	document.querySelector('.container').classList.add('blurredElement');
};
// Close goal
const closeForm = () => {
	document.getElementById('myForm').style.display = 'none';
	document.querySelector('.container').classList.remove('blurredElement');
};

// Close task
const closeTaskForm = () => {
	document.getElementById('myTaskForm').style.display = 'none';
	document.querySelector('.container').classList.remove('blurredElement');
};

//Edit goal
const openEdit = () => {
	document.querySelector('[editGoalPopup]').style.display = 'block';
	// document.querySelector('.container').classList.add('blurredElement');
};

//Close goal edit
const closeEdit = () => {
	document.querySelector('[editGoalPopup]').style.display = 'none';
	// document.querySelector('.container').classList.remove('blurredElement');
};

// Edit task
const openTaskEdit = () => {
	document.querySelector('[editTaskPopup]').style.display = 'block';
	// document.querySelector('.container').classList.add('blurredElement');
};

// Close task edit
const closeTaskEdit = () => {
	document.querySelector('[editTaskPopup]').style.display = 'none';
	// document.querySelector('.container').classList.remove('blurredElement');
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
let editGoalPopup = document.querySelector('[editGoalPopup]');
var editForm = getElem('edit-value');
var editBtn = getElem('edit-goal-btn');
var drop = getElem('cloneTask');
var goalToEdit;
var taskToEdit;

// DOM elements for the task panel
let addTaskButton = document.querySelector('[addTask]');
let taskList = document.querySelector('[taskList]');
let taskTitle = document.querySelector('[taskTitle]');
let editTaskPopup = document.querySelector('[editTaskPopup]');
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
	let totalNumberOfTasks = document.querySelectorAll('ul[tasklist] .task-item');
	let completedTasks = document.querySelectorAll('ul[tasklist] .is-complete');
	return parseInt(completedTasks.length * 100 / (totalNumberOfTasks.length), 10);
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

		fetch('/items/'+clickedTask.getAttribute('data-task'), {
			method: 'PUT',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			  body: JSON.stringify({done: 0})
			  
		  })
		  .then(res => res.json()) 
		  .then(res => console.log(res))
		  .catch(error => console.error(error));
		return updateProgess(numberOfCompletedTasks());
	}           
	// Add a line here to update the number of completed tasks
	clickedTask.classList.add('is-complete');

	fetch('/items/'+clickedTask.getAttribute('data-task'), {
		method: 'PUT',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		  body: JSON.stringify({done: 1})
		  
	  })
	  .then(res => res.json()) 
	  .then(res => console.log(res))
	  .catch(error => console.error(error));
	return updateProgess(numberOfCompletedTasks());
};

//toggleTaskCompletion for previously added task upon login
const listenForPreviouslyCompletedTasks = () => {
	let oldTasks = document.querySelectorAll('.previouslyAddedTask');
	oldTasks.forEach(oldTask => oldTask.addEventListener('click', ()=>toggleTaskCompletion()));
};

//Make sure to call this only after the previously set tasks and goals have been loaded into the DOM
//Also call it each time a goal is clicked and the list of tasks is updated

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

			//add goal to BE 
			fetch('/goals', {
				method: 'POST',
				headers: {
				  'Accept': 'application/json',
				  'Content-Type': 'application/json'
				},
				  body: JSON.stringify({name: goalTitle.value})
				  
			})
			.then(res => res.json()) 
			.then(res => {
				userGoals.goals.push(res);
				userGoals.goalIndex = userGoals.goals.length - 1; 
				this.newGoal.setAttribute('data-goal', res.id);
			})
			.catch(error => console.error(error));

			goalTitle.value = '';
			closeForm();

		}
		else{
			alert('Please enter new goal title');
		}

		this.removeGoal();
		// this.edit();
	}

	removeGoal() {
		this.deleter.addEventListener('click', (e) => {
			newGoal('-');
			//delete
			fetch('/goals/'+e.target.parentNode.parentNode.parentNode.getAttribute('data-goal'), {
				method: 'DELETE',
				headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
				},
				
			})
			.then(res => res.text()) 
			.then(res => console.log(res))
			.catch(error => console.error(error));
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

	addTaskDOM(item) {
		this.newTask.appendChild(makeElem('span'));
		this.newTask.querySelector('span').classList.add('task-item');
		if(item.done){
			this.newTask.querySelector('span').classList.add('is-complete');
		}
		this.newTask.querySelector('span').innerText = item.title;
		this.newTask.querySelector('span').setAttribute('data-task', item.id);
		this.newTask.querySelector('span').addEventListener('click', toggleTaskCompletion);
		this.newTask.appendChild(this.dropdown);
		this.newTask.id = ''; //What's this line for?
		this.editor.addEventListener('click', (e) => {
			e.preventDefault();
			openTaskEdit();
			taskToEdit = e.target;

		});
		// this.newTask.addEventListener('click', ()=>toggleTaskCompletion());
		
		console.log(this.newTask);
		taskList.appendChild(this.newTask);

		this.removeTask();
	}

	// This actually adds the task
	addTask() {
		if (taskTitle.value !== undefined && taskTitle.value !== '') {
			//This next line adds the newly defined goal to an array of goals created in this session
			newTaskList.push(taskTitle.value);
			console.log(`New Task List: ${newTaskList}`); //Goals are stored correctly

			fetch('/items', {
				method: 'POST',
				headers: {
				  'Accept': 'application/json',
				  'Content-Type': 'application/json'
				},
				  body: JSON.stringify({
					  title: taskTitle.value, 
					  goal_id: userGoals.goals[userGoals.goalIndex].id
					})
			  })
			  .then(res => res.json())
			  .then(res => {
				  userGoals.goals[userGoals.goalIndex].items.push(res)
				  this.addTaskDOM(res);
				})
			  .catch(error => console.error(error));

			taskTitle.value = '';
			
			closeTaskForm();
		}
		else{
			alert('Please enter new tasktitle');
		}
		// this.edit();
	}

	// Not sure what this does but it was implemented in the add goal functionality so I just replicated it here
	removeTask () {
		this.deleter.addEventListener('click', (e) => {
			fetch('/items/'+e.target.parentNode.parentNode.parentNode.childNodes[0].getAttribute('data-task'), {
				method: 'DELETE',
				headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
				},
				
			})
			.then(res => res.text()) 
			.then(res => console.log(res))
			.catch(error => console.error(error));
			e.target.parentNode.parentNode.parentNode.remove();
			updateProgess(numberOfCompletedTasks());
		});

		// We need to also remove tasks from the backend
	}
}

const addGoalFunction = () => {
	clearNoGoal();
	let goal = new Goals();
	goal.addGoal();
	return goal;
};

const addTaskFunction = () => {
	clearNoTask();
	let task = new tasksForEachGoal();
	task.addTask();
	updateProgess(numberOfCompletedTasks());
	return task;
};

const addTaskFunctionDOM = (item) => {
	clearNoTask();
	let task = new tasksForEachGoal();
	task.addTaskDOM(item);
	updateProgess(numberOfCompletedTasks());
	return task;
};

//hide no goal
const clearNoGoal = () => {
	$('#goal-list p').css('display', 'none');
}

//hide no goal
const clearNoTask = () => {
	$('ul[tasklist] p').css('display', 'none');
}


//clear tasks list
const clearTasks = () => {
	$('ul[tasklist] li').not('li.initial').remove();
}

//clear goal tasks detial
const newGoal = (title) => {
	clearTasks();
	$('.goal-header').text(title);
	$('ul[tasklist] p').css('display', 'block');
}

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

const userGoals = {
	goalIndex: 0,
	goals: []
}; 
// const userData = {
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

	//get all goals

	fetch('/goals', {
		method: 'GET',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		} 
	  })
	.then(response => response.json())
	.then(data => {
		console.log(data); 
		userGoals.goals = data;
	})
	.catch(error => console.error(error));

	// $('body #goal-list:nth-child(1)').addClass('active');
	$('body #goal-list > *').click( function(){
		$(this).each(function(){
			$(this).addClass('active').siblings().removeClass('active');
			
			userGoals.goalIndex = userGoals.goals.map(goal => goal.id).indexOf(parseInt($(this).attr('data-goal')));
			document.querySelector('.goal-header').innerText = userGoals.goals[userGoals.goalIndex].name;
			clearTasks();
			fetch('/goals/'+userGoals.goals[userGoals.goalIndex].id, {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                } 
              })
            .then(response => response.json())
            .then(data => {
                console.log(data); 
                userGoals.goals[userGoals.goalIndex] = data;
                
                clearTasks();
                //display tasks list
                userGoals.goals[userGoals.goalIndex].items.forEach(item => {
                    addTaskFunctionDOM(item);
                });
            })
            .catch(error => console.error(error))
		});
	});

	$('body #goal-list li div').find('.delete').click(function(e){
		newGoal(editForm.value);
		e.preventDefault();
		//delete
		fetch('/goals/'+$(this).parent().parent().parent().attr('data-goal'), {
			method: 'DELETE',
			headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
			},
			
		})
		.then(res => res.text()) 
		.then(res => console.log(res))
		.catch(error => console.error(error)) 

		$(this).parent().parent().parent().remove();
	});

	$('body #goal-list > li .edit').click(function(e){
		editForm.value = '';
		e.preventDefault();
		openEdit();
		//element to edit
		goalToEdit = e.target;
		
	});

	$('#edit-goal-btn').click(function(e){
		e.preventDefault();
		if (editForm.value !== '' && editForm.value !== undefined) {
			goalToEdit.parentNode.parentNode.parentNode.childNodes[0].data = editForm.value;
			fetch('/goals/'+userGoals.goals[userGoals.goalIndex].id, {
				method: 'PUT',
				headers: {
				  'Accept': 'application/json',
				  'Content-Type': 'application/json'
				},
				  body: JSON.stringify({name: editForm.value})
				  
			  })
			  .then(res => res.json()) 
			  .then(res => console.log(res))
			  .catch(error => console.error(error));

			  editForm.value = '';
			  closeEdit();
			  
		}
	});

	$('#edit-task-btn').click(function(e){
		e.preventDefault();
		if (editTaskForm.value !== '' && editTaskForm.value !== undefined) {
			taskToEdit.parentNode.parentNode.parentNode.childNodes[0].innerText = editTaskForm.value;
			fetch('/items/'+taskToEdit.parentNode.parentNode.parentNode.childNodes[0].getAttribute('data-task'), {
				method: 'PUT',
				headers: {
				  'Accept': 'application/json',
				  'Content-Type': 'application/json'
				},
				  body: JSON.stringify({title: editTaskForm.value})
				  
			  })
			  .then(res => res.json()) 
			  .then(res => console.log(res))
			  .catch(error => console.error(error));
			closeTaskEdit();
			editTaskForm.value = '';
		}
	});


	$('ul[tasklist] li span.task-item').click(toggleTaskCompletion);

	updateProgess(numberOfCompletedTasks());

	//delete task 
	$('ul[tasklist] li .dropdown-item.delete').click(function(e){
		e.preventDefault();
		//delete
		fetch('/items/'+$(this).parent().parent().prev().attr('data-task'), {
			method: 'DELETE',
			headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
			},
			
		})
		.then(res => res.text()) 
		.then(res => console.log(res))
		.catch(error => console.error(error)) 

		$(this).parent().parent().parent().remove();
		updateProgess(numberOfCompletedTasks());
	});
	
});
