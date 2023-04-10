import { Container } from "../../globals/grid";
import { useEffect } from 'react';
import { useLoader } from "../../hooks/useLoader";
import { MoreButton } from "../../components/more-button";

export function Products() {

    const { setIsLoading } = useLoader();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true); // Indica que a página está carregando
        }, 2000); // 2000ms = 2 segundos
        setIsLoading(false); // Indica que o carregamento foi concluído
    }, []);

    return (
        <Container>
            <h1>Produtos</h1>
            <MoreButton />
        </Container>
    )
}