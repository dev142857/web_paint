import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faSave, faPaintBrush, faUndo, faRedo, faRecordVinyl, faEyeDropper, faSolarPanel } from '@fortawesome/free-solid-svg-icons';

export const PaintHeader = () => {
  return (
    <div className='flex justify-center w-full bg-rose-500 rounded-b-3xl'>
      <div className='md:h-32 max-md:h-24 flex justify-between w-4/5'>
        <div className='lg:mx-5 my-7'>
          <FontAwesomeIcon className='max-md:h-10 md:h-full' icon={faHouse} />
        </div>
        <div className='lg:mx-5 my-7'>
          <FontAwesomeIcon className='max-md:h-10 md:h-full' icon={faSave} />
        </div>
        <div className='lg:mx-5 my-7'>
          <FontAwesomeIcon className='max-md:h-10 md:h-full' icon={faPaintBrush} />
        </div>
        <div className='lg:mx-5 my-7 flex justify-center items-center'>
          <p className='text-2xl'>
            35.22%
          </p>
        </div>
        <div className='lg:mx-5 my-7'>
          <FontAwesomeIcon className='max-md:h-10 md:h-full' icon={faUndo} />
        </div>
        <div className='lg:mx-5 my-7'>
          <FontAwesomeIcon className='max-md:h-10 md:h-full' icon={faRedo} />
        </div>
        <div className='lg:mx-5 my-7'>
          <FontAwesomeIcon className='max-md:h-10 md:h-full' icon={faRecordVinyl} />
        </div>
        <div className='lg:mx-5 my-7'>
          <FontAwesomeIcon className='max-md:h-10 md:h-full' icon={faEyeDropper} />
        </div>
        <div className='lg:mx-5 my-7'>
          <FontAwesomeIcon className='max-md:h-10 md:h-full' icon={faSolarPanel} />
        </div>
      </div>
    </div>
  )
}
