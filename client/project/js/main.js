/**
 * @author Suker
 * 配置页
 */
require.config({
	baseUrl: 'js'
});
require([
	'lib/link',
	'index',
	'data/role10001',
	'data/sceneData'
], function($, index) {
    index.init();
});