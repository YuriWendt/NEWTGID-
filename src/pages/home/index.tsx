import { SectionButton } from "../../components/section-button";
import { Sections } from "../../components/sections";
import { SliderComponent } from "../../components/slider";
import { Stack } from "../../effects/glitch/style";
import { Row } from "../../globals/grid";
import { theme } from "../../globals/theme";
import { GlitchEffect, Logo, SectionWrapper, SliderList, Stick, StyledContainer, TextContent } from "./style";

export function Home() {

    const characters = [
        { id: 1, name: 'Personagem 1', image: `${theme.img.safewaylogo}` },
        { id: 2, name: 'Personagem 2', image: `${theme.img.descofielogo}` },
        { id: 3, name: 'Personagem 3', image: `${theme.img.levellogo}` },
        { id: 4, name: 'Personagem 4', image: `${theme.img.blbrokers}` },
      ];

      function handleCharacterSelect(characterId: number)  {
        console.log(`Personagem selecionado: ${characterId}`);
        // Lógica para tratar a seleção do personagem
      };
      
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
                id="section2" to="top" styles={'{"position": "absolute", "right": "51%", "top": "115%"}'}
                totwo="section3" stylestwo='{"position": "absolute", "right": "51%", "top": "200%"}'>
                
                <SliderList><SliderComponent /></SliderList>


            </Sections>

            <Sections
                id="section3" to="section2" styles={'{"position": "absolute", "right": "51%", "top": "215%"}'}
                totwo="section3" stylestwo='{"position": "absolute", "right": "51%", "top": "200%"}'>

            </Sections>

        </>

    )
}