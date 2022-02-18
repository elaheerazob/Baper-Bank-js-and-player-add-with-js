function setPlayerStyle(playerName){
    playerName.style.border ='1px solid red';
    playerName.style.borderRadius ='20px';
    playerName.style.margin ='10px';
    playerName.style.padding ='10px';
}


const palyers =document.getElementsByClassName('player');
for(const playerName of palyers){
    setPlayerStyle(playerName);
    // playerName.addEventListener('click',function(){
    //     playerName.style.background ='red';
    // })
    
}
function addPlayer(){
    const playersDiv=document.getElementById('players');
    const player=document.createElement('div');
    player.classList.add('player');
    player.innerHTML =`<h2 class="player-name">New Player</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat sit dolorem pariatur corrupti ea nemo explicabo autem beatae eveniet quibusdam?</p>`;
    setPlayerStyle(player) 
    // player.addEventListener('click',function(){
    //     player.style.background ='green';
    // })                       
    playersDiv.appendChild(player);                    
}

document.getElementById('players').addEventListener('click',function(event){
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.background ='red';
    }event.target.parentNode.style.background ='green';
})