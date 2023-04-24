import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Stack } from "../../effects/glitch/style";
import { SmallButton } from "../../globals/buttons";
import { Container, Row } from "../../globals/grid";
import { useLoader } from "../../hooks/useLoader";
import { Column, ContentButton, InputContent, StrongLabel, StyledContent, StyledForm, StyledInputMask, TextInput, Wrapper } from "./style";
import { GlitchEffect } from '../first/styles';

export function ContactUs() {

    const { setIsLoading } = useLoader();

    function RedirectSocial(social: number) {
        switch (social) {
            case 1:
                window.open('https://www.facebook.com/tgid.digital', '_blank')
                break;
            case 2:
                window.open('https://www.linkedin.com/company/tgid-digital/', '_blank');
                break;
            case 3:
                window.open('https://www.instagram.com/tgid.digital/', '_blank');
                break;
        }

    }

    return (
        <Container>
            <GlitchEffect>
                <Stack index={0} stacks={3}>Entre Contato</Stack>
            </GlitchEffect>
            <StyledContent>
                <StyledForm>
                    <form>
                        <Row>
                            <Column desktop={6}>
                                <InputContent>
                                    <StrongLabel>Nome/Empresa:</StrongLabel>
                                    <StyledInputMask type="text" name="name" ></StyledInputMask>
                                </InputContent>
                            </Column>

                            <Column desktop={6}>
                                <InputContent>
                                    <StrongLabel>CPF/CNPJ:</StrongLabel>
                                    <StyledInputMask type="text" name="name" ></StyledInputMask>
                                </InputContent>
                            </Column>

                            <Column desktop={6}>
                                <InputContent>
                                    <StrongLabel>Email:</StrongLabel>
                                    <StyledInputMask type="text" name="name" ></StyledInputMask>
                                </InputContent>
                            </Column>

                            <Column desktop={6}>
                                <InputContent>
                                    <StrongLabel>Telefone:</StrongLabel>
                                    <StyledInputMask type="text" name="name" ></StyledInputMask>
                                </InputContent>
                            </Column>
                        </Row>

                        <Column desktop={12}>
                            <InputContent>
                                <StrongLabel>Assunto:</StrongLabel>
                                <StyledInputMask type="text" name="name" ></StyledInputMask>
                            </InputContent>
                        </Column>

                        <Column desktop={12}>
                            <InputContent>
                                <StrongLabel>Mensagem:</StrongLabel>
                                <TextInput value={''} name="message"></TextInput>
                            </InputContent>
                        </Column>
                    </form>
                </StyledForm>
                <ContentButton>
                    <SmallButton caution onClick={() => console.log()}>Submit</SmallButton>
                </ContentButton>
                <StyledForm>
                    <Wrapper>
                        <div className="button" onClick={() => RedirectSocial(1)}>
                            <div className="icon">
                                <i><FontAwesomeIcon icon={faFacebookF} /></i>
                            </div>
                            <span>Facebook</span>
                        </div>
                        <div className="button" onClick={() => RedirectSocial(2)}>
                            <div className="icon">
                                <i><FontAwesomeIcon icon={faLinkedinIn} /></i>
                            </div>
                            <span>Linkedin</span>
                        </div>
                        <div className="button" onClick={() => RedirectSocial(3)}>
                            <div className="icon">
                                <i><FontAwesomeIcon icon={faInstagram} /></i>
                            </div>
                            <span>Instagram</span>
                        </div>
                        <div>
                            <p>
                            <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: 5 }}/>
                                Rua Clodomiro Amazonas
                                1393 - Conj. 07-A
                                Vila Nova Conceição, São Paulo - SP

                                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 5, marginLeft: 15}}/>
                                contato@tgid.com.br
                            </p>
                        </div>
                    </Wrapper>
                </StyledForm>
            </StyledContent>
        </Container >
    )
}