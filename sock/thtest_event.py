#!usr/bin/env python
# -*- coding:utf-8 -*-
"""
@ author: magic
"""
import threading
import time
event = threading.Event()


class MyThreadWait(threading.Thread):
    def run(self):
        self.name = 'Wait Thread'
        print(self.name, 'wait...')
        event.wait()
        print(self.name, 'start...')
        event.clear()


class MyThreadMain(threading.Thread):
    def run(self):
        time.sleep(3)
        print('Main thread set event flag')
        event.set()

if __name__ == '__main__':
    thw = MyThreadWait()
    th = MyThreadMain()
    thw.start()
    th.start()
