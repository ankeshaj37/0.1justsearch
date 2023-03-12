import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ViweData.css'

const ViweData = () => {
  return (
    <div className='bo container'>
      <div className='cardss row'>
        
        <div className='ww col-lg-6'>
          <div className='images'>
            <img className='img' src='https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/er_main_wide/public/2018/01/samsung_ssd_card_0.jpg?itok=GQ2VYoiH' />
          </div>
          <div className='lotimge '>
          <div className='child'>
            <img className='img' src='https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/er_main_wide/public/2018/01/samsung_ssd_card_0.jpg?itok=GQ2VYoiH' />
          </div>
          <div className='child' >
            <img className='img' src='https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/er_main_wide/public/2018/01/samsung_ssd_card_0.jpg?itok=GQ2VYoiH' />
          </div>
          <div className='child'>
            <img className='img' src='https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/er_main_wide/public/2018/01/samsung_ssd_card_0.jpg?itok=GQ2VYoiH' />
          </div>
          <div className='child'>
            <img className='img' src='https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/er_main_wide/public/2018/01/samsung_ssd_card_0.jpg?itok=GQ2VYoiH' />
          </div>
          
        </div>

        </div>
        <div className='col-lg-6'>
          <div className='images'>

            <div className='price'>
              <h2>Ankesh Sunil Jambharkar</h2>
              <br />
              <h6>FREE DELIVERY ALL OVER INDIA</h6>
              <h3 className='h3' >Price : 999</h3>
            </div>
            <div className='btn'>
              <button>call</button>
              <button>Enqury</button>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
      <div className='tabss'>
      <Tabs>
    <TabList>
      <Tab><h5>Description</h5></Tab>
      <Tab><h5>Reviews</h5></Tab>
      <Tab><h5>Related Services</h5></Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
      </div>
   
    </div>
  )
}

export default ViweData
