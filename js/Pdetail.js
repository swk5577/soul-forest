let plantStoageNum = sessionStorage.getItem("click");

fetch('./json/flower.json')
.then(res => { return res.json() })
.then(data => {
    let item = data.items.filter(obj => obj.id == plantStoageNum)[0];
    const plantDetailCon = document.querySelector('.content');
    plantDetailCon.innerHTML = `
    <h2>${item.name}</h2>
    <figure>
      <p><img src="${item.img}" /></p>
      <figcaption>
        <ul>
          <li><span>이름:</span>${item.name}</li>
          <li><span>학명:</span>${item.sciName}</li>
        </ul>
        <ul>
          <li><span>구분:</span>${item.familyName}</li>
          <li><span>개화기:</span>${item.bloomingSeason}</li>
        </ul>
      </figcaption>
    </figure>
    <hr />
    <ul class="txt">
      <li>
        <p>
          자생지역 : <span>${item.nativeArea}</span>
        </p>
      </li>
      <li>
        <p>
        생육환경 : <span>${item.growthEnvironment}</span>
        </p>
      </li>
      <li>
        <p>
        번식방법 : <span>${item.breeding}</span>
        </p>
      </li>
      <li>
        <p>
        재배특성 : <span>${item.CultivationCharacteristics}</span>
        </p>
      </li>
      <li>
        <p>
        유 사 종 : <span>${item.Similarity}</span>
        </p>
      </li>
      <li>
        <p>
        기 타 : <span>${item.etc}</span>
        </p>
      </li>
    </ul>
    <div class="btn_list">
      <a href="./plant-info.html">목록</a>
    </div>
    `

    const plantSapn = document.querySelectorAll('.txt > li > p > span'),
            plantLi = document.querySelectorAll('.txt > li');

            plantSapn.forEach(function(v,k){
                if(plantSapn[k].childNodes.length == 0){
                    plantLi[k].style = 'display : none;'
                }
            })

})