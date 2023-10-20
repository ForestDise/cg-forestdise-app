import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { firebaseStorage } from '../../../../firebase';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { v4 } from "uuid";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';



function Vitals() {
    const [file, setFile] = useState('');
    const [progresspercent, setProgresspercent] = useState(0);
    const [currentUser, setCurrentUser] = useState(1);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const handleRegistration = (data) => console.log(data);
    const handleError = (errors) => { };
    const dispatch = useDispatch();

    const registerOptions = {
        title: { required: "Title is required" },
        description: {
            required: "Description is required",
            minLength: { value: 20 }
        },
        file: { required: "File is required" }
    };
    const handleFile =(e)=> {

        const file = e.target.files[0];
        if (file) {
            const storageRef = ref(firebaseStorage, `files/${file.name} + ${v4()}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on("state_changed",
                (snapshot) => {
                    const progress =
                        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgresspercent(progress);
                },
                (error) => {
                    alert(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setFile(downloadURL); // set file bang url moi
                        console.log(downloadURL);
                        setFile(downloadURL);

                        //call api 
                        // setValue('file', downloadURL);
                        // const product = { title: file.name, videoUrl: url };
                        // dispatch(addVideo(video)).then(() => {

                        //     setUploadStatus(false);
                        //     stepUpload();
                        // });
                    });
                }
            );
        } 

    }
    const onSubmit = (data) => {
        console.log(data);
        const product = {
            title:data.title,
            description:data.description,
            file:data.file,
        }
        // dispatch(createProduct(data, currentUser));// cho mac dinh  seller 1

    }
    return (
        <div className='col-span-8  border-2 border-gray-500 p-4 text-titleFont ml-20 mr-20'>
            <span className='text-sm text-left'> All Product Category -,....category ..-  Other- category</span>
            <h1 className='text-center text-4xl text-titleFont font-bold'>Create New Product</h1>
            <form className='items-center' onSubmit={handleSubmit(handleRegistration, handleError)}>
                <div className='text-titleFont'>
                    <label className='font-bold text-3xl mr-5 '>Title Title onClick resetField("firstName")</label>
                    <br></br>
                    <input
                        className=' border-2 text-xl h-15 mr-5 w-full h-12'
                        name="title"
                        type="text" {...register('title', registerOptions.title)} />
                    <small className='text-red-700 text-titleFont text-sm'>
                        {errors?.title && errors.title.message}
                    </small>
                </div>
                <div>
                    <label className='font-bold text-3xl mr-5 w-5 mt-5'>Description</label>                    <br></br>
                    <br></br>
                    <input
                        className='border-2 text-xl h-15 w-full h-12'
                        type="text"
                        name="description"
                        {...register('description', registerOptions.description)}
                    />
                    <small className='text-red-700 text-titleFont'>
                        {errors?.description && errors.description.message}
                    </small>
                </div>
                <div className='text-titleFont'>
                    <label className='font-bold text-3xl mr-5 w-20'>File</label>                    <br></br>
                    <br></br>
                    <input
                        className='border-2 text-sm h-15 mr-5 text-bodyFont'
                        type="file" name="file"
                        {...register('file', registerOptions.file)}
                        onChange={handleFile}
                    />
                    <small className='text-red-700 text-titleFont'>
                        {errors?.file && errors.file.message}
                    </small>
                    {file && <img alt='hihi' src={file} className="rounded-3xl w-30 h-25 mt-10" /> }
                   
                    {
                        !file &&
                        <div className='outerbar'>
                                <div className='innerbar text-titleFont' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
                        </div>
                    }
                </div>

                <div className="text-right">
                    <button className='w-30 h-12 bg-amazon_blue text-white px-10 rounded-2xl mt-10'>Next</button>
                </div>
                <Link to="/create-variant">Tạo Variant</Link>

            </form>


        </div>
    )
}

export default Vitals
