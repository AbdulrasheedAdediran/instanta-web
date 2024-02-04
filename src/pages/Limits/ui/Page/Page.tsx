import React from 'react'

const Limits = () => {
  return (
      <section className=" relative w-full">
          <div className="space-y-1 min-h-[7.5rem] bg-lapisLazuli page-padding"><h1 className='h-bold text-2xl'>Summary</h1>
              <p>(Excluding Canceled)</p>
          
          </div>
          <div className='grid lg:grid-cols-4 gap-6 absolute top-[70%] w-full  page-padding'>
              {cards.map(card => (
                  <div className="grid gap-1 rounded-md p-2" style={{backgroundColor: card.color}}>
                      <p className="">{ card.title}</p>
                      <p className="text-xl">{ card.value}</p>
                  </div>
              )) }
          </div>
    </section>
  )
}

export default Limits

const cards = [
    {
        title: "Total Pending Transactions",
        value: 115,
        color: "#21aae2"
    },
    { title: "Total Transactions of Day", value:3, color: "#f44336"},
    { title: "Completed Transactions of Day", value:3, color: "#8bc24a"},
    { title: "Total Customers of Month", value:0, color: "#ff7d1e"},
    { title: "Total Pending Fee", value:1209.99, color: "#21aae2"},
    { title: "Total Collected Fee", value:27919.99, color: "#f44336"},
    { title: "Total Current Day Collected Fee", value:15.00, color: "#8bc24a"},
    { title: "Total Current Month Collected Fee", value:160.00, color: "#ff7d1e"},
    { title: "Total Amount of Day", value:0.00, color: "#8bc24a"}
]