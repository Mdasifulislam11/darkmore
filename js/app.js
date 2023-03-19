let button = document.querySelector (`.togglerbtn`);
let body = document.querySelector(`body`);
let sunicon = document.querySelector(`.togglerbtn .sun`);

function darkmodeToggler(){
    body.classList.toggle(`dark`)
    console.log(body.classList.contains(`dark`))

    if(body.classList.contains("dark") == true){
        sunicon.getElementsByClassName.marginTop = `-40`
    }
    else{
        sunicon.style.marginTop = `0px`
    }
}
button.addEventListener('click' , darkmodeToggler)