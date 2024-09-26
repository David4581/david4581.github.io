如何让Print更复杂？我们来实践一下！
---
```python
print("Hello World")
```
这是最初的代码，一点都不复杂。
** **
```python
word = "Hello World"
print(word)
```
运用了变量，但还是非常简单。
** **
```python
def print_message_with_conditions(message, length_threshold=10):  
    if len(message) > length_threshold:  
        print(f"The long message is: {message.upper()}")  
    else:  
        for _ in range(1):  
            print(f"The short message is: {message}")  
  
word = "Hello World"  
print_message_with_conditions(word)
```
运用了格式化、条件判断、循环打印、封装成函数、异常处理的方法增加了复杂度，我认为已经足够复杂了，结束。

How do you make Print more complex? Let's practice!
---
``python
print(“Hello World”)
```
Here's the initial code, it's not complicated at all.
** **
```python
word = “Hello World”
print(word)
```
Utilizes variables, but is still very simple.
** **
```python
def print_message_with_conditions(message, length_threshold=10):  
    if len(message) > length_threshold.  
        print(f “The long message is: {message.upper()}”)  
    print(f “The long message is: {message.upper()}”)")  
        print(f “The long message is: {message.upper()}”)") else: for _ in range(1).  
            print(f “The short message is: {message}”)  
  
word = “Hello World”  
print_message_with_conditions(word)
```
The use of formatting, conditional judgments, loop printing, wrapping into functions, and exception handling adds to the complexity, and I think it's complex enough to end.