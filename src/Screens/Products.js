import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Image,
    TouchableHighlight
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import API from '../data/API'
import ModalCheckout from '../components/modalCheckout'

const initialStateModal = {
    Producs: [],
    Value: 0.0,
    Check: false
}

export default props => {

    const stateModal = {...initialStateModal}

    const [data, setData] = useState(API)
    const [showModalCheckout, setShowModalCheckout] = useState(false)

    function setStateModal(props) {
        stateModal.Value = stateModal.Value + props 
    }

    return (
        <>
            <FlatList 
                data={data}
                keyExtractor={ item => String(item.id)}
                renderItem={({ item }) => 
                    <ListItem 
                        data={item} 
                        isShow={setShowModalCheckout}
                        setModal={setStateModal}
                    />
                }
            />
            {
                showModalCheckout 
                    ? <ModalCheckout state={initialStateModal} />
                    : null
            }
        </>
    )
}

function ListItem({ data, isShow, setModal}){
    
    const [qtdeProducts, setQtdeProducts] = useState(0)

    useEffect(() => {
        if (qtdeProducts > 0 ) {
            isShow(true)
            setModal(2)
        } 
        else if (qtdeProducts == 0) {
            isShow(false)
        }
    }, [qtdeProducts])

    return(
        <View style={styles.container}>
            <Image
            source={{uri: data.img}}
            style={styles.image}
            />
            <View style={styles.containerText}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{data.name}</Text>
                    <Text style={styles.price}>R$ {data.price}</Text>
                </View>
                <Text style={styles.descripition}>{data.descripition}</Text>
                <View style={styles.options}>
                    <Text>
                        <TouchableHighlight
                            onPress={() => {
                                if (qtdeProducts > 0 ) {
                                    setQtdeProducts(qtdeProducts - 1)
                                }
                            }}
                        >
                            <Ionicons 
                                name='remove-circle-outline'
                                size={25}
                            />
                        </TouchableHighlight>
                    </Text>
                    <Text style={styles.qtdeProducts}>{qtdeProducts}</Text>
                    <Text>
                        <TouchableHighlight
                            onPress={() => setQtdeProducts(qtdeProducts + 1)}
                        >
                            <Ionicons 
                                name='add-circle-outline'
                                size={25}
                            />
                        </TouchableHighlight>
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 10,

    },
    containerText: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 10
    },
    image: {
        width: 100, 
        height: 100,
        borderRadius: 20
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    price: {
        fontSize: 12,
        color: '#EEA60F',
        fontWeight: 'bold'
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    descripition: {
        fontSize: 10,
        color: 'gray'
    },
    qtdeProducts: { 
        marginHorizontal: 10 , 
        fontSize: 20 
    }
})