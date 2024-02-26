
export default function RootLayout({ children }) {
  return (
    <section className='py-24'>
        <div className='container flex'>
            <div className='container flex'>
                <div className='flex gap-6 text-sm font-medium uppercase tracking-tight'>

                </div>
            </div>
        </div>
        <main> { children } </main>
    </section>
  )
}