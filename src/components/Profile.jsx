export default function Profile() {
    var user = JSON.parse(localStorage.getItem('user'))

    console.log(user)

    return (
        <>
            <div className="avatar">
                <div className="rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
        </>
    )
}