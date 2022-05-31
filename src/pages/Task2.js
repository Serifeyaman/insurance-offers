import DataLoading from 'components/DataLoading'
import InsuranceListCard from 'components/InsuranceListCard'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import { getOffersCase_2 } from 'redux/insuranceOffers/action'
import { sortedArrayByPrice } from 'utility/ArraySort'

const Task2 = () => {

  const { case2OfferList, case2LoadingData } = useSelector(state => state.OffersReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOffersCase_2())
  }, [])

  useEffect(() => {
    sortedArrayByPrice(case2OfferList)
  }, [case2OfferList])


  return (
    <div className='main-div'>
      <div style={{ height: '85%', width: '85%', overflow: 'scroll', position: 'relative' }}>
        {case2LoadingData ?
          <DataLoading /> :
          <>
            <Link to="/"><Button className='mb-2 back-btn' > {`<`} </Button></Link>
            {
              case2OfferList?.map((item, key) => (
                <InsuranceListCard item={item} key={key} />
              ))
            }
          </>
        }

      </div>
    </div>
  )
}

export default Task2