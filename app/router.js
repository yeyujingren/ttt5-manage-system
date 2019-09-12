/*
 * @Author: Yifeng Tao 
 * @Date: 2019-09-12 15:17:18 
 * @Last Modified by: 
 * @Last Modified time: 2019-09-12 15:18:22
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/(/?)**', controller.home.manage);
}