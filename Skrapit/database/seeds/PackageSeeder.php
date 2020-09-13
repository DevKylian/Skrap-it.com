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
                'quota_alert' => false,
                'full_access' => false,
            ],
            [
                'title' => "Standard",
                'price' => "3",
                'max_uses' => "3000",
                'max_api' => "3",
                'days' => "30",
                'graphics' => true,
                'quota_alert' => true,
                'full_access' => true,
            ],
            [
                'title' => "Standard",
                'price' => "25",
                'max_uses' => "3000",
                'max_api' => "3",
                'days' => "365",
                'graphics' => true,
                'quota_alert' => true,
                'full_access' => true,
            ],
            [
                'title' => "Premium",
                'price' => "8",
                'max_uses' => "10000",
                'max_api' => "10",
                'days' => "30",
                'graphics' => true,
                'quota_alert' => true,
                'full_access' => true,
            ],
            [
                'title' => "Premium",
                'price' => "65",
                'max_uses' => "10000",
                'max_api' => "10",
                'days' => "365",
                'graphics' => true,
                'quota_alert' => true,
                'full_access' => true,
            ]
        ];

        foreach ($packages as $package) {
            Package::create($package);
        }
    }
}
