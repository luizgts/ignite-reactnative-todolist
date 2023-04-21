import { StyleSheet, View, Image } from "react-native";
import { colors, metrics } from "../../values";


export function Header() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/logo.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: metrics.statusBarHeight + 140,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.gray700
    },
    logo: {
        width: 111,
        height: 32
    }
})