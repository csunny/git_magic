#!usr/bin/env python
# -*- coding:utf-8 -*-
"""
@ author = magic
"""
from gevent import monkey; monkey.patch_socket()
import gevent


def f(n):
    for i in range(n):
        print(gevent.getcurrent(), i)


def f2(n):
    for i in range(n):
        print(gevent.getcurrent(), i)
        gevent.sleep(0)

if __name__ == '__main__':
    g1 = gevent.spawn(f2, 5)
    g2 = gevent.spawn(f2, 5)
    g3 = gevent.spawn(f2, 5)
    g1.join()
    g2.join()
    g3.join()

