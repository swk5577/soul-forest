const elS2 = document.querySelectorAll('.text p');
const elS2Content = document.querySelector('.nnn');
const elallbutn = document.querySelector('.number');


let imgle = 8;
let list = [];
let now = 1;
let num = 0;
let fullpg = 0;


elS2[num].classList.add('on');
elS2Content.classList.add('on');





fetch('./json/flower.json')
    .then(res => { return res.json() })
    .then(data => {

        //탭조건맞춰 뿌리기
        elS2.forEach(function (ele, key) {
            ele.onclick = function () {
                elS2Content.innerHTML = ""
                let list = [];
                elS2[num].classList.remove('on');
                this.classList.add('on');


                if (key == 1) {

                    data.items.forEach((v7, k7) => {
                        let month = new Date().getMonth() + 1;

                        if (month >= (data.items[k7].bloomingSeason.substr(0, 1)) &&
                            month <= (data.items[k7].bloomingSeason.substr((data.items[k7].bloomingSeason.indexOf("월") - 1), 1))) {

                            list.push(v7)
                        }


                    });
                }else{
                    list = data.items
                }
                console.log(list);
                max_full = list.length;
                imgFn(list, 1)
                pgen(max_full,list)
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
                <li class="sspace" data-id="${v.id}">
                <a href="./Pdetail.html">
                    <img src="${v.img}">
                    <div class="ab">
                        <p>${v.name}</p>
                        <p>${v.engName}</p>
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
                    location.href = 'Pdetail.html';


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
            elbutn[now-1].classList.add("on")

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
        pgen(max_full,list);
        imgFn(list, 1);
        sspace();

    })






