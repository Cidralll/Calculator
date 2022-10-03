export default function CheckingOperator(value: string) {
    let regexDivision = /[/]/;
    let resultDivision = value.search(regexDivision);

    let regexSum = /[+]/;
    let resultSum = value.search(regexSum);

    let regexSub = /[-]/;
    let resultSub = value.search(regexSub);

    let regexMul = /[X]/;
    let resultMul = value.search(regexMul);

    let regexFind = /[=]/;
    let resultFind = value.search(regexFind);

    
    if (resultDivision > 0 || resultSum > 0 || resultSub > 0 || resultMul > 0 || value === '|') {
        if (resultFind > 0 && resultFind < 2) {
            return false;
        }
        return true;
    }

    

    return false;
}