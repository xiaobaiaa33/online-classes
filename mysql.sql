#中国大学MOOC数据库

SET NAMES UTF8;
DROP DATABASE IF EXISTS mooc;
CREATE DATABASE mooc CHARSET=UTF8;
USE mooc;

#导航信息
CREATE TABLE mooc_navgiation (
    name VARCHAR (16),      #导航名称
    url VARCHAR(64)         #导航地址
);
INSERT INTO mooc_navgiation VALUES ("首页","/index.html");
INSERT INTO mooc_navgiation VALUES ("课程","/course.html");
INSERT INTO mooc_navgiation VALUES ("名校","/school.html");
INSERT INTO mooc_navgiation VALUES ("2020考研","/research.html");
INSERT INTO mooc_navgiation VALUES ("学校云","/yunfile.html");
INSERT INTO mooc_navgiation VALUES ("名师专栏","/teacher.html");

#轮播图
CREATE TABLE mooc_carousel (
    cid TINYINT PRIMARY KEY AUTO_INCREMENT,     #轮播图编号
    pic VARCHAR(128),                           #轮播图片路径
    url VARCHAR(128),                           #跳转路径
    title VARCHAR(32)                           #标题
);
INSERT INTO mooc_carousel VALUES (NULL,"images/index/banner1.jpg","/index.html","1");
INSERT INTO mooc_carousel VALUES (NULL,"images/index/banner2.png","/index.html","2");
INSERT INTO mooc_carousel VALUES (NULL,"images/index/banner3.jpg","/index.html","3");
INSERT INTO mooc_carousel VALUES (NULL,"images/index/banner4.jpg","/index.html","4");
INSERT INTO mooc_carousel VALUES (NULL,"images/index/banner5.png","/index.html","5");
INSERT INTO mooc_carousel VALUES (NULL,"images/index/banner6.png","/index.html","6");
INSERT INTO mooc_carousel VALUES (NULL,"images/index/banner7.jpg","/index.html","7");

#用户表
CREATE TABLE mooc_user (
    uid INT PRIMARY KEY AUTO_INCREMENT,        #用户编号
    uname VARCHAR(32),                         #用户名
    upwd VARCHAR(32),                          #密码
    email VARCHAR(32),                         #电子邮件
    phone VARCHAR(11),                         #电话
    avatar VARCHAR(128),                       #头像
    user_name VARCHAR(8),                      #真实姓名
    gender BOOL,                               #性别 0-女，1-男
    ts BOOL                                  #0-学生 1-老师
);
INSERT INTO mooc_user VALUES (NULL,"jack","jack123","jack@163.com","18258197966","/public/u1.jpg","孙行",1,0);
INSERT INTO mooc_user VALUES (NULL,"zzzz","szzz321","zzzz3@163.com","18298415391","/public/u2.jpg","朱莉达",0,1);

#讨论名师专栏
CREATE TABLE mooc_column (
    coid TINYINT PRIMARY KEY,             #图片编号
    pic VARCHAR(128)                      #图片路径
);
INSERT INTO mooc_column VALUES (1,"images/index/column1.jpg");
INSERT INTO mooc_column VALUES (2,"images/index/column2.jpg");
INSERT INTO mooc_column VALUES (3,"images/index/column3.jpg");

#横幅
CREATE TABLE mooc_banner (
    pic VARCHAR(128)                      #横幅图片路径
);
INSERT INTO mooc_banner VALUES ("/public/b1.jpg");

#专业课程家族
CREATE TABLE mooc_course_family (
    fid INT PRIMARY KEY AUTO_INCREMENT,   #编号
    fname VARCHAR(16)                     #专业名称
);
INSERT INTO mooc_course_family VALUES (NULL,"计算机");
INSERT INTO mooc_course_family VALUES (NULL,"经济管理");
INSERT INTO mooc_course_family VALUES (NULL,"艺术设计");
INSERT INTO mooc_course_family VALUES (NULL,"工学");
INSERT INTO mooc_course_family VALUES (NULL,"理学");
INSERT INTO mooc_course_family VALUES (NULL,"医药卫生");

