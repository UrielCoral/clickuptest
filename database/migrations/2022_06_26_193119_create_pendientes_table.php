<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePendientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pendientes', function (Blueprint $table) {
            $table->id();
            $table->string('actividad');
            $table->string('observaciones');
            $table->date('fecha_vencimiento');
            $table->time('hora_vencimiento');
            $table->string('equipo'); //El usuario define a que equipo pertenece la actividad Gerencia, TI, Marketing, Ventas
            $table->string('estatus'); //define si es una actividad Pendiente, Completada, Cancelada
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pendientes');
    }
}
