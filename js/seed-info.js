const elS2 = document.querySelectorAll('.text p');
const elS2Content = document.querySelector('.nnn');

let imgle = 8;
let list = [];
let now = 1;
let num = 0;
let fullpg = 0;
elS2[num].classList.add('on');
elS2Content.classList.add('on');




const elallbutn = document.querySelector('.number');

fetch('./json/seed-data.json')
    .then(res => { return res.json() })
    .then(data => {

        elS2.forEach(function (ele, key) {
            ele.onclick = function () {
                elS2Content.innerHTML = ""
                let list = [];
                elS2[num].classList.remove('on');
                this.classList.add('on');

                if (key == 1) {
                    //봄
                    list = data.items.filter(arry => {
                        return arry.sowingSeason.match(/\d+/g).includes("3") || arry.sowingSeason.match(/\d+/g).includes("4") ||arry.sowingSeason.match(/\d+/g).includes("5") 

                    });

                }  else if (key == 2) {
                    //여름
                    list = data.items.filter(arry => {
                        return arry.sowingSeason.match(/\d+/g).includes("6") || arry.sowingSeason.match(/\d+/g).includes("7") ||arry.sowingSeason.match(/\d+/g).includes("8") 

                    });



                } else if (key == 3) {
                    //가을
                    list = data.items.filter(arry => {
                        return arry.sowingSeason.match(/\d+/g).includes("9") || arry.sowingSeason.match(/\d+/g).includes("10") ||arry.sowingSeason.match(/\d+/g).includes("11") 

                    });

                } else if (key == 4) {
                    //겨울
                    list = data.items.filter(arry => {
                        return arry.sowingSeason.match(/\d+/g).includes("1") || arry.sowingSeason.match(/\d+/g).includes("2") ||arry.sowingSeason.match(/\d+/g).includes("12") 

                    });

                } else {
                    list = data.items
                }

                max_full=list.length
                pgen(max_full, list);
                imgFn(list, 1);
                sspace();
                num = key;
            }
        });

        let max_full = data.items.length;
        let max = Math.ceil(max_full / imgle)

        // 뿌리기
        const imgFn = function (list, now) {
            elS2Content.innerHTML = '';


            list.forEach((v, k) => {

                if ((now - 1) * imgle <= k && now * imgle > k) {

                    elS2Content.innerHTML += `
                    <li class="sspace" data-id ="${v.id}">
                    <div class="haha ${v.rental == "N" ? 'on' : ""}">
                    <p>${v.rental == "N" ? "불가능" : "대출가능"}</p>
                </div>
                        <a href="./Sdetail.html">
                            <img src="${v.mainImg}">
                            <div class="ab">
    
                                <p>${v.name}</p>
                                <div class="center">
                                    <span class = "${v.level == "상" ? "on" : ""}">상</span>
                                    <span class = "${v.level == "중" ? "on" : ""}">중</span>
                                    <span class = "${v.level == "하" ? "on" : ""}">하</span>
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

            const elsspace = document.querySelectorAll('.sspace');


            elsspace.forEach((v4, k4) => {

                v4.onclick = function (e) {
                    e.preventDefault();


                    sessionStorage.setItem("click", v4.dataset.id);
                    location.href = './Sdetail.html';


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


        list = data.items;
        pgen(max_full, list);
        imgFn(list, 1);
        sspace();


    })