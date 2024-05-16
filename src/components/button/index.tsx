// type ButtonProps = {
//     onClick?: any
//     name: string
// }
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ name, ...props }: ButtonProps) {
    return (
        <button
            className={`
            flex
            p-3
            max-h-[55px]
            justify-center
            items-center
            bg-color1 
            text-white 
            rounded-md
            hover:bg-blue-700
            active:bg-blue-900
            `}
            {...props}
        >
            {name}
        </button>
    )
}