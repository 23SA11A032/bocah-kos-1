import connection from "@/databases/connection";
import jwt from "jsonwebtoken"

/**
 * 
 * @param {Request} request 
 */
export async function POST(request) {
    try {
        var body = await request.json();
        var { email, password } = body
        var [[user]] = await connection.promise().query("SELECT * FROM User WHERE email = ?", [email])
        if (user.password == password) {
            var token = jwt.sign(user, "ozan6825")
            user.password = jwt.sign(password, "ozan6825")
            return Response.json({ status: true, token: token, user })
        } else {
            return Response.json({ status: false }, { status: 401 });
        }
    } catch (error) {

    }
}
