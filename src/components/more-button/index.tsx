import { ButtonBottom, ButtonLeft, ButtonRight, ButtonTop, StyledButton } from "./style";

export function MoreButton({...props}) {
    return (
        <>
            <StyledButton>
                <ButtonBottom />
                <ButtonRight />
                <ButtonTop />
                <ButtonLeft />
                    {props.content}
            </StyledButton>
        </>
    )
}