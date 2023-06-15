import React from 'react'

import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { InputUI } from '@/ui/input';
import { InputPasswordUI } from '@/ui/input.password';
import { ModalUI } from '@/ui/modal';
import { ButtonUI } from '@/ui/button';

import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchLoginUser } from '@/slices/loginUser.slice';
import { useRouter } from 'next/navigation';

interface Props {
  isModalOpen: boolean,
  setIsModalOpen(state: boolean): any,
}

interface FormValues {
  email: string,
  password: string,
}

export const LoginModal: React.FC<Props> = ({isModalOpen, setIsModalOpen}) => {
  const dispatch = useAppDispatch();
  const router = useRouter()
  const { handleSubmit, control, getValues, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async data => {
    try {
      await dispatch(fetchLoginUser(data)).unwrap();      
      window.location.reload()
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
      
    }

  }

  const handleCancel = () => {
    setIsModalOpen(false);
  };

    return (
      <ModalUI footer={null} title="Log In" isModalOpen={isModalOpen} handleCancel={handleCancel} okText='Login'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex h-[100svh] max-h-48 flex-col justify-between items-center'>          
          <Controller
            name="email"
            control={control}
            render={({ field }) => <InputUI {...field} placeholder='Enter your email' prefix={<UserOutlined/>} />}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => <InputPasswordUI {...field} type='password' placeholder='Enter your password' prefix={<LockOutlined />} />}
          />
          <ButtonUI htmlType="submit" >Enter</ButtonUI>
        </form>
      </ModalUI>
    );
}