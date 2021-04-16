# xxyabc.github.io


git add .
git commit -m 'test'
git push -u origin main


目前demo中为静态页面，dist是vue初始项目（前端项目归档 first-vue）的打包后产物


vue-manage是找的动态后台管理页面的demo，需要连接mongodb，目前已经跑通本地（包括前后台、数据库），下一步需研究部署

开启数据库：
sudo mongod
cd /Users/xnkl/Applications/mongodb-osx-x86_64-3.6.4/bin   通过which mongo找到路径
./mongo
关闭数据库：
use admin
db.shutdownServer()
