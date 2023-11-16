import type { APIRoute } from 'astro';

const usernames = ["Sarah", "Chris", "Yan", "Elian"]

export const GET: APIRoute = ({ params, request }) => {
  const id = params.id;
  return new Response(
    JSON.stringify({
      name: usernames[id]
    })
  )
}

export function getStaticPaths() {
  return [
    { params: { id: "0"} },
    { params: { id: "1"} },
    { params: { id: "2"} },
    { params: { id: "3"} }
  ]
}

// export const GET: APIRoute = ({ params, request }) => {
//     return new Response(JSON.stringify({
//         message: "This was a GET!"
//       })
//     )
//   }
  
//   export const POST: APIRoute = ({ request }) => {
//     return new Response(JSON.stringify({
//         message: "This was a POST!"
//       })
//     )
//   }
  
//   export const DELETE: APIRoute = ({ request }) => {
//     return new Response(JSON.stringify({
//         message: "This was a DELETE!"
//       })
//     )
//   }
  
//   export const ALL: APIRoute = ({ request }) => {
//     return new Response(JSON.stringify({
//         message: `This was a ${request.method}!`
//       })
//     )
//   }