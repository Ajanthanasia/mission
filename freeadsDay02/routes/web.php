<?php

use App\Http\Controllers\IndexController;
use App\Http\Controllers\SignInController;
use App\Http\Controllers\SignUpController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', [IndexController::class, 'showIndex'])->name('home');
Route::get('/', [SignInController::class, 'indexShow'])->name('sign-in');
Route::post('sign-in/user', [SignInController::class, 'signin'])->name('sign-in.user');
Route::get('user/edit', [SignInController::class, 'editProfile'])->name('user.edit');
Route::post('user/update', [SignInController::class, 'updateProfile'])->name('user.update');
Route::get('user/dash', [SignInController::class, 'dash'])->name('user.dash');
Route::get('logout', [SignInController::class, 'logout'])->name('logout');
Route::get('user/destroy', [SignInController::class, 'destroy'])->name('user.destroy');

Route::get('sign-up', [SignUpController::class, 'create'])->name('sign-up');
Route::post('sign-up-store', [SignUpController::class, 'store'])->name('sign-up.store');
