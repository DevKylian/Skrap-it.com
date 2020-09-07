#!/usr/bin/env python3
from configs.conf import *
from modules.env import *
from mysql.connector import Error
from mysql.connector import errorcode
import mysql.connector
import os
import time
from termcolor import colored


# database access function
def login_db():
    global connection
    connection = mysql.connector.connect(
        host=env['HOST'],
        database=env['DATABASE'],
        user=env['USER'],
        password=env['PASSWORD']
    )
    return connection

# dump database after new scrapping
def dump_db():
    timestr = time.strftime("%Y%m%d-%H%M%S")
    os.system('mysqldump -h {} -u {} -p{} {} > ././dumps/dump-{}.sql'.format(env['HOST'], env['USER'], env['PASSWORD'], env['DATABASE'], timestr))
    print(colored('Dump | ✓ |', 'green'))
    print("==================================================")

# get all differences from two arrays
def diff(first, second):
    s2 = set(second)
    differences = [i for i in first if not i in s2 ]
    for i in differences:
        news_links.append(i)

# insertion in the database of the number of processors on all pages
def register_quantities():
    try:
        connection = login_db()
        cursor = connection.cursor()
        cursor.execute("""INSERT INTO quantities_intel (core,xeon,xeonPhi,atom,pentium,celeron,itanium,quark) VALUES (%s,%s,%s,%s,%s,%s,%s,%s)""",(quantities['core'],quantities['xeon'],quantities['xeon phi'],quantities['atom'],quantities['pentium'],quantities['celeron'],quantities['itanium'],quantities['quark']))
        connection.commit()
        print(colored("Quantities to DB | ✓ |", 'green'))
        cursor.close()

    except mysql.connector.Error as error:
        connection.rollback()
        print(colored('Failed to insert quantities into table {}'.format(error), 'red'))

    finally:
        if (connection.is_connected()):
            connection.close()

# retrieve all urls from database
def retrieve_all_urls():
    try:
        login_db()
        cursor = connection.cursor()
        cursor.execute("SELECT url FROM cpus_intel;")
        rows = cursor.fetchall()

    except mysql.connector.Error as error:
            print(colored("Failed to retrieve all rows in table {}".format(error), 'red'))

    finally:
        if (connection.is_connected()):
            connection.close()
            for i in range(len(rows)):
                database_links.append(rows[i][0])

# check if the script should be executed
def check_if_require_update():
    try:
        login_db()
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM quantities_intel GROUP BY id ORDER BY id DESC LIMIT 1;")
        rows = cursor.fetchall()
        cursor.close()

    except mysql.connector.Error as error:
        print(colored("Failed to count all rows in table {}".format(error), 'red'))

    finally:
        if (connection.is_connected()):
            connection.close()
            if(len(rows) != 0):
                 if((len(database_links) != len(links))):
                     dump_db()
                     diff(links, database_links)
                     print(colored("From Intel : " + str(len(links)) + "\nFrom Database : " + str(len(database_links)), 'yellow'))
                     return True
                 else:
                     print(colored("Require update | ✘ |", 'red'))
                     return False
            else:
                diff(links, database_links)
                print(colored("Database is empty | Start ✓ |", 'green'))
                return True

