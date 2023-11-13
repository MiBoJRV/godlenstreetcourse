//Слайдер
$('.reviews__list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  infinite: true,
});


//Табы
$('.faq__tab').click(function(){
  $(this).parents('.faq__item').toggleClass('active');
})


//Настройки скроллинга
$('a[href^="#"]').click(function () { 
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top;
       $('html, body').animate( { scrollTop: destination}, 800);
     return false;
});


//Квиз
let clicked = false;
let currentQuestion = 1;
$('.quiz__option, .next').click(function(){
  $(this).parents('.quiz__item').find('.quiz__option').removeClass("active");
  $(this).addClass("active");
  if(clicked == false){
    clicked = true;
    setTimeout(function() {
      changeQuestion();
      if(currentQuestion == 6){
        $('html, body').animate({
            scrollTop: $('#form').offset().top
        }, 1000); 
      }      
    }, 600);    
  }
});
function changeQuestion(){
  currentQuestion++;
  $('.quiz__item').removeClass("active");
  $('.quiz__item[data-item="'+currentQuestion+'"]').addClass("active");
  clicked = false;
}



//Валидатор
// setTimeout(function() {
//   var phones=document.querySelectorAll('input[type=tel]');
//   for (var i = phones.length - 1; i >= 0; i--) {
//     processInput(phones[i]);
//   }      
//   function processInput(phone){
//     var iti = window.intlTelInput(phone,{
//       allowDropdown: true,
//       initialCountry: 'auto',
//       nationalMode: true,
//       autoPlaceholder: 'aggressive',
//       formatOnDisplay: true,
//       separateDialCode: true,
//         geoIpLookup: callback => {
//           fetch("https://ipinfo.io/json")
//             .then(res => res.json())
//             .then(data => callback(data.country))
//             .catch(() => callback("us"));
//         },
//       hiddenInput : "full_phone",
//       utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.15/js/utils.min.js'
//       });
//       phone.addEventListener('input', ()=> {
//       phone.setCustomValidity('');
//           if (!iti.isValidNumber()) phone.setCustomValidity('Wrong number!');
//       });
//     }
// }, 500); 