import React from 'react'
import { Helmet } from 'react-helmet';
import { BrandTable, KeyboardTable, LayoutTable, SwitchTable } from '../../components'

const Edit = () => {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ahmad Fakhri</title>
      </Helmet>
      <SwitchTable/>
      <KeyboardTable/>
      <LayoutTable/>
      <BrandTable/>
    </>
  )
}

export default Edit;