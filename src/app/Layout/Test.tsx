"use client"

import React from 'react'
import { Btn } from '../components/Btn'

type Props = {}

export const Test = ({}: Props) => {
  return (
    <Btn label="Click me" onClick={() => console.log('clicked')} />
  )
}
