import { redirect, useNavigate } from "react-router-dom";
import { ButtonBottom, ButtonLeft, ButtonRight, ButtonTop, StyledButton } from "./style";
import { Products } from "../../pages/product";

export function MoreButton({...props}) {

    const navigate = useNavigate();

    function redirect(path: string) {
        navigate(path);
    }

    return (
        <>
            <StyledButton onClick={()=> redirect(props.link)}>
                <ButtonBottom />
                <ButtonRight />
                <ButtonTop />
                <ButtonLeft />
                    {props.content}
            </StyledButton>
        </>
    )
}