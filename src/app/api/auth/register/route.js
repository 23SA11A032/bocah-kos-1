import connection from "@/databases/connection"

/**
 * 
 * @param {Request} request 
 */
export async function POST(request) {
    try {
        var body = await request.json()
        var [query] = await connection.promise().query("INSERT INTO `User`(name,email,password,nohp,role) VALUES(?, ?, ?, ?, ?);",
            [body.name, body.email, body.password, body.nohp, body.role]);
        return Response.json({ status: true, data: query })
    } catch (error) {
        return Response.json({ status: false, message: error.sqlMessage }, { status: 500 })
    }
}
