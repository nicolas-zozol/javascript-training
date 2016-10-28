function displaySearch(term) {
    clearSection();
    clearSearch();
    var contents = search(term);

    contents.forEach(function (content) {
        const pElement = $('<p>').text(content);
        $('section.search').append(pElement);
    });
}
// $('body').text(contents.join(''));
$('button').on('click', displaySearchValue);
//      const term = $('input.search');
//      console.log('test', term, term.val());
//     displaySearch(term.val());

function displaySearchValue() {
    displaySearch($('input.search').val());
}
function clearSection() {
    $('section').empty();
}
function clearSearch() {
    $('section').empty();
}

function displayUser(users) {
    const block = $('<ul>');
    $('section.users').append(block);
    users.forEach(function (user) {
        const pElement = $('<li>').text(user.name);
        block.append(pElement);
    });
};

