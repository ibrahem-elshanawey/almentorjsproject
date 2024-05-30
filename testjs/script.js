var x = "ibrahim elshenawy";
var y = x.replace("ibrahim", "hello ibrahim");
var z = " ibrahim           " + "         " + "elshenawy     ";

// document.getElementById('mex').innerHTML = x.indexOf("elshenawy");
// document.getElementById('mex').innerHTML = x.search("elshenawy");
// document.getElementById('mex').innerHTML = x.slice(8,12);
// document.getElementById('mex').innerHTML = x.slice(8);
// document.getElementById('mex').innerHTML = x.slice(-3);
// document.getElementById('mex').innerHTML = x.substr(8,2);
// document.getElementById('mex').innerHTML = y;
// document.getElementById('mex').innerHTML = y.toUpperCase();
// document.getElementById('mex').innerHTML = y.toLowerCase();
// document.getElementById('mex').innerHTML = z.trim();
// const degree = 80;
// switch (degree) {
//     case 90:
//         o = 50;
//         break;
//     case 80:
//         o = 100;
//         break;

//     default:
//         break;
// }

// document.getElementById('mex').innerHTML = o;
// for (let i = 0; i < 10; i++) {
//     document.write("hello" + "<br>");

// }

// document.getElementById('mex').innerHTML = element;
// var i = 1;
// while (i < 10) {
//     document.write("hello" + "<br>");
//     i++
// }

// do {
//     document.write("hello" + "<br>");
//     i++
// } while (i < 10);


// var col;
// for (i = 0; i <= 10; i++) {
//     for (j = 0; j <= 10; j++) {
//         col = col + i + "*" + j + "=" + (i * j) + "<br>";
//     }
// }
// var col;
// ali:
// for (i = 0; i <= 10; i++) {
//     for (j = 0; j <= 10; j++) {
//         col = col + i + "*" + j + "=" + (i * j) + "<br>";
//         if (j == 5) {
//             // break ali;
//             // continue ali;

//         }
//     }
//     if (i == 5) {
//         break;

//     }
// }
// document.getElementById('mex').innerHTML = col;
// function add(n) {
//     if (n != 0)
//         return n + add(n - 1)
//     else
//         return 0;
// }
// document.getElementById('mex').innerHTML = add(4);
// var person = {
//     firstname: "",
//     lastname: "elshenawy",
//     set fname(p_name) {
//         this.firstname = p_name;
//     },
//     get fullname() {
//         return this.firstname + " " + this.lastname;
//     }
// }
// person.fname = "ibrahim";
// // document.getElementById('mex').innerHTML = person.firstname;
// document.getElementById('mex').innerHTML = person.fullname;

// class Person {
//     myfundate (fname,lname) {
//         this.firstname = fname;
//         this.lastname = lname;
//     }
//     static myanswer(){
//         return "hello world";
//     }
// }
// var p2=new Person();
// p2.myfundate("ibrahim","elshenawy");

// document.getElementById('mex').innerHTML = p2.firstname + ' ' + Person.myanswer();

// $('header h1').hide();
// $('header h1').text("halloooooooo");
$('header h1').css({ "color": "red", });
$('ul li:first').css({ "color": "red", });
$('ul li:last').css({ "color": "red", });
$('a[href="https:www.gooogle.com"]').css({ "color": "red", });

$('#btn1').click(function () {
    $('#para3').toggle();
})

$('#btn1').mouseenter(function () {
    $('#para3').toggle();
})
$('#select1').change(function () {
    $(this).css('background-color', 'yellow');
})
// $('input').focus(function () {
//     alert("halloooooooo");
// })
$('#form').submit(function (event) {
    event.preventDefault();
    var x = $('#name').val()
    alert(x)
})

$('#fadeout').click(function () {
    $('.header').fadeOut(1000);
})
$('#fadein').click(function () {
    $('.header').fadeIn(1000);
})
$('#fadetoggle').click(function () {
    $('.header').fadeToggle(1000);
})
$('#slideup').click(function () {
    $('.header').slideUp(1000);
})
$('#slidedown').click(function () {
    $('.header').slideDown(1000);
})
$('#slidetoggle').click(function () {
    $('.header').slideToggle(2000);
})
$('#stop').click(function () {
    $('.header').stop();
})
$('#moveleft').click(function () {
    $('#box').animate({
        left: 500,
        width: '500px',
        height: '500px',
    });
})
$('#moveright').click(function () {
    $('#box').animate({
        left: 0,
        width: '250px',
        height: '250px',
        top: 25
    });
})
$('#movearound').click(function () {
    $('#box').animate({
        left: 300,

    });
    $('#box').animate({
        top: 300,

    });
    $('#box').animate({
        left: 0,

    });
    $('#box').animate({
        top: 20,

    });
});
// $('#addm').click(function () {
//     $('#param4').addClass('changetext')
// })
$('#addm').click(function () {
    $('#param4').toggleClass('changetext')
})
$('.list').before('<h1>halloooooooo</h1>')
        $('.list').prepend('<li>kilm</li>')
$('.list').after('<h1>halloooooooo</h1>')
// $('.list').empty()
$('a').attr('targrt','_blank')
// $('a').removeAttr('href')



$('#additem').keyup(function (e) {
    if (e.which == 13) {
        $('.list').append('<li>' + e.target.value + '</li>')
    }
})
var myarr = ['ali', 'ahmed', 'ibrahim']
$.each(myarr, function (index, val) {
    $('#mylist').append('<li>' + val + '</li>')
})
