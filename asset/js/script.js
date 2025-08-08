const words = ["Web Developer", "Web Designer", "Programmer", "Software Engineer"];
let wordindex = 0;
let charindex = 0;
let isdeleting = false;
const typelement = document.querySelector(".typing");

function typeeffect() {
    const currentword = words[wordindex];
    if (isdeleting) {
        charindex--;
    }
    else {
        charindex++;
    }

    typelement.textContent = currentword.substring(0, charindex);

    if (!isdeleting && charindex === currentword.length) {
        setTimeout(() => isdeleting = true, 1000);
    }
    else if (isdeleting && charindex === 0) {
        isdeleting = false;
        wordindex = (wordindex + 1) % words.length;
    }
    setTimeout(typeeffect, isdeleting ? 100 : 200);
}

typeeffect();