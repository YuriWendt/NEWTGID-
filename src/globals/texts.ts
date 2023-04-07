import styled from "styled-components";
import { theme } from "./theme";

export const Title = styled.h1<{ size?: number }>`
    margin: 48px 0 32px;
    font-weight: 400;
    font-size: ${props => props.size ? props.size + 'px' : '24px'};
`

export const LargeTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 32px;
`

export const Label = styled.label`
    margin-bottom: 8px;
`

export const StrongLabel = styled(Label)`
    font-weight: 700;
    text-transform: uppercase;
`

export const AlertError = styled.p`
    color: ${theme.colors.red.color100};
    font-size: 14px;
    margin: -12px 0 16px;
`
