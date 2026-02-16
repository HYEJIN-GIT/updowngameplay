//랜덤 번호 지정
//유저가 번호를 입력한다 go라는 버튼 누름
//랜덤 번호가 < 유저번호 down
//랜덤 번호가 > 유저번호  up
//reset버튼을 누르면 게임 리셋
//5번의 기회를 다 쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면 알려준다 기회를 깎지 않는다.

let computerNum =0
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById('reset-button')
let chance =5
let gameOver = false
let chanceArea = document.getElementById('chance-area')
let history = []
userInput.addEventListener("focus",()=>{
    userInput.value = ""
})
playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)

const pickRandomNum = ()=>{
      computerNum = Math.floor(Math.random()*100) + 1
    console.log(computerNum)
}
pickRandomNum()

function play(){

  
    let userValue = userInput.value
    if(userValue<1 || userValue>100){
        resultArea.textContent = "1과 100사이 숫자를 입력해주세요"
        return
    }
    if(history.includes(userValue)){
         resultArea.textContent = "이미 입력된 값입니다."
        return
    }
    chance--
    chanceArea.textContent = `남은기회 : ${chance}`
    console.log(userValue)
    if(userValue<computerNum){
        resultArea.textContent = "UP!!"
    }else if(userValue>computerNum){
       resultArea.textContent = "Down!!"
    }else {
       resultArea.textContent = "맞췄습니다!!"
       gameOver = true
    }

    history.push(userValue)

    if(chance<1){
        gameOver = true
    }
    if(gameOver){
        playButton.disabled = true;
    }
   


}

function reset(){
    //userinput 창 깨긋하게 정리
    // 새로운 번호 생성
    userInput.value = ""
    chance = 5
    chanceArea.textContent = `남은기회 : ${chance}`
    pickRandomNum()
    gameOver = false
    playButton.disabled = false
    resultArea.textContent = "결과값이 여기 나옵니다"

}