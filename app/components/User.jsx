import Link from "next/link";

export default function User({ user }) {
    return (
        <div className="max-w-md mx-auto p-4 bg-cyan-700 rounded shadow-md my-5">
            <Link href={`/users/${user.id}`}>
                <div className="text-center mt-10">
                    <h3 className="font-bold text-2xl">{user.id}</h3>
                    <p className="font-bold text-lg">Nombre: {user.first_name}</p>
                    <p className="font-bold text-lg">Apellido: {user.last_name}</p>
                    <p className="font-bold text-lg" >Email: {user.email}</p>
                    < img className="rounded-full w-30 h-30 m-auto mb-4" src={user.avatar}></img>

                </div>
            </Link >
        </div >
    );
}