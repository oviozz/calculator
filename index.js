

const label = document.querySelector('.result')

document.querySelector('.lower').addEventListener
('click', function (e) {
    let value_click = e.target.getAttribute('id')

    if (value_click !== 'null' && value_click !== '='){
        if (['+','×','-'].includes(value_click))
            label.style.color = 'pink'
        }else {
            label.style.color = 'white'
        }

    label.value += value_click

})