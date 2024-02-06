import React, {useId} from 'react'

const Input = React.forwardRef(
    function Input({
        label,
        type = 'text',
        className = '',
        ...props
    }, ref){
        const id = useId()
        return (
            <div className='w-[20vw] mb-3'>
                {label && <label className='inline-block mb-2 pl-1'
                htmlFor={id}
                >{label}
                </label>}
                <input 
                type={type} 
                className={`${className} px-3 py-2 rounded-md bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-400 w-full`}
                ref={ref}
                {...props}
                id={id}
                />
            </div>
        )
    }
)

export default Input
