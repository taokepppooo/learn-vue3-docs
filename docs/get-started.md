# 开始

[[toc]]

## 优化

- `/*@__PURE__*/`提示压缩工具，这个函数调用没有副作用。
- `textContent`跟`innerText`更是完全等价的, `textContent`通常比`innerText`更快，因为它直接访问节点的文本内容，而不考虑样式。
