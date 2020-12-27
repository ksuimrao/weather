$(function () {
 $(".js_fadein_up_no_scroll").addClass("active"); //topタイトル企業名のフェードイン

 //sp版メニューをクリックしたときに動く関数
 $('.toggle').click(function() {
     $(this).toggleClass('active');
     if ($(this).hasClass('active')) {
         $('.nav_menu').addClass('active');
     } else {
         $('.nav_menu').removeClass('active');
     }
 });

 //スクロールしたときに動く関数
 $(window).on("scroll", function() {

   //背景色を変える
   $(".js_change_background_color").each(function() { //背景色を変えたいクラス名を指定
       var targetObject = $(this);
       scrollEvent(targetObject);
   });

   //フェードインさせる
   $(".js_fadein_up").each(function() { //フェードインさせたいクラス名を指定
       var targetObject = $(this);
       scrollEvent(targetObject);
   });
   $(".js_fadein_left").each(function() {
       var targetObject = $(this);
       scrollEvent(targetObject);
   });
   $(".js_fadein_right").each(function() {
       var targetObject = $(this);
       scrollEvent(targetObject);
   });

   //スクロールイベントを起こす共通関数
   function scrollEvent(targetObject){
       var window_h = $(window).height();
       var scroll_top = $(window).scrollTop();
       var elem_pos = targetObject.offset().top;
       if (scroll_top >= elem_pos - window_h + -200) { //スクロールイベントが始まる位置を指定
         targetObject.addClass("active");
       } else {
         targetObject.removeClass("active");
       }
   }

 });
});
