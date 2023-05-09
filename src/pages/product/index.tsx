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
import { Card, CardBackground, CardContent, ContainerStyled, ContainerStyledMobile, GlitchEffectStyled, ImageMobile, LogoCard, SwiperBackgroundImage, SwiperContent, SwiperProductsImage, SwiperRect, SwiperSlideStyled, SwiperStyled } from "./style";


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
                <GlitchEffect style={{ width: '100%', marginTop: 100, marginBottom: 30 }}>
                    <Stack index={0} stacks={3}>Nossos Produtos</Stack>
                </GlitchEffect>
                <Card isSelected={activeSlide === activeSlide} backgroundImage={slides[activeSlide].banner} className={cardEffect}>
                    <CardBackground isSelected={activeSlide === activeSlide} backgroundImage={slides[activeSlide].banner} />
                    <LogoCard>
                        <img src={slides[activeSlide].app}></img>
                    </LogoCard>
                    <CardContent>{slides[activeSlide].description}</CardContent>
                </Card>
                <SwiperStyled
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={-50}
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
                            <SwiperProductsImage src={slide.image} alt={`Slide ${index}`} />
                            <SwiperContent>
                                <svg className="swiper-slide-background" xmlns="http://www.w3.org/2000/svg">
                                    <SwiperRect />
                                    <SwiperBackgroundImage href={theme.img.backgroundCardSelected} />
                                </svg>
                            </SwiperContent>
                        </SwiperSlideStyled>
                    ))}
                </SwiperStyled>
                <ContainerStyledMobile>
                    <GlitchEffectStyled>
                        <Stack index={0} stacks={3}>Nossos Produtos</Stack>
                    </GlitchEffectStyled>
                    {slides.map((slide, index) => (
                        <div key={slide.id}>
                            <ImageMobile src={slide.image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </ContainerStyledMobile>
            </ContainerStyled>

        </>
    )
}