function mainSlide(){
    const mainImgBox = document.querySelector('.mainSwiper > .swiper-wrapper');

    fetch('./json/flower.json')
    .then(res => { return res.json() }) 
    .then(data => {
        data.items.forEach(function(v,k){
            if(v.plantOfMonth == "Y"){
                mainImgBox.innerHTML += `
                <li class="swiper-slide">
                <a href="./Pdetail.html" data-id ="${v.id}">
                    <img src="${v.img}">
                    <div class="fg">
                    <div class="plant-month">
                    <div class="text-box">
                        <span class="title">
                            이달의 식물
                        </span>
                        <span class="name">
                        ${v.name}
                        </span>
                        <span class="area">
                            주제정원 숲정원, 열린숲에 위치
                        </span>
                    </div>
                </div>
                    </div>
                </a>
            </li>
        `
            }
        })

        const ff = document.querySelectorAll('.mainSwiper > .swiper-wrapper > .swiper-slide > a');
        ff.forEach(function(v2,k2){
            v2.onclick = function(e){
                
                e.preventDefault();
                sessionStorage.setItem("click", v2.dataset.id);
                location.href = './Pdetail.html';
            }
        })

    })
}

mainSlide();


setTimeout(function(){
var swiper = new Swiper(".mainSwiper", {
    slidesPerView: '1',
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

},500)

var swiper2 = new Swiper(".garden-slide", {
    slidesPerView: "2",
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000000,
        disableOnInteraction: false,
    },
    breakpoints: {

        1024: {
            slidesPerView: '1',
            spaceBetween: 50,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        },
    }});

setTimeout(function(){

    var swiper3 = new Swiper(".experSwiper", {
        slidesPerView: '3',
        // centeredSlides: true,
        spaceBetween: 10,

        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            1024: {
                centeredSlides: false,
                slidesPerView: '3',
                spaceBetween: 50,
            },
        }
    });
},500)



function notice() {
    const noticeTab = document.querySelectorAll('.notice-tab > li'),
        noticeConTab = document.querySelectorAll('.notice-con-tab > li');

    let num = 0;

    noticeTab[num].classList.add('on');
    noticeConTab[num].classList.add('on');

    noticeTab.forEach(function (list, k) {
        list.onclick = function () {
            noticeTab[num].classList.remove('on');
            this.classList.add('on');

            noticeConTab[num].classList.remove('on');
            noticeConTab[k].classList.add('on');
            num = k;
        }
    })
}



function course() {
    const couresTab = document.querySelectorAll('.course-nav > ul > li'),
        couresConTab = document.querySelectorAll('.course-list-con'),
        couresLeft = document.querySelectorAll('.course-con > .left'),
        couresSubTab = document.querySelectorAll('.course-list-nav > ul'),
        couresSubConTab = document.querySelectorAll('.course-img-list > ul > li');



        let num = 0;
        let num2 = 0;

        couresLeft[num].classList.add('on')
        couresTab[num].classList.add('on')
        couresConTab[num].classList.add('on')
        // couresSubTab[num].classList.add('on')
        // couresSubConTab[num].classList.add('on')
        



        

    couresTab.forEach(function(v,k){
        v.onclick = function(){


            switch (k) {
                case 0 : v.style.cssText = 'border-bottom: 2px solid #F5B515;'
                break;

                case 1 : v.style.cssText = 'border-bottom: 2px solid #FF74BA;'
                break;

                case 2 : v.style.cssText = 'border-bottom: 2px solid #B374FF;'
                break;

            }



            couresTab[num].style.cssText = ''

            couresTab[num].classList.remove('on');
            this.classList.add('on');


            couresLeft[num].classList.remove('on')
            couresLeft[k].classList.add('on')
            couresConTab[num].classList.remove('on');
            couresConTab[k].classList.add('on');


            num = k;

        }
    })


    const qwe1 = document.querySelectorAll('.course-list-nav > ul > li');
    const qwe11 = document.querySelectorAll('.course-list-nav > ul > li:nth-of-type(1)');
    const qwe2 = document.querySelectorAll('.qwe2 > img');



    // console.log(qwe11.dataset.img);
    qwe1.forEach(function(v,k){
    
        v.addEventListener('mouseenter', () =>{
            let liColor =  v.dataset.color;
            v.classList.add('on')
            qwe2[num].src = v.dataset.img;
            v.style.color = liColor;
        })

        v.addEventListener('mouseleave', () =>{
            v.classList.remove('on')
            qwe2[num].src = qwe11[num].dataset.img; 
            v.style.color = '';
        })

    })



}


function useInfo() {
    const useInfoTab = document.querySelectorAll('.use-info-tab > li'),
        useConTab = document.querySelectorAll('.use-con-tab > li');

    let num = 0;

    const checkbox = document.getElementById('status');
    const statusSwitch = document.querySelector('.status-switch');


    useConTab[0].classList.add('on')
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            useConTab[1].classList.add('on')
            useConTab[0].classList.remove('on');
        } else {
            useConTab[0].classList.add('on');
            useConTab[1].classList.remove('on')
        }
    });

    // useInfoTab[num].classList.add('on');
    // useConTab[num].classList.add('on');

    // useInfoTab.forEach(function (list, k) {
    //     list.onclick = function () {
    //         useInfoTab[num].classList.remove('on');
    //         this.classList.add('on');

    //         useConTab[num].classList.remove('on');
    //         useConTab[k].classList.add('on');
    //         num = k;
    //     }
    // })
}

if (matchMedia("screen and (max-width: 1023px)").matches) {
    useInfo();
}




notice();
course();



fetch('./json/program.json')
    .then(res => { return res.json() })
    .then(data => {


        let num = 0;
        const mainPg = []

        for (num; num < 6; num++) {
            mainPg.push(data.items[num])
        }
        mainPg.forEach(function (obj, k) {
            const mainPgSlide = document.querySelector('.experSwiper > .swiper-wrapper');


            let date = obj.period;
            let start = new Date(date.split('~')[0]);
            let end = new Date(date.split('~')[1]);


            mainPgSlide.innerHTML += `
        <li class="swiper-slide">
        <div class="oo ${(start < new Date() && end > new Date()) ? "" : "on"}">
        <span>${(start < new Date() && end > new Date()) ? "접수중" : "예약마감"}</span>
    </div>
        <a href="./experience.html" data-id="${obj.id}">
            <img src="${obj.img}">
            <div class="experience-info">
                <p class="title">
                    ${obj.name}
                </p>
                <P class="time">
                    <span>${obj.period}</span>
                </P>
                <div class="situation">
                <div class="pp ${(start < new Date() && end > new Date()) ? "" : "on"}">
                <span>${(start < new Date() && end > new Date()) ? "접수중" : "예약마감"}</span>
            </div>
                    <div class="area">
                        <span>${obj.area}</span>
                    </div>
                    <div class="target">
                        <span>${obj.target}</span>
                    </div>

                </div>
            </div>
        </a>
    </li>
        `
        })

        const itemClick = document.querySelectorAll('.experSwiper  li > a');

        itemClick.forEach(function (v3, k3) {

            v3.onclick = function (e) {
                e.preventDefault();


                sessionStorage.setItem("click", v3.dataset.id);
                location.href = 'experience.html';

            }
        })

    })

