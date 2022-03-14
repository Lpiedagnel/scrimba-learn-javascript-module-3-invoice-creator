/***** VARIABLES *****/

/* INSIDE THE DOCUMENT */
const washCar = document.getElementById('wash-btn')
const mowLawn = document.getElementById('mow-btn')
const pullWeeds = document.getElementById('pull-btn')
const theadTaskTable = document.getElementById('thead-task-table')
const taskList = document.getElementById('task-list-table')
const displayTotalAmount = document.getElementById('total-amount')
const sendBtn = document.getElementById('send-btn')

/* OUTSIDE THE DOCUMENT */
let totalAmount = 0
let allPrice = []
let allTask = []


/***** FUNCTIONS *****/

// Add the thead of the task-table after select a task
function addThead() {
    if (allTask.length > 0) {
        theadTaskTable.classList.remove("hidden-thead")
    } else {
        theadTaskTable.classList.add("hidden-thead")
    }
}

// Render Task and Total Amount
function renderTask() {
    let render = ""
    for (let i = 0; i < allTask.length; i++) {
        render += 
        `
        <tr>
            <td class="task-btn">${allTask[i]}</td>
            <td class="remove-btn" id="remove-btn">Remove</td>
            <td class="spacing-td"></td>
            <td class="task-price"><span>$</span>${allPrice[i]}</td>
        </tr>
        `
    }
    taskList.innerHTML = render
    displayTotalAmount.innerHTML = `$${totalAmount}`
    addThead()
}

// Add Task and Price to the array All Task and All Price
function addTask(task, price) {
    if (allTask.includes(task) === false) {
    totalAmount += price
    allTask.push(task)
    allPrice.push(price)
    renderTask()
    }
}

// Reset everything after click to send
function resetTasks() {
    totalAmount = 0
    allTask = []
    allPrice = []
    renderTask()
    addThead()
}


/*** Add Event Listener Tasks ***/

washCar.addEventListener('click', function() {
    addTask('Wash Car', 10)
})

mowLawn.addEventListener('click', function() {
    addTask('Mow Lawn', 20)
})

pullWeeds.addEventListener('click', function() {
    addTask('Pull Weeds', 30)
})

sendBtn.addEventListener('click', function() {
    resetTasks()
}) 