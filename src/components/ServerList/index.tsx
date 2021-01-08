import React from 'react';
import ServerButton from '../ServerButton';
import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
    return <Container>
        <ServerButton isHome />
        <Separator />
        <ServerButton mentions={10} />
        <ServerButton />
        <ServerButton />
        <ServerButton hasNotifications />
        <ServerButton mentions={3} />
        <ServerButton />
        <ServerButton />
        <ServerButton hasNotifications />
        <ServerButton />
        <ServerButton />
        <ServerButton hasNotifications />
        <ServerButton />
        <ServerButton />
        <ServerButton mentions={7}/>
        <ServerButton mentions={1} />
        <ServerButton mentions={4}/>
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton />
    </Container>;
}

export default ServerList;