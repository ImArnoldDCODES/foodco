

var countDownDate = new Date ("dec 12, 2021 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance =  countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById('Days').innerHTML = days;
document.getElementById('Hours').innerHTML = hours;
document.getElementById('Minutes').innerHTML = minutes;
document.getElementById('Seconds').innerHTML = seconds;


if(distance < 0){
    clearInterval(x);
     setTimeout(reset_timer , 100);
    
     return;

    
document.getElementById('Days').innerHTML = 00;
document.getElementById('Hours').innerHTML = 00;
document.getElementById('Minutes').innerHTML = 00;
document.getElementById('Seconds').innerHTML = 00;


}

},1000)



var i = 0;
var images = [];
var time = 2000;

images[0] = 'images/person.jpg';
images[1] = 'images/person2.jpg';
images[2] = 'images/person3.jpg';
images[3] = 'images/person4.jpg';
images[4] = 'images/person5.jpg';
images[5] = 'images/person6.jpg';

function ChangeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){ 
        console.log('done')
        i++
    } else{
        console.log('else')
        i = 0;
    }
}

 setTimeout("ChangeImg()", time);

 const book = {
     name: 'Eloquent Javascript',
     price: 30,
     author: {
         name: 'Marijn Haverbeke',
         website: 'marij',
     }
 }

 Object.freeze(book);



 book.author.website = 'elequent';


 console.log(book.author.website
    )

// var slideIndex = 0;
// showSlide();

// function showSLides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for( i = 0; i < slides.length; i++){
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if(slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex - 1]. style.display = "block";
//     setTimeout(showSLides, 2000);
// }












// document.getElementsByClassName('person');
// document.getElementsByClassName('person1');
// document.getElementsByClassName('person2');
// document.getElementsByClassName('person3');
// document.getElementsByClassName('person4');
// document.getElementsByClassName('person5');
// document.getElementsByClassName('person6');





// keep
/*
var  src="https://unpkg.com/aos@next/dist/aos.js"
AOS.init();
*/



// let profile = ['bob', 34, 'carpenter'];
// let [name, age, job] = profile;
// console.log(name)


/*
if('') {
    console.log('A');
} else{
    if (null) {
        console.log('B')
    } else{
        console.log('C')
    }

    if(1) {
        console.log('D')
    } else {
        console.log('E')
    }
}
*/
