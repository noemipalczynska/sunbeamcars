//accordeon

var acc = document.getElementsByClassName("accordion-animated");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// Fade in text

var fadeElements = document.getElementsByClassName('scrollFade');

function scrollFade() {
    var viewportBottom = window.scrollY + window.innerHeight;

    for (var index = 0; index < fadeElements.length; index++) {
        var element = fadeElements[index];
        var rect = element.getBoundingClientRect();

        var elementFourth = rect.height / 2; //where the user will be on the screen itself
        var fadeInPoint = window.innerHeight - elementFourth;
        var fadeOutPoint = -(rect.height / 2);

        if (rect.top <= fadeInPoint) {
            element.classList.add('scrollFade--visible');
            element.classList.add('scrollFade--animate');
            element.classList.remove('scrollFade--hidden');
        } else {
            element.classList.remove('scrollFade--visible');
            element.classList.add('scrollFade--hidden');
        }

        if (rect.top <= fadeOutPoint) {
            element.classList.remove('scrollFade--visible');
            element.classList.add('scrollFade--hidden');
        }
    }
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function () {
    scrollFade();
});

//code from: https://github.com/meddlenz/ScrollFade


// svg 
//source from: 

//access to path an Length as well 
let path = document.querySelector('path')
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashoffset = pathLength;

//scroll down function

window.addEventListener('scroll', () => {

    //What % down is it? 
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    //Length to offset the dashes
    var drawLength = pathLength * scrollPercentage;


    //Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;

})




