import './Gallery.css';
import React from 'react'

function Gallery({images}) {
    return (
        <div className='Gallery'>
            <div className="Content">
          {images.map((img)=>(
              <img key={`${img.name}`} src={`${img.url}`} alt="" className="img" />
              
          ))}
         

          </div>
        </div>
    )
}

export default Gallery
