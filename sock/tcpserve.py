#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2016-11-06 15:30:08
# @Author  : Your Name (you@example.org)
# @Link    : http://example.org
# @Version : $Id$

import socket

# 基于tcp
HOST = '127.0.0.1'
PORT = 3214

s = socket.socket()
s.bind((HOST, PORT))
s.listen(5)

clnt, addr = s.accept()
print("Client Address:", addr)

while True:
    data = clnt.recv(1024)
    if not data:
        break
    print("Recieve Date:", data.decode('utf-8'))
    clnt.send(data)

clnt.close()
