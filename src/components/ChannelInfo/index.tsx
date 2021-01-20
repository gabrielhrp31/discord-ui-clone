import React from 'react';
import { Container, Title, HashtagIcon, Separator, Description, OpenServersIcon, OpenFriendsIcon, CloseFriendsIcon } from './styles';
import Store from "../../store";
import { observer, inject } from 'mobx-react'


interface ChannelInfoProps {
    store?: Store | undefined
}

const ChannelInfo: React.FC<ChannelInfoProps> = inject('store')(observer((props) => {

    const { store } = props;

    return <Container>
        {store?.open !== 'user-list' &&
            <OpenServersIcon onClick={() => { store?.setOpen('channel-list') }} />
        }
        <HashtagIcon />
        <Title>Canal de Texto</Title>
        <Separator />
        <Description> Lorem ipsum sit dolor amet</Description>
        {
            store?.open === 'user-list' ?
                <CloseFriendsIcon onClick={() => { store?.setOpen('') }} />
                :
                <OpenFriendsIcon onClick={() => { store?.setOpen('user-list') }} />
        }
    </Container>;
}));

export default ChannelInfo;