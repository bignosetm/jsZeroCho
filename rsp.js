const $computer = document.querySelector('#computer')
const $score = document.querySelector("#score")
const $rock = document.querySelector("#rock")
const $scissors = document.querySelector("#scissors")
const $paper = document.querySelector("#paper")
const IMG_URL = './rsp.png'
$computer.style.background = `url(${IMG_URL}) -464px 0`
$computer.style.backgroundSize = 'auto 200px'

const rspX = {
  scissors: '0',
  rock: '-220px',
  paper: '-440px',
}

let computerChoice = 'scissors'
const changeComputerHand = ()=> {
  if (computerChoice === 'scissors'){//가위
    computerChoice = 'rock'
  }
  else if (computerChoice === 'rock'){//바위
    computerChoice = 'paper'
  }
  else if(computerChoice === 'paper') {//보
    computerChoice = 'scissors'
  }
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`
  $computer.style.backgroundSize = 'auto 200px'
  //setTimeout(changeComputerHand, 50)

}
//setTimeout(changeComputerHand, 50)
let intervalId  = setInterval(changeComputerHand, 50)//여기서 함수 자리에 함수를 넣어야 하는데 ()를 붙이면
//함수를 호출하게 되므로 리턴 값이 발생한다. 이때 리턴값은 undefind이므로 ()를 빼줘야한다.
//여기서 setTimeout으로 바꿀 수 있는데 실행 되는 함수안에 또 setTimeout을 호출하면 재귀식으로 된다.

/*

const clickButton =  () => {//점수 계산 및 화면 표시
  clearInterval(intervalId)
  /*$rock.removeEventListener('click', clickButton)
  $scissors.removeEventListener('click', clickButton)
  $paper.removeEventListener('click', clickButton)
  setTimeout(() => {
    clearInterval(intervalId)
    /*$rock.addEventListener('click', clickButton)
    $scissors.addEventListener('click', clickButton)
    $paper.addEventListener('click', clickButton)
    intervalId = setInterval(changeComputerHand, 50)
  }, 1000)
}

*/
const scoreTable =  {
  rock: 0,
  scissors: 1,
  paper: -1,
}

let clickable = true
let computer = 0
let me = 0
const clickButton =  (event) => {//점수 계산 및 화면 표시
  if(clickable){
    console.log(event)
    clearInterval(intervalId)
    clickable = false
    const myChoice = event.target.textContent === '바위'
      ? 'rock':
       event.target.textContent === '가위'?
        'scissors': 'paper'
    const myScore = scoreTable[myChoice]
    const computerScore = scoreTable[computerChoice]
    const diff = myScore - computerScore

    let message
    if ([2, -1].includes(diff)){
      me +=1
      message = '승리'
    } else if (diff === -2|| diff === 1) {
      computer += 1
      message = '패배'
    } else if (diff === 0) {
      message = '무승부'
    }
    if (me === 3) {
      $score.textContent = `나의 승리 ${me}:${computer}`
    } else if (computer === 3) {
      $score.textContent = `컴퓨터의 승리 ${me}:${computer}`
    } else {
      $score.textContent = `${message} ${me}:${computer}`
      setTimeout(() => {
        clickable = true
        intervalId = setInterval(changeComputerHand, 50)
      }, 1000)
    }
  }
}

$rock.addEventListener('click', clickButton)
$scissors.addEventListener('click', clickButton)
$paper.addEventListener('click', clickButton)

