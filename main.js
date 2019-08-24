// $(document).ready(function() {
//   $(this).scrollTop(0);
// })
$(document).ready(function(){
  
})
function scrollDown(element,num){
  $('html,body').animate({
    scrollTop: $('#' + element).offset().top - num
  },'slow');
}

sIndex = 0;

$('#next-checkpoint').on("click",function scrollNext(){
  var el = $('.scroll-cont:eq('+sIndex+')')
  $('html,body').animate({
    scrollTop: el.offset().top
  },'slow')
  sIndex++;
  if(sIndex>4){
    sIndex = 0;
  }
  // console.log(sIndex,el.html());
  $(this).html('<span>'+el.html()+'</span>')
})
