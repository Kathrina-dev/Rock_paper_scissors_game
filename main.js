const score={
    wins: 0,
    loses: 0,
    ties: 0
}
const scoreObject= JSON.stringify(score);
localStorage.setItem(scoreObject);
function showScoreElement(){
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;
}
showScoreElement();

function pickComputerMove()
{
    let computerMove='';
    const randomNumber = Math.random();       
    if (randomNumber>0 && randomNumber<1/3)
    {
        computerMove='Rock';
    }
    if (randomNumber>1/3 && randomNumber<2/3)
    {
        computerMove='Paper';
    }
    if (randomNumber>2/3 && randomNumber<1)
    {
        computerMove='Scissors';
    }
    return computerMove;
}

function playGame(playerMove){
    computer=pickComputerMove();
    let result='';
    if (playerMove==='Rock')
    {
        if (computer==='Rock')
        {
            result='Tie';
        }
        if (computer==='Paper')
        {
            result='You lose';
        }
        if (computer==='Scissors')
        {
            result='You win';
        }
    }
    
    if (playerMove==='Paper')
    {
        if (computer==='Rock')
        {
            result='You win';
        }
        if (computer==='Paper')
        {
            result='Tie';
        }
        if (computer==='Scissors')
        {
            result='You lose';
        }
    }

    if (playerMove==="Scissors")
    {
        if (computer==='Rock')
        {
            result='You lose';
        }
        if (computer==='Paper')
        {
            result='You win';
        }
        if (computer==='Scissors')
        {
            result='Tie';
        }
    }
    if (result==='You win'){
        score.wins+=1;
    }
    else if(result==='You lose'){
        score.loses+=1;
    }
    else if (result==='Tie'){
        score.ties+=1;
    }

    document.querySelector('.js-result')
        .innerHTML = result;
    document.querySelector('.js-move')
        .innerHTML = `You <img src="Images/${playerMove}.png" class="move-icon"> <img src="Images/${computer}.png" class="move-icon">Computer `;
    
   showScoreElement();
    
}