-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: localhost    Database: ssm6i524
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `address` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `address` varchar(200) NOT NULL COMMENT '地址',
  `name` varchar(200) NOT NULL COMMENT '收货人',
  `phone` varchar(200) NOT NULL COMMENT '电话',
  `isdefault` varchar(200) NOT NULL COMMENT '是否默认地址[是/否]',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1619344302746 DEFAULT CHARSET=utf8 COMMENT='地址';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'2021-04-25 09:45:32',1,'宇宙银河系金星1号','金某','13823888881','是'),(2,'2021-04-25 09:45:32',2,'宇宙银河系木星1号','木某','13823888882','是'),(3,'2021-04-25 09:45:32',3,'宇宙银河系水星1号','水某','13823888883','是'),(4,'2021-04-25 09:45:32',4,'宇宙银河系火星1号','火某','13823888884','是'),(5,'2021-04-25 09:45:32',5,'宇宙银河系土星1号','土某','13823888885','是'),(6,'2021-04-25 09:45:32',6,'宇宙银河系月球1号','月某','13823888886','是'),(1619344302745,'2021-04-25 09:51:42',1619344178101,'梅州市梅江区人民政府','测试姓名','12345678902','是');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `tablename` varchar(200) DEFAULT 'shangpinxinxi' COMMENT '商品表名',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `goodid` bigint(20) NOT NULL COMMENT '商品id',
  `goodname` varchar(200) DEFAULT NULL COMMENT '商品名称',
  `picture` varchar(200) DEFAULT NULL COMMENT '图片',
  `buynumber` int(11) NOT NULL COMMENT '购买数量',
  `price` float DEFAULT NULL COMMENT '单价',
  `discountprice` float DEFAULT NULL COMMENT '会员价',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1619344236436 DEFAULT CHARSET=utf8 COMMENT='购物车表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `config`
--

DROP TABLE IF EXISTS `config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `config` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(100) NOT NULL COMMENT '配置参数名称',
  `value` varchar(100) DEFAULT NULL COMMENT '配置参数值',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='配置文件';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `config`
--

LOCK TABLES `config` WRITE;
/*!40000 ALTER TABLE `config` DISABLE KEYS */;
INSERT INTO `config` VALUES (1,'picture1','http://localhost:8080/ssm6i524/upload/picture1.jpg'),(2,'picture2','http://localhost:8080/ssm6i524/upload/picture2.jpg'),(3,'picture3','http://localhost:8080/ssm6i524/upload/picture3.jpg'),(6,'picture4','http://localhost:8080/ssm6i524/upload/1619344116930.jpg');
/*!40000 ALTER TABLE `config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discussshangpinxinxi`
--

DROP TABLE IF EXISTS `discussshangpinxinxi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `discussshangpinxinxi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `refid` bigint(20) NOT NULL COMMENT '关联表id',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `nickname` varchar(200) DEFAULT NULL COMMENT '用户名',
  `content` longtext NOT NULL COMMENT '评论内容',
  `reply` longtext COMMENT '回复内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1619344226651 DEFAULT CHARSET=utf8 COMMENT='商品信息评论表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discussshangpinxinxi`
--

