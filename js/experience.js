$('.caution-box li').on('click',function(){
    if(!$(this).hasClass('on')){
        $('.caution-box li')
        .removeClass('on')
        .find('.content').stop().slideUp();
    }

    $(this)
    .toggleClass('on')
    .find('.content').stop().slideToggle();
})

var map ;
function experience(){
    const experienceTab = document.querySelectorAll('.experience-tab > li'),
    experienceConTab = document.querySelectorAll('.experience-con-tab > li');
    const trafficTab = document.querySelectorAll('.traffic-nav > li'),
    trafficConTab = document.querySelectorAll('.traffic-con-tab > li');


    let num = 0;
    let num2 = 0;

    experienceTab[num].classList.add('on');
    experienceConTab[num].classList.add('on');
    
    experienceTab.forEach(function(list,k){
        list.onclick = function(){
          
            experienceTab[num].classList.remove('on');
            this.classList.add('on');

            experienceConTab[num].classList.remove('on');
            experienceConTab[k].classList.add('on');
            num = k;

            trafficTab[num2].classList.remove('on');
            trafficTab[0].classList.add('on');
            trafficConTab[0].classList.add('on');
            num2 = 0;

            trafficTab.forEach(function(v,k){
                v.onclick = function(){
                    trafficTab[num2].classList.remove('on');
                    this.classList.add('on');

                    trafficConTab[num2].classList.remove('on');
                    trafficConTab[k].classList.add('on');
                    num2 = k;
                }
            })
            kakaoMap();
        //    setTimeout(()=>{
        //     map.relayout()
        //     map.setCenter()
        // },500);

        }
    })

   
}

experience();

function kakaoMap(){
    
    var container = document.getElementById('map');

    var options = {
        center: new kakao.maps.LatLng(37.5695, 126.8351),
        level: 2
    };

    map = new kakao.maps.Map(container, options);

    function setZoomable(zoomable) {
        map.setZoomable(false);
    }
        setZoomable();


    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    var mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 마커가 표시될 위치입니다 
    var markerPosition = new kakao.maps.LatLng(37.5695, 126.8351);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
    var iwContent = '<div style="padding:5px;">서울식물원</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content: iwContent
    });

    // 마커에 마우스오버 이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'mouseover', function () {
        // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
        infowindow.open(map, marker);
    });

    // 마커에 마우스아웃 이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'mouseout', function () {
        // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
        infowindow.close();
    });


  
}
kakaoMap()



