import { SectionButton, SectionButtonTop } from "../section-button";
import { SectionContent, SectionWrapper } from "./style";

export function Sections({ ...props}) {
    return (
        <SectionWrapper id={props.id}>
            <SectionContent>
                <SectionButtonTop to={props.to} styles={props.styles} />
                {props.children}
                <SectionButton to={props.totwo} styles={props.stylestwo} />
            </SectionContent>
        </SectionWrapper>

    )
}
