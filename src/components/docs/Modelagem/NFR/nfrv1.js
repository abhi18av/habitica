import React from 'react'
import { Link } from 'react-router-dom'
import ReactImageMagnify from 'react-image-magnify'

import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import img from '../../../../assets/NFRHabiticav1.png'

const NFRV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="NFR V1" author="Rogério Júnior e Youssef Muhamad"/>

    <Card style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'NFR V1',
                            src: img,
                            isFluidWidth: true,
                        },
                        largeImage: {
                            src: img,
                            width: 3000,
                            height: 2500
                        },
                        isHintEnabled: true,
                        enlargedImagePosition: "over",
                    }} />
    </Card>

  </div>
)

export default NFRV1
