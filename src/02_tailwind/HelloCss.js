import './HelloCss.css';

import HelloCssImage from './HelloCssImage'
import HelloCssmeg from './HelloCssmeg'
import HelloWhite from './HelloWhite';
import Helloyellow from './Helloyellow';
import { WiMoonWaningCrescent3 } from "react-icons/wi";

export default function HelloCss() {
  const apikey = process.env.REACT_APP_MV_API;
  console.log(apikey)

  return (
    <div className='hellomain'>
      <div className='flex flex-row '>
      <WiMoonWaningCrescent3 className='w-72 h-36'/>
        <HelloCssImage />
        <HelloCssImage />
        <HelloCssImage />
        
        </div>
        <div className='flex flex-row m-10'>
        <HelloCssmeg className='m-6'/>
        <HelloWhite className='m-6'/>
        <Helloyellow className='m-6'/>
        </div>
    </div>
  )
}


