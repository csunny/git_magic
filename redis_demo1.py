#!/usr/vin/env python
# -*- coding:utf-8 -*-
"""
  @date = ''
__author__ = 'magic'
"""

# sample example
print("#################simple example################")
import redis
r = redis.StrictRedis(host='127.0.0.1', port=6379)
r.set('magic', 'hello')
val = r.get('magic')
print val

# 使用hash 类型保存多样化数据对象
print("############################hash##############")
r.hset('users:joe', 'name', 'jone doe')
r.hset('users:joe', 'email', 'john@test.com')
r.hset('users:joe', 'phone', 1225454545)
r.hincrby('users:joe', 'visit', 1)
rlt = r.hgetall('users:joe')
results = r.hkeys('users:joe')
print(rlt)
print(results)


# 社交圈子数据
print("################社交圈子################")
r.sadd('circle:game:lol', 'user:django')
r.sadd('circle:game:lol', 'user:leo')
r.sadd('circle:game:lol', 'user:Guo')
r.sadd('circle:soccer:InterMilan', 'user:Guo')
r.sadd('circle"soccer:InterMilan', 'user:levis')
r.sadd('circle:soccer:InterMilan', 'user:leo')

circle_menber = r.smembers('circle:game:lol')
print(circle_menber)
print r.sinter('circle:game:lol', 'circle:soccer:InterMilan')
print r.sunion('circle:game:lol', 'circle:soccer"InterMilan')

# 实时用户统计
print("###################实时用户统计###############")

import time
from redis import Redis
from datetime import datetime
ONLINE_LAST_MINUTES = 5
redis = Redis()

import time
from redis import Redis
from datetime import datetime
ONLINE_LAST_MINUTES = 5
redis = Redis()

def mark_online(user_id):         #将一个用户标记为online
    now = int(time.time())        #当前的UNIX时间戳
    expires = now + (app.config['ONLINE_LAST_MINUTES'] * 60) + 10    #过期的UNIX时间戳
    all_users_key = 'online-users/%d' % (now // 60)        #集合名，包含分钟信息
    user_key = 'user-activity/%s' % user_id
    p = redis.pipeline()
    p.sadd(all_users_key, user_id)                         #将用户id插入到包含分钟信息的集合中
    p.set(user_key, now)                                   #记录用户的标记时间
    p.expireat(all_users_key, expires)                     #设定集合的过期时间为UNIX的时间戳
    p.expireat(user_key, expires)
    p.execute()

def get_user_last_activity(user_id):        #获得用户的最后活跃时间
    last_active = redis.get('user-activity/%s' % user_id)  #如果获取不到，则返回None
    if last_active is None:
        return None
    return datetime.utcfromtimestamp(int(last_active))

def get_online_users():                     #获得当前online用户的列表
    current = int(time.time()) // 60
    minutes = xrange(app.config['ONLINE_LAST_MINUTES'])
    return redis.sunion(['online-users/%d' % (current - x)        #取ONLINE_LAST_MINUTES分钟对应集合的交集
                         for x in minutes])


if __name__ == '__main__':
  mark_online(1)