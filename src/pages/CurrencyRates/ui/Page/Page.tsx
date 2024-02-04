import { ButtonVariants, Sizes } from '@/utils'
import { Button, Input, Select } from '@/widgets'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { TbTrash } from 'react-icons/tb'

const CurrencyRates = () => {
    return (
        <section className=" relative w-full z-0">
            <div className="space-y-1 min-h-[3.5rem] bg-lapisLazuli page-padding flex items-center">
                <h1 className='text-2xl'>Exchange Rates</h1>
            </div>
            <div className='space-y-6 relative  w-full z-10 page-padding bg-white min-h-[7.5rem] shadow-md text-grey pb-8 pt-4'>
              <Button
            variant={ButtonVariants.FILLED_PUMPKIN}
            size={Sizes.SM}
            // onClick={logout}
            className="w-full md:max-w-[10rem] flex rounded-full text-center justify-center"
          >
            Publish
          </Button>
                <h1 className=' text-xl text-coolBlack'>After edit rate always publish using "Publish" button.</h1>
                <span className='border-[.5px] border-dotted border-dollarBill w-full flex ' />
                
                <div className="grid md:flex gap-4 md:items-center md:justify-between">
<Input placeholder='Search...' type='search' className='w-full max-w-sm'/>

                    <div className="flex gap-4 flex-col md:flex-row">
                        <Button className='bg-batteryChargedBlue text-white rounded-full normal-case' size={Sizes.MD}>Export to Excel</Button>
                        <Button className='bg-dollarBill text-white rounded-full normal-case' size={Sizes.MD}>Export to CSV</Button>
                    </div>
                </div>

                <div className="overflow-x-hidden">

                <div className="overflow-x-auto">

                <table className='w-full text-left text-sm  border-spacing-4'>
                    <thead>
                        <tr>
                            {tableHeaders.map(heading => (
                                <th>
                                    {heading}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                                  {dummyData.map((data, index) => (
                            <tr key={index} className='w-full  flex-row'>
                                <td className=''>
                                    {data.country}
                                </td>
                                <td className=''>{data.payout}</td>
                                <td>{data.startLevelAmount}</td>

                                <td className="text-red" colSpan={1}>
                                    <Button applyBaseClassName={false} className="flex items-center gap-x-1" >

                                    <MdOutlineModeEditOutline />
                                    {data.edit}
                                    </Button>
                                </td>
                          
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                </div>

            </div>

       
        </section>
    )
}

export default CurrencyRates

const tableHeaders = [
    'Country', 'Pay Method', 'Our Rates (CAD)', 'Edit'
]

const dummyData = [
    {
        country: 'Nigeria',
        payout: 'Bank to Bank Deposit',
        startLevelAmount: 1805,
        endLevelAmount: 3458,
        fee: 20,
        feeCurrency: 'CAD',
        status: "True",
        edit: 'Edit',
        delete: 'Delete',
    },
    {
        country: 'Nigeria',
        payout: 'Bank to Bank Deposit',
        startLevelAmount: 2177,
        endLevelAmount: 3935,
        fee: 38,
        feeCurrency: 'CAD',
        status: "True",
        edit: 'Edit',
        delete: 'Delete',
    },
    {
        country: 'Nigeria',
        payout: 'Bank to Bank Deposit',
        startLevelAmount: 888,
        endLevelAmount: 3692,
        fee: 9,
        feeCurrency: 'CAD',
        status: "True",
        edit: 'Edit',
        delete: 'Delete',
    },

];



