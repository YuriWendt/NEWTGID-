import { SectionButton } from "../../components/section-button";
import { Sections } from "../../components/sections";
import { Stack } from "../../effects/glitch/style";
import { Row } from "../../globals/grid";
import { theme } from "../../globals/theme";
import { Box, GlitchEffect, GradientBorder, Logo, SectionTwo, SectionTwoContent, SectionWrapper, Stick, StyledContainer, TextContent, TypingEffect } from "./style";
import { useState, useEffect } from 'react';

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
                    <Stick />
                    <Row>
                        <TextContent>
                            <h1>Soluções Digitais</h1>
                            <p>Nossa equipe multidisciplinar, somada à aplicação das melhores tecnologias existentes no mercado,
                                ajudará você a colocar o seu produto e sua empresa no Mercado. </p>
                        </TextContent>
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
                        <h2>Colocar uma ideia inovadora em prática não é uma tarefa fácil e você não precisa lidar com todo o processo sozinho!</h2>
                        <h2>Somos uma fábrica de startups que ajuda empreendedores a tirar seus projetos do papel –</h2>
                        <h2>planejando, desenvolvendo o seu produto e colocando sua empresa no mercado de forma rápida e eficiente </h2>
                    </SectionTwoContent>
                </SectionTwo>
            </Sections>

        </>

    )
}