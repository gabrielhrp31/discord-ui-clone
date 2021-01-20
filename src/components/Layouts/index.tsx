import React from 'react';
import ServerList from '../ServerList';
import { Grid } from './styles';
import ServerName from "../ServerName";
import ChannelInfo from "../ChannelInfo";
import ChannelList from "../ChannelList";
import UserInfo from "../UserInfo";
import UserList from "../UserList";
import ChannelData from "../ChannelData";
import Store from "../../store";
import { observer, inject } from 'mobx-react'


interface LayoutProps {
    store?: Store | undefined
}

const Layout: React.FC<LayoutProps> = (props) => {

    const { store } = props;


    return <>
        {store &&
            <Grid className={store.open ? 'open-' + store.open : ''} >
                <div className="overlay" />
                <ServerList />
                <ServerName />
                <ChannelInfo />
                <ChannelList open={store.open === 'channel-list'} />
                <UserInfo />
                <ChannelData />
                <UserList />
            </Grid>
        }
    </>;
};

export default inject('store')(observer(Layout));