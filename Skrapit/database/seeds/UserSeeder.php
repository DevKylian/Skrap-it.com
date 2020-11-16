<?php

use App\Model\Laravel\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'isAdmin' => true,
                'email' => "k@k.k",
                'password' => bcrypt('k'),
                'status' => 1,
                'package_id' => 1,
            ]
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
