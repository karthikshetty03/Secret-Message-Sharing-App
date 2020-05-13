const { hash } = window.location;
const message = atob(hash.replace('#', ''));

if(message) {
    document.querySelector('#one').classList.add('hide');
    document.querySelector("#three").classList.remove("hide");
    document.querySelector('h1').innerText = message;
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    //console.log(event);
    const one = document.querySelector('#one');
    const two = document.querySelector("#two");
    one.classList.add('hide');
    two.classList.remove('hide');
    const input = document.querySelector("#message-input");
    const encrypted = btoa(input.value);

    const inp = document.querySelector('#link-input');
    inp.value = `${window.location}#${encrypted}`;
    inp.select();
});


