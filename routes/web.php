<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;

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
Route::get('home', [PageController::class, 'index'])->name('home');
Route::get('about', [PageController::class, 'about'])->name('about');
Route::get('services', [PageController::class, 'services'])->name('services');
Route::get('contact-us', [PageController::class, 'contact'])->name('contact-us');
Route::get('track', [PageController::class, 'track'])->name('track');
Route::get('add_shipment', [PageController::class, 'add_shipment'])->name('add-shipment');
Route::get('edit_shipment', [PageController::class, 'edit_shipment'])->name('edit-shipment');
Route::get('invoice', [PageController::class, 'invoice'])->name('invoice');


// Route::prefix('manage-shipment')->group(function () {
//     Route::get('/add_shipment', [PageController::class, 'add_shipment'])->name('add-shipment');
//     Route::get('/edit_shipment', [PageController::class, 'edit_shipment'])->name('edit-shipment');
// });




Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
