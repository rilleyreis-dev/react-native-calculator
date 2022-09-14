import * as React from 'react';
import Button from './Button';
import { FlatList, Text, View } from 'react-native';
import { Styles } from '../styles/globalStyles';
import { myColors } from '../styles/colors';

export default function MyKeyboard() {
    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [result, setResult] = React.useState(null);
    const [resultList, setResultList] = React.useState([] as any);

    const handleNumberPress = (buttonValue: string, operator: boolean) => {
        if(result != null){
            if(operator){
                setFirstNumber(result + ' ' + buttonValue);
                setResult(null);
                return;
            }else{
                setResult(null);
            }
        }
        if(operator){
            if(buttonValue != "."){
                setFirstNumber(firstNumber + ' ' + buttonValue + ' ');
                return;
            }
        }
        setFirstNumber(firstNumber + buttonValue);
    };

    const clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setResult(null);

    };

    const getResult = () => {
        setSecondNumber(firstNumber);
        let result = eval(firstNumber)
        let valueResult = firstNumber + ' = ' + result;
        setResult(result);
        setResultList((arr: any)=>[...arr,{id: new Date().getTime(), result: valueResult}]);
        setFirstNumber("");
    };

    const firstNumberDisplay = () => {
        if (result !== null){
            return <Text style={result < 99999 ? [Styles.textDisplay1] : [Styles.textDisplay1, {fontSize: 60}]} >{result}</Text>
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
            <FlatList
                style = {{
                    height: 170,
                    width: '90%',
                    alignSelf: "center",
                    marginBottom: 60
                }}
                data = {resultList}
                renderItem = {({item}) => {
                    return (
                        <Text style={Styles.textHistory}>
                            {item.result}
                        </Text>
                    )
                }}
                keyExtractor = {(item) => item.id }
            >

            </FlatList>
            <View
                style = {{
                    height: 100,
                    width: '90%',
                    justifyContent: "flex-end",
                    alignSelf: "center"
                }}
            >
                <Text style={Styles.textDisplay2}>
                    {secondNumber}
                </Text>
                {firstNumberDisplay()}
            </View>
            <View style={Styles.row}>
                <Button title='AC' isTop modify onPress={clear} />
                <Button title='←' isTop modify onPress={() => setFirstNumber(firstNumber.slice(0,-1))} />
                <Button title='%' isTop modify onPress={() => handleNumberPress("%", true)} />
                <Button title='÷'  onPress={() => handleNumberPress("/", true)} />
            </View>
            <View style={Styles.row}>
                <Button title='7' modify onPress={() => handleNumberPress("7", false)} />
                <Button title='8' modify onPress={() => handleNumberPress("8", false)} />
                <Button title='9' modify onPress={() => handleNumberPress("9", false)} />
                <Button title='x'  onPress={() => handleNumberPress("*", true)} />
            </View>
            <View style={Styles.row}>
                <Button title='4' modify onPress={() => handleNumberPress("4", false)} />
                <Button title='5' modify onPress={() => handleNumberPress("5", false)} />
                <Button title='6' modify onPress={() => handleNumberPress("6", false)} />
                <Button title='-'  onPress={() => handleNumberPress("-", true)} />
            </View>
            <View style={Styles.row}>
                <Button title='1' modify onPress={() => handleNumberPress("1", false)} />
                <Button title='2' modify onPress={() => handleNumberPress("2", false)} />
                <Button title='3' modify onPress={() => handleNumberPress("3", false)} />
                <Button title='+'  onPress={() => handleNumberPress("+", true)} />
            </View>
            <View style={Styles.row}>
                <Button title='.' modify onPress={() => handleNumberPress(".", true)} />
                <Button title='0' modify onPress={() => handleNumberPress("0", false)} />
                <Button title='=' equal onPress={() => getResult()} />
            </View>
            
        </View>
    );
}