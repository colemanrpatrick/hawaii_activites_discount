console.log("scroll.js ready")
/*===events===*/
/*============*/
$(document).ready(function() {
  $(this).scrollTop(0);
})
/*============*/
var timer = function Timer(){
  sliderPlus(1);
}
var beginTimer = setInterval(timer,4000);
function endTimer(){
  clearInterval(beginTimer);
}
/*============*/
function scrollDown(element,num){
  $('html,body').animate({
    scrollTop: $('.' + element).offset().top - num
  },'slow');
}
/*============*/
var num = 0;
var parentScroll;
var childElements;
document.getElementsByClassName("article-section")[0].scrollLeft = 0;

function scroll(direction, childCount){
    parentScroll.animate({ scrollLeft:(direction%childCount) * parentScroll.width() })
    console.log("Scroll in val: "+direction);
};

function scrollForward(counterElement){
  // console.log(num);
  var childCount = parentScroll.find(childElements).length;
  if(num == childCount){
    num = 0;
  }
  if (num < 0){
    num = childCount;
  }
  // console.log("scrollForward number " + num);
  scroll(++num, childCount);

  if (num >= childCount) {
    numString = 1;
  } else {
    numString = (num + 1).toString();
  }
  countString = (childCount).toString();
  $(counterElement).html('<span>'+numString+' / '+countString+'</span>');

};

function scrollBack(counterElement){
  var childCount = parentScroll.find(childElements).length;
  if(num < 1){
    num = childCount;
  }
  // console.log("scrollback number " + num);
  scroll(--num, childCount);
  numString = (num + 1).toString();
  countString = (childCount).toString();
  $(counterElement).html('<span>'+numString+' / '+countString+'</span>');
};

$("#next-scroll").on("click",function(){
  parentScroll = $(".article-section");
  childElements = $(".article-bloc");
  counterElement = $(".scroll-span");
  scrollForward(counterElement);
})

$("#prev-scroll").on("click",function(){
  parentScroll = $(".article-section");
  childElements = $(".article-bloc");
  var counterElement = $(".scroll-span");
  scrollBack(counterElement);
    // scrollCount(element,childElements);
})
