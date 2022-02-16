import React from "react";
import { 
    View, 
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

export default (props) => {
    const data = props.state
    return(
        <>
            <View style={style.container}>
                <View style={style.containerText}>
                    <Text style={style.text}>Produtos:</Text>
                    <Text style={style.value}>{data.Producs[0]}</Text>
                </View>
                <View style={style.containerText}>
                    <Text style={style.text}>Total:</Text>
                    <Text style={style.value}>R$ {data.Value}</Text>
                </View>
                <TouchableHighlight>
                    <Text style={style.checkout}>Fechar Pedido</Text>
                </TouchableHighlight>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#333333",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingTop: 20,
        paddingBottom: 20,
    },
    containerText: {
        flexDirection: "row", 
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    text: {
        color: "#FFF",
    },
    value: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16
    },
    checkout: {
        backgroundColor: '#EEA60F',
        borderRadius: 50,
        marginHorizontal: 60,
        marginVertical: 10,
        textAlign: "center",
        padding: 10
    }
})