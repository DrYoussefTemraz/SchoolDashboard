"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

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
    birthday: z.date({ message: 'birthday is required' }),
    // using a select element
    sex: z.enum(["male", "female"], { message: "sex is required" }),
    // using files and images
    image: z.instanceof(File, { message: "image is required" })

});

type inputs = z.infer<typeof schema>


const TeacherForm = ({
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
            <h1 className="text-xl font-semibold">Create New Teacher</h1>
            <span className="text-xs text-gray-400 font-medium">Authentication Info</span>
            {/* remove the input form and make a component for create and update */}
            <InputField
                label="username"
                name="username"
                defaultValue={data?.username}
                register={register}
                error={errors?.username}
            />
            <span className="text-xs text-gray-400 font-medium">Personal Info</span>

            <button className="bg-blue-400 text-white p-2 rounded-md">
                {type === "create" ? "Create" : "Update"}
            </button>
        </form>

    )
}

export default TeacherForm