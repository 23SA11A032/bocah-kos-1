import connection from "@/databases/connection"

export async function GET() {
    var [query] = await connection.promise().execute("SELECT * FROM test")
    return Response.json(query)
}
