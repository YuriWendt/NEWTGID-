import { useEffect } from 'react';
import { SectionButton } from "../../components/section-button";
import { Sections } from "../../components/sections";
import { Stack } from "../../effects/glitch/style";
import { Row } from "../../globals/grid";
import { theme } from "../../globals/theme";
import { GlitchEffect, Logo, MoreButtonStyled, SectionTwo, SectionTwoContent, SectionWrapper, Stick, StyledContainer, SubText, TextContent, TypingEffect } from "./style";
import { MoreButton } from '../../components/more-button';

export function Home() {


    useEffect(() => {
    }, []);

    return (
        <>
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
                            <MoreButtonStyled>
                                <MoreButton content={'Saiba Mais'}/>
                            </MoreButtonStyled>
                    </Row>
                </StyledContainer>
            </SectionWrapper>


            <SectionButton to="section2" styles='{"position": "absolute", "right": "51%", "bottom": "5%"}' />


            <Sections
                id="section2"
                background={{
                    backgroundImage: `url(${theme.img.bannerTgid})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
                to="top"
                styles={'{"position": "absolute", "right": "51%", "top": "115%"}'}
                totwo="section3"
                stylestwo='{"position": "absolute", "right": "51%", "top": "200%"}'>
                <SectionTwo>
                    <SectionTwoContent>
                        <TypingEffect>
                            TRANSFORME-SE EM DIGITAL
                        </TypingEffect>
                        <SubText>Colocar uma ideia inovadora em prática pode ser desafiador, mas você não precisa enfrentar esse processo sozinho!
                            Nós somos uma fábrica de startups dedicada a ajudar empreendedores a tirarem seus projetos do papel de maneira eficiente e rápida,
                            por meio do planejamento, desenvolvimento de produtos e inserção da sua empresa no mercado.</SubText>
                    </SectionTwoContent>
                </SectionTwo>
            </Sections>

        </>

    )
}