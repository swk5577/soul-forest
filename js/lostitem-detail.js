let lostStoageNum = sessionStorage.getItem("click");


fetch('./json/lostItem.json')
.then(res => { return res.json() })
.then(data => {
    let item = data.items.filter(obj => obj.id == lostStoageNum)[0];
    const lostCon = document.querySelector('.lost-con');

    lostCon.innerHTML = `
    <div class="haha">
    <div class="state">
            <p>${item.state}</p>
    </div>
    <div class="name">
        <p>${item.name}</p>
    </div>
</div>
<div class="ttt">

    <div class="im">
        <img src = "${item.img}">
    </div>

    <div class="tdt">
        <table>
            <tr>
                <td>습득물명</td>
                <td>${item.name}</td>
            </tr>
            <tr>
                <td>습득장소</td>
                <td>${item.place}</td>
            </tr>
            <tr>
                <td>습득날짜</td>
                <td>${item.acquisitionDate}</td>
            </tr>
            <tr>
                <td>상태</td>
                <td>${item.state}</td>
            </tr>
            <tr>
                <td>보관장소</td>
                <td>
                ${item.storage[0]}<br>
                ${item.storage[1]}
                </td>
            </tr>
        </table>
    </div>
    <div class="statee">
    <a href="./lostitem-info.html"><p>목록</p></a>
    </div>
</div>


    `

})