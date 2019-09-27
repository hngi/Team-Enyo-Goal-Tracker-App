<script>
        //Fetch userData from backend API
        const userData = {
            "userID": "enyo00000000001",
            "name": "Mide",
            "goals": [
                {
                    "goalIndex":0,
                    "goalTitle": "Climb mount Kilimanjaro",
                    "goalTasks": [
                        {"taskIndex": 0, "taskDecription":"Get Permision from boss", "isCompleted": true},
                        {"taskIndex": 1, "taskDecription":"Buy supplies from tesco", "isCompleted": false},
                        {"taskIndex": 2, "taskDecription":"Book flight to Tanzania", "isCompleted": false}
                    ]
                },
                {
                    "goalIndex":1,
                    "goalTitle": "Complete the HNG internship",
                    "goalTasks": []
                }]
        }


const {userID, name, goals} = userData;
const objectOfGoalTitles = {};
const objectOfGoalTasks = {};
goals.forEach(goal => objectOfGoalTitles[goal.goalIndex] = goal.goalTitle);
goals.forEach(goal => objectOfGoalTasks[goal.goalIndex] = goal.goalTasks);
console.log(objectOfGoalTitles);

//        console.log(userID, name, goals);

let x = 1;
let selectedGoal = `${x}`;
console.log();
console.log(objectOfGoalTasks[selectedGoal]);

const displayGoalTitle = () => {
    //This should simply get the goal that's currently selected and display its title. DONE!
    //whoever calls this function gets to set the seleted goal
    console.log(event.target);
    return document.querySelector('[goalTitle]').textContent = objectOfGoalTitles[selectedGoal];
    
};

const toggleTaskCompletion = () => {
    //Check the classlist for the task. If isComplete = true, set it to false else set it to true
            let clickedTask = event.target;
            if (clickedTask.classList.contains('is-complete')){
                // Add a line here to update the number of completed tasks
                return clickedTask.classList.remove('is-complete');
            }
            
            // Add a line here to update the number of completed tasks
            return clickedTask.classList.add('is-complete');
};

        
const displayToDoList = () => {
    //This should create a new element with checkbox, todo list, and menu button
    //objectOfGoalTasks[selectedGoal];
    //Currently working on this within the gdashboard.html file
    
    //Then place the event listeners afterwards
    
    //Add an identifier for the currently selected goal
    const allToDoItems = document.querySelectorAll(".taskItem");
    allToDoItems.forEach(task => task.addEventListener("click", toggleTaskCompletion()));
};

const displayProgress = () => {
    /*This shoudld iterate over the gool tasks array and get the number of isCompleted 
    that are true and compute what fraction of the total number of tasks it represents*/
};  

const displayStatistics = () => {};

const openGoalDetails = () => {
    //Maybe pass the goal index as an argument somewhere?
    console.log("It worked");
    displayGoalTitle();
    displayToDoList();
    displayProgress();
    displayStatistics();
};

const allGoalItems = document.querySelectorAll(".goalItem");
    
allGoalItems.forEach(goal => goal.addEventListener("click", ()=>openGoalDetails()));
        
// Display progress, update the object based on what tasks have been completed.        
        

    
    </script>