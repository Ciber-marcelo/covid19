type SearchProps = {
    onChange: any
}

export default function Search({ onChange }: SearchProps) {
    return (
            <input
                onChange={onChange}
                maxLength={25}
                className="
                    flex
                    max-w-[250px]
                    p-3 
                    border-4
                    border-color1
                    text-black
                    placeholder:text-gray
                    placeholder:font-normal
                    focus:outline-none
                    rounded-md
                    font-roboto 
                "
                placeholder="Pesquisar"
            />
    )
}