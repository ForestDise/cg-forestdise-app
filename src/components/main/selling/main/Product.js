import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { firebaseStorage } from '../../../../firebase';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { v4 } from "uuid";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../../features/variant/productSide'
import { selectStoreCategoryList } from '../../../../features/variant/storeCategorySlide'



function Product() {
    const sellerInfo = useSelector((state) => state.seller.sellerInfo);
    const category = useSelector((state) => state.category.category);
    const store = useSelector((state) => state.shop.store);
    // const storeCategoryList = useSelector(selectStoreCategoryList);
    const product = useSelector((state) => state.product.value);



    const [file, setFile] = useState('');
    const [progresspercent, setProgresspercent] = useState(0);
    const [currentUser, setCurrentUser] = useState(1);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const handleRegistration = (data) => console.log(data);
    const handleError = (errors) => { };
    const dispatch = useDispatch();
    const [storeCateId, setStoreCateId] = useState("");

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
    const selectCategory = (id) => {

        setStoreCateId(id);
    }
    const onSubmit = (data) => {
        console.log(data);
        const product = {
            title:data.title,
            description:data.description,
            mainPicture:data.file,
        }
        dispatch(addProduct(product, category.id, store.id, storeCateId ));// cho mac dinh  seller 1

    }
    return (
        <div className='col-span-8  border-2 border-gray-500 p-4 text-titleFont ml-20 mr-20 rounded-xl'>
            <span className='text-sm text-left'> All Department -&gt;-&gt;-&gt; {category.attribute}</span>
            <form className='items-center' onSubmit={handleSubmit(handleRegistration, handleError)}>
                <div className='text-titleFont'>
                    <label className='font-bold text-xl mr-5 mt-5 '>Title</label>
                    <br></br>
                    <input
                        className=' border-2 text-sm h-8 mr-5 w-1/2 rounded-xl hover:bg-gray-600 hover:text-white duration-500 pl-2'
                        name="title"
                        type="text" {...register('title', registerOptions.title)} />
                    <small className='text-red-700 text-titleFont text-sm'>
                        {errors?.title && errors.title.message}
                    </small>
                </div>
                <div className='text-titleFont'>
                    <label className='font-bold text-xl mr-5 w-5'>Description</label>                    <br></br>
                    <br></br>
                    <input
                        className='border-2 text-sm h-8 mr-5 w-1/2 rounded-xl hover:bg-gray-600 hover:text-white duration-500 pl-2'
                        type="text"
                        name="description"
                        {...register('description', registerOptions.description)}
                    />
                    <small className='text-red-700 text-titleFont'>
                        {errors?.description && errors.description.message}
                    </small>
                </div>
                <div className='text-titleFont flex'>
                    <label className='font-bold text-xl mr-5 w-20'>Image</label>
                    <br></br>
                    <input
                        className='border-2 text-sm h-15 mr-5 text-titleFont rounded-xl hover:bg-gray-200 hover:text-white duration-500 pl-2'
                        type="file" name="file"
                        {...register('file', registerOptions.file)}
                        onChange={handleFile}
                    />
                    <small className='text-red-700 text-titleFont'>
                        {errors?.file && errors.file.message}
                    </small>
                    {file && <img alt='hihi' src={file} className="rounded-3xl w-20 h-20 mt-10" /> }
                   
                    {
                        !file &&
                        <div className='outerbar'>
                                <div className='innerbar text-titleFont w-{progresspercent}' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
                        </div>
                    }
                </div>
                <div className='text-titleFont'>
                    <label className='font-bold text-xl mr-5 '>Shop Id</label>
                    <br></br>
                    <input
                        className='pl-4 border-2 text-xl h-8 mr-5 w-20 rounded-xl hover:bg-gray-200 hover:text-white duration-500 disable'
                        name="title"
                        value={store.id}
                        type="text" {...register('shopId', registerOptions.title)} />
                </div>

                <div className="text-right">
                    <button className='w-30 h-12 bg-amazon_blue text-white px-10 rounded-2xl mt-10'>Next</button>
                </div>
                <Link to="/selling/inventory/abc">Tạo Variant</Link>

            </form>
            {/* {storeCategoryList ? storeCategoryList.map((storeCate, index)=> (
                    <div key={index} className='flex w-30 h-30'>
                        <div>{storeCate.id}</div>
                        <div>{storeCate.name}</div>
                        <img style="w-50 h-20" src={storeCate.heroImage} alt="hero"/>
                        <img style="w-20 h-20" src={storeCate.squareImage} alt="hero" />
                    <div onClick={selectCategory(storeCate.id)}>Select this category</div>
                    </div>
                )) : <div>Nothing is created</div>} */}


        </div>
    )
}

export default Product
