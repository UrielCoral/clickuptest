import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Index from './Pendientes/Index';
//import Create from './Pendientes/Create';


export default function Pendientes(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Pendientes Grupo Colorines</h2>}
        >
            <Head title="Pendientes" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">Panel de pendientes Equipo Grupo Colorines!</div>

                    <Index/><Index/>

                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
