import { useState } from "react";
import { useInView } from 'react-intersection-observer';
import { Sections } from "../../components/sections";
import { theme } from "../../globals/theme";
import { AboutUs } from '../about';
import { ContactUs } from '../contact';
import { Digital } from "../digital";
import { First } from '../first';
import { StyledContainer } from "../first/styles";
import { Products } from '../product';
import { Icons, IconsStyle, Line } from "./style";
import { FaHandsHelping } from "react-icons/fa"
import { RiContactsFill } from "react-icons/ri"

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
                <Line style={{ backgroundImage: 'linear-gradient(#d2a8ff,#a371f7 10%,#196c2e 70%,#2ea043 80%,#56d364)' }} />
                <StyledContainer>
                    <Products />
                </StyledContainer>
            </Sections >

            <Icons><IconsStyle><FaHandsHelping size={30} /></IconsStyle><FaHandsHelping size={30} /></Icons>

            <Sections id="section4" >
                <Line style={{ backgroundImage: 'linear-gradient(#56d364, #727909 10%,#85862d 70%,#b76c1b 80%,#ea6045)' }} />
                <StyledContainer>
                    <AboutUs />
                </StyledContainer>
            </Sections>

            <Icons><IconsStyle><RiContactsFill size={30} /></IconsStyle><RiContactsFill size={30} /></Icons>

            <Sections id="section5" to="section4" totwo="section4" >
                <Line style={{ backgroundImage: 'linear-gradient(#ea6045,#791309 10%,#862d2d 70%,#b71b3a 80%,#ff0077)' }} />
                <StyledContainer>
                    <ContactUs />
                </StyledContainer>
            </Sections>
        </>

    )
}