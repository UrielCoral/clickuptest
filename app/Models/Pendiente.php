<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pendiente extends Model
{
    use HasFactory;

    protected $table= "pendientes";
    protected $fillable = ['actividad', 'observaciones', 'fecha_vencimiento', 'hora_vencimiento', 'equipo', 'estatus'];
}
