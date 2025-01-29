import React from 'react'
import { RevenueCard } from './components/RevenueCard.jsx'



function App() {
  return <div className='grid grid-cols-4'>
    <div>
      <RevenueCard title={"Amount pending"} amount={"92,312.00"} orderCount={"13 orders"}></RevenueCard>
    </div>
  </div>
}

export default App
