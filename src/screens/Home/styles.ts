import { StyleSheet } from "react-native";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        backgroundColor: theme.COLORS.BACKGROUND,
        paddingTop: getStatusBarHeight() + RFPercentage(2),
        alignItems: "center",
        justifyContent: "space-between"
    },
    buttonContainer: {
        width: '100%', 
        paddingHorizontal: RFValue(24), 
        marginBottom: RFValue(42) 
    },
    buttonHeader: {
        justifyContent: "center",
        alignItems: "center", 
        alignSelf: 'flex-end'
    },
    buttonHeaderText: {
        fontSize: RFValue(14),
        fontFamily: theme.FONTS.REGULAR,
        color: theme.COLORS.WHITE
    },
    header: {
        alignItems: 'center', 
        justifyContent: 'center'
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingBottom: getBottomSpace() + RFPercentage(4)
    },
    paginator: {
        flex: 1,
        flexDirection: "row",
        left: 32,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonFooter: {
        backgroundColor: theme.COLORS.WHITE,
        width: 46,
        height: 46,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 23
    }
})