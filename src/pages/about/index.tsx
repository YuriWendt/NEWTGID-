import { Container } from "../../globals/grid";
import { useEffect } from 'react';
import { useLoader } from "../../hooks/useLoader";
import { MoreButton } from "../../components/more-button";
import { theme } from "../../globals/theme";
import { Stack } from "../../effects/glitch/style";
import { Objetive, StyledContainer, StyledContent, SubObjetive } from "./style";
import { GlitchEffect } from "../first/styles";

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
            <GlitchEffect>
                <Stack index={0} stacks={3}>QUEM SOMOS</Stack>
            </GlitchEffect>
            <StyledContent>
                <Objetive>
                    <SubObjetive>
                        <p>Para ajudar empreendedores a tirar projetos do papel, a TGID oferece ampla experiência em startups, com uma equipe altamente qualificada em diversas áreas empresariais.
                            Nós ajudamos você a construir seu produto e lançar sua empresa no mercado de forma rápida e eficiente. Transforme-se e cresça na era digital conosco!</p>
                            <StyledContainer>QUALIDADE</StyledContainer>
                            <StyledContainer>AGILIDADE</StyledContainer>
                            <StyledContainer>EFICIÊNCIA</StyledContainer>
                    </SubObjetive>
                    <SubObjetive>
                        <img src={`${theme.img.About}`}></img>
                    </SubObjetive>
                </Objetive>
                {/* <div>
                    <img src={`${theme.img.team}`} style={{
                        width: 700,
                        height: 500,
                        letterSpacing: 2,
                        border: `solid 2px ${theme.colors.secondary.color100}`,
                        borderRadius: 8
                    }}></img>
                </div> */}

            </StyledContent>
        </Container >
    )
}