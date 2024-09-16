import { useParams } from "react-router-dom"


const User = () => {
    const { userid } = useParams()

    return (
        <div className="max-w-[999px] mx-auto text-center text-white bg-gray-400 text-3xl">User:{userid}</div>
    )
}

export default User