let seedStoageNum = sessionStorage.getItem("click");

fetch('./json/seed-data.json')
.then(res => { return res.json() })
.then(data => {
  let item = data.items.filter(obj => obj.id == seedStoageNum)[0];
    const seedDetailCon = document.querySelector('.content');
    
    seedDetailCon.innerHTML = `
    <h4>씨앗 정보</h4>
    <div class="seedname">${item.name}</div>
    <hr />
    <figure>
      <img id=seed src="${item.mainImg}" />
    </figure>
    <div class="content_box">
      <ul class="top_detail">
        <li class="conbox">
          <div class="name">
            <p>이름</p>
          </div>
          <div class="text_content">
            <ul class="txt">
              <li><span>과명</span>${item.familyName}</li>
              <li><span>학명</span>${item.sciName}</li>
            </ul>
          </div>
        </li>
        <li class="conbox2">
          <div class="name">
            <p>재배</p>
          </div>
          <div class="text_content2">
            <ul class="txt2">
            <li><span>파종기</span>${item.sowingSeason}</li>
              <li><span>개화기</span>${item.bloomingSeason}</li>
              <li><span>결실기</span>${item.bearingSeason}</li>
            </ul>
          </div>
        </li>
      </ul>

      <div class="bottom_detail">
        <div class="conbox3">
          <div class="name">
            <p>키우는 법</p>
          </div>
          <div class="text_content3">
            <ul class="txt3">
              <li>
                <figure><img src="${item.ground[0]}">
                  <figcaption>${item.ground[1]}</figcaption>
                </figure>
              </li>
              <li>
                <figure><img src="${item.tmp[0]}">
                  <figcaption>${item.tmp[1]}</figcaption>
                </figure>
              </li>
              <li>
                <figure><img src="${item.deep[0]}">
                  <figcaption>${item.deep[1]}</figcaption>
                </figure>
              </li>
              <li>
                <figure><img src="${item.topsoil[0]}">
                  <figcaption>${item.topsoil[1]}</figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="btn_list">
      <a href="./seed-info.html">목록</a>
    </div>
    </div>

    `


    

})