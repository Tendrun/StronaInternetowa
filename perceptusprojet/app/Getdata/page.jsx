const { GetUsers } = require('Database/DB.js')


export default async function Home(){

    const users = await GetUsers(); 

    console.log(users);

    
    return (
        <main>
            <ul>
                {users.map((item) => (
                    <li key={item.ID}>
                        <strong>ID:</strong> {item.ID}, <strong>Pesel:</strong> {item.Pesel}, <strong>Imie:</strong> {item.Imie}, <strong>Nazwisko:</strong> {item.Nazwisko}
                    </li>
                ))}
            </ul>
        </main>
    );
    
}