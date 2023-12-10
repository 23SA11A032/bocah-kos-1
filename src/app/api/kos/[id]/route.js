import connection from "@/databases/connection"

export async function GET(request, { params: { id } }) {
    var [[query]] = await connection.promise().query("SELECT * FROM Kos WHERE id = ?", [id])
    return Response.json(query)
}

/**
 * @param {Request} request 
 */
export async function POST(request, { params }) {
    try {
        var body = await request.json();
        
        return Response.json(body);
        var [query] = await connection.promise().query("UPDATE Kos SET id = ?, nama = ?, sewaFor = ?, deskripsi = ?, peraturan = ?, alamat = ?, linkGoogleMaps = ? WHERE id = ?",
            [...Object.entries(body).map(v => v[1]), body.id])
        console.log(query)
        return Response.json(body);
    } catch (error) {
        console.log(error)
        return Response.json({ status: false }, { status: 500 })
    }
}
