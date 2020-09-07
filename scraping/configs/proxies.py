#!/usr/bin/env python3
import requests
import random
from bs4 import BeautifulSoup as bs
import random

proxies = []
all_proxies = {}

def get_free_proxies():
    url = "https://free-proxy-list.net/"
    # get the HTTP response and construct soup object
    soup = bs(requests.get(url).content, "html.parser")
    for row in soup.find("table", attrs={"id": "proxylisttable"}).find_all("tr")[1:]:
        tds = row.find_all("td")
        try:
            ip = tds[0].text.strip()
            port = tds[1].text.strip()
            host = f"{ip}:{port}"
            proxies.append(host)
        except IndexError:
            continue
    return proxies

def get_session(proxies):
    get_free_proxies()
    proxy = random.choice(proxies)    
    all_proxies['http'] = proxy
    return print("Proxy | " + proxy)