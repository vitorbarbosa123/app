import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../assets/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 36
    },
    message: {
        fontSize: 15,
        fontFamily: fonts.REGULAR,
        color: colors.WHITE,
        lineHeight: 20,
        marginBottom: 12
    },
    userName: {
        fontSize: 15,
        fontFamily: fonts.REGULAR,
        color: colors.WHITE,
        marginLeft: 16
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    }
})