import React from 'react'
import error404Image from '../public/error404.png'
import ErrorPage from '../src/components/ErrorPage/ErrorPage'

export default function Error404 () {
  return (

    <div>
      <ErrorPage title="Error 404" description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna' image={error404Image}/>
    </div>
  )
}
