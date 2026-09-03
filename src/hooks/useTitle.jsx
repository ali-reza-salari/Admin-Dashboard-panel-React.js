import {useEffect} from "react";

export default function useTitle(pageTitle) {
    useEffect(() => {
        document.title = pageTitle
    }, []);

    return { pageTitle }
}