LOCK TABLES `discussshangpinxinxi` WRITE;
/*!40000 ALTER TABLE `discussshangpinxinxi` DISABLE KEYS */;
INSERT INTO `discussshangpinxinxi` VALUES (91,'2021-04-25 09:45:32',1,1,'用户名1','评论内容1','回复内容1'),(92,'2021-04-25 09:45:32',2,2,'用户名2','评论内容2','回复内容2'),(93,'2021-04-25 09:45:32',3,3,'用户名3','评论内容3','回复内容3'),(94,'2021-04-25 09:45:32',4,4,'用户名4','评论内容4','回复内容4'),(95,'2021-04-25 09:45:32',5,5,'用户名5','评论内容5','回复内容5'),(96,'2021-04-25 09:45:32',6,6,'用户名6','评论内容6','回复内容6'),(1619344226650,'2021-04-25 09:50:25',1619344102641,1619344178101,'123','测试','你好！');
/*!40000 ALTER TABLE `discussshangpinxinxi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `huiyuan`
--

DROP TABLE IF EXISTS `huiyuan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `huiyuan` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `huiyuanzhanghao` varchar(200) NOT NULL COMMENT '会员账号',
  `mima` varchar(200) NOT NULL COMMENT '密码',
  `huiyuannicheng` varchar(200) DEFAULT NULL COMMENT '会员昵称',
  `xingbie` varchar(200) DEFAULT NULL COMMENT '性别',
  `shoujihaoma` varchar(200) DEFAULT NULL COMMENT '手机号码',
  `gerentouxiang` varchar(200) DEFAULT NULL COMMENT '个人头像',
  `money` float DEFAULT '0' COMMENT '余额',
  PRIMARY KEY (`id`),
  UNIQUE KEY `huiyuanzhanghao` (`huiyuanzhanghao`)
) ENGINE=InnoDB AUTO_INCREMENT=1619344178102 DEFAULT CHARSET=utf8 COMMENT='会员';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `huiyuan`
--

LOCK TABLES `huiyuan` WRITE;
/*!40000 ALTER TABLE `huiyuan` DISABLE KEYS */;
INSERT INTO `huiyuan` VALUES (11,'2021-04-25 09:45:32','会员1','123456','会员昵称1','男','13823888881','http://localhost:8080/ssm6i524/upload/huiyuan_gerentouxiang1.jpg',100),(12,'2021-04-25 09:45:32','会员2','123456','会员昵称2','男','13823888882','http://localhost:8080/ssm6i524/upload/huiyuan_gerentouxiang2.jpg',100),(13,'2021-04-25 09:45:32','会员3','123456','会员昵称3','男','13823888883','http://localhost:8080/ssm6i524/upload/huiyuan_gerentouxiang3.jpg',100),(14,'2021-04-25 09:45:32','会员4','123456','会员昵称4','男','13823888884','http://localhost:8080/ssm6i524/upload/huiyuan_gerentouxiang4.jpg',100),(15,'2021-04-25 09:45:32','会员5','123456','会员昵称5','男','13823888885','http://localhost:8080/ssm6i524/upload/huiyuan_gerentouxiang5.jpg',100),(16,'2021-04-25 09:45:32','会员6','123456','会员昵称6','男','13823888886','http://localhost:8080/ssm6i524/upload/huiyuan_gerentouxiang6.jpg',100),(1619344178101,'2021-04-25 09:49:38','123','123','测试会员','男','12345678902','http://localhost:8080/ssm6i524/upload/1619344258167.jpg',800);
/*!40000 ALTER TABLE `huiyuan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `title` varchar(200) NOT NULL COMMENT '标题',
  `introduction` longtext COMMENT '简介',
  `picture` varchar(200) NOT NULL COMMENT '图片',
  `content` longtext NOT NULL COMMENT '内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1619344138460 DEFAULT CHARSET=utf8 COMMENT='销售资讯';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (81,'2021-04-25 09:45:32','标题1','简介1','http://localhost:8080/ssm6i524/upload/news_picture1.jpg','内容1'),(82,'2021-04-25 09:45:32','标题2','简介2','http://localhost:8080/ssm6i524/upload/news_picture2.jpg','内容2'),(83,'2021-04-25 09:45:32','标题3','简介3','http://localhost:8080/ssm6i524/upload/news_picture3.jpg','内容3'),(84,'2021-04-25 09:45:32','标题4','简介4','http://localhost:8080/ssm6i524/upload/news_picture4.jpg','内容4'),(85,'2021-04-25 09:45:32','标题5','简介5','http://localhost:8080/ssm6i524/upload/news_picture5.jpg','内容5'),(86,'2021-04-25 09:45:32','标题6','简介6','http://localhost:8080/ssm6i524/upload/news_picture6.jpg','内容6'),(1619344138459,'2021-04-25 09:48:57','测试资讯','测试','http://localhost:8080/ssm6i524/upload/1619344129393.jpg','<p>测试<img src=\"http://localhost:8080/ssm6i524/upload/1619344136180.jpg\"></p>');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `orderid` varchar(200) NOT NULL COMMENT '订单编号',
  `tablename` varchar(200) DEFAULT 'shangpinxinxi' COMMENT '商品表名',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `goodid` bigint(20) NOT NULL COMMENT '商品id',
  `goodname` varchar(200) DEFAULT NULL COMMENT '商品名称',
  `picture` varchar(200) DEFAULT NULL COMMENT '商品图片',
  `buynumber` int(11) NOT NULL COMMENT '购买数量',
  `price` float NOT NULL DEFAULT '0' COMMENT '价格/积分',
  `discountprice` float DEFAULT '0' COMMENT '折扣价格',
  `total` float NOT NULL DEFAULT '0' COMMENT '总价格/总积分',
  `discounttotal` float DEFAULT '0' COMMENT '折扣总价格',
  `type` int(11) DEFAULT '1' COMMENT '支付类型',
  `status` varchar(200) DEFAULT NULL COMMENT '状态',
  `address` varchar(200) DEFAULT NULL COMMENT '地址',
  `tel` varchar(200) DEFAULT NULL COMMENT '电话',
  `consignee` varchar(200) DEFAULT NULL COMMENT '收货人',
  PRIMARY KEY (`id`),
  UNIQUE KEY `orderid` (`orderid`)
) ENGINE=InnoDB AUTO_INCREMENT=1619344310126 DEFAULT CHARSET=utf8 COMMENT='订单';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1619344310125,'2021-04-25 09:51:49','202142517515063786134','shangpinxinxi',1619344178101,1619344102641,'测试商品','http://localhost:8080/ssm6i524/upload/1619344086331.jpg',2,100,100,200,200,1,'已完成','梅州市梅江区人民政府','12345678902','测试姓名');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shangpinleibie`
--

DROP TABLE IF EXISTS `shangpinleibie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shangpinleibie` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `shangpinleibie` varchar(200) DEFAULT NULL COMMENT '商品类别',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1619344070340 DEFAULT CHARSET=utf8 COMMENT='商品类别';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shangpinleibie`
--

LOCK TABLES `shangpinleibie` WRITE;
/*!40000 ALTER TABLE `shangpinleibie` DISABLE KEYS */;
INSERT INTO `shangpinleibie` VALUES (21,'2021-04-25 09:45:32','商品类别1'),(22,'2021-04-25 09:45:32','商品类别2'),(23,'2021-04-25 09:45:32','商品类别3'),(24,'2021-04-25 09:45:32','商品类别4'),(25,'2021-04-25 09:45:32','商品类别5'),(26,'2021-04-25 09:45:32','商品类别6'),(1619344070339,'2021-04-25 09:47:49','测试类别');
/*!40000 ALTER TABLE `shangpinleibie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shangpinxinxi`
--

DROP TABLE IF EXISTS `shangpinxinxi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shangpinxinxi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `shangpinbianhao` varchar(200) DEFAULT NULL COMMENT '商品编号',
  `shangpinmingcheng` varchar(200) DEFAULT NULL COMMENT '商品名称',
  `shangpinfenlei` varchar(200) DEFAULT NULL COMMENT '商品分类',
  `shangpintupian` varchar(200) DEFAULT NULL COMMENT '商品图片',
  `shangpinxiangqing` longtext COMMENT '商品详情',
  `fabushijian` datetime DEFAULT NULL COMMENT '发布时间',
  `clicknum` int(11) DEFAULT '0' COMMENT '点击次数',
  `price` float NOT NULL COMMENT '价格',
  `onelimittimes` int(11) DEFAULT '-1' COMMENT '单限',
  `alllimittimes` int(11) DEFAULT '-1' COMMENT '库存',
  PRIMARY KEY (`id`),
  UNIQUE KEY `shangpinbianhao` (`shangpinbianhao`)
) ENGINE=InnoDB AUTO_INCREMENT=1619344102642 DEFAULT CHARSET=utf8 COMMENT='商品信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shangpinxinxi`
--

LOCK TABLES `shangpinxinxi` WRITE;
/*!40000 ALTER TABLE `shangpinxinxi` DISABLE KEYS */;
INSERT INTO `shangpinxinxi` VALUES (31,'2021-04-25 09:45:32','商品编号1','商品名称1','商品分类1','http://localhost:8080/ssm6i524/upload/shangpinxinxi_shangpintupian1.jpg','商品详情1','2021-04-25 17:45:32',1,99.9,1,99),(32,'2021-04-25 09:45:32','商品编号2','商品名称2','商品分类2','http://localhost:8080/ssm6i524/upload/shangpinxinxi_shangpintupian2.jpg','商品详情2','2021-04-25 17:45:32',2,99.9,2,99),(33,'2021-04-25 09:45:32','商品编号3','商品名称3','商品分类3','http://localhost:8080/ssm6i524/upload/shangpinxinxi_shangpintupian3.jpg','商品详情3','2021-04-25 17:45:32',3,99.9,3,99),(34,'2021-04-25 09:45:32','商品编号4','商品名称4','商品分类4','http://localhost:8080/ssm6i524/upload/shangpinxinxi_shangpintupian4.jpg','商品详情4','2021-04-25 17:45:32',4,99.9,4,99),(35,'2021-04-25 09:45:32','商品编号5','商品名称5','商品分类5','http://localhost:8080/ssm6i524/upload/shangpinxinxi_shangpintupian5.jpg','商品详情5','2021-04-25 17:45:32',5,99.9,5,99),(36,'2021-04-25 09:45:32','商品编号6','商品名称6','商品分类6','http://localhost:8080/ssm6i524/upload/shangpinxinxi_shangpintupian6.jpg','商品详情6','2021-04-25 17:45:32',6,99.9,6,99),(1619344102641,'2021-04-25 09:48:22','1619344075445','测试商品','测试类别','http://localhost:8080/ssm6i524/upload/1619344086331.jpg','<p>测试<img src=\"http://localhost:8080/ssm6i524/upload/1619344100094.jpg\"></p>','2021-04-25 17:47:55',16,100,5,98);
/*!40000 ALTER TABLE `shangpinxinxi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storeup`
--

DROP TABLE IF EXISTS `storeup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `storeup` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `refid` bigint(20) DEFAULT NULL COMMENT '收藏id',
  `tablename` varchar(200) DEFAULT NULL COMMENT '表名',
  `name` varchar(200) NOT NULL COMMENT '收藏名称',
  `picture` varchar(200) NOT NULL COMMENT '收藏图片',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1619344221604 DEFAULT CHARSET=utf8 COMMENT='收藏表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storeup`
--

LOCK TABLES `storeup` WRITE;
/*!40000 ALTER TABLE `storeup` DISABLE KEYS */;
INSERT INTO `storeup` VALUES (1619344221603,'2021-04-25 09:50:21',1619344178101,1619344102641,'shangpinxinxi','测试商品','http://localhost:8080/ssm6i524/upload/1619344086331.jpg');
/*!40000 ALTER TABLE `storeup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `token` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `tablename` varchar(100) DEFAULT NULL COMMENT '表名',
  `role` varchar(100) DEFAULT NULL COMMENT '角色',
  `token` varchar(200) NOT NULL COMMENT '密码',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '新增时间',
  `expiratedtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '过期时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='token表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
INSERT INTO `token` VALUES (1,1,'abo','users','管理员','66lpxd2ipxv6hupsityv6g1584eyz80v','2021-04-25 09:47:37','2021-04-25 10:52:23'),(2,1619344178101,'123','huiyuan','会员','e3up1q9o592l4jejflzy4wwtaj9vitp5','2021-04-25 09:49:45','2021-04-25 10:49:46');
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `password` varchar(100) NOT NULL COMMENT '密码',
  `role` varchar(100) DEFAULT '管理员' COMMENT '角色',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '新增时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'abo','abo','管理员','2021-04-25 09:45:32');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-11 12:04:04
