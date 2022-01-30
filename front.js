const button        = document.querySelector('button');
const resultSpan    = document.querySelector('#result');
const first         = document.querySelector('#first');
const second        = document.querySelector('#second');
const oper          = document.querySelector('#oper');
const serverURL     = 'http://localhost:3000'
button.addEventListener('use', () => {
    const firstNum = first.value;
    const secondNum = second.value;
    const operVal = oper.value;
    var reqJSON = JSON.stringify({
        'first': firstNum,
        'second': secondNum,
        'oper': operVal
    });
    var req = new XMLHttpRequest();
    req.open('POST', `${serverURL}/calculator`, true);
    req.setRequestHeader('Content-type', 'application/json');
    req.onload = function() {
        const json = JSON.parse(req.responseText);
        const resultNum = json.result;
        resultSpan.innerHTML = resultNum;
    }
    req.send(reqJSON);
})