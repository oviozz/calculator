
const label = document.querySelector('.result')
const logscreen = document.querySelector('.history-screen')


document.querySelector('.lower').addEventListener
('click', function (e) {
    let value_click = e.target.getAttribute('id')
    if (value_click && !value_click.includes('=')) {
            label.value += value_click
            label.scrollLeft = label.scrollWidth;

    }
})

label.addEventListener('blur', () => {
    setTimeout(() => {
        label.scrollLeft = label.scrollWidth;
    }, 0);
})


document.querySelector('#del').addEventListener
('click', () => {
    label.value = label.value.slice(0,-1)
})

document.querySelector('#clear').addEventListener(
    'click', () => {label.value = ''}
)


document.querySelectorAll('.top.sign').forEach
( btn_sign => {
    btn_sign.addEventListener('click', (e) => {
        label.value += e.target.getAttribute('id')
        label.scrollLeft = label.scrollWidth;

    })

})

document.querySelectorAll('.top.extra').forEach
( top_btn_sign => {
    top_btn_sign.addEventListener('click', (e) => {
        label.value += e.target.getAttribute('id')
        label.scrollLeft = label.scrollWidth;
    })

})

const list_log = document.querySelector('.logs')

document.querySelector('.equals').addEventListener
('click', () => {

    const log_create = document.createElement('li')
    let result = math.evaluate(label.value.replace('×','*'))

    log_create.innerText = `${label.value} = ${result}`
    log_create.setAttribute('class','logs-items')
    list_log.prepend(log_create)

    label.value = result

})

document.querySelector('#log-icon').addEventListener('click', () => {
    logscreen.style.display = 'block';
})

document.querySelector('.up').addEventListener('click', () =>{
    logscreen.style.display = 'none';
})


document.querySelector('.calculator-screen').addEventListener('click', () => {
    console.log('working')
    if (window.getComputedStyle(logscreen).display === 'block'){
        logscreen.style.display = 'none'
    }
})
