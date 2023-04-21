import { View, Text, Image, StyleSheet } from "react-native"
import { colors, metrics, fonts } from "../../values"

export function EmptyListItem() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../../assets/clipboard.png')}
            />
            <Text style={{...styles.text, ...styles.textWeight}}>
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.text}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 2,
        borderTopColor: colors.gray400,
        paddingTop: 46,
        alignItems: 'center'
    },
    image: {
        marginBottom: metrics.size.big
    },
    text: {
        color: colors.gray300,
        fontSize: fonts.medium
    },
    textWeight: {
        fontWeight: 'bold'
    }
})