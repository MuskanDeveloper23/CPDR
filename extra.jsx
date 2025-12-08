import React from 'react'
import './Report.css'
import Footer from '../../Footer/Footer'
import {cards} from '../../data/cards'
const Report = () => {
  
  return (
    <div className='Report'>

      <div className='Report-page'>
        <h1>Reports & Publications</h1>
        <p className='pera'>Fact-findling, investigations, and research reports by CPDR-TN</p>
        <div className='btn-group'>
          <button active>All</button>
          <button>Human Rights</button>
          <button>Fact-Findlig</button>
          <button>Kashmir</button>
          <button>Democracy</button>
        </div>
        <div className='Card-group'>
          <div className='card-Box'>
            <h2>Review  of the BJP Regime</h2>
            <p>A detailed analysis of political and economic changes under the current regime,
               comparing governance models and their impact on civil liberties.</p>
            <div className='date-topic'>
              <div className='date'>
                <i class="fa-regular fa-calendar"></i> Aug 2019
              </div>
              <span>Politics Democracy</span>
            </div>
          </div>

          

           <div className='card-Box'>
            <h2>Covid-19 and the Economic Downturn</h2>
            <p>An examination of the pandemic’s impact on India’s economy, 
              focusing on government responses, financial distress, and policy effectiveness.</p>
            <div className='date-topic'>
              <div className='date'>
                <i class="fa-regular fa-calendar"></i> Aug 2019
              </div>
              <span>Politics Democracy</span>
            </div>
          </div>



           <div className='card-Box'>
            <h2>Kashmir: The Long Road to Peace</h2>
            <p>A comprehensive report on the ongoing conflict in Kashmir, 
              exploring historical, political, and humanitarian dimensions of the crisis.</p>
            <div className='date-topic'>
              <div className='date'>
                <i class="fa-regular fa-calendar"></i> Aug 2019
              </div>
              <span>Politics Democracy</span>
            </div>
          </div>


           <div className='card-Box'>
            <h2>Custodial Deaths in India</h2>
            <p>An in-depth investigation into rising custodial deaths,
               highlighting patterns of police brutality and failures in accountability mechanisms.</p>
            <div className='date-topic'>
              <div className='date'>
                <i class="fa-regular fa-calendar"></i> Aug 2019
              </div>
              <span>Politics Democracy</span>
            </div>
          </div>




           <div className='card-Box'>
            <h2>The Status of Democracy in India</h2>
            <p>A critical assessment of democratic structures, 
              electoral processes, civil liberties, and the shrinking space for dissent in India.</p>
            <div className='date-topic'>
              <div className='date'>
                <i class="fa-regular fa-calendar"></i> Aug 2019
              </div>
              <span>Politics Democracy</span>
            </div>
          </div>



           <div className='card-Box'>
            <h2>Economic Impact of the Pandemic</h2>
            <p>An evaluation of how the pandemic reshaped India’s economic landscape, 
              affecting livelihoods, labour markets, and vulnerable groups.</p>
            <div className='date-topic'>
              <div className='date'>
                <i class="fa-regular fa-calendar"></i> Aug 2019
              </div>
              <span>Politics Democracy</span>
            </div>
          </div>


          
           <div className='card-Box'>
            <h2>Human Rights Violations in Conflict Zones</h2>
            <p>A detailed study of rights violations in conflict-affected regions, 
              documenting displacement, abuses, and gaps in legal protection.</p>
            <div className='date-topic'>
              <div className='date'>
                <i class="fa-regular fa-calendar"></i> Aug 2019
              </div>
              <span>Politics Democracy</span>
            </div>
          </div>



          
           <div className='card-Box'>
            <h2>Freedom of Expression Under Threat</h2>
            <p>An analytical report on restrictions on speech, censorship trends, misuse of laws,
               and shrinking media independence across India.</p>
            <div className='date-topic'>
              <div className='date'>
                <i class="fa-regular fa-calendar"></i> Aug 2019
              </div>
              <span>Politics Democracy</span>
            </div>
          </div>

           <div className='card-Box'>
            <h2>Land Rights and Displacement</h2>
            <p>A fact-finding review of land acquisition practices, forced displacement of communities, and the failure to uphold rehabilitation rights.</p>
            <div className='date-topic'>
              <div className='date'>
                <i class="fa-regular fa-calendar"></i> Aug 2019
              </div>
              <span>Politics Democracy</span>
            </div>
          </div>

        </div>
      </div>



      <Footer />
    </div>

  )
}

export default Report
