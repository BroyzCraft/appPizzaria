import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Image
} from 'react-native'
import API from '../Data/API'
import { Ionicons } from '@expo/vector-icons'

export default props => {

    const [data, setData] = useState(API)

    return (
        <FlatList 
        data={data}
        keyExtractor={ item => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
        />
    )
}

function ListItem({ data }){
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
                        <Ionicons 
                            name='remove-circle-outline'
                            size={25}
                        />
                    </Text>
                    <Text style={{ marginHorizontal: 10 , fontSize: 20 }}> 0 </Text>
                    <Text>
                        <Ionicons 
                            name='add-circle-outline'
                            size={25}
                        />
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
    }
})