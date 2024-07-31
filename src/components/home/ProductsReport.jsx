import React from 'react'
import { Link } from 'react-router-dom'
import { Productsreport } from '../../data/Data'

const ProductsReport = () => {
  return (
    <section className='mb-3'>
        <div className="containerb">
        <ul className='grid grid-cols-3  gap-x-3  '>
            {
              Productsreport.map((e)=>{
                return(
                    <li key={e.id} className='shadow-xl drop-shadow-xl h-56 py-5 px-4 lg:px-5 z-50 rounded-2xl relative'>
                    <Link className='relative flex flex-col justify-between min-h-[170px] '>
                        {/* left top */}
                        <div className='max-w-[326px] mb-8'>
                            <h3 className='md:text-xl xl:text-2xl font-semibold text-head leading-7 mb-1.5'>{e.title}</h3>
                            <p className='text-sm font-medium text-head leading-[18px] max-w-[181px]'>{e.sharx}</p>
                        </div>
                        {/* bottom */}
                        <div className='flex items-center z-0 justify-between'>
                            <button>
                                <img src={e.btn} alt="" />
                            </button>
                            {/* img */}
                            <div className='absolute right-0 top-14'>
                                <img src={e.img} alt="" />
                            </div>
                        </div>
                    </Link>
                </li>
                
                )
              })
            }
        </ul>
        </div>
    </section>
  )
}

export default ProductsReport