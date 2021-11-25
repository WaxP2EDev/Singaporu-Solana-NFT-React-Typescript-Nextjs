import { Layout } from 'antd';
import React from 'react';
import { useStore } from '@oyster/common';
import { useMeta } from '../../contexts';
import { Row, Col,Button,Image } from 'antd';
import { useState } from "react";
import ReactDOM from "react-dom";
// import FAQ from "./FAQ";
import Faq from "react-faq-component";
export const FaqView = () => {
    const [rows, setRowsOption] = useState(null);
    const data = {
        title: "Click here to edit your description",
        rows: [
        {
            title: "What primary services do you offer?",
            content: `We provide a platform for people who want to record their milestones in life on the blockchain, making that achievement permanent. Marriage, giving birth, buying a house or car etc. `
        },
        {
            title: "What do you specialize in?",
            content:
            "We are merely a minting platform, we don’t do trading and there is no marketplace – we would like your NFTs to be your private collection. "
        },
        {
            title: "What are the rates of your services?",
            content: `5 USD for every photo minted as a NFT.  `
        },
        {
            title: "What kind of costs do you bear?",
            content: 'We bear the cost of the gas fees on the Solana blockchain, so that you only need a Phantom wallet but never have to worry about purchasing crypto to mint a NFT. '
        },
        {
            title: "What are your terms and conditions?",
            content: 'To make you as happy a person as possible. That is our only condition for you as a customer on this site. '
        }
        ]
    };
    return (
        <>
            <section className="privacy" style={{}}>

            <div style={{maxWidth:'1200px',margin:'auto'}}>
                <h2 className="section-title">Frequently Asked Questions</h2>

                <div className="faq-style-wrapper">
                    <Faq data={data} getRowOptions={setRowsOption} />
                </div>
            </div>
            </section>

        </>

    );

    
};