const btnList = document.getElementsByClassName('completed-btn');

for(const btn of btnList) {
    btn.addEventListener('click', function(event) {
        const btnItem = event.target.setAttribute('disabled', 'true');
        handleCompleted(btn.parentNode.parentNode.querySelector('h1'));
    })
}