import { useEffect, useState } from "react";

const useFetchRestaMenu = (URL, resId) => {

    // state variable to return
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(URL + resId);
                if (!response.ok) {
                    throw new Error(`status - ${response.status}`);
                }
                const jsonData = await response.json();
                setData(jsonData?.data);
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    }, []);


    return data;
};

export default useFetchRestaMenu;