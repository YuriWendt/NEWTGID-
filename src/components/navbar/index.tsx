import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { theme } from "../../globals/theme";
import { ButtomMobile, Content, Items, List, Logo, MenuContainer, StyledContainer, SubList, TextLogo } from "./style";

type RouteType = {
    name: string,
    path: string,
    component?: React.ReactNode,
    isOpen: boolean
}

export function Navbar() {

    const navigate = useNavigate();
    const [routes, setRoutes] = useState<RouteType[]>([]);
    const [isMobile, setIsMobile] = useState(false);
    const [builtRoutes, setBuiltRoutes] = useState(false);

    function toggleMenu() {
        setIsMobile(!isMobile);
    }

    function buildRoutes() {
        let build: RouteType[] = [
            { name: 'Inicio', path: '#section1', isOpen: false },
            { name: 'Digital', path: '#section2', isOpen: false },
            { name: 'Nossos Produtos', path: '#section3', isOpen: false },
            { name: 'Quem Somos', path: '#section4', isOpen: false },
            { name: 'Entre em Contato', path: '#section5', isOpen: false },
        ]

        setRoutes(build);
        setBuiltRoutes(true)
    }

    function redirect(path: string) {
        navigate(path);
        setIsMobile(false);
    }

    function handleScrollToSection(id: string) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }


    function handleRoute(route: RouteType) {
        let sectionId = '';
        switch (route.path) {
            case '#section1':
                sectionId = 'section1';
                break;
            case '#section2':
                sectionId = 'section2';
                break;
            case '#section3':
                sectionId = 'section3';
                break;
            case '#section4':
                sectionId = 'section4';
                break;
            case '#section5':
                sectionId = 'section5';
                break;
            default:
                sectionId = '';
                break;
        }
        if (sectionId !== '') {
            handleScrollToSection(sectionId);
        } else {
            redirect(route.path);
        }
    }

    useEffect(() => {
        buildRoutes()
    }, []);

    return (
        <>
            <StyledContainer id="top">
                <Content onClick={() => redirect('/')} style={{ cursor: 'pointer' }}>
                    <Logo src={theme.img.logoWhiteName} />
                </Content>
                <ButtomMobile onClick={() => toggleMenu()}><AiOutlineMenu style={{ width: 50, height: 50, padding: 10 }} /></ButtomMobile>
                <MenuContainer isMobile={isMobile}>
                    <List isMobile={isMobile}>
                        {routes.map((route, index) => (
                            <Items key={index}>
                                <span
                                    onClick={() => handleRoute(route)}
                                >
                                    {route.name}
                                </span>
                            </Items>
                        ))}
                    </List>
                </MenuContainer>
            </StyledContainer >
        </>
    )
}