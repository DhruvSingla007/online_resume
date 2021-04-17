
//code for smooth scroll
var navTags = document.querySelectorAll('.horizontal-list li a');

for(var i=0;i<navTags.length;++i)
{
    navTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetId= this.textContent.trim().toLowerCase();
        var targetSection= document.getElementById(targetId);
        if(targetSection!=null)
        {
            var interval = setInterval(function(){
                var coordinates=targetSection.getBoundingClientRect();
                if(coordinates.top <= 0)
                {
                    clearInterval(interval);
                    return;
                }
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-100)
                {
                    clearInterval(interval);
                    return;
                }
                window.scrollBy(0,5);
            }, 2);
        }
    });
}


//code for skill bars filling
var bars = document.querySelectorAll('.skill div');
var skillSection = document.getElementById('skill-container');
window.addEventListener('scroll', checkScroll);
var check=false;

function initialFill(){
    for(let bar of bars)
    {
        bar.style.width=0+'%';
    }
}

initialFill();

function fillBars(){
    for(let bar of bars)
    {
        let target= bar.getAttribute('bar-width');
        let currWidth=0;
        let interval=setInterval(function(){
            if(currWidth>=target)
            {
                clearInterval(interval);
                return;
            }
            ++currWidth;
            bar.style.width=currWidth+'%';
        }, 25);
    }
}

function checkScroll(){
    if(skillSection.getBoundingClientRect().top < window.innerHeight && !check)
    {
        fillBars();
        check=true;
    }
    if(skillSection.getBoundingClientRect().top > window.innerHeight)
    {
        check=false;
    }
}