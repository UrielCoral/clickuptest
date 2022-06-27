<?php

//Autor: Uriel Coral

namespace App\Http\Controllers;
use App\Http\Requests\StorePendienteRequest;
use App\Models\Pendiente;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PendienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Obtenemos todos los registros de la tabla pendientes y lo retornamos
        //a la vista
        $datos = Pendiente::all()->toArray();
        //$pendientes= "NO ESTA REGRESANDO CONSULTA";

        return Inertia::render('Pendientes/Index', ['pendientes' => $datos]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //Renderizamos el form para crear nuevo pendiente
        return Inertia::render('Pendientes/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePendienteRequest $request)
    {
        //Guardamos en el modelo los datos del Pendiente si cumple la validación
        //posteriormente redirigimos a la lista de pendientes
        Pendiente::create($request->validated());
        return Redirect::route('pendientes.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Pendiente $pendiente)
    {
        //Retorno a la vista el pendiente a actualizar
        return Inertia::render('Pendientes/Edit',
        [
            'pendiente' => [
                'id'=> $pendiente->id,
                'actividad' =>$pendiente->actividad,
                'observaciones'=> $pendiente->observaciones,
                'fecha_vencimiento'=> $pendiente->fecha_vencimiento,
                'hora_vencimiento'=> $pendiente->hora_vencimiento,
                'equipo'=> $pendiente->equipo,
                'estatus'=> $pendiente->estatus
            ]
        ] );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StorePendienteRequest $request, Pendiente $pendiente)
    {
        //Actualizamos en el modelo el pendiente y redirigimos a la lista de pendientes.
        $pendiente->update($request->validated());
        return Redirect::route('pendientes.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pendiente $pendiente)
    {
        //
        $pendiente->delete();
        return Redirect::route('pendientes.index');

    }
}
