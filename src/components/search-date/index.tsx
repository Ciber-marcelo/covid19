type SearchDateProps = {
    onChange: any
    onClick?: any
    disabled?: boolean
}

export default function SearchDate({ onChange, onClick, disabled }: SearchDateProps) {
    return (
        <div className='flex '>
            <input
                className="
                    px-3 
                    border-color1 
                    border-4
                    border-r-0
                    rounded-l-md
                    focus:outline-none
                "
                type="date"
                onChange={onChange}>
            </input>

            <button 
                className={`
                    flex 
                    p-3
                    items-center 
                    ${disabled === true && 'bg-gray-400'}
                    bg-color1 
                    ${disabled === false && 'hover:bg-blue-700'}
                    ${disabled === false && 'active:bg-blue-900'}
                    rounded-r-md
                    text-white
                `}
                onClick={onClick}
                disabled={disabled}
            >Pesquisar</button>
        </div>
    )
}