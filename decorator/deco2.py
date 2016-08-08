# !/usr/bin/env python
# -*- coding: utf-8 -*-

"""
@author: magic
"""
import functools


def log1(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print('before')
        ret = func(*args, **kwargs)
        print('after')
        return ret
        # return func(*args, **kwargs)
    return wrapper


@log1
def test():
    print('this is decorator test!')


@log1
def test2(a, b):
    print(a+b)


@log1
def test3(a, b, c):
    print(a*b*c)


if __name__ == '__main__':
    # test()
    # test2(1, 2)
    test3(2, 4, 5)
