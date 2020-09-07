#!/usr/bin/env python3
import os
import datetime

# prod path
# path = '/home/ubuntu/Skrap-it.com/scraping/'

# dev path
path = '/home/kdev/Documents/Skrap-it.com/scraping/'

os.chdir(path)

from functions.scrap.scrap import *
from configs.conf import *
from termcolor import colored

begin_time = datetime.datetime.now()

print("==================================================")
print("""\
 ____  _  ______     _    ____ ___ _____
/ ___|| |/ |  _ \   / \  |  _ |_ _|_   _|
\___ \| ' /| |_) | / _ \ | |_) | |  | |
 ___) | . \|  _ < / ___ \|  __/| |  | |
|____/|_|\_|_| \_/_/   \_|_|  |___| |_|
""")
print("==================================================")

get_session(proxies)

print(colored('Start | ✓ |', 'yellow'))
print("==================================================")

retrieve_all_urls()

for k,v in cpus.items():
    count_all_links(cpus[k], k)
    scrap_all_links(cpus[k], k)

print(colored('Retrieve all links | ✓ |', 'green'))

register_quantities()

if(check_if_require_update()):
    get_all_infos()
    register_all_news_values()

print(colored("Execution time | " + str(datetime.datetime.now() - begin_time), 'yellow'))
print("==================================================")
