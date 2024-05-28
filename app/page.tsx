import keyv from "@/lib/keyv";


export default async function Home() {
    async function create() {
        'use server'
        console.log(keyv.get("sf"))
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <form action={create}>
                <button type="submit">
                    revalidate articles

                </button>

            </form>
            <div className="grid grid-cols-4 gap-4">
                smth text
            </div>
        </main>
    );
}
