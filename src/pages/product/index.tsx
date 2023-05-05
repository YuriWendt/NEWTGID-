import { useState } from 'react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Stack } from "../../effects/glitch/style";
import { theme } from '../../globals/theme';
import { CardTypes } from '../../types/CardsTypes';
import { GlitchEffect } from '../first/styles';
import { Card, CardBackground, CardContent, ContainerStyled, LogoCard, SwiperContent, SwiperSlideStyled, SwiperStyled } from "./style";
import { Container } from '../../globals/grid';


export function Products() {

    const slides = CardTypes;

    const [activeSlide, setActiveSlide] = useState(0);
    const [cardEffect, setCardEffect] = useState("");

    function handleSlideChange(index: any) {
        setActiveSlide(index);
    };

    return (
        <>
            <ContainerStyled>
                <div style={{ paddingTop: 50 }}>
                    <GlitchEffect>
                        <Stack index={0} stacks={3}>Nossos Produtos</Stack>
                    </GlitchEffect>
                </div>
                <div>
                    <Card isSelected={activeSlide === activeSlide} backgroundImage={slides[activeSlide].banner} className={cardEffect}>
                        <CardBackground isSelected={activeSlide === activeSlide} backgroundImage={slides[activeSlide].banner}>
                        </CardBackground>
                        <LogoCard>
                            <img src={slides[activeSlide].app}></img>
                        </LogoCard>
                        <CardContent>{slides[activeSlide].description}</CardContent>
                    </Card>
                </div>
                <ContainerStyled>
                    <SwiperStyled
                        slidesPerView={3}
                        centeredSlides={true}
                        spaceBetween={30}
                        pagination={{
                            type: "custom",
                        }}
                        initialSlide={1} // Define o slide inicial
                        loop={true} // Habilita o looping
                        navigation={true}
                        onSlideChange={({ realIndex }) => handleSlideChange(realIndex)}
                        modules={[Pagination, Navigation]}
                        effect="coverflow" // Atualize a opção "effect" para o efeito desejado
                        coverflowEffect={{
                            rotate: 0, // Defina a rotação desejada
                            stretch: 0, // Defina o estiramento desejado
                            depth: 100, // Defina a profundidade desejada
                            modifier: 1, // Defina o modificador desejado
                            slideShadows: false, // Defina se as sombras dos slides estão habilitadas ou não
                        }}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlideStyled key={slide.id} isSelected={activeSlide === index}>
                                <SwiperContent>
                                    <svg className="swiper-slide-background" xmlns="http://www.w3.org/2000/svg">
                                        <rect fill="transparent" stroke={`${theme.img.borderCard}`} />
                                        <image x="" y="" width="100%" height="50%" fill='transparent' href={theme.img.backgroundCardSelected} />
                                    </svg>
                                    <img src={slide.image} alt={`Slide ${index}`} />
                                </SwiperContent>
                            </SwiperSlideStyled>
                        ))}
                    </SwiperStyled>
                </ContainerStyled>
            </ContainerStyled>
        </>
    )
}