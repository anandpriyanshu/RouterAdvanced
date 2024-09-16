
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData()
    // const [data, setdata] = useState([])

    // console.log('render')
    // useEffect(() => {
    //     fetch('https://api.github.com/users/anandpriyanshu').then((res) => res.json()).then((data) => setdata(data))
    // }, [])
    return (
        <>

            <div className="max-w-[999px] mx-auto text-center text-white bg-gray-800 px-4 py-4 text-3xl">
                GitHub followers:{data.public_repos}

                <img src={data.avatar_url} width='300px' />
            </div>

        </>
    )
}

export default Github


export const githubLoader = async () => {
    const response = await fetch('https://api.github.com/users/anandpriyanshu')
    return response.json()
}