import { inject, observer } from 'mobx-react';
import React from 'react';
import Store from '../../store';
import { Container, Title, ExpandIcon, CloseIcon } from './styles';


interface ServerNameProps {
    store?: Store | undefined
}

const ServerName: React.FC<ServerNameProps> = (props) => {

    const { store } = props;

    return <Container>
        <Title>Bunker</Title>
        <div>
            <ExpandIcon />
            <CloseIcon onClick={() => store?.setOpen('')} />
        </div>
    </Container>;
}

export default inject('store')(observer(ServerName));