// 當畫面元素（靜態元素）載入完成後才執行程式
//function(){ 要執行的動作 } => 函式
//畫面元素載入完成後要執行的程式
$(document).ready(function () {

    //啓用WOW.js
    new WOW().init();
    // 1.設定.nav-link的點擊事件
    $('.navbar .nav-link, #goBackBtn').click(function() {
            // 2.取得移動目標
            const target=$(this).attr('href');
            console.log(target);
            // 3.取得移動目標的坐標
            const position=$(target).offset().top;
            console.log(posittion);
            // 4.使用動畫移動到目標的坐標
            // .animate({},動畫的秒數)千分之一秒 1500=1.5s
            const navbarHeight=56;
            $('html,body').stop().animate({
                scrollTop:posittion - navbarHeight
            },500)
    })
});