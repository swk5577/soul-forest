function programClick() {
    let programStoageNum = sessionStorage.getItem("click");

    fetch('./json/program.json')
        .then(res => { return res.json() })
        .then(data => {
            let item = data.items.filter(obj => obj.id == programStoageNum)[0];
            const experDetail = document.querySelector('.experience-box'),
                elprogram = document.querySelector('.experience-con >.ll');

            experDetail.innerHTML = `
        <div class="experience-info-box">
        <div class="left">
            <img src="${item.img}">
        </div>
        <div class="right">
            <p class="title">
                ${item.name}
            </p>
            <ul>
                <li class="a">
                    <dl>
                        <dt>체험기간</dt>
                        <dd>${item.period}</dd>
                    </dl>
                </li>

                <li class="b">
                    <dl>
                        <dt>장소</dt>
                        <dd>${item.area}</dd>
                    </dl>
                </li>

                <li>
                    <dl>
                        <dt>대상</dt>
                        <dd>${item.target}</dd>
                    </dl>
                </li>

                <li>
                    <dl>
                        <dt>모집정원</dt>
                        <dd>${item.recruit}명</dd>
                    </dl>
                </li>

                <li>
                    <dl>
                        <dt>이용시간</dt>
                        <dd>${item.time}</dd>
                    </dl>
                </li>

                <li>
                    <dl>
                        <dt>이용요금</dt>
                        <dd>${item.price}</dd>
                    </dl>
                </li>

                <li>
                    <dl>
                        <dt>신청제한</dt>
                        <dd>1팀 당 최대 ${item.maxPeople}인</dd>
                    </dl>
                </li>

                <li>
                    <dl>
                        <dt>예약방법</dt>
                        <dd>${item.reserveMethod}</dd>
                    </dl>
                </li>

                <li>
                    <dl>
                        <dt>접수기간</dt>
                        <dd>${item.deadline}</dd>
                    </dl>
                </li>

                <li>
                    <dl>
                        <dt>취소기간</dt>
                        <dd>${item.periodCancel}</dd>
                    </dl>
                </li>

                <li class="c">
                    <dl>
                        <dt>단체예약 및 문의전화</dt>
                        <dd>${item.tel}</dd>
                    </dl>
                </li>
            </ul>
            <div class="reservation-btn-box">
                <a href="./reserve.html" class="reserve">
                    <span>예약하기</span>
                </a>
                <a href="./reserve-check.html" class="reserve-check">
                <span>예약확인</span>
                </a>
                <div class='end'>예약마감</div>
            </div>
        </div>
    </div>`

            let end = new Date(item.period.split('~')[1]);
            let toDay = new Date()

            const reserveBtn = document.querySelector('.reserve')
            const reserveCheckBtn = document.querySelector('.reserve-check')
            const endBtn = document.querySelector('.end')


            if(toDay > end){
                reserveBtn.style.cssText = 'display:none';
                reserveCheckBtn.style.cssText = 'display:none';
                endBtn.style.cssText = 'display:block';
            }



            elprogram.innerHTML = `
        <img src="${item.programD}" alt="">`
        })

}

programClick();