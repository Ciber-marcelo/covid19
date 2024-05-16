'use client'

import Button from "../button";
import { useForm } from 'react-hook-form';

type FormSchema = {
    state: string
    cases: number
    confirmed: number
    deaths: number
    recovered: number
    date: any
}

export function Form() {
    const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<FormSchema>();

    async function onSubimit(data: FormSchema) {
        try {
            console.log('Sucesso ao enviar', JSON.stringify(data))
            reset()
        } catch {
            console.log('Falha ao enviar', data)
        }
    }

    return (
        <div className="flex justify-center">
            <div className="flex w-full max-w-[420px] rounded-md p-4 bg-gray-400 mt-4">
                <form onSubmit={handleSubmit(onSubimit)} className="flex w-full flex-col items-center gap-4">
                    <p className="font-roboto font-bold text-xl bold">Formulario</p>

                    <input
                        className="w-full max-w-[200px] h-12 p-4 rounded-md focus:outline-none focus:ring-2 ring-color1"
                        placeholder="Estado"
                        {...register('state', { required: true })}
                    />

                    <input
                        className="w-full max-w-[200px] h-12 p-4 rounded-md focus:outline-none focus:ring-2 ring-color1"
                        placeholder="Casos"
                        type='number'
                        {...register('cases', { required: true })}
                    />

                    <input
                        className="w-full max-w-[200px] h-12 p-4 rounded-md focus:outline-none focus:ring-2 ring-color1"
                        placeholder="Confirmados"
                        type='number'
                        {...register('confirmed', { required: true })}
                    />

                    <input
                        className="w-full max-w-[200px] h-12 p-4 rounded-md focus:outline-none focus:ring-2 ring-color1"
                        placeholder="Mortes"
                        type='number'
                        {...register('deaths', { required: true })}
                    />

                    <input
                        className="w-full max-w-[200px] h-12 p-4 rounded-md focus:outline-none focus:ring-2 ring-color1"
                        placeholder="Recuperados"
                        type='number'
                        {...register('recovered', { required: true })}
                    />

                    <input
                        className="w-full max-w-[200px] h-12 p-4 rounded-md focus:outline-none focus:ring-2 ring-color1"
                        type='date'
                        {...register('date', { required: true })}
                    />

                    <div className="flex flex-col justify-center">
                        <Button name={'Enviar'} disabled={isSubmitting} />
                    </div>
                </form>
            </div>
        </div>
    )
}