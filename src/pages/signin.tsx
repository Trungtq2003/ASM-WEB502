import React from 'react'
import { useForm } from 'react-hook-form'
import { login } from '../api/auth';

type Props = {}

const signin = (props: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onHandleSubmit = async (data: any) => {
        const { data: user } = await login(data);
        console.log("user", user);
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
            <input type="email" {...register("email")} />
            <input type="password" {...register("password")} />
            <button>Login</button>
        </form>

    </div>
  )
}

export default signin