<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\PendienteController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/Pendientes', function () {
    return Inertia::render('Pendientes');
})->middleware(['auth', 'verified'])->name('pendientes');

Route::get('/Pendientes/Create', function () {
    return Inertia::render('Pendientes/Create');
})->middleware(['auth', 'verified'])->name('pendientes');


Route::resource('pendientes', PendienteController::class);



require __DIR__.'/auth.php';
