import React from "react";
import { 
    View, 
    Text,
    StyleSheet,
    Dimensions,
    Modal
} from 'react-native'

export default (props) => {
    const data = props.state
    return(
        <View>
            <Text>Produtos: </Text>
            <Text>Valor: {data.Value}</Text>
            <Text>Botão Pedir</Text>
        </View>
    )
}