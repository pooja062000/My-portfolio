document.querySelector('#toggle').addEventListener('click', function(){
    console.log('clicked on toggle')
    document.querySelector('.my_mobile').style.display = 'block'
})

document.querySelector('#close_menu').addEventListener('click', function(){
    console.log('clicked on close icon')
    document.querySelector('.my_mobile').style.display = 'none'
})


/* home text moving code*/
var typing=new Typed(".text", {
    strings: [" Frontend Developer", "Freelancer", "Web Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});


  
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


  