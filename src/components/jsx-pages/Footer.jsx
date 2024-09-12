import React, {useContext} from 'react'
import InfoContext from '../infoContext/InfoContext'

const Footer = () => {

    const {infoFooterArray} = useContext(InfoContext)

  return (
    <>
        {infoFooterArray.map((info, index)=>(
            <div key={index}>
                <p>{info.texto} </p>
                <p>{info.empresa}</p>
                <p>Flecha</p>
            </div>
        ))}
    </>
  )
}

export default Footer