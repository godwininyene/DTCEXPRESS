<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $user = User::create([
            'firstname' => 'super',
            'lastname' => 'admin',
            'email' => 'support@cdtexpress.com',
            'password' => Hash::make('cdtadmin'),
            'role' => 'admin',
        ]);
    }
}
