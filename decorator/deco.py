# !/usr/bin/env python
# -*- coding: utf-8 -*-

"""
@author: magic
"""
import functools

'''
在代码运行期间动态增加功能的方式， 称为"装饰器"
'''

# 当decorator 本身不需要传入参数时 定义如下


def log(func):
    def wrapper(*args, **kwargs):
        print('call %s():' % func.__name__)
        return func(*args, **kwargs)
    return wrapper


@log         # 相当于执行了语句： now = log(now)
def now():
    print('2016-8-8')


# 当decorator 需要传入参数时，需要编写一个返回decorator的高阶函数。
def log(text):
    def decorator(func):
        def wrapper(*args, **kwargs):
            print '%s %s():' % (text, func.__name__)
            return func(*args, **kwargs)
        return wrapper
    return decorator


@log('exec')
def past():
    print('2015-5-9')


# 由于上面两种装饰器改变了原函数的__name__方法,所以需要做进一步的优化,需要用到functools


def log1(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print('call %s():' % func.__name__)
        return func(*args, **kwargs)
    return wrapper

# 同理针对带参数的decorator


def log(text):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            print('%s %s():' % (text, func.__name__))
            return func(*args, **kwargs)
        return wrapper
    return decorator


def log2(arg=None):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            print('before'+'%s %s():' % (arg, func.__name__))
            func()
            print('after'+'%s %s():' % (arg, func.__name__))
            return func(*args, **kwargs)
        return wrapper
    return decorator


def log3(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print("before")
        ret = func(*args, **kwargs)
        print('after')
        return ret
    return wrapper


@log3
def future():
    print('2018-8-7')

if __name__ == '__main__':
    # f = nowe
    # f()
    # print f.__name__
    # now()
    # past()
    # print past.__name__
    future()
    # print future.__name__
    pass



