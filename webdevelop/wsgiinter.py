# !/usr/bin/env python
# -*- coding: utf-8 -*-

"""
@author: magic
"""
'''
environ：一个包含所有http请求信息的dict对象
start_response:一个发送HTTP响应的函数
'''


def application(environ, start_response):
    start_response('200 OK', [('Content_Tyoe', 'text/html')])
    return '<h1>Hello web!</h1>'

