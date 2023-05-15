import { MoreButton } from "../../components/more-button";
import { Stack } from "../../effects/glitch/style";
import { theme } from "../../globals/theme";
import { Div, DivStyled, GlitchEffect, Logo, MoreButtonStyled, SectionWrapper, StyledContainer, TextContent } from "./styles";


export function First() {
    return (
            <StyledContainer>
                <Div>
                    <Logo src={theme.img.logoWhiteName} />
                    <GlitchEffect>
                        <Stack index={0} stacks={3}>Transform</Stack>
                        <Stack index={1} stacks={3}>and grow</Stack>
                        <Stack index={2} stacks={3}>in digital</Stack>
                    </GlitchEffect>
                </Div>
                <Div>
                    <TextContent>
                        <h1>Soluções Digitais</h1>
                        <p>Nossa equipe multidisciplinar, somada à aplicação das melhores tecnologias existentes no mercado,
                            ajudará você a colocar o seu produto e sua empresa no Mercado. </p>
                        <MoreButtonStyled>
                            <MoreButton content={'Saiba Mais'} link={'/products'} />
                        </MoreButtonStyled>
                    </TextContent>
                </Div>
            </StyledContainer>
    )
}