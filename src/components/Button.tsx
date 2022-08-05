import { Text, TouchableOpacity } from 'react-native'
import { useContext, useState} from 'react'
import { ThemeContext } from '../context/ThemeContex'
import { Styles } from '../styles/globalStyles'

interface ButtonProps {
    onPress: () => void;
    title: string;
    modify?: boolean;
    isTop?: boolean;
}

export default function Button ({title, onPress, modify, isTop}: ButtonProps){
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
            style={
                !modify
                ? Styles.btn
                : theme === 'light'
                ? Styles.btnLight
                : Styles.btnDark
            }
            onPress={onPress}
        >
            <Text
                style={
                    isTop
                    ? Styles.textBtnTop
                    : !modify 
                    ? Styles.textBtnSide
                    : Styles.textBtn
                }
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}