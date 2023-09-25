const number = parseInt(prompt(`몇명인가요?`));
const $input = document.querySelector("#subform input");
const $button = document.querySelector("button");
const $form = document.querySelector("#subform");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");

let word;//입력값
let newWord // 새로 받은 값

function onInput(event){
    newWord = event.target.value;
}

function onClickButton(){
    if(!word||word[word.length-1] === newWord[0]){
        word = newWord;
        $word.textContent = word;
        const n = Number($order.textContent);
        
        if(n + 1<=number){
            //n = n + 1; n이 상수로 선언돼서 재선언이 안됨.
            $order.textContent = n +1;
        }
        else {
            $order.textContent = 1;
        }
    }
    else {
        alert("조건에 맞지 않습니다.");
    }
    $input.value = "";
    $input.focus();

}
function onSubmit(event){
    event.preventDefault();
}


$input.addEventListener("input", onInput);
$button.addEventListener("click", onClickButton);
$form.addEventListener("submit", onSubmit);