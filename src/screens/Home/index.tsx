import React, { useCallback } from 'react';
import {
    View,
    Text,
    Image, 
    ScrollView
} from 'react-native';
import Animated, { 
    useAnimatedRef,
    useAnimatedScrollHandler, 
    useDerivedValue, 
    useSharedValue
} from 'react-native-reanimated';

import { BorderlessButton } from 'react-native-gesture-handler';

import { SLIDES } from '../../utils/slides';
import { SCREEN_WIDTH } from '../../components/Onboarding/styles';
import { styles } from './styles';

import { Onboarding } from '../../components/Onboarding';
import { Dot } from '../../components/Dot';
import Logo from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';

export function Home() {
    const translateX = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            translateX.value = event.contentOffset.x;
        },
    })

    const activeIndex = useDerivedValue(() => {
        return Math.round(translateX.value / SCREEN_WIDTH);
    })

    const scrollRef = useAnimatedRef<ScrollView>();
    const handleNextPage = useCallback(() => {
        if(activeIndex.value === SLIDES.length -1) return;

        scrollRef.current?.scrollTo({x: SCREEN_WIDTH * (activeIndex.value + 1)})
    }, [])

    return(
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <BorderlessButton 
                    style={styles.buttonHeader}
                    onPress={() => {}}    
                >
                    <Text style={styles.buttonHeaderText}>
                        SKIP 
                    </Text>
                </BorderlessButton>
            </View>

            <View style={styles.header}>
                <Image source={Logo} width={20} height={20}/>
            </View>

            <Animated.ScrollView
                ref={scrollRef as any}
                horizontal
                pagingEnabled
                contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
                showsHorizontalScrollIndicator={false}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
            >
                {
                    SLIDES.map((slide, index) => 
                        <Onboarding
                            key={index.toString()}
                            slide={slide}
                            index={index}
                            translateX={translateX}
                        />        
                    )
                }
            </Animated.ScrollView>

            <View style={styles.footer}>
                <View style={styles.paginator}>
                        {
                            SLIDES.map((_, index) => 
                                <Dot
                                    key={index.toString()}
                                    index={index}
                                    activeDotIndex={activeIndex}
                                />
                            )
                        }
                </View>
                
                <BorderlessButton style={styles.buttonFooter}>
                    <Feather 
                        name="arrow-right" 
                        size={24} 
                        color={theme.COLORS.BACKGROUND}
                        onPress={handleNextPage}    
                    />
                </BorderlessButton>
            </View>
        </View>
    )
}