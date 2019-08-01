$('li.added-skill').detach();

$('.container>button').on('click', function() {
    let newSkills = $('input').val();
    let template = 
    `<li class="added-skill">
        <button class="remove-btn">X</button>
        <p>${newSkills}</p>
    </li>`
    $('ul').append(template);
    $('input').val('');
});

$('ul').on('click','.remove-btn', function() {
    this.closest('.added-skill').remove();
});