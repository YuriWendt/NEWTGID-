import { Link } from "react-scroll";
import { StyledButton, StyledCircle, reflex } from "./style";
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'
import { css } from 'styled-components';

type SectionButtonProps = {
    to: string;
    styles?: any;
}

export function ArrowIcon() {
    return (
        <BsFillArrowDownCircleFill
            style={{
                position: 'absolute',
                top: 1,
                left: -2,
                color: "#9c7e44",
                display: "flex",
                width: 25,
                height: 20,
            }}
        />
    )
}

export function ArrowTopIcon() {
    return (
        <BsFillArrowUpCircleFill
            style={{
                position: 'absolute',
                top: 1,
                left: -2,
                color: "#9c7e44",
                display: "flex",
                width: 25,
                height: 20,
            }}
        />
    )
}

export function SectionButton({ styles, ...props }: SectionButtonProps) {

    const buttonStyle = styles ? JSON.parse(styles) : {};

    return (
        <>
            <Link to={props.to} smooth={true} duration={500} >
                <StyledButton style={buttonStyle}>
                    <ArrowIcon />
                </StyledButton>
            </Link>
        </>
    );
}

export function SectionButtonTop({ styles, ...props }: SectionButtonProps) {

    const buttonStyle = styles ? JSON.parse(styles) : {};

    return (
        <>
            <Link to={props.to} smooth={true} duration={500}>
                <StyledButton style={buttonStyle}>
                    <ArrowTopIcon />
                </StyledButton>
            </Link>
        </>
    );
}

