import React from 'react';

export default function(props: {children: any}) {
    return (
        <div style={{backgroundColor: 'green', padding: 20, margin: 'auto', minHeight: '100vh', maxWidth: 1024}}>
            {props.children}
        </div>
    );
}
