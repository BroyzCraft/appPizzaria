import React from 'react'
import {
    Text,
    StyleSheet,
    View
} from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <Text>Menu</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }

})