import  { AddUser, GetUsers } from 'Database/DB.ts'

export default async function Home(){
    
    const users = await GetUsers(); 


    return (
        <main>
            <ul>
                {users.map((item) => (
                    <li key={item.ID}>
                        <strong>ID:</strong> {item.ID}, <strong>Pesel:</strong> {item.Pesel}, <strong>Imie:</strong> {item.Imie}, <strong>Nazwisko:</strong> {item.Nazwisko}
                    </li>
                ))}
            </ul>
            <font color="color:red">
                <form>       
                    <input type="text" name="Pesel" defaultValue="Pesel" />
                    <input type="text" name="Imie" defaultValue="Imie" />
                    <input type="text" name="Nazwisko" defaultValue="Nazwisko" />
                    <button type="submit" onClick={AddUser()}>Dodaj</button >
                </form>                
            </font>
        </main>
        
    );
}