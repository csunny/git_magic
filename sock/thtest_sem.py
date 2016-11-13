#!usr/bin/env python
# -*- coding:utf-8 -*-
"""
@ author: magic
"""
import threading
import time

smea = threading.Semaphore(2)


class MyThread(threading.Thread):
    def __init__(self, name):
        super(MyThread, self).__init__()
        self.name = name

    def run(self):
        if smea.acquire():
            print(self.name, 'Had got resource.')
            time.sleep(2)

        smea.release()
        print(self.name, 'Had release resource.')

if __name__ == '__main__':
    ths = [MyThread(str(i)+'Sema') for i in range(5)]
    for th in ths:
        th.start()
