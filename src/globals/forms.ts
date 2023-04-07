import styled, { css } from 'styled-components';
import { theme } from './theme';

export const Input = styled.input`
    padding: 0 16px ;
    border-radius: 12px;
    color: ${theme.colors.black.color100};
    border: 1px solid ${theme.colors.black.color20};
    height: 48px;
`

export const ContentButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 24px 0 48px;

    button { 
        margin-left: 16px;
    }
`

export const RadioGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px 16px;
    margin: 24px 0;

    div {
        display: flex;
        align-items: center;

        input{
            margin: 0 8px 0 0;
            transform: scale(1.5);
            color: red;
        }

        label{
            margin-right: 24px; 
        }
    }
`

export const Select = styled.select`
    padding: 0 16px ;
    border-radius: 12px;
    color: ${theme.colors.black.color100};
    border: 1px solid ${theme.colors.black.color20};
    height: 48px;
    font-size: 16px;

    option {
        color: ${theme.colors.black.color60};
        padding: 0 16px;
    }
`
