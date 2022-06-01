import DataLoading from 'components/DataLoading'
import InsuranceListCard from 'components/InsuranceListCard'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Col, Row } from 'reactstrap'
import { getOfferCountCase3, getOffersCase_3 } from 'redux/insuranceOffers/action'
import { sortedArrayByPrice } from 'utility/ArraySort'
import ContentSkeleton from 'components/ContentSkeleton'
import { Link } from 'react-router-dom'

export const SkeletonShow = ({ offerCount, offerList }) => {
  var contentCount = offerCount - offerList?.length;
  return Array.from({ length: contentCount })?.map((item, key) => <ContentSkeleton key={key} />)
}

const Task3 = () => {

  const [offerList, setOfferList] = useState([])
  const { case3OfferData, offerCount, offerCountLoadingData } = useSelector(state => state.OffersReducer)
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

  return (
    <div className='main-div'>
      <div style={{ height: '85%', width: '85%', overflow: 'scroll', position: 'relative' }}>
        {
          offerCountLoadingData ?
            <DataLoading />
            :
            <>
              <Link to="/"><Button className='mb-2 back-btn' > {`<`} </Button></Link>
              <Card className='mt-3 mb-3' className='count-card'>
                <Row className='count-card-row'>
                  <Col xl="3" lg="3" md="5" sm="5" xs="6" className='count-col' style={{ justifyContent: 'flex-start' }}>
                    <h5 style={{ color: '#8aa2de', margin: 0 }}>Gösterilen Teklif Sayısı :</h5>
                  </Col>
                  <Col xl="2" lg="2" md="4" sm="4" xs="6" className='count-col'>
                    <span className='countBadge'>
                      <p style={{ color: 'white', margin: 0, fontWeight: '700' }}>{offerList?.length} {"/"} {offerCount}</p>
                    </span>
                  </Col>
                </Row>
              </Card>
              {
                sortedArrayByPrice(offerList)?.map((item, key) => (
                  <InsuranceListCard item={item} key={key} />
                ))
              }
              <SkeletonShow offerCount={offerCount} offerList={offerList} />
            </>
        }

      </div>
    </div>
  )
}

export default Task3