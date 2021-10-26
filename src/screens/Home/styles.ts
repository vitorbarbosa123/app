import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLACK_SECONDARY,
        paddingTop: getStatusBarHeight() + 17
    }
})