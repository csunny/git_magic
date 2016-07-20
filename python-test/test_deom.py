# !/usr/bin/env python
# -*- coding: utf-8 -*-

"""
@author: magic
"""


class Dict(dict):
    def __init__(self, **kwargs):
        super(Dict, self).__init__(**kwargs)

    def __getattr__(self, key):
        try:
            return self[key]
        except KeyError:
            raise AttributeError(r"'dct' object has no attribute'%s'%key")

    def __setattr__(self, key, value):
        self[key] = value


