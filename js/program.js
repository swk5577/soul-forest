const elS1 = document.querySelectorAll('.text p');
const elS1Content = document.querySelectorAll('.michin');

let nnum = 0;
elS1[nnum].classList.add('on');
elS1Content[nnum].classList.add('on');

elS1.forEach(function (ele, key) {
    ele.onclick = function () {
        elS1[nnum].classList.remove('on');
        this.classList.add('on');

        elS1Content[nnum].classList.remove('on');
        elS1Content[key].classList.add('on');

        nnum = key;
    }
});

const elS2 = document.querySelectorAll('.line div');
const elS2Content = document.querySelector('.nnn');

let imgle = 8;
let list = [];
let now = 1;
let num = 0;
let fullpg = 0;

elS2[num].classList.add('on');
elS2Content.classList.add('on');


const elallbutn = document.querySelector('.number');

fetch('./json/program.json')
    .then(res => { return res.json() }) // 한줄일땐 (),{]생략가능 근데 {}쓸땐 return시켜줘야함 안쓰면 필없
    .then(data => {

        data.items.sort((a, b) => {
            if (a.end > b.end) return -1;
            if (a.end < b.end) return 1;
            return 0;
        });

        let max_full = data.items.length;
        let max = Math.ceil(max_full / imgle)

        // 뿌리기
        const imgFn = function (list, now) {
            elS2Content.innerHTML = '';

            list.forEach((v, k) => {
                if ((now - 1) * imgle <= k && now * imgle > k) {

                    let date_arr = list[k].period.split('~');
                    let start = new Date(date_arr[0]);
                    let end = new Date(date_arr[1]);

                    elS2Content.innerHTML += `
                            <li class = "navy" data-id="${v.id}">
                            <a href="./experience.html">
                                <div class="sspace ${(start < new Date() && end > new Date()) ? "" : "on"}">    
                                    <img src="${v.img}">
                                    <div class="ab">
                                        <p>예 약 마 감</p>
                                    </div>
                                </div>
                                <div class="ssspace">
                                    <div class="huhu">
                                        <span>${(start < new Date() && end > new Date()) ? "접수중" : "예약마감"}</span>
                                        <span>${v.price.length > 3 ? "유료" : "무료"}</span>
                                    </div>
                                    <div>
                                        <p class = "ab">
                                            ${v.name}
                                        </p>
                                        <p>
                                            대상 : ${v.target}
                                        </p>
                                        <p>
                                            ${v.period}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                            `
                }

            });
        }

        //클릭시 유도
        const sspace = function () {

            const elsspace = document.querySelectorAll('.navy');


            elsspace.forEach((v4, k4) => {

                v4.onclick = function (e) {
                    e.preventDefault();


                    sessionStorage.setItem("click", v4.dataset.id);
                    location.href = 'experience.html';


                }
            })
        }

        // 페이지네이션
        const pgen = function (max_full,list) {

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
            elS2[num].classList.remove('on');
            num = 0;
            elS2[num].classList.add('on');

            elS2Content.innerHTML = ""
            list = [];

            data.items.forEach((v7, k7) => {

                if (data.items[k7].name.includes(elsearch.value)) {

                    list.push(v7)
                } else { }

            })
            imgFn(list, 1)


            elsearch.value = ""
            const elsspace = elS2Content.querySelectorAll('li');
            elsspace.length == 0 ? elS2Content.innerHTML += `<li>검색 결과가 없습니다.</li>` : ""

            max_full = list.length;
            pgen(max_full)
            sspace();
        }

        elsearch.addEventListener("keydown", (event) => {
            if (event.keyCode === 13) {
                searchevent();

            }
        })

        elsearchbt.addEventListener("click", () => {

            searchevent();

        })

        //탭반응하기
        elS2.forEach(function (ele, key) {
            ele.onclick = function () {
                elS2[num].classList.remove('on');
                this.classList.add('on');
                list = [];

                switch (key) {
                    case 0:
                        list = data.items
                        break;
                    case 1:
                        data.items.forEach((v2, k2) => {
                            if (v2.target.includes("청소년")) {
                                list.push(v2)
                            }
                        })
                        break;
                    case 2:
                        data.items.forEach((v2, k2) => {
                            if (v2.target.includes("유아")) {
                                list.push(v2)
                            }
                        })
                        break;
                    case 3:
                        data.items.forEach((v2, k2) => {
                            if (v2.target.includes("성인")) {
                                list.push(v2)
                            }
                        })
                        break;
                }
                console.log(key);
                console.log(list);
                max_full=list.length
                pgen(max_full,list);
                imgFn(list, 1);
                sspace();

                num = key;
            }
        });

        list = data.items;
        pgen(max_full,list);
        imgFn(list, 1);
        sspace();
    })