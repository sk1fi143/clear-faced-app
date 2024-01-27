import React from 'react'
import { Article } from './article'
import list from '../assets/img/articlesList.png';
import list2 from '../assets/img/artList2.png';

export const AllArcticles = () => {

  return (
    <div className='AllArcticles'>
        <img src={list} alt='' className='list'></img>
        <img src={list2} alt='' className='list2'></img>
        <h1 className='AllArcticles__title'>СТАТЬИ</h1>
        <div className='AllArcticles__col'>
            <Article />
            <Article />
            <Article />
        </div>
    </div>
  )
}
