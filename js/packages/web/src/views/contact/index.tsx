import { Layout } from 'antd';
import React from 'react';
import { useStore } from '@oyster/common';
import { useMeta } from '../../contexts';
import { Row, Col,Button,Image } from 'antd';
import { useState } from "react";
import ReactDOM from "react-dom";
import SimpleMap from "./Map";

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
  } from "react-google-maps";
// import FAQ from "./FAQ";
import Faq from "react-faq-component";

const locations = require("./locations.json");
 
export const ContactView = () => {
        return (
        <>
            <section className="privacy" style={{marginTop:'100px'}}>
                
                <div style={{maxWidth:'1200px',margin:'auto'}}>
                    <Row className="weclome-title1"> Contact Me</Row>
                    <Row style={{marginTop:'10px'}}>Write something in this area.</Row>
                    <Row style={{justifyContent:'space-between'}}>
                        <Col span={10}>
                            <Row style={{marginTop:'10px'}}>First name</Row>
                            <Row style={{marginTop:'10px'}}>
                                <input className="kv-ee-form-control" id="fieldFirstName" type="text" placeholder="" data-namelabel="First name" aria-invalid="false" aria-label="First name"/>
                            </Row>
                            <Row style={{marginTop:'10px'}}>Last name</Row>
                            <Row style={{marginTop:'10px'}}><input className="kv-ee-form-control" id="fieldFirstName" type="text" placeholder="" data-namelabel="First name" aria-invalid="false" aria-label="First name"/></Row>
                            <Row style={{marginTop:'10px'}}>Your mail</Row>
                            <Row style={{marginTop:'10px'}}><input className="kv-ee-form-control" id="fieldFirstName" type="text" placeholder="" data-namelabel="First name" aria-invalid="false" aria-label="First name"/></Row>
                            <Row style={{marginTop:'10px'}}>Email subject</Row>
                            <Row style={{marginTop:'10px'}}><input className="kv-ee-form-control" id="fieldFirstName" type="text" placeholder="" data-namelabel="First name" aria-invalid="false" aria-label="First name"/></Row>
                        </Col>
                        <Col span={10}>
                            <Row>Your message</Row>
                            <Row style={{height:'89%',marginTop:'10px'}}><input className="kv-ee-form-control" id="fieldFirstName1" style={{height:"unset!important"}} type="text" placeholder="" data-namelabel="First name" aria-invalid="false" aria-label="First name"/></Row>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'20px'}}>
                        <Col span={1}>[]</Col>
                        <Col span={23}> By checking this box and submitting your information, you are granting us permission to email you. You may unsubscribe at any time.</Col>
                    </Row>
                    <Row style={{marginTop:'20px',paddingBottom:'50px'}}>
                     <Button className="send-message" style={{background: '#494949!important',backgroundColor: '#494949!important',border: '1px solid'}}>Send Message</Button>
                    </Row>
                </div>
                <SimpleMap locations={locations} />

            </section>

        </>

    );

    
};