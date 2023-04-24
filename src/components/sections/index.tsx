import { SectionContent, SectionWrapper } from "./style";
import { useEffect } from 'react';


export function Sections({ ...props}) {
    return (
        <SectionWrapper id={props.id} style={props.background}>
            <SectionContent>
                {props.children}
            </SectionContent>
        </SectionWrapper>

    )
}
