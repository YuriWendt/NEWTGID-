import { useEffect, useRef } from "react";
import { Sections } from "../../components/sections";
import { theme } from "../../globals/theme";
import { AboutUs } from '../about';
import { ContactUs } from '../contact';
import { First } from '../first';
import { StyledContainer } from "../first/styles";
import { Products } from '../product';
import { SectionAtual, SectionTwoContent, SubText, TypingEffect } from "./style";

export function Home() {

    const section1Ref = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);
    const section3Ref = useRef<HTMLDivElement>(null);
    const section4Ref = useRef<HTMLDivElement>(null);
    const section5Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, options);

        const section1Node = section1Ref.current;
        const section2Node = section2Ref.current;
        const section3Node = section3Ref.current;
        const section4Node = section4Ref.current;
        const section5Node = section5Ref.current;

        if (section1Node) {
            observer.observe(section1Node);
        }
        if (section2Node) {
            observer.observe(section2Node);
        }
        if (section3Node) {
            observer.observe(section3Node);
        }
        if (section4Node) {
            observer.observe(section4Node);
        }
        if (section5Node) {
            observer.observe(section5Node);
        }

        return () => {
            if (section1Node) {
                observer.unobserve(section1Node);
            }
            if (section2Node) {
                observer.unobserve(section2Node);
            }
            if (section3Node) {
                observer.unobserve(section3Node);
            }
            if (section4Node) {
                observer.unobserve(section4Node);
            }
            if (section5Node) {
                observer.unobserve(section5Node);
            }
        };
    }, [section1Ref, section2Ref, section3Ref, section4Ref, section5Ref]);

    return (
        <>
            <SectionAtual ref={section1Ref}>
                <Sections id="section1" ref={section1Ref}>
                    <First />
                </Sections>
            </SectionAtual>

            <SectionAtual ref={section2Ref}>
                <Sections
                    id="section2"
                    background={{
                        backgroundImage: `url(${theme.img.bannerTgid})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                    ref={section2Ref}
                >
                    <StyledContainer >
                        <SectionTwoContent sectionAtual>
                            <TypingEffect>
                                TRANSFORME-SE EM DIGITAL
                            </TypingEffect>
                            <SubText>Colocar uma ideia inovadora em prática pode ser desafiador, mas você não precisa enfrentar esse processo sozinho!
                                Nós somos uma fábrica de startups dedicada a ajudar empreendedores a tirarem seus projetos do papel de maneira eficiente e rápida,
                                por meio do planejamento, desenvolvimento de produtos e inserção da sua empresa no mercado.</SubText>
                        </SectionTwoContent>
                    </StyledContainer>
                </Sections>
            </SectionAtual>

            <SectionAtual ref={section3Ref}>
                <Sections id="section3" to="top" totwo="section3">
                    <Products />
                </Sections >
            </SectionAtual>


            <Sections id="section4" to="section3" totwo="section4" >
                <StyledContainer>
                    <AboutUs />
                </StyledContainer>
            </Sections>

            <Sections id="section5" to="section4" totwo="section4" >
                <StyledContainer>
                    <ContactUs />
                </StyledContainer>
            </Sections>
        </>

    )
}