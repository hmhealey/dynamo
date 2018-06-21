import React from 'react';

export default function(props: {children: any}) {
    return (
        <div style={{backgroundColor: '#f6f2de', width: '100vw', minHeight: '100vh'}}>
            <div style={{backgroundColor: '#7fb069', padding: 20, margin: 'auto', minHeight: '100vh', maxWidth: 1024}}>
                {props.children}
            </div>
        </div>
    );
}
