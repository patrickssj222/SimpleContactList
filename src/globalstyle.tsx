import { Dimensions, PixelRatio } from 'react-native';
export enum Measurements {
    screenHeight = Dimensions.get('window').height,
    screenWidth = Dimensions.get('window').width
}
export function actuatedNormalize(fontSize: number) {
//Iphone 11 standard
    const scale = Measurements.screenHeight / 896
    const newSize = fontSize * scale
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

export const GlobalStyle = {
    fontSize:{
        headerFontSize: actuatedNormalize(30),
        titleFontSize: actuatedNormalize(26),
        contentLargerFontSize: actuatedNormalize(22),
        contentFontSize: actuatedNormalize(18),
        contentSmallerFontSize: actuatedNormalize(14),
        smallFontSize:actuatedNormalize(10),
        buttonFontSize: actuatedNormalize(20),
        largeHeaderFontSize: actuatedNormalize(34),
        xLargeHeaderFontSize: actuatedNormalize(38),
        xxLargeHeaderFontSize: actuatedNormalize(42),
        xxxLargeHeaderFontSize: actuatedNormalize(46),
    },
    size:{
        headerIconSize: 34,
        smallerHeaderIconSize: 28,
        tabIconSize:22
    },
    fontFamily:{
        defaultFontFamily: "Helvetica Neue",
    },
    color:{
        positiveColor: "green",
        positiveBackgroundColor: "#1CCE99",
        negativeColor: "red",
        neutralColor: "rgba(0,0,0,0.2)",
        opaqueFontColor: "rgba(0,0,0,0.5)",
        buttonDefaultBackgroundColor: "#2C4CFF",
        buttonDefaultFontColor: "white",
        opaqueBorderColor: "rgba(0,0,0,0.3)",
        errorFontColor: "red",
        primaryColor: "white",
        secondaryColor: "black",
        tertiaryColor: "#005cfd",
        disabled: 'rgba(0,0,0,0.3)',
        verifiedGreen: '#1FCE98',
        unverifiedRed: '#C60232',
        hyperlink: '#0645AD',
        primaryBarStyle: "light-content",
        secondaryBarStyle: "dark-content",
        lightBorderColor: "rgba(0,0,0,0.1)",
    },
    padding:{
        vertical:{
            containerPaddingVertical: Measurements.screenHeight*0.05,
            elementPaddingVertical: Measurements.screenHeight*0.03,
            buttonPaddingVertical: 15,
        },
        horizontal:{
            containerPaddingHorizontal: Measurements.screenWidth*0.05,
            elementPaddingHorizontal: Measurements.screenWidth*0.03,
            buttonPaddingHorizontal: 15,
        }
    },
    margin:{
        vertical:{
            containerMarginVertical: Measurements.screenHeight*0.1,
            elementMarginVertical: Measurements.screenHeight*0.02,
        },
        horizontal:{
            containerMarginHorizontal: Measurements.screenWidth*0.1,
            elementMarginHorizontal: Measurements.screenWidth*0.05,
        }
    }
}
