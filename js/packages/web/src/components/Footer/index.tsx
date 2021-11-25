import React from 'react';
import { SendOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { footerConf } from './footerData';
import { LABELS } from '../../constants';
import { Row, Col } from 'antd';
export const Footer = () => {
  const validateMessages = {
    types: {
      email: 'Input is not a valid email!',
    },
  };

  const CustomForm = (props: {
    status: any;
    message: any;
    onValidated: any;
  }) => {
    let email: any;
    const submit = (values: any) => {
      email = values.user.email;
      email &&
        email.indexOf('@') > -1 &&
        props.onValidated({
          EMAIL: email,
          // NAME: name.value
        });
    };
    return (
      <>
        <Form
          className={'footer-sign-up'}
          onFinish={submit}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={['user', 'email']}
            rules={[
              {
                type: 'email',
              },
            ]}
            style={{ display: 'flex !important' }}
          >
            <Input
              className={'footer-input'}
              type="text"
              id="input"
              placeholder="Email Address"
              bordered={false}
            />
            <Button className={'footer-button'} htmlType="submit">
              <SendOutlined />
            </Button>
          </Form.Item>
        </Form>
        {props.status ? (
          <div
            style={{
              background: 'rgb(217,217,217)',
              borderRadius: 2,
              padding: 10,
              display: 'inline-block',
            }}
          >
            {props.status === 'sending' && (
              <div style={{ color: 'blue' }}>Loading...</div>
            )}
            {props.status === 'error' && (
              <div
                style={{ color: 'red' }}
                dangerouslySetInnerHTML={{ __html: props.message }}
              />
            )}
            {props.status === 'success' && (
              <div
                style={{ color: 'green' }}
                dangerouslySetInnerHTML={{ __html: props.message }}
              />
            )}
          </div>
        ) : null}
      </>
    );
  };

  const NewsLetterForm = () => (
    <CustomForm status={status} message={''} onValidated={() => {}} />
  );

  return (
    <section className="full4" style={{background:'white'}}>
          <Row style={{maxWidth: '1200px',margin:'auto',padding:'120px 0px 15px 0px',justifyContent: 'space-between'}}>
            <Col>
            <Row style={{paddingTop:'25px'}}>
              <Col style={{color:'black'}}>Home</Col>
              <Col style={{color:'black',marginLeft:'10px'}}>Mint NFT</Col>
              <Col style={{color:'black',marginLeft:'10px'}}>FAQ</Col>
              <Col style={{color:'black',marginLeft:'10px'}}>Get in touch</Col>
            </Row>
            </Col>
            <Col>
              <Row className="weclome-title1" style={{maxWidth: '1200px',margin:'auto',padding:'15px 0px 15px 0px',color:'rgb(73, 73, 73)'}}>
                Milestone NFT

              </Row>
          </Col>
          <Row style={{maxWidth: '1200px',margin:'20px auto 15px auto',justifyContent: 'space-between',width:'100%',height:'2px',background:'rgb(33,33,33)'}}></Row>
          </Row>
          <Row className="weclome-title1" style={{maxWidth: '1200px',margin:'auto',padding:'15px 0px 15px 0px',color:'rgb(73, 73, 73)'}}>
            Address

          </Row>
          <Row className="weclome-title" style={{maxWidth: '1200px',margin:'auto',padding:'15px 0px 15px 0px',color:'rgb(73, 73, 73)'}}>
            Pasir Ris Drive 1 Block 535 #03-284
          </Row>
          <Row className="weclome-title" style={{maxWidth: '1200px',margin:'auto',padding:'0px 0px 15px 0px',color:'rgb(73, 73, 73)'}}>
            Singapore, 510535, SG,
          </Row>
          
      </section>
  );
};