# 专业二级标题
CREATE TABLE mooc_course_subt (
    scid INT PRIMARY KEY AUTO_INCREMENT,    #编号
    family_id INT,                          #所属课程家族
    title VARCHAR(16)                       #标题
);
INSERT INTO mooc_course_subt VALUES (NULL,1,"计算机基础");
INSERT INTO mooc_course_subt VALUES (NULL,1,"编程语言");
INSERT INTO mooc_course_subt VALUES (NULL,1,"数据库与数据结构");
INSERT INTO mooc_course_subt VALUES (NULL,1,"计算机应用");
INSERT INTO mooc_course_subt VALUES (NULL,1,"软件工程");
INSERT INTO mooc_course_subt VALUES (NULL,1,"计算机组成");

INSERT INTO mooc_course_subt VALUES (NULL,2,"经济学");
INSERT INTO mooc_course_subt VALUES (NULL,2,"金融学");
INSERT INTO mooc_course_subt VALUES (NULL,2,"工商管理");
INSERT INTO mooc_course_subt VALUES (NULL,2,"电子商务");
INSERT INTO mooc_course_subt VALUES (NULL,2,"公共管理");
INSERT INTO mooc_course_subt VALUES (NULL,2,"管理科学和工程");
INSERT INTO mooc_course_subt VALUES (NULL,2,"创新创业");

INSERT INTO mooc_course_subt VALUES (NULL,3,"艺术");
INSERT INTO mooc_course_subt VALUES (NULL,3,"建筑");
INSERT INTO mooc_course_subt VALUES (NULL,3,"设计");
INSERT INTO mooc_course_subt VALUES (NULL,3,"音乐");

INSERT INTO mooc_course_subt VALUES (NULL,4,"力学");
INSERT INTO mooc_course_subt VALUES (NULL,4,"电子信息");
INSERT INTO mooc_course_subt VALUES (NULL,4,"土木工程");
INSERT INTO mooc_course_subt VALUES (NULL,4,"机械工程");
INSERT INTO mooc_course_subt VALUES (NULL,4,"材料化学");
INSERT INTO mooc_course_subt VALUES (NULL,4,"航空航天");
INSERT INTO mooc_course_subt VALUES (NULL,4,"能源矿业");
INSERT INTO mooc_course_subt VALUES (NULL,4,"交通运输");

INSERT INTO mooc_course_subt VALUES (NULL,5,"数学");
INSERT INTO mooc_course_subt VALUES (NULL,5,"物理");
INSERT INTO mooc_course_subt VALUES (NULL,5,"化学");
INSERT INTO mooc_course_subt VALUES (NULL,5,"生物");
INSERT INTO mooc_course_subt VALUES (NULL,5,"天文学");
INSERT INTO mooc_course_subt VALUES (NULL,5,"地理科学");
INSERT INTO mooc_course_subt VALUES (NULL,5,"海洋科学");

INSERT INTO mooc_course_subt VALUES (NULL,6,"基础医学");
INSERT INTO mooc_course_subt VALUES (NULL,6,"临床医学");
INSERT INTO mooc_course_subt VALUES (NULL,6,"公共卫生");
INSERT INTO mooc_course_subt VALUES (NULL,6,"口腔医学");
INSERT INTO mooc_course_subt VALUES (NULL,6,"中医中药学");
INSERT INTO mooc_course_subt VALUES (NULL,6,"药学");
INSERT INTO mooc_course_subt VALUES (NULL,6,"护理学");
INSERT INTO mooc_course_subt VALUES (NULL,6,"健康");


