import User from "../../components/User";
import Link from "next/link";

async function fetchunUsuario(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`);// Aqui al pasarle ${id} al ponerle /un numero de id, solo mostrara los elementos de ese objeto
    const data = await res.json()

    return data.data
}

export default async function UserPage({ params }) {
    const user = await fetchunUsuario(params.id)
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <User user={user} />
            <Link href={`/`}>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    Volver
                </button>
            </Link>
        </div>
    )
}