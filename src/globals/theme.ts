import LogoPng from '../assets/logo.png'
import LogoWhitePng from '../assets/logo-white.png'
import LogoTextPng from '../assets/logo-name.png'
import BackgroundGradientPng from '../assets/backgroundgradient.png'
import BackgroundCardPng from '../assets/backgroundCard.png'
import SafeWayLogo from '../assets/safeway.png'
import DesconfieLogo from '../assets/desconfieja.png'
import LevelLogo from '../assets/level.png'
import BlbrokersLogo from '../assets/blbrokers.png'
import ArckpayLogo from '../assets/arckpay.png'
import LogtrackLogo from '../assets/logtrack.png'
import BannerTGIDPng from '../assets/bannertgid.png'
import Team from '../assets/team.jpeg'
import CardBorder from '../assets/bt.png'
import CardBorderSelected from '../assets/bt_selected.png'
import AppSafeway from '../assets/safeway/computer.png'
import AppDescomplica from '../assets/desconfieja/feature-1.png'
import AppLogtrack from '../assets/logtrack/feature-1.png'
import AppBlbrockers from '../assets/blbrokers/tecnologia-icon.svg'
import AppLevel from '../assets/level/feature-2.jpg'
import AppArckpay from '../assets/arckpay/mockup06.png'
import BannerBlbrockersPng from '../assets/blbrokers/bannerbl.png'
import BannerDescomplicaPng from '../assets/desconfieja/banner-desconfie.png'
import BannerLevelPng from '../assets/level/banner-level-1.jpg'
import BannerLogtrackPng from '../assets/logtrack/banner-logtrack.jpg'
import BannerSafewayPng from '../assets/safeway/banner-2.webp'
import BannerArckpayPng from '../assets/arckpay/banneraarckpay.png'
import Btnext from '../assets/bt_arrow.png'


export const theme = {
    colors: 
    {
        primary: {
            color100:       '#0e1012',
            color80:        '#15181a',
            color60:        '#434647',
            color40:        '#80A0C6',
            color20:        '#C7D5E6'
        }, 
        secondary: {
            color100:       '#a8812d',
            color80:        '#F1B941',
            color60:        '#f3c767',
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
        //LOGOS
        logo: LogoPng,
        logoWhite: LogoWhitePng,
        logoText: LogoTextPng,
        safewaylogo: SafeWayLogo,
        Logtrack: LogtrackLogo,
        descofielogo: DesconfieLogo,
        levellogo: LevelLogo,
        blbrokers: BlbrokersLogo,
        arckpay: ArckpayLogo,
        //Background
        backgroundgradient: BackgroundGradientPng,
        backgroundCardUnselected: CardBorder,
        backgroundCardSelected: CardBorderSelected,
        //Banners
        bannerTgid: BannerTGIDPng,
        bannerBlbrockers: BannerBlbrockersPng,
        bannerDescomplica: BannerDescomplicaPng,
        bannerLevel: BannerLevelPng,
        bannerLogtrack: BannerLogtrackPng,
        bannerSafeway: BannerSafewayPng,
        bannerArckpay: BannerArckpayPng,
        team: Team,
        //Randoms
        borderCard: CardBorder,
        AppBlbrockers: AppBlbrockers,
        AppDescomplica: AppDescomplica,
        AppLevel: AppLevel,
        AppLogtrack: AppLogtrack,
        AppSafeway: AppSafeway,
        AppArckpay: AppArckpay,
        BtNext: Btnext,
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