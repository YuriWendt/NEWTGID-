import { useState } from "react";
import { FaHandsHelping } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import { Sections } from "../../components/sections";
import { theme } from "../../globals/theme";
import { AboutUs } from '../about';
import { ContactUs } from '../contact';
import { Digital } from "../digital";
import { First } from '../first';
import { StyledContainer } from "../first/styles";
import { Products } from '../product';
import { ContainerLine, IconsStyle, Line } from "./style";

export function Home() {

    const [inViewer, setInViewer] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '-100px 0px',
    });

    if (inView) {
        setInViewer(true);
    }

    return (
        <>
            <Sections id="section1" ref={ref}>
                <ContainerLine>
                    <Line style={{ backgroundImage: 'linear-gradient(#56d364, #727909 10%,#85862d 70%,#b76c1b 80%,#ea6045)' }} />
                </ContainerLine>
                <First />
            </Sections>

            <Sections
                id="section2"
                background={{
                    backgroundImage: `url(${theme.img.bannerTgid})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
                ref={ref}
                inViewer={inViewer}
            >
                <Digital />
            </Sections>

            <Sections id="section3" to="top" totwo="section3">
                <ContainerLine>
                    <Line style={{ backgroundImage: 'linear-gradient(#ea6045,#791309 10%,#862d2d 70%,#b71b3a 80%,#ff0077)' }} />
                </ContainerLine>
                <StyledContainer>
                    <Products />
                </StyledContainer>
            </Sections >


            <Sections id="section4" background={{
                backgroundImage: `url(${theme.img.bannerGray})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <StyledContainer>
                    <AboutUs />
                </StyledContainer>
            </Sections>


            <Sections id="section5" to="section4" totwo="section4" >
                <ContainerLine>
                    <Line style={{ backgroundImage: 'linear-gradient(#ff0077,#ff0050 10%,#ff1010 70%,#0a95ff 80%,#2c00ff)' }} />
                </ContainerLine>
                <StyledContainer>
                    <ContactUs />
                </StyledContainer>
            </Sections>
        </>

    )
}