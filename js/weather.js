
const today = new Date(),
    to = new Date(today);


const year = to.getFullYear();
    month = to.getMonth()+1,
    date = to.getDate(),
    week = ['일', '월', '화', '수', '목', '금', '토'][today.getDay()];


let weekInfo = `${month}월 ${date}일 (${week})`;


let day = `${year}${month.toString().padStart(2,"0")}${date.toString().padStart(2,"0")}`;


let hours = today.getHours();
let hoursM = today.getHours()-1;
let min = today.getMinutes().toString().padStart(2,"0");
let sec = today.getSeconds();


let ho = `${hoursM.toString().padStart(2,"0")}40`;
let ho2 = `${hours.toString().padStart(2,"0")}00`;



// 00시됐을때 오류발생함.
fetch(`https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=bXYJiC%2FIZu%2BuPKkZG0zN%2FDMCBKHjQb3VkKu%2FSWry5Cognwipp%2F33A80vX072IU9e1R%2FWFmWIO8B5Z1gFyyjUOw%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${day}&base_time=${ho}&nx=57&ny=127`)
.then(res => { return res.json()})
.then(data => {
    //초단기실황
    const tmp = document.querySelector('.tmp');    

    // console.log(data);

    let tmpInfo = data.response.body.items.item[3]; 
    tmp.innerText = `${tmpInfo.obsrValue}℃`;
})




let url = [
    `https://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo?serviceKey=bXYJiC%2FIZu%2BuPKkZG0zN%2FDMCBKHjQb3VkKu%2FSWry5Cognwipp%2F33A80vX072IU9e1R%2FWFmWIO8B5Z1gFyyjUOw%3D%3D&locdate=${day}&location=%EC%84%9C%EC%9A%B8`,
    `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=bXYJiC%2FIZu%2BuPKkZG0zN%2FDMCBKHjQb3VkKu%2FSWry5Cognwipp%2F33A80vX072IU9e1R%2FWFmWIO8B5Z1gFyyjUOw%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${day}&base_time=${ho}&nx=57&ny=127`,
]

let data = [],parse;
//데이터 호출
async function exec(){
    for(let i=0;i<url.length;i++){
        let str = await fetch(url[i]);
        data.push(await dataParse(str));
    }
    출력함수();
}
exec();

//데이터 파싱
async function dataParse(str){    
    let dataString = await str.text();
    if(dataString.match('xml')){
        parse =  new DOMParser().parseFromString(dataString, 'application/xml');
    }else{
        parse =  JSON.parse(dataString)
    }    
    return parse;
    
}

//돔제어
function 출력함수(){
    const sky = document.querySelector('.sky'),
    whetherImg = document.querySelector('.left > img');
    
    let sunRise = parseInt(data[0].querySelector('sunrise').innerHTML);
    let sunSet = parseInt(data[0].querySelector('sunset').innerHTML);

    let nowTime = parseInt(`${hours}${min}`);

    

    if(nowTime >= sunRise && nowTime <= sunSet){
        //해
        data[1].response.body.items.item.forEach(function(v,k){
            if(v.fcstTime == ho2 && v.category == "SKY"){
                if(v.fcstValue == 4){
                    whetherImg.src = "./img/cloud.png";
                    sky.innerText = "흐림";
                } else if(v.fcstValue == 3){
                    whetherImg.src = "./img/suncloud.png";
                    sky.innerText = "구름많음";
                } else{
                    whetherImg.src = "./img/sun.png";
                    sky.innerText = "맑음";
                }
            }
        })
    
        data[1].response.body.items.item.forEach(function(v,k){
            if(v.fcstTime == ho2 && v.category == "PTY"){

                if(v.fcstValue == 1 || v.fcstValue == 2 || v.fcstValue == 5 || v.fcstValue == 6){
                    whetherImg.src = "./img/raincloud.png";
                    sky.innerText = "비";
                } else if(v.fcstValue == 3 || v.fcstValue == 7){
                    whetherImg.src = "./img/snow.png";
                    sky.innerText = "눈";
                }
    
            }
        })
    } else{
        //달
        data[1].response.body.items.item.forEach(function(v,k){
            if(v.fcstTime == ho2 && v.category == "SKY"){
                if(v.fcstValue == 4){
                    whetherImg.src = "./img/cloud.png";
                    sky.innerText = "흐림";
                } else if(v.fcstValue == 3){
                    whetherImg.src = "./img/moncloud.png";
                    sky.innerText = "구름많음";
                } else{
                    whetherImg.src = "./img/moon.png";
                    sky.innerText = "맑음";
                }
            }
        })
    
        data[1].response.body.items.item.forEach(function(v,k){
            if(v.fcstTime == ho2 && v.category == "PTY"){
    
                if(v.fcstValue == 1 || v.fcstValue == 2 || v.fcstValue == 5 || v.fcstValue == 6){
                    whetherImg.src = "./img/raincloud.png";
                    sky.innerText = "비";
                } else if(v.fcstValue == 3 || v.fcstValue == 7){
                    whetherImg.src = "./img/snow.png";
                    sky.innerText = "눈";
                }
    
            }
        })
    }



}
