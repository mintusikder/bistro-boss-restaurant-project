import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-center md:w-3/12 mx-auto my-8'>
            <p  className='text-[#D99904] mb-3'>{subHeading}</p>
            <h2 className='text-3xl border-y-4 p-3 uppercase'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;