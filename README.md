# app-vw-vh
 移动端vw vh适配项目
# 根目录中需要添加一个static的文件夹
# 采用vw适配的时候会造成vant中的伪元素comtent报错
解决方法："postcss-viewport-units": {
          filterRule: rule => rule.nodes.findIndex(i => i.prop === "content") === -1 //此处是解决引入vant之后报出的content的错误
        },
