import { useEffect, useState } from 'react';
import { CardTypes } from '../../types/CardsTypes';
import { Card, OpenedCard, SlideContainer, SliderList, SliderWrapper, Title } from './style';

export function SliderComponent() {
    const [activeSlide, setActiveSlide] = useState(1);
    const [selectedCard, setSelectedCard] = useState(1);

    const cards = CardTypes;

    function handleCardClick(index: any) {
        setSelectedCard(index);
        setActiveSlide(1); // Sempre define o activeSlide como 1 ao selecionar um novo card
    }

    useEffect(() => {
        // Atualize o estado activeSlide para selecionar o card do meio ao carregar a página
        setActiveSlide(selectedCard);
    }, [selectedCard]);

    return (
        <>
            <SliderList>
                <SliderWrapper>
                    <Title>NOSSAS SOLUÇÕES</Title>
                    {selectedCard !== null && (
                        <div style={{ zIndex: 1 }}>
                            <OpenedCard animation={true}>
                                <h1>{cards[selectedCard].title}</h1>
                                <p>{cards[selectedCard].description}</p>
                            </OpenedCard>
                            <SlideContainer>
                                {cards.map((card, index) => {
                                    if (index >= activeSlide - 1 && index <= activeSlide + 1) {
                                        return (
                                            <Card
                                                key={card.id}
                                                className={selectedCard === index ? 'selected' : ''}
                                                onClick={() => handleCardClick(index)}
                                            >
                                                <img src={card.image} alt={card.title} />
                                            </Card>
                                        );
                                    }
                                })}
                            </SlideContainer>
                        </div>
                    )}
                </SliderWrapper>
            </SliderList>
        </>
    );
};



