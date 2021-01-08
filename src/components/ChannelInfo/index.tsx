import React from 'react';
import { Container,Title, HashtagIcon ,Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
    return <Container>
        <HashtagIcon />
        <Title>Canal de Texto</Title>
        <Separator />
        <Description> Lorem ipsum sit dolor amet</Description>
    </Container>;
}

export default ChannelInfo;