'use strict'
let growWidth
let growHeight
// let buttonWidth
let buttonWidth = getComputedStyle(button).width
let buttonHeight = getComputedStyle(button).height

button.addEventListener( 'click', function() {
    button.style.color = 'violet'
    ++i
    button.innerHTML = i
    if ( i < 10 ) {
        let widthNumber = buttonWidth.split('px')
        growWidth = Number(widthNumber[0]) + (i * 4) + 'px'
        button.style.width = growWidth
        let heightNumber = buttonHeight.split('px')
        growHeight = Number(heightNumber[0]) + (i * 4) + 'px'
        button.style.height = growHeight
        console.log(i)
    } else if ( i = 0 ) {
        button.style.width = '200px'
    } else if ( i = 10 ) {
        i = 0
    }
})