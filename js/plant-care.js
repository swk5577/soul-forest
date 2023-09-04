const elS2Content = document.querySelector('.qna_list ul');
const elallbutn = document.querySelector('.number');

let imgle = 5;
let list = [];
let now = 1;
let num = 0;
let fullpg = 0;

fetch('./json/plant-care.json')
    .then(res => { return res.json() })
    .then(data => {

        let max_full = data.items.length;
        let max = Math.ceil(max_full / imgle)

        // 뿌리기
        const imgFn = function (list, now) {
            elS2Content.innerHTML = '';


            list.forEach((v, k) => {

                if ((now - 1) * imgle <= k && now * imgle > k) {

                    elS2Content.innerHTML += `
                    <li>
                        <button>
                            <span>Q</span> 
                            <h2>${v.text}</h2>
                            <div><img src="./img/icon_accordion_open.svg"></div>
                        </button>
                        <div class="dada2n">
                            <button>
                                <span>A</span> 
                                <h2 class='uu'>${v.detail}</h2>
                            </button>
                        </div>
                    </li>
                    `
                }

            });

            $('.qna_list li').on('click', function () {
                if (!$(this).hasClass('active')) {
                    $('.qna_list li')
                        .removeClass('active')
                        .find('.dada2n').stop().slideUp();
                }

                $(this)
                    .toggleClass('active')
                    .find('.dada2n').stop().slideToggle();
            })
        }
        // 페이지네이션
        const pgen = function (max_full, list) {

            max = Math.ceil(max_full / imgle)
            elallbutn.innerHTML = "";
            for (let i = 1; i <= max; i++) {
                elallbutn.innerHTML += `<span>${i}</span>`
            }

            const elbutn = document.querySelectorAll('.number >span')
            now = 1
            elbutn[now - 1].classList.add("on")

            elbutn.forEach((v2, k2) => {
                v2.onclick = function () {
                    elbutn[now - 1].classList.remove("on")
                    v2.classList.add("on")
                    now = v2.innerText


                    imgFn(list, now)
                    sspace()
                }
            })

            fullpg = Math.ceil(elbutn.length / 5 - 1);

        }

        // 다음버튼
        const elnext = document.querySelectorAll('.next > button')

        let nextnum = 0;
        elnext.forEach((v3, k3) => {

            v3.onclick = function () {

                if (v3.dataset.name == "next") {
                    if (nextnum < fullpg) {
                        nextnum++;
                    } else {
                    }
                } else {
                    if (nextnum == 0) {

                    } else {
                        nextnum--;
                    }
                }

                elallbutn.style.transform = `translateX(${nextnum * -150}px)`;

            }
        })

        //검색
        const elsearchbt = document.querySelector('.inout > #search_but')
        const elsearch = document.querySelector('.inout > #search')

        const searchevent = () => {

            elS2Content.innerHTML = ""
            list = [];

            data.items.forEach((v7, k7) => {

                if (data.items[k7].text.includes(elsearch.value)) {

                    list.push(v7)
                } else { }

            })
            imgFn(list, 1)


            elsearch.value = ""
            const elsspace = elS2Content.querySelectorAll('li');
            elsspace.length == 0 ? elS2Content.innerHTML += `<li>검색 결과가 없습니다.</li>` : ""

            max_full = list.length;
            pgen(max_full)
        }

        elsearch.addEventListener("keydown", (event) => {
            if (event.keyCode === 13) {
                searchevent();

            }
        })

        elsearchbt.addEventListener("click", () => {

            searchevent();

        })


        list = data.items;
        pgen(max_full, list);
        imgFn(list, 1);



    })