export default function SetNumber2(value: string) {
    let regexDivision = /[/]/;
    let resultDivision = value.search(regexDivision);

    let regexSum = /[+]/;
    let resultSum = value.search(regexSum);

    let regexSub = /[-]/;
    let resultSub = value.search(regexSub);

    let regexMul = /[X]/;
    let resultMul = value.search(regexMul);

    if (resultDivision > 0) {
        let sub = resultDivision + 2;
        let number2 = value.substring(sub);
        return number2
    }

    if (resultSum > 0) {
        let sub = resultSum + 2;
        let number2 = value.substring(sub);
        return number2
    }
    
    if (resultSub > 0) {
        let sub = resultSub + 2;
        let number2 = value.substring(sub);
        return number2
    }
    if (resultMul > 0) {
        let sub = resultMul + 2;
        let number2 = value.substring(sub);
        return number2
    }
    return ''
}