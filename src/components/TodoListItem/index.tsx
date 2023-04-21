import { View, Text, TouchableOpacity, Image, StyleSheet, ImageURISource } from "react-native"
import { colors, metrics, fonts } from "../../values"

import { Task } from "../../types"

export type TodoListItemProps = {
    data: Task,
    onDelete: () => void,
    onToggle: () => void
}

export function TodoListItem( { data, onDelete, onToggle }: TodoListItemProps ) {

    let checkImage: ImageURISource
    let textColor: string
    let textDecoration: any

    if (data.isDone) {
        checkImage = require('../../../assets/check-true.png')
        textColor = colors.gray300
        textDecoration = styles.textDecoration
    } else {
        checkImage = require('../../../assets/check-false.png')
        textColor = colors.gray100
        textDecoration = null
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={onToggle}>
                <Image source={checkImage} />
            </TouchableOpacity>

            <Text style={{ ...styles.descriptionText, ...textDecoration, color: textColor }}>{ data.description }</Text>

            <TouchableOpacity onPress={onDelete}>
                <Image source={require('../../../assets/trash.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: metrics.size.base,
        height: 64,
        backgroundColor: colors.gray500,
        marginBottom: metrics.size.small,
        borderRadius: metrics.borderRadius,
        borderWidth: 2,
        borderColor: colors.gray400

    },
    descriptionText: {
        color: colors.gray100,
        flex: 1,
        fontSize: fonts.medium,
        marginLeft: metrics.size.medium,
    },
    textDecoration: {
        textDecorationLine: 'line-through'
    }
})