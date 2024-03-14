import './HelloCss.css';

import HelloCssImage from './HelloCssImage'
import HelloCssmeg from './HelloCssmeg'
import HelloWhite from './HelloWhite';
import Helloyellow from './Helloyellow';

export default function HelloCss() {
  return (
    <div className='hellomain'>

        <HelloCssImage />
        <HelloCssmeg/>
        <HelloWhite/>
        <Helloyellow/>
    </div>
  )
}


