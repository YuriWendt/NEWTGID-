import { Container } from "../../globals/grid";
import { useEffect } from 'react';
import { useLoader } from "../../hooks/useLoader";
import { MoreButton } from "../../components/more-button";
import { theme } from "../../globals/theme";
import { GlitchEffect } from "../home/style";
import { Stack } from "../../effects/glitch/style";
import { StyledContent } from "./style";

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
                <MoreButton content={<img src={`${theme.img.team}`} style={{
                    width: 700,
                    height: 500,
                    border: `solid 2px ${theme.colors.secondary.color100}`,
                    borderRadius: 8
                }}></img>} />

                <h2>Com o propósito de ajudar empreendedores a tirar seus projetos do papel, contando com ampla experiência nas necessidades do mercado de startups, nasceu a TGID. Temos uma equipe altamente qualificada, atuante nas mais variadas áreas empresariais, com o intuito de ajudar você a construir o seu produto e a colocar sua empresa no mercado de forma rápida e eficiente.

                    Transforme-se e cresça na era digital, venha fazer parte do nosso ecossistema.</h2>
            </StyledContent>
        </Container>
    )
}