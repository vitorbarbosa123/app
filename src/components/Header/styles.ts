import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../assets/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    logoutText: {
        fontSize: 15,
        fontFamily: fonts.REGULAR,
        color: colors.WHITE,
        marginRight: 20
    }
})