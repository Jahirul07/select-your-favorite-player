const liArray = [];
const players = document.querySelectorAll('.player-btn');
for (const player of players) {
    player.addEventListener('click', function (event) {
        const parentUl = document.getElementById('selected-player');
        const newLi = document.createElement('li');
        newLi.innerText = event.target.parentNode.parentNode.children[1].children[0].innerText;
        liArray.push(newLi);
        if (liArray.length > 5) {
            alert('You can not add more than 5 Players!')
        } else {
            parentUl.appendChild(newLi);
            player.disabled = true;
        }
    })
}