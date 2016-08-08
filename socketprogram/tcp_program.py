# !/usr/bin/env python
# -*- coding: utf-8 -*-

"""
@author: magic
"""
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(('www.sina.com.cn', 80))
s.send('GET /HTTP/1.1\r\nHost:www.sina.com.cn\r\nConnection: close\r\n\r\n')
data = []
while True:
    d = s.recv(1024)
    if d:
        data.append(d)
    else:
        break

data = ''.join(data)

print(data)


