export default function Table({ children }) {
    return (
        <table className={`w-full min-w-[760px] text-left text-sm`}>
            {/*<p>Table</p>*/}
            {children}
        </table>
    )
}