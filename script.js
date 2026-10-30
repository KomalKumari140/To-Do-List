

let AddTask=document.getElementsByClassName('btn')




function addTask() {
    const  newTask=document.createElement('li')
    const taskList=document.getElementById('taskList')
    taskList.appendChild(newTask)
    newTask.textContent=document.getElementById('text').value
    document.getElementById('text').value=""
    deleteTask(newTask)
}

function deleteTask(newTask){
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent="Delete"
    newTask.appendChild(deleteBtn)
    deleteBtn.onclick = function() {
        newTask.remove()
    }
}