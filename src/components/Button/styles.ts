import { StyleSheet } from "react-native";
import { fonts } from "../../../assets/theme";

export const styles = StyleSheet.create({
    button: {
       height: 48,
       width: '100%',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center'
    },
    title: {
        fontSize: 14,
        fontFamily: fonts.BOLD
    }

})