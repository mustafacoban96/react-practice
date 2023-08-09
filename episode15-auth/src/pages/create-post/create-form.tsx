import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import {addDoc,collection} from 'firebase/firestore' // addDoc -> add doc to firebase
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom"
// react-hook-from yup @hookform/resolvers

////////////


interface CreateFormData{
    title: string;
    description: string;

}

///////////
export const CreateForm = () =>{
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("You must add a title"),
        description: yup.string().required("You must add a description"),
    });


    const { register,handleSubmit,formState:{errors} } = useForm<CreateFormData>({
        resolver : yupResolver(schema)
    });

    const postsRef = collection(db,"post");

    const onCreatePost = async (data: CreateFormData) =>{
        await addDoc(postsRef,{
            title: data.title,
            description: data.description,
            username: user?.displayName,
            id: user?.uid,
        });
        navigate("/");
    }
    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder="Title..."{...register("title")}/>
            <p>{errors.title?.message}</p>
            <textarea placeholder="Description..."{...register("description")}/>
            <p>{errors.description?.message}</p>
            <input type="submit"/>
        </form>
    )
}