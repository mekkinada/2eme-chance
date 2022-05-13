import React from 'react'
import {
    Container,
    Row,
    CardDeck,
    Card,
    Button

} from 'react-bootstrap';
import Meta from '../../components/Helmet/Meta';
import './studentStyles.css'

const StudentScreen = () => {
    return (
        <Container className='studentContainer'>
            <Meta
                title="فضاء المستخدم   "
            />
            <h1>فضاء المستخدم </h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h4 style={{color: "red"}} >مرحبا بيك </h4>
            <br />
            <br />
            <br />
            <h4 className="student-title">معنا بش تغير حياتك, مزالت عندك فرصة ثانية </h4> 
            <br />
            <br />
            <br />
     

            <h4 >
                جرب نموذج الفرصة الثانية للعودة إلى التعليم أو التدريب للمراهقين  
                <br></br>  
                <br></br> 
                .الذين تتراوح أعمارهم بين 12 و 18 عامًا والذين تركوا التعليم قبل الأوان
                <br></br>
                <br></br> 
                <br></br>  
                <br></br>  
                <br></br>  

                تعرف على خدمات برنامج الفرصة الثانية    </h4>

                <Row className="row-one justify">
                    <CardDeck>
                        <Card border="primary" style={{ width: '45rem' }}>

                            <Card.Body>
                                <Card.Title className="card-titile">
                                    : معاك - MA3AK 
                                    <br></br> 
                                    <br></br> 
                                      خدمة استقبال ودعم وتوجيه </Card.Title>
                              
                            </Card.Body>

                        </Card>
                        
                        <Card border="primary" style={{ width: '25rem' }}>
                            <Card.Body>
                                <Card.Title className="card-titile"> :انطلق - INTALE9
                                <br></br>
                                <br></br> 
                                 تخص  شباب الذين تم توجيههم من قبل "معاك" والذين يحتاجون إلى ترقية للعودة إلى المدرسة أو التدريب المهني </Card.Title>
                                
                            </Card.Body>
                        </Card>

                    </CardDeck>
                </Row>

            <br />
            <br />
            <br />
            <br />
            <br />
        </Container>
    )
}

export default StudentScreen