import React from 'react';

// header sem properties.
function Header() {
    return (
        <header>
            <h1>Header Component.</h1>
        </header>
    );
}

// header usando properties.
export function HeaderProps(props) {
    return (
        <header>
            <h1> {props.title} </h1>
        </header>
    );
}

// header usando children e desestruturação.
export function HeaderPropsDesest({ children }) {
    return (
        <header>
            <h1> {children} </h1>
        </header>
    );
}

// header usando properties e children.
export function HeaderPropsChild(props) {
    return (
        <header>
            <h1> {props.children} </h1>
        </header>
    );
}

export default Header;
