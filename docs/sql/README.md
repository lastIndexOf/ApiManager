# 数据库设计文档

- 每个`Schema`中都有一个`meta`字段
```
meta: {
  createdAt:Date,
  updatedAt:Date
}
```

Schema: `user`

```
_id:ObjectId => id
username:String => 该用户用户名
email:String => 电子邮箱
phone:Number => 移动电话
password:String => bcrypt加密后的密码串
group:[ObjectId] => 分组
doc:[ObjectId] => 拥有的文档
```

Schema: `docs`

```
_id:ObjectId => id
title:String => 该文档的标题
ismultiple:Boolean => 是否是多人合作型文档
apis:[JSON] => api接口文档
group:ObjectId => 当ismultiple为true时, 表示所属分组
commits:[ObjectId] => 更新动态
commnets:[ObjectId] => 针对该文档的留言



其中, apis每个元素的字段为
{
  type: ,
  url: ,
  query: {},
  body: {}
}
```



Schema: `comment`

```
_id:ObjectId => id
from:ObjectId => 留言人
doc:ObjectId => 留言针对的文档
content:String => 留言内容
```

Schema: `commit`

```
_id:ObjectId => id
from:ObjectId => 提交人
doc:ObjectId => 提交针对的文档
content:String => 更新内容
time:Number => 更新时间
```

Schema: `group`

```
_id:ObjectId => id
members:[ObjectId] => 属于该组的成员id
```
