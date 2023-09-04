$(".nav >").click(function () {
  $(".nav >").attr("class", "nav_off");
  $(this).attr("class", "nav_on");
});

//  const elmoney =document.querySelector(".money"),
//        elDiscounttarget = document.querySelector(".Discount_target"),
//        elbasic = document.querySelector('.basic'),
//        eldiscount = document.querySelector('.discount'),
//        elbasicnotice = document.querySelector('.basic_notice'),
//        eldiscountnotice = document.querySelector('.discount_notice');

//       elDiscounttarget.onclick = function () {
//         elbasic.classList.add("basic_off");
//         eldiscount.classList.add("discount_on");
//       };

//       elmoney.onclick = function () {
//         eldiscount.classList.remove("Discount_target_on");
//         elbasic.classList.remove("basic_off");
//    };




// 이용요금 클릭 시
$(".money").click(function () {
    $(".Discount_target").removeClass('Discount_target_on');
    $(this).removeClass('money_off');
    $(".basic").show();
    $(".discount").hide();
    $(".basic_notice").show();
    $(".discount_notice").hide();
  });
  
  //디스카운트 클릭 시
   $(".Discount_target").click(function () {
    $(this).addClass('Discount_target_on');
    $(".money").addClass('money_off');
    $(".discount").show();
    $(".basic").hide();
    $(".discount_notice").show();
    $(".basic_notice").hide();

  });

//  대출 클릭 시
$(".loan").click(function () {
    $(".return").removeClass('return_on');
    $(this).removeClass('loan_off');
    $(".notice_loan").show();
    $(".notice_return").hide();
  });
  
  //반납 클릭 시
   $(".return").click(function () {
    $(this).addClass('return_on');
    $(".loan").addClass('loan_off');
    $(".notice_return").show();
    $(".notice_loan").hide();

  });
  
