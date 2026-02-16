# 💡업앤다운 게임 
- 강의를 통해 만든 숫자 맞추기 게임입니다.
- 1부터 100 사이의 랜덤 숫자를 맞추며, 제한된 기회 안에 정답을 맞추어야 합니다.


## 📍 기능 설명
- 랜덤 숫자 생성(1~100)
- 최대 3번 기회 제공
- 입력값에 대한 내용 표시
- 남은 기회 progress bar 보여주기 (ai에 도움을 조금 받음)
- enter키 입력
- 모바일 반응형

## 🕹 게임 방법
1. 게임 사이트 들어가자 마자 랜덤 값 생성
2. 1~100사이의 값 입력
3. 결과에 따라 숫자를 up&down 보여줌
4. 기회를 다 쓰면 gameover
5. reset버튼 클릭 시 다시 시작 가능
6. 정답을 알고 싶을 때 정답 버튼 클릭


## 🛠 사용 기술

- HTML5
- CSS
- JavaScript
- Bootstrap

### 🔧 주요 기능 설명
- 랜덤 숫자 생성
  ```
  Math.floor(Math.random() * 100) + 1
  ```
- 중복 입력 방지 : history 배열에 저장하여 중복 차단
```
if(history.includes(userInput.value)){ alert("이미 입력된 숫자입니다!") return }

.
.
.

history.push(userInput.value)
```
- 진행률 바 : 기화에 따라 진행률을 표시(bar의 위치가 변경)
- 📱 반응형 지원 
  1. 모바일 화면에서 버튼 세로 정렬 (display:flex 사용)
  2. 입력창 및 progress bar 너비 자동 조정 (width:90% 등 사용)
  3. 폰트 크기 축소

- 🎨 폰트 사용 : PyeongChangPeace-Bold.otf (로컬 폰트 사용)

- 🚀 배포 링크 :






본 프로젝트는 교육 목적의 과제용 프로젝트입니다.
상업적 용도로 사용되지 않았습니다.
