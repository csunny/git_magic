#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2016-11-13 13:57:33
# @Author  : Your Name (you@example.org)
# @Link    : http://example.org
# @Version : $Id$

import threading, time, random

share = 4

class MyThread(threading.Thread):
	"""docstring for MyThread"""
	def __init__(self, i):
		super(MyThread, self).__init__()
		self.i = i

	def run(self):
		global share

		for d in range(3):
			lock.acquire()
			print (share)
			share += self.i
			time.sleep(random.random())
			print('+ ', self.i, '=', share)
			lock.release()

lock = threading.Lock()

if __name__ == '__main__':
	t = MyThread(2)
	tt = MyThread(6)
	t.start()
	tt.start()
