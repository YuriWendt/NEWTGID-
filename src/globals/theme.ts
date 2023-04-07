import LogoPng from '../assets/logo.png'
import LogoWhitePng from '../assets/logo-white.png'
import LogoTextPng from '../assets/logo-name.png'
import BackgroundPng from '../assets/background.png'
import SafeWayLogo from '../assets/safeway.png'
import DesconfieLogo from '../assets/desconfieja.png'
import LevelLogo from '../assets/level.png'
import BlbrokersLogo from '../assets/blbrokers.png'
import ArckpayLogo from '../assets/arckpay.png'


export const theme = {
    colors: 
    {
        primary: {
            color100:       '#192738',
            color80:        '#263B54',
            color60:        '#466C9B',
            color40:        '#80A0C6',
            color20:        '#C7D5E6'
        }, 
        secondary: {
            color100:       '#F1B941',
            color80:        '#F4C767',
            color60:        '#F6D58D',
            color40:        '#F9E3B3',
            color20:        '#FCF1D9'
        },
        
        red:{
            color100:       '#E53935',
            color80:        '#EA5F5D',
            color60:        '#EF8281',
            color40:        '#F3A6A5',
            color20:        '#F8CAC9',
            color10:        '#fDEDED'
        },
        green:{
            color100:       '#31C48D',
            color80:        '#5CD6A9',
            color60:        '#8DE2C3',
            color40:        '#BEEFDD',
            color20:        '#EFFBF6'
        },
        blue: {
            color100:       '#0D70E7',
            color80:        '#3E90F4',
            color60:        '#78B1F7',
            color40:        '#82D3FB',
            color20:        '#ECF4FE'
        },
        black: {
            color100:       '#0A0A0A',
            color80:        '#3D3D3D',
            color60:        '#707070',
            color40:        '#E5E5E5',
            color20:        '#D6D6D6'
        },
        yellow:             '#ecfc029b',
        white:              '#FFFFFF',
        lightBlue:          '#92D0FF',
    },
    img: {
        logo: LogoPng,
        logoWhite: LogoWhitePng,
        logoText: LogoTextPng,
        background: BackgroundPng,
        safewaylogo: SafeWayLogo,
        descofielogo: DesconfieLogo,
        levellogo: LevelLogo,
        blbrokers: BlbrokersLogo,
        arckpay: ArckpayLogo,
    },
    icon: {
    },
    screenSizes: {
        mobile: 'only screen and (max-width: 767px)',
        tablet: 'only screen and (min-width: 768px) and (max-width: 1023px)',
        smallScreen: 'only screen and (max-width: 1023px)',
        desktop: 'only screen and (min-width: 1024px)'
    }
}