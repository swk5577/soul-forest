function experience() {
	let programStoageNum = sessionStorage.getItem("click");
	const info = JSON.parse(localStorage.getItem("result"));


	fetch('./json/program.json')
		.then(res => { return res.json() })
		.then(data => {

			let item = data.items.filter(obj => obj.id == programStoageNum)[0];

			const reserveCon01 = document.querySelector('.reserve-con01 > .left');
			const reserveCon02 = document.querySelector('.reserve-con02 > .time-box');

			reserveCon01.innerHTML = `
			<p>체험프로그램</p>
			<figure>
				<img src="${item.img}">
				<figcaption>
					${item.name}
				</figcaption>
			</figure>
			`


			item.turn.forEach(function (v, k) {
				reserveCon02.innerHTML += `
				<input id="t${k}" type="radio" name="turn" value='${v}'>
				<label for="t${k}"><span>${v}</span></label>
				`
			})


			qwe = document.querySelectorAll('.reserve-person-box .right');
			const max = document.querySelector('.reserve-con04 > .title');
			max.innerText = `
			예약인원 최대(${item.maxPeople}명)
			`
			qwe.forEach(function (v, k) {
				let inputNum = 0;
				const inputId = ["a", "b", "c"]

				for (inputNum = 0; inputNum <= item.maxPeople; inputNum++) {

					v.innerHTML += `
					<input id="${inputId[k]}${inputNum}" type="radio" name="${inputId[k]}" value='${inputNum}'>
					<label for="${inputId[k]}${inputNum}"><span>${inputNum}</span></label>
					`
				}

			})


			const reserveBtn = document.querySelector('.reserve-btn-box > a');

			reserveBtn.onclick = function () {
				const repName = document.getElementById('name').value,
					repBirth = document.getElementById('birthday').value,
					repTel = document.getElementById('tel').value,
					turnValue = document.querySelector('input[name="turn"]:checked'),
					adultValue = document.querySelector('input[name="a"]:checked'),
					teenValue = document.querySelector('input[name="b"]:checked'),
					childValue = document.querySelector('input[name="c"]:checked'),
					selDate = document.getElementById('birth').value;
				const id = item.id,
					pgName = item.name;
				const terms = document.getElementById('terms-check');


				if(info == null){
					if (!selDate) {
						alert("날짜를 선택해주세요")
					} else if (turnValue == null) {
						alert("회차 선택해주세요");
					} else if (!repName) {
						alert("이름을 입력하세요");
					} else if (!repBirth) {
						alert("생년월일을 입력해주세요");
					} else if (!repTel) {
						alert("전화번호를 입력해주세요");
					} else if (adultValue == null) {
						alert("인원을 선택해주세요");
					} else if (teenValue == null) {
						alert("인원을 선택해주세요");
					} else if (childValue == null) {
						alert("인원을 선택해주세요");
					} else if (parseInt(adultValue.value)+parseInt(teenValue.value)+parseInt(childValue.value) > item.maxPeople) {
						alert(`총 인원은 ${item.maxPeople}명을 초과할 수 없습니다`);
					}else {
						const pp = localStorage.result ? JSON.parse(localStorage.result) : [];
					
						pp.push({
							id, 
							pgName, 
							selDate, 
							repName, 
							repBirth, 
							repTel, 
							turnValue:turnValue.value, 
							adultValue:adultValue.value, 
							teenValue:teenValue.value, 
							childValue:childValue.value
						});
	
					
	
						if (terms.checked) {
							localStorage.setItem("result", JSON.stringify(pp))
							window.location.href = './reserve-complete.html';
						} else {
							alert("약관동의를 눌러주세요.")
						}
					}
				}else{
					let a = false;
					info.forEach(function(v,k){
						if(parseInt(programStoageNum) == v.id && repTel == v.repTel){
							alert("이미 존재하는 예약 내역이 있습니다.")
							a = true;
						}
					})
	
					if(a) return;


					if (!selDate) {
						alert("날짜를 선택해주세요")
					} else if (turnValue == null) {
						alert("회차 선택해주세요");
					} else if (!repName) {
						alert("이름을 입력하세요");
					} else if (!repBirth) {
						alert("생년월일을 입력해주세요");
					} else if (!repTel) {
						alert("전화번호를 입력해주세요");
					} else if (adultValue == null) {
						alert("인원을 선택해주세요");
					} else if (teenValue == null) {
						alert("인원을 선택해주세요");
					} else if (childValue == null) {
						alert("인원을 선택해주세요");
					} else if (parseInt(adultValue.value)+parseInt(teenValue.value)+parseInt(childValue.value) > item.maxPeople) {
						alert(`총 인원은 ${item.maxPeople}명을 초과할 수 없습니다`);
					}else {
						const pp = localStorage.result ? JSON.parse(localStorage.result) : [];
					
						pp.push({
							id, 
							pgName, 
							selDate, 
							repName, 
							repBirth, 
							repTel, 
							turnValue:turnValue.value, 
							adultValue:adultValue.value, 
							teenValue:teenValue.value, 
							childValue:childValue.value
						});
	
					
	
						if (terms.checked) {
							localStorage.setItem("result", JSON.stringify(pp))
							window.location.href = './reserve-complete.html';
						} else {
							alert("약관동의 누르세여")
						}
					}

				}


			}


			let date = item.period;
			let start = new Date(date.split('~')[0]);
			let end = new Date(date.split('~')[1]);

			sYear = start.getFullYear();
			sMonth = start.getMonth()+1;
			sDate = start.getDate();
			eYear = end.getFullYear();
			eMonth = end.getMonth()+1;
			eDate = end.getDate();
			var startDate = `${sYear}-${sMonth.toString().padStart(2,"0")}-${sDate.toString().padStart(2,"0")}`
			var endDate = `${eYear}-${eMonth.toString().padStart(2,"0")}-${eDate.toString().padStart(2,"0")}`
			var endDate2 = `${eYear}${eMonth.toString().padStart(2,"0")}${eDate.toString().padStart(2,"0")}`

			let toDay = new Date()
			let toDate =`${toDay.getFullYear()}${(toDay.getMonth()+1).toString().padStart(2,"0")}${(toDay.getDate()).toString().padStart(2,"0")}`
			console.log(parseInt(endDate2));
			console.log(parseInt(toDate));
			if(parseInt(endDate2) > parseInt(toDate)){
				console.log('sadsad');
			}

			



			var fp = flatpickr(document.getElementById("birth"),{
				'monthSelectorType': 'static',
				"locale": "ko",
				"inline": true,
				enable: [
			
					//기간
					{
						from: startDate,	
						to: endDate
					},
				],
				dateFormat: "Y-m-d",
			});
		})

}



experience();







