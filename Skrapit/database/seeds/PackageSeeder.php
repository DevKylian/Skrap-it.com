<?php

use App\Model\Laravel\Package;
use Illuminate\Database\Seeder;

class PackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $packages = [
            [
                'title' => "Free",
                'price' => "0",
                'max_uses' => "1000",
                'max_api' => "1",
                'days' => "9999",
                'graphics' => false,
                'whitelist' => false,
                'quota_alert' => false,
                'full_access' => false,
            ]
        ];

        foreach ($packages as $package) {
            Package::create($package);
        }
    }
}
