import { useEffect } from 'react';
import { Stack } from "../../effects/glitch/style";
import { Container } from "../../globals/grid";
import { theme } from "../../globals/theme";
import { useLoader } from "../../hooks/useLoader";
import { GlitchEffectStyled, Image, Objetive, StyledContainer, SubObjetive } from "./style";

export function AboutUs() {

    const { setIsLoading } = useLoader();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true); // Indica que a página está carregando
        }, 2000); // 2000ms = 2 segundos
        setIsLoading(false); // Indica que o carregamento foi concluído
    }, []);

    return (
        <Container>
            <GlitchEffectStyled style={{ width: '100%', marginTop: 100, marginBottom: 30 }}>
                <Stack index={0} stacks={3}>QUEM SOMOS</Stack>
            </GlitchEffectStyled>
            <Objetive>
                <SubObjetive>
                    <p>Para ajudar empreendedores a tirar projetos do papel, a TGID oferece ampla experiência em startups, com uma equipe altamente qualificada em diversas áreas empresariais.
                        Nós ajudamos você a construir seu produto e lançar sua empresa no mercado de forma rápida e eficiente. Transforme-se e cresça na era digital conosco!</p>
                    <StyledContainer>QUALIDADE</StyledContainer>
                    <StyledContainer>AGILIDADE</StyledContainer>
                    <StyledContainer>EFICIÊNCIA</StyledContainer>
                </SubObjetive>
                <SubObjetive>
                    <Image src={`${theme.img.About}`}></Image>
                </SubObjetive>
            </Objetive>
        </Container >
    )
}