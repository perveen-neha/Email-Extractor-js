
const extractBtn = document.querySelector(".extract__btn");
const textarea = document.querySelector('.input__text');
const output = document.querySelector(".output__email");
const copy = document.querySelector(".copy__btn");
const clear = document.querySelector(".clear__btn");


extractBtn.addEventListener('click', Extract);
copy.addEventListener('click',copyFunc);
clear.addEventListener('click', clearFunc);


function Extract() {
    const text = textarea.value;
    let exp = /([A-Za-z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    const emails = text.match(exp)
    console.log(emails);
    const uniqueEmails = Array.from( new Set(emails));
    console.log(uniqueEmails.join('\n'));
    output.innerHTML = uniqueEmails.join('\n')
    output.removeAttribute('disabled')
}

function copyFunc() {
    output.select();
    navigator.clipboard.writeText(output.value)
    .then(() => {
      console.log('Text copied to clipboard');
    })
    .catch((err) => {
      console.error('Could not copy text: ', err);
    });

    setTimeout(() => {
        output.blur()
    }, 500);
}

function clearFunc() {
    output.value=""
    textarea.value=""
    textarea.focus();
}