import DataLoading from 'components/DataLoading'
import InsuranceListCard from 'components/InsuranceListCard'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Col, Row } from 'reactstrap'
import { getOfferCountCase3, getOffersCase_3 } from 'redux/insuranceOffers/action'
import { sortedArrayByPrice } from 'utility/ArraySort'
import "assets/css/offersCount.css"

const Task3 = () => {

  const [offerList, setOfferList] = useState([])

  const { case3OfferData, case3LoadingData, offerCount } = useSelector(state => state.OffersReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOfferCountCase3())
  }, [])

  useEffect(() => {
    offerList?.length < offerCount && dispatch(getOffersCase_3())
  }, [offerCount, offerList])

  useEffect(() => {
    offerList?.length < offerCount && setOfferList([...offerList, case3OfferData])
  }, [case3OfferData])


  // useEffect(() => {
  //   (!case3LoadingData && offerList?.length < offerCount) && setOfferList([...offerList, case3OfferData])
  // }, [case3OfferData || case3LoadingData])

  return (
    <div className='main-div'>
      <div style={{ height: '85%', width: '85%', overflow: 'scroll', position: 'relative' }}>
        <Card className='mt-3 mb-3' className='count-card'>
          <Row className='count-card-row'>
            <Col xl="3" lg="3" md="5" sm="5" xs="6" className='count-col' style={{justifyContent:'flex-start'}}>
              <h5 style={{ color: '#8aa2de', margin: 0 }}>Gösterilen Teklif Sayısı :</h5>
            </Col>
            <Col xl="2" lg="2" md="4" sm="4" xs="6" className='count-col'>
              <span className='countBadge'>
                <p style={{ color: 'white', margin: 0, fontWeight:'700' }}>{offerList?.length} {"/"} {offerCount}</p>
              </span>
            </Col>
          </Row>
        </Card>
        {
          case3LoadingData ?
            <DataLoading />
            :
            sortedArrayByPrice(offerList)?.map((item, key) => (
              <InsuranceListCard item={item} key={key} />
            ))
        }

      </div>
    </div>
  )
}

export default Task3