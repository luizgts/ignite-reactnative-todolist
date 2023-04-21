import { StatusBar } from "react-native"

export default {
    borderRadius: 8,
    statusBarHeight: StatusBar.currentHeight as number,
    size: {
        tiny: 4,
        small: 8,
        medium: 12,
        base: 14,
        regular: 16,
        big: 20,
        bigger: 24
    },
    layer: {
        front: 100,
        middle: 50,
        back: 0
    }
}