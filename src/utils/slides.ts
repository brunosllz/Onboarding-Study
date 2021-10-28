import { ImageProps } from "react-native";

export type OnboardingProps = Pick<ImageProps, 'source'> & {
    description: string;
}

export const SLIDES: OnboardingProps[] = [
    {
        description: "Save Food\nwith our new\nfeature!",
        source: require("../assets/image_1.png")
    },
    {
        description: "Set preferences for\nmultiple users from\nvarious restaurants!",
        source: require('../assets/image_2.png')
    },
    {
        description: "Fast, rescued\nFood at your\nservice.",
        source: require('../assets/image_3.png')
    }
] 