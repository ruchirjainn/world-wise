import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
    const [searchParams] = useSearchParams(); // searchParams is used to get parameters from URL

    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng"); 

    return [lat, lng];
}