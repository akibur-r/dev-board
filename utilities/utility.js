function getNumberFromTextElementById(id) {
    const text = document.getElementById(id).textContent;
    const converted_text = parseInt(text);

    return converted_text;
}

function handleCompleted(element) {
    const assignedTasks = getNumberFromTextElementById('total-assigned-task');
    const completedTasks = getNumberFromTextElementById('total-completed-task');

    const updatedAssignedTasks = String(assignedTasks - 1).padStart(2, '0');
    const updatedCompletedTasks = String(completedTasks + 1).padStart(2, '0');

    document.getElementById('total-assigned-task').textContent = updatedAssignedTasks;
    document.getElementById('total-completed-task').textContent = updatedCompletedTasks;
    
    const taskName = element.textContent;
    const date = new Date();
    const initial_hr = date.getHours();

    const timePeriod = initial_hr >= 12 ? 'PM' : 'AM';
    const hr = String((initial_hr % 12)==0? 12 : (initial_hr % 12)).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const sec = String(date.getSeconds()).padStart(2, '0'); 

    const message = `You have Completed The Task ${taskName} at ${hr}:${min}:${sec} ${timePeriod}`

    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.classList.add(['rounded-lg']);
    messageElement.classList.add('p-3');
    messageElement.classList.add('bg-slate-200');
    console.log(messageElement);
    document.getElementById('activity-log').appendChild(messageElement);

    alert("Board Updated Successfully");
}
