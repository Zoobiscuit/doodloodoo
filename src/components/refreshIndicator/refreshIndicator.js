import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
    container: {
        zIndex: '5',
        position: 'absolute',
        right: '0px',
        left: '-24px',
        bottom: '101%',
    },
    refresh: {
        zIndex: '10',
        left:'0px',
        right:'0px',
        display: 'inline-block',
        position: 'relative',
    },
};

const RefreshIndicatorBusy = () => (
    <div style={style.container}>
        <RefreshIndicator
            size={40}
            left={10}
            top={0}
            status="loading"
            style={style.refresh}
        />
    </div>
);

export default RefreshIndicatorBusy;