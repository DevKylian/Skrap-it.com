<?php

namespace App\Model\Laravel;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $connection = "laravel";
    protected $table = "packages";
    protected $guarded = [];

    public $timestamps = false;

    /*
     *
     * Below, all the relationships
     *
     * */

    public function apis()
    {
        return $this->belongsToMany(Api::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /*
     *
     * Below, all the functions to get the data
     *
     * */

    /**
     * @param User $user
     * @return mixed
     */
    public function getPackageInfo(User $user)
    {
        return Package::where('id', $user->getPackageId())->first();
    }

    /**
     * @param $id
     * @return mixed
     */
    public function getPackageById($id)
    {
        return Package::where('id', $id)->first();
    }

    /**
     * @param $data
     * @return mixed
     */
    public function createPackage($data): Package
    {
        return Package::firstOrCreate(
            [
                'title' => "${data['uses']}_${data['api']}_${data['days']}",
                'price' => $data['price'],
                'max_uses' => $data['uses'],
                'max_api' => $data['api'],
                'days' => $data['days']
            ]
        );
    }

    /**
     * @param $data
     * @return bool
     */
    public function checkPrice($data): bool
    {
        $realPrice = $data['uses'] / 1000 * 0.5 + $data['api'];
        $realPrice = $data['days'] === 30 ? $realPrice : $realPrice * 8;

        return $realPrice == $data['price'];
    }
}
