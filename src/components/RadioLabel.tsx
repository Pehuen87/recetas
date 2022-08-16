import React from 'react'

export const RadioLabel = ({value}:{value:number}) => {
  return (
    <>
    <input type="radio" name="radioReviews" value={value} id={'radio_'+value} required={true} />
    <label htmlFor={'radio_'+value}>{value}</label>
    </>
  )
}
