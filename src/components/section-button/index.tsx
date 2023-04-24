import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';
import { StyledDiv, StyledLink } from "./style";

type SectionButtonProps = {
    to: string;
    styles?: any;
    arrow: any;
}

function changeSection() {
    const activeSection = true

    return activeSection
}

export function ArrowIcon() {
    return (
        <BsFillArrowDownCircleFill
            style={{
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
                width: 25,
                height: 20,
            }}
        />
    )
}

export function SectionButton({ styles, ...props }: SectionButtonProps) {

    return (
        <>
            <StyledDiv>
                <StyledLink to={props.to} smooth={true} duration={500} >
                    {props.arrow === 'up' ? <ArrowTopIcon /> : <ArrowIcon />}
                </StyledLink>
            </StyledDiv>
        </>
    );
}

