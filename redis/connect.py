#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2016-11-04 22:34:13
# @Author  : Your Name (you@example.org)
# @Link    : http://example.org
# @Version : $Id$

import redis

conn = redis.Redis(host='127.0.0.1', port=6379)
# redis 字符串
conn.set('magic', 'shuai')
print conn.get('magic')

# redis 列表
# conn.rpush('list-key', 'item')
# conn.rpush('list-key', 'item2')
# conn.rpush('list-key', 'item')

print conn.lrange('list-key', 0, -1)
print conn.lindex('list-key', 0)
conn.lpop('list-key')

# redis 集合
conn.sadd('set-key', 'item1')
conn.sadd('set-key', 'item2')
conn.sadd('set-key', 'item3')

print conn.smembers('set-key')

print conn.sismember('set-key', 'item1')

# redis 散列
conn.hset('hash-key', 'sub-key1', 'magic')
conn.hset('hash-key', 'sub-key2', 'shuai')

print conn.hgetall('hash-key')

# redis 有序集合
conn.zadd('zset-key', 'magic', 100)
conn.zadd('zset-key', 'smagic', 150)
print conn.zrange('zset-key',  0 -1 withscore=True)