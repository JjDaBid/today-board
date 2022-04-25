import React from 'react'
import loadingIcon from '../../assets/icons/icon.svg'
import './Loading.css'

function LoadingC() {
  return (
    <section className='prib'>
      <span className='loading-completeIcon'><img src={loadingIcon} alt="" /></span>
          <p className="loading-message">Estamos Cargando...</p>
       <span className='loading-deleteIcon'><img src={loadingIcon} alt="" /></span>
    </section>

    
  )
}

export { LoadingC }