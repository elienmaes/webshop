import React from 'react';
import koffie from '../assets/images/nathan-dumlao-c2Y16tC3yO8-unsplash.jpg';

import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="container-fluid homepage">
      <div className="row">
          <div className="col-lg-6">
            <img src={koffie} alt="koffie"/>
          </div>
          <div className="col-lg-6 homepage-content">
            <div className="quote">
              <q>What goes best with a cup of coffee? Another cup!</q>
              <p>- Henry Rollins</p>
            </div>
            <div className="content-section">
              <h1>Op zoek naar lekkere koffiebonen?</h1>
              <p>Met meer dan 100 verschillende soorten koffiebonen bent u hier op het juiste adres voor uw zoektocht naar dat ene lekkere kopje koffie.</p> 
              <p>Wij bieden een keuze uit bekende merken zoals Douwe Egberts en Illy en Lavazza. Daarnaast willen we u de minder bekende merken zoals Tiktak en Mövenpick zeker niet onthouden.</p>
          </div>

            <div className="content-section">
              <h1>Koffiebonen, gemalen koffie, capsules, pads: welke moet ik kiezen?</h1>
              <p>Als koffieliefhebber zijn er een aantal belangrijke aspecten waar u op moet letten bij de keuze voor uw favoriete koffie. De blend, de maling en de intensiteit spelen hierbij een hele grote rol.</p> 
          </div>
            <div className="content-section">
              <h1>Enkele koffieweetjes die we u niet willen weerhouden:</h1>
              <ul>
                <li>Espresso's hebben vaak een hoge intensiteit maar bevatten minder cafeïne dan filterkoffie.</li>
                <li>Hoe langer de boon wordt geroosterd, des te meer de smaak van de koffie bitter wordt.</li>
                <li>Je kunt het beste voordat je koffie drinkt een glas water drinken. Het water reinigt je smaakpapillen, wat er voor zorgt dat je de aroma's beter proeft. </li>
                <li>Het duurt ongeveer drie uur voordat koffie in je lichaam is uitgewerkt.</li>
                <li>Koffie bevat meer aroma's dan wijn. </li>
                <li>De eerste koffie werd gevonden in Ethiopië.</li>
                <li>Koffiebonen zijn eigenlijk geen bonen, maar pitten van de koffiebes. </li>
                <li>Korter roosteren zorgt voor een zuurdere smaak.</li>
                <li>Het woord 'espresso' komt van het Latijnse woord voor 'uitpersen'. </li>
              </ul>
          </div>
        </div>
      </div>
      
      
    </div>

  );
};

export default HomePage;