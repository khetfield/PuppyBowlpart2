function addPlayer() {
    const nameInput = document.getElementById('name');
    const breedInput = document.getElementById('breed');
    const imageUrlInput = document.getElementById('imageUrl');
    const teamInput = document.getElementById('team');

    const name = nameInput.value;
    const breed = breedInput.value;
    const imageUrl = imageUrlInput.value;
    const team = teamInput.value;

    const playerCard = `
        <div class="player-card">
            <img src="${imageUrl}" alt="${name}">
            <div class="player-details" style="display: none;">
                <p>Name: ${name}</p>
                <p>Breed: ${breed}</p>
                <p>Team: ${team}</p>
            </div>
            <button class="show-details-button" onclick="showDetails(this)">Show Details</button>
            <button class="hide-details-button" onclick="showDetails(this)" style="display: none;">Hide Details</button>
            <button onclick="removePlayer(this)">Remove Player</button>
        </div>
    `;
    
    document.getElementById('playerList').innerHTML += playerCard;

    // clear out input boxes after adding puppy
    nameInput.value = '';
    breedInput.value = '';
    imageUrlInput.value = '';
    teamInput.value = 'Select Team';
}

function showDetails(button) {
    const playerCard = button.parentElement;
    const details = playerCard.querySelector('.player-details');
    const showDetailsButton = playerCard.querySelector('.show-details-button');
    const hideDetailsButton = playerCard.querySelector('.hide-details-button');

    if (details.style.display === 'none') {
        details.style.display = 'block';
        showDetailsButton.style.display = 'none';
        hideDetailsButton.style.display = 'inline-block';
    } else {
        details.style.display = 'none';
        showDetailsButton.style.display = 'inline-block';
        hideDetailsButton.style.display = 'none';
    }
}
function removePlayer(button) {
    const playerCard = button.parentElement;
    playerCard.remove();
}
