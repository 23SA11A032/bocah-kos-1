import connection from "@/databases/connection";

export async function POST() {
    var query = await connection.promise().query("SELECT")
}