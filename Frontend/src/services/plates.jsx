import { useState } from "react";

export default function platesServices() {
    const [platesLoading, setPlatesLoading] = useState(false)
    const [refetchPlates, setRefetchPlates] = useState(true)
    const [platesList, setPlatesList] = useState([])

    const url = 'https://projeto-gastronomy-backend.onrender.com/plates'

    const getAvailablePlates = () => {
        setPlatesLoading(true)
        fetch(`${url}/availables`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.success) {
                setPlatesList(result.body)
            } else {
                console.log(result)
            }        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => [
            setPlatesLoading(false),
            setRefetchPlates(false)
        ])
    }
    return { getAvailablePlates, platesLoading, refetchPlates, platesList }
}