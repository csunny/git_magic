# !/usr/bin/env python
# -*- coding: utf-8 -*-

"""
@author: magic
"""

from wsgiref.simple_server import make_server
from wsgiinter import application

httpd = make_server('', 8000, application)
print('Serving HTTP on post 8000...')
httpd.serve_forever()
