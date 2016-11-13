#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2016-11-13 14:08:06
# @Author  : Your Name (you@example.org)
# @Link    : http://example.org
# @Version : $Id$

import threading
import time

share = 0
share_cond = threading.Condition()

class  ProThread(threading.Thread):
	"""docstring for  ProThread"""
	def __init__(self):
		super( ProThread, self).__init__()
		self.name = 'Product'

	def run(self):
		global share
		if share_cond.acquire():
			while True:
				if not share:
					share += 1
					print(self.name, share)
					share_cond.notify()
				share_cond.wait()
				time.sleep(2)


class CusumerThread(threading.Thread):
	"""docstring for CusumerThread"""
	def __init__(self):
		super(CusumerThread, self).__init__()
		self.name = 'Consumer'

	def run(self):
		global share
		if share_cond.acquire():
			while True:
				if share:
					share -= 1
					print(self.name, share)
					share_cond.notify()
				share_cond.wait()
				time.sleep(2)


if __name__ == '__main__':
	t = ProThread()
	ct = CusumerThread()
	t.start()
	ct.start()
	

		

		
