<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCpusIntelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('scraping')->create('cpus_intel', function (Blueprint $table) {
            $table->id();

            $table->string('family');
            $table->string('name');
            $table->string('segment');
            $table->string('status');
            $table->string('launch');
            $table->string('socket');
            $table->string('cores');
            $table->string('threads');
            $table->string('lithography');
            $table->string('base_frequency');
            $table->string('boost_frequency');
            $table->string('burst_frequency');
            $table->string('thermal_velocity_boost_frequency');
            $table->string('max_mem');
            $table->string('memory_types');
            $table->string('num_memory_channels');
            $table->string('max_memory_bandwidth');
            $table->string('ecc_memory');
            $table->string('processor_graphics_model_id');
            $table->string('graphics_freq');
            $table->string('graphics_max_freq');
            $table->string('graphics_max_mem');
            $table->string('graphics_output');
            $table->string('graphics_4K_support_level');
            $table->string('graphics_max_resolution_hdmi');
            $table->string('graphics_max_resolution_dp');
            $table->string('graphics_max_resoluion_vga');
            $table->string('graphics_directX_support');
            $table->string('graphics_openGL_support');
            $table->string('quick_sync_video');
            $table->string('intru_3D');
            $table->string('clear_video_hd');
            $table->string('clear_video');
            $table->string('num_displays_supported');
            $table->string('scalable_sockets');
            $table->string('pci_express_revision');
            $table->string('pci_express_configs');
            $table->string('num_pci_express_ports');
            $table->string('thermal_solution_specification');
            $table->string('t_case');
            $table->string('package_size');
            $table->string('optane_memory_support');
            $table->string('turbo_boost_support');
            $table->string('vpro_support');
            $table->string('hyper_threading');
            $table->string('virtualization_vtx');
            $table->string('virtualization_vtd');
            $table->string('extended_page_tables_vtx_ept');
            $table->string('transactional_sync_extensions');
            $table->string('intel_64');
            $table->string('instruction_set');
            $table->string('instruction_set_extensions');
            $table->string('idle_states');
            $table->string('speed_step_technology');
            $table->string('thermal_monitoring_indicator');
            $table->string('identity_protection_tech_version');
            $table->string('stable_image_platform_program_version');
            $table->string('cache');
            $table->string('bus');
            $table->string('tdp');
            $table->string('url');

            $table->timestamp('created_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('scraping')->dropIfExists('cpus_intel');
    }
}
