// sidebar mobile btn

const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

// mobile widget razvernutb

sidebarToggleBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');

}

// hidden 3 cards

const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');
// click btn = show 3 cards
btnShowMoreCards.addEventListener('click', function () {
    hiddenCards.forEach(function (card) {
        card.classList.remove('card-link--hidden');
    })
})


// click po btn svernutb/razvernutb widget

const widgets = document.querySelectorAll('.widget');

// sluhaem click vnutri widget i esli widget po zagolovku = skrblvaem
widgets.forEach(function (widget) {
    widget.addEventListener('click', function (e) {
        if (e.target.classList.contains('widget-titel')) {
            e.target.classList.toggle('widget-title--active');
            e.target.nextElementSibling.classList.toggle('widget-body--hidden');
        }
    });
})

// location btn lubaya

const checkboxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

// click lubaya = false top drugie btn
checkboxAny.addEventListener('change', function () {
    if (checkboxAny.checked) {
        topLocationCheckboxes.forEach(function (item) {
            item.checked = false;
        });
    }
})

// click top drugie btn = false lubaya
topLocationCheckboxes.forEach(function (item) {
    item.addEventListener('change', function () {
        if (checkboxAny.checked) {
            checkboxAny.checked = false;
        }
    })
})

// pokazatb ehe 3 dop opctions 
const showMoreOptions = document.querySelector('.widget__btn-show__hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function (e) {
    e.preventDefault();

    // esli blocki bili ckriti - znachit pokazivaem
    if (showMoreOptions.dataset.options == 'hidden') {
        hiddenCheckBoxes.forEach(function (item) {
            item.style.display = 'block';
        });
        showMoreOptions.innerText = "Скрыть доп. опции";
        showMoreOptions.dataset.options = 'visible';
    }
    // esli blocki bili vidni - znachit skrivaem
    else if (showMoreOptions.dataset.options == 'visible') {
        hiddenCheckBoxes.forEach(function (item) {
            item.style.display = 'none';
        });
        showMoreOptions.innerText = "Показать больше";
        showMoreOptions.dataset.options = 'hidden';
    }
}