##### 类与面向对象编程 #####
类(class)是python中的一种内建模块，在许多语言甚至在一些库中都用到了类， python的标准库也不例外。理解什么是类，如何实用，并且怎样用好python的类是非常重要的，当然这也是此文的目的所在。在此过程中，我们讲解释和类息息相关的面向对象编程的含义。</br>

##### 一切皆对象 #####

在python中class关键字定义一个类，在class中有def定义的函数，也就是类的方法。那么具体什么是类？简单来说就是一组符合逻辑的参数或者是函数。</br>

上面谈到符合逻辑的，那么具体什么是符合逻辑的？  也就是说一个类中可以包含任意参数，并且可以定义任意个方法。 类并不是随意的将多个参数或者方法包含在class下，而是创建一个在事物之间具有逻辑链接的对象。在现实世界中，类往往跟对象所联系（例如消费者或者是生产者），有时候类也是基于我们系统中的概念，比如HTTPResquest 或者Owner.</br>

不管怎么说，类都是一种技术模型，一种程序设计的思考方式，当你用这种方式去思考你系统中的元素的时候，也就是在用面向对象编程。类和对象总是在交替使用，但他们并不是同样的事物，理解他们之间的不同是理解面向对象的关键。</br>

##### 那么所有的事物都是类吗？ #####
在创建对象的时候，可以将类看成是一个蓝图，当我用class关键字定义一个消费者类的时候，我事实上并没有创建了一个消费者。只有当其实例化之后，你才拥有一个消费者。
让我们来看下面的例子：
```python
class Customer(object):
    """ A Customer of ABC back with a checking account. Customers have the
    following properties:

    Attributes:
        name: A string representing the Customer's name.
        balance: A float tracking the current balance of the Customer's account
    """
    #构造方法
    def __init__(self, name, balance=0.0):
        """ 返回一个消费者的对象，他的名字叫name 起初的现有的金额为balance
        """
        self.name = name
        self.balance = balance
    def withdraw(self, amount):
        """(返回退出消费额之后的金额)"""
        if amount > self.balance:
            raise: RuntimeError('Amount greater than available balance.')
        self.balance -= amount
        return self.balance
    def deposite(self, amount)：
        """
        返回加上收入之后的金额
        """
        self.balance += amount
        return self.balance

```
class　Customer(object) 并没有创建一个消费者，也就是说，我们定义了一个消费者，并不意味着我们就创建了他。我们仅仅是概述了创建一个消费者对象的蓝图。我们可以通过传入适当的参数来回调类的构造方法，我们可以通过实例化的方式类使用这个类，比如:
```python
jeff = Customer('Jeff', 1000.0)
```
这一行代码通过实例化Customer类，创建了一个jsff的对象。</br>
在Customer()回调之前，是不存在消费者对象的，只有通过实例化，才创建了一个对象。当然在这里我们可以通过实例化创建很多个Customer对象，当然不管我们创建多少个实例，我们仍然只有一个Customer类。

##### Self ? （实例化参数）######
那么，在类中的所有方法中self参数是什么？ 当然了他也是Customer类的一个实例。换句话说，在withdraw这个方法中，我们可以通过
```python
jeff.withdraw(100.0)
```
来调用Customer的withdraw方法，事实上jeff.withdraw(100.0)的完整形式应该是Customer.withdraw(jsff, 100.0), 但jsff.withdraw(100.0) 代码不是更优雅，更符合pythonic的风格吗？

##### \__init\__ 构造方法 #####
在python中构造方法允许我们实例化多个参数，我们初始化对象像 self.name = name 因为self是一个实例，所以这也就等价于jeff.name，正如jeff.name = 'Jsff Knupp'，类似的，self.balance = balance等同于jeff.balance = 1000 .

通过以上代码，我们完成了消费者对象的初始化，在初始化完成之后，回调就可以正确的使用啦。 也就是说在实例化jeff = Customer('jeff Kunnp', 1000.0) 我们就可以用jeff来调用类中的属性跟方法啦。</br>
原文地址：<a href="https://jeffknupp.com/blog/2014/06/18/improve-your-python-python-classes-and-object-oriented-programming/">python 面向对象与函数式编程</a>
