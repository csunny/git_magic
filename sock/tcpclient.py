#!usr/bin/env python
# -*- coding:utf-8 -*-
"""
@ author: magic
"""
import socket

HOST = '127.0.0.1'
PORT = 3214

s = socket.socket()
try:
    s.connect((HOST, PORT))
    data = u"你好！"
    while data:
        s.sendall(data.encode('utf-8'))
        data = s.recv(1024)
        print ("Receive From Server:\n", data.decode('utf-8'))
        data = input('Please input info:\n')
except socket.error as e:
    print e
finally:
    s.close()


