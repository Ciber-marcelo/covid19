type TagProps = {
    name: string
    onClick: any
}

export default function Tag({ name, onClick }: TagProps) {
    return (
        <button onClick={onClick} className=' bg-color1 text-white p-1 rounded-md'>{name}</button>
    )
}