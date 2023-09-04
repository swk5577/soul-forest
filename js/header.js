const ham = document.querySelector('.hammenu'),
        hamDrop = document.querySelector('.ham-drop-box'),
        mo = document.querySelectorAll('.ham-drop > li > a'),
        mo2 = document.querySelectorAll('.ham-drop > li > ul'),
        fi = document.querySelector('.ham > span:nth-of-type(1)'),
        se = document.querySelector('.ham > span:nth-of-type(2)'),
        th = document.querySelector('.ham > span:nth-of-type(3)');

function on(){
    ham.classList.toggle('on');
    if(ham.className.includes('on')){
        fi.style.cssText = 'top: 50%; transform: rotate(45deg)';
        se.style = 'opacity: 0;';
        th.style.cssText = 'top: 50%; transform: rotate(-45deg)';
        $('.ham-drop-box').slideToggle();
    } else{
        fi.style = 'top: 0%';
        se.style = 'top: 50%';
        th.style = 'top: 100%';
        $('.ham-drop-box').slideToggle();
    }  
}


let num = 0;

    mo.forEach(function(e,k){
        e.onclick = function(){

            if(this.classList.contains('on')){
                mo[num].classList.remove('on');
                $(mo2).stop().slideUp();
            }else{
            mo[num].classList.remove('on');
            this.classList.add('on');
            num = k;
            $(mo2).stop().slideUp().eq(k).slideToggle();
            }

        }
    })

    const header = document.getElementById('header');

    function scroll(){
        let y = pageYOffset; //scrollY
        if(y > 1){
            header.classList.add('off')
        }else{
            header.classList.remove('off')
        }
    }



    $('#header').mouseenter(function(){
        $('.sub-head').stop().slideDown(500);
    })
    $('#header').mouseleave(function(){
        $('.sub-head').stop().slideUp(500);
    })












    const head = document.getElementById('header');

    let pos = {y:0,y2:0,status:true};

    window.addEventListener('scroll',function(){
        pos.y = window.pageYOffset;

        //삼항연산자
        pos.status = (pos.y > pos.y2) ? true : false;

        pos.y2 = pos.y

        if(pos.status){
            head.classList.add('active');
        }else{
            head.classList.remove('active');
        }
    })




window.addEventListener('scroll',scroll);
ham.addEventListener('click',on);