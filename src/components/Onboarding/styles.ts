import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/theme";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")

const CIRCLE_WIDTH = SCREEN_WIDTH * 0.7;

export const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        alignItems: "center",
        justifyContent: "center"
    },
    textWrapper: {
        alignItems: "center",
        justifyContent: "center",
    },
    description: {
        textAlign: "center",
        fontFamily: theme.FONTS.SEMI_BOLD,
        fontSize: RFValue(24),
        color: theme.COLORS.WHITE,
        marginBottom: RFValue(76) 
    },
    circleContainer: {
        width: CIRCLE_WIDTH,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    image:{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT * 0.48,
        aspectRatio: 1,
        position: "absolute"
    },
    circle: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: theme.COLORS.INACTIVE_LIGHT,
        borderRadius: CIRCLE_WIDTH / 2
    }
})