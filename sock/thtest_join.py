#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2016-11-13 13:36:59
# @Author  : Your Name (you@example.org)
# @Link    : http://example.org
# @Version : $Id$

import threading
import time

class MyThread(threading.Thread):
	"""docstring for MyThread"""

	def run(self):
		for i in range(30):
			print ("threading: %s" %i)
			time.sleep(0.1)


if __name__ == '__main__':
	t = MyThread()
	t.start()
	t.join()
	for i in range(10):
		print('Main:', i)
		time.sleep(0.1)