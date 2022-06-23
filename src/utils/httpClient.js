const API = "https://api.themoviedb.org/3"

export function get(path) {
    return fetch( API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjE1ZmUyNmMxYjkwNGI4ZDg4MmIyZTQ4MWZlNTRlZCIsInN1YiI6IjYyYjNjMTdjMDI1NzY0MDA4YzZiYjQyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Fb3n1U_MWYKLGcAYyeSdDnTFfi-7FhITrnabil9YYo",
            "Content-Type": "application/json;charset=utf-8",
        }
    }).then(result => result.json())
}