#课程
CREATE TABLE mooc_course (
    cuid INT PRIMARY KEY AUTO_INCREMENT,
    family_id INT,          #所属课程家族
    title VARCHAR(32),      #标题
    -- subtitle VARCHAR(16)    #二级标题
    school VARCHAR(16),     #学校
    reding Int,             #阅读量
    intro VARCHAR(128),     #简介
    pic VARCHAR(128)        #图片路径
);
-- 计算机
INSERT INTO mooc_course VALUES (NULL,1,"Linux开发环境及应用","北京邮电大学","7359","让您从入门开始快速成为一个中级水平的Linux使用者","images/index/co1.jpg");
INSERT INTO mooc_course VALUES (NULL,1,"Web编程技术","西安交通大学","11051","将会帮助您构建Web体系框架，培养Web实践能力","images/index/co2.jpg");
INSERT INTO mooc_course VALUES (NULL,1,"C++程序设计(面向对象进阶)","北京邮电大学","7466","学过C或者Java，想要了解新标准C++，可以参加本课程学习 ","images/index/co3.jpg");
INSERT INTO mooc_course VALUES (NULL,1,"FLASH动画设计与制作","武汉大学","13084","快来加入我们动画设计与制作吧~~享受动画带给我们的快乐~~","images/index/co4.jpg");
INSERT INTO mooc_course VALUES (NULL,1,"机器学习","中国地质大学(武汉)","9442","一起进入机器学习的世界、发掘潜藏在数据中的奥秘和财富吧！","images/index/co5.jpg");
INSERT INTO mooc_course VALUES (NULL,1,"操作系统原理","西安交通大学","8957","操作系统的设计方法和实现技术，操作系统的设计精髓及基本原理","images/index/co6.jpg");
-- 经济管理
INSERT INTO mooc_course VALUES (NULL,2,"西方经济学(微观)","四川大学","18030","正如微观经济学之父马歇尔所言：这是一门研究生活事务的学问","images/index/ec1.jpg");
INSERT INTO mooc_course VALUES (NULL,2,"货币银行学","东北财经大学","6521","货币政策变化给金融投资及百姓生活带来的变化","images/index/ec2.jpg");
INSERT INTO mooc_course VALUES (NULL,2,"宏观经济学","武汉大学","17878","助你看懂全球化背景下中国宏观经济运行规律与未来走势","images/index/ec3.jpg");
INSERT INTO mooc_course VALUES (NULL,2,"品牌管理","重庆大学","4065","让我们一起走进品牌管理，解锁品牌密码","images/index/ec4.jpg");
INSERT INTO mooc_course VALUES (NULL,2,"货币金融学","西南财经大学","9442","《货币金融学》是金融专业的基础核心课程，课程地位非常重要","images/index/ec5.jpg");
INSERT INTO mooc_course VALUES (NULL,2,"会计学(面向非会计专业学生)","中央财经大学","17410","会计基础知识、会计思维和会计分析能力是现代人必备的财经素养的组成部分","images/index/ec6.jpg");
-- 艺术设计
INSERT INTO mooc_course VALUES (NULL,3,"音乐奥秘解码——轻松学乐理","中央音乐学院","12197","领大家走进节奏，乐音，音程，和弦，西方调式，中国民族调式等六大音乐王国","images/index/mu1.jpg");
INSERT INTO mooc_course VALUES (NULL,3,"大家弹起来——钢琴即兴伴奏人门","中央音乐学院","4623","将热爱即兴演奏的人带入到钢琴即兴弹奏的美好世界中来","images/index/mu2.jpg");
INSERT INTO mooc_course VALUES (NULL,3,"拨动心弦——古典吉他启蒙","中央音乐学院","13775","充分发展我们每一个演奏者的音乐的敏感性、演奏技巧 ","images/index/mu3.jpg");
INSERT INTO mooc_course VALUES (NULL,3,"走进摄影","湖南师范大学","21483","去真实记录客观事件，发现和捕捉世间美好，表达内心的情感","images/index/mu4.png");
INSERT INTO mooc_course VALUES (NULL,3,"电视艺术欣赏","北京师范大学","2803","提高电视艺术欣赏能力、创作能力与分析能力","images/index/mu5.jpg");
INSERT INTO mooc_course VALUES (NULL,3,"设计概论","武汉理工大学","2495","掌握的设计学科的基础知识和学科体系中各专业的概况","images/index/mu6.jpg");
-- 工学
INSERT INTO mooc_course VALUES (NULL,4,"传感技术及应用","哈尔滨工业大学","2254","各类传感器的实际应用及传感器技术发展的状况及新成果","images/index/gong1.png");
INSERT INTO mooc_course VALUES (NULL,4,"模拟电子技术基础","武汉理工大学","3460","电子电路大体可分为模拟电路与数字电路两类，其中模拟电路构建了电子行业的基础","images/index/gong2.jpg");
INSERT INTO mooc_course VALUES (NULL,4,"机械原理","湖南大学","1981","机械原理课程是机械类专业学生必修的核心课程","images/index/gong3.jpg");
INSERT INTO mooc_course VALUES (NULL,4,"嵌入式系统设计","武汉大学","2634","学习arm嵌入式处理器为代表的的嵌入式系统架构、开发流程、调试调优方法","images/index/gong4.jpg");
INSERT INTO mooc_course VALUES (NULL,4,"土木工程概论","西南财经大学","2032","透过那气势恢宏的工程，传递我们对土木工程的激情与挚爱","images/index/gong5.jpg");
INSERT INTO mooc_course VALUES (NULL,4,"电路基础(上)","天津大学","3226","“实际电路→电路模型→数学模型→物理现象”的分析思路","images/index/gong6.jpg");
-- 理学
INSERT INTO mooc_course VALUES (NULL,5,"走进地理学","南京大学","15290","我们赖以生存的地球，诞生于46亿年前，是太阳系第三颗行星","images/index/li1.jpg");
INSERT INTO mooc_course VALUES (NULL,5,"有用的统计学","中央财经大学","4770","统计是一种归纳思维过程，通过收集、分析和解释数据，刻画斑斓世界背后的规律","images/index/li2.jpg");
INSERT INTO mooc_course VALUES (NULL,5,"概率论与数据统计","南京大学","15841","概率论是研究随机现象统计规律性的一门数学学科","images/index/li3.jpg");
INSERT INTO mooc_course VALUES (NULL,5,"基础生物化学","西北农林科技大学","4472","生物体的基本化学组成、生物大分子的化学结构、空间结构及基本的生物学功能","images/index/li4.jpg");
INSERT INTO mooc_course VALUES (NULL,5,"大学物理——近代物理","北京理工大学","58","量子力学和相对论统称为近代物理学，是20世纪物理学最伟大的发现","images/index/li5.jpg");
INSERT INTO mooc_course VALUES (NULL,5,"天文漫谈","华中科技大学","3622","“与您演绎往古来今之星月神话”！ 一门历经16载同学们都说很“炫”的课","images/index/li6.jpg");
-- 医药卫生
INSERT INTO mooc_course VALUES (NULL,6,"认识灾难，险中求生","四川大学","3068","这就是这样一门在未来生存之战中为你准备的神兵利器","images/index/yao1.jpg");
INSERT INTO mooc_course VALUES (NULL,6,"齿时齿课——家庭口腔卫士养成课","四川大学","4162","向大众普及正确的口腔知识，树立正确的口腔保健意识","images/index/yao2.jpg");
INSERT INTO mooc_course VALUES (NULL,6,"中国传统节日与养生文化","山东中医药大学","345","对节日习俗蕴含的中医养生文化进行深入地挖掘","images/index/yao3.jpg");
INSERT INTO mooc_course VALUES (NULL,6,"大学生身心健康自己关注与管理","四川大学","732","身心健康是青年朋友和每个人关注与期待的一种合宜的健康状态","images/index/yao4.jpg");
INSERT INTO mooc_course VALUES (NULL,6,"齐鲁名家谈方论药","山东中医药大学","2153","挖掘名家思想，传承临证经验，弘扬中医学术","images/index/yao5.jpg");
INSERT INTO mooc_course VALUES (NULL,6,"皮肤性病学","西安交通大学","4252","通过皮肤的“蛛丝马迹”可以及时发现和诊断内脏疾病","images/index/yao6.jpg");

