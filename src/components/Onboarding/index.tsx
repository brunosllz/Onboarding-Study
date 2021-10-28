import React from 'react';
import { 
    View,
    Text,
    Image,
} from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

import { OnboardingProps } from '../../utils/slides';

import { SCREEN_WIDTH, styles } from './styles';

type SlideProps = {
    slide: OnboardingProps;
    index: number;
    translateX: Animated.SharedValue<number>;
}

export function Onboarding({ slide, translateX, index }: SlideProps) {
    const rCicleStyle = useAnimatedStyle(() => {
        const imputRange = [
            (index-1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
        ];
        const scale = interpolate(translateX.value, imputRange, [0, 1, 0], Extrapolate.CLAMP)
        
        return {
            transform: [{scale}]
        }
    })

    return(
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Text style={styles.description}>
                    {slide.description}
                </Text>
            </View>

            <View style={styles.circleContainer}>
                <Animated.View style={[rCicleStyle, styles.circle]}/>

                <Image
                    resizeMode='contain'
                    source={slide.source}
                    style={styles.image}
                />       
            </View>
        </View>
    ) 
}