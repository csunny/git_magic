#!usr/bin/env python
# -*- coding:utf-8 -*-
"""
@ author: magic
"""
import threading
import time


def thfunc():
    s = 0
    for i in range(30):
        s += i
        time.sleep(0.1)
    print(s)

class MyThread(threading.Thread):
	"""docstring for MyThrad"""
	
	def run(self):
		s = 0
		for i in range(30):
			s += i
			time.sleep(0.1)
		print(s)

		
if __name__ == '__main__':
    # ths = [threading.Thread(target=thfunc) for i in range(1)]
    # #  多线程运行
    # for th in ths:
    #     th.start()
   #单线程运行
    thfunc()
    thfunc()
    # ths = [MyThread() for i in range(4)]
    # for th in ths:
    # 	th.start()

