const number = parseInt(prompt(`몇 명이 참가하나요?`), 10);
/*alert(number);
const yesOrNo = confirm(`맞나요?`);*/
const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");
const subForm = document.querySelector("#subform");

let word; // 제시어
let newWord;  // 새로 입력한 단어
/*function inputWord() {
  word = newWord;//입력한 단어가 제시어가 된다.
  $word.textContent = word;
  $input.value = "";
}
*/
function onClickButton() {
  if (!word || word[word.length - 1] === newWord[0]) {//제시어가 비어 있는가?
    //비어있다. 제시어의 마지막 글자와 새로받은 값의 첫글자가 같은가?
    word = newWord;//입력한 단어가 제시어가 된다.
    $word.textContent = word;
    const order = Number($order.textContent);//현재순서
    if (order + 1 > number) {
      $order.textContent = 1;
    }
    else {
      $order.textContent = order + 1;
    }
  }
  else {
    alert("올바르지 않는 단어입니다.");
  }
  $input.value = "";
  $input.focus();
}
function onInput(event) {
  newWord = event.target.value;

}
function  onSubForm(event){
  event.preventDefault();
}

$button.addEventListener(`click`, onClickButton);
$input.addEventListener(`input`, onInput);
subForm.addEventListener(`submit`, onSubForm);