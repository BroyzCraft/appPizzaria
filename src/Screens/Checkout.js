import React from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import ModalCheckout from '../components/modalCheckout'

export default props => {
    return (
        <View style={styles.container}>
            <ModalCheckout />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})