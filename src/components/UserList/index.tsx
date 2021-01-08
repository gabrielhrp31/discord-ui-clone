import React from 'react';
import { Container,Role,Avatar, User } from './styles';

export interface UserProps{
    nickname:string,
    isBot ?:boolean
}

const UserRow: React.FC<UserProps> = ({
    nickname,
    isBot
}) => {

    return (
        <User >
            <Avatar className={isBot?'bot':''}/>
            <strong>{nickname}</strong>
            {isBot && <span>BOT</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return <Container>
        <Role>
            Disponivel - 1
        </Role>
        <UserRow nickname="Winhcester"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <Role>
            Offline - 1
        </Role>
        <UserRow nickname="Dj Rogerinho" isBot/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano" isBot/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Bot" isBot/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Bot" isBot/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
    </Container>;
}

export default UserList;