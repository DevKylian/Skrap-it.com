#!/usr/bin/env python3
env = {}
with open("./.env") as f:
    for line in f:
        if line.startswith('#') or not line.strip():
            continue
        key, value = line.strip().split('=', 1)
        env[key] = value