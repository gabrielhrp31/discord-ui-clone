import React from 'react';
import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from "../ChannelButton";

export interface Props {
    open: boolean
}

const ChannelList: React.FC<Props> = ({
    open
}) => {
    return <Container className={open ? 'open' : ''}>
        <Category >
            <span>Canais de Texto</span>
            <AddCategoryIcon />
        </Category>
        <ChannelButton channelName="chat-livre" />
        <ChannelButton channelName="trabalho" />
        <ChannelButton channelName="smitezinho" />
        <ChannelButton channelName="csgo" />
        <ChannelButton channelName="valorant" />
    </Container>;
}

export default ChannelList;