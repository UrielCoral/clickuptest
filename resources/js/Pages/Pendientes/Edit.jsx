import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';


const Edit = (props) => {
    const {pendiente} = usePage().props;


    const {data, setData, put, errors} = useForm(
        {
            actividad: pendiente.actividad || "",
            observaciones: pendiente.observaciones || "",
            fecha_vencimiento: pendiente.fecha_vencimiento || "",
            hora_vencimiento: pendiente.hora_vencimiento || "",
            equipo: pendiente.equipo || "",
            estatus: pendiente.estatus || "",
        }
    );




    function handleSubmit(e){
        e.preventDefault();
        put(route("pendientes.update", pendiente.id));
    }

    function destroy(){
        if(confirm("Estás seguro de eliminar este pendiente")){
            Inertia.delete(route("pendientes.destroy", pendiente.id));
        }
    }

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
            <span className="font-semibold text-indigo-600"> / </span>
            Modificar pendiente
        </h4>}
        >
            <Head title="Pendientes Grupo Colorines" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                        <div className="mt-20">
                            <div className="container flex flex-col justify-center mx-auto">

                                <div className="max-w-3xl p-8 bg-white rounded shadow">
                                    <form name="createForm" onSubmit={handleSubmit}>
                                        <div className="flex flex-col">
                                            <div className="mb-4">
                                                <label className="">Actividad</label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-2"
                                                    label="Actividad"
                                                    name="actividad"
                                                    value={data.actividad}
                                                    onChange={(e) =>
                                                        setData("actividad", e.target.value)
                                                    }
                                                />
                                                <span className="text-red-600">
                                                    {errors.actividad}
                                                </span>
                                            </div>

                                            <div className="mb-4">
                                                <label className="">Observaciones</label>
                                                <textarea
                                                    type="text"
                                                    className="w-full rounded"
                                                    label="Observaciones"
                                                    name="observaciones"
                                                    errors={errors.observaciones}
                                                    value={data.observaciones}
                                                    onChange={(e) =>
                                                        setData("observaciones", e.target.value)
                                                    }
                                                />
                                                <span className="text-red-600">
                                                    {errors.observaciones}
                                                </span>
                                            </div>

                                            <div className="mb-4">

                                                <label className="">Fecha vencimiento</label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-2"
                                                    label="Fecha vencimiento"
                                                    name="fecha_vencimiento"
                                                    value={data.fecha_vencimiento}
                                                    onChange={(e) =>
                                                        setData("fecha_vencimiento", e.target.value)
                                                    }
                                                />

                                                <span className="text-red-600">
                                                    {errors.fecha_vencimiento}
                                                </span>
                                            </div>

                                                <input
                                                    type="hidden"
                                                    className="w-full px-4 py-2"
                                                    label="Hora vencimiento"
                                                    name="hora_vencimiento"
                                                    value={data.hora_vencimiento}
                                                    onChange={(e) =>
                                                        setData("hora_vencimiento", e.target.value)
                                                    }
                                                />
                                                <span className="text-red-600">
                                                    {errors.hora_vencimiento}
                                                </span>


                                            <div className="mb-4">


                                                <label className="">Equipo</label>
                                            <select id="equipo" label="Equipo" name="equipo" className="w-full px-4 py-2"
                                             value={data.equipo}
                                             onChange={(e) =>
                                                setData("equipo", e.target.value)
                                            } >
                                                <option value="Gerencia">Gerencia</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Ventas">Ventas</option>
                                                <option value="IT">IT</option>
                                            </select>
                                                <span className="text-red-600">
                                                    {errors.equipo}
                                                </span>
                                            </div>


                                                <input
                                                    type="hidden"
                                                    className="w-full px-4 py-2"
                                                    label="Actividad"
                                                    name="actividad"
                                                    value={data.actividad}
                                                    onChange={(e) =>
                                                        setData("actividad", e.target.value)
                                                    }
                                                />
                                                <span className="text-red-600">
                                                    {errors.estatus}
                                                </span>



                                        </div>
                                        <div className="flex justify-between">
                                            <button
                                                type="submit"
                                                className="px-4 py-2 text-white bg-green-500 rounded"
                                            >
                                                Actualizar
                                            </button>
                                            <button
                                                onClick={destroy}
                                                tabIndex="-1"
                                                type="button"
                                                className="px-4 py-2 text-white bg-red-500 rounded"
                                            >
                                                Borrar
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );

};
export default Edit;
