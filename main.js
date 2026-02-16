let result = document.getElementById('result')
let random = 0
let chance = 0
let userInput = document.getElementById('user-input')
let chanceArea =document.getElementById('chance-area')
let maxChance = 3
let resultChance = 3
let gameOver = false
let startBtn = document.getElementById('start-btn')
let history = []
let historyArea = document.getElementById("history-area")
let imageArea = document.getElementById('image-area')


userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        startBtn.click()
    }
})
//user에 포커스 두기
userInput.addEventListener("focus",()=>{
    userInput.value = ""
})

//숫자 랜덤 뽑기
const randomPick =()=>{
    random = Math.floor(Math.random()*100) + 1
    console.log(random)
}
randomPick()


//게임 시작
const tryGame=()=>{
    if(userInput.value === ""){
        alert("숫자가 비어 있습니다. 1과 100 사이의 숫자를 입력해주세요!")
        return
    }

    if(userInput.value <1 || userInput.value>100){
        alert("1과 100 사이의 숫자를 입력해주세요!")
        return
    }
    if(history.includes(userInput.value)){
        alert("이미 입력된 숫자입니다!")
        return
    }
  
    
        chance++;
        resultChance--
        
        let percent = (chance / maxChance) * 100;
        document.querySelector(".progress").style.width = percent + "%"
        document.querySelector(".circle").style.left = percent + "%"
       chanceArea.textContent  =`남은 기회 ${resultChance}번`
       
       

       if(userInput.value <random)
        { 
            result.textContent = "숫자를 올리세요! "
              imageArea.textContent = "🔼"

        }else if(userInput.value >random){ 
        result.textContent = "숫자를 내리세요! "
         imageArea.textContent = "🔽"
        
       }else{ 
        result.textContent = "정답입니다!"
        imageArea.textContent = "🎉"
         gameOver = true 
        }
          
    if(resultChance <1 && !gameOver){
        result.textContent = ` 게임 오버! 정답은 ${random} 입니다`
        gameOver = true
    }
    if(gameOver){
        startBtn.disabled = true
    }
         
    history.push(userInput.value)
    historyArea.textContent = `입력된 값 :${history.join(",")}`
    console.log(history)


 
  
}


   

    

const correct= ()=>{
result.textContent = `정답은 ${random} 입니다`
}
const reset = ()=>{
    resultChance = 3 
    maxChance = 3
    chance = 0
    chanceArea.textContent  =`남은 기회 : ${resultChance}번`
    result.textContent = `숫자를 ?`
    historyArea.textContent = `입력된 값 :`
      imageArea.textContent = "🎯"
   gameOver = false
   startBtn.disabled = false
   userInput.value = ""
   history = []
   document.querySelector(".progress").style.width = "0%"
   document.querySelector(".circle").style.left = "0%"
   randomPick()
}