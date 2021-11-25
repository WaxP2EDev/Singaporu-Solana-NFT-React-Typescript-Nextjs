import { Layout } from 'antd';
import React from 'react';
import { useStore } from '@oyster/common';
import { useMeta } from '../../contexts';
import { SalesListView } from './components/SalesList';
import { SetupView } from './setup';
import { Row, Col,Button,Image } from 'antd';
import MailchimpSubscribe from "react-mailchimp-subscribe";

export const HomeView = () => {
  const { isLoading, store } = useMeta();
  const { isConfigured } = useStore();

  const showAuctions = (store && isConfigured) || isLoading;
  const MAILCHIMP_URL =
  "https://f1v.us10.list-manage.com/subscribe/post?u=df6d43b6920424240e3f85b41&amp;id=1bb623a334";

  return (
    <Layout className="fullbackground"style={{ margin: 0, marginTop: 30, alignItems: 'center',backgroundImage:'url(https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1548502499-ef49e8cf98d4%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnw1NTEzfDB8MXxzZWFyY2h8OHx8cGhvdG9ncmFwaHl8ZW58MHx8fHwxNjM2MjM0MzIw%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D2000)'}}>
      {showAuctions ? <SalesListView /> : <SetupView />}
    </Layout>
    // <>
    //   <section className="full" style={{}}>
    //       <Row style={{maxWidth: '1200px',margin: 'auto',paddingTop: '45vh'}}>
    //         <Col span={12}>
    //           <div className="weclome-nft">Welcome to Milestone NFT</div>
    //         </Col>
    //         <Col span={12}>
    //           <Row style={{marginTop:'15px'}}>
    //             <div className="weclome-title">Learn more about what we do</div>
    //           </Row>
    //           <Row style={{marginTop:'15px'}}>
    //             <div className="weclome-title">Record all your favorite moments in life on the Solana Blockchain
    //             </div>
    //           </Row>
    //           <Row style={{marginTop:'35px'}}>
    //             <Button type="primary" className="read-button" style={{background: 'transparent',border: '1px solid'}}>Read more </Button>

    //           </Row>
    //         </Col>
    //       </Row>
    //   </section>
    //   <section className="full1" style={{background:'white'}}>
    //       <Row style={{maxWidth: '1200px',margin:'auto',padding:'64px 0px 64px 0px'}}>
    //         <Col span={10}>
    //           <Image src='https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1527011046414-4781f1f94f8c%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnw1NTEzfDB8MXxzZWFyY2h8MTh8fHBob3RvZ3JhcGh5fGVufDB8fHx8MTYzNjIzNDMyMA%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D1000' preview={false} className="rectangle6" style={{maxWidth:'470px'}} />
    //         </Col>
    //         <Col span={14}>
    //           <Row style={{marginTop:'15px'}}>
    //             <div className="weclome-title1">Welcome to our website</div>
    //           </Row>
    //           <Row style={{marginTop:'15px'}}>
    //             <div className="weclome-title" style={{color:'rgb(73, 73, 73)'}}>Non-Fungible Tokens (NFTs) are no longer a fad, but something that will stay and flourish. 
    //             </div>
    //           </Row>
    //           <Row style={{marginTop:'35px'}}>
    //             <div className="weclome-title" style={{color:'rgb(73, 73, 73)'}}>We understand that some may feel that they want a NFT that solely belongs to them, but want to have none of the crypto speculation – we get it. Let us deal with the crypto transactions and you get your NFT photos recorded on the blockchain as a milestone legacy. 
    //             </div>  

    //           </Row>
    //         </Col>
    //       </Row>
    //   </section>
    //   <section className="full1" style={{background:'white'}}>
    //       <Row className="weclome-title1" style={{maxWidth: '1200px',margin:'auto',padding:'15px 0px 15px 0px',color:'rgb(73, 73, 73)'}}>
    //         Gallery
    //       </Row>
    //       <Row className="weclome-title" style={{maxWidth: '1200px',margin:'auto',padding:'15px 0px 15px 0px',color:'rgb(73, 73, 73)'}}>
    //         Our latest and best photos.
    //       </Row>
    //       <Row className="weclome-title" style={{maxWidth: '1200px',margin:'auto',padding:'0px 0px 15px 0px',color:'rgb(73, 73, 73)'}}>
    //         Look at some of the photos that get recorded on Solana Blockchain.
    //       </Row>
    //       <Row style={{maxWidth: '1200px',margin:'auto',padding:'20px 0px 15px 0px',justifyContent: 'space-between'}}>
    //         <Col>
    //         <Image className="Image-gallery" src='https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1565004569929-4f400c11e9ef%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnw1NTEzfDB8MXxzZWFyY2h8MTl8fHBob3RvZ3JhcGh5fGVufDB8fHx8MTYzNjIzNDMyMA%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D600' preview={false} style={{width:'369.98px', height:'369.98px'}} />
    //         </Col>
    //         <Col>
    //         <Image className="Image-gallery" src='https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1504093376055-b3094b674dcb%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnw1NTEzfDB8MXxzZWFyY2h8MjB8fHBob3RvZ3JhcGh5fGVufDB8fHx8MTYzNjIzNDMyMA%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D600' preview={false} style={{width:'369.98px', height:'369.98px'}} />
    //         </Col>
    //         <Col>
    //         <Image className="Image-gallery" src='https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1497316730643-415fac54a2af%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnw1NTEzfDB8MXxzZWFyY2h8MjF8fHBob3RvZ3JhcGh5fGVufDB8fHx8MTYzNjIzNDMyMA%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D600' preview={false} style={{width:'369.98px', height:'369.98px'}} />
    //         </Col>
    //       </Row>
    //       <Row style={{maxWidth: '1200px',margin:'auto',padding:'19px 0px 70px 0px',justifyContent: 'space-between'}}>
    //         <Col>
    //         <Image className="Image-gallery" src='https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1522204538344-922f76ecc041%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnw1NTEzfDB8MXxzZWFyY2h8MjJ8fHBob3RvZ3JhcGh5fGVufDB8fHx8MTYzNjIzNDMyMA%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D600' preview={false} style={{width:'369.98px', height:'369.98px'}} />
    //         </Col>
    //         <Col>
    //         <Image className="Image-gallery" src='https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1464855499786-2839659d9e5d%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnw1NTEzfDB8MXxzZWFyY2h8MjN8fHBob3RvZ3JhcGh5fGVufDB8fHx8MTYzNjIzNDMyMA%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D600' preview={false} style={{width:'369.98px', height:'369.98px'}} />
    //         </Col>
    //         <Col>
    //         <Image className="Image-gallery" src='https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1541515929569-1771522cbaa9%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnw1NTEzfDB8MXxzZWFyY2h8MjR8fHBob3RvZ3JhcGh5fGVufDB8fHx8MTYzNjIzNDMyMA%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D600' preview={false} style={{width:'369.98px', height:'369.98px'}} />
    //         </Col>
    //       </Row>
    //     </section>
    //     <section className="full2" style={{paddingTop:'60px', backgroundImage: 'url(https://runtime.builderservices.io/runtime-endurance-21195/45ed6c1879d0c6dd328c725b5bd63226.svg) !important'}}>
    //       <Row className="weclome-title1" style={{maxWidth: '1200px',margin:'auto',padding:'15px 0px 15px 0px',color:'rgb(73, 73, 73)'}}>
    //       Testimonials
    //       </Row>
    //       <Row className="weclome-title" style={{maxWidth: '1200px',margin:'auto',padding:'15px 0px 15px 0px',color:'rgb(73, 73, 73)'}}>
    //       What our customers write about us
    //       </Row>
    //       <Row className="weclome-title" style={{maxWidth: '1200px',margin:'auto',padding:'0px 0px 15px 0px',color:'rgb(73, 73, 73)'}}>
    //       You can edit text on your website by clicking on a text box on your website. If you have any questions, please visit our Support Center where we have lots of helpful articles that will assist you in creating the website of your dreams!
    //       </Row>
    //       <Row style={{maxWidth: '1200px',margin:'auto',padding:'20px 0px 15px 0px',justifyContent: 'space-between'}}>
    //         <Col span={11}>
    //           <Row>
    //             <Col span={2}>
    //              <i className="fa fa-quote-right" style={{color:'black',width:'30px',height:'32px'}}> </i>
    //             </Col>
    //             <Col className="description" span={22}>You can edit text on your website by double clicking on a text box on your website. Alternatively, when you select a text box a</Col>
    //           </Row>
    //           <Row className="description">settings menu will appear.</Row>
    //         </Col>
    //         <Col span={11}>
    //           <Row>
    //             <Col span={2}>
    //              <i className="fa fa-quote-right" style={{color:'black',width:'30px',height:'32px'}}> </i>
    //             </Col>
    //             <Col className="description" span={22}>You can edit text on your website by double clicking on a text box on your website. Alternatively, when you select a text box a</Col>
    //           </Row>
    //           <Row className="description">settings menu will appear.</Row>
    //         </Col>
            
    //       </Row>
    //       <Row style={{maxWidth: '1200px',margin:'auto',padding:'19px 0px 100px 0px',justifyContent:'space-between'}}>
    //         <Col span={11} style={{display:'flex'}}>
    //           <Image className="Image-gallery" src='https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1519895609939-d2a6491c1196%3Fixlib%3Drb-0.3.5%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26s%3D17685ae7613c0e7d22dc7daacdbbf530%26auto%3Dformat%26fit%3Dcrop%26w%3D600%26q%3D80' preview={false} style={{width:'42px', height:'42px',borderRadius:'50px'}} />
    //           <div style={{marginLeft:'15px'}}>
    //             <Row style={{color:'rgb(73,73,73)'}}>Lorena Watson</Row>
    //             <Row style={{color:'rgb(73,73,73)'}}>Job title</Row>
    //           </div>
    //         </Col>
    //         <Col span={11} style={{display:'flex'}}>
    //           <Image className="Image-gallery" src='https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1505273302974-57f26324c07e%3Fixlib%3Drb-0.3.5%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26s%3Da259d0842637cbd544421e9fec51fe39%26auto%3Dformat%26fit%3Dcrop%26w%3D600%26q%3D80' preview={false} style={{width:'42px', height:'42px',borderRadius:'50px'}} />
    //           <div style={{marginLeft:'15px'}}>
    //             <Row style={{color:'rgb(73,73,73)'}}>Lorena Watson</Row>
    //             <Row style={{color:'rgb(73,73,73)'}}>Job title</Row>
    //           </div>
    //         </Col>
    //       </Row>
    //     </section>
    //     <section className="full3" style={{background:'white'}}>
    //       <Row style={{maxWidth: '800px',margin:'auto',padding:'100px 0px 15px 0px',justifyContent: 'space-between'}}>
    //         <i className="fa fa-envelope" style={{color:'black'}}> </i>
    //       </Row>
    //       <Row className="weclome-title1" style={{maxWidth: '800px',margin:'auto',padding:'15px 0px 15px 0px',color:'rgb(73, 73, 73)'}}>
    //       Subscribe

    //       </Row>
    //       <Row className="weclome-title" style={{maxWidth: '800px',margin:'auto',padding:'15px 0px 15px 0px',color:'rgb(73, 73, 73)'}}>
    //       Sign up to our newsletter and stay up to date
    //       </Row>
    //       <Row className="weclome-title" style={{maxWidth: '800px',margin:'auto',padding:'0px 0px 15px 0px',color:'rgb(73, 73, 73)'}}>
    //       You can edit text on your website by clicking on a text box on your website. If you have any questions, please visit our Support Center where we have lots of helpful articles that will assist you in creating the website of your dreams!
    //       </Row>
    //       <Row className="subscript-button"style={{maxWidth: '800px',margin:'auto',padding:'20px 0px 15px 0px',justifyContent: 'space-between',color:'rgb(73, 73, 73)'}}>
    //         <MailchimpSubscribe url={MAILCHIMP_URL} />

    //       </Row>
    //       <Row style={{maxWidth: '800px',margin:'auto',padding:'20px 0px 15px 0px',justifyContent: 'space-between',color:'rgb(73, 73, 73)'}}>
    //         By submitting your information, you are granting us permission to email you. You may unsubscribe at any time.
    //       </Row>
    //   </section>
      
    // </>
  );
};
