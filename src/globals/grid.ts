import styled, { css } from 'styled-components';

export const Container = styled.div`
   
    padding: 0 15px;
    margin: 0 auto;
    box-sizing: border-box;

    &:before, &:after{
        content: " ";
        display: table;
    };
    &:after{
        clear: both;
    }

    @media only screen and (min-width: 1024px) and (max-width: 1360px)  {
        max-width: 1024px;
    } 

    @media only screen and (min-width: 1360px) {
        max-width: 1328px;
    } 

`

export const Row = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;

    &:before, &:after{
        content: " ";
        display: table;
    };

    &:after{
        clear: both;
    }

    @media only screen and (min-width: 1024px) and (max-width: 1360px)  {
        max-width: 1024px;
    } 

    @media only screen and (min-width: 1360px) {
        max-width: 1328px;
    } 
`