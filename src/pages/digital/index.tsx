import { CodeBox, SectionTwoContent, StyledContainer, SubText, TypingEffect } from "./styles";

export function Digital() {

    return (
        <>
            <StyledContainer >
                <SectionTwoContent>
                    <div>
                        <TypingEffect>
                            TRANSFORME-SE EM DIGITAL
                        </TypingEffect>
                        <SubText>Colocar uma ideia inovadora em prática pode ser desafiador, mas você não precisa enfrentar esse processo sozinho!
                            Nós somos uma fábrica de startups dedicada a ajudar empreendedores a tirarem seus projetos do papel de maneira eficiente e rápida,
                            por meio do planejamento, desenvolvimento de produtos e inserção da sua empresa no mercado.
                        </SubText>
                    </div>
                    <CodeBox>
                        <img src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlzdWFsJTIwc3R1ZGlvJTIwY29kZXxlbnwwfHwwfHw%3D&w=1000&q=80" width={400} height={400}></img>
                    </CodeBox>
                </SectionTwoContent>
            </StyledContainer>
        </>
    )
}