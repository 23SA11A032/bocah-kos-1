import connection from "@/databases/connection"
import jwt from "jsonwebtoken"

/**
 * 
 * @param {Request} request 
 */
export async function POST(request) {
    try {
        var body = await request.json()
        var query = await connection.promise().query("INSERT INTO `User` (name,email,password,nohp,role) VALUES(?, ?, ?, ?, ?);",
            [body.name, body.email, body.password, body.nohp, body.role]);
        var token = jwt.sign(body, "ozan6825")
        body.password = jwt.sign(body.password, "ozan6825")
        return Response.json({ status: true, user: body, token }) 
    } catch (error) {
        console.log(error)
        return Response.json({ status: false, message: error.sqlMessage }, { status: 500 })
    }
}
