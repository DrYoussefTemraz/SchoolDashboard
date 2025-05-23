"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

// 1- create your schema

const schema = z.object({
    username: z.string()
        .min(3, { message: 'username must be at least 3 characters long!' })
        .max(20, { message: 'username must be at most 20 characters long!' }),

    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: 'password must be at least 8 characters long!' }),
    firstName: z.string().min(1, { message: 'first name is required' }),
    lastName: z.string().min(1, { message: 'last name is required' }),
    phone: z.string().min(1, { message: ' phone is required' }),
    address: z.string().min(1, { message: 'address is required' }),
    bloodType: z.string().min(1, { message: 'blood type is required' }),

    birthday: z.date({ message: 'birthday is required' }),
    // using a select element
    sex: z.enum(["male", "female"], { message: "sex is required" }),
    // using files and images
    img: z.instanceof(File, { message: "image is required" })

});

type inputs = z.infer<typeof schema>


const AttendanceForm = ({
    type,
    data
}: {
    type: "create" | "update",
    data?: any
}) => {
    // 2- using the resolver and useForm
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<inputs>({
        resolver: zodResolver(schema),
    });
    const onSubmit = handleSubmit(data => {
        console.log(data)
    })
    return (
        <form className='flex flex-col gap-4' onSubmit={onSubmit}>
            {/* 3- Creating input using React hook form and show errors */}
            <h1 className="text-xl font-semibold">Create New Student</h1>
            <span className="text-xs text-gray-400 font-medium">Authentication Info</span>
            {/* remove the input form and make a component for create and update */}
            <div className="flex justify-between flex-wrap gap-4">
                <InputField
                    label="username"
                    name="username"
                    defaultValue={data?.username}
                    register={register}
                    error={errors?.username}
                />
                <InputField
                    label="Email"
                    name="email"
                    type="email"
                    defaultValue={data?.email}
                    register={register}
                    error={errors?.username}
                />
                <InputField
                    label="Password"
                    name="password"
                    type="password"
                    defaultValue={data?.password}
                    register={register}
                    error={errors?.username}
                />
            </div>
            <span className="text-xs text-gray-400 font-medium">Personal Info</span>
            <div className="flex justify-between flex-wrap gap-4">
                <InputField
                    label="First Name"
                    name="firstName"
                    defaultValue={data?.firstName}
                    register={register}
                    error={errors.firstName}
                />
                <InputField
                    label="Last Name"
                    name="lastName"
                    defaultValue={data?.lastName}
                    register={register}
                    error={errors.lastName}
                />
                <InputField
                    label="Phone"
                    name="phone"
                    defaultValue={data?.phone}
                    register={register}
                    error={errors.phone}
                />
                <InputField
                    label="Address"
                    name="address"
                    defaultValue={data?.address}
                    register={register}
                    error={errors.address}
                />
                <InputField
                    label="Blood Type"
                    name="bloodType"
                    defaultValue={data?.bloodType}
                    register={register}
                    error={errors.bloodType}
                />
                <InputField
                    label="Birthday"
                    name="birthday"
                    defaultValue={data?.birthday}
                    register={register}
                    error={errors.birthday}
                    type="date"
                />

                <div className="flex flex-col gap-2 w-full md:w-1/4">
                    <label className="text-xs text-gray-500" >Sex</label>
                    <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full" {...register("sex")} defaultValue={data?.sex}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>

                    </select>
                    {
                        errors.sex?.message &&
                        <p className="text-xs text-red-400">
                            {errors.sex?.message.toString()}
                        </p>
                    }
                </div>

                <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
                    <label
                        className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
                        htmlFor="img" >
                        <Image src="/upload.png" alt="" width={28} height={28} />
                        <span>Upload a photo</span>
                    </label>
                    <input type="file" id="img" {...register("img")} className="hidden" />
                    {
                        errors.img?.message &&
                        <p className="text-xs text-red-400">
                            {errors.img?.message.toString()}
                        </p>
                    }
                </div>
            </div>

            <button className="bg-blue-400 text-white p-2 rounded-md">
                {type === "create" ? "Create" : "Update"}
            </button>
        </form>

    )
}

export default AttendanceForm