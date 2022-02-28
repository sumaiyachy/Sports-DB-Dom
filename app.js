const allPlayers = () => {
    const searchValue = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showPlayerDetails(data.player));
    console.log(url);
}
const showPlayerDetails = (players) => {
    for (const player of players) {
        const parent = document.getElementById('player');
        const div = document.createElement('div');
        div.innerHTML = `<div class="card border mb-3 p-3">
    <div class="pro-pic">
        <img class="w-50" src="${player.strThumb}" alt="">
    </div>
    <h2>Name :${player.strPlayer} </h2>
    <h5>Country : ${player.strNationality}</h5>
    <p></p>
    <div class="all-button">
        <button class="btn btn-danger">Delete</button>
        <button onclick="details('${player.idPlayer}')" class="btn btn-primary">Details</button>
    </div>
</div>`
        parent.appendChild(div);
        console.log(player);
    }

}
const details = (id) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDetailsById(data.players[0]));
    console.log(id);
};
const showDetailsById = (info) => {
    console.log(info.strGender);
    if (info.strGender == "Male") {
        document.getElementById('male').style.display = "block";
        document.getElementById('female').style.display = "none";
    }
    else if (info.strGender == "Female") {
        document.getElementById('male').style.display = "none";
        document.getElementById('female').style.display = "block";
    }
    //     document.getElementById('details-container').innerHTML = `<div class="card mb-3 p-3">
    //     <div>
    //         <img class="w-50" src="${info.strRender}" alt="">
    //     </div>
    //     <h2>Name :${info.strPlayer} </h2>
    //     <h5>Country : ${info.strNationality}</h5>
    //     <p>Id:${info.idPlayer}</p>
    // </div>`

};