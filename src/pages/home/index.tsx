import { Sections } from "../../components/sections";
import { theme } from "../../globals/theme";
import { AboutUs } from '../about';
import { ContactUs } from '../contact';
import { Digital } from "../digital";
import { First } from '../first';
import { StyledContainer } from "../first/styles";
import { Products } from '../product';
import { ContainerLine, Line } from "./style";
import { useRef } from 'react';

export function Home() {

    return (
        <>
                <Sections id="section1">
                    <ContainerLine>
                        <Line
                            style={{
                                backgroundImage:
                                    "linear-gradient(#56d364, #727909 10%,#85862d 70%,#b76c1b 80%,#ea6045)",
                            }}
                        />
                    </ContainerLine>
                    <First />
                </Sections>

                <Sections
                    id="section2"
                    background={{
                        backgroundImage: `url(${theme.img.bannerTgid})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <Digital />
                </Sections>

                <Sections id="section3">
                    <ContainerLine>
                        <Line
                            style={{
                                backgroundImage:
                                    "linear-gradient(#ea6045,#791309 10%,#862d2d 70%,#b71b3a 80%,#ff0077)",
                            }}
                        />
                    </ContainerLine>
                    <StyledContainer>
                        <Products />
                    </StyledContainer>
                </Sections>

                <Sections
                    id="section4"
                    background={{
                        backgroundImage: `url(${theme.img.bannerGray})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <StyledContainer>
                        <AboutUs />
                    </StyledContainer>
                </Sections>

                <Sections id="section5">
                    <ContainerLine>
                        <Line
                            style={{
                                backgroundImage:
                                    "linear-gradient(#ff0077,#ff0050 10%,#ff1010 70%,#0a95ff 80%,#2c00ff)",
                            }}
                        />
                    </ContainerLine>
                    <StyledContainer>
                        <ContactUs />
                    </StyledContainer>
                </Sections>
        </>
    );
}