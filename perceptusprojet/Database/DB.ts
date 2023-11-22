import { Prisma, PrismaClient }  from '@prisma/client'

const prisma = new PrismaClient()

export async function GetUsers(){
    const allUsers = await prisma.tabletest.findMany();

  //Odlacz sie od bazy danych po zapytaniu serwera

    try {async () => {
      await prisma.$disconnect()
    }
  }  
    catch{ async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    }
  }
    return allUsers;
}

const CreateUser = (
  Pesel: string,
  Imie: string,
  Nazwisko: string,
) => {
  return Prisma.validator<Prisma.tabletestCreateInput>()({
    Pesel,
    Imie,
    Nazwisko,
})
}

export async function AddUser(Pesel_ : string, Imie_, Nazwisko_){
  console.log("Pesel_ = " + Pesel_ + " Imie_ = " + Imie_ + " Nazwisko_ = " + Nazwisko_);

  await prisma.tabletest.create({
    data: CreateUser(
      Pesel_, Imie_, Nazwisko_
    )

  })
  console.log("Tutaj");

  //Odlacz sie od bazy danych po zapytaniu serwera

  //Odlacz sie od bazy danych po zapytaniu serwera

    try {async () => {
      await prisma.$disconnect()
    }
  }  
    catch{ async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    }
  }
}
