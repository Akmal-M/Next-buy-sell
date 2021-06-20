import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'

async function fetcher(path) {

    const res = await fetch(path)
    const json = await res.json()
    return json

}

const Geo = () => {

    const { data, error } = useSWR('/api/geo', fetcher)

    if (error) return <div>Error! Failed to find geolocation</div>

    const { geo } = data

    return (
        <ul>
            {
                Object.keys(geo).map((key, i) => {

                    return <li key={i}><strong>{key}: </strong>{geo[key]}</li>

                })
            }
        </ul>
    )

}

export default Geo