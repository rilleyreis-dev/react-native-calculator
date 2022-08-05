import * as React from 'react';
import Button from './Button';
import { Text, View } from 'react-native';
import { Styles } from '../styles/globalStyles';
import { myColors } from '../styles/colors';

export default function MyKeyboard() {
    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operation, setOperation] = React.useState("");
    const [result, setResult] = React.useState<Number | null>(null);

    const handleNumberPress = (buttonValue: string) => {
        if(firstNumber.length < 10){
            setFirstNumber(firstNumber + buttonValue);
        }
    };

    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
    };

    const clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
    };

    const getResult = () => {
        switch (operation) {
            case "+": 
                clear();
                setResult(parseFloat(secondNumber) + parseFloat(firstNumber));
                break;
            case "-":
                clear();
                setResult(parseFloat(secondNumber) - parseFloat(firstNumber));
                break;
            case "x":
                clear();
                setResult(parseFloat(secondNumber) * parseFloat(firstNumber));
                break;
            case "/":
                clear();
                setResult(parseFloat(secondNumber) / parseFloat(firstNumber));
                break;
            default:
                clear();
                setResult(0);
                break;
        }
    };

    const firstNumberDisplay = () => {
        if (result !== null){
            return <Text style={result < 99999 ? [Styles.textDisplay1] : [Styles.textDisplay1, {fontSize: 60}]} >{result?.toString()}</Text>
        }
        if(firstNumber && firstNumber.length < 6){
            return <Text style={Styles.textDisplay1}>{firstNumber}</Text>
        }
        if(firstNumber === ""){
            return <Text style={Styles.textDisplay1}>{"0"}</Text>
        }
        if(firstNumber.length > 5 && firstNumber.length < 8){
            return <Text style={ [Styles.textDisplay1, { fontSize:70 }]}>{firstNumber}</Text>
        }
        if(firstNumber.length > 7){
            return <Text style={ [Styles.textDisplay1, { fontSize: 60 }]}>{firstNumber}</Text>
        }
    }

    return(
        <View style={Styles.viewBotton}>
            <View
                style = {{
                    height: 120,
                    width: '90%',
                    justifyContent: "flex-end",
                    alignSelf: "center"
                }}
            >
                <Text style={Styles.textDisplay2}>
                    {secondNumber}
                    <Text style={Styles.textDisplay2}>{operation}</Text>
                </Text>
                {firstNumberDisplay()}
            </View>
            <View style={Styles.row}>
                <Button title='AC' isTop modify onPress={clear} />
                <Button title='+/-' isTop modify onPress={() => handleOperationPress("+/-")} />
                <Button title='%' isTop modify onPress={() => handleOperationPress("%")} />
                <Button title='÷'  onPress={() => handleOperationPress("/")} />
            </View>
            <View style={Styles.row}>
                <Button title='7' modify onPress={() => handleNumberPress("7")} />
                <Button title='8' modify onPress={() => handleNumberPress("8")} />
                <Button title='9' modify onPress={() => handleNumberPress("9")} />
                <Button title='x'  onPress={() => handleOperationPress("x")} />
            </View>
            <View style={Styles.row}>
                <Button title='4' modify onPress={() => handleNumberPress("4")} />
                <Button title='5' modify onPress={() => handleNumberPress("5")} />
                <Button title='6' modify onPress={() => handleNumberPress("6")} />
                <Button title='-'  onPress={() => handleOperationPress("-")} />
            </View>
            <View style={Styles.row}>
                <Button title='1' modify onPress={() => handleNumberPress("1")} />
                <Button title='2' modify onPress={() => handleNumberPress("2")} />
                <Button title='3' modify onPress={() => handleNumberPress("3")} />
                <Button title='+'  onPress={() => handleOperationPress("+")} />
            </View>
            <View style={Styles.row}>
                <Button title='.' modify onPress={() => handleNumberPress(".")} />
                <Button title='0' modify onPress={() => handleNumberPress("0")} />
                <Button title='←' modify onPress={() => setFirstNumber(firstNumber.slice(0,-1))} />
                <Button title='='  onPress={() => getResult()} />
            </View>
            
        </View>
    );
}