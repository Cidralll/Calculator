import './Calculator.scss'
import ButtonNumber from "../Components/Button/ButtonNumber";
import Input from "../Components/Input/Input";
import { useState } from 'react';
import ButtonOperator from "../Components/Button/ButtonOperator";
import CheckingOperator from "./Functions/CheckingOperator";
import SetNumber2 from "./Functions/SetNumber2";
import Division from "./Functions/Division";
import Sum from "./Functions/Sum";
import Multiplication from "./Functions/Multiplication";
import Minus from "./Functions/Minus";
import ButtonAss from '../Components/Button/ButtonAss';

export default function Calculator() {

    let [number1, setNumber1] = useState<string>('');
    let [operatorCal, setOperator] = useState<string>();

    /* ADICIONA O NUMERO CLICADO NO INPUT */
    let [valueInput, setValueInput] = useState<string>("|");
    function SetInput(number: string) {
        let setNumber = `${valueInput}${number}`

        if(valueInput === "|") {
            setNumber = `${number}`;
        }
        setValueInput(setNumber)  
    }

    /* VERIFICA SE JA EXISTE ALGUM OPERADOR SELECIONADO / DEFINE VALOR DO 1° NUMERO E A OPERAÇÃO*/
    function CheckingInput(operator: string) {
        let checkingOperator = CheckingOperator(valueInput);
        if (checkingOperator) {
            let setNumber = `${valueInput}`
            setValueInput(setNumber);
        }else {
            setValueInput(`${valueInput}${operator}`);
            setNumber1(valueInput);
            setOperator(operator);
        }
    }

    /* LIMPA O INPUT */
    function ClearInput() {
        setValueInput('|');
        setNumber1('');
        setOperator('');
    }

    /* DELETA O ULTIMO CARACTER, E SE TIVER ESPAÇO DELETA 3 */
    function DeleteInput() {
        let valueDelete = valueInput;

        if (valueDelete === '|') {
            return setValueInput(valueDelete);
        }

        let valueLength = valueDelete.length - 1;
        let valueSpace  = valueDelete.search(' ') + 1;
        if (valueLength > valueSpace && (valueSpace + 1) === valueLength && valueLength > 2) {
            valueDelete = valueDelete.substring(0, valueDelete.length - 3);
            setValueInput(valueDelete);
        }else {
            valueDelete = valueDelete.substring(0, valueDelete.length - 1);
            setValueInput(valueDelete);
        } 
    }

    /* DEFINE QUAL O 2° VALOR / RELIZA E MOSTRA NA TELA O VALOR TOTAL */
    function FinalizedAccont() {
        let check = CheckingOperator(valueInput);
        
        if (check) {
            setValueInput(valueInput);
            let resultNumber2 = SetNumber2(valueInput);
            
            if (operatorCal === ' / ') {
                let result = Division(number1, resultNumber2);
                setValueInput(`${result}`);
            }

            if (operatorCal === ' + ') {
                let result = Sum(number1, resultNumber2);
                setValueInput(`${result}`);
            }

            if (operatorCal === ' X ') {
                let result = Multiplication(number1, resultNumber2);
                setValueInput(`${result}`);
            }

            if (operatorCal === ' - ') {
                let result = Minus(number1, resultNumber2);
                setValueInput(`${result}`);
            }
        }
    }

    return (
        <main className="mainCalculator">
            <section className="sectionCalculator">
                <Input className='input'>{valueInput}</Input>
                <div className="divCalculator">
                    <ButtonNumber type="button" value='7' onClick={() => SetInput('7')} className='button'>7</ButtonNumber>
                    <ButtonNumber type="button" value='8' onClick={() => SetInput('8')} className='button'>8</ButtonNumber>
                    <ButtonNumber type="button" value='9' onClick={() => SetInput('9')} className='button'>9</ButtonNumber>
                    <ButtonOperator type="button" value='/' onClick={() => CheckingInput(' / ')} className='button'>/</ButtonOperator>
                </div>
                <div className="divCalculator">
                    <ButtonNumber type="button" value='4' onClick={() => SetInput('4')} className='button'>4</ButtonNumber>
                    <ButtonNumber type="button" value='5' onClick={() => SetInput('5')} className='button'>5</ButtonNumber>
                    <ButtonNumber type="button" value='6' onClick={() => SetInput('6')} className='button'>6</ButtonNumber>
                    <ButtonOperator type="button" value='-' onClick={() => CheckingInput(' X ')} className='button'>x</ButtonOperator>
                </div>
                <div className="divCalculator">
                    <ButtonNumber type="button" value='1' onClick={() => SetInput('1')} className='button'>1</ButtonNumber>
                    <ButtonNumber type="button" value='2' onClick={() => SetInput('2')} className='button'>2</ButtonNumber>
                    <ButtonNumber type="button" value='3' onClick={() => SetInput('3')} className='button'>3</ButtonNumber>
                    <ButtonOperator type="button" value='-' onClick={() => CheckingInput(' - ')} className='button'>-</ButtonOperator>
                </div>
                <div className="divCalculator">
                    <ButtonNumber type="button" value='0' onClick={() => SetInput('0')} className='button'>0</ButtonNumber>
                    <ButtonNumber type="button" value=',' onClick={() => SetInput('.')} className='button'>,</ButtonNumber>
                    <ButtonNumber type="button" value='Del' onClick={DeleteInput} className='button'>D</ButtonNumber>
                    <ButtonOperator type="button" value='+' onClick={() => CheckingInput(' + ')} className='button'>+</ButtonOperator>
                </div>
                <div className="divFind">
                    <ButtonOperator type="button" value='Clear' onClick={ClearInput} className='buttonFind'>AC</ButtonOperator>
                    <ButtonAss type="button" value='Clear' className='buttonAss'>LC</ButtonAss>
                    <ButtonOperator type="button" value='Find' onClick={FinalizedAccont} className='buttonFind'>=</ButtonOperator>
                </div>
            </section>
        </main>
    )
}