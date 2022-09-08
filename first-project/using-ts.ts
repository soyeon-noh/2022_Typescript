// ! null이 아님을 확인했다
// as 어떤 유형의 요소인지 알려준다
const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

// 타입설정 :number 이것이 숫자타입이라고 선언
function add(num1: number, num2: number) {
  return num1 + num2;
}

// input1 이 존재한다고 !로 알려줌
// input요소이며 value 속성이 실제로 존재한다고 as HTMLInputElement 로 알려줌
button.addEventListener("click", function () {
  // number로 타입설정을 하자 input1.value에 오류
  // input의 value는 sprint이므로 +를 붙여 숫자 타입으로 바꿔줘야함
  console.log(add(+input1.value, +input2.value));
});
