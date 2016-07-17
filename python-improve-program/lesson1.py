#!usr/bin/env python
# coding:utf-8
"""
@ author = magic
"""
"""
list comprehensions
Iterators and generators
Descriptors and properties
Decorators
contextlib
"""
event = [i for i in range(10)if i % 2 == 0]
# 迭代器
iteror = iter('asdfg')
# 自定义迭代器


class MyIterator(object):

    def __init__(self, step):
        self.step = step

    def next(self):
        """Return the next element."""
        if self.step == 0:
            raise StopIteration
        self.step -= 1
        return self.step

    def __iter__(self):
        """
        Return the iterator itself.
        """
        return self

if __name__ == '__main__':
    for ele in MyIterator(4):
        pass

# 生成器


def fibonacci():
    a, b = 0, 1
    while True:
        yield b
        a, b = b, a+b


def power(values):
    for value in values:
        print 'powering %s' % value
        yield value


def adder(values):
    for value in values:
        print('adding to %s' % value)
        if value % 2 == 0:
            yield value + 3
        else:
            yield value + 2


def psychologist():
    print 'Please tell me your problems'
    while True:
        answer = (yield)
        if answer is not None:
            if answer.endswith('?'):
                print ("Don't ask yourself too much questions")
            elif 'good' in answer:
                print("A that's good, go on ")
            elif 'bad' in answer:
                print("Don't be so negative")
"""
test psychologist
free = psychologist()
free.next()
free.send("I fell bad")
free.send("Why i shouldn't ?")
free.send("Ok then I should find what is good for me")
"""
"""
    send 的工作机制与next一样，但是yield将变成能够传入的值，因而,这个
    函数可以根据客户端的代码来改变其行为。同时，还添加了throw和close两个函数
    throw 允许客户端代码传入要抛出的任何类型的异常:
    close的工作方式是相同的，但是将会抛出一个特定的异常-GeneratorExit， 在这种
    情况下，生成器函数模版应该类似以下所示
"""


def my_generator():
    try:
        yield 'something'
    except ValueError:
        yield 'dealing with the exception'
    finally:
        print("ok let's clean")
"""
gen = my_generator()
gen.next()
gen.throw(ValueError('mean mean mean'))
gen.close()
"""

# 协同程序 ：是可以挂起、恢复并且有多个进入点的函数，有些语言本身提供了
# 这种特性 在python中，协同程序的替代者是线程
# 生成器表达式
item = (x*x for x in range(10) if x % 2 == 0)
for el in item:
    pass

# itertools 模块
# islice 窗口迭代器
import itertools


def starting_at_five():
    value = raw_input().strip()
    while value != '':
        for elem in itertools.islice(value.split(), 4, None):
            yield elem
        value = raw_input().strip()
items = starting_at_five()


# 编写装饰器
# 编写自定义装饰器有很多方法，但最简单和最容易理解的方法是编写一个函数
# 返回封装原始函数的一个子函数

def mydecorator(function):
    def _mydecorator(*args, **kwargs):
        # 在调用实际函数之前做些填充工作
        res = function(*args, **kwargs)
        # 做完某些填充之后
        return res
    # 返回子函数
    return _mydecorator

# 当装饰器需要参数时 需要进行二级封装


def mydecorator2(arg1, arg2):
    def _mydecorator(function):
        def __mydecorator(*args, **kwargs):
            res = function(*args, **kwargs)
            return res
        return __mydecorator
    return _mydecorator
""" 因为装饰器在模块第一次读取时由解释程序装入，所以它们的使用必须受限与
总体上可以应用的封装器。如果装饰器与方法的类或增强的函数签名绑定，它应该重构为
常规的可调用对象"""

# 常见的装饰器模式包括：
# 参数检查
# 缓存
# 代理
# 上下文提供者

# 参数检查
from itertools import izip
rpc_info = {}


def xmlrpc(in_=(), out=(type(None))):
    def _xmlrpc(function):
        # 注册签名
        func_name = function.func_name
        rpc_info[func_name] = (in_, out)

        def _check_types(elements, types):
            """Subfunction that checks the types."""
            if len(elements) != len(types):
                raise TypeError('argument count is wrong')
            typed = enumerate(izip(elements, types))
            for index, couple in typed:
                arg, of_the_right_type = couple
                if isinstance(arg, of_the_right_type):
                    continue
                raise TypeError('arg %d should be %s' % index, of_the_right_type)

        # 封装函数
        def __xmlrpc(*args):
            checkable_args = args[1:]
            _check_types(checkable_args, in_)

            res = function(*args)
            # 检查输出的内容
            if not type(res) in (tuple, list):
                checkable_res = (res,)
            else:
                checkable_res  = res
            _check_types(checkable_res, out)

            # 函数及其类型检查成功
            return res
        return __xmlrpc
    return _xmlrpc


# 使用实例
class RPCView(object):
    @xmlrpc((int, int))
    def meth1(self, int1, int2):
        print('received %d and %d' % (int1, int2))

    @xmlrpc((str,), (int,))      # string >int
    def meth2(self, parase):
        print('received %s' % parase)
        return 12


# with and contextlib
"""
关闭一个文件
释放一个锁
创建一个临时的代码补丁
在特殊环境中运行受保护的代码
"""
# with 语句覆盖了这些使用场景，为在下一个代码块前后调用一些代码提供了
# 一种简单的方法。例如， 使用一个文件通常可以如下实现
closecompute = file(r'C:\Users\think\Desktop\closecompute.bat')
try:
    for line in closecompute:
        if line.startswith('#'):
            continue
        print(line)
finally:
    closecompute.close()
