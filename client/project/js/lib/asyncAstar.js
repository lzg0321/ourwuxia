/**
 * @author Suker
 * A*算法的异步模式支持
 * 这个插件必须给予WebWorker使用
 * 用于jsGame.BraveWorld视图类中处理多线程寻路算法逻辑
 * 是jsGame.Astar.callPath中内部实现需要用到的算法插件
 */
(function() {
	var Astar = function(map) {
		//地图二维数组;
	    this.map = map;
	    //已探索列表
	    this.chkList = [];
	    //开放对象列表
	    this.openList = [];
	    //节点对象
	};
	Astar.prototype.getG = function(x0, y0, x1, y1) {
	    if (Math.abs(x0 - x1) == 1 && Math.abs(y0 - y1) == 1) {
	        return 14;
	    } else {
	        return 10;
	    }
	};
	Astar.prototype.getH = function(x0, y0, x1, y1) {
	    var xDistance = Math.abs(x0 - x1), yDistance = Math.abs(y0 - y1);
	    if (xDistance > yDistance) {
	        return (14 * yDistance + 10 * (xDistance - yDistance));
	    } else {
	        return (14 * xDistance + 10 * (yDistance - xDistance));
	    }
	};
	Astar.prototype.point = function(_f, _g, _h, _x, _y, _p) {
	    this.f = _f;
	    this.g = _g;
	    this.h = _h;
	    this.x = _x;
	    this.y = _y;
	    this.p = _p;
	};
	Astar.prototype.setPoints = function(_node, x1, y1) {
	    var map = this.map,
	    x = _node.x,
	    y = _node.y,
	    g = _node.g,
	    t = x - 1,
	    b = x + 1,
	    l = y - 1,
	    r = y + 1;
	    var maxX = map.length;
	    var maxY = map[0].length;
	    if (t >= 0 && l >= 0 && map[t][l] > 0 && map[t][y] > 0 && map[x][l] > 0) this.chkPoint(_node, x, y, g, t, l, x1, y1); //1
	    if (t >= 0 && map[t][y] > 0) this.chkPoint(_node, x, y, g, x - 1, y, x1, y1); //2
	    if (t >= 0 && r < maxY && map[t][r] > 0 && map[t][y] > 0 && map[x][r] > 0) this.chkPoint(_node, x, y, g, t, r, x1, y1); //3
	    if (l >= 0 && map[x][l] > 0) this.chkPoint(_node, x, y, g, x, y - 1, x1, y1); //4
	    if (r < maxY && map[x][r] > 0) this.chkPoint(_node, x, y, g, x, y + 1, x1, y1); //6
	    if (b < maxX && l >= 0 && map[b][l] > 0 && map[x][l] > 0 && map[b][y] > 0) this.chkPoint(_node, x, y, g, b, l, x1, y1); //7
	    if (b < maxX && map[b][y] > 0) this.chkPoint(_node, x, y, g, x + 1, y, x1, y1); //8
	    if (b < maxX && r < maxY && map[b][r] > 0 && map[b][y] > 0 && map[x][r] > 0) this.chkPoint(_node, x, y, g, b, r, x1, y1); //9
	    map = x = y = g = t = b = l = r = null;
	};
	Astar.prototype.chkPoint = function(_fnode, _x0, _y0, _g, _x1, _y1, _x2, _y2) {
	    var open = this.openList,
	    chk = this.chkList,
	    _id = new String(_x1 + '_' + _y1),
	    _point = null;
	    if (undefined == (_point = chk[_id])) {
	        _point = new this.point(0, 0, 0, _x1, _y1, _fnode);
	        open[open.length] = _point;
	        chk[_id] = _point;
	        _point.g = _g + this.getG(_x0, _y0, _x1, _y1); //起点到当前点实际值
	        _point.h = this.getH(_x1, _y1, _x2, _y2); 	//终点到当前点的估价
	        _point.f = _point.g + _point.h;
	    } else {
	        var _CNG = _g + this.getG(_x0, _y0, _x1, _y1);
	        if (_point.g > _CNG) {//保留小G，替换parentNode
	            _point.g = _CNG;
	            _point.f = _point.g + _point.h;
	            _point.p = _fnode;
	        }
			_CNG = null;
	    }
		open = chk = _id = _point = null;
	};
	Astar.prototype.getPath = function(x0, y0, x1, y1, sx, sy, ex, ey) {
		var tp = [],
        open = this.openList,
        map = this.map;
        if (map[x0][y0] <= 0 || map[x1][y1] <= 0) {
            return tp;
        }
        var _sh = this.getH(x0, y0, x1, y1);
        open[0] = new this.point(_sh, 0, _sh, x0, y0, null);
        var oll = 0, nowNode, maxNode, minIndex, minf, _break = false;
		_hadRange = sx != null && ex != null && sy != null && ey != null; //判断当次寻路是否存在范围限制
        while (0 < (oll = open.length)) {
            minf = 10000000000;
            for (var i = 0; i < oll; i++) {
                maxNode = open[i];
                if (minf > maxNode.f) {
                    minf = maxNode.f;
                    minIndex = i;
                }
            }
            nowNode = open[minIndex];
            open[minIndex] = open[oll - 1];
            open.length--;
			//判断寻路节点是否处于寻路范围内
			if (_hadRange && (!nowNode || nowNode.x < sx || nowNode.x > ex || nowNode.y < sy || nowNode.y > ey)) {
            	break;
			}
			else if (nowNode.x == x1 && nowNode.y == y1) {
                while (nowNode.p != null) {
					tp.push([nowNode.x, nowNode.y]);
                    nowNode = nowNode.p;
                }
                tp.push([x0, y0]);
                break;
            }
            this.setPoints(nowNode, x1, y1);
        }
        open = this.openList = this.chkList = map = [];
		open = map = _sh = oll = nowNode = maxNode = minIndex = minf = _hadRange = null;
        return tp.slice(0).reverse();
	};
	var _as;
	addEventListener('message', function(e) {
		if (!_as) {
			_as = new Astar(_map)
		}
		var _data = e.data, 
		_map = _data.map || [], 
		_x0 = _data.x0, _y0 = _data.y0, 
		_x1 = _data.x1, _y1 = _data.y1,
		_sx = _data.sx, _sy = _data.sy,
		_ex = _data.ex, _ey = _data.ey;
		_as.map = _map;
		_data.path = _as.getPath(_x0, _y0, _x1, _y1, _sx, _sy, _ex, _ey)
		postMessage(_data);
		_data = _map = _x0 = _y0 = _x1 = _y1 = _sx = _sy = _ex = _ey = null;
	}, true);
})();