import React, {useEffect, useRef} from 'react';
import { Container,Messages,InputWrapper,Input,InputIcon } from './styles';
import ChannelMessage from "../ChannelMessage";
import {Mention} from "../ChannelMessage";


const ChannelData: React.FC = () => {

    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;


    useEffect(()=>{
        const div = messagesRef.current;

        if(div){
            div.scrollTop=div.scrollHeight;
        }
    },[messagesRef])

    return <Container>
        <Messages>
            {   Array.from(Array(15).keys()).map((n)=>(
                    <ChannelMessage key={n} author={"Winchester"} date={"31/01/2000"} content={"Hoje é meu aniversário!"} />
                ))
            }
            <ChannelMessage
                author={"Fulano Bot"}
                date={"31/01/2000"}
                content={
                    <>
                        <Mention>@Winchester</Mention> Hoje é seu aniversário? Parabéns!
                    </>
                }
                isBot
                hasMention
            />
        </Messages>
        <InputWrapper >
            <InputIcon />
            <Input type="text" placeholder="Digite sua mensagem para #chat-livre"/>
        </InputWrapper>
    </Container>;
}

export default ChannelData;