import { getProducts } from '@/services/products';
import React, { Suspense } from 'react';
import Image from 'next/image';
import Placeholder from './Placeholder';

const page = async () => {
    const res = await getProducts();

    return (
        <div className='p-5'>
            <div className='my-5 font-bold text-2xl'>รายการสินค้าทั้งหมด</div>
            <div className='grid grid-cols-fluid gap-5'>
                {res &&
                    res.data &&
                    res.data.map((item, index) => {
                        return (
                            <>
                                <Suspense fallback={<Placeholder />} key={index}>
                                    <div className='shadow-lg p-5 rounded-md cursor-pointer'>
                                        <Image
                                            className='w-full h-[300px] object-cover border'
                                            src={item.picture}
                                            alt={item.description}
                                            width={300}
                                            height={300}
                                        />
                                        <div className='mt-3 text-lg'>
                                            <div className='font-semibold'>{item.title}</div>
                                            <div>ราคา {item.price} บาท</div>
                                        </div>
                                    </div>
                                </Suspense>
                            </>
                        );
                    })}
            </div>
            <div className='grid grid-cols-fluid gap-5'>
                {res &&
                    res.data &&
                    res.data.map((item, index) => {
                        return (
                            <>
                                <Suspense fallback={<Placeholder />} key={index}>
                                    <div className='shadow-lg p-5 rounded-md cursor-pointer'>
                                        <Image
                                            className='w-full h-[300px] object-cover border'
                                            src={item.picture}
                                            alt={item.description}
                                            width={300}
                                            height={300}
                                        />
                                        <div className='mt-3 text-lg'>
                                            <div className='font-semibold'>{item.title}</div>
                                            <div>ราคา {item.price} บาท</div>
                                        </div>
                                    </div>
                                </Suspense>
                            </>
                        );
                    })}
            </div>
            <div className='grid grid-cols-fluid gap-5'>
                {res &&
                    res.data &&
                    res.data.map((item, index) => {
                        return (
                            <>
                                <Suspense fallback={<Placeholder />} key={index}>
                                    <div className='shadow-lg p-5 rounded-md cursor-pointer'>
                                        <Image
                                            className='w-full h-[300px] object-cover border'
                                            src={item.picture}
                                            alt={item.description}
                                            width={300}
                                            height={300}
                                        />
                                        <div className='mt-3 text-lg'>
                                            <div className='font-semibold'>{item.title}</div>
                                            <div>ราคา {item.price} บาท</div>
                                        </div>
                                    </div>
                                </Suspense>
                            </>
                        );
                    })}
            </div>
            <div className='grid grid-cols-fluid gap-5'>
                {res &&
                    res.data &&
                    res.data.map((item, index) => {
                        return (
                            <>
                                <Suspense fallback={<Placeholder />} key={index}>
                                    <div className='shadow-lg p-5 rounded-md cursor-pointer'>
                                        <Image
                                            className='w-full h-[300px] object-cover border'
                                            src={item.picture}
                                            alt={item.description}
                                            width={300}
                                            height={300}
                                        />
                                        <div className='mt-3 text-lg'>
                                            <div className='font-semibold'>{item.title}</div>
                                            <div>ราคา {item.price} บาท</div>
                                        </div>
                                    </div>
                                </Suspense>
                            </>
                        );
                    })}
            </div>
            <div className='grid grid-cols-fluid gap-5'>
                {res &&
                    res.data &&
                    res.data.map((item, index) => {
                        return (
                            <>
                                <Suspense fallback={<Placeholder />} key={index}>
                                    <div className='shadow-lg p-5 rounded-md cursor-pointer'>
                                        <Image
                                            className='w-full h-[300px] object-cover border'
                                            src={item.picture}
                                            alt={item.description}
                                            width={300}
                                            height={300}
                                        />
                                        <div className='mt-3 text-lg'>
                                            <div className='font-semibold'>{item.title}</div>
                                            <div>ราคา {item.price} บาท</div>
                                        </div>
                                    </div>
                                </Suspense>
                            </>
                        );
                    })}
            </div>
            <div className='grid grid-cols-fluid gap-5'>
                {res &&
                    res.data &&
                    res.data.map((item, index) => {
                        return (
                            <>
                                <Suspense fallback={<Placeholder />} key={index}>
                                    <div className='shadow-lg p-5 rounded-md cursor-pointer'>
                                        <Image
                                            className='w-full h-[300px] object-cover border'
                                            src={item.picture}
                                            alt={item.description}
                                            width={300}
                                            height={300}
                                        />
                                        <div className='mt-3 text-lg'>
                                            <div className='font-semibold'>{item.title}</div>
                                            <div>ราคา {item.price} บาท</div>
                                        </div>
                                    </div>
                                </Suspense>
                            </>
                        );
                    })}
            </div>

            <div className='grid grid-cols-fluid gap-5'>
                {res &&
                    res.data &&
                    res.data.map((item, index) => {
                        return (
                            <>
                                <Suspense fallback={<Placeholder />} key={index}>
                                    <div className='shadow-lg p-5 rounded-md cursor-pointer'>
                                        <Image
                                            className='w-full h-[300px] object-cover border'
                                            src={item.picture}
                                            alt={item.description}
                                            width={300}
                                            height={300}
                                        />
                                        <div className='mt-3 text-lg'>
                                            <div className='font-semibold'>{item.title}</div>
                                            <div>ราคา {item.price} บาท</div>
                                        </div>
                                    </div>
                                </Suspense>
                            </>
                        );
                    })}
            </div>
        </div>
    );
};

export default page;
