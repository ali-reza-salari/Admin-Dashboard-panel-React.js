import useTitle from "../../hooks/useTitle.jsx";

export default function NotFound() {
    useTitle("404, Not found :(")
    return (
        <div>
            <p>404, Not found :(</p>
        </div>
    )
}