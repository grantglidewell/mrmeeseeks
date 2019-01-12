const mespeaks = require('../mespeaks.json')
function mrMeeseeks(desire = '') {
    console.log(mespeaks.greetings[Math.floor(Math.random() * mespeaks.greetings.length)])
    // Mr Meeseeks grants your simple desire
    if (desire === '') {
        return 'Bye!'
    }
    if (desire.split(' ').length < 3) {
        return console.log(`Your wish: '${desire}' has been fulfilled, **poof**`)
    } else {
        // if the desire is too complicated, he asks for more mr meeseeks to help.
        const desireArray = desire.split(' ')
        const firstHalf = desireArray.slice(0, Math.floor(desireArray.length / 2))
        const lastHalf = desireArray.slice(Math.floor(desireArray.length / 2), desireArray.length)
        mrMeeseeks(firstHalf.join(' '))
        mrMeeseeks(lastHalf.join(' '))
    }
}

module.exports = mrMeeseeks
