
function getAgeInDays() {
    var myAge = document.getElementById("myAge").value;
    document.getElementById("demo").innerHTML = 365 * parseInt(myAge);
}
function dumpData(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const entires = formData.entries();

    for (var input of entires) {
        console.log(input[0] + ': ' + input[1]);
    }}

(function($) {
    $(function() {
        $('nav ul li > a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown').toggle();
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        $('html').click(function() {
            $('.nav-dropdown').hide();
        });
    });
    document.querySelector('#nav-toggle').addEventListener('click', function() {
        this.classList.toggle('active');
    });
    $('#nav-toggle').click(function() {
        $('nav ul').toggle();
    });


    var mainForm = document.getElementById('main-form');
    var mainFormElements = mainForm.elements;
    mainForm.addEventListener('submit', function(e) {
        e.preventDefault();
        for (let i = 0; i < mainFormElements.length; i++) {
            console.log(mainFormElements[i].name , ' => ',mainFormElements[i].value);
        }
    });


    /* canvas */
    var primaryColor = '#e3b04b';
    var secondaryColor = '#333';
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = primaryColor;
    // ctx.fillRect(0,0,50,100);
    // ctx.fillStyle = 'green';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.strokeStyle = primaryColor;
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, canvas.width,canvas.height);

    /* Circle */
    ctx.beginPath();
    ctx.arc(150, 150, 50, 0, 2 * Math.PI);
    ctx.fillStyle = secondaryColor;
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.strokeStyle = secondaryColor;

    /* Top left */
    ctx.moveTo(10, 10);
    ctx.lineTo(120, 110);

    /* Top Right */
    ctx.moveTo(290, 10);
    ctx.lineTo(180, 110);


    /* Bottom left */
    ctx.moveTo(10, 290);
    ctx.lineTo(120, 190);

    /* Bottom right */
    ctx.moveTo(290, 290);
    ctx.lineTo(160, 180);


    ctx.stroke();
    // ctx.clearRect(0, 0,canvas.width,30);

    /* Add text */
    ctx.font = "30px Arial";
    ctx.fillText("Moataz", 105, 80);
    ctx.font = "60px Arial";
    ctx.fillText("2019", 85, 280);

})(jQuery);