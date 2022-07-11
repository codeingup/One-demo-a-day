const divlist = document.querySelectorAll('.imaglist');


let isPass = true
divlist.forEach((dom) => {
    dom.addEventListener('transitionend', () => {
        isPass = true
    })
    dom.addEventListener('click', () => {
        if (isPass && dom.getAttribute('id') != 'active') {
            divlist.forEach((dom) => {
                dom.removeAttribute('id')
            })
            dom.setAttribute('id', 'active')
            isPass = false
        }
    })
})