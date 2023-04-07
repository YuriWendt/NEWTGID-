import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { theme } from './theme';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    small?: boolean,
    large?: boolean,
    success?: boolean,
    caution?: boolean,
    warning?: boolean,
    disabled?: boolean;
    outlined?: boolean,
    add?: boolean;
    width?: string;
    height?: string;
}

const BaseButton = styled.button<ButtonProps>`
    border-radius: 6px;
    border: none;
    height: 40px;
    padding: 8px 0px;
    transition: all .5s ease-in;
    background-color: ${theme.colors.primary.color100};
    color: ${theme.colors.white};

    cursor: pointer;

    * {
        color: ${theme.colors.white};
        text-decoration: none ;
    }
    
    ${props => props.success && css`background-color: ${theme.colors.green.color100};`}
    ${props => props.caution && css`background-color: ${theme.colors.secondary.color100};`}
    ${props => props.warning && css`background-color: ${theme.colors.red.color100};`}
    ${props => props.add && css`background-color: ${theme.colors.primary.color60};`};
    ${props => props.disabled && css`opacity:0.2;`}
    ${props => props.outlined && css`
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary.color100};
        border: 1px solid ${theme.colors.primary.color100};
    `}

    &:hover{
        filter: brightness(0.9);
    }
`

export const Button = styled(BaseButton)`
    width: 192px;
`;

export const SmallButton = styled(BaseButton)`
    width:128px;
`;

export const LargeButton = styled(BaseButton)`
    width: 296px;
`;

export const FullButton = styled(BaseButton)`
    width: 100%;
`;

export const IconButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.black.color100};
    border-radius: 25px;
    padding: 8px 16px;
    background-color:${theme.colors.white};
    
    label, span{
        margin-left: 8px;
    }
`

export const IconButtonSpan = styled.button`
    display: flex;
    align-items: center;
    margin: 0;
    border: none;
    background-color: transparent;
    color: ${props => props.color};
    cursor: pointer;

    span {
        font-size: 16px;
    }

    svg {
        font-size: 24px;
        margin-right: 8px;
    }

    
`

export const BadgeButton = styled.button<{ active?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 96px;
    height: 32px;
    border-radius: 50px;
    padding: 8px 16px;
    border: 1px solid ${theme.colors.primary.color100};
    background-color: ${theme.colors.white};

    ${props => props.active && css`
        background-color: ${theme.colors.primary.color100};
        color: ${theme.colors.white};
    `}
`

export const OutlinedIconButton = styled(IconButton) <ButtonProps>`
    width: ${props => props.width ? props.width : '192px'};
    height: ${props => props.height ? props.height : '56px'};
    border-radius: 6px;

    cursor: pointer;

    svg {
        font-size: 16px;
    }

    &:hover{
        
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    }
`