'use strict'


button.addEventListener( 'click', function() {
    button.style.color = 'violet'
    i++
    button.innerHTML = i
    if ( i <= 10 ) {
        let test
        let buttonWidth = getComputedStyle(button).width
        test = toString(Number(buttonWidth) + i) + 'px'
        console.log(test)
    } 
})