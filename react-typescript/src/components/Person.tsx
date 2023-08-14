import {FC,useState,ChangeEvent} from 'react';


export enum HairColor{
    Blonde = "Your hair is blonde, good for you",
    Brown = "Cool hair color",
    Pink = "Wow that is so cool",
}

interface IAppProps {
    name?:string;
    email?:string;
    age?:number;
    //getName: (name: string) => string;
    hairColor: HairColor
}
export const Person:FC<IAppProps> =  ({name,email,age,hairColor}) =>{
    const[country,setCountry] = useState<string | null>(null);

    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setCountry(e.target.value)
    }

    type NameType = "Pedro" | "Jack"
    const nameForType: NameType = "Jack"
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
      <input placeholder='write down your country...' onChange={handleChange}/>
      {country}
      {/* {HairColor.Pink} */}
      {hairColor}
    </div>
  );
}
