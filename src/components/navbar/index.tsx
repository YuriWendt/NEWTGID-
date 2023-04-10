import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { theme } from "../../globals/theme";
import { ButtomMobile, Content, Items, List, Logo, MenuContainer, StyledContainer, SubList } from "./style";
import { cursorTo } from "readline";

type RouteType = {
    name: string,
    path: string,
    subRoutes?: SubRouteType[],
    component?: React.ReactNode,
    isOpen: boolean // novo campo para indicar se as sub-rotas estão abertas ou fechadas
}

type SubRouteType = {
    name: string,
    path: string,
    component?: React.ReactNode
}

export function Navbar() {

    const navigate = useNavigate();
    const [routes, setRoutes] = useState<RouteType[]>([]);
    const [isMobile, setIsMobile] = useState(false);
    const [builtRoutes, setBuiltRoutes] = useState(false)
    const [showSubRoutes, setShowSubRoutes] = useState(false);

    function toggleMenu() {
        setIsMobile(!isMobile);
    }

    function buildRoutes() {
        let build: RouteType[] = [
            { name: 'Inicio', path: '/', isOpen: false },
            { name: 'Quem Somos', path: '/aboutus', isOpen: false },
            {
                path: '/products',
                name: 'Nossos Produtos',
                isOpen: false
            },
            {
                name: 'Entre em Contato',
                path: '/contact',
                isOpen: false
            },
        ]

        setRoutes(build);
        setBuiltRoutes(true)
    }

    function toggleSubRoutes() {
        setShowSubRoutes(!showSubRoutes);
    }

    function redirect(path: string) {
        navigate(path);
        setIsMobile(false);
    }

    useEffect(() => {
        buildRoutes()
    }, []);

    return (
        <>
            <StyledContainer id="top">
                <Content onClick={() => redirect('/')} style={{cursor: 'pointer'}}>
                    <Logo src={theme.img.logoWhite}/>
                    <h1>TGID</h1>
                </Content>
                <ButtomMobile onClick={() => toggleMenu()}><AiOutlineMenu style={{ width: 50, height: 50, padding: 10 }} /></ButtomMobile>
                <MenuContainer isMobile={isMobile}>
                    <List isMobile={isMobile}>
                        {routes.map((route, index) => (
                            <Items key={index}>
                                <Items
                                    onMouseEnter={() => toggleSubRoutes()}
                                    onClick={() => redirect(route.path)}
                                >
                                    {route.name}
                                </Items>
                                {route.subRoutes && showSubRoutes && (
                                    <SubList>
                                        {route.subRoutes.map((subRoute, index) => (
                                            <Items
                                                key={index}
                                                onClick={() => redirect(subRoute.path)}
                                            >
                                                {subRoute.name}
                                            </Items>
                                        ))}
                                    </SubList>
                                )}
                            </Items>
                        ))}
                    </List>
                </MenuContainer>
            </StyledContainer >
        </>
    )
}