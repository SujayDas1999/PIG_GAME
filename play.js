var scores = [0,0];
var roundScore, activePlayer, dice; 
                                   
roundScore = 0;
activePlayer = 0;

//console.log(dice);
// 
//

var x = document.querySelector('#score-0').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function(){
    // 1. Random Number 
    var dice = Math.floor(Math.random() * 6) + 1;
    
    // 2. Display The Result
    var diceDOM = document.querySelector('.dice'); 
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    // 3. Update the round score IF the rolled number was NOT a 1
     if (dice !== 1) {
         roundScore += dice;
         document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0; 
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none'    
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
    }

});

    