# send all results in the mysql database
def register_all_news_values():
    counter = 0
    try:
        connection = login_db()
        cursor = connection.cursor()

        for s in range(0, len(news_links)):
            counter = counter+1
            cursor.execute("ALTER TABLE cpus_intel AUTO_INCREMENT = 1")
            cursor.execute("""INSERT INTO cpus_intel
            (
                family,
                name,
                segment,
                status, 
                launch,
                socket,
                cores,
                threads,
                lithography, 
                base_frequency, 
                boost_frequency, 
                burst_frequency,
                thermal_velocity_boost_frequency,
                max_mem,
                memory_types,
                num_memory_channels,
                max_memory_bandwidth,
                ecc_memory,
                processor_graphics_model_id,
                graphics_freq,
                graphics_max_freq,
                graphics_max_mem,
                graphics_output,
                graphics_4K_support_level,
                graphics_max_resolution_hdmi,
                graphics_max_resolution_dp,
                graphics_max_resoluion_vga,
                graphics_directX_support,
                graphics_openGL_support,
                quick_sync_video,
                intru_3D,
                clear_video_hd,
                clear_video,
                num_displays_supported,
                scalable_sockets,
                pci_express_revision,
                pci_express_configs,
                num_pci_express_ports,
                thermal_solution_specification,
                t_case,
                package_size,
                optane_memory_support,
                turbo_boost_support,
                vpro_support,
                hyper_threading,
                virtualization_vtx,
                virtualization_vtd,
                extended_page_tables_vtx_ept,
                transactional_sync_extensions,
                intel_64,
                instruction_set,
                instruction_set_extensions,
                idle_states,
                speed_step_technology,
                thermal_monitoring_indicator,
                identity_protection_tech_version,
                stable_image_platform_program_version,
                cache,
                bus, 
                tdp, 
                url
            )
            VALUES 
            (
                %s, 
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s, 
                %s, 
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s, 
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s
            )
            """, 
            (
                str(register.get('family')[s]),
                str(register.get('name')[s]),
                str(register.get('segment')[s]),
                str(register.get('status')[s]), 
                str(register.get('launch')[s]),
                str(register.get('socket')[s]),
                str(register.get('cores')[s]),
                str(register.get('threads')[s]),
                str(register.get('lithography')[s]), 
                str(register.get('base_frequency')[s]),
                str(register.get('boost_frequency')[s]),
                str(register.get('burst_frequency')[s]),
                str(register.get('thermal_velocity_boost_frequency')[s]),
                str(register.get('max_mem')[s]),
                str(register.get('memory_types')[s]),
                str(register.get('num_memory_channels')[s]),
                str(register.get('max_memory_bandwidth')[s]),
                str(register.get('ecc_memory')[s]),
                str(register.get('processor_graphics_model_id')[s]),
                str(register.get('graphics_freq')[s]),
                str(register.get('graphics_max_freq')[s]),
                str(register.get('graphics_max_mem')[s]),
                str(register.get('graphics_output')[s]),
                str(register.get('graphics_4K_support_level')[s]),
                str(register.get('graphics_max_resolution_hdmi')[s]),
                str(register.get('graphics_max_resolution_dp')[s]),
                str(register.get('graphics_max_resoluion_vga')[s]),
                str(register.get('graphics_directX_support')[s]),
                str(register.get('graphics_openGL_support')[s]),
                str(register.get('quick_sync_video')[s]),
                str(register.get('intru_3D')[s]),
                str(register.get('clear_video_hd')[s]),
                str(register.get('clear_video')[s]),
                str(register.get('num_displays_supported')[s]),
                str(register.get('scalable_sockets')[s]),
                str(register.get('pci_express_revision')[s]),
                str(register.get('pci_express_configs')[s]),
                str(register.get('num_pci_express_ports')[s]),
                str(register.get('thermal_solution_specification')[s]),
                str(register.get('t_case')[s]),
                str(register.get('package_size')[s]),
                str(register.get('optane_memory_support')[s]),
                str(register.get('turbo_boost_support')[s]),
                str(register.get('vpro_support')[s]),
                str(register.get('hyper_threading')[s]),
                str(register.get('virtualization_vtx')[s]),
                str(register.get('virtualization_vtd')[s]),
                str(register.get('extended_page_tables_vtx_ept')[s]),
                str(register.get('transactional_sync_extensions')[s]),
                str(register.get('intel_64')[s]),
                str(register.get('instruction_set')[s]),
                str(register.get('instruction_set_extensions')[s]),
                str(register.get('idle_states')[s]),
                str(register.get('speed_step_technology')[s]),
                str(register.get('thermal_monitoring_indicator')[s]),
                str(register.get('identity_protection_tech_version')[s]),
                str(register.get('stable_image_platform_program_version')[s]),
                str(register.get('cache')[s]),
                str(register.get('bus')[s]),
                str(register.get('tdp')[s]), 
                str(news_links[s])
            ))
            connection.commit()
            print(colored("DB Insert | ✓ | " + str(counter) + "/" + str(len(news_links)), 'green'))
        cursor.close()

    except mysql.connector.Error as error:
        connection.rollback()
        print(colored("Failed to insert record into table {}".format(error), 'red'))

    finally:
        if (connection.is_connected()):
            connection.close()
            print("==================================================")