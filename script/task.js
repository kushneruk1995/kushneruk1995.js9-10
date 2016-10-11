(function ($) {
  $(function () {
    $('.jcarousel').jcarousel();
    $('.jcarousel').jcarousel({ wrap: 'circular' });
    $('.jcarousel-prev')
    .on('jcarouselcontrol:active', function () {
      $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function () {
      $(this).addClass('inactive');
    })
    .jcarouselControl({
      target: '-=1'
    });

    $('.jcarousel-next')
    .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
    })
    .jcarouselControl({
      target: '+=1'
    });

    $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
    })
    .jcarouselPagination(); 
  });

})(jQuery);


$(document).ready(function(){
  $('.dropdown-menu').hover(
    function(){
      $(this).children('.submenu').slideDown(300);
    },
    function(){
      $(this).children('.submenu').slideUp(300);
  });

  $('select').selectBox({
    mobile: true,
    menuSpeed: 'fast'
  });

  $('#fade').click(function () {
    $('SELECT').selectBox('settings', {
      'menuTransition': 'fade',
      'menuSpeed': 'fast'
    });
  });

  $(".check").each(function() {  
    changeCheckboxStart($(this));  
  });

});


function changeCheckboxStart(el) {
  try {
    var el = el,
    checkChecked = el.attr("checked"),
    checkDisabled = el.attr("disabled");

    if (!checkChecked && !checkDisabled) {
      el.parent().addClass('checkbox-unchecked')
      el.attr("checked", false);
      el.attr("disabled", false);
    } else if (checkChecked && !checkDisabled) {
      el.parent().addClass('checkbox-checked');
      el.attr("checked", true);
      el.attr("disabled", false);
    } else if (!checkChecked && checkDisabled) {
      el.parent().addClass('checkbox-disabled');
      el.attr("checked", false);
      el.attr("disabled", true);
    } else if (checkChecked && checkDisabled) {
      el.parent().addClass('checkbox-disabled__checked');
      el.attr("checked", true);
      el.attr("disabled", true);
    }  
    el.parent().bind("mousedown", function(e) { changeCheckbox($(this)) });
  }
  
  catch(e) {

  }
  return true;
}

function changeCheckbox(el) {
  var el = el;
  input = el.find("input").eq(0);
  if (!input.attr("checked") && !input.attr("disabled")) {
    input.parent().removeClass('checkbox-unchecked')
    input.parent().addClass('checkbox-checked')
    input.attr("checked", true)
    input.attr("disabled", false);
  } else if (input.attr("checked") && !input.attr("disabled")) {     
    input.attr("checked", false)
    input.attr("disabled", false);
    input.parent().removeClass('checkbox-checked')
    input.parent().addClass('checkbox-unchecked');
  } else if (!input.attr("checked") && input.attr("disabled")) {   
    input.parent().removeClass('checkbox-unchecked')
    input.parent().addClass('checkbox-disabled');  
  } else if (input.attr("checked") && input.attr("disabled")) {   
    input.parent().removeClass('checkbox-unchecked');
    input.parent().addClass('checkbox-disabled__checked');  
  }
    return true;
}
