export default function Logout() {
    function logout() {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <>
            <button className="btn btn-warning" onClick={() => logout()}>Keluar</button>
        </>
    )
}