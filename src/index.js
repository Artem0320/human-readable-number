module.exports = function toReadable (number) {
    let newNumber = String(number)
    const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const oneN = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    if(newNumber === '0') {
        return 'zero'
    }

    while(newNumber.length < 3) newNumber = '0' + newNumber
    
    const addUnits = (n) => {
        if(n === '0') {
            return '$'
        } else {
            return units[n - 1]
        }
    }

    const addTens = (n) => {
        if(n === '0') {
            return '$'
        } else {
            return tens[n - 2]
        }
    }

    function addHundreds(n) {
        if(n === '0') {
            return '$'
        } else {
            return `${units[n - 1]} hundred`
        }
    }
    if(newNumber[1] == '1') {
        return `${addHundreds(newNumber[0])} ${oneN[newNumber.slice(1) % 10]}`.replace(/ \$|\$ /g, '')
    }else {
        return `${addHundreds(newNumber[0])} ${addTens(newNumber[1])} ${addUnits(newNumber[2])}`.replace(/ \$|\$ /g, '')
    }
    
}
