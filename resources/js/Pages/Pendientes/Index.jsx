import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function Index (props) {
    const { pendientes } = usePage().props;
    const { data } = pendientes;


    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h4 className="font-semibold text-xl leading-tight">
            <InertiaLink
                href={route("pendientes.index")}
                className="text-indigo-600 hover:text-indigo-700"
            >
                Pendientes
            </InertiaLink>

        </h4>}
        >
            <Head title="Pendientes Grupo Colorines" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                        <div className="flex items-right justify-between mb-6">
                                        <InertiaLink
                                            className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                            href={route("pendientes.create")}
                                        >
                                            Nuevo pendiente
                                        </InertiaLink>
                                    </div>
                        </div>


                            <div>


                                    <div className="max-w-6xl p-8 bg-white rounded shadow">

                                        <div className="overflow-x-auto bg-white rounded shadow">

                                            <ul>
                                            {pendientes.map( item  => (
                                                <li key={item.id} >
                                                    {/** INICIA CARD ITEM */}
                                                        <div className="py-8 w-full">
                                                            <div className="lg:flex items-center justify-center w-full">
                                                                <div className="lg:w-10/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                                                                    <div className="flex items-center border-b border-gray-200 pb-6">
                                                                    <div className="flex items-start justify-between w-full">
                                                                    <div className="pl-3 w-full">
                                                                        <p className="text-xl font-medium leading-5 text-gray-800">{item.actividad}</p>
                                                                        <p className="text-sm leading-normal pt-2 text-gray-500">Vence: {item.fecha_vencimiento} a las {item.hora_vencimiento} </p>
                                                                    </div>
                                                                    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                    <InertiaLink
                                                                                tabIndex="1"
                                                                                className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                                                href={route("pendientes.edit", item.id)}
                                                                            >
                                                                                Editar
                                                                            </InertiaLink>
                                                                </div>

                                                                </div>
                                                                <div className="px-2">
                                                                    <p className="text-sm leading-5 py-4 text-gray-600">{item.observaciones}</p>
                                                                    <div className="flex">
                                                                        <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">Equipo:{item.equipo}</div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/** FINALIZA CARD ITEM */}







                                                </li>

                                            ))
                                            }

                                            </ul>
                                            {pendientes.length === 0 && (

                                                        <div>    No hay pendientes</div>

                                                )}
                                    </div>
                                </div>


                            </div>
                    </div>
                </div>
            </div>

        </Authenticated>

    );

}
