
        const reserveGetItem = JSON.parse(localStorage.getItem("result"));
        const tableBox = document.querySelector('.table-box');

        
        const reserveInfoValue = reserveGetItem[reserveGetItem.length -1]


        tableBox.innerHTML = `
        <table>
            <tbody>
                <tr>
                    <th class="th-top">체험명</th>
                    <td class="td-top" colspan="3">${reserveInfoValue.pgName}</td>
                </tr>
                <tr>
                    <th>예약일</th>
                    <td>${reserveInfoValue.selDate}</td>
                    <td colspan="2">${reserveInfoValue.turnValue}</td>
                </tr>
                <tr>
                    <th>예약자 및 대표자 정보</th>
                    <td>${reserveInfoValue.repName}</td>
                    <td>${reserveInfoValue.repBirth}</td>
                    <td>${reserveInfoValue.repTel}</td>
                </tr>
                <tr>
                    <th class="th-bottom">총 인원</th>
                    <td>성인 ${reserveInfoValue.adultValue}명</td>
                    <td>청소년 ${reserveInfoValue.teenValue}명</td>
                    <td>유아 ${reserveInfoValue.childValue}명</td>
                </tr>
            </tbody>
        </table>
`

