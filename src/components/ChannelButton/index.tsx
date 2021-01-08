import React from 'react';
import { Container,HashtagIcons,Title,InviteIcon,SettingsIcon } from './styles';

export interface Props {
    channelName:string;
    selected?:boolean;
}

const ChannelButton: React.FC<Props> = ({
    channelName,
    selected
                                        }) => {
    return <Container className={selected?'active':''}>
        <div>
            <HashtagIcons />
            <Title>{channelName}</Title>
        </div>
        <div>
            <InviteIcon />
            <SettingsIcon />
        </div>
    </Container>;
}

export default ChannelButton;