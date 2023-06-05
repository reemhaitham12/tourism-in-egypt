//js of responsive navbar menu

// move navbar by using scroll //
window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

////////////////////////

// show box all links //
function toggleMenu(){
    const toggleMenu =document.querySelector('.toggleMenu');
    const navigation =document.querySelector('.navigation');
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}
////////////////////////