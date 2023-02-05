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
    strings: ["Frontend Developer", "Freelancer", "Web Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});
    // Get the button bottom
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    


  