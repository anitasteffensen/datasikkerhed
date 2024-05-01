document.querySelectorAll('.accordion-item h3').forEach((accordionToggle) => {
    accordionToggle.addEventListener('click', () => {
        const accordionItem = accordionToggle.parentNode;
        const accordionContent = accordionToggle.nextElementSibling;

        // If this accordion item is already open, close it.
        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
            accordionItem.classList.remove('active');
        } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            accordionItem.classList.add('active');
        }
    });
});



/*document.getElementById('options').addEventListener('change', function (){
    var xxx = this.value;
    var option1Div = document.getElementById('option1');
    var option2Div = document.getElementById('option2');

    if (xxx === 'option1'){
option1Div.classList.remove('hidden');
option2Div.classList.add('hidden');
    }
    else if (xxx = 'option2'){
        option1Div.classList.add('hidden');
        option2Div.classList.remove('hidden');
    }

});*/