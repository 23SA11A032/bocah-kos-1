/**
 * 
 * @param {Request} request 
 */
export async function POST(request) {
    var body = await request.json()
    console.log(body)
    return Response.json({ hehe: "hehe" })
}
