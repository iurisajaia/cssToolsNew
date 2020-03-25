import App from 'next/app';
import React from "react";
import '../public/css/style.css';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
        <Component {...pageProps} />
        );
    }
}

export default MyApp;