#学员留言
CREATE TABLE mooc_student (
    sid INT PRIMARY KEY AUTO_INCREMENT,     #学生编号
    avatar VARCHAR(128),                    #头像
    name VARCHAR(8),                        #姓名
    professional VARCHAR(64),               #职业
    msg VARCHAR(1024)                       #留言
);
INSERT INTO mooc_student VALUES (1,"/public/s1.jpg","陈睿","北京某事业单位 公务员","我第一次感受到故宫角楼在夕阳下震撼的美，便是在考完《中国古代建筑艺术》之后的那个下午；学完了《不朽的艺术》，再去博物馆不再是陪儿子完成任务了。学习MOOC之前和之后的对比，让我感受最深的就是鲍勃·迪伦的那句“昔日我曾苍老，如今风华正茂” 。");
INSERT INTO mooc_student VALUES (2,"/public/s2.jpg","周昀","中南财经政法大学 工商管理","中国大学MOOC帮助我在专业上更进一步：《公司金融》，《财务管理》，《会计学》，《大学英语口语》，《大学英语写作》，我刷了一遍又一遍。很显然，卿不负我如来亦此，我等来了命运对我的眷顾，成为浙大一名准博士生。");
INSERT INTO mooc_student VALUES (3,"/public/s3.jpg","刘瑜","北京某软件公司 测试兼商务英语培训师","原来学习是可以上瘾的。我相信只要找对打开姿势，都会被慕课的魅力所吸引：分课程做笔记；听到精彩的地方，写两笔小感悟；有困惑的地方，在讨论区总有热心的学友们答疑解惑；偶尔还能得到老师的评语，受宠若惊啊。");


#考试
CREATE TABLE mooc_test (
    tid INT PRIMARY KEY AUTO_INCREMENT,  #题目编号
    sub VARCHAR(1024),                   #题目
    A VARCHAR(1024), 
    B VARCHAR(1024), 
    C VARCHAR(1024), 
    D VARCHAR(1024), 
    ans VARCHAR(8),                      #答案
    score INT                            #分数
);
INSERT INTO mooc_test VALUES (NULL,"先秦时代,教育内容以“六艺”为主,下列不属于“六艺”的是","射","御","礼","武","D","10");#D
INSERT INTO mooc_test VALUES (NULL,"经魏晋多名士,有著名的竹林七贤,《与山巨源绝交书》是竹林七贤中的谁写给山涛的","阮籍","嵇康","刘伶","向秀","B","10");#B
INSERT INTO mooc_test VALUES (NULL,"科举制在中国影响深远,乡试录取者称为“举人”,会试录取者称为“贡生”,那么殿试录取者称为","大元","解元","进士","榜眼","C","10");#C
INSERT INTO mooc_test VALUES (NULL,"“生当做人杰,死亦为鬼雄,至今思项羽,不肯过江东。”为哪位诗人的作品?","李白","杜甫","李商隐","李清照","D","10");#D
INSERT INTO mooc_test VALUES (NULL,"“豆蔻”是指(  )岁","十三","十五","十八","二十","A","10");#A
INSERT INTO mooc_test VALUES (NULL,"中国的书院制度自唐代始,有官方和私人设置的两类,下列各书院属于官方创办的是","岳麓书院","嵩阳书院","集贤书院","白鹿洞书院","C","10");#C
INSERT INTO mooc_test VALUES (NULL,"友谊的深浅,由下列那一个成语可以看出情义最为深重?","莫逆之交","金兰之交","刎颈之交","点头之交","C","10");#C
INSERT INTO mooc_test VALUES (NULL,"一提到书法中的草书,人们便会想到“颠张醉素”,请问下列属于颠张的作品的是","自叙帖","自言帖","中秋帖","黄州寒食帖","B","10");#B
INSERT INTO mooc_test VALUES (NULL,"鲁迅先生称(  )为“史家之绝唱,无韵之离骚”","史记","汉书","三国志","资治通鉴","A","10");#A
INSERT INTO mooc_test VALUES (NULL,"郑谷有诗曰:“何事文星与酒星,一时钟在李先生。高吟大醉三千百,留着人间伴月明。”诗中的李先生指的是","李商隐","李贺","李白","李煜","C","10");#C

#成绩表
CREATE TABLE mooc_score (
    sid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(32),
    score INT,
    time VARCHAR(64)
);
INSERT INTO mooc_score VALUES (NULL,"jack",100,"2019/3/18 00:37:00");
INSERT INTO mooc_score VALUES (NULL,"saf",30,"2019/3/18 23:13:30");

#上传课件
CREATE TABLE upload (
    upid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(128)
);
INSERT INTO upload VALUES (NULL,"a.txt");
INSERT INTO upload VALUES (NULL,"b.txt");