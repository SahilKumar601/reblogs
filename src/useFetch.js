import {useState,useEffect} from 'react'

const useFetch = (url) => {
    const [error,seterror]=useState();
    const [data, setdata] = useState([]);
    const [ispending, setpending] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    if (!res.ok) {
                        throw Error("Couldn't Fetch the Data For that Request");
                    }
                    return res.json();
                })
                .then(data => {
                    setdata(data);
                    setpending(false);
                })
                .catch((err) => {
                    setpending(false);
                    seterror(err.message);
                });
        }, 1000);
    }, [url]);
    return ( {data,ispending,error} );
}
 
export default useFetch;