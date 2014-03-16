var sceneDataNameSpace = {}, sceneDataMapping;
define([
	'lib/link',
	'global'
], function($, gl) {
	sceneDataNameSpace.getScene = function(picId) {
		switch (picId) {
			//测试场景
			case 10:
			default:
				return [
					//地砖集合
					[[182,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,184],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[169,170,170,170,171,203,204,205,206,207,208,171,170,170,170,173,170,170,170,170,170,170,170,170,170,170,170,170,170,169,170,170,170,171,203,204,205,206,207,208,171,170,170,170,173,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170],[177,178,178,178,179,211,212,213,214,215,216,179,178,178,178,181,178,178,178,178,178,178,178,178,178,178,178,178,178,177,178,178,178,179,211,212,213,214,215,216,179,178,178,178,181,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178],[185,186,186,186,187,219,220,221,222,223,224,187,186,186,186,189,186,186,186,186,186,186,186,186,186,186,186,186,186,185,186,186,186,187,219,220,221,222,223,224,187,186,186,186,189,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186],[193,194,194,194,195,227,228,229,230,231,232,195,194,194,194,197,194,194,194,194,194,194,194,194,194,194,194,194,194,193,194,194,194,195,227,228,229,230,231,232,195,194,194,194,197,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192],[198,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,200]],
					//碰撞块集合
					[[1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
					//场景重生点集合
					[],
					//场景特效集合
					[]
				];
		};
	};
	//地砖图形资源预加载
	$.pushImage([
		{ id: 'tiles01', src: gl.getImgSrc('img/tiles/tiles01.png') }
	]);
	//数据映射对象
	sceneDataMapping = {
		//地砖集合
		tiles: {
			i0: { imageid: '', sx: 0, sy: 0 },
			i1: { imageid: 'tiles01', sx: 0, sy: 0 },
			i2: { imageid: 'tiles01', sx: 32, sy: 0 },
			i3: { imageid: 'tiles01', sx: 64, sy: 0 },
			i4: { imageid: 'tiles01', sx: 96, sy: 0 },
			i5: { imageid: 'tiles01', sx: 128, sy: 0 },
			i6: { imageid: 'tiles01', sx: 160, sy: 0 },
			i7: { imageid: 'tiles01', sx: 192, sy: 0 },
			i8: { imageid: 'tiles01', sx: 224, sy: 0 },
			i9: { imageid: 'tiles01', sx: 0, sy: 32 },
			i10: { imageid: 'tiles01', sx: 32, sy: 32 },
			i11: { imageid: 'tiles01', sx: 64, sy: 32 },
			i12: { imageid: 'tiles01', sx: 96, sy: 32 },
			i13: { imageid: 'tiles01', sx: 128, sy: 32 },
			i14: { imageid: 'tiles01', sx: 160, sy: 32 },
			i15: { imageid: 'tiles01', sx: 192, sy: 32 },
			i16: { imageid: 'tiles01', sx: 224, sy: 32 },
			i17: { imageid: 'tiles01', sx: 0, sy: 64 },
			i18: { imageid: 'tiles01', sx: 32, sy: 64 },
			i19: { imageid: 'tiles01', sx: 64, sy: 64 },
			i20: { imageid: 'tiles01', sx: 96, sy: 64 },
			i21: { imageid: 'tiles01', sx: 128, sy: 64 },
			i22: { imageid: 'tiles01', sx: 160, sy: 64 },
			i23: { imageid: 'tiles01', sx: 192, sy: 64 },
			i24: { imageid: 'tiles01', sx: 224, sy: 64 },
			i25: { imageid: 'tiles01', sx: 0, sy: 96 },
			i26: { imageid: 'tiles01', sx: 32, sy: 96 },
			i27: { imageid: 'tiles01', sx: 64, sy: 96 },
			i28: { imageid: 'tiles01', sx: 96, sy: 96 },
			i29: { imageid: 'tiles01', sx: 128, sy: 96 },
			i30: { imageid: 'tiles01', sx: 160, sy: 96 },
			i31: { imageid: 'tiles01', sx: 192, sy: 96 },
			i32: { imageid: 'tiles01', sx: 224, sy: 96 },
			i33: { imageid: 'tiles01', sx: 0, sy: 128 },
			i34: { imageid: 'tiles01', sx: 32, sy: 128 },
			i35: { imageid: 'tiles01', sx: 64, sy: 128 },
			i36: { imageid: 'tiles01', sx: 96, sy: 128 },
			i37: { imageid: 'tiles01', sx: 128, sy: 128 },
			i38: { imageid: 'tiles01', sx: 160, sy: 128 },
			i39: { imageid: 'tiles01', sx: 192, sy: 128 },
			i40: { imageid: 'tiles01', sx: 224, sy: 128 },
			i41: { imageid: 'tiles01', sx: 0, sy: 160 },
			i42: { imageid: 'tiles01', sx: 32, sy: 160 },
			i43: { imageid: 'tiles01', sx: 64, sy: 160 },
			i44: { imageid: 'tiles01', sx: 96, sy: 160 },
			i45: { imageid: 'tiles01', sx: 128, sy: 160 },
			i46: { imageid: 'tiles01', sx: 160, sy: 160 },
			i47: { imageid: 'tiles01', sx: 192, sy: 160 },
			i48: { imageid: 'tiles01', sx: 224, sy: 160 },
			i49: { imageid: 'tiles01', sx: 0, sy: 192 },
			i50: { imageid: 'tiles01', sx: 32, sy: 192 },
			i51: { imageid: 'tiles01', sx: 64, sy: 192 },
			i52: { imageid: 'tiles01', sx: 96, sy: 192 },
			i53: { imageid: 'tiles01', sx: 128, sy: 192 },
			i54: { imageid: 'tiles01', sx: 160, sy: 192 },
			i55: { imageid: 'tiles01', sx: 192, sy: 192 },
			i56: { imageid: 'tiles01', sx: 224, sy: 192 },
			i57: { imageid: 'tiles01', sx: 0, sy: 224 },
			i58: { imageid: 'tiles01', sx: 32, sy: 224 },
			i59: { imageid: 'tiles01', sx: 64, sy: 224 },
			i60: { imageid: 'tiles01', sx: 96, sy: 224 },
			i61: { imageid: 'tiles01', sx: 128, sy: 224 },
			i62: { imageid: 'tiles01', sx: 160, sy: 224 },
			i63: { imageid: 'tiles01', sx: 192, sy: 224 },
			i64: { imageid: 'tiles01', sx: 224, sy: 224 },
			i65: { imageid: 'tiles01', sx: 0, sy: 256 },
			i66: { imageid: 'tiles01', sx: 32, sy: 256 },
			i67: { imageid: 'tiles01', sx: 64, sy: 256 },
			i68: { imageid: 'tiles01', sx: 96, sy: 256 },
			i69: { imageid: 'tiles01', sx: 128, sy: 256 },
			i70: { imageid: 'tiles01', sx: 160, sy: 256 },
			i71: { imageid: 'tiles01', sx: 192, sy: 256 },
			i72: { imageid: 'tiles01', sx: 224, sy: 256 },
			i73: { imageid: 'tiles01', sx: 0, sy: 288 },
			i74: { imageid: 'tiles01', sx: 32, sy: 288 },
			i75: { imageid: 'tiles01', sx: 64, sy: 288 },
			i76: { imageid: 'tiles01', sx: 96, sy: 288 },
			i77: { imageid: 'tiles01', sx: 128, sy: 288 },
			i78: { imageid: 'tiles01', sx: 160, sy: 288 },
			i79: { imageid: 'tiles01', sx: 192, sy: 288 },
			i80: { imageid: 'tiles01', sx: 224, sy: 288 },
			i81: { imageid: 'tiles01', sx: 0, sy: 320 },
			i82: { imageid: 'tiles01', sx: 32, sy: 320 },
			i83: { imageid: 'tiles01', sx: 64, sy: 320 },
			i84: { imageid: 'tiles01', sx: 96, sy: 320 },
			i85: { imageid: 'tiles01', sx: 128, sy: 320 },
			i86: { imageid: 'tiles01', sx: 160, sy: 320 },
			i87: { imageid: 'tiles01', sx: 192, sy: 320 },
			i88: { imageid: 'tiles01', sx: 224, sy: 320 },
			i89: { imageid: 'tiles01', sx: 0, sy: 352 },
			i90: { imageid: 'tiles01', sx: 32, sy: 352 },
			i91: { imageid: 'tiles01', sx: 64, sy: 352 },
			i92: { imageid: 'tiles01', sx: 96, sy: 352 },
			i93: { imageid: 'tiles01', sx: 128, sy: 352 },
			i94: { imageid: 'tiles01', sx: 160, sy: 352 },
			i95: { imageid: 'tiles01', sx: 192, sy: 352 },
			i96: { imageid: 'tiles01', sx: 224, sy: 352 },
			i97: { imageid: 'tiles01', sx: 0, sy: 384 },
			i98: { imageid: 'tiles01', sx: 32, sy: 384 },
			i99: { imageid: 'tiles01', sx: 64, sy: 384 },
			i100: { imageid: 'tiles01', sx: 96, sy: 384 },
			i101: { imageid: 'tiles01', sx: 128, sy: 384 },
			i102: { imageid: 'tiles01', sx: 160, sy: 384 },
			i103: { imageid: 'tiles01', sx: 192, sy: 384 },
			i104: { imageid: 'tiles01', sx: 224, sy: 384 },
			i105: { imageid: 'tiles01', sx: 0, sy: 416 },
			i106: { imageid: 'tiles01', sx: 32, sy: 416 },
			i107: { imageid: 'tiles01', sx: 64, sy: 416 },
			i108: { imageid: 'tiles01', sx: 96, sy: 416 },
			i109: { imageid: 'tiles01', sx: 128, sy: 416 },
			i110: { imageid: 'tiles01', sx: 160, sy: 416 },
			i111: { imageid: 'tiles01', sx: 192, sy: 416 },
			i112: { imageid: 'tiles01', sx: 224, sy: 416 },
			i113: { imageid: 'tiles01', sx: 0, sy: 448 },
			i114: { imageid: 'tiles01', sx: 32, sy: 448 },
			i115: { imageid: 'tiles01', sx: 64, sy: 448 },
			i116: { imageid: 'tiles01', sx: 96, sy: 448 },
			i117: { imageid: 'tiles01', sx: 128, sy: 448 },
			i118: { imageid: 'tiles01', sx: 160, sy: 448 },
			i119: { imageid: 'tiles01', sx: 192, sy: 448 },
			i120: { imageid: 'tiles01', sx: 224, sy: 448 },
			i121: { imageid: 'tiles01', sx: 0, sy: 480 },
			i122: { imageid: 'tiles01', sx: 32, sy: 480 },
			i123: { imageid: 'tiles01', sx: 64, sy: 480 },
			i124: { imageid: 'tiles01', sx: 96, sy: 480 },
			i125: { imageid: 'tiles01', sx: 128, sy: 480 },
			i126: { imageid: 'tiles01', sx: 160, sy: 480 },
			i127: { imageid: 'tiles01', sx: 192, sy: 480 },
			i128: { imageid: 'tiles01', sx: 224, sy: 480 },
			i129: { imageid: 'tiles01', sx: 0, sy: 512 },
			i130: { imageid: 'tiles01', sx: 32, sy: 512 },
			i131: { imageid: 'tiles01', sx: 64, sy: 512 },
			i132: { imageid: 'tiles01', sx: 96, sy: 512 },
			i133: { imageid: 'tiles01', sx: 128, sy: 512 },
			i134: { imageid: 'tiles01', sx: 160, sy: 512 },
			i135: { imageid: 'tiles01', sx: 192, sy: 512 },
			i136: { imageid: 'tiles01', sx: 224, sy: 512 },
			i137: { imageid: 'tiles01', sx: 0, sy: 544 },
			i138: { imageid: 'tiles01', sx: 32, sy: 544 },
			i139: { imageid: 'tiles01', sx: 64, sy: 544 },
			i140: { imageid: 'tiles01', sx: 96, sy: 544 },
			i141: { imageid: 'tiles01', sx: 128, sy: 544 },
			i142: { imageid: 'tiles01', sx: 160, sy: 544 },
			i143: { imageid: 'tiles01', sx: 192, sy: 544 },
			i144: { imageid: 'tiles01', sx: 224, sy: 544 },
			i145: { imageid: 'tiles01', sx: 0, sy: 576 },
			i146: { imageid: 'tiles01', sx: 32, sy: 576 },
			i147: { imageid: 'tiles01', sx: 64, sy: 576 },
			i148: { imageid: 'tiles01', sx: 96, sy: 576 },
			i149: { imageid: 'tiles01', sx: 128, sy: 576 },
			i150: { imageid: 'tiles01', sx: 160, sy: 576 },
			i151: { imageid: 'tiles01', sx: 192, sy: 576 },
			i152: { imageid: 'tiles01', sx: 224, sy: 576 },
			i153: { imageid: 'tiles01', sx: 0, sy: 608 },
			i154: { imageid: 'tiles01', sx: 32, sy: 608 },
			i155: { imageid: 'tiles01', sx: 64, sy: 608 },
			i156: { imageid: 'tiles01', sx: 96, sy: 608 },
			i157: { imageid: 'tiles01', sx: 128, sy: 608 },
			i158: { imageid: 'tiles01', sx: 160, sy: 608 },
			i159: { imageid: 'tiles01', sx: 192, sy: 608 },
			i160: { imageid: 'tiles01', sx: 224, sy: 608 },
			i161: { imageid: 'tiles01', sx: 0, sy: 640 },
			i162: { imageid: 'tiles01', sx: 32, sy: 640 },
			i163: { imageid: 'tiles01', sx: 64, sy: 640 },
			i164: { imageid: 'tiles01', sx: 96, sy: 640 },
			i165: { imageid: 'tiles01', sx: 128, sy: 640 },
			i166: { imageid: 'tiles01', sx: 160, sy: 640 },
			i167: { imageid: 'tiles01', sx: 192, sy: 640 },
			i168: { imageid: 'tiles01', sx: 224, sy: 640 },
			i169: { imageid: 'tiles01', sx: 0, sy: 672 },
			i170: { imageid: 'tiles01', sx: 32, sy: 672 },
			i171: { imageid: 'tiles01', sx: 64, sy: 672 },
			i172: { imageid: 'tiles01', sx: 96, sy: 672 },
			i173: { imageid: 'tiles01', sx: 128, sy: 672 },
			i174: { imageid: 'tiles01', sx: 160, sy: 672 },
			i175: { imageid: 'tiles01', sx: 192, sy: 672 },
			i176: { imageid: 'tiles01', sx: 224, sy: 672 },
			i177: { imageid: 'tiles01', sx: 0, sy: 704 },
			i178: { imageid: 'tiles01', sx: 32, sy: 704 },
			i179: { imageid: 'tiles01', sx: 64, sy: 704 },
			i180: { imageid: 'tiles01', sx: 96, sy: 704 },
			i181: { imageid: 'tiles01', sx: 128, sy: 704 },
			i182: { imageid: 'tiles01', sx: 160, sy: 704 },
			i183: { imageid: 'tiles01', sx: 192, sy: 704 },
			i184: { imageid: 'tiles01', sx: 224, sy: 704 },
			i185: { imageid: 'tiles01', sx: 0, sy: 736 },
			i186: { imageid: 'tiles01', sx: 32, sy: 736 },
			i187: { imageid: 'tiles01', sx: 64, sy: 736 },
			i188: { imageid: 'tiles01', sx: 96, sy: 736 },
			i189: { imageid: 'tiles01', sx: 128, sy: 736 },
			i190: { imageid: 'tiles01', sx: 160, sy: 736 },
			i191: { imageid: 'tiles01', sx: 192, sy: 736 },
			i192: { imageid: 'tiles01', sx: 224, sy: 736 },
			i193: { imageid: 'tiles01', sx: 0, sy: 768 },
			i194: { imageid: 'tiles01', sx: 32, sy: 768 },
			i195: { imageid: 'tiles01', sx: 64, sy: 768 },
			i196: { imageid: 'tiles01', sx: 96, sy: 768 },
			i197: { imageid: 'tiles01', sx: 128, sy: 768 },
			i198: { imageid: 'tiles01', sx: 160, sy: 768 },
			i199: { imageid: 'tiles01', sx: 192, sy: 768 },
			i200: { imageid: 'tiles01', sx: 224, sy: 768 },
			i201: { imageid: 'tiles01', sx: 0, sy: 800 },
			i202: { imageid: 'tiles01', sx: 32, sy: 800 },
			i203: { imageid: 'tiles01', sx: 64, sy: 800 },
			i204: { imageid: 'tiles01', sx: 96, sy: 800 },
			i205: { imageid: 'tiles01', sx: 128, sy: 800 },
			i206: { imageid: 'tiles01', sx: 160, sy: 800 },
			i207: { imageid: 'tiles01', sx: 192, sy: 800 },
			i208: { imageid: 'tiles01', sx: 224, sy: 800 },
			i209: { imageid: 'tiles01', sx: 0, sy: 832 },
			i210: { imageid: 'tiles01', sx: 32, sy: 832 },
			i211: { imageid: 'tiles01', sx: 64, sy: 832 },
			i212: { imageid: 'tiles01', sx: 96, sy: 832 },
			i213: { imageid: 'tiles01', sx: 128, sy: 832 },
			i214: { imageid: 'tiles01', sx: 160, sy: 832 },
			i215: { imageid: 'tiles01', sx: 192, sy: 832 },
			i216: { imageid: 'tiles01', sx: 224, sy: 832 },
			i217: { imageid: 'tiles01', sx: 0, sy: 864 },
			i218: { imageid: 'tiles01', sx: 32, sy: 864 },
			i219: { imageid: 'tiles01', sx: 64, sy: 864 },
			i220: { imageid: 'tiles01', sx: 96, sy: 864 },
			i221: { imageid: 'tiles01', sx: 128, sy: 864 },
			i222: { imageid: 'tiles01', sx: 160, sy: 864 },
			i223: { imageid: 'tiles01', sx: 192, sy: 864 },
			i224: { imageid: 'tiles01', sx: 224, sy: 864 },
			i225: { imageid: 'tiles01', sx: 0, sy: 896 },
			i226: { imageid: 'tiles01', sx: 32, sy: 896 },
			i227: { imageid: 'tiles01', sx: 64, sy: 896 },
			i228: { imageid: 'tiles01', sx: 96, sy: 896 },
			i229: { imageid: 'tiles01', sx: 128, sy: 896 },
			i230: { imageid: 'tiles01', sx: 160, sy: 896 },
			i231: { imageid: 'tiles01', sx: 192, sy: 896 },
			i232: { imageid: 'tiles01', sx: 224, sy: 896 }
		},
		//场景对象映射
		sceneData: {
			mp0: { getData: function() { return sceneDataNameSpace.getScene(0); } }, //默认场景
			mp10: { getData: function() { return sceneDataNameSpace.getScene(10); } } //测试场景
		},
		//角色精灵对象映射
		role: {
			mp1: { getData: function() { return role10001NameSpace.get(); } }, //黑头发，黑衣服，红围巾
			mp10001: { getData: function() { return role10001NameSpace.get(); } } //黑头发，黑衣服，红围巾
		},
		//NPC精灵对象映射
		npc: {
		},
		//建筑物精灵对象映射
		building: {
		},
		//特效精灵对象映射
		effect: {
		}
	};
});
