import { ButtonVariants, Sizes } from '@/utils'
import { Button, Input, Select } from '@/widgets'
import React from 'react'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { TbTrash } from 'react-icons/tb'

const ServiceFee = () => {
    return (
        <section className=" relative w-full">
            <div className="space-y-1 min-h-[3.5rem] bg-lapisLazuli page-padding">
                <h1 className='text-2xl'>Fee</h1>
            </div>
            <div className='space-y-6 relative top-[70%] w-full z-10 page-padding bg-white min-h-[7.5rem] shadow-md text-grey '>
                <h1 className=' text-xl text-coolBlack'>Customer Payment Fee</h1>

                <table className='w-full text-left text-sm  border-spacing-4'>
                    <thead>
                        <tr>
                            {customerTable.map(data => (
                                <th>
                                    {data.heading}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            {customerTable.map((data, index) => (
                                <td key={index}>
                                    {data.value}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='space-y-6 relative w-full  p-4 bg-white min-h-[12.5rem] shadow-md text-grey'>
                <h1 className=' text-xl text-coolBlack'>Beneficiary Payment Fee</h1>

                <table className='w-full text-left text-sm space-4  border-spacing-4'>
                    <thead>
                        <tr>
                            {/* {beneficiaryTableHeaders.map((header, index) => (

                                <th key={index} className='w-[10%]'>
                                    {header}
                                </th>
                        ))} */}
                            <th className="w-[10%]">Country</th>
                            <th className="w-[15%]">Payout</th>
                            <th className="w-[15%]">Start Level Amount</th>
                            <th className="w-[15%]">End Level Amount</th>
                            <th className="w-[5%]">Fee</th>
                            <th className="w-[10%]">Fee Currency</th>
                            <th className="w-[10%]">Status</th>
                            <th className="w-[10%]">Edit</th>
                            <th className="w-[10%]">Delete</th>
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

                                <td>{data.endLevelAmount}</td>
                                <td>{data.fee}</td>
                                <td>{data.feeCurrency}</td>
                                <td>{data.status}</td>
                                <td className="text-red" colSpan={1}>
                                    <div className="flex items-center gap-x-1">

                                    <MdOutlineModeEditOutline />
                                    {data.edit}
                                    </div>
                                </td>
                                <td className="text-red" colSpan={1}>
                                    <div className="flex items-center gap-x-1">
                                    <TbTrash />
                                    {data.delete}
                                    </div>
                                </td>
                            </tr>
                        ))}
                        <tr className=''>
                            <td>

                                <Select>
                                    <option value="india">India</option>
                                    <option value="nigeria">Nigeria</option>
                                </Select>
                            </td>
                            <td>

                                <Select>
                                    <option value="bank">Bank to Bank Deposit</option>
                                </Select>
                            </td>
                            <td>

                                <Input />
                            </td>
                            <td>

                                <Input />
                            </td>
                            <td>

                                <Input />
                            </td>
                            <td>

                                <Select>
                                    <option value="cad">CAD</option>
                                    <option value="ngn">NGN</option>
                                </Select>
                            </td>

                            <td>
                                <Button
                                    variant={ButtonVariants.FILLED_RED}
                                    size={Sizes.SM}
                                    // onClick={logout}
                                    className="w-full flex rounded-full text-center justify-center"
                                >
                                    Add
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ServiceFee


const customerTable = [
    { heading: 'Payment Type', value: 'Interac' },
    { heading: "Fees", value: "	0.00" },
    { heading: "Fee Currency", value: "	CAD" },
    { heading: "Active", value: "True" },
    { heading: "Edit", value: "Edit" },
]
const beneficiaryTableHeaders = [
    'Country', 'Payout', 'Start Level Amount', 'End Level Amount', 'Fee', 'Fee Currency', 'Status', 'Edit', 'Delete'
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
    {
        country: 'Nigeria',
        payout: 'Bank to Bank Deposit',
        startLevelAmount: 2823,
        endLevelAmount: 3927,
        fee: 30,
        feeCurrency: 'CAD',
        status: "True",
        edit: 'Edit',
        delete: 'Delete',
    },
    {
        country: 'Nigeria',
        payout: 'Bank to Bank Deposit',
        startLevelAmount: 3139,
        endLevelAmount: 3685,
        fee: 41,
        feeCurrency: 'CAD',
        status: "True",
        edit: 'Edit',
        delete: 'Delete',
    },
    {
        country: 'Nigeria',
        payout: 'Bank to Bank Deposit',
        startLevelAmount: 2444,
        endLevelAmount: 3853,
        fee: 8,
        feeCurrency: 'CAD',
        status: "True",
        edit: 'Edit',
        delete: 'Delete',
    },
    {
        country: 'Nigeria',
        payout: 'Bank to Bank Deposit',
        startLevelAmount: 2892,
        endLevelAmount: 3879,
        fee: 11,
        feeCurrency: 'CAD',
        status: "True",
        edit: 'Edit',
        delete: 'Delete',
    },
    {
        country: 'Nigeria',
        payout: 'Bank to Bank Deposit',
        startLevelAmount: 1493,
        endLevelAmount: 3468,
        fee: 15,
        feeCurrency: 'CAD',
        status: "True",
        edit: 'Edit',
        delete: 'Delete',
    },
    {
        country: 'Nigeria',
        payout: 'Bank to Bank Deposit',
        startLevelAmount: 1559,
        endLevelAmount: 3967,
        fee: 19,
        feeCurrency: 'CAD',
        status: "True",
        edit: 'Edit',
        delete: 'Delete',
    },
    {
        country: 'Nigeria',
        payout: 'Bank to Bank Deposit',
        startLevelAmount: 1860,
        endLevelAmount: 3888,
        fee: 49,
        feeCurrency: 'CAD',
        status: "True",
        edit: 'Edit',
        delete: 'Delete',
    },
];



