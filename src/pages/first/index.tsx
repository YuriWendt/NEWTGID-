import { MoreButton } from "../../components/more-button";
import { Stack } from "../../effects/glitch/style";
import { Row } from "../../globals/grid";
import { theme } from "../../globals/theme";
import { GlitchEffect, Logo, MoreButtonStyled, SectionWrapper, StyledContainer, TextContent } from "./styles";


export function First() {
    return (
        <SectionWrapper id="section1">
            <StyledContainer>
                <Row>
                    <Logo src={theme.img.logoWhite} />
                    <GlitchEffect>
                        <Stack index={0} stacks={3}>Transform</Stack>
                        <Stack index={1} stacks={3}>and glow</Stack>
                        <Stack index={2} stacks={3}>in digital</Stack>
                    </GlitchEffect>
                </Row>
                <Row>
                    <TextContent>
                        <h1>Soluções Digitais</h1>
                        <p>Nossa equipe multidisciplinar, somada à aplicação das melhores tecnologias existentes no mercado,
                            ajudará você a colocar o seu produto e sua empresa no Mercado. </p>
                    </TextContent>
                    <MoreButtonStyled >
                        <MoreButton content={'Saiba Mais'} link={'/products'} />
                    </MoreButtonStyled>
                </Row>
            </StyledContainer>
        </SectionWrapper>
    )
}