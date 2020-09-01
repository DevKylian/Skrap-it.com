<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class MigrateAll extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'migrate:all {database}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Migrate all migrations for one specific database';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $database = $this->argument('database');
        Artisan::call("migrate:fresh", [
            "--database" => $database,
            "--path" => "database/migrations/".$database,
            "--seed" => true,
        ]);
    }
}
