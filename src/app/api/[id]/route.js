



export async function PATCH(request, {params}) {
    
    const body = await request.json();
    const index = comments.findIndex((c) => c.id === parseInt(params.id));
    console.log(comments[index])
    comments[index] = {
        id:index,
        text: body.text
    }
    return Response.json({
        message: "Comment updated",
        comments
    })
}



const comments = [
    {
        id:1,
        text:"Comment 1"
    },
    {
        id:2,
        text:"Comment 2"
    },
    {
        id:3,
        text:"Comment 3"
    }
]