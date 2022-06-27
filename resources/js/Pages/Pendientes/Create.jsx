import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Calendar from "react-calendar/dist/umd/Calendar";
import 'react-calendar/dist/Calendar.css';

const Create = (props) => {
    const {data, setData, errors, pendiente} = useForm({
        actividad: "",
        observaciones: "",
        fecha_vencimiento: "",
        hora_vencimiento: "00:00",
        equipo: "",
        estatus: "Pendiente",
    });
    const [value, setValue] = useState(new Date());

    function onChange(nextValue) {
        setValue(nextValue);
        setData("fecha_vencimiento", nextValue.toISOString().slice(0, 10) );


      }

    function handleSubmit(e){

        e.preventDefault();
        Inertia.post(route("pendientes.store"), data);

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
            Nuevo pendiente
        </h4>}
        >
            <Head title="Pendientes Grupo Colorines" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">


                        <div className="mt-20">
                        <div className="container flex flex-col justify-center mx-auto">

                            <div className="max-w-6xl p-8 bg-white rounded shadow">
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

                                        <div className="mb-0">
                                            <label className="">Observaciones</label>
                                            <textarea
                                                type="text"
                                                className="w-full rounded"
                                                label="observaciones"
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
                                        <div>
                                            <Calendar  onChange={ onChange } value={value}  />
                                        </div>

                                            <input
                                                type="hidden"
                                                className="w-full px-4 py-2"

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



                                        <div className="mb-4">
                                            <label className="">Equipo</label>
                                            <select id="equipo" defaultValue="selec" label="Equipo" name="equipo" className="w-full px-4 py-2"
                                             onChange={(e) =>
                                                setData("equipo", e.target.value)
                                            } >
                                                <option value="selec" disabled>Seleccionar:</option>
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

                                                name="estatus"
                                                value={data.estatus}
                                                onChange={(e) =>
                                                    setData("estatus", e.target.value)
                                                }
                                            />
                                            <span className="text-red-600">
                                                {errors.estatus}
                                            </span>




                                    </div>
                                    <div className="mt-4">
                                        <button
                                            type="submit"
                                            className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                        >
                                            Agregar
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
export default Create;
