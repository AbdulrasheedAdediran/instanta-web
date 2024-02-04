import { Button } from '@/widgets'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { TbTrash } from 'react-icons/tb'

const Limits
 = () => {
    return (
        <section className=" relative w-full z-0">
            <div className="space-y-1 min-h-[3.5rem] bg-lapisLazuli page-padding flex items-center">
                <h1 className='text-2xl'>Exchange Rates</h1>
            </div>
            <div className='space-y-6 relative  w-full z-10 page-padding bg-white min-h-[7.5rem] shadow-md text-grey pb-8 pt-4'>
         
                <h1 className=' text-xl text-coolBlack'>List</h1>
             

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
                                  {dataArray.map((data, index) => (
                            <tr key={index} className='w-full  flex-row'>
                                <td className=''>
                                    {data.minLevelAmount}
                                </td>
                                <td className=''>{data.maxLevelAmount}</td>
                                <td>{data.feeCurrency}</td>
                                <td>{data.limitType}</td>
                                <td>{data.status}</td>

                                   <td className="text-red" colSpan={1}>
                                    <Button applyBaseClassName={false} className="flex items-center gap-x-1" >

                                    <MdOutlineModeEditOutline />
                                    {data.edit}
                                    </Button>
                                </td>
                                <td className="text-red" colSpan={1}>
                                    <Button  applyBaseClassName={false} className="flex items-center gap-x-1">
                                    <TbTrash />
                                    {data.delete}
                                    </Button>
                                </td>
                          
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                </div>
   <div className='border-[.5px] border-solid border-dollarBill w-full flex '>
<p className="text-russianGreen font-[600] p-2">Limit displayed here will be applied on 'Total Amount Payable' i.e. Send Amount + Fee</p>
                </div>
            </div>

       
        </section>
    )
}

export default Limits


const tableHeaders = [
    'Min Level Amount', 'Max Level Amount', 'Currency', 'Limit Type','KYC Status','Edit', 'Delete'
]

const dataArray = [
  {
    minLevelAmount: 1805,
    maxLevelAmount: 3458,
    feeCurrency: 'CAD',
    limitType: 'PerTransaction',
    status: "Completed Level 1",
    edit: 'Edit',
    delete: 'Delete',
  },
  {
    minLevelAmount: 2200,
    maxLevelAmount: 4000,
    feeCurrency: 'CAD',
    limitType: 'Yearly',
    status: "Completed Level 2",
    edit: 'Edit',
    delete: 'Delete',
  },
  {
    minLevelAmount: 888,
    maxLevelAmount: 3692,
    feeCurrency: 'CAD',
    limitType: 'PerTransaction',
    status: "Completed Level 1",
    edit: 'Edit',
    delete: 'Delete',
  },
  {
    minLevelAmount: 2500,
    maxLevelAmount: 3800,
    feeCurrency: 'CAD',
    limitType: 'Yearly',
    status: "Completed Level 2",
    edit: 'Edit',
    delete: 'Delete',
  },
  {
    minLevelAmount: 3000,
    maxLevelAmount: 5000,
    feeCurrency: 'CAD',
    limitType: 'PerTransaction',
    status: "Completed Level 1",
    edit: 'Edit',
    delete: 'Delete',
  }
];



