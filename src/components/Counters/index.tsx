import { View, Text, StyleSheet } from "react-native";
import { colors, fonts, metrics } from "../../values";

export type CounterProps = {
    created: number,
    completed: number
}

export function Counters( { created, completed }: CounterProps ) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.createdText}>Criadas</Text>
                <Text style={styles.countText}>{ created || 0 }</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.completedText}>Concluídas</Text>
                <Text style={styles.countText}>{ completed || 0 }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        paddingHorizontal: metrics.size.bigger,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: metrics.size.big
    },
    createdText: {
        color: colors.primary,
        fontSize: fonts.small,
        fontWeight: 'bold'
    },
    completedText: {
        color: colors.secondary,
        fontSize: fonts.small,
        fontWeight: 'bold'
    },
    countText: {
        color: colors.gray100,
        backgroundColor: colors.gray400,
        paddingHorizontal: metrics.size.medium,
        borderRadius: 999,
        fontWeight: 'bold',
        marginLeft: metrics.size.small
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})