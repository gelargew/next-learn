import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'

export default function Page() {
    async function Create(formdata: FormData) {
        'use server'
        const name = formdata.get('name') as string
        try {
            await sql`
      INSERT INTO role (name)
      VALUES (${name})
    `
          revalidatePath('/dashboard/invoices')
        } catch (error) {
            return {
                message: 'Dataabase Error: Failed to Create Role',
            }
        }
    }

    return (
        <main>
            <form action={Create} className='flex flex-col gap-4'>
                <label htmlFor='name'>Name</label>
                <input name='name' placeholder='role...' />
                <button>Submit</button>
            </form>
        </main>
    )
}
