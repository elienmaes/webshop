import React from 'react'
import nf from '../assets/images/izz-r-VKPLOCtxJRs-unsplash.jpg';

 function NotFoundPage() {
  return (
    <div>
      <h1>Helaas, alle koffie is hier op. Keer snel terug!</h1>
      <img src={nf} alt="lege koffietassen"></img>
    </div>
  )
}
export default NotFoundPage;