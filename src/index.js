module.exports = function toReadable (number) {
    if (number >= 0 && number < 10) {
        return upToTen(number)
    } else if (number >= 10 && number < 20) {
        return fromTenToTwenty(number)
    } else if (number >= 20 && number < 100) {
        if (+number.toString()[1] === 0) {
            return upToHundred(+number.toString()[0])
        }
        return upToHundred(+number.toString()[0]) + ' ' + upToTen(+number.toString()[1]);
    } else if (number >= 100 && number < 1000) {
        if (+number.toString()[1] === 0 && +number.toString()[2] === 0) {
            return upToThousand(+number.toString()[0])
        } else if (+number.toString()[1] === 0 && +number.toString()[2] !== 0) {
            return upToThousand(+number.toString()[0]) + ' ' + upToTen(+number.toString()[2]);
        } else if (+number.toString()[1] !== 0 && +number.toString()[2] === 0) {
            return upToThousand(+number.toString()[0]) + ' ' + upToHundred(+number.toString()[1])
        } else if (+number.toString()[1] === 1) {
            return upToThousand(+number.toString()[0]) + ' ' + fromTenToTwenty(+number.toString().slice(1, 3))
        } else {
            return upToThousand(+number.toString()[0]) + ' ' + upToHundred(+number.toString()[1]) + ' ' + upToTen(+number.toString()[2]);
        }
    }

    function upToThousand(number){
        switch(number) {
            case 1 : return 'one hundred'
            break;
            case 2 : return 'two hundred'
            break;
            case 3 : return 'three hundred'
            break;
            case 4 : return 'four hundred'
            break;
            case 5 : return 'five hundred'
            break;
            case 6 : return 'six hundred'
            break;
            case 7 : return 'seven hundred'
            break;
            case 8 : return 'eight hundred'
            break;
            case 9 : return 'nine hundred'
            break;
        }
    }

    function upToHundred(number){
        switch(number) {
            case 1 : return 'ten'
            break;
            case 2 : return 'twenty'
            break;
            case 3 : return 'thirty'
            break;
            case 4 : return 'forty'
            break;
            case 5 : return 'fifty'
            break;
            case 6 : return 'sixty'
            break;
            case 7 : return 'seventy'
            break;
            case 8 : return 'eighty'
            break;
            case 9 : return 'ninety'
            break;
        }
    }

    function fromTenToTwenty(number) {
        switch(number) {
            case 10 : return 'ten'
            break;
            case 11 : return 'eleven'
            break;
            case 12 : return 'twelve'
            break;
            case 13 : return 'thirteen'
            break;
            case 14 : return 'fourteen'
            break;
            case 15 : return 'fifteen'
            break;
            case 16 : return 'sixteen'
            break;
            case 17 : return 'seventeen'
            break;
            case 18 : return 'eighteen'
            break;
            case 19 : return 'nineteen'
            break;
        }
    }

    function upToTen(number) {
        switch(number) {
            case 0 : return 'zero'
            break;
            case 1 : return 'one'
            break;
            case 2 : return 'two'
            break;
            case 3 : return 'three'
            break;
            case 4 : return 'four'
            break;
            case 5 : return 'five'
            break;
            case 6 : return 'six'
            break;
            case 7 : return 'seven'
            break;
            case 8 : return 'eight'
            break;
            case 9 : return 'nine'
            break;
        }
    }
}
