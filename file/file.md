## NPM registry 管理工具

 发布于 3 年前  作者 Pana  19444 次浏览  最后一次编辑是 9 个月前
开发的npm registry 管理工具 nrm,  能够查看和切换当前使用的registry, 最近NPM经常 down 掉, 这个还是很有用的哈哈

###　Install

```javascript
	$ npm install -g nrm
```
### Example
```
$ nrm ls

* npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  eu ----- http://registry.npmjs.eu/
  au ----- http://registry.npmjs.org.au/
  sl ----- http://npm.strongloop.com/
  nj ----- https://registry.nodejitsu.com/
```
 
 ```
$ nrm use cnpm //switch registry to cnpm

    Registry has been set to: http://r.cnpmjs.org/
```  
### cmd

```javascript
	nrm help // show help
  nrm list // show all registries
  nrm use cnpm // switch to cnpm
  nrm home // go to a registry home page
```


