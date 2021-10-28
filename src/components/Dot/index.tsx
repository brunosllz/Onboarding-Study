import React from 'react';
import {
    View
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { styles } from './styles';

import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { theme } from '../../global/theme';

type DotProps = {
    index: number;
    activeDotIndex: Animated.SharedValue<number>
}

export function Dot({ index, activeDotIndex }: DotProps) {
    const DotStyle = useAnimatedStyle(() => {
        const isActive = activeDotIndex.value === index;

        return {
            backgroundColor: withTiming(
                isActive ?
                    theme.COLORS.ACTIVE
                    :
                    theme.COLORS.INACTIVE,
                    {duration: 150}
            )
        }
    })

    return(
        <View style={styles.container}>
            <Animated.View style={[DotStyle, styles.dot]}/>
        </View>
    ) 
}