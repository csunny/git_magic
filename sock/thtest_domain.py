#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2016-11-13 13:45:29
# @Author  : Your Name (you@example.org)
# @Link    : http://example.org
# @Version : $Id$

import threading
import time

def dmn():
	print('dmn start...')
	time.sleep(2)
	print('dmn end...')

def ndmn():
	print('ndmn start...')
	time.sleep(1)
	print('ndmn end .')

d = threading.Thread(target=dmn)
d.daemon = True
n = threading.Thread(target=ndmn)
print("start...")
d.start()
n.start()
print('end...')
