import { SectionButton, SectionButtonTop } from "../section-button";
import { SectionContent, SectionWrapper } from "./style";
import { theme } from './../../globals/theme';

export function Sections({ ...props}) {
    return (
        <SectionWrapper id={props.id} style={props.background} onClick={()=> props.ev}>
            <SectionContent>
                <SectionButtonTop to={props.to} styles={props.styles} />
                {props.children}
                <SectionButton to={props.totwo} styles={props.stylestwo} />
            </SectionContent>
        </SectionWrapper>

    )
}
