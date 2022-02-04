// let height = window.innerHeight;
// let width = window.innerWidth;

// console.log("height: " + height + " widht: " + width)

// let navItems = $(".navbar-light .navbar-nav .nav-link");

// $(window).scroll(function () {
//     let distance = $(window).scrollTop();

//     $('.page-section').each(function (i) {

//         if ($(this).position().top
//             <= distance + 100) {

//             $('.navbar-nav a.active')
//                 .removeClass('active');

//             $('.navbar-nav a').eq(i)
//                 .addClass('active');
//         }
//     });
// }).scroll();


window.onscroll = function() { scrollIndecator() };

function scrollIndecator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}