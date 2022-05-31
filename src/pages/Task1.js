import InsuranceListCard from 'components/InsuranceListCard'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOffersCase_1 } from 'redux/insuranceOffers/action'

const Task1 = () => {
  const { case1OfferList } = useSelector(state => state.OffersReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOffersCase_1())
  }, [])

  return (
    <div className='main-div'>
      <div style={{ height: '85%', width: '85%', overflow: 'scroll', position: 'relative' }}>
        {
          case1OfferList?.map((item, key) => (
            <InsuranceListCard item={item} key={key} />
          ))
        }
      </div>
    </div>
  )
}

export default Task1