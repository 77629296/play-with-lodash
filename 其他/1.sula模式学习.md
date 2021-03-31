# 如何设计配置

配置很好实现，关键怎么设计才能更加灵活，一些定制化需求怎么通过不修改库代码实现，如何暴露接口？

## 现状

中后台开发中表单是常见需求，需求也是多变的。如果固定了 CRUD 操作接口，后期必然要在源码上堆叠大量特殊逻辑。  
最近看 formRender、formily，一直在思考表单的配置如何实现，类似这种库的 schema 配置，只做到了 ui 层，事件只实现了简单的显示隐藏、远程数据获取，如果需要对数据获取前后做一些操作，就需要硬编码来实现  
使用是挺方便，关键是代码，怎么存储到服务端？自定义的如何关联？

## Sula 解决了哪些痛点

1. 抽象 action 插件，可以自定义编排
2. 需要自定义功能，可以自定义插件，无缝对接
3. 扩展 field 插件，自定义业务组件
4. 重点是这一切都可以用 json 描述

## 实现原理

![配置模板组件](https://tva1.sinaimg.cn/large/008eGmZEly1gp34n409i9j31400hrjul.jpg)
![语义化场景配置](https://tva1.sinaimg.cn/large/008eGmZEly1gp35jxj6w8j31400jin0c.jpg)
![Form](https://tva1.sinaimg.cn/large/008eGmZEly1gp35kds7f5j31400mjtba.jpg)
![Table](https://tva1.sinaimg.cn/large/008eGmZEly1gp35koplrdj31a60jqwgz.jpg)
