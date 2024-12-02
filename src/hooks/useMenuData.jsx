import { useEffect, useState } from "react";


const useMenuData = () => {
    const [menu, setMenu] = useState([])
    const [dataLoading, setDataLoading] = useState(true)

    useEffect(() => {
        setDataLoading(true)
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setDataLoading(false)
            })
    }, [])
    return [menu, dataLoading]
};

export default useMenuData;