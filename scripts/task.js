const btnList = document.getElementsByClassName('completed-btn');
const statusList = [];


for(const btn of btnList) {
    statusList.push(0);
    btn.addEventListener('click', function(event) {
        const btnItem = event.target.setAttribute('disabled', 'true');
        handleCompleted(btn.parentNode.parentNode.querySelector('h1'));
        statusList.pop();
        
        if(statusList.length < 1) {
            alert("Congrats!! You have completed all the current tasks");
        }
    })
}
