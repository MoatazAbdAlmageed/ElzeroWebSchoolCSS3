
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

})(jQuery);