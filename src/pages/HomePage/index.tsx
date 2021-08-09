import React from 'react'
import { HomeAside } from '../../components/HomeAside'
import { HomeHeader } from '../../components/HomeHeader'
import { HomeMain } from '../../components/HomeMain'
import { DivCol, DivRow } from './styles'

export const HomePage = () => {
  return (
    <DivCol>
      <HomeHeader />
      <DivRow>
        <HomeMain />
        <HomeAside />
      </DivRow>
    </DivCol>
  )
}
