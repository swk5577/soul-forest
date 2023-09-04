$(function(){
  
$('area').on("click", function (e) {
  e.preventDefault();
})


$('area').on("click", function (event) {

  $('.mySwiper').addClass('mapclick')


  fetch('./js/map.json') //.json이 객체로 만들어줌
    .then(map_res => map_res.json())
    .then(map => {//실데이터 (객채)
      let map_img = ""
      let map_name = ""


      //타이틀뽑아내기
      const inpu = new Set([]);
      map[event.target.alt].forEach((v, k) => {
        inpu.add(v.name);
      })
      let inpuArr = [...inpu]; //배열로 변환


      //이미지 뿌리는애      
      map[event.target.alt].forEach((v, k) => {
        map_img +=
          `<div class="swiper-slide"><img src="${v.img}" name="${v.name}"></div>`
      }); // 문자입력 > 배열형태


      //버튼생성
      inpuArr.forEach((v, k) => {
        map_name += `<span>${inpuArr[k]}</span>`
      })
      
      $('.swiper-wrapper').html(map_img);
      $('.name').html(map_name)
      $('.name > span').eq(0).addClass('active');


      //슬라이드
        var swiper = new Swiper(".mySwiper", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on:{
          init:function(){
            $('.swiper-wrapper').css({
              transform: 'translate3d(0px, 0px, 0px)'
            })
           this.slideTo(0);
          },
          slideChange:function(e){
              let slideName = $('.swiper-slide').eq(e.activeIndex).find('img').attr('name');
              $('.name > span').addClass('active');
              $('.name > span').removeClass('active');

              $('.name > span').each((k, v) => {                
                if ($(v).text() == slideName){
                  $(v).addClass('active');
                }
              })

            
            
          } 
        }
        });
     
      

      /*       console.log($('.name > span').eq(0).text()); */

      

    })



})

$('.closs').on("click", function () {
  $('.mySwiper').removeClass('mapclick')
})


$('img[usemap]').rwdImageMaps();

$('map area').on({
  mouseenter: function (e) {
    e.preventDefault();
    let num = $(this).attr('alt');

    $(`.map_hover`).hide()
    $(`.map_hover[name=${num}]`).show();
  }
});

})



