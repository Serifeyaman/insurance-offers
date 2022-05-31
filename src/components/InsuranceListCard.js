import React from 'react'
import { Button, Card, Col, Row } from 'reactstrap'
import "assets/css/insuranceCard.css"

const InsuranceListCard = ({ item }) => {
    return (
        <Card className='mb-2 outCard'>
            <Row className='cardRow'>
                <Col xl="2" lg="2" md="3" sm="3" xs="2" className='cardImageCol'>
                    <img src={`${item?.ImagePath}`} width={"70%"} />
                </Col>
                <Col xl="8" lg="7" md="5" sm="6" xs="4" className='cardTitleCol'>
                    <span>
                        <h6 className='productDesc-h6'>{item?.ProductDesc}</h6>
                        <p style={{ fontSize: 12 }}>{item?.FirmName}</p>
                    </span>

                </Col>

                <Col xl="2" lg="3" md="4" sm="3" xs="4" >
                    {
                        item?.QuotaInfo?.HasDiscount
                        &&
                        <p className='discount-p'> {item?.QuotaInfo?.PremiumWithDiscount} TL</p>
                    }
                    <h6 className='cash-h6'>{item?.Cash} TL</h6>
                    {
                        item?.SaleClosed
                            ?
                            <Button className='buy-btn outline-btn'
                                style={{ borderColor: '#3a83c7', color: '#3a85c7' }}
                                outline
                            >TELEFONDA SATIN AL</Button>
                            :
                            <Button className='buy-btn' style={{ backgroundColor: '#3a85c7', color: 'white' }} >SATIN AL</Button>
                    }

                </Col>
            </Row>
        </Card>
    )
}

export default InsuranceListCard