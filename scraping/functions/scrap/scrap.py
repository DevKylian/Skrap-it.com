#!/usr/bin/env python3
import requests
from bs4 import BeautifulSoup
import time
from configs.proxies import *
from configs.conf import *
from functions.mysql.mysql import *
from termcolor import colored

# store in the dictionary, the total number of links
def count_all_links(processor, title):
    response = requests.get(base+processor, proxies=all_proxies)
    if(response.ok):
        soup = BeautifulSoup(response.text, "lxml")
        allTr = len(soup.findAll("tr", {"class": "blank-table-row"}))
        quantities[title] = allTr

# get all links for all cpu's
def scrap_all_links(processor, family):
    response = requests.get(base+processor, proxies=all_proxies)
    if(response.ok):
        soup = BeautifulSoup(response.text, "lxml")
        carditems = soup.findAll("td", {"class": "ark-product-name"})
        for carditem in carditems:
            a = carditem.find("a", href=True)
            link = a['href']
            register['url'].append(link)
            links.append(intel+link)

# extract family of cpu
def extract_family(string):
    string = string.lower().replace('®', '')
    for cpu in cpus:
        if cpu in string:
            return cpu.replace(" ", "")

# get data from data-key
def get_data_from_data_key(name, dataKey, soup):
    if(soup.find("span", {"data-key" : dataKey})):
        register[name].append(soup.find("span", {"data-key" : dataKey}).text.strip())
    else:
        register[name].append("")

# store in dictionary, the newest values
def get_all_infos():
    counter = 0
    print(colored('Start scraping | ✓ |', 'green'))
    print("==================================================")
    for i in news_links:
        response = requests.get(i, proxies=all_proxies)
        if(response.ok):
            counter = counter + 1
            print(colored("Scraping | ✓ | " + str(counter) + "/" + str(len(news_links)), 'green'))
            soup = BeautifulSoup(response.text, "lxml")

            if(soup.find("span", {"data-key" : "ProductGroup"})):
                family = soup.find("span", {"data-key" : "ProductGroup"}).text.strip()
                register['family'].append(extract_family(family))
            else:
                register['family'].append("")

            divTitle = soup.find("div", {"class" : "product-family-title-text"})
            if(soup.find("span", {"data-key" : "ProcessorNumber"})):
                register['name'].append(soup.find("span", {"data-key" : "ProcessorNumber"}).text.strip())
            else:
                register['name'].append(divTitle.find("h1", {"class" : "h1"}).text.strip())

            for k,v in specs.items():
                get_data_from_data_key(k,v, soup)
    print("==================================================")