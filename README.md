
## 🔌 아두이노 회로 꾸미기는 아래처럼 간단하게 구성할 수 있어요
아래 이미지를 참고하여 회로를 구성하세요.

![Circuit Diagram](circuit.png)


## ⚙️ Arduino 코드는 serial 9600baud로 데이터를 내보내는 게 다 입니다.

Arduino 관련 코드는 `arduino_p5_serial` 폴더에 있습니다.


## 🎨 p5.js 코드는 html과 js, css가 나뉘어 모여있으니 아래 폴더를 참고하세요.

p5.js 관련 코드는 `p5serial` 폴더에 있습니다.


## 🚀 Getting Started 실행방법

1. `circuit.png`를 참고하여 회로를 구성합니다. 회로에 맞게 가변저항 (potentiometer) 4개를 arduino에 연결합니다.
2. Arduino 코드를 arudni uno에 업로드합니다. 업로드가 다 되었다면 이제 p5 차례.
3. visual studio code에서 open folder를 하고 p5serial폴더를 열어줍니다.
4. live server가 안깔려있다면 깔아주시고, vs code하단의 go live 버튼을 눌러 p5.js 코드를 실행합니다.
5. connect 버튼을 누르면 serial 연결 다이알로그 화면이 뜰거에요. 연결해주면 끝!
