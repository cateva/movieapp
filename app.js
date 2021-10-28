$(function(){
    });

$('img').addClass('image-center');

$('p').last().remove();

let ranNum = Math.floor(Math.random() * 100);
// console.log(ranNum);
$('h1').css("fontSize", ranNum);

$('ol').append('<li>yoyoyoyo</li>')
$('ol').remove();
$('h4').remove();

$("aside").append('<p>Hello</p>');

let value11 = $("input").val();
console.log(value11);


$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
  });

$('img').click(function(){
    $('img').remove();
})
