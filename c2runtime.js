﻿
'use strict';
var y, aa, ba, da, fa, ha, ia, ja, ka, la, ma, na, qa, ra, sa, ta, ua, wa, xa, ya, Ba, Ca, Da, J, Ha, Ia, Ka, La, Ma, Na, Oa, Pa, Ra, Sa, Ta, Ua, Va, Ya, Za, db, eb, hb, ib, pb, qb, rb, vb, xb, yb, zb, Ab, Bb, Gb, Kb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, hc, ic, jc, kc, lc, mc, nc, oc, pc, qc, rc, sc, tc, uc, vc, wc, zc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc, Rc, Tc, Uc = {},
	Vc = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ?
function(a) {
	return a.__proto__
} : function(a) {
	return a.constructor.prototype
});
(function() {
	function a(a, b, c, g) {
		this.set(a, b, c, g)
	}
	function c() {
		this.Sc = this.Rc = this.Uc = this.Tc = this.cd = this.bd = this.pc = this.oc = 0
	}
	function b(a, b, c, g) {
		a < b ? c < g ? (t = a < c ? a : c, u = b > g ? b : g) : (t = a < g ? a : g, u = b > c ? b : c) : c < g ? (t = b < c ? b : c, u = a > g ? a : g) : (t = b < g ? b : g, u = a > c ? a : c)
	}
	function d() {
		this.items = this.Ef = null;
		this.uk = 0;
		D && (this.Ef = new Set);
		this.Bj = [];
		this.Lg = !0
	}
	function f(a) {
		A[C++] = a
	}
	function h() {
		this.Fa = this.Dn = this.y = this.D = 0
	}
	function e(a) {
		this.ec = [];
		this.zl = this.Bl = this.Cl = this.Al = 0;
		this.Ol = null;
		this.Xk(a)
	}
	function g(a, b) {
		this.to = a;
		this.so = b;
		this.cells = {}
	}
	function l(a, b) {
		this.to = a;
		this.so = b;
		this.cells = {}
	}
	function n(a, b, c) {
		var g;
		return E.length ? (g = E.pop(), g.cp = a, g.x = b, g.y = c, g) : new aa(a, b, c)
	}
	function k(a, b, c) {
		this.cp = a;
		this.x = b;
		this.y = c;
		this.Lc = new ba
	}
	function m(a, b, c) {
		var g;
		return w.length ? (g = w.pop(), g.cp = a, g.x = b, g.y = c, g) : new da(a, b, c)
	}
	function q(a, b, c) {
		this.cp = a;
		this.x = b;
		this.y = c;
		this.Lc = [];
		this.$i = !0;
		this.Af = new ba;
		this.Lj = !1
	}
	function p(a, b) {
		return a.kf - b.kf
	}
	fa = function(a) {
		window.console && window.console.log && window.console.log(a)
	};
	ha = function(a) {
		window.console && window.console.error && window.console.error(a)
	};
	ia = function(a) {
		return "undefined" === typeof a
	};
	ja = function(a) {
		return "number" === typeof a
	};
	ka = function(a) {
		return "string" === typeof a
	};
	la = function(a) {
		return 0 < a && 0 === (a - 1 & a)
	};
	ma = function(a) {
		--a;
		for (var b = 1; 32 > b; b <<= 1) a = a | a >> b;
		return a + 1
	};
	na = function(a) {
		return 0 > a ? -a : a
	};
	qa = function(a, b) {
		return a > b ? a : b
	};
	ra = function(a, b) {
		return a < b ? a : b
	};
	sa = Math.PI;
	ta = function(a) {
		return 0 <= a ? a | 0 : (a | 0) - 1
	};
	ua = function(a) {
		var b = a | 0;
		return b === a ? b : b + 1
	};
	wa = function(a, b, c, g, d, e, k, f) {
		var m, l, h, n;
		a < c ? (l = a, m = c) : (l = c, m = a);
		d < k ? (n = d, h = k) : (n = k, h = d);
		if (m < n || l > h) return !1;
		b < g ? (l = b, m = g) : (l = g, m = b);
		e < f ? (n = e, h = f) : (n = f, h = e);
		if (m < n || l > h) return !1;
		m = d - a + k - c;
		l = e - b + f - g;
		a = c - a;
		b = g - b;
		d = k - d;
		e = f - e;
		f = na(b * d - e * a);
		return na(d * l - e * m) > f ? !1 : na(a * l - b * m) <= f
	};
	a.prototype.set = function(a, b, c, g) {
		this.left = a;
		this.top = b;
		this.right = c;
		this.bottom = g
	};
	a.prototype.Li = function(a) {
		this.left = a.left;
		this.top = a.top;
		this.right = a.right;
		this.bottom = a.bottom
	};
	a.prototype.width = function() {
		return this.right - this.left
	};
	a.prototype.height = function() {
		return this.bottom - this.top
	};
	a.prototype.offset = function(a, b) {
		this.left += a;
		this.top += b;
		this.right += a;
		this.bottom += b;
		return this
	};
	a.prototype.normalize = function() {
		var a = 0;
		this.left > this.right && (a = this.left, this.left = this.right, this.right = a);
		this.top > this.bottom && (a = this.top, this.top = this.bottom, this.bottom = a)
	};
	a.prototype.Oy = function(a) {
		return !(a.right < this.left || a.bottom < this.top || a.left > this.right || a.top > this.bottom)
	};
	a.prototype.Py = function(a, b, c) {
		return !(a.right + b < this.left || a.bottom + c < this.top || a.left + b > this.right || a.top + c > this.bottom)
	};
	a.prototype.gd = function(a, b) {
		return a >= this.left && a <= this.right && b >= this.top && b <= this.bottom
	};
	a.prototype.Uj = function(a) {
		return this.left === a.left && this.top === a.top && this.right === a.right && this.bottom === a.bottom
	};
	xa = a;
	c.prototype.Wk = function(a) {
		this.oc = a.left;
		this.pc = a.top;
		this.bd = a.right;
		this.cd = a.top;
		this.Tc = a.right;
		this.Uc = a.bottom;
		this.Rc = a.left;
		this.Sc = a.bottom
	};
	c.prototype.cu = function(a, b) {
		if (0 === b) this.Wk(a);
		else {
			var c = Math.sin(b),
				g = Math.cos(b),
				d = a.left * c,
				e = a.top * c,
				k = a.right * c,
				c = a.bottom * c,
				f = a.left * g,
				m = a.top * g,
				l = a.right * g,
				g = a.bottom * g;
			this.oc = f - e;
			this.pc = m + d;
			this.bd = l - e;
			this.cd = m + k;
			this.Tc = l - c;
			this.Uc = g + k;
			this.Rc = f - c;
			this.Sc = g + d
		}
	};
	c.prototype.offset = function(a, b) {
		this.oc += a;
		this.pc += b;
		this.bd += a;
		this.cd += b;
		this.Tc += a;
		this.Uc += b;
		this.Rc += a;
		this.Sc += b;
		return this
	};
	var t = 0,
		u = 0;
	c.prototype.Ir = function(a) {
		b(this.oc, this.bd, this.Tc, this.Rc);
		a.left = t;
		a.right = u;
		b(this.pc, this.cd, this.Uc, this.Sc);
		a.top = t;
		a.bottom = u
	};
	c.prototype.gd = function(a, b) {
		var c = this.oc,
			g = this.pc,
			d = this.bd - c,
			e = this.cd - g,
			k = this.Tc - c,
			f = this.Uc - g,
			m = a - c,
			l = b - g,
			h = d * d + e * e,
			n = d * k + e * f,
			e = d * m + e * l,
			p = k * k + f * f,
			q = k * m + f * l,
			r = 1 / (h * p - n * n),
			d = (p * e - n * q) * r,
			h = (h * q - n * e) * r;
		if (0 <= d && 0 < h && 1 > d + h) return !0;
		d = this.Rc - c;
		e = this.Sc - g;
		h = d * d + e * e;
		n = d * k + e * f;
		e = d * m + e * l;
		r = 1 / (h * p - n * n);
		d = (p * e - n * q) * r;
		h = (h * q - n * e) * r;
		return 0 <= d && 0 < h && 1 > d + h
	};
	c.prototype.Jg = function(a, b) {
		if (b) switch (a) {
		case 0:
			return this.oc;
		case 1:
			return this.bd;
		case 2:
			return this.Tc;
		case 3:
			return this.Rc;
		case 4:
			return this.oc;
		default:
			return this.oc
		} else switch (a) {
		case 0:
			return this.pc;
		case 1:
			return this.cd;
		case 2:
			return this.Uc;
		case 3:
			return this.Sc;
		case 4:
			return this.pc;
		default:
			return this.pc
		}
	};
	c.prototype.gh = function() {
		return (this.oc + this.bd + this.Tc + this.Rc) / 4
	};
	c.prototype.hh = function() {
		return (this.pc + this.cd + this.Uc + this.Sc) / 4
	};
	c.prototype.ts = function(a) {
		var b = a.gh(),
			c = a.hh();
		if (this.gd(b, c)) return !0;
		b = this.gh();
		c = this.hh();
		if (a.gd(b, c)) return !0;
		var g, d, e, k, f, m, l, h;
		for (l = 0; 4 > l; l++) for (h = 0; 4 > h; h++) if (b = this.Jg(l, !0), c = this.Jg(l, !1), g = this.Jg(l + 1, !0), d = this.Jg(l + 1, !1), e = a.Jg(h, !0), k = a.Jg(h, !1), f = a.Jg(h + 1, !0), m = a.Jg(h + 1, !1), wa(b, c, g, d, e, k, f, m)) return !0;
		return !1
	};
	ya = c;
	Ba = function(a, b) {
		for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
		return a
	};
	Ca = function(a, b) {
		var c, g;
		b = ta(b);
		if (!(0 > b || b >= a.length)) {
			c = b;
			for (g = a.length - 1; c < g; c++) a[c] = a[c + 1];
			Da(a, g)
		}
	};
	Da = function(a, b) {
		a.length = b
	};
	J = function(a) {
		Da(a, 0)
	};
	Ha = function(a, b) {
		J(a);
		var c, g;
		c = 0;
		for (g = b.length; c < g; ++c) a[c] = b[c]
	};
	Ia = function(a, b) {
		a.push.apply(a, b)
	};
	Ka = function(a, b) {
		var c, g;
		c = 0;
		for (g = a.length; c < g; ++c) if (a[c] === b) return c;
		return -1
	};
	La = function(a, b) {
		var c = Ka(a, b); - 1 !== c && Ca(a, c)
	};
	Ma = function(a, b, c) {
		return a < b ? b : a > c ? c : a
	};
	Na = function(a) {
		return a / (180 / sa)
	};
	Oa = function(a) {
		return 180 / sa * a
	};
	Pa = function(a) {
		a %= 360;
		0 > a && (a += 360);
		return a
	};
	Ra = function(a) {
		a %= 2 * sa;
		0 > a && (a += 2 * sa);
		return a
	};
	Sa = function(a) {
		return Pa(Oa(a))
	};
	Ta = function(a) {
		return Ra(Na(a))
	};
	Ua = function(a, b, c, g) {
		return Math.atan2(g - b, c - a)
	};
	Va = function(a, b) {
		if (a === b) return 0;
		var c = Math.sin(a),
			g = Math.cos(a),
			d = Math.sin(b),
			e = Math.cos(b),
			c = c * d + g * e;
		return 1 <= c ? 0 : -1 >= c ? sa : Math.acos(c)
	};
	Ya = function(a, b, c) {
		var g = Math.sin(a),
			d = Math.cos(a),
			e = Math.sin(b),
			k = Math.cos(b);
		return Math.acos(g * e + d * k) > c ? 0 < d * e - g * k ? Ra(a + c) : Ra(a - c) : Ra(b)
	};
	Za = function(a, b) {
		var c = Math.sin(a),
			g = Math.cos(a),
			d = Math.sin(b),
			e = Math.cos(b);
		return 0 >= g * d - c * e
	};
	db = function(a, b, c, g, d, e) {
		if (0 === c) return e ? a : b;
		var k = Math.sin(c);
		c = Math.cos(c);
		a -= g;
		b -= d;
		var f = a * k;
		a = a * c - b * k;
		b = b * c + f;
		return e ? a + g : b + d
	};
	eb = function(a, b, c, g) {
		a = c - a;
		b = g - b;
		return Math.sqrt(a * a + b * b)
	};
	hb = function(a, b) {
		return !a !== !b
	};
	ib = function(a) {
		for (var b in a) if (a.hasOwnProperty(b)) return !0;
		return !1
	};
	pb = function(a) {
		for (var b in a) a.hasOwnProperty(b) && delete a[b]
	};
	var v = +new Date;
	qb = function() {
		if ("undefined" !== typeof window.performance) {
			var a = window.performance;
			if ("undefined" !== typeof a.now) return a.now();
			if ("undefined" !== typeof a.webkitNow) return a.webkitNow();
			if ("undefined" !== typeof a.mozNow) return a.mozNow();
			if ("undefined" !== typeof a.msNow) return a.msNow()
		}
		return Date.now() - v
	};
	var r = !1,
		z = r = !1,
		B = !1;
	"undefined" !== typeof window && (r = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), r = !r && /safari/i.test(navigator.userAgent), z = /(iphone|ipod|ipad)/i.test(navigator.userAgent), B = window.c2ejecta);
	var D = !r && !B && !z && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
	d.prototype.contains = function(a) {
		return this.ag() ? !1 : D ? this.Ef.has(a) : this.items && this.items.hasOwnProperty(a)
	};
	d.prototype.add = function(a) {
		if (D) this.Ef.has(a) || (this.Ef.add(a), this.Lg = !1);
		else {
			var b = a.toString(),
				c = this.items;
			c ? c.hasOwnProperty(b) || (c[b] = a, this.uk++, this.Lg = !1) : (this.items = {}, this.items[b] = a, this.uk = 1, this.Lg = !1)
		}
	};
	d.prototype.remove = function(a) {
		if (!this.ag()) if (D) this.Ef.has(a) && (this.Ef["delete"](a), this.Lg = !1);
		else if (this.items) {
			a = a.toString();
			var b = this.items;
			b.hasOwnProperty(a) && (delete b[a], this.uk--, this.Lg = !1)
		}
	};
	d.prototype.clear = function() {
		this.ag() || (D ? this.Ef.clear() : (this.items = null, this.uk = 0), J(this.Bj), this.Lg = !0)
	};
	d.prototype.ag = function() {
		return 0 === this.count()
	};
	d.prototype.count = function() {
		return D ? this.Ef.size : this.uk
	};
	var A = null,
		C = 0;
	d.prototype.lA = function() {
		if (!this.Lg) {
			if (D) J(this.Bj), A = this.Bj, C = 0, this.Ef.forEach(f), A = null, C = 0;
			else {
				var a = this.Bj;
				J(a);
				var b, c = 0,
					g = this.items;
				if (g) for (b in g) g.hasOwnProperty(b) && (a[c++] = g[b])
			}
			this.Lg = !0
		}
	};
	d.prototype.jf = function() {
		this.lA();
		return this.Bj
	};
	ba = d;
	new ba;
	rb = function(a, b) {
		D ? vb(a, b.Ef) : xb(a, b.jf())

	};
	vb = function(a, b) {
		var c, g, d, e;
		g = c = 0;
		for (d = a.length; c < d; ++c) e = a[c], b.has(e) || (a[g++] = e);
		Da(a, g)
	};
	xb = function(a, b) {
		var c, g, d, e;
		g = c = 0;
		for (d = a.length; c < d; ++c) e = a[c], -1 === Ka(b, e) && (a[g++] = e);
		Da(a, g)
	};
	h.prototype.add = function(a) {
		this.y = a - this.D;
		this.Dn = this.Fa + this.y;
		this.D = this.Dn - this.Fa - this.y;
		this.Fa = this.Dn
	};
	h.prototype.reset = function() {
		this.Fa = this.Dn = this.y = this.D = 0
	};
	yb = h;
	zb = function(a) {
		return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
	};
	e.prototype.Xk = function(a) {
		this.Nt = a;
		this.oe = a.length / 2;
		this.ec.length = a.length;
		this.Gl = this.Hl = -1;
		this.Lr = 0
	};
	e.prototype.ai = function() {
		return !this.Nt.length
	};
	e.prototype.Ua = function() {
		for (var a = this.ec, b = a[0], c = b, g = a[1], d = g, e, k, f = 1, l = this.oe; f < l; ++f) k = 2 * f, e = a[k], k = a[k + 1], e < b && (b = e), e > c && (c = e), k < g && (g = k), k > d && (d = k);
		this.Al = b;
		this.Bl = c;
		this.Cl = g;
		this.zl = d
	};
	e.prototype.Wk = function(a, b, c) {
		this.ec.length = 8;
		this.oe = 4;
		var g = this.ec;
		g[0] = a.left - b;
		g[1] = a.top - c;
		g[2] = a.right - b;
		g[3] = a.top - c;
		g[4] = a.right - b;
		g[5] = a.bottom - c;
		g[6] = a.left - b;
		g[7] = a.bottom - c;
		this.Hl = a.right - a.left;
		this.Gl = a.bottom - a.top;
		this.Ua()
	};
	e.prototype.tj = function(a, b, c, g, d) {
		this.ec.length = 8;
		this.oe = 4;
		var e = this.ec;
		e[0] = a.oc - b;
		e[1] = a.pc - c;
		e[2] = a.bd - b;
		e[3] = a.cd - c;
		e[4] = a.Tc - b;
		e[5] = a.Uc - c;
		e[6] = a.Rc - b;
		e[7] = a.Sc - c;
		this.Hl = g;
		this.Gl = d;
		this.Ua()
	};
	e.prototype.bu = function(a) {
		this.oe = a.oe;
		Ha(this.ec, a.ec);
		this.Al = a.Al;
		this.Cl - a.Cl;
		this.Bl = a.Bl;
		this.zl = a.zl
	};
	e.prototype.Jh = function(a, b, c) {
		if (this.Hl !== a || this.Gl !== b || this.Lr !== c) {
			this.Hl = a;
			this.Gl = b;
			this.Lr = c;
			var g, d, e, k, f, l = 0,
				m = 1,
				h = this.Nt,
				n = this.ec;
			0 !== c && (l = Math.sin(c), m = Math.cos(c));
			c = 0;
			for (e = this.oe; c < e; c++) g = 2 * c, d = g + 1, k = h[g] * a, f = h[d] * b, n[g] = k * m - f * l, n[d] = f * m + k * l;
			this.Ua()
		}
	};
	e.prototype.gd = function(a, b) {
		var c = this.ec;
		if (a === c[0] && b === c[1]) return !0;
		var g, d, e, k = this.oe,
			f = this.Al - 110,
			l = this.Cl - 101,
			m = this.Bl + 131,
			h = this.zl + 120,
			n, p, q = 0,
			r = 0;
		for (g = 0; g < k; g++) d = 2 * g, e = (g + 1) % k * 2, n = c[d], d = c[d + 1], p = c[e], e = c[e + 1], wa(f, l, a, b, n, d, p, e) && q++, wa(m, h, a, b, n, d, p, e) && r++;
		return 1 === q % 2 || 1 === r % 2
	};
	e.prototype.jk = function(a, b, c) {
		var g = a.ec,
			d = this.ec;
		if (this.gd(g[0] + b, g[1] + c) || a.gd(d[0] - b, d[1] - c)) return !0;
		var e, k, f, l, m, h, n, p, q, r, t, z;
		e = 0;
		for (l = this.oe; e < l; e++) for (k = 2 * e, f = (e + 1) % l * 2, p = d[k], k = d[k + 1], q = d[f], r = d[f + 1], f = 0, n = a.oe; f < n; f++) if (m = 2 * f, h = (f + 1) % n * 2, t = g[m] + b, m = g[m + 1] + c, z = g[h] + b, h = g[h + 1] + c, wa(p, k, q, r, t, m, z, h)) return !0;
		return !1
	};
	Ab = e;
	g.prototype.Vg = function(a, b, c) {
		var g;
		g = this.cells[a];
		return g ? (g = g[b]) ? g : c ? (g = n(this, a, b), this.cells[a][b] = g) : null : c ? (g = n(this, a, b), this.cells[a] = {}, this.cells[a][b] = g) : null
	};
	g.prototype.Bd = function(a) {
		return ta(a / this.to)
	};
	g.prototype.Cd = function(a) {
		return ta(a / this.so)
	};
	g.prototype.update = function(a, b, c) {
		var g, d, e, k, f;
		if (b) for (g = b.left, d = b.right; g <= d; ++g) for (e = b.top, k = b.bottom; e <= k; ++e) if (!c || !c.gd(g, e)) if (f = this.Vg(g, e, !1)) f.remove(a), f.ag() && (f.Lc.clear(), 1E3 > E.length && E.push(f), this.cells[g][e] = null);
		if (c) for (g = c.left, d = c.right; g <= d; ++g) for (e = c.top, k = c.bottom; e <= k; ++e) b && b.gd(g, e) || this.Vg(g, e, !0).lp(a)
	};
	g.prototype.nn = function(a, b) {
		var c, g, d, e, k, f;
		c = this.Bd(a.left);
		d = this.Cd(a.top);
		g = this.Bd(a.right);
		for (k = this.Cd(a.bottom); c <= g; ++c) for (e = d; e <= k; ++e)(f = this.Vg(c, e, !1)) && f.dump(b)
	};
	Bb = g;
	l.prototype.Vg = function(a, b, c) {
		var g;
		g = this.cells[a];
		return g ? (g = g[b]) ? g : c ? (g = m(this, a, b), this.cells[a][b] = g) : null : c ? (g = m(this, a, b), this.cells[a] = {}, this.cells[a][b] = g) : null
	};
	l.prototype.Bd = function(a) {
		return ta(a / this.to)
	};
	l.prototype.Cd = function(a) {
		return ta(a / this.so)
	};
	l.prototype.update = function(a, b, c) {
		var g, d, e, k, f;
		if (b) for (g = b.left, d = b.right; g <= d; ++g) for (e = b.top, k = b.bottom; e <= k; ++e) if (!c || !c.gd(g, e)) if (f = this.Vg(g, e, !1)) f.remove(a), f.ag() && (f.reset(), 1E3 > w.length && w.push(f), this.cells[g][e] = null);
		if (c) for (g = c.left, d = c.right; g <= d; ++g) for (e = c.top, k = c.bottom; e <= k; ++e) b && b.gd(g, e) || this.Vg(g, e, !0).lp(a)
	};
	l.prototype.nn = function(a, b, c, g, d) {
		var e, k;
		a = this.Bd(a);
		b = this.Cd(b);
		c = this.Bd(c);
		for (e = this.Cd(g); a <= c; ++a) for (g = b; g <= e; ++g)(k = this.Vg(a, g, !1)) && k.dump(d)
	};
	l.prototype.ez = function(a) {
		var b, c, g, d, e;
		b = a.left;
		g = a.top;
		c = a.right;
		for (d = a.bottom; b <= c; ++b) for (a = g; a <= d; ++a) if (e = this.Vg(b, a, !1)) e.$i = !1
	};
	Gb = l;
	var E = [];
	k.prototype.ag = function() {
		return this.Lc.ag()
	};
	k.prototype.lp = function(a) {
		this.Lc.add(a)
	};
	k.prototype.remove = function(a) {
		this.Lc.remove(a)
	};
	k.prototype.dump = function(a) {
		Ia(a, this.Lc.jf())
	};
	aa = k;
	var w = [];
	q.prototype.ag = function() {
		if (!this.Lc.length) return !0;
		if (this.Lc.length > this.Af.count()) return !1;
		this.Lo();
		return !0
	};
	q.prototype.lp = function(a) {
		this.Af.contains(a) ? (this.Af.remove(a), this.Af.ag() && (this.Lj = !1)) : this.Lc.length ? (this.Lc[this.Lc.length - 1].vf() > a.vf() && (this.$i = !1), this.Lc.push(a)) : (this.Lc.push(a), this.$i = !0)
	};
	q.prototype.remove = function(a) {
		this.Af.add(a);
		this.Lj = !0;
		30 <= this.Af.count() && this.Lo()
	};
	q.prototype.Lo = function() {
		this.Lj && (this.Af.count() === this.Lc.length ? this.reset() : (rb(this.Lc, this.Af), this.Af.clear(), this.Lj = !1))
	};
	q.prototype.ox = function() {
		this.$i || (this.Lc.sort(p), this.$i = !0)
	};
	q.prototype.reset = function() {
		J(this.Lc);
		this.$i = !0;
		this.Af.clear();
		this.Lj = !1
	};
	q.prototype.dump = function(a) {
		this.Lo();
		this.ox();
		this.Lc.length && a.push(this.Lc)
	};
	da = q;
	var x = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
	Kb = function(a) {
		return 0 >= a || 11 <= a ? "source-over" : x[a - 1]
	};
	Qb = function(a, b, c) {
		if (c) switch (a.nd = c.ONE, a.hd = c.ONE_MINUS_SRC_ALPHA, b) {
		case 1:
			a.nd = c.ONE;
			a.hd = c.ONE;
			break;
		case 3:
			a.nd = c.ONE;
			a.hd = c.ZERO;
			break;
		case 4:
			a.nd = c.ONE_MINUS_DST_ALPHA;
			a.hd = c.ONE;
			break;
		case 5:
			a.nd = c.DST_ALPHA;
			a.hd = c.ZERO;
			break;
		case 6:
			a.nd = c.ZERO;
			a.hd = c.SRC_ALPHA;
			break;
		case 7:
			a.nd = c.ONE_MINUS_DST_ALPHA;
			a.hd = c.ZERO;
			break;
		case 8:
			a.nd = c.ZERO;
			a.hd = c.ONE_MINUS_SRC_ALPHA;
			break;
		case 9:
			a.nd = c.DST_ALPHA;
			a.hd = c.ONE_MINUS_SRC_ALPHA;
			break;
		case 10:
			a.nd = c.ONE_MINUS_DST_ALPHA, a.hd = c.SRC_ALPHA
		}
	};
	Rb = function(a) {
		return Math.round(1E6 * a) / 1E6
	};
	Sb = function(a, b) {
		return "string" !== typeof a || "string" !== typeof b || a.length !== b.length ? !1 : a === b ? !0 : a.toLowerCase() === b.toLowerCase()
	};
	Tb = function(a) {
		a = a.target;
		return !a || a === document || a === window || document && document.body && a === document.body || Sb(a.tagName, "canvas") ? !0 : !1
	}
})();
var Wc = "undefined" !== typeof Float32Array ? Float32Array : Array;

function Xc(a) {
	var c = new Wc(3);
	a && (c[0] = a[0], c[1] = a[1], c[2] = a[2]);
	return c
}

function Yc(a) {
	var c = new Wc(16);
	a && (c[0] = a[0], c[1] = a[1], c[2] = a[2], c[3] = a[3], c[4] = a[4], c[5] = a[5], c[6] = a[6], c[7] = a[7], c[8] = a[8], c[9] = a[9], c[10] = a[10], c[11] = a[11], c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15]);
	return c
}
function Zc(a, c) {
	c[0] = a[0];
	c[1] = a[1];
	c[2] = a[2];
	c[3] = a[3];
	c[4] = a[4];
	c[5] = a[5];
	c[6] = a[6];
	c[7] = a[7];
	c[8] = a[8];
	c[9] = a[9];
	c[10] = a[10];
	c[11] = a[11];
	c[12] = a[12];
	c[13] = a[13];
	c[14] = a[14];
	c[15] = a[15]
}

function jd(a, c) {
	var b = c[0],
		d = c[1];
	c = c[2];
	a[0] *= b;
	a[1] *= b;
	a[2] *= b;
	a[3] *= b;
	a[4] *= d;
	a[5] *= d;
	a[6] *= d;
	a[7] *= d;
	a[8] *= c;
	a[9] *= c;
	a[10] *= c;
	a[11] *= c
}

function kd(a, c, b, d) {
	d || (d = Yc());
	var f, h, e, g, l, n, k, m, q = a[0],
		p = a[1];
	a = a[2];
	h = b[0];
	e = b[1];
	f = b[2];
	b = c[1];
	n = c[2];
	q === c[0] && p === b && a === n ? (a = d, a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1) : (b = q - c[0], n = p - c[1], k = a - c[2], m = 1 / Math.sqrt(b * b + n * n + k * k), b *= m, n *= m, k *= m, c = e * k - f * n, f = f * b - h * k, h = h * n - e * b, (m = Math.sqrt(c * c + f * f + h * h)) ? (m = 1 / m, c *= m, f *= m, h *= m) : h = f = c = 0, e = n * h - k * f, g = k * c - b * h, l = b * f - n * c, (m = Math.sqrt(e * e + g * g + l * l)) ? (m = 1 / m, e *= m, g *= m, l *= m) : l = g = e = 0, d[0] = c, d[1] = e, d[2] = b, d[3] = 0, d[4] = f, d[5] = g, d[6] = n, d[7] = 0, d[8] = h, d[9] = l, d[10] = k, d[11] = 0, d[12] = -(c * q + f * p + h * a), d[13] = -(e * q + g * p + l * a), d[14] = -(b * q + n * p + k * a), d[15] = 1)
}(function() {
	function a(a, b, c) {
		this.Yg = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
		this.height = this.width = 0;
		this.zb = !! c;
		this.zm = this.mk = !1;
		this.Ao = 0;
		this.Un = 1;
		this.Xq = 1E3;
		this.sA = (this.Xq - this.Un) / 32768;
		this.qo = Xc([0, 0, 100]);
		this.Ks = Xc([0, 0, 0]);
		this.Bu = Xc([0, 1, 0]);
		this.ol = Xc([1, 1, 1]);
		this.Wr = !0;
		this.Tm = Yc();
		this.me = Yc();
		this.Ap = Yc();
		this.zo = Yc();
		this.ga = a;
		this.ps()
	}
	function c(a, b, c) {
		this.ga = a;
		this.Yk = b;
		this.name = c;
		this.Ie = a.getAttribLocation(b, "aPos");
		this.eh = a.getAttribLocation(b, "aTex");
		this.Is = a.getUniformLocation(b, "matP");
		this.Pm = a.getUniformLocation(b, "matMV");
		this.gj = a.getUniformLocation(b, "opacity");
		this.Hp = a.getUniformLocation(b, "colorFill");
		this.Js = a.getUniformLocation(b, "samplerFront");
		this.Ck = a.getUniformLocation(b, "samplerBack");
		this.ji = a.getUniformLocation(b, "destStart");
		this.ii = a.getUniformLocation(b, "destEnd");
		this.Ek = a.getUniformLocation(b, "seconds");
		this.Jp = a.getUniformLocation(b, "pixelWidth");
		this.Ip = a.getUniformLocation(b, "pixelHeight");
		this.Bk = a.getUniformLocation(b, "layerScale");
		this.Ak = a.getUniformLocation(b, "layerAngle");
		this.Fk = a.getUniformLocation(b, "viewOrigin");
		this.Dk = a.getUniformLocation(b, "scrollPos");
		this.Jy = !! (this.Jp || this.Ip || this.Ek || this.Ck || this.ji || this.ii || this.Bk || this.Ak || this.Fk || this.Dk);
		this.Ss = this.Ts = -999;
		this.Sm = 1;
		this.Os = this.Ns = 0;
		this.Qs = this.Ms = this.Ls = 1;
		this.Ws = this.Vs = this.Us = this.Ys = this.Xs = this.Ps = 0;
		this.yp = [];
		this.Rs = Yc();
		this.gj && a.uniform1f(this.gj, 1);
		this.Hp && a.uniform4f(this.Hp, 1, 1, 1, 1);
		this.Js && a.uniform1i(this.Js, 0);
		this.Ck && a.uniform1i(this.Ck, 1);
		this.ji && a.uniform2f(this.ji, 0, 0);
		this.ii && a.uniform2f(this.ii, 1, 1);
		this.Bk && a.uniform1f(this.Bk, 1);
		this.Ak && a.uniform1f(this.Ak, 0);
		this.Fk && a.uniform2f(this.Fk, 0, 0);
		this.Dk && a.uniform2f(this.Dk, 0, 0);
		this.Ek && a.uniform1f(this.Ek, 0);
		this.Wh = !1
	}
	function b(a, b) {
		return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15]
	}
	function d(a, b) {
		this.type = a;
		this.ja = b;
		this.ga = b.ga;
		this.wf = this.zd = this.ut = 0;
		this.Na = this.Qe = null;
		this.du = []
	}
	var f = Yc();
	a.prototype.ps = function() {
		var a = this.ga,
			b;
		this.Ds = 1;
		this.ci = this.bi = null;
		this.Sl = 1;
		a.clearColor(0, 0, 0, 0);
		a.clear(a.COLOR_BUFFER_BIT);
		a.enable(a.BLEND);
		a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA);
		a.disable(a.CULL_FACE);
		a.disable(a.STENCIL_TEST);
		a.disable(a.DITHER);
		this.zb ? (a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL)) : a.disable(a.DEPTH_TEST);
		this.Es = a.ONE;
		this.Cs = a.ONE_MINUS_SRC_ALPHA;
		this.Rn = new Float32Array(8E3 * (this.zb ? 3 : 2));
		this.En = new Float32Array(16E3);
		this.It = new Float32Array(32E3);
		this.iq = a.createBuffer();
		a.bindBuffer(a.ARRAY_BUFFER, this.iq);
		a.bufferData(a.ARRAY_BUFFER, this.It.byteLength, a.DYNAMIC_DRAW);
		this.ml = Array(4);
		this.dl = Array(4);
		for (b = 0; 4 > b; b++) this.ml[b] = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.ml[b]), a.bufferData(a.ARRAY_BUFFER, this.Rn.byteLength, a.DYNAMIC_DRAW), this.dl[b] = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.dl[b]), a.bufferData(a.ARRAY_BUFFER, this.En.byteLength, a.DYNAMIC_DRAW);
		this.Pf = 0;
		this.My = a.createBuffer();
		a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.My);
		for (var c = new Uint16Array(12E3), d = b = 0; 12E3 > b;) c[b++] = d, c[b++] = d + 1, c[b++] = d + 2, c[b++] = d, c[b++] = d + 2, c[b++] = d + 3, d += 4;
		a.bufferData(a.ELEMENT_ARRAY_BUFFER, c, a.STATIC_DRAW);
		this.jq = this.wj = this.yg = 0;
		this.Rb = [];
		b = this.zb ? "attribute highp vec3 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);\n\tvTex = aTex;\n}" : "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}";
		c = this.Qj({
			src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}"
		}, b, "<default>");
		this.Rb.push(c);
		c = this.Qj({
			src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}"
		}, "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}", "<point>");
		this.Rb.push(c);
		c = this.Qj({
			src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tif (texture2D(samplerFront, vTex).a < 1.0)\n\t\tdiscard;\n}"
		}, b, "<earlyz>");
		this.Rb.push(c);
		c = this.Qj({
			src: "uniform lowp vec4 colorFill;\nvoid main(void) {\n\tgl_FragColor = colorFill;\n}"
		}, b, "<fill>");
		this.Rb.push(c);
		for (var e in ld) ld.hasOwnProperty(e) && this.Rb.push(this.Qj(ld[e], b, e));
		a.activeTexture(a.TEXTURE0);
		a.bindTexture(a.TEXTURE_2D, null);
		this.Kg = [];
		this.Nf = 0;
		this.jd = !1;
		this.Sr = this.wk = -1;
		this.Mi = null;
		this.Ko = a.createFramebuffer();
		this.Wl = this.pn = null;
		this.Fr = !1;
		this.zb && (this.Wl = a.createRenderbuffer());
		this.vh = Xc([0, 0, 0]);
		this.$s = a.getParameter(a.ALIASED_POINT_SIZE_RANGE)[1];
		2048 < this.$s && (this.$s = 2048);
		this.Pd(0)
	};
	c.prototype.Rq = function(a) {
		b(this.Rs, a) || (Zc(a, this.Rs), this.ga.uniformMatrix4fv(this.Pm, !1, a))
	};
	a.prototype.Qj = function(a, b, d) {
		var e = this.ga,
			f = e.createShader(e.FRAGMENT_SHADER);
		e.shaderSource(f, a.src);
		e.compileShader(f);
		if (!e.getShaderParameter(f, e.COMPILE_STATUS)) return e.deleteShader(f), null;
		var h = e.createShader(e.VERTEX_SHADER);
		e.shaderSource(h, b);
		e.compileShader(h);
		if (!e.getShaderParameter(h, e.COMPILE_STATUS)) return e.deleteShader(f), e.deleteShader(h), null;
		b = e.createProgram();
		e.attachShader(b, f);
		e.attachShader(b, h);
		e.linkProgram(b);
		if (!e.getProgramParameter(b, e.LINK_STATUS)) return e.deleteShader(f), e.deleteShader(h), e.deleteProgram(b), null;
		e.useProgram(b);
		e.deleteShader(f);
		e.deleteShader(h);
		d = new c(e, b, d);
		d.Ho = a.Ho || 0;
		d.Io = a.Io || 0;
		d.Qr = !! a.Qr;
		d.bf = !! a.bf;
		d.Dr = !! a.Dr;
		d.Oa = a.Oa || [];
		a = 0;
		for (f = d.Oa.length; a < f; a++) d.Oa[a][1] = e.getUniformLocation(b, d.Oa[a][0]), d.yp.push(0), e.uniform1f(d.Oa[a][1], 0);
		return d
	};
	a.prototype.Yo = function(a) {
		var b, c;
		b = 0;
		for (c = this.Rb.length; b < c; b++) if (this.Rb[b].name === a) return b;
		return -1
	};
	a.prototype.Mt = function(a, b, c) {
		var d = this.me,
			e = this.Tm,
			f = [0, 0, 0, 0, 0, 0, 0, 0];
		f[0] = d[0] * a + d[4] * b + d[12];
		f[1] = d[1] * a + d[5] * b + d[13];
		f[2] = d[2] * a + d[6] * b + d[14];
		f[3] = d[3] * a + d[7] * b + d[15];
		f[4] = e[0] * f[0] + e[4] * f[1] + e[8] * f[2] + e[12] * f[3];
		f[5] = e[1] * f[0] + e[5] * f[1] + e[9] * f[2] + e[13] * f[3];
		f[6] = e[2] * f[0] + e[6] * f[1] + e[10] * f[2] + e[14] * f[3];
		f[7] = -f[2];
		0 !== f[7] && (f[7] = 1 / f[7], f[4] *= f[7], f[5] *= f[7], f[6] *= f[7], c[0] = (.5 * f[4] + .5) * this.width, c[1] = (.5 * f[5] + .5) * this.height)
	};
	a.prototype.qi = function(a, b, c) {
		if (this.width !== a || this.height !== b || c) {
			this.Nh();
			c = this.ga;
			this.width = a;
			this.height = b;
			c.viewport(0, 0, a, b);
			kd(this.qo, this.Ks, this.Bu, this.me);
			if (this.zb) {
				var d = -a / 2;
				a = a / 2;
				var e = b / 2;
				b = -b / 2;
				var f = this.Un,
					h = this.Xq,
					t = this.Tm;
				t || (t = Yc());
				var u = a - d,
					v = b - e,
					r = h - f;
				t[0] = 2 / u;
				t[1] = 0;
				t[2] = 0;
				t[3] = 0;
				t[4] = 0;
				t[5] = 2 / v;
				t[6] = 0;
				t[7] = 0;
				t[8] = 0;
				t[9] = 0;
				t[10] = -2 / r;
				t[11] = 0;
				t[12] = -(d + a) / u;
				t[13] = -(b + e) / v;
				t[14] = -(h + f) / r;
				t[15] = 1;
				this.ol[0] = 1;
				this.ol[1] = 1
			} else b = a / b, d = this.Un, a = this.Xq, t = this.Tm, h = d * Math.tan(45 * Math.PI / 360), b *= h, e = -b, f = -h, t || (t = Yc()), u = b - e, v = h - f, r = a - d, t[0] = 2 * d / u, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * d / v, t[6] = 0, t[7] = 0, t[8] = (b + e) / u, t[9] = (h + f) / v, t[10] = -(a + d) / r, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = -(a * d * 2) / r, t[15] = 0, d = [0, 0], a = [0, 0], this.Mt(0, 0, d), this.Mt(1, 1, a), this.ol[0] = 1 / (a[0] - d[0]), this.ol[1] = -1 / (a[1] - d[1]);
			d = 0;
			for (a = this.Rb.length; d < a; d++) e = this.Rb[d], e.Wh = !1, e.Is && (c.useProgram(e.Yk), c.uniformMatrix4fv(e.Is, !1, this.Tm));
			c.useProgram(this.Rb[this.wk].Yk);
			c.bindTexture(c.TEXTURE_2D, null);
			c.activeTexture(c.TEXTURE1);
			c.bindTexture(c.TEXTURE_2D, null);
			c.activeTexture(c.TEXTURE0);
			this.ci = this.bi = null;
			this.Wl && (c.bindFramebuffer(c.FRAMEBUFFER, this.Ko), c.bindRenderbuffer(c.RENDERBUFFER, this.Wl), c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_COMPONENT16, this.width, this.height), this.Fr || (c.framebufferRenderbuffer(c.FRAMEBUFFER, c.DEPTH_ATTACHMENT, c.RENDERBUFFER, this.Wl), this.Fr = !0), c.bindRenderbuffer(c.RENDERBUFFER, null), c.bindFramebuffer(c.FRAMEBUFFER, null), this.pn = null)
		}
	};
	a.prototype.Df = function() {
		kd(this.qo, this.Ks, this.Bu, this.me);
		jd(this.me, this.ol)
	};
	a.prototype.translate = function(a, b) {
		if (0 !== a || 0 !== b) {
			this.vh[0] = a;
			this.vh[1] = b;
			this.vh[2] = 0;
			var c = this.me,
				d = this.vh,
				e = d[0],
				f = d[1],
				d = d[2];
			c[12] = c[0] * e + c[4] * f + c[8] * d + c[12];
			c[13] = c[1] * e + c[5] * f + c[9] * d + c[13];
			c[14] = c[2] * e + c[6] * f + c[10] * d + c[14];
			c[15] = c[3] * e + c[7] * f + c[11] * d + c[15]
		}
	};
	a.prototype.scale = function(a, b) {
		if (1 !== a || 1 !== b) this.vh[0] = a, this.vh[1] = b, this.vh[2] = 1, jd(this.me, this.vh)
	};
	a.prototype.uq = function(a) {
		if (0 !== a) {
			var b = this.me,
				c, d = Math.sin(a);
			a = Math.cos(a);
			var e = b[0],
				f = b[1],
				h = b[2],
				t = b[3],
				u = b[4],
				v = b[5],
				r = b[6],
				z = b[7];
			c ? b !== c && (c[8] = b[8], c[9] = b[9], c[10] = b[10], c[11] = b[11], c[12] = b[12], c[13] = b[13], c[14] = b[14], c[15] = b[15]) : c = b;
			c[0] = e * a + u * d;
			c[1] = f * a + v * d;
			c[2] = h * a + r * d;
			c[3] = t * a + z * d;
			c[4] = e * -d + u * a;
			c[5] = f * -d + v * a;
			c[6] = h * -d + r * a;
			c[7] = t * -d + z * a
		}
	};
	a.prototype.hf = function() {
		if (!b(this.Ap, this.me)) {
			var a = this.be();
			a.type = 5;
			a.Na ? Zc(this.me, a.Na) : a.Na = Yc(this.me);
			Zc(this.me, this.Ap);
			this.jd = !1
		}
	};
	a.prototype.wn = function(a) {
		this.zb && (32760 < a && (a = 32760), this.Ao = this.qo[2] - this.Un - a * this.sA)
	};
	d.prototype.Vw = function() {
		var a = this.ga,
			b = this.ja;
		0 !== this.zd ? (a.depthMask(!0), a.colorMask(!1, !1, !1, !1), a.disable(a.BLEND), a.bindFramebuffer(a.FRAMEBUFFER, b.Ko), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.clear(a.DEPTH_BUFFER_BIT), a.bindFramebuffer(a.FRAMEBUFFER, null), b.zm = !0) : (a.depthMask(!1), a.colorMask(!0, !0, !0, !0), a.enable(a.BLEND), b.zm = !1)
	};
	d.prototype.Zw = function() {
		this.ga.bindTexture(this.ga.TEXTURE_2D, this.Qe)
	};
	d.prototype.$w = function() {
		var a = this.ga;
		a.activeTexture(a.TEXTURE1);
		a.bindTexture(a.TEXTURE_2D, this.Qe);
		a.activeTexture(a.TEXTURE0)
	};
	d.prototype.Ww = function() {
		var a = this.ut,
			b = this.ja;
		b.Sl = a;
		b = b.Mi;
		b.gj && b.Sm !== a && (b.Sm = a, this.ga.uniform1f(b.gj, a))
	};
	d.prototype.Qw = function() {
		this.ga.drawElements(this.ga.TRIANGLES, this.wf, this.ga.UNSIGNED_SHORT, this.zd)
	};
	d.prototype.Sw = function() {
		this.ga.blendFunc(this.zd, this.wf)
	};
	d.prototype.ax = function() {
		var a, b, c, d = this.ja.Rb,
			e = this.ja.Sr;
		a = 0;
		for (b = d.length; a < b; a++) c = d[a], a === e && c.Pm ? (c.Rq(this.Na), c.Wh = !0) : c.Wh = !1;
		Zc(this.Na, this.ja.zo)
	};
	d.prototype.Rw = function() {
		var a = this.ga,
			b = this.ja;
		this.Qe ? (b.ci === this.Qe && (a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, null), b.ci = null, a.activeTexture(a.TEXTURE0)), a.bindFramebuffer(a.FRAMEBUFFER, b.Ko), b.zm || a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.Qe, 0)) : (b.zb || a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.bindFramebuffer(a.FRAMEBUFFER, null))
	};
	d.prototype.Lw = function() {
		var a = this.ga,
			b = this.zd;
		0 === b ? (a.clearColor(this.Na[0], this.Na[1], this.Na[2], this.Na[3]), a.clear(a.COLOR_BUFFER_BIT)) : 1 === b ? (a.enable(a.SCISSOR_TEST), a.scissor(this.Na[0], this.Na[1], this.Na[2], this.Na[3]), a.clearColor(0, 0, 0, 0), a.clear(a.COLOR_BUFFER_BIT), a.disable(a.SCISSOR_TEST)) : a.clear(a.DEPTH_BUFFER_BIT)
	};
	d.prototype.Uw = function() {
		var a = this.ga;
		0 !== this.zd ? a.enable(a.DEPTH_TEST) : a.disable(a.DEPTH_TEST)
	};
	d.prototype.Pw = function() {
		var a = this.ga,
			b = this.ja;
		b.zb && a.disable(a.DEPTH_TEST);
		var c = b.Rb[1];
		a.useProgram(c.Yk);
		!c.Wh && c.Pm && (c.Rq(b.zo), c.Wh = !0);
		a.enableVertexAttribArray(c.Ie);
		a.bindBuffer(a.ARRAY_BUFFER, b.iq);
		a.vertexAttribPointer(c.Ie, 4, a.FLOAT, !1, 0, 0);
		a.drawArrays(a.POINTS, this.zd / 4, this.wf);
		c = b.Mi;
		a.useProgram(c.Yk);
		0 <= c.Ie && (a.enableVertexAttribArray(c.Ie), a.bindBuffer(a.ARRAY_BUFFER, b.ml[b.Pf]), a.vertexAttribPointer(c.Ie, b.zb ? 3 : 2, a.FLOAT, !1, 0, 0));
		0 <= c.eh && (a.enableVertexAttribArray(c.eh), a.bindBuffer(a.ARRAY_BUFFER, b.dl[b.Pf]), a.vertexAttribPointer(c.eh, 2, a.FLOAT, !1, 0, 0));
		b.zb && a.enable(a.DEPTH_TEST)
	};
	d.prototype.Xw = function() {
		var a = this.ga,
			b = this.ja,
			c = b.Rb[this.zd];
		b.Sr = this.zd;
		b.Mi = c;
		a.useProgram(c.Yk);
		!c.Wh && c.Pm && (c.Rq(b.zo), c.Wh = !0);
		c.gj && c.Sm !== b.Sl && (c.Sm = b.Sl, a.uniform1f(c.gj, b.Sl));
		0 <= c.Ie && (a.enableVertexAttribArray(c.Ie), a.bindBuffer(a.ARRAY_BUFFER, b.ml[b.Pf]), a.vertexAttribPointer(c.Ie, b.zb ? 3 : 2, a.FLOAT, !1, 0, 0));
		0 <= c.eh && (a.enableVertexAttribArray(c.eh), a.bindBuffer(a.ARRAY_BUFFER, b.dl[b.Pf]), a.vertexAttribPointer(c.eh, 2, a.FLOAT, !1, 0, 0))
	};
	d.prototype.Tw = function() {
		var a = this.Na;
		this.ga.uniform4f(this.ja.Mi.Hp, a[0], a[1], a[2], a[3])
	};
	d.prototype.Yw = function() {
		var a, b, c = this.ja.Mi,
			d = this.ga;
		a = this.Na;
		c.Ck && this.ja.ci !== this.Qe && (d.activeTexture(d.TEXTURE1), d.bindTexture(d.TEXTURE_2D, this.Qe), this.ja.ci = this.Qe, d.activeTexture(d.TEXTURE0));
		var e = a[0];
		c.Jp && e !== c.Ts && (c.Ts = e, d.uniform1f(c.Jp, e));
		e = a[1];
		c.Ip && e !== c.Ss && (c.Ss = e, d.uniform1f(c.Ip, e));
		e = a[2];
		b = a[3];
		!c.ji || e === c.Ns && b === c.Os || (c.Ns = e, c.Os = b, d.uniform2f(c.ji, e, b));
		e = a[4];
		b = a[5];
		!c.ii || e === c.Ls && b === c.Ms || (c.Ls = e, c.Ms = e, d.uniform2f(c.ii, e, b));
		e = a[6];
		c.Bk && e !== c.Qs && (c.Qs = e, d.uniform1f(c.Bk, e));
		e = a[7];
		c.Ak && e !== c.Ps && (c.Ps = e, d.uniform1f(c.Ak, e));
		e = a[8];
		b = a[9];
		!c.Fk || e === c.Xs && b === c.Ys || (c.Xs = e, c.Ys = b, d.uniform2f(c.Fk, e, b));
		e = a[10];
		b = a[11];
		!c.Dk || e === c.Us && b === c.Vs || (c.Us = e, c.Vs = b, d.uniform2f(c.Dk, e, b));
		e = a[12];
		c.Ek && e !== c.Ws && (c.Ws = e, d.uniform1f(c.Ek, e));
		if (c.Oa.length) for (a = 0, b = c.Oa.length; a < b; a++) e = this.du[a], e !== c.yp[a] && (c.yp[a] = e, d.uniform1f(c.Oa[a][1], e))
	};
	a.prototype.be = function() {
		this.Nf === this.Kg.length && this.Kg.push(new d(0, this));
		return this.Kg[this.Nf++]
	};
	a.prototype.Nh = function() {
		if (0 !== this.Nf && !this.ga.isContextLost()) {
			var a = this.ga;
			0 < this.jq && (a.bindBuffer(a.ARRAY_BUFFER, this.iq), a.bufferSubData(a.ARRAY_BUFFER, 0, this.It.subarray(0, this.jq)), b && 0 <= b.Ie && "<point>" === b.name && a.vertexAttribPointer(b.Ie, 4, a.FLOAT, !1, 0, 0));
			if (0 < this.yg) {
				var b = this.Mi;
				a.bindBuffer(a.ARRAY_BUFFER, this.ml[this.Pf]);
				a.bufferSubData(a.ARRAY_BUFFER, 0, this.Rn.subarray(0, this.yg));
				b && 0 <= b.Ie && "<point>" !== b.name && a.vertexAttribPointer(b.Ie, this.zb ? 3 : 2, a.FLOAT, !1, 0, 0);
				a.bindBuffer(a.ARRAY_BUFFER, this.dl[this.Pf]);
				a.bufferSubData(a.ARRAY_BUFFER, 0, this.En.subarray(0, this.wj));
				b && 0 <= b.eh && "<point>" !== b.name && a.vertexAttribPointer(b.eh, 2, a.FLOAT, !1, 0, 0)
			}
			for (var c, a = 0, b = this.Nf; a < b; a++) switch (c = this.Kg[a], c.type) {
			case 1:
				c.Qw();
				break;
			case 2:
				c.Zw();
				break;
			case 3:
				c.Ww();
				break;
			case 4:
				c.Sw();
				break;
			case 5:
				c.ax();
				break;
			case 6:
				c.Rw();
				break;
			case 7:
				c.Lw();
				break;
			case 8:
				c.Pw();
				break;
			case 9:
				c.Xw();
				break;
			case 10:
				c.Yw();
				break;
			case 11:
				c.$w();
				break;
			case 12:
				c.Tw();
				break;
			case 13:
				c.Uw();
				break;
			case 14:
				c.Vw()
			}
			this.jq = this.wj = this.yg = this.Nf = 0;
			this.zm = this.jd = !1;
			this.Pf++;
			4 <= this.Pf && (this.Pf = 0)
		}
	};
	a.prototype.rj = function(a) {
		if (a !== this.Ds && !this.mk) {
			var b = this.be();
			b.type = 3;
			this.Ds = b.ut = a;
			this.jd = !1
		}
	};
	a.prototype.se = function(a) {
		if (a !== this.bi) {
			var b = this.be();
			b.type = 2;
			this.bi = b.Qe = a;
			this.jd = !1
		}
	};
	a.prototype.oh = function(a, b) {
		if ((a !== this.Es || b !== this.Cs) && !this.mk) {
			var c = this.be();
			c.type = 4;
			c.zd = a;
			c.wf = b;
			this.Es = a;
			this.Cs = b;
			this.jd = !1
		}
	};
	a.prototype.Wt = function() {
		this.oh(this.ga.ONE, this.ga.ONE_MINUS_SRC_ALPHA)
	};
	a.prototype.Rk = function(a, b, c, d, e, f, h, t) {
		15992 <= this.yg && this.Nh();
		var u = this.yg,
			v = this.wj,
			r = this.Rn,
			z = this.En,
			B = this.Ao;
		if (this.jd) this.Kg[this.Nf - 1].wf += 6;
		else {
			var D = this.be();
			D.type = 1;
			D.zd = this.zb ? u : u / 2 * 3;
			D.wf = 6;
			this.jd = !0
		}
		this.zb ? (r[u++] = a, r[u++] = b, r[u++] = B, r[u++] = c, r[u++] = d, r[u++] = B, r[u++] = e, r[u++] = f, r[u++] = B, r[u++] = h, r[u++] = t, r[u++] = B) : (r[u++] = a, r[u++] = b, r[u++] = c, r[u++] = d, r[u++] = e, r[u++] = f, r[u++] = h, r[u++] = t);
		z[v++] = 0;
		z[v++] = 0;
		z[v++] = 1;
		z[v++] = 0;
		z[v++] = 1;
		z[v++] = 1;
		z[v++] = 0;
		z[v++] = 1;
		this.yg = u;
		this.wj = v
	};
	a.prototype.mh = function(a, b, c, d, e, f, h, t, u) {
		15992 <= this.yg && this.Nh();
		var v = this.yg,
			r = this.wj,
			z = this.Rn,
			B = this.En,
			D = this.Ao;
		if (this.jd) this.Kg[this.Nf - 1].wf += 6;
		else {
			var A = this.be();
			A.type = 1;
			A.zd = this.zb ? v : v / 2 * 3;
			A.wf = 6;
			this.jd = !0
		}
		var A = u.left,
			C = u.top,
			E = u.right;
		u = u.bottom;
		this.zb ? (z[v++] = a, z[v++] = b, z[v++] = D, z[v++] = c, z[v++] = d, z[v++] = D, z[v++] = e, z[v++] = f, z[v++] = D, z[v++] = h, z[v++] = t, z[v++] = D) : (z[v++] = a, z[v++] = b, z[v++] = c, z[v++] = d, z[v++] = e, z[v++] = f, z[v++] = h, z[v++] = t);
		B[r++] = A;
		B[r++] = C;
		B[r++] = E;
		B[r++] = C;
		B[r++] = E;
		B[r++] = u;
		B[r++] = A;
		B[r++] = u;
		this.yg = v;
		this.wj = r
	};
	a.prototype.Pd = function(a) {
		if (this.wk !== a) {
			if (!this.Rb[a]) {
				if (0 === this.wk) return;
				a = 0
			}
			var b = this.be();
			b.type = 9;
			this.wk = b.zd = a;
			this.jd = !1
		}
	};
	a.prototype.Pk = function(a) {
		a = this.Rb[a];
		return !(!a.ji && !a.ii)
	};
	a.prototype.nq = function(a) {
		a = this.Rb[a];
		return !!(a.ji || a.ii || a.Qr)
	};
	a.prototype.mq = function(a) {
		return this.Rb[a].bf
	};
	a.prototype.Az = function(a) {
		a = this.Rb[a];
		return 0 !== a.Ho || 0 !== a.Io
	};
	a.prototype.my = function(a) {
		return this.Rb[a].Ho
	};
	a.prototype.ny = function(a) {
		return this.Rb[a].Io
	};
	a.prototype.oy = function(a, b) {
		return this.Rb[a].Oa[b][2]
	};
	a.prototype.kn = function(a) {
		return this.Rb[a].Dr
	};
	a.prototype.sj = function(a, b, c, d, e, f, h, t, u, v, r, z, B, D, A) {
		var C = this.Rb[this.wk],
			E, w;
		if (C.Jy || A.length) {
			E = this.be();
			E.type = 10;
			E.Na ? Zc(this.me, E.Na) : E.Na = Yc();
			w = E.Na;
			w[0] = b;
			w[1] = c;
			w[2] = d;
			w[3] = e;
			w[4] = f;
			w[5] = h;
			w[6] = t;
			w[7] = u;
			w[8] = v;
			w[9] = r;
			w[10] = z;
			w[11] = B;
			w[12] = D;
			C.Ck ? E.Qe = a : E.Qe = null;
			if (A.length) for (c = E.du, c.length = A.length, a = 0, b = A.length; a < b; a++) c[a] = A[a];
			this.jd = !1
		}
	};
	a.prototype.clear = function(a, b, c, d) {
		var e = this.be();
		e.type = 7;
		e.zd = 0;
		e.Na || (e.Na = Yc());
		e.Na[0] = a;
		e.Na[1] = b;
		e.Na[2] = c;
		e.Na[3] = d;
		this.jd = !1
	};
	a.prototype.clearRect = function(a, b, c, d) {
		if (!(0 > c || 0 > d)) {
			var e = this.be();
			e.type = 7;
			e.zd = 1;
			e.Na || (e.Na = Yc());
			e.Na[0] = a;
			e.Na[1] = b;
			e.Na[2] = c;
			e.Na[3] = d;
			this.jd = !1
		}
	};
	a.prototype.Zt = function(a) {
		if (this.zb && (a = !! a, this.mk !== a)) {
			var b = this.be();
			b.type = 14;
			b.zd = a ? 1 : 0;
			this.jd = !1;
			this.mk = a;
			this.pn = null;
			this.mk ? this.Pd(2) : this.Pd(0)
		}
	};
	a.prototype.Yt = function(a) {
		if (this.zb) {
			var b = this.be();
			b.type = 13;
			b.zd = a ? 1 : 0;
			this.jd = !1
		}
	};
	a.prototype.bs = function() {
		Zc(this.Ap, f);
		this.Df();
		this.hf();
		var a = this.width / 2,
			b = this.height / 2;
		this.Rk(-a, b, a, b, a, -b, -a, -b);
		Zc(f, this.me);
		this.hf()
	};
	a.prototype.Xt = function(a, b, c) {
		this.Pd(3);
		var d = this.be();
		d.type = 12;
		d.Na || (d.Na = Yc());
		d.Na[0] = a;
		d.Na[1] = b;
		d.Na[2] = c;
		d.Na[3] = 1;
		this.jd = !1
	};
	a.prototype.Yz = function() {
		this.Pd(0)
	};
	a.prototype.Jz = function() {
		this.Pd(2)
	};
	a.prototype.zz = function() {
		this.Nh();
		this.ga.flush()
	};
	var h = [],
		e = {};
	a.prototype.Aw = function() {
		J(h);
		e = {}
	};
	a.prototype.Nm = function(a, b, c) {
		var d;
		d = !1;
		b = !! b;
		var f = a.src + "," + d + "," + b + (d ? ",undefined" : ""),
			q = null;
		if ("undefined" !== typeof a.src && e.hasOwnProperty(f)) return q = e[f], q.Fl++, q;
		this.Nh();
		var p = this.ga,
			t = la(a.width) && la(a.height),
			q = p.createTexture();
		p.bindTexture(p.TEXTURE_2D, q);
		p.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
		var u = p.RGBA,
			v = p.RGBA,
			r = p.UNSIGNED_BYTE;
		if (c && !this.Yg) switch (c) {
		case 1:
			v = u = p.RGB;
			break;
		case 2:
			r = p.UNSIGNED_SHORT_4_4_4_4;
			break;
		case 3:
			r = p.UNSIGNED_SHORT_5_5_5_1;
			break;
		case 4:
			v = u = p.RGB, r = p.UNSIGNED_SHORT_5_6_5
		}
		if (!t && d) {
			c = document.createElement("canvas");
			c.width = ma(a.width);
			c.height = ma(a.height);
			var z = c.getContext("2d");
			z.webkitImageSmoothingEnabled = b;
			z.mozImageSmoothingEnabled = b;
			z.msImageSmoothingEnabled = b;
			z.imageSmoothingEnabled = b;
			z.drawImage(a, 0, 0, a.width, a.height, 0, 0, c.width, c.height);
			p.texImage2D(p.TEXTURE_2D, 0, u, v, r, c)
		} else p.texImage2D(p.TEXTURE_2D, 0, u, v, r, a);
		d ? (p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.REPEAT), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.REPEAT)) : (p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE));
		b ? (p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.LINEAR), t && this.Wr ? (p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.LINEAR_MIPMAP_LINEAR), p.generateMipmap(p.TEXTURE_2D)) : p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.LINEAR)) : (p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST));
		p.bindTexture(p.TEXTURE_2D, null);
		this.bi = null;
		q.Ih = a.width;
		q.Hh = a.height;
		q.Fl = 1;
		q.Kr = f;
		h.push(q);
		return e[f] = q
	};
	a.prototype.ze = function(a, b, c) {
		var d;
		this.Nh();
		var e = this.ga;
		this.Yg && (d = !1);
		var f = e.createTexture();
		e.bindTexture(e.TEXTURE_2D, f);
		e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, a, b, 0, e.RGBA, d ? e.UNSIGNED_SHORT_4_4_4_4 : e.UNSIGNED_BYTE, null);
		e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
		e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
		e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, c ? e.LINEAR : e.NEAREST);
		e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, c ? e.LINEAR : e.NEAREST);
		e.bindTexture(e.TEXTURE_2D, null);
		this.bi = null;
		f.Ih = a;
		f.Hh = b;
		h.push(f);
		return f
	};
	a.prototype.deleteTexture = function(a) {
		a && ("undefined" !== typeof a.Fl && 1 < a.Fl ? a.Fl-- : (this.Nh(), a === this.bi && (this.ga.bindTexture(this.ga.TEXTURE_2D, null), this.bi = null), a === this.ci && (this.ga.activeTexture(this.ga.TEXTURE1), this.ga.bindTexture(this.ga.TEXTURE_2D, null), this.ga.activeTexture(this.ga.TEXTURE0), this.ci = null), La(h, a), "undefined" !== typeof a.Kr && delete e[a.Kr], this.ga.deleteTexture(a)))
	};
	a.prototype.Ne = function(a) {
		if (a !== this.pn) {
			var b = this.be();
			b.type = 6;
			this.pn = b.Qe = a;
			this.jd = !1
		}
	};
	Ub = a
})();
(function() {
	function a() {
		return "undefined" !== typeof jQuery ? jQuery(window).width() : window.innerWidth
	}
	function c() {
		return "undefined" !== typeof jQuery ? jQuery(window).height() : window.innerHeight
	}
	function b(a) {
		if (a && (a.getContext || a.dc) && !a.c2runtime) {
			a.c2runtime = this;
			var b = this;
			this.je = (this.lk = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk)) || "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2iscordova && window.c2iscordova;
			this.Yc = !! a.dc;
			this.us = "undefined" !== typeof window.AppMobi || this.Yc;
			this.He = !! window.c2cocoonjs;
			this.Ye = !! window.c2ejecta;
			this.He && (CocoonJS.App.onSuspended.addEventListener(function() {
				b.setSuspended(!0)
			}), CocoonJS.App.onActivated.addEventListener(function() {
				b.setSuspended(!1)
			}));
			this.Ye && (document.addEventListener("pagehide", function() {
				b.setSuspended(!0)
			}), document.addEventListener("pageshow", function() {
				b.setSuspended(!1)
			}), document.addEventListener("resize", function() {
				b.setSize(window.innerWidth, window.innerHeight)
			}));
			this.Cb = this.Yc || this.He || this.Ye;
			this.nk = /edge\//i.test(navigator.userAgent);
			this.Yg = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.nk;
			this.xs = /tizen/i.test(navigator.userAgent);
			this.xm = /android/i.test(navigator.userAgent) && !this.xs && !this.Yg && !this.nk;
			this.vp = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.Yg && !this.nk;
			this.Bs = /ipad/i.test(navigator.userAgent);
			this.bj = this.vp || this.Bs || this.Ye;
			this.Xy = this.vp && /os\s6/i.test(navigator.userAgent);
			this.kk = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.Yg && !this.nk;
			this.np = /amazonwebappplatform/i.test(navigator.userAgent);
			this.Ry = /firefox/i.test(navigator.userAgent);
			this.ws = /safari/i.test(navigator.userAgent) && !this.kk && !this.Yg && !this.nk;
			this.Uy = /windows/i.test(navigator.userAgent);
			this.Zg = "undefined" !== typeof window.c2nodewebkit || "undefined" !== typeof window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent);
			this.zs = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
			this.Wy = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
			this.Xi = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
			this.tp = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
			this.ys = !! window.cr_windows10;
			this.sp = this.zs || this.Wy || this.tp || this.ys;
			this.Qy = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
			this.ym = this.xm && !this.kk && !this.lk && !this.Ry && !this.np && !this.Cb;
			this.devicePixelRatio = 1;
			this.$h = this.je || this.lk || this.us || this.He || this.xm || this.bj || this.Xi || this.tp || this.Qy || this.xs || this.Ye;
			this.$h || (this.$h = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
			"undefined" === typeof cr_is_preview || this.Zg || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.Zg = !0);
			this.canvas = a;
			this.Mr = document.getElementById("c2canvasdiv");
			this.ja = this.ga = null;
			this.bp = "(unavailable)";
			this.zb = !1;
			this.Mh = 0;
			this.nb = null;
			this.No = "";
			this.fm = !1;
			this.lt = this.mt = 0;
			this.canvas.oncontextmenu = function(a) {
				a.preventDefault && a.preventDefault();
				return !1
			};
			this.canvas.onselectstart = function(a) {
				a.preventDefault && a.preventDefault();
				return !1
			};
			this.Yc && (window.c2runtime = this);
			this.Zg && (window.ondragover = function(a) {
				a.preventDefault();
				return !1
			}, window.ondrop = function(a) {
				a.preventDefault();
				return !1
			}, require("nw.gui").App.clearCache());
			this.ym && "undefined" !== typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible");
			this.width = a.width;
			this.height = a.height;
			this.wa = this.width;
			this.ua = this.height;
			this.Ql = this.width;
			this.Sj = this.height;
			this.yk = window.innerWidth;
			this.xk = window.innerHeight;
			this.Xx = !1;
			this.Ta = !0;
			this.pk = !1;
			Date.now || (Date.now = function() {
				return +new Date
			});
			this.plugins = [];
			this.types = {};
			this.da = [];
			this.gc = [];
			this.Gp = {};
			this.$e = [];
			this.Go = {};
			this.Vf = [];
			this.Dj = [];
			this.Mn = [];
			this.nw = [];
			this.ow = [];
			this.ku = null;
			this.Lh = {};
			this.pp = this.Xg = !1;
			this.ke = 0;
			this.op = this.rp = !1;
			this.We = [];
			this.Am = !1;
			this.eg = this.md = this.Km = this.yq = "";
			this.al = this.gu = !1;
			this.Sg = this.Ha = 0;
			this.ct = 30;
			this.wo = this.Gk = 0;
			this.vg = 1;
			this.Jc = new yb;
			this.zg = new yb;
			this.Wm = this.hm = this.Qh = this.tg = this.ei = this.Mo = this.Hm = 0;
			this.Oj = null;
			this.Yl = [];
			this.Fo = [];
			this.$l = -1;
			this.Kp = [
				[]
			];
			this.Mq = this.Qm = 0;
			this.mn(null);
			this.Xj = this.gt = this.Kk = 0;
			this.bl = [];
			this.Jq = this.oq = -1;
			this.tk = !0;
			this.fj = 0;
			this.ok = !1;
			this.bA = 0;
			this.Gi = null;
			this.Yb = this.rm = !1;
			this.kt = new ba;
			this.Tp = new ba;
			this.Up = new ba;
			this.Sk = [];
			this.ef = new Ab([]);
			this.Gq = new Ab([]);
			this.Ei = [];
			this.Si = {};
			this.Ki = {};
			this.Di = {};
			this.Cj = {};
			this.Hr = {};
			this.Hs = this.Jm = this.kc = this.zc = this.Gs = this.Im = this.qb = null;
			this.Aj = this.up = !1;
			this.Oo = [null, null];
			this.Rh = 0;
			this.em = "";
			this.ig = {};
			this.Zk = this.bh = null;
			this.iu = "";
			this.Vm = [];
			this.Iz()
		}
	}
	function d(a, b) {
		return 128 >= b ? a[3] : 256 >= b ? a[2] : 512 >= b ? a[1] : a[0]
	}
	function f(a) {
		a.target.result.createObjectStore("saves", {
			keyPath: "slot"
		})
	}
	function h(a, b, c, e) {
		var d = indexedDB.open("_C2SaveStates");
		d.onupgradeneeded = f;
		d.onerror = e;
		d.onsuccess = function(d) {
			d = d.target.result;
			d.onerror = e;
			d.transaction(["saves"], "readwrite").objectStore("saves").put({
				slot: a,
				data: b
			}).onsuccess = c
		}
	}
	function e(a, b, c) {
		var e = indexedDB.open("_C2SaveStates");
		e.onupgradeneeded = f;
		e.onerror = c;
		e.onsuccess = function(e) {
			e = e.target.result;
			e.onerror = c;
			var d = e.transaction(["saves"]).objectStore("saves").get(a);
			d.onsuccess = function() {
				d.result ? b(d.result.data) : b(null)
			}
		}
	}
	function g() {
		fa("Reloading for continuous preview");
		window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location = window.location + "?continuous"
	}
	function l(a) {
		var b, c = {};
		for (b in a)!a.hasOwnProperty(b) || a[b] instanceof ba || a[b] && "undefined" !== typeof a[b].sf || "spriteCreatedDestroyCallback" !== b && (c[b] = a[b]);
		return c
	}
	var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
	b.prototype.Iz = function() {
		var a = this,
			b;
		this.Xi ? b = new ActiveXObject("Microsoft.XMLHTTP") : b = new XMLHttpRequest;
		var c = "data.js";
		if (this.zs || this.Xi || this.tp || this.ys) c = "data.json";
		b.open("GET", c, !0);
		var e = !1;
		if (!this.Cb && "response" in b && "responseType" in b) try {
			b.responseType = "json", e = "json" === b.responseType
		} catch (d) {
			e = !1
		}
		if (!e && "responseType" in b) try {
			b.responseType = "text"
		} catch (f) {}
		if ("overrideMimeType" in b) try {
			b.overrideMimeType("application/json; charset=utf-8")
		} catch (g) {}
		this.Xi ? b.onreadystatechange = function() {
			4 === b.readyState && a.Mm(JSON.parse(b.responseText))
		} : (b.onload = function() {
			if (e) a.Mm(b.response);
			else if (a.Ye) {
				var c = b.responseText,
					c = c.substr(c.indexOf("{"));
				a.Mm(JSON.parse(c))
			} else a.Mm(JSON.parse(b.responseText))
		}, b.onerror = function(a) {
			ha("Error requesting " + c + ":");
			ha(a)
		});
		b.send()
	};
	b.prototype.Ny = function() {
		var b = this,
			e, d, f, g, k, h, m, p, l;
		this.$g = (!this.Cb || this.Ye || this.je) && this.nA && !this.ym;
		0 === this.sd && this.bj && (this.$g = !1);
		this.devicePixelRatio = this.$g ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
		this.ed();
		d = !(!this.Xx && (!this.jo || this.Zg || this.sp || this.Xi || this.lk || this.je || this.np));
		0 < this.sd && this.setSize(a(), c(), !0);
		try {
			this.mx && (this.He || this.Ye || !this.Cb) && (e = {
				alpha: d,
				depth: !1,
				antialias: !1,
				failIfMajorPerformanceCaveat: !0
			}, this.ga = this.canvas.getContext("webgl", e) || this.canvas.getContext("experimental-webgl", e))
		} catch (q) {}
		if (this.ga) {
			if (e = this.ga.getExtension("WEBGL_debug_renderer_info")) this.bp = this.ga.getParameter(e.UNMASKED_RENDERER_WEBGL) + " [" + this.ga.getParameter(e.UNMASKED_VENDOR_WEBGL) + "]";
			this.zb && (this.bp += " [front-to-back enabled]");
			this.Cb || (this.Zc = document.createElement("canvas"), jQuery(this.Zc).appendTo(this.canvas.parentNode), this.Zc.oncontextmenu = function() {
				return !1
			}, this.Zc.onselectstart = function() {
				return !1
			}, this.Zc.width = Math.round(this.Ql * this.devicePixelRatio), this.Zc.height = Math.round(this.Sj * this.devicePixelRatio), jQuery(this.Zc).css({
				width: this.Ql + "px",
				height: this.Sj + "px"
			}), this.Jt(), this.hq = this.Zc.getContext("2d"));
			this.ja = new Ub(this.ga, this.$h, this.zb);
			this.ja.qi(this.canvas.width, this.canvas.height);
			this.ja.Wr = 0 !== this.bx;
			this.nb = null;
			this.canvas.addEventListener("webglcontextlost", function(a) {
				a.preventDefault();
				b.kz();
				fa("[Construct 2] WebGL context lost");
				window.cr_setSuspended(!0)
			}, !1);
			this.canvas.addEventListener("webglcontextrestored", function() {
				b.ja.ps();
				b.ja.qi(b.ja.width, b.ja.height, !0);
				b.zc = null;
				b.kc = null;
				b.Oo[0] = null;
				b.Oo[1] = null;
				b.lz();
				b.Ta = !0;
				fa("[Construct 2] WebGL context restored");
				window.cr_setSuspended(!1)
			}, !1);
			e = 0;
			for (d = this.da.length; e < d; e++) for (k = this.da[e], f = 0, g = k.Da.length; f < g; f++) m = k.Da[f], m.nc = this.ja.Yo(m.id), m.bf = this.ja.mq(m.nc), this.Aj = this.Aj || this.ja.Pk(m.nc);
			e = 0;
			for (d = this.$e.length; e < d; e++) {
				p = this.$e[e];
				f = 0;
				for (g = p.Da.length; f < g; f++) m = p.Da[f], m.nc = this.ja.Yo(m.id), m.bf = this.ja.mq(m.nc);
				p.gf();
				f = 0;
				for (g = p.Ia.length; f < g; f++) {
					l = p.Ia[f];
					k = 0;
					for (h = l.Da.length; k < h; k++) m = l.Da[k], m.nc = this.ja.Yo(m.id), m.bf = this.ja.mq(m.nc), this.Aj = this.Aj || this.ja.Pk(m.nc);

					l.gf()
				}
			}
		} else {
			if (0 < this.sd && this.Yc) {
				this.canvas = null;
				document.oncontextmenu = function() {
					return !1
				};
				document.onselectstart = function() {
					return !1
				};
				this.nb = AppMobi.canvas.getContext("2d");
				try {
					this.nb.samplingMode = this.Wa ? "smooth" : "sharp", this.nb.globalScale = 1, this.nb.HTML5CompatibilityMode = !0, this.nb.imageSmoothingEnabled = this.Wa
				} catch (r) {}
				0 !== this.width && 0 !== this.height && (this.nb.width = this.width, this.nb.height = this.height)
			}
			this.nb || (this.He ? (e = {
				antialias: !! this.Wa,
				alpha: d
			}, this.nb = this.canvas.getContext("2d", e)) : (e = {
				alpha: d
			}, this.nb = this.canvas.getContext("2d", e)), this.nb.webkitImageSmoothingEnabled = this.Wa, this.nb.mozImageSmoothingEnabled = this.Wa, this.nb.msImageSmoothingEnabled = this.Wa, this.nb.imageSmoothingEnabled = this.Wa);
			this.hq = this.Zc = null
		}
		this.tu = function(a) {
			b.Sb(!1, a)
		};
		window == window.top || this.Cb || this.sp || this.Xi || (document.addEventListener("mousedown", function() {
			window.focus()
		}, !0), document.addEventListener("touchstart", function() {
			window.focus()
		}, !0));
		"undefined" !== typeof cr_is_preview && (this.He && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (fa("Reloading for continuous preview"), this.Km = "__c2_continuouspreview", this.al = !0), this.rz && !this.$h && (jQuery(window).focus(function() {
			b.setSuspended(!1)
		}), jQuery(window).blur(function() {
			b.setSuspended(!0)
		})));
		window.addEventListener("blur", function() {
			b.nj()
		});
		this.Cb || (e = function(a) {
			if (Tb(a) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
				document.activeElement.blur()
			} catch (b) {}
		}, window.navigator.pointerEnabled ? document.addEventListener("pointerdown", e) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", e) : document.addEventListener("touchstart", e), document.addEventListener("mousedown", e));
		0 === this.sd && this.$g && 1 < this.devicePixelRatio && this.setSize(this.Bc, this.Ac, !0);
		this.yu();
		this.Gy();
		this.go();
		this.fa = {}
	};
	b.prototype.setSize = function(a, b, c) {
		var e = 0,
			d = 0,
			f = 0,
			g = 0,
			g = 0,
			k = this.Xy && this.ws && !navigator.standalone && !this.Cb && !this.je;
		k && (b += 60);
		if (this.yk !== a || this.xk !== b || c) {
			this.yk = a;
			this.xk = b;
			var h = this.sd,
				m = (document.mozFullScreen || document.webkitIsFullScreen || !! document.msFullscreenElement || document.fullScreen || this.ok) && !this.je;
			if (m || 0 !== this.sd || c) m && 0 < this.Rh && (h = this.Rh), c = this.devicePixelRatio, 4 <= h ? (f = this.Bc / this.Ac, a / b > f ? (f *= b, 5 === h ? (g = f * c / this.Bc, 1 < g ? g = Math.floor(g) : 1 > g && (g = 1 / Math.ceil(1 / g)), f = this.Bc * g / c, g = this.Ac * g / c, e = (a - f) / 2, d = (b - g) / 2, a = f, b = g) : (e = (a - f) / 2, a = f)) : (g = a / f, 5 === h ? (g = g * c / this.Ac, 1 < g ? g = Math.floor(g) : 1 > g && (g = 1 / Math.ceil(1 / g)), f = this.Bc * g / c, g = this.Ac * g / c, e = (a - f) / 2, d = (b - g) / 2, a = f) : d = (b - g) / 2, b = g), m && !this.Zg && (d = e = 0)) : this.Zg && this.ok && 0 === this.cs && (e = Math.floor((a - this.Bc) / 2), d = Math.floor((b - this.Ac) / 2), a = this.Bc, b = this.Ac), 2 > h && (this.Nj = c), this.$g && this.Bs && 1 < c && (1024 <= a && (a = 1023), 1024 <= b && (b = 1023)), this.Ql = Math.round(a), this.Sj = Math.round(b), this.width = Math.round(a * c), this.height = Math.round(b * c), this.Ta = !0, this.Ku ? (this.wa = this.width, this.ua = this.height, this.ge = !0) : this.width < this.Bc && this.height < this.Ac || 1 === h ? (this.wa = this.width, this.ua = this.height, this.ge = !0) : (this.wa = this.Bc, this.ua = this.Ac, this.ge = !1, 2 === h ? (f = this.Bc / this.Ac, h = this.yk / this.xk, h < f ? this.wa = this.ua * h : h > f && (this.ua = this.wa / h)) : 3 === h && (f = this.Bc / this.Ac, h = this.yk / this.xk, h > f ? this.wa = this.ua * h : h < f && (this.ua = this.wa / h))), this.Mr && !this.Cb && (jQuery(this.Mr).css({
				width: Math.round(a) + "px",
				height: Math.round(b) + "px",
				"margin-left": Math.floor(e) + "px",
				"margin-top": Math.floor(d) + "px"
			}), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
				width: Math.round(a) + "px",
				height: Math.round(b) + "px"
			})), this.canvas && (this.canvas.width = Math.round(a * c), this.canvas.height = Math.round(b * c), this.Ye ? (this.canvas.style.left = Math.floor(e) + "px", this.canvas.style.top = Math.floor(d) + "px", this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(b) + "px") : this.$g && !this.Cb && (this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(b) + "px")), this.Zc && (this.Zc.width = Math.round(a * c), this.Zc.height = Math.round(b * c), this.Zc.style.width = this.Ql + "px", this.Zc.style.height = this.Sj + "px"), this.ja && this.ja.qi(Math.round(a * c), Math.round(b * c)), this.Yc && this.nb && (this.nb.width = Math.round(a), this.nb.height = Math.round(b)), this.nb && (this.nb.webkitImageSmoothingEnabled = this.Wa, this.nb.mozImageSmoothingEnabled = this.Wa, this.nb.msImageSmoothingEnabled = this.Wa, this.nb.imageSmoothingEnabled = this.Wa), this.yu(), this.Cb || !k && !this.vp || window.setTimeout(function() {
				window.scrollTo(0, 1)
			}, 100)
		}
	};
	b.prototype.yu = function() {
		if (this.qw && 0 !== this.fq) {
			var a = "portrait";
			2 === this.fq && (a = "landscape");
			try {
				screen.orientation && screen.orientation.lock ? screen.orientation.lock(a) : screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a)
			} catch (b) {
				console && console.warn && console.warn("Failed to lock orientation: ", b)
			}
		}
	};
	b.prototype.kz = function() {
		this.ja.Aw();
		this.up = !0;
		var a, b, c;
		a = 0;
		for (b = this.da.length; a < b; a++) c = this.da[a], c.Yp && c.Yp()
	};
	b.prototype.lz = function() {
		this.up = !1;
		var a, b, c;
		a = 0;
		for (b = this.da.length; a < b; a++) c = this.da[a], c.bq && c.bq()
	};
	b.prototype.Jt = function() {
		if (!this.Cb) {
			var a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.ok) && !this.je ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
			a.position = "absolute";
			jQuery(this.Zc).css(a)
		}
	};
	var k = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
	b.prototype.setSuspended = function(a) {
		var b;
		if (a && !this.pk) for (fa("[Construct 2] Suspending"), this.pk = !0, -1 !== this.oq && k && k(this.oq), -1 !== this.Jq && clearTimeout(this.Jq), a = 0, b = this.bl.length; a < b; a++) this.bl[a](!0);
		else if (!a && this.pk) {
			fa("[Construct 2] Resuming");
			this.pk = !1;
			this.Hm = qb();
			this.ei = qb();
			a = this.Gk = this.hm = 0;
			for (b = this.bl.length; a < b; a++) this.bl[a](!1);
			this.Sb(!1)
		}
	};
	b.prototype.Br = function(a) {
		this.bl.push(a)
	};
	b.prototype.Gg = function(a) {
		return this.Vm[a]
	};
	b.prototype.Mm = function(a) {
		a && a.project || ha("Project model unavailable");
		a = a.project;
		this.name = a[0];
		this.as = a[1];
		this.sd = a[12];
		this.cs = a[12];
		this.Bc = a[10];
		this.Ac = a[11];
		this.Dt = this.Bc / 2;
		this.Et = this.Ac / 2;
		this.Cb && !this.Ye && (4 <= a[12] || 0 === a[12]) && (fa("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.cs = this.sd = 3);
		this.Tq = a[18];
		this.dh = a[19];
		if (0 === this.dh) {
			var b = new Image;
			b.crossOrigin = "anonymous";
			b.src = "loading-logo.png";
			this.bh = {
				Rm: b
			}
		} else if (4 === this.dh) {
			b = new Image;
			b.src = "";
			var c = new Image;
			c.src = "";
			var e = new Image;
			e.src = "";
			var d = new Image;
			d.src = "";
			var f = new Image;
			f.src = "";
			var g = new Image;
			g.src = "";
			var k = new Image;
			k.src = "";
			var h = new Image;
			h.src = "";
			var m = new Image;
			m.src = "";
			var p = new Image;
			p.src = "";
			var l = new Image;
			l.src = "";
			var q = new Image;
			q.src = "";
			this.bh = {
				Rm: [b, c, e, d],
				wz: [f, g, k, h],
				qA: [m, p, l, q]
			}
		}
		this.Kk = a[21];
		this.Vm = md();
		this.Gf = new M(this);
		b = 0;
		for (c = a[2].length; b < c; b++) k = a[2][b], e = this.Gg(k[0]), Vb(k, e.prototype), h = new e(this), h.zn = k[1], h.ah = k[2], h.et = k[9], h.qa && h.qa(), this.plugins.push(h);
		this.Vm = md();
		b = 0;
		for (c = a[3].length; b < c; b++) {
			k = a[3][b];
			f = this.Gg(k[1]);
			h = null;
			e = 0;
			for (d = this.plugins.length; e < d; e++) if (this.plugins[e] instanceof f) {
				h = this.plugins[e];
				break
			}
			m = new h.Va(h);
			m.name = k[0];
			m.Ea = k[2];
			m.mp = k[3].slice(0);
			m.pA = k[3].length;
			m.rw = k[4];
			m.Zx = k[5];
			m.Xa = k[11];
			m.Ea ? (m.jj = [], m.Wf = this.Xj++, m.Jb = null) : (m.jj = null, m.Wf = -1, m.Jb = []);
			m.cm = null;
			m.Pi = null;
			m.Xr = null;
			m.td = !1;
			m.Ud = null;
			k[6] ? (m.Hq = k[6][0], m.ru = k[6][1], m.Iq = k[6][2]) : (m.Hq = null, m.ru = 0, m.Iq = 0);
			k[7] ? m.Ed = k[7] : m.Ed = null;
			m.index = b;
			m.G = [];
			m.Ul = [];
			m.qh = [new Wb(m)];
			m.Sf = 0;
			m.Be = null;
			m.Hw = 0;
			m.vj = !0;
			m.Nn = Xb;
			m.ey = Yb;
			m.jy = Zb;
			m.Ma = $b;
			m.Qk = ac;
			m.ln = bc;
			m.pi = cc;
			m.km = dc;
			m.Qo = ec;
			m.Uo = fc;
			m.xe = hc;
			m.Vo = ic;
			m.Ml = new Bb(this.Bc, this.Ac);
			m.xl = !0;
			m.yl = !1;
			m.fa = {};
			m.toString = jc;
			m.gc = [];
			e = 0;
			for (d = k[8].length; e < d; e++) {
				p = k[8][e];
				l = this.Gg(p[1]);
				q = null;
				f = 0;
				for (g = this.gc.length; f < g; f++) if (this.gc[f] instanceof l) {
					q = this.gc[f];
					break
				}
				q || (q = new l(this), q.Rp = [], q.Um = new ba, q.qa && q.qa(), this.gc.push(q), Vc.aA && q instanceof Vc.aA && (this.ku = q)); - 1 === q.Rp.indexOf(m) && q.Rp.push(m);
				f = new q.Va(q, m);
				f.name = p[0];
				f.Xa = p[2];
				f.qa();
				m.gc.push(f)
			}
			m.global = k[9];
			m.qp = k[10];
			m.Da = [];
			e = 0;
			for (d = k[12].length; e < d; e++) m.Da.push({
				id: k[12][e][0],
				name: k[12][e][1],
				nc: -1,
				bf: !1,
				sc: !0,
				index: e
			});
			m.IB = k[13];
			this.Tq && !m.Ea && !m.qp && h.ah || m.qa();
			m.name && (this.types[m.name] = m);
			this.da.push(m);
			h.zn && (e = new h.Ja(m), e.uid = this.Kk++, e.Ot = this.gt++, e.Xh = 0, e.ek = kc, e.toString = lc, e.ca = k[14], e.qa(), m.G.push(e), this.ig[e.uid.toString()] = e)
		}
		b = 0;
		for (c = a[4].length; b < c; b++) for (f = a[4][b], g = this.da[f[0]], e = 1, d = f.length; e < d; e++) k = this.da[f[e]], k.Jb.push(g), g.jj.push(k);
		b = 0;
		for (c = a[28].length; b < c; b++) {
			f = a[28][b];
			g = [];
			e = 0;
			for (d = f.length; e < d; e++) g.push(this.da[f[e]]);
			e = 0;
			for (d = g.length; e < d; e++) g[e].td = !0, g[e].Ud = g
		}
		if (0 < this.Xj) for (b = 0, c = this.da.length; b < c; b++) if (k = this.da[b], !k.Ea && k.Jb.length) {
			k.cm = Array(this.Xj);
			k.Pi = Array(this.Xj);
			k.Xr = Array(this.Xj);
			m = [];
			e = q = l = p = 0;
			for (d = k.Jb.length; e < d; e++) for (h = k.Jb[e], k.cm[h.Wf] = p, p += h.pA, k.Pi[h.Wf] = l, l += h.rw, k.Xr[h.Wf] = q, q += h.Zx, f = 0, g = h.Da.length; f < g; f++) m.push(Ba({}, h.Da[f]));
			k.Da = m.concat(k.Da);
			e = 0;
			for (d = k.Da.length; e < d; e++) k.Da[e].index = e
		}
		b = 0;
		for (c = a[5].length; b < c; b++) k = a[5][b], e = new mc(this, k), this.Gp[e.name] = e, this.$e.push(e);
		b = 0;
		for (c = a[6].length; b < c; b++) k = a[6][b], e = new nc(this, k), this.Go[e.name] = e, this.Vf.push(e);
		b = 0;
		for (c = this.Vf.length; b < c; b++) this.Vf[b].cc();
		b = 0;
		for (c = this.Vf.length; b < c; b++) this.Vf[b].Qq();
		b = 0;
		for (c = this.Mn.length; b < c; b++) this.Mn[b].cc();
		J(this.Mn);
		this.pw = a[7];
		this.em = a[8];
		this.kg = a[9];
		this.Nj = 1;
		this.mx = a[13];
		this.Wa = a[14];
		this.jo = a[15];
		this.nA = a[17];
		this.fq = a[20];
		this.qw = 0 < this.fq;
		this.rz = a[22];
		this.ge = this.Ku = a[23];
		this.bx = a[24];
		this.xz = a[25];
		this.zb = a[27] && !this.Yg;
		this.An = Date.now();
		J(this.Vm);
		this.Ny()
	};
	var m = !1;
	b.prototype.Ju = function(a, b) {
		a.cocoonLazyLoad = !0;
		a.onerror = function(b) {
			m = a.Jr = !0;
			console && console.error && console.error("Error loading image '" + a.src + "': ", b)
		};
		this.Ye ? a.src = b : a.src || ("undefined" !== typeof XAPKReader ? XAPKReader.get(b, function(b) {
			a.src = b
		}, function(c) {
			m = a.Jr = !0;
			console && console.error && console.error("Error extracting image '" + b + "' from expansion file: ", c)
		}) : (a.crossOrigin = "anonymous", a.src = b));
		this.Dj.push(a)
	};
	b.prototype.Wx = function(a) {
		var b, c;
		b = 0;
		for (c = this.Dj.length; b < c; b++) if (this.Dj[b].Dw === a) return this.Dj[b];
		return null
	};
	var q = 0,
		p = !1;
	b.prototype.Gy = function() {
		this.Gi && (q = this.Gi.Wz(this.pw))
	};
	b.prototype.Er = function() {
		var a = q,
			b = 0,
			c = 0,
			e = !0,
			d, f, c = 0;
		for (d = this.Dj.length; c < d; c++) {
			f = this.Dj[c];
			var g = f.Cw;
			if (!g || 0 >= g) g = 5E4;
			a += g;
			f.src && (f.complete || f.loaded) && !f.Jr ? b += g : e = !1
		}
		e && this.xz && this.Gi && (p || (this.Gi.cA(), p = !0), c = this.Gi.ky(), b += c, c < q && (e = !1));
		this.cf = 0 == a ? 1 : b / a;
		return e
	};
	var t = !1;
	b.prototype.go = function() {
		if (this.nb || this.ja) {
			var a = this.nb || this.hq;
			this.Zc && this.Jt();
			this.cf = 0;
			this.Fs = -1;
			var b = this;
			if (this.Er() && (4 !== this.dh || t)) this.Hy();
			else {
				var c = Date.now() - this.An;
				if (a) {
					var e = this.width,
						d = this.height,
						f = this.devicePixelRatio;
					if (3 > this.dh && (this.He || 500 <= c && this.Fs != this.cf)) {
						a.clearRect(0, 0, e, d);
						var c = e / 2,
							d = d / 2,
							e = 0 === this.dh && this.bh.Rm.complete,
							g = 40 * f,
							k = 0,
							h = 80 * f,
							p;
						if (e) {
							var l = this.bh.Rm,
								h = l.width * f;
							p = l.height * f;
							g = h / 2;
							k = p / 2;
							a.drawImage(l, ta(c - g), ta(d - k), h, p)
						}
						1 >= this.dh ? (c = ta(c - g) + .5, d = ta(d + (k + (e ? 12 * f : 0))) + .5, a.fillStyle = m ? "red" : "DodgerBlue", a.fillRect(c, d, Math.floor(h * this.cf), 6 * f), a.strokeStyle = "black", a.strokeRect(c, d, h, 6 * f), a.strokeStyle = "white", a.strokeRect(c - 1 * f, d - 1 * f, h + 2 * f, 8 * f)) : 2 === this.dh && (a.font = this.Ye ? "12pt ArialMT" : "12pt Arial", a.fillStyle = m ? "#f00" : "#999", a.HB = "middle", f = Math.round(100 * this.cf) + "%", e = a.measureText ? a.measureText(f) : null, a.fillText(f, c - (e ? e.width : 0) / 2, d));
						this.Fs = this.cf
					} else if (4 === this.dh) {
						this.jx(a);
						n ? n(function() {
							b.go()
						}) : setTimeout(function() {
							b.go()
						}, 16);
						return
					}
				}
				setTimeout(function() {
					b.go()
				}, this.He ? 10 : 100)
			}
		}
	};
	var u = -1,
		v = "undefined" === typeof cr_is_preview ? 200 : 0,
		r = !0,
		z = !1,
		B = 0,
		D = 0,
		A = "undefined" === typeof cr_is_preview ? 3E3 : 0,
		C = null,
		E = null,
		w = 0;
	b.prototype.jx = function(a) {
		if (!t) {
			for (var b = Math.ceil(this.width), c = Math.ceil(this.height), e = this.bh.Rm, f = this.bh.wz, g = this.bh.qA, k = 0; 4 > k; ++k) if (!e[k].complete || !f[k].complete || !g[k].complete) return;
			0 === w && (u = Date.now());
			var k = Date.now(),
				h = !1,
				p = a,
				l, q;
			r || z ? (a.clearRect(0, 0, b, c), C && C.width === b && C.height === c || (C = document.createElement("canvas"), C.width = b, C.height = c, E = C.getContext("2d")), p = E, h = !0, r && 1 === w && (u = Date.now())) : a.globalAlpha = 1;
			p.fillStyle = "#333333";
			p.fillRect(0, 0, b, c);
			256 < this.Sj ? (l = Ma(.22 * c, 105, .6 * b), q = .25 * l, p.drawImage(d(f, l), .5 * b - l / 2, .2 * c - q / 2, l, q), q = l = Math.min(.395 * c, .95 * b), p.drawImage(d(e, l), .5 * b - l / 2, .485 * c - q / 2, l, q), l = Ma(.22 * c, 105, .6 * b), q = .25 * l, p.drawImage(d(g, l), .5 * b - l / 2, .868 * c - q / 2, l, q), p.fillStyle = "#3C3C3C", l = b, q = Math.max(.005 * c, 2), p.fillRect(0, .8 * c - q / 2, l, q), p.fillStyle = m ? "red" : "#E0FF65", l = b * this.cf, p.fillRect(.5 * b - l / 2, .8 * c - q / 2, l, q)) : (q = l = .55 * c, p.drawImage(d(e, l), .5 * b - l / 2, .45 * c - q / 2, l, q), p.fillStyle = "#3C3C3C", l = b, q = Math.max(.005 * c, 2), p.fillRect(0, .85 * c - q / 2, l, q), p.fillStyle = m ? "red" : "#E0FF65", l = b * this.cf, p.fillRect(.5 * b - l / 2, .85 * c - q / 2, l, q));
			h && (r ? a.globalAlpha = 0 === w ? 0 : Math.min((k - u) / 300, 1) : z && (a.globalAlpha = Math.max(1 - (k - D) / 300, 0)), a.drawImage(C, 0, 0, b, c));
			r && 300 <= k - u && 2 <= w && (r = !1, B = k);
			!r && k - B >= A && !z && 1 <= this.cf && (z = !0, D = k);
			if (z && k - D >= 300 + v || "undefined" !== typeof cr_is_preview && 1 <= this.cf && 500 > Date.now() - u) t = !0, z = r = !1, this.bh = E = C = null;
			++w
		}
	};
	b.prototype.Hy = function() {
		this.Zc && (this.canvas.parentNode.removeChild(this.Zc), this.Zc = this.hq = null);
		this.An = Date.now();
		this.ei = qb();
		var a, b, c;
		if (this.Tq) for (a = 0, b = this.da.length; a < b; a++) c = this.da[a], c.Ea || c.qp || !c.pb.ah || c.qa();
		else this.tk = !1;
		a = 0;
		for (b = this.$e.length; a < b; a++) this.$e[a].Ew();
		2 <= this.sd && (a = this.Bc / this.Ac, b = this.width / this.height, this.Nj = 2 !== this.sd && b > a || 2 === this.sd && b < a ? this.height / this.Ac : this.width / this.Bc);
		this.as ? this.Gp[this.as].Eq() : this.$e[0].Eq();
		this.Tq || (this.fj = 1, this.trigger(M.prototype.L.Yn, null));
		navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
		a = 0;
		for (b = this.da.length; a < b; a++) c = this.da[a], c.jz && c.jz();
		document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.Sb(!1);
		this.Yc && AppMobi.webview.execute("onGameReady();")
	};
	b.prototype.Sb = function(b, e, d) {
		if (this.qb) {
			var f = qb();
			if (d || !this.pk || b) {
				b || (n ? this.oq = n(this.tu) : this.Jq = setTimeout(this.tu, this.$h ? 1 : 16));
				e = e || f;
				var g = this.sd;
				((d = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !! document.msFullscreenElement) && !this.je) || this.ok) && 0 < this.Rh && (g = this.Rh);
				0 < g && (!this.bj || window.self !== window.top) && (g = window.innerHeight, this.yk === window.innerWidth && this.xk === g || this.setSize(a(), c()));
				this.Cb || (d ? (this.fm || (this.No = jQuery(this.canvas).css("margin") || "0", this.fm = !0), this.kk || this.Zg || jQuery(this.canvas).css({
					"margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
					"margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
				})) : this.fm ? (this.kk || this.Zg || jQuery(this.canvas).css("margin", this.No), this.No = "", this.fm = !1, 0 === this.sd && this.setSize(Math.round(this.mt / this.devicePixelRatio), Math.round(this.lt / this.devicePixelRatio), !0)) : (this.mt = this.width, this.lt = this.height));
				this.tk && (d = this.Er(), this.fj = this.cf, d && (this.tk = !1, this.cf = 1, this.trigger(M.prototype.L.Yn, null)));
				this.cz(e);
				!this.Ta && !this.He || this.up || this.al || b || (this.Ta = !1, this.ja ? this.De() : this.Uf(), this.Zk && (this.canvas && this.canvas.toDataURL && (this.iu = this.canvas.toDataURL(this.Zk[0], this.Zk[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.iu), this.trigger(M.prototype.L.pv, null)), this.Zk = null));
				this.CB || (this.tg++, this.Qh++, this.hm++);
				this.Gk += qb() - f
			}
		}
	};
	b.prototype.cz = function(a) {
		var b, c, e, d, f, g, k, h;
		1E3 <= a - this.ei && (this.ei += 1E3, 1E3 <= a - this.ei && (this.ei = a), this.Mo = this.hm, this.hm = 0, this.wo = this.Gk, this.Gk = 0);
		0 !== this.Hm && (b = a - this.Hm, 0 > b && (b = 0), this.Sg = b / 1E3, .5 < this.Sg ? this.Sg = 0 : this.Sg > 1 / this.ct && (this.Sg = 1 / this.ct));
		this.Hm = a;
		this.Ha = this.Sg * this.vg;
		this.Jc.add(this.Ha);
		this.zg.add(this.Sg);
		a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !! document.msFullscreenElement || this.ok) && !this.je;
		2 <= this.sd || a && 0 < this.Rh ? (b = this.Bc / this.Ac, c = this.width / this.height, e = this.sd, a && 0 < this.Rh && (e = this.Rh), this.Nj = 2 !== e && c > b || 2 === e && c < b ? this.height / this.Ac : this.width / this.Bc, this.qb && (this.qb.Ut(this.qb.scrollX), this.qb.Vt(this.qb.scrollY))) : this.Nj = this.$g ? this.devicePixelRatio : 1;
		this.ed();
		this.ke++;
		this.Gf.Nz();
		this.ke--;
		this.ed();
		this.ke++;
		c = this.kt.jf();
		a = 0;
		for (b = c.length; a < b; a++) c[a].EB();
		a = 0;
		for (b = this.da.length; a < b; a++) if (g = this.da[a], !g.Ea && (g.gc.length || g.Jb.length)) for (c = 0, e = g.G.length; c < e; c++) for (k = g.G[c], d = 0, f = k.Ca.length; d < f; d++) k.Ca[d].Sb();
		a = 0;
		for (b = this.da.length; a < b; a++) if (g = this.da[a], !g.Ea && (g.gc.length || g.Jb.length)) for (c = 0, e = g.G.length; c < e; c++) for (k = g.G[c], d = 0, f = k.Ca.length; d < f; d++) h = k.Ca[d], h.vz && h.vz();
		c = this.Tp.jf();
		a = 0;
		for (b = c.length; a < b; a++) c[a].Sb();
		this.ke--;
		this.Iy();
		for (a = 0; this.Oj && 10 > a++;) this.Vr(this.Oj);
		a = 0;
		for (b = this.Vf.length; a < b; a++) this.Vf[a].fp = !1;
		this.qb.Oh && this.qb.Oh.mc();
		J(this.Sk);
		this.ke++;
		a = 0;
		for (b = this.da.length; a < b; a++) if (g = this.da[a], !g.Ea && (g.gc.length || g.Jb.length)) for (c = 0, e = g.G.length; c < e; c++) for (k = g.G[c], d = 0, f = k.Ca.length; d < f; d++) h = k.Ca[d], h.Gn && h.Gn();
		c = this.Up.jf();
		a = 0;
		for (b = c.length; a < b; a++) c[a].Gn();
		this.ke--
	};
	b.prototype.nj = function() {
		var a, b, c, e, d, f, g, k, h;
		a = 0;
		for (b = this.da.length; a < b; a++) if (g = this.da[a], !g.Ea) for (c = 0, e = g.G.length; c < e; c++) if (k = g.G[c], k.nj && k.nj(), k.Ca) for (d = 0, f = k.Ca.length; d < f; d++) h = k.Ca[d], h.nj && h.nj()
	};
	b.prototype.Vr = function(a) {
		var b = this.qb;
		this.qb.eA();
		var c, e, d, f, g, k, h;
		if (this.ja) for (c = 0, e = this.da.length; c < e; c++) g = this.da[c], g.Ea || !g.Pq || g.global && 0 !== g.G.length || -1 !== a.ik.indexOf(g) || g.Pq();
		b == a && J(this.Gf.Qd);
		J(this.Sk);
		a.Eq();
		c = 0;
		for (e = this.da.length; c < e; c++) if (g = this.da[c], g.global || g.pb.zn) for (a = 0, b = g.G.length; a < b; a++) if (k = g.G[a], k.Xp && k.Xp(), k.Ca) for (d = 0, f = k.Ca.length; d < f; d++) h = k.Ca[d], h.Xp && h.Xp();
		this.Ta = !0;
		this.ed()
	};
	b.prototype.Hn = function(a) {
		this.Tp.add(a)
	};
	b.prototype.gA = function(a) {
		this.Up.add(a)
	};
	b.prototype.Wg = function(a) {
		return a && -1 !== a.Jk ? this.Sg * a.Jk : this.Ha
	};
	b.prototype.Uf = function() {
		this.qb.Uf(this.nb);
		this.Yc && this.nb.present()
	};
	b.prototype.De = function() {
		this.zb && (this.Mh = 1, this.qb.Ni(this.ja));
		this.qb.De(this.ja);
		this.ja.zz()
	};
	b.prototype.io = function(a) {
		a && this.Yl.push(a)
	};
	b.prototype.Hz = function(a) {
		La(this.Yl, a)
	};
	b.prototype.Th = function(a) {
		a = a.toString();
		return this.ig.hasOwnProperty(a) ? this.ig[a] : null
	};
	var x = [];
	b.prototype.Eg = function(a) {
		var b, c;
		b = a.type.name;
		var e = null;
		if (this.Lh.hasOwnProperty(b)) {
			if (e = this.Lh[b], e.contains(a)) return
		} else e = x.length ? x.pop() : new ba, this.Lh[b] = e;
		e.add(a);
		this.Xg = !0;
		if (a.td) for (b = 0, c = a.siblings.length; b < c; b++) this.Eg(a.siblings[b]);
		this.pp && e.Bj.push(a);
		this.op || (this.ke++, this.trigger(Object.getPrototypeOf(a.type.pb).L.rv, a), this.ke--)
	};
	b.prototype.ed = function() {
		if (this.Xg) {
			var a, b, c, e, d, f;
			this.pp = !0;
			c = 0;
			for (d = this.We.length; c < d; ++c) for (a = this.We[c], b = a.type, b.G.push(a), e = 0, f = b.Jb.length; e < f; ++e) b.Jb[e].G.push(a), b.Jb[e].vj = !0;
			J(this.We);
			this.gv();
			pb(this.Lh);
			this.Xg = this.pp = !1
		}
	};
	b.prototype.gv = function() {
		for (var a in this.Lh) this.Lh.hasOwnProperty(a) && this.Pu(this.Lh[a])
	};
	b.prototype.Pu = function(a) {
		var b = a.jf(),
			c = b[0].type,
			e, d, f, g, k, h;
		rb(c.G, a);
		c.vj = !0;
		0 === c.G.length && (c.yl = !1);
		e = 0;
		for (d = c.Jb.length; e < d; ++e) h = c.Jb[e], rb(h.G, a), h.vj = !0;
		e = 0;
		for (d = this.Gf.Qd.length; e < d; ++e) if (k = this.Gf.Qd[e], k.yd.hasOwnProperty(c.index) && rb(k.yd[c.index].$f, a), !c.Ea) for (f = 0, g = c.Jb.length; f < g; ++f) h = c.Jb[f], k.yd.hasOwnProperty(h.index) && rb(k.yd[h.index].$f, a);
		if (k = b[0].V) {
			if (k.te) for (f = k.G, e = 0, d = f.length; e < d; ++e) g = f[e], a.contains(g) && (g.Ua(), k.$c.update(g, g.Nd, null), g.Nd.set(0, 0, -1, -1));
			rb(k.G, a);
			k.Vk(0)
		}
		for (e = 0; e < b.length; ++e) this.Ou(b[e], c);
		a.clear();
		x.push(a);
		this.Ta = !0
	};
	b.prototype.Ou = function(a, b) {
		var c, e, d;
		c = 0;
		for (e = this.Yl.length; c < e; ++c) this.Yl[c](a);
		a.Pg && b.Ml.update(a, a.Pg, null);
		(c = a.V) && c.pj(a, !0);
		if (a.Ca) for (c = 0, e = a.Ca.length; c < e; ++c) d = a.Ca[c], d.Lk && d.Lk(), d.behavior.Um.remove(a);
		this.kt.remove(a);
		this.Tp.remove(a);
		this.Up.remove(a);
		a.Lk && a.Lk();
		this.ig.hasOwnProperty(a.uid.toString()) && delete this.ig[a.uid.toString()];
		this.Wm--;
		100 > b.Ul.length && b.Ul.push(a)
	};
	b.prototype.yo = function(a, b, c, e) {
		if (a.Ea) {
			var d = ta(Math.random() * a.jj.length);
			return this.yo(a.jj[d], b, c, e)
		}
		return a.Be ? this.Qg(a.Be, b, !1, c, e, !1) : null
	};
	var K = [];
	b.prototype.Qg = function(a, b, c, e, d, f) {
		var g, k, h, m;
		if (!a) return null;
		var p = this.da[a[1]],
			l = p.pb.ah;
		if (this.tk && l && !p.qp || l && !this.ja && 11 === a[0][11]) return null;
		var q = b;
		l || (b = null);
		var r;
		p.Ul.length ? (r = p.Ul.pop(), r.pe = !0, p.pb.Ja.call(r, p)) : (r = new p.pb.Ja(p), r.pe = !1);
		!c || f || this.ig.hasOwnProperty(a[2].toString()) ? r.uid = this.Kk++ : r.uid = a[2];
		this.ig[r.uid.toString()] = r;
		r.Ot = this.gt++;
		r.Xh = p.G.length;
		g = 0;
		for (k = this.We.length; g < k; ++g) this.We[g].type === p && r.Xh++;
		r.ek = kc;
		r.toString = lc;
		h = a[3];
		if (r.pe) pb(r.fa);
		else {
			r.fa = {};
			if ("undefined" !== typeof cr_is_preview) for (r.ss = [], r.ss.length = h.length, g = 0, k = h.length; g < k; g++) r.ss[g] = h[g][1];
			r.yc = [];
			r.yc.length = h.length
		}
		g = 0;
		for (k = h.length; g < k; g++) r.yc[g] = h[g][0];
		if (l) {
			var n = a[0];
			r.x = ia(e) ? n[0] : e;
			r.y = ia(d) ? n[1] : d;
			r.z = n[2];
			r.width = n[3];
			r.height = n[4];
			r.depth = n[5];
			r.M = n[6];
			r.opacity = n[7];
			r.Hd = n[8];
			r.Id = n[9];
			r.fd = n[10];
			g = n[11];
			!this.ja && p.Da.length && (r.fd = g);
			r.Pj = Kb(r.fd);
			this.ga && Qb(r, r.fd, this.ga);
			if (r.pe) {
				g = 0;
				for (k = n[12].length; g < k; g++) for (h = 0, m = n[12][g].length; h < m; h++) r.Kb[g][h] = n[12][g][h];
				r.Ab.set(0, 0, 0, 0);
				r.Pg.set(0, 0, -1, -1);
				r.Nd.set(0, 0, -1, -1);
				r.Bb.Wk(r.Ab);
				J(r.oo)
			} else {
				r.Kb = n[12].slice(0);
				g = 0;
				for (k = r.Kb.length; g < k; g++) r.Kb[g] = n[12][g].slice(0);
				r.jb = [];
				r.Ig = [];
				r.Ig.length = p.Da.length;
				r.Ab = new xa(0, 0, 0, 0);
				r.Pg = new xa(0, 0, -1, -1);
				r.Nd = new xa(0, 0, -1, -1);
				r.Bb = new ya;
				r.oo = [];
				r.ra = oc;
				r.yB = pc;
				r.gd = qc;
				r.Ua = rc;
				r.mA = sc;
				r.Gu = tc;
				r.vf = uc
			}
			r.ug = !1;
			r.jA = 0;
			r.iA = 0;
			r.hA = null;
			14 === n.length && (r.ug = !0, r.jA = n[13][0], r.iA = n[13][1], r.hA = n[13][2]);
			g = 0;
			for (k = p.Da.length; g < k; g++) r.Ig[g] = !0;
			r.rg = !0;
			r.gf = vc;
			r.gf();
			r.Hu = !! r.jb.length;
			r.no = !0;
			r.ro = !0;
			p.xl = !0;
			r.visible = !0;
			r.Jk = -1;
			r.V = b;
			r.kf = b.G.length;
			r.Mh = 0;
			"undefined" === typeof r.Ra && (r.Ra = null);
			this.Ta = r.Of = !0
		}
		var t;
		J(K);
		g = 0;
		for (k = p.Jb.length; g < k; g++) K.push.apply(K, p.Jb[g].gc);
		K.push.apply(K, p.gc);
		if (r.pe) for (g = 0, k = K.length; g < k; g++) {
			var z = K[g];
			t = r.Ca[g];
			t.pe = !0;
			z.behavior.Ja.call(t, z, r);
			n = a[4][g];
			h = 0;
			for (m = n.length; h < m; h++) t.ca[h] = n[h];
			t.qa();
			z.behavior.Um.add(r)
		} else for (r.Ca = [], g = 0, k = K.length; g < k; g++) z = K[g], t = new z.behavior.Ja(z, r), t.pe = !1, t.ca = a[4][g].slice(0), t.qa(), r.Ca.push(t), z.behavior.Um.add(r);
		n = a[5];
		if (r.pe) for (g = 0, k = n.length; g < k; g++) r.ca[g] = n[g];
		else r.ca = n.slice(0);
		this.We.push(r);
		this.Xg = !0;
		b && (b.Mj(r, !0), 1 !== b.Ld || 1 !== b.Md) && (p.yl = !0);
		this.Wm++;
		if (p.td) {
			if (r.td = !0, r.pe ? J(r.siblings) : r.siblings = [], !c && !f) {
				g = 0;
				for (k = p.Ud.length; g < k; g++) if (p.Ud[g] !== p) {
					if (!p.Ud[g].Be) return null;
					r.siblings.push(this.Qg(p.Ud[g].Be, q, !1, l ? r.x : e, l ? r.y : d, !0))
				}
				g = 0;
				for (k = r.siblings.length; g < k; g++) for (r.siblings[g].siblings.push(r), h = 0; h < k; h++) g !== h && r.siblings[g].siblings.push(r.siblings[h])
			}
		} else r.td = !1, r.siblings = null;
		r.qa();
		g = 0;
		for (k = r.Ca.length; g < k; g++) r.Ca[g].Kt && r.Ca[g].Kt();
		return r
	};
	b.prototype.ck = function(a) {
		var b, c;
		b = 0;
		for (c = this.qb.Ia.length; b < c; b++) {
			var e = this.qb.Ia[b];
			if (Sb(e.name, a)) return e
		}
		return null
	};
	b.prototype.Zf = function(a) {
		a = ta(a);
		0 > a && (a = 0);
		a >= this.qb.Ia.length && (a = this.qb.Ia.length - 1);
		return this.qb.Ia[a]
	};
	b.prototype.uo = function(a) {
		var b, c;
		b = 0;
		for (c = a.length; b < c; b++) a[b].Ma().bb = !0
	};
	b.prototype.Qk = function(a) {
		var b, c;
		b = 0;
		for (c = a.length; b < c; b++) a[b].Qk()
	};
	b.prototype.ln = function(a) {
		var b, c;
		b = 0;
		for (c = a.length; b < c; b++) a[b].ln()
	};
	b.prototype.pi = function(a) {
		var b, c;
		b = 0;
		for (c = a.length; b < c; b++) a[b].pi()
	};
	b.prototype.Du = function(a) {
		if (a.xl) {
			var b, c, e = a.G;
			b = 0;
			for (c = e.length; b < c; ++b) e[b].Gu();
			e = this.We;
			b = 0;
			for (c = e.length; b < c; ++b) e[b].type === a && e[b].Gu();
			a.xl = !1
		}
	};
	b.prototype.So = function(a, b, c, e) {
		var d, g, f = a ? 1 !== a.Ld || 1 !== a.Md : !1;
		if (b.Ea) for (a = 0, d = b.jj.length; a < d; ++a) g = b.jj[a], f || g.yl ? Ia(e, g.G) : (this.Du(g), g.Ml.nn(c, e));
		else f || b.yl ? Ia(e, b.G) : (this.Du(b), b.Ml.nn(c, e))
	};
	b.prototype.ry = function(a, b, c, e) {
		var d, g;
		d = 0;
		for (g = b.length; d < g; ++d) this.So(a, b[d], c, e)
	};
	b.prototype.qy = function(a, b, c) {
		var e = this.ku;
		e && this.ry(a, e.Rp, b, c)
	};
	b.prototype.cl = function(a, b, c) {
		var e = a.Ma(),
			d, g, f, k, h, m;
		if (e.bb) for (e.bb = !1, J(e.G), d = 0, k = a.G.length; d < k; d++) f = a.G[d], f.Ua(), h = f.V.Vb(b, c, !0), m = f.V.Vb(b, c, !1), f.gd(h, m) && e.G.push(f);
		else {
			d = g = 0;
			for (k = e.G.length; d < k; d++) f = e.G[d], f.Ua(), h = f.V.Vb(b, c, !0), m = f.V.Vb(b, c, !1), f.gd(h, m) && (e.G[g] = e.G[d], g++);
			e.G.length = g
		}
		a.xe();
		return e.ep()
	};
	b.prototype.sh = function(a, b) {
		if (!(a && b && a !== b && a.Of && b.Of)) return !1;
		a.Ua();
		b.Ua();
		var c = a.V,
			e = b.V,
			d, g, f, k, h, m, p, r;
		if (c === e || c.Ld === e.Ld && e.Md === e.Md && c.scale === e.scale && c.M === e.M && c.pd === e.pd) {
			if (!a.Ab.Oy(b.Ab) || !a.Bb.ts(b.Bb) || a.ug && b.ug) return !1;
			if (a.ug) return this.qu(a, b);
			if (b.ug) return this.qu(b, a);
			p = a.Ra && !a.Ra.ai();
			d = b.Ra && !b.Ra.ai();
			if (!p && !d) return !0;
			p ? (a.Ra.Jh(a.width, a.height, a.M), p = a.Ra) : (this.ef.tj(a.Bb, a.x, a.y, a.width, a.height), p = this.ef);
			d ? (b.Ra.Jh(b.width, b.height, b.M), r = b.Ra) : (this.ef.tj(b.Bb, b.x, b.y, b.width, b.height), r = this.ef);
			return p.jk(r, b.x - a.x, b.y - a.y)
		}
		p = a.Ra && !a.Ra.ai();
		d = b.Ra && !b.Ra.ai();
		p ? (a.Ra.Jh(a.width, a.height, a.M), this.ef.bu(a.Ra)) : this.ef.tj(a.Bb, a.x, a.y, a.width, a.height);
		p = this.ef;
		d ? (b.Ra.Jh(b.width, b.height, b.M), this.Gq.bu(b.Ra)) : this.Gq.tj(b.Bb, b.x, b.y, b.width, b.height);
		r = this.Gq;
		d = 0;
		for (g = p.oe; d < g; d++) f = 2 * d, k = f + 1, h = p.ec[f], m = p.ec[k], p.ec[f] = c.ud(h + a.x, m + a.y, !0), p.ec[k] = c.ud(h + a.x, m + a.y, !1);
		p.Ua();
		d = 0;
		for (g = r.oe; d < g; d++) f = 2 * d, k = f + 1, h = r.ec[f], m = r.ec[k], r.ec[f] = e.ud(h + b.x, m + b.y, !0), r.ec[k] = e.ud(h + b.x, m + b.y, !1);
		r.Ua();
		return p.jk(r, 0, 0)
	};
	var H = new ya;
	new xa(0, 0, 0, 0);
	var P = [];
	b.prototype.qu = function(a, b) {
		var c, e, d, g, f = b.Ab,
			k = a.x,
			h = a.y;
		a.AB(f, P);
		var m = b.Ra && !b.Ra.ai();
		c = 0;
		for (e = P.length; c < e; ++c) if (d = P[c], g = d.Fz, f.Py(g, k, h) && (H.Wk(g), H.offset(k, h), H.ts(b.Bb))) if (m) if (b.Ra.Jh(b.width, b.height, b.M), d.Bf) {
			if (d.Bf.jk(b.Ra, b.x - (k + g.left), b.y - (h + g.top))) return J(P), !0
		} else {
			if (this.ef.tj(H, 0, 0, g.right - g.left, g.bottom - g.top), this.ef.jk(b.Ra, b.x, b.y)) return J(P), !0
		} else if (d.Bf) {
			if (this.ef.tj(b.Bb, 0, 0, b.width, b.height), d.Bf.jk(this.ef, -(k + g.left), -(h + g.top))) return J(P), !0
		} else return J(P), !0;
		J(P);
		return !1
	};
	b.prototype.zu = function(a, b) {
		if (!b) return !1;
		var c, e, d, g, f;
		c = 0;
		for (e = a.gc.length; c < e; c++) if (a.gc[c].behavior instanceof b) return !0;
		if (!a.Ea) for (c = 0, e = a.Jb.length; c < e; c++) for (f = a.Jb[c], d = 0, g = f.gc.length; d < g; d++) if (f.gc[d].behavior instanceof b) return !0;
		return !1
	};
	b.prototype.Nq = function(a) {
		return this.zu(a, Vc.VA)
	};
	b.prototype.Oq = function(a) {
		return this.zu(a, Vc.WA)
	};
	var O = [];
	b.prototype.si = function(a) {
		var b, c, e;
		a.Ua();
		this.qy(a.V, a.Ab, O);
		b = 0;
		for (c = O.length; b < c; ++b) if (e = O[b], e.fa.solidEnabled && this.sh(a, e)) return J(O), e;
		J(O);
		return null
	};
	b.prototype.Dz = function(a, b, c, e) {
		e = e || 50;
		var d = a.x,
			g = a.y,
			f, k = null,
			h = null;
		for (f = 0; f < e; f++) if (a.x = d + b * f, a.y = g + c * f, a.ra(), !this.sh(a, k) && ((k = this.si(a)) && (h = k), !k && !k)) return h && this.Bz(a, b, c, h), !0;
		a.x = d;
		a.y = g;
		a.ra();
		return !1
	};
	b.prototype.Bz = function(a, b, c, e) {
		var d = 2,
			g, f = !1;
		g = !1;
		for (var k = a.x, h = a.y; 16 >= d;) g = 1 / d, d *= 2, a.x += b * g * (f ? 1 : -1), a.y += c * g * (f ? 1 : -1), a.ra(), this.sh(a, e) ? g = f = !0 : (g = f = !1, k = a.x, h = a.y);
		g && (a.x = k, a.y = h, a.ra())
	};
	b.prototype.Ez = function(a) {
		var b = 0,
			c = a.x,
			e = a.y,
			d = 0,
			g = 0,
			f = 0,
			k = this.si(a);
		if (k) {
			for (; 100 >= b;) {
				switch (d) {
				case 0:
					g = 0;
					f = -1;
					b++;
					break;
				case 1:
					g = 1;
					f = -1;
					break;
				case 2:
					g = 1;
					f = 0;
					break;
				case 3:
					f = g = 1;
					break;
				case 4:
					g = 0;
					f = 1;
					break;
				case 5:
					g = -1;
					f = 1;
					break;
				case 6:
					g = -1;
					f = 0;
					break;
				case 7:
					f = g = -1
				}
				d = (d + 1) % 8;
				a.x = ta(c + g * b);
				a.y = ta(e + f * b);
				a.ra();
				if (!this.sh(a, k) && (k = this.si(a), !k)) return
			}
			a.x = c;
			a.y = e;
			a.ra()
		}
	};
	b.prototype.St = function(a, b) {
		a.Of && b.Of && this.Sk.push([a, b])
	};
	b.prototype.yw = function(a, b) {
		var c, e, d;
		c = 0;
		for (e = this.Sk.length; c < e; c++) if (d = this.Sk[c], d[0] == a && d[1] == b || d[0] == b && d[1] == a) return !0;
		return !1
	};
	b.prototype.ww = function(a, b, c) {
		var e = a.x,
			d = a.y,
			g = qa(10, eb(b, c, e, d)),
			f = Ua(b, c, e, d),
			k = this.si(a);
		if (!k) return Ra(f + sa);
		var h = k,
			m, p, r, l, q = Na(5);
		for (m = 1; 36 > m; m++) if (p = f - m * q, a.x = b + Math.cos(p) * g, a.y = c + Math.sin(p) * g, a.ra(), !this.sh(a, h) && (h = this.si(a), !h)) {
			r = p;
			break
		}
		36 === m && (r = Ra(f + sa));
		h = k;
		for (m = 1; 36 > m; m++) if (p = f + m * q, a.x = b + Math.cos(p) * g, a.y = c + Math.sin(p) * g, a.ra(), !this.sh(a, h) && (h = this.si(a), !h)) {
			l = p;
			break
		}
		36 === m && (l = Ra(f + sa));
		a.x = e;
		a.y = d;
		a.ra();
		if (l === r) return l;
		a = Va(l, r) / 2;
		a = Za(l, r) ? Ra(r + a + sa) : Ra(l + a);
		r = Math.cos(f);
		f = Math.sin(f);
		l = Math.cos(a);
		a = Math.sin(a);
		b = r * l + f * a;
		return Ua(0, 0, r - 2 * b * l, f - 2 * b * a)
	};
	var Q = -1;
	b.prototype.trigger = function(a, b, c) {
		if (!this.qb) return !1;
		var e = this.qb.Oh;
		if (!e) return !1;
		var d = !1,
			g, f, k;
		Q++;
		var h = e.Co;
		f = 0;
		for (k = h.length; f < k; ++f) g = this.wu(a, b, h[f], c), d = d || g;
		g = this.wu(a, b, e, c);
		Q--;
		return d || g
	};
	b.prototype.wu = function(a, b, c, e) {
		var d = !1,
			g, f, k, h;
		if (b) for (k = this.Lq(a, b, b.type.name, c, e), d = d || k, h = b.type.Jb, g = 0, f = h.length; g < f; ++g) k = this.Lq(a, b, h[g].name, c, e), d = d || k;
		else k = this.Lq(a, b, "system", c, e), d = d || k;
		return d
	};
	b.prototype.Lq = function(a, b, c, e, d) {
		var g, f = !1,
			k = !1,
			k = "undefined" !== typeof d,
			h = (k ? e.Zr : e.xu)[c];
		if (!h) return f;
		var m = null;
		e = 0;
		for (g = h.length; e < g; ++e) if (h[e].method == a) {
			m = h[e].Vj;
			break
		}
		if (!m) return f;
		var p;
		k ? p = m[d] : p = m;
		if (!p) return null;
		e = 0;
		for (g = p.length; e < g; e++) a = p[e][0], d = p[e][1], k = this.Vx(b, c, a, d), f = f || k;
		return f
	};
	b.prototype.Vx = function(a, b, c, e) {
		var d, g, f = !1;
		this.Mq++;
		var k = this.Hc().rd;
		k && this.Qk(k.ph);
		var h = 1 < this.Mq;
		this.Qk(c.ph);
		h && this.Cz();
		var m = this.mn(c);
		m.rd = c;
		a && (d = this.types[b].Ma(), d.bb = !1, J(d.G), d.G[0] = a, this.types[b].xe());
		a = !0;
		if (c.parent) {
			b = m.pu;
			for (d = c.parent; d;) b.push(d), d = d.parent;
			b.reverse();
			d = 0;
			for (g = b.length; d < g; d++) if (!b[d].Pz()) {
				a = !1;
				break
			}
		}
		a && (this.Qh++, c.Le ? c.Oz(e) : c.mc(), f = f || m.di);
		this.gn();
		h && this.uz();
		this.pi(c.ph);
		k && this.pi(k.ph);
		this.Xg && 0 === this.ke && 0 === Q && !this.rp && this.ed();
		this.Mq--;
		return f
	};
	b.prototype.lm = function() {
		var a = this.Hc();
		return a.rd.Gc[a.Fc]
	};
	b.prototype.cy = function() {
		var a = this.Hc();
		return a.rd.we[a.Dd]
	};
	b.prototype.Cz = function() {
		this.Qm++;
		this.Qm >= this.Kp.length && this.Kp.push([])
	};
	b.prototype.uz = function() {
		this.Qm--
	};
	b.prototype.es = function() {
		return this.Kp[this.Qm]
	};
	b.prototype.mn = function(a) {
		this.$l++;
		this.$l >= this.Fo.length && this.Fo.push(new wc);
		var b = this.Hc();
		b.reset(a);
		return b
	};
	b.prototype.gn = function() {
		this.$l--
	};
	b.prototype.Hc = function() {
		return this.Fo[this.$l]
	};
	b.prototype.gs = function(a, b) {
		for (var c, e, d, g, f, k; b;) {
			c = 0;
			for (e = b.Pe.length; c < e; c++) if (k = b.Pe[c], k instanceof zc && Sb(a, k.name)) return k;
			b = b.parent
		}
		c = 0;
		for (e = this.Vf.length; c < e; c++) for (f = this.Vf[c], d = 0, g = f.Tg.length; d < g; d++) if (k = f.Tg[d], k instanceof zc && Sb(a, k.name)) return k;
		return null
	};
	b.prototype.hs = function(a) {
		var b, c;
		b = 0;
		for (c = this.$e.length; b < c; b++) if (this.$e[b].Xa === a) return this.$e[b];
		return null
	};
	b.prototype.qm = function(a) {
		var b, c;
		b = 0;
		for (c = this.da.length; b < c; b++) if (this.da[b].Xa === a) return this.da[b];
		return null
	};
	b.prototype.fy = function(a) {
		var b, c;
		b = 0;
		for (c = this.Ei.length; b < c; b++) if (this.Ei[b].Xa === a) return this.Ei[b];
		return null
	};
	b.prototype.Kw = function(a, b) {
		this.Zk = [a, b];
		this.Ta = !0
	};
	b.prototype.Iy = function() {
		var a = this,
			b = this.yq,
			c = this.eg,
			d = this.Km,
			f = !1;
		this.gu && (f = !0, b = "__c2_continuouspreview", this.gu = !1);
		if (b.length) {
			this.ed();
			c = this.Tz();
			if (window.indexedDB && !this.He) h(b, c, function() {
				fa("Saved state to IndexedDB storage (" + c.length + " bytes)");
				a.eg = c;
				a.trigger(M.prototype.L.Zn, null);
				a.eg = "";
				f && g()
			}, function(e) {
				try {
					localStorage.setItem("__c2save_" + b, c), fa("Saved state to WebStorage (" + c.length + " bytes)"), a.eg = c, a.trigger(M.prototype.L.Zn, null), a.eg = "", f && g()
				} catch (d) {
					fa("Failed to save game state: " + e + "; " + d)
				}
			});
			else try {
				localStorage.setItem("__c2save_" + b, c), fa("Saved state to WebStorage (" + c.length + " bytes)"), a.eg = c, this.trigger(M.prototype.L.Zn, null), a.eg = "", f && g()
			} catch (k) {
				fa("Error saving to WebStorage: " + k)
			}
			this.md = this.Km = this.yq = ""
		}
		if (d.length) {
			if (window.indexedDB && !this.He) e(d, function(b) {
				b ? (a.md = b, fa("Loaded state from IndexedDB storage (" + a.md.length + " bytes)")) : (a.md = localStorage.getItem("__c2save_" + d) || "", fa("Loaded state from WebStorage (" + a.md.length + " bytes)"));
				a.al = !1;
				a.md.length || a.trigger(M.prototype.L.Xn, null)
			}, function() {
				a.md = localStorage.getItem("__c2save_" + d) || "";
				fa("Loaded state from WebStorage (" + a.md.length + " bytes)");
				a.al = !1;
				a.md.length || a.trigger(M.prototype.L.Xn, null)
			});
			else {
				try {
					this.md = localStorage.getItem("__c2save_" + d) || "", fa("Loaded state from WebStorage (" + this.md.length + " bytes)")
				} catch (m) {
					this.md = ""
				}
				this.al = !1;
				a.md.length || a.trigger(M.prototype.L.Xn, null)
			}
			this.yq = this.Km = ""
		}
		this.md.length && (this.ed(), this.az(this.md), this.eg = this.md, this.trigger(M.prototype.L.Av, null), this.md = this.eg = "")
	};
	b.prototype.Tz = function() {
		var a, b, c, e, d, g, f, k = {
			c2save: !0,
			version: 1,
			rt: {
				time: this.Jc.Fa,
				walltime: this.zg.Fa,
				timescale: this.vg,
				tickcount: this.tg,
				execcount: this.Qh,
				next_uid: this.Kk,
				running_layout: this.qb.Xa,
				start_time_offset: Date.now() - this.An
			},
			types: {},
			layouts: {},
			events: {
				groups: {},
				cnds: {},
				acts: {},
				vars: {}
			}
		};
		a = 0;
		for (b = this.da.length; a < b; a++) if (d = this.da[a], !d.Ea && !this.Nq(d)) {
			g = {
				instances: []
			};
			ib(d.fa) && (g.ex = l(d.fa));
			c = 0;
			for (e = d.G.length; c < e; c++) g.instances.push(this.xq(d.G[c]));
			k.types[d.Xa.toString()] = g
		}
		a = 0;
		for (b = this.$e.length; a < b; a++) c = this.$e[a], k.layouts[c.Xa.toString()] = c.Nc();
		e = k.events.groups;
		a = 0;
		for (b = this.Ei.length; a < b; a++) c = this.Ei[a], e[c.Xa.toString()] = this.Si[c.fk].Vh;
		b = k.events.cnds;
		for (f in this.Ki) this.Ki.hasOwnProperty(f) && (a = this.Ki[f], ib(a.fa) && (b[f] = {
			ex: l(a.fa)
		}));
		b = k.events.acts;
		for (f in this.Di) this.Di.hasOwnProperty(f) && (a = this.Di[f], ib(a.fa) && (b[f] = {
			ex: a.fa
		}));
		b = k.events.vars;
		for (f in this.Cj) this.Cj.hasOwnProperty(f) && (a = this.Cj[f], a.Bm || a.parent && !a.sk || (b[f] = a.data));
		k.system = this.Gf.Nc();
		return JSON.stringify(k)
	};
	b.prototype.Rt = function() {
		var a, b, c, e, d, f;
		this.ig = {};
		a = 0;
		for (b = this.da.length; a < b; a++) if (c = this.da[a], !c.Ea) for (e = 0, d = c.G.length; e < d; e++) f = c.G[e], this.ig[f.uid.toString()] = f
	};
	b.prototype.az = function(a) {
		a = JSON.parse(a);
		if (a.c2save && !(1 < a.version)) {
			this.Am = !0;
			var b = a.rt;
			this.Jc.reset();
			this.Jc.Fa = b.time;
			this.zg.reset();
			this.zg.Fa = b.walltime || 0;
			this.vg = b.timescale;
			this.tg = b.tickcount;
			this.Qh = b.execcount;
			this.An = Date.now() - b.start_time_offset;
			var c = b.running_layout;
			if (c !== this.qb.Xa) if (c = this.hs(c)) this.Vr(c);
			else return;
			var e, d, f, g, k, h, m;
			h = a.types;
			for (d in h) if (h.hasOwnProperty(d) && (g = this.qm(parseInt(d, 10))) && !g.Ea && !this.Nq(g)) {
				h[d].ex ? g.fa = h[d].ex : pb(g.fa);
				k = g.G;
				f = h[d].instances;
				c = 0;
				for (e = ra(k.length, f.length); c < e; c++) this.Lm(k[c], f[c]);
				c = f.length;
				for (e = k.length; c < e; c++) this.Eg(k[c]);
				c = k.length;
				for (e = f.length; c < e; c++) {
					k = null;
					if (g.pb.ah && (k = this.qb.pm(f[c].w.l), !k)) continue;
					k = this.Qg(g.Be, k, !1, 0, 0, !0);
					this.Lm(k, f[c])
				}
				g.vj = !0
			}
			this.ed();
			this.Rt();
			e = a.layouts;
			for (d in e) e.hasOwnProperty(d) && (c = this.hs(parseInt(d, 10))) && c.kd(e[d]);
			e = a.events.groups;
			for (d in e) e.hasOwnProperty(d) && (c = this.fy(parseInt(d, 10))) && this.Si[c.fk] && this.Si[c.fk].xn(e[d]);
			c = a.events.cnds;
			for (d in c) c.hasOwnProperty(d) && this.Ki.hasOwnProperty(d) && (this.Ki[d].fa = c[d].ex);
			c = a.events.acts;
			for (d in c) c.hasOwnProperty(d) && this.Di.hasOwnProperty(d) && (this.Di[d].fa = c[d].ex);
			c = a.events.vars;
			for (d in c) c.hasOwnProperty(d) && this.Cj.hasOwnProperty(d) && (this.Cj[d].data = c[d]);
			this.Kk = b.next_uid;
			this.Am = !1;
			this.Gf.kd(a.system);
			c = 0;
			for (e = this.da.length; c < e; c++) if (g = this.da[c], !g.Ea && !this.Nq(g)) for (d = 0, a = g.G.length; d < a; d++) {
				k = g.G[d];
				if (g.td) for (h = k.ek(), J(k.siblings), b = 0, f = g.Ud.length; b < f; b++) m = g.Ud[b], g !== m && k.siblings.push(m.G[h]);
				k.Lf && k.Lf();
				if (k.Ca) for (b = 0, f = k.Ca.length; b < f; b++) h = k.Ca[b], h.Lf && h.Lf()
			}
			this.Ta = !0
		}
	};
	b.prototype.xq = function(a, b) {
		var c, e, d, f, g;
		f = a.type;
		d = f.pb;
		var k = {};
		b ? k.c2 = !0 : k.uid = a.uid;
		ib(a.fa) && (k.ex = l(a.fa));
		if (a.yc && a.yc.length) for (k.ivs = {}, c = 0, e = a.yc.length; c < e; c++) k.ivs[a.type.mp[c].toString()] = a.yc[c];
		if (d.ah) {
			d = {
				x: a.x,
				y: a.y,
				w: a.width,
				h: a.height,
				l: a.V.Xa,
				zi: a.vf()
			};
			0 !== a.M && (d.a = a.M);
			1 !== a.opacity && (d.o = a.opacity);.5 !== a.Hd && (d.hX = a.Hd);.5 !== a.Id && (d.hY = a.Id);
			0 !== a.fd && (d.bm = a.fd);
			a.visible || (d.v = a.visible);
			a.Of || (d.ce = a.Of); - 1 !== a.Jk && (d.mts = a.Jk);
			if (f.Da.length) for (d.fx = [], c = 0, e = f.Da.length; c < e; c++) g = f.Da[c], d.fx.push({
				name: g.name,
				active: a.Ig[g.index],
				params: a.Kb[g.index]
			});
			k.w = d
		}
		if (a.Ca && a.Ca.length) for (k.behs = {}, c = 0, e = a.Ca.length; c < e; c++) f = a.Ca[c], f.Nc && (k.behs[f.type.Xa.toString()] = f.Nc());
		a.Nc && (k.data = a.Nc());
		return k
	};
	b.prototype.hy = function(a, b) {
		var c, e;
		c = 0;
		for (e = a.mp.length; c < e; c++) if (a.mp[c] === b) return c;
		return -1
	};
	b.prototype.by = function(a, b) {
		var c, e;
		c = 0;
		for (e = a.Ca.length; c < e; c++) if (a.Ca[c].type.Xa === b) return c;
		return -1
	};
	b.prototype.Lm = function(a, b, c) {
		var e, d, f, g, k;
		k = a.type;
		g = k.pb;
		if (c) {
			if (!b.c2) return
		} else a.uid = b.uid;
		b.ex ? a.fa = b.ex : pb(a.fa);
		if (d = b.ivs) for (e in d) d.hasOwnProperty(e) && (f = this.hy(k, parseInt(e, 10)), 0 > f || f >= a.yc.length || (a.yc[f] = d[e]));
		if (g.ah) {
			f = b.w;
			a.V.Xa !== f.l && (d = a.V, a.V = this.qb.pm(f.l), a.V ? (d.pj(a, !0), a.V.Mj(a, !0), a.ra(), a.V.Vk(0)) : (a.V = d, c || this.Eg(a)));
			a.x = f.x;
			a.y = f.y;
			a.width = f.w;
			a.height = f.h;
			a.kf = f.zi;
			a.M = f.hasOwnProperty("a") ? f.a : 0;
			a.opacity = f.hasOwnProperty("o") ? f.o : 1;
			a.Hd = f.hasOwnProperty("hX") ? f.hX : .5;
			a.Id = f.hasOwnProperty("hY") ? f.hY : .5;
			a.visible = f.hasOwnProperty("v") ? f.v : !0;
			a.Of = f.hasOwnProperty("ce") ? f.ce : !0;
			a.Jk = f.hasOwnProperty("mts") ? f.mts : -1;
			a.fd = f.hasOwnProperty("bm") ? f.bm : 0;
			a.Pj = Kb(a.fd);
			this.ga && Qb(a, a.fd, this.ga);
			a.ra();
			if (f.hasOwnProperty("fx")) for (c = 0, d = f.fx.length; c < d; c++) g = k.Uo(f.fx[c].name), 0 > g || (a.Ig[g] = f.fx[c].active, a.Kb[g] = f.fx[c].params);
			a.gf()
		}
		if (k = b.behs) for (e in k) k.hasOwnProperty(e) && (c = this.by(a, parseInt(e, 10)), 0 > c || a.Ca[c].kd(k[e]));
		b.data && a.kd(b.data)
	};
	Hc = function(a) {
		return new b(document.getElementById(a))
	};
	Ic = function(a, c) {
		return new b({
			dc: !0,
			width: a,
			height: c
		})
	};
	window.cr_createRuntime = Hc;
	window.cr_createDCRuntime = Ic;
	window.createCocoonJSRuntime = function() {
		window.c2cocoonjs = !0;
		var a = document.createElement("screencanvas") || document.createElement("canvas");
		a.j = !0;
		document.body.appendChild(a);
		a = new b(a);
		window.c2runtime = a;
		window.addEventListener("orientationchange", function() {
			window.c2runtime.setSize(window.innerWidth, window.innerHeight)
		});
		window.c2runtime.setSize(window.innerWidth, window.innerHeight);
		return a
	};
	window.createEjectaRuntime = function() {
		var a = new b(document.getElementById("canvas"));
		window.c2runtime = a;
		window.c2runtime.setSize(window.innerWidth, window.innerHeight);
		return a
	}
})();
window.cr_getC2Runtime = function() {
	var a = document.getElementById("c2canvas");
	return a ? a.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_getSnapshot = function(a, c) {
	var b = window.cr_getC2Runtime();
	b && b.Kw(a, c)
};
window.cr_sizeCanvas = function(a, c) {
	if (0 !== a && 0 !== c) {
		var b = window.cr_getC2Runtime();
		b && b.setSize(a, c)
	}
};
window.cr_setSuspended = function(a) {
	var c = window.cr_getC2Runtime();
	c && c.setSuspended(a)
};
(function() {
	function a(a, b) {
		this.c = a;
		this.Oh = null;
		this.scrollX = this.c.Bc / 2;
		this.scrollY = this.c.Ac / 2;
		this.scale = 1;
		this.M = 0;
		this.Qi = !0;
		this.name = b[0];
		this.width = b[1];
		this.height = b[2];
		this.Au = b[3];
		this.eu = b[4];
		this.Xa = b[5];
		var c = b[6],
			e, d;
		this.Ia = [];
		this.ik = [];
		e = 0;
		for (d = c.length; e < d; e++) {
			var f = new Jc(this, c[e]);
			f.it = e;
			this.Ia.push(f)
		}
		c = b[7];
		this.Zh = [];
		e = 0;
		for (d = c.length; e < d; e++) {
			var f = c[e],
				g = this.c.da[f[1]];
			g.Be || (g.Be = f);
			this.Zh.push(f); - 1 === this.ik.indexOf(g) && this.ik.push(g)
		}
		this.Da = [];
		this.jb = [];
		this.rg = !0;
		this.Kb = [];
		e = 0;
		for (d = b[8].length; e < d; e++) this.Da.push({
			id: b[8][e][0],
			name: b[8][e][1],
			nc: -1,
			bf: !1,
			sc: !0,
			index: e
		}), this.Kb.push(b[8][e][2].slice(0));
		this.gf();
		this.pq = new xa(0, 0, 1, 1);
		this.qq = new xa(0, 0, 1, 1);
		this.kh = {}
	}
	function c(a, b) {
		return a.kf - b.kf
	}
	function b(a, b) {
		this.jc = a;
		this.c = a.c;
		this.G = [];
		this.scale = 1;
		this.M = 0;
		this.Tf = !1;
		this.wg = new xa(0, 0, 0, 0);
		this.uu = new ya;
		this.Hb = this.yb = this.Ib = this.xb = 0;
		this.wi = !1;
		this.Cg = -1;
		this.vo = 0;
		this.name = b[0];
		this.index = b[1];
		this.Xa = b[2];
		this.visible = b[3];
		this.Ue = b[4];
		this.ff = b[5];
		this.Ld = b[6];
		this.Md = b[7];
		this.opacity = b[8];
		this.gm = b[9];
		this.te = b[10];
		this.pd = b[11];
		this.fd = b[12];
		this.kx = b[13];
		this.Pj = "source-over";
		this.hd = this.nd = 0;
		this.$c = null;
		this.fg = d();
		this.df = !0;
		this.dj = new xa(0, 0, -1, -1);
		this.Vc = new xa(0, 0, -1, -1);
		this.te && (this.$c = new Gb(this.c.Bc, this.c.Ac));
		this.Cf = !1;
		var c = b[14],
			e, f;
		this.lu = [];
		this.ie = [];
		this.Rj = [];
		e = 0;
		for (f = c.length; e < f; e++) {
			var g = c[e],
				h = this.c.da[g[1]];
			h.Be || (h.Be = g, h.Hw = this.index);
			this.ie.push(g); - 1 === this.jc.ik.indexOf(h) && this.jc.ik.push(h)
		}
		Ha(this.lu, this.ie);
		this.Da = [];
		this.jb = [];
		this.rg = !0;
		this.Kb = [];
		e = 0;
		for (f = b[15].length; e < f; e++) this.Da.push({
			id: b[15][e][0],
			name: b[15][e][1],
			nc: -1,
			bf: !1,
			sc: !0,
			index: e
		}), this.Kb.push(b[15][e][2].slice(0));
		this.gf();
		this.pq = new xa(0, 0, 1, 1);
		this.qq = new xa(0, 0, 1, 1)
	}
	function d() {
		return g.length ? g.pop() : []
	}
	function f(a) {
		J(a);
		g.push(a)
	}
	a.prototype.Sz = function(a) {
		var b = a.type.Xa.toString();
		this.kh.hasOwnProperty(b) || (this.kh[b] = []);
		this.kh[b].push(this.c.xq(a))
	};
	a.prototype.ms = function() {
		var a = this.Ia[0];
		return !a.ff && 1 === a.opacity && !a.gm && a.visible
	};
	a.prototype.gf = function() {
		J(this.jb);
		this.rg = !0;
		var a, b, c;
		a = 0;
		for (b = this.Da.length; a < b; a++) c = this.Da[a], c.sc && (this.jb.push(c), c.bf || (this.rg = !1))
	};
	a.prototype.To = function(a) {
		var b, c, e;
		b = 0;
		for (c = this.Da.length; b < c; b++) if (e = this.Da[b], e.name === a) return e;
		return null
	};
	var h = [],
		e = !0;
	a.prototype.Eq = function() {
		this.eu && (this.Oh = this.c.Go[this.eu], this.Oh.Qq());
		this.c.qb = this;
		this.scrollX = this.c.Bc / 2;
		this.scrollY = this.c.Ac / 2;
		var a, b, d, f, g, l, n;
		a = 0;
		for (d = this.c.da.length; a < d; a++) if (b = this.c.da[a], !b.Ea) for (g = b.G, b = 0, f = g.length; b < f; b++) if (l = g[b], l.V) {
			var r = l.V.it;
			r >= this.Ia.length && (r = this.Ia.length - 1);
			l.V = this.Ia[r]; - 1 === l.V.G.indexOf(l) && l.V.G.push(l);
			l.V.wi = !0
		}
		if (!e) for (a = 0, d = this.Ia.length; a < d; ++a) this.Ia[a].G.sort(c);
		J(h);
		this.uw();
		a = 0;
		for (d = this.Ia.length; a < d; a++) l = this.Ia[a], l.Fw(), l.Pn();
		g = !1;
		if (!this.Qi) {
			for (n in this.kh) if (this.kh.hasOwnProperty(n) && (b = this.c.qm(parseInt(n, 10))) && !b.Ea && this.c.Oq(b)) {
				f = this.kh[n];
				a = 0;
				for (d = f.length; a < d; a++) {
					l = null;
					if (b.pb.ah && (l = this.pm(f[a].w.l), !l)) continue;
					l = this.c.Qg(b.Be, l, !1, 0, 0, !0);
					this.c.Lm(l, f[a]);
					g = !0;
					h.push(l)
				}
				J(f)
			}
			a = 0;
			for (d = this.Ia.length; a < d; a++) this.Ia[a].G.sort(c), this.Ia[a].wi = !0
		}
		g && (this.c.ed(), this.c.Rt());
		for (a = 0; a < h.length; a++) if (l = h[a], l.type.td) for (d = l.ek(), b = 0, f = l.type.Ud.length; b < f; b++) n = l.type.Ud[b], l.type !== n && (n.G.length > d ? l.siblings.push(n.G[d]) : n.Be && (g = this.c.Qg(n.Be, l.V, !0, l.x, l.y, !0), this.c.ed(), n.Nn(), l.siblings.push(g), h.push(g)));
		a = 0;
		for (d = this.Zh.length; a < d; a++) this.c.Qg(this.Zh[a], null, !0);
		this.c.Oj = null;
		this.c.ed();
		if (this.c.nb && !this.c.Cb) for (a = 0, d = this.c.da.length; a < d; a++) n = this.c.da[a], !n.Ea && n.G.length && n.kq && n.kq(this.c.nb);
		a = 0;
		for (d = h.length; a < d; a++) l = h[a], this.c.trigger(Object.getPrototypeOf(l.type.pb).L.Bi, l);
		J(h);
		this.c.Am || this.c.trigger(M.prototype.L.ir, null);
		this.Qi = !1
	};
	a.prototype.Ew = function() {
		var a, b, c, e, d;
		b = a = 0;
		for (c = this.Zh.length; a < c; a++) e = this.Zh[a], d = this.c.da[e[1]], d.global ? d.td || this.c.Qg(e, null, !0) : (this.Zh[b] = e, b++);
		Da(this.Zh, b)
	};
	a.prototype.eA = function() {
		this.c.Am || this.c.trigger(M.prototype.L.zv, null);
		this.c.op = !0;
		J(this.c.Gf.Qd);
		var a, b, c, d, f, g;
		if (!this.Qi) for (a = 0, b = this.Ia.length; a < b; a++) for (this.Ia[a].Sq(), f = this.Ia[a].G, c = 0, d = f.length; c < d; c++) g = f[c], g.type.global || this.c.Oq(g.type) && this.Sz(g);
		a = 0;
		for (b = this.Ia.length; a < b; a++) {
			f = this.Ia[a].G;
			c = 0;
			for (d = f.length; c < d; c++) g = f[c], g.type.global || this.c.Eg(g);
			this.c.ed();
			J(f);
			this.Ia[a].wi = !0
		}
		a = 0;
		for (b = this.c.da.length; a < b; a++) if (f = this.c.da[a], !(f.global || f.pb.ah || f.pb.zn || f.Ea)) {
			c = 0;
			for (d = f.G.length; c < d; c++) this.c.Eg(f.G[c]);
			this.c.ed()
		}
		e = !1;
		this.c.op = !1
	};
	new xa(0, 0, 0, 0);
	a.prototype.Uf = function(a) {
		var b, c = a,
			e = !1,
			d = !this.c.ge;
		d && (this.c.Jm || (this.c.Jm = document.createElement("canvas"), b = this.c.Jm, b.width = this.c.wa, b.height = this.c.ua, this.c.Hs = b.getContext("2d"), e = !0), b = this.c.Jm, c = this.c.Hs, b.width !== this.c.wa && (b.width = this.c.wa, e = !0), b.height !== this.c.ua && (b.height = this.c.ua, e = !0), e && (c.webkitImageSmoothingEnabled = this.c.Wa, c.mozImageSmoothingEnabled = this.c.Wa, c.msImageSmoothingEnabled = this.c.Wa, c.imageSmoothingEnabled = this.c.Wa));
		c.globalAlpha = 1;
		c.globalCompositeOperation = "source-over";
		this.c.jo && !this.ms() && c.clearRect(0, 0, this.c.wa, this.c.ua);
		var f, g, e = 0;
		for (f = this.Ia.length; e < f; e++) g = this.Ia[e], g.visible && 0 < g.opacity && 11 !== g.fd && (g.G.length || !g.ff) ? g.Uf(c) : g.Pn();
		d && a.drawImage(b, 0, 0, this.c.width, this.c.height)
	};
	a.prototype.Ni = function(a) {
		a.Zt(!0);
		this.c.kc || (this.c.kc = a.ze(this.c.wa, this.c.ua, this.c.Wa));
		if (this.c.kc.Ih !== this.c.wa || this.c.kc.Hh !== this.c.ua) a.deleteTexture(this.c.kc), this.c.kc = a.ze(this.c.wa, this.c.ua, this.c.Wa);
		a.Ne(this.c.kc);
		this.c.ge || a.qi(this.c.wa, this.c.ua);
		var b, c;
		for (b = this.Ia.length - 1; 0 <= b; --b) c = this.Ia[b], c.visible && 1 === c.opacity && c.rg && 0 === c.fd && (c.G.length || !c.ff) ? c.Ni(a) : c.Pn();
		a.Zt(!1)
	};
	a.prototype.De = function(a) {
		var b = 0 < this.jb.length || this.c.Aj || !this.c.ge || this.c.zb;
		if (b) {
			this.c.kc || (this.c.kc = a.ze(this.c.wa, this.c.ua, this.c.Wa));
			if (this.c.kc.Ih !== this.c.wa || this.c.kc.Hh !== this.c.ua) a.deleteTexture(this.c.kc), this.c.kc = a.ze(this.c.wa, this.c.ua, this.c.Wa);
			a.Ne(this.c.kc);
			this.c.ge || a.qi(this.c.wa, this.c.ua)
		} else this.c.kc && (a.Ne(null), a.deleteTexture(this.c.kc), this.c.kc = null);
		this.c.jo && !this.ms() && a.clear(0, 0, 0, 0);
		var c, e, d;
		c = 0;
		for (e = this.Ia.length; c < e; c++) d = this.Ia[c], d.visible && 0 < d.opacity && (d.G.length || !d.ff) ? d.De(a) : d.Pn();
		b && (0 === this.jb.length || 1 === this.jb.length && this.c.ge ? (1 === this.jb.length ? (b = this.jb[0].index, a.Pd(this.jb[0].nc), a.sj(null, 1 / this.c.wa, 1 / this.c.ua, 0, 0, 1, 1, this.scale, this.M, 0, 0, this.c.wa / 2, this.c.ua / 2, this.c.Jc.Fa, this.Kb[b]), a.kn(this.jb[0].nc) && (this.c.Ta = !0)) : a.Pd(0), this.c.ge || a.qi(this.c.width, this.c.height), a.Ne(null), a.Yt(!1), a.rj(1), a.se(this.c.kc), a.Wt(), a.Df(), a.hf(), b = this.c.width / 2, c = this.c.height / 2, a.Rk(-b, c, b, c, b, -c, -b, -c), a.se(null), a.Yt(!0)) : this.sq(a, null, null, null))
	};
	a.prototype.dk = function() {
		return 0 < this.jb.length || this.c.Aj || !this.c.ge || this.c.zb ? this.c.kc : null
	};
	a.prototype.js = function() {
		var a = this.Ia[0].Ge(),
			b, c, e;
		b = 1;
		for (c = this.Ia.length; b < c; b++) e = this.Ia[b], (0 !== e.Ld || 0 !== e.Md) && e.Ge() < a && (a = e.Ge());
		return a
	};
	a.prototype.Ut = function(a) {
		if (!this.Au) {
			var b = 1 / this.js() * this.c.wa / 2;
			a > this.width - b && (a = this.width - b);
			a < b && (a = b)
		}
		this.scrollX !== a && (this.scrollX = a, this.c.Ta = !0)
	};
	a.prototype.Vt = function(a) {
		if (!this.Au) {
			var b = 1 / this.js() * this.c.ua / 2;
			a > this.height - b && (a = this.height - b);
			a < b && (a = b)
		}
		this.scrollY !== a && (this.scrollY = a, this.c.Ta = !0)
	};
	a.prototype.uw = function() {
		this.Ut(this.scrollX);
		this.Vt(this.scrollY)
	};
	a.prototype.sq = function(a, b, c, e) {
		var d = c ? c.jb : b ? b.jb : this.jb,
			f = 1,
			g = 0,
			h = 0,
			l = 0,
			n = this.c.wa,
			D = this.c.ua;
		c ? (f = c.V.Ge(), g = c.V.wc(), h = c.V.xb, l = c.V.yb, n = c.V.Ib, D = c.V.Hb) : b && (f = b.Ge(), g = b.wc(), h = b.xb, l = b.yb, n = b.Ib, D = b.Hb);
		var A = this.c.Oo,
			C, E, w, x, K = 0,
			H = 1,
			P, O = this.c.wa,
			Q = this.c.ua,
			S = O / 2,
			G = Q / 2,
			L = b ? b.pq : this.pq,
			F = b ? b.qq : this.qq,
			R = 0,
			T = 0,
			N = 0,
			I = 0,
			U = O,
			za = O,
			Y = Q,
			Qa = Q,
			oa = w = 0;
		x = c ? c.V.wc() : 0;
		if (c) {
			C = 0;
			for (E = d.length; C < E; C++) w += a.my(d[C].nc), oa += a.ny(d[C].nc);
			I = c.Ab;
			R = b.ud(I.left, I.top, !0, !0);
			N = b.ud(I.left, I.top, !1, !0);
			U = b.ud(I.right, I.bottom, !0, !0);
			Y = b.ud(I.right, I.bottom, !1, !0);
			0 !== x && (C = b.ud(I.right, I.top, !0, !0), E = b.ud(I.right, I.top, !1, !0), T = b.ud(I.left, I.bottom, !0, !0), I = b.ud(I.left, I.bottom, !1, !0), x = Math.min(R, U, C, T), U = Math.max(R, U, C, T), R = x, x = Math.min(N, Y, E, I), Y = Math.max(N, Y, E, I), N = x);
			R -= w;
			N -= oa;
			U += w;
			Y += oa;
			F.left = R / O;
			F.top = 1 - N / Q;
			F.right = U / O;
			F.bottom = 1 - Y / Q;
			T = R = ta(R);
			I = N = ta(N);
			za = U = ua(U);
			Qa = Y = ua(Y);
			T -= w;
			I -= oa;
			za += w;
			Qa += oa;
			0 > R && (R = 0);
			0 > N && (N = 0);
			U > O && (U = O);
			Y > Q && (Y = Q);
			0 > T && (T = 0);
			0 > I && (I = 0);
			za > O && (za = O);
			Qa > Q && (Qa = Q);
			L.left = R / O;
			L.top = 1 - N / Q;
			L.right = U / O;
			L.bottom = 1 - Y / Q
		} else L.left = F.left = 0, L.top = F.top = 0, L.right = F.right = 1, L.bottom = F.bottom = 1;
		oa = c && (a.Pk(d[0].nc) || 0 !== w || 0 !== oa || 1 !== c.opacity || c.type.pb.et) || b && !c && 1 !== b.opacity;
		a.Wt();
		if (oa) {
			A[K] || (A[K] = a.ze(O, Q, this.c.Wa));
			if (A[K].Ih !== O || A[K].Hh !== Q) a.deleteTexture(A[K]), A[K] = a.ze(O, Q, this.c.Wa);
			a.Pd(0);
			a.Ne(A[K]);
			P = Qa - I;
			a.clearRect(T, Q - I - P, za - T, P);
			c ? c.De(a) : (a.se(this.c.zc), a.rj(b.opacity), a.Df(), a.translate(-S, -G), a.hf(), a.mh(R, Y, U, Y, U, N, R, N, L));
			F.left = F.top = 0;
			F.right = F.bottom = 1;
			c && (x = L.top, L.top = L.bottom, L.bottom = x);
			K = 1;
			H = 0
		}
		a.rj(1);
		w = d.length - 1;
		var sb = a.nq(d[w].nc) || !b && !c && !this.c.ge,
			fb = 0;
		C = 0;
		for (E = d.length; C < E; C++) {
			A[K] || (A[K] = a.ze(O, Q, this.c.Wa));
			if (A[K].Ih !== O || A[K].Hh !== Q) a.deleteTexture(A[K]), A[K] = a.ze(O, Q, this.c.Wa);
			a.Pd(d[C].nc);
			fb = d[C].index;
			a.kn(d[C].nc) && (this.c.Ta = !0);
			0 != C || oa ? (a.sj(e, 1 / O, 1 / Q, F.left, F.top, F.right, F.bottom, f, g, h, l, (h + n) / 2, (l + D) / 2, this.c.Jc.Fa, c ? c.Kb[fb] : b ? b.Kb[fb] : this.Kb[fb]), a.se(null), C !== w || sb ? (a.Ne(A[K]), P = Qa - I, x = Q - I - P, a.clearRect(T, x, za - T, P)) : (c ? a.oh(c.nd, c.hd) : b && a.oh(b.nd, b.hd), a.Ne(e)), a.se(A[H]), a.Df(), a.translate(-S, -G), a.hf(), a.mh(R, Y, U, Y, U, N, R, N, L), C !== w || sb || a.se(null)) : (a.Ne(A[K]), P = Qa - I, x = Q - I - P, a.clearRect(T, x, za - T, P), c ? (a.sj(e, 1 / c.width, 1 / c.height, F.left, F.top, F.right, F.bottom, f, g, h, l, (h + n) / 2, (l + D) / 2, this.c.Jc.Fa, c.Kb[fb]), c.De(a)) : (a.sj(e, 1 / O, 1 / Q, 0, 0, 1, 1, f, g, h, l, (h + n) / 2, (l + D) / 2, this.c.Jc.Fa, b ? b.Kb[fb] : this.Kb[fb]), a.se(b ? this.c.zc : this.c.kc), a.Df(), a.translate(-S, -G), a.hf(), a.mh(R, Y, U, Y, U, N, R, N, L)), F.left = F.top = 0, F.right = F.bottom = 1, c && !sb && (x = Y, Y = N, N = x));
			K = 0 === K ? 1 : 0;
			H = 0 === K ? 1 : 0
		}
		sb && (a.Pd(0), c ? a.oh(c.nd, c.hd) : b ? a.oh(b.nd, b.hd) : this.c.ge || (a.qi(this.c.width, this.c.height), S = this.c.width / 2, G = this.c.height / 2, N = R = 0, U = this.c.width, Y = this.c.height), a.Ne(e), a.se(A[H]), a.Df(), a.translate(-S, -G), a.hf(), c && 1 === d.length && !oa ? a.mh(R, N, U, N, U, Y, R, Y, L) : a.mh(R, Y, U, Y, U, N, R, N, L), a.se(null))
	};
	a.prototype.pm = function(a) {
		var b, c;
		b = 0;
		for (c = this.Ia.length; b < c; b++) if (this.Ia[b].Xa === a) return this.Ia[b];
		return null
	};
	a.prototype.Nc = function() {
		var a, b, c, e = {
			sx: this.scrollX,
			sy: this.scrollY,
			s: this.scale,
			a: this.M,
			w: this.width,
			h: this.height,
			fv: this.Qi,
			persist: this.kh,
			fx: [],
			layers: {}
		};
		a = 0;
		for (b = this.Da.length; a < b; a++) c = this.Da[a], e.fx.push({
			name: c.name,
			active: c.sc,
			params: this.Kb[c.index]
		});
		a = 0;
		for (b = this.Ia.length; a < b; a++) c = this.Ia[a], e.layers[c.Xa.toString()] = c.Nc();
		return e
	};
	a.prototype.kd = function(a) {
		var b, c, e, d;
		this.scrollX = a.sx;
		this.scrollY = a.sy;
		this.scale = a.s;
		this.M = a.a;
		this.width = a.w;
		this.height = a.h;
		this.kh = a.persist;
		"undefined" !== typeof a.fv && (this.Qi = a.fv);
		var f = a.fx;
		b = 0;
		for (c = f.length; b < c; b++) if (e = this.To(f[b].name)) e.sc = f[b].active, this.Kb[e.index] = f[b].params;
		this.gf();
		b = a.layers;
		for (d in b) b.hasOwnProperty(d) && (a = this.pm(parseInt(d, 10))) && a.kd(b[d])
	};
	mc = a;
	b.prototype.gf = function() {
		J(this.jb);
		this.rg = !0;
		var a, b, c;
		a = 0;
		for (b = this.Da.length; a < b; a++) c = this.Da[a], c.sc && (this.jb.push(c), c.bf || (this.rg = !1))
	};
	b.prototype.To = function(a) {
		var b, c, e;
		b = 0;
		for (c = this.Da.length; b < c; b++) if (e = this.Da[b], e.name === a) return e;
		return null
	};
	b.prototype.Fw = function() {
		var a, b, c, e, d, f;
		b = a = 0;
		for (c = this.ie.length; a < c; a++) {
			e = this.ie[a];
			d = this.c.da[e[1]];
			f = this.c.Oq(d);
			d = !0;
			if (!f || this.jc.Qi) e = this.c.Qg(e, this, !0), h.push(e), e.type.global && (d = !1, this.Rj.push(e.uid));
			d && (this.ie[b] = this.ie[a], b++)
		}
		this.ie.length = b;
		this.c.ed();
		!this.c.ja && this.Da.length && (this.fd = this.kx);
		this.Pj = Kb(this.fd);
		this.c.ga && Qb(this, this.fd, this.c.ga);
		this.df = !0
	};
	b.prototype.pj = function(a, b) {
		var c = Ka(this.G, a);
		0 > c || (b && this.te && a.Nd && a.Nd.right >= a.Nd.left && (a.Ua(), this.$c.update(a, a.Nd, null), a.Nd.set(0, 0, -1, -1)), c === this.G.length - 1 ? this.G.pop() : (Ca(this.G, c), this.Vk(c)), this.df = !0)
	};
	b.prototype.Mj = function(a, b) {
		a.kf = this.G.length;
		this.G.push(a);
		b && this.te && a.Nd && a.ra();
		this.df = !0
	};
	b.prototype.yz = function(a) {
		this.G.unshift(a);
		this.Vk(0)
	};
	b.prototype.hz = function(a, b, c) {
		var e = a.vf();
		b = b.vf();
		Ca(this.G, e);
		e < b && b--;
		c && b++;
		b === this.G.length ? this.G.push(a) : this.G.splice(b, 0, a);
		this.Vk(e < b ? e : b)
	};
	b.prototype.Vk = function(a) {
		-1 === this.Cg ? this.Cg = a : a < this.Cg && (this.Cg = a);
		this.df = this.wi = !0
	};
	b.prototype.Sq = function() {
		if (this.wi) {
			-1 === this.Cg && (this.Cg = 0);
			var a, b, c;
			if (this.te) for (a = this.Cg, b = this.G.length; a < b; ++a) c = this.G[a], c.kf = a, this.$c.ez(c.Nd);
			else for (a = this.Cg, b = this.G.length; a < b; ++a) this.G[a].kf = a;
			this.wi = !1;
			this.Cg = -1
		}
	};
	b.prototype.Ge = function(a) {
		return this.iy() * (this.c.ge || a ? this.c.Nj : 1)
	};
	b.prototype.iy = function() {
		return (this.scale * this.jc.scale - 1) * this.pd + 1
	};
	b.prototype.wc = function() {
		return this.Tf ? 0 : Ra(this.jc.M + this.M)
	};
	var g = [],
		l = [],
		n = [];
	b.prototype.Xo = function() {
		this.Sq();
		this.$c.nn(this.xb, this.yb, this.Ib, this.Hb, n);
		if (!n.length) return d();
		if (1 === n.length) {
			var a = d();
			Ha(a, n[0]);
			J(n);
			return a
		}
		for (var b = !0; 1 < n.length;) {
			for (var a = n, c = void 0, e = void 0, g = void 0, h = void 0, v = void 0, c = 0, e = a.length; c < e - 1; c += 2) {
				var g = a[c],
					h = a[c + 1],
					v = d(),
					r = g,
					z = h,
					B = v,
					D = 0,
					A = 0,
					C = 0,
					E = r.length,
					w = z.length,
					x = void 0,
					K = void 0;
				for (B.length = E + w; D < E && A < w; ++C) x = r[D], K = z[A], x.kf < K.kf ? (B[C] = x, ++D) : (B[C] = K, ++A);
				for (; D < E; ++D, ++C) B[C] = r[D];
				for (; A < w; ++A, ++C) B[C] = z[A];
				b || (f(g), f(h));
				l.push(v)
			}
			1 === e % 2 && (b ? (g = d(), Ha(g, a[e - 1]), l.push(g)) : l.push(a[e - 1]));
			Ha(a, l);
			J(l);
			b = !1
		}
		a = n[0];
		J(n);
		return a
	};
	b.prototype.Uf = function(a) {
		this.Cf = this.gm || 1 !== this.opacity || 0 !== this.fd;
		var b = this.c.canvas,
			c = a,
			e = !1;
		this.Cf && (this.c.Im || (this.c.Im = document.createElement("canvas"), b = this.c.Im, b.width = this.c.wa, b.height = this.c.ua, this.c.Gs = b.getContext("2d"), e = !0), b = this.c.Im, c = this.c.Gs, b.width !== this.c.wa && (b.width = this.c.wa, e = !0), b.height !== this.c.ua && (b.height = this.c.ua, e = !0), e && (c.webkitImageSmoothingEnabled = this.c.Wa, c.mozImageSmoothingEnabled = this.c.Wa, c.msImageSmoothingEnabled = this.c.Wa, c.imageSmoothingEnabled = this.c.Wa), this.ff && c.clearRect(0, 0, this.c.wa, this.c.ua));
		c.globalAlpha = 1;
		c.globalCompositeOperation = "source-over";
		this.ff || (c.fillStyle = "rgb(" + this.Ue[0] + "," + this.Ue[1] + "," + this.Ue[2] + ")", c.fillRect(0, 0, this.c.wa, this.c.ua));
		c.save();
		this.Tf = !0;
		var e = this.Vb(0, 0, !0, !0),
			d = this.Vb(0, 0, !1, !0);
		this.Tf = !1;
		this.c.kg && (e = Math.round(e), d = Math.round(d));
		this.rn(e, d, c);
		var g = this.Ge();
		c.scale(g, g);
		c.translate(-e, -d);
		this.te ? (this.Vc.left = this.$c.Bd(this.xb), this.Vc.top = this.$c.Cd(this.yb), this.Vc.right = this.$c.Bd(this.Ib), this.Vc.bottom = this.$c.Cd(this.Hb), this.df || !this.Vc.Uj(this.dj) ? (f(this.fg), e = this.Xo(), this.df = !1, this.dj.Li(this.Vc)) : e = this.fg) : e = this.G;
		for (var h, l = null, d = 0, g = e.length; d < g; ++d) h = e[d], h !== l && (this.cx(h, c), l = h);
		this.te && (this.fg = e);
		c.restore();
		this.Cf && (a.globalCompositeOperation = this.Pj, a.globalAlpha = this.opacity, a.drawImage(b, 0, 0))
	};
	b.prototype.cx = function(a, b) {
		if (a.visible && 0 !== a.width && 0 !== a.height) {
			a.Ua();
			var c = a.Ab;
			c.right < this.xb || c.bottom < this.yb || c.left > this.Ib || c.top > this.Hb || (b.globalCompositeOperation = a.Pj, a.Uf(b))
		}
	};
	b.prototype.Pn = function() {
		this.Tf = !0;
		var a = this.Vb(0, 0, !0, !0),
			b = this.Vb(0, 0, !1, !0);
		this.Tf = !1;
		this.c.kg && (a = Math.round(a), b = Math.round(b));
		this.rn(a, b, null)
	};
	b.prototype.rn = function(a, b, c) {
		var e = this.Ge();
		this.xb = a;
		this.yb = b;
		this.Ib = a + 1 / e * this.c.wa;
		this.Hb = b + 1 / e * this.c.ua;
		a = this.wc();
		0 !== a && (c && (c.translate(this.c.wa / 2, this.c.ua / 2), c.rotate(-a), c.translate(this.c.wa / -2, this.c.ua / -2)), this.wg.set(this.xb, this.yb, this.Ib, this.Hb), this.wg.offset((this.xb + this.Ib) / -2, (this.yb + this.Hb) / -2), this.uu.cu(this.wg, a), this.uu.Ir(this.wg), this.wg.offset((this.xb + this.Ib) / 2, (this.yb + this.Hb) / 2), this.xb = this.wg.left, this.yb = this.wg.top, this.Ib = this.wg.right, this.Hb = this.wg.bottom)
	};
	b.prototype.Ni = function(a) {
		if (this.Cf = this.gm) {
			this.c.zc || (this.c.zc = a.ze(this.c.wa, this.c.ua, this.c.Wa));
			if (this.c.zc.Ih !== this.c.wa || this.c.zc.Hh !== this.c.ua) a.deleteTexture(this.c.zc), this.c.zc = a.ze(this.c.wa, this.c.ua, this.c.Wa);
			a.Ne(this.c.zc)
		}
		this.Tf = !0;
		var b = this.Vb(0, 0, !0, !0),
			c = this.Vb(0, 0, !1, !0);
		this.Tf = !1;
		this.c.kg && (b = Math.round(b), c = Math.round(c));
		this.rn(b, c, null);
		b = this.Ge();
		a.Df();
		a.scale(b, b);
		a.uq(-this.wc());
		a.translate((this.xb + this.Ib) / -2, (this.yb + this.Hb) / -2);
		a.hf();
		this.te ? (this.Vc.left = this.$c.Bd(this.xb), this.Vc.top = this.$c.Cd(this.yb), this.Vc.right = this.$c.Bd(this.Ib), this.Vc.bottom = this.$c.Cd(this.Hb), this.df || !this.Vc.Uj(this.dj) ? (f(this.fg), b = this.Xo(), this.df = !1, this.dj.Li(this.Vc)) : b = this.fg) : b = this.G;
		for (var e, d = null, c = b.length - 1; 0 <= c; --c) e = b[c], e !== d && (this.hx(b[c], a), d = e);
		this.te && (this.fg = b);
		this.ff || (this.vo = this.c.Mh++, a.wn(this.vo), a.Xt(1, 1, 1), a.bs(), a.Jz())
	};
	b.prototype.De = function(a) {
		var b = 0,
			c = 0;
		if (this.Cf = this.gm || 1 !== this.opacity || 0 < this.jb.length || 0 !== this.fd) {
			this.c.zc || (this.c.zc = a.ze(this.c.wa, this.c.ua, this.c.Wa));
			if (this.c.zc.Ih !== this.c.wa || this.c.zc.Hh !== this.c.ua) a.deleteTexture(this.c.zc), this.c.zc = a.ze(this.c.wa, this.c.ua, this.c.Wa);
			a.Ne(this.c.zc);
			this.ff && a.clear(0, 0, 0, 0)
		}
		this.ff || (this.c.zb ? (a.wn(this.vo), a.Xt(this.Ue[0] / 255, this.Ue[1] / 255, this.Ue[2] / 255), a.bs(), a.Yz()) : a.clear(this.Ue[0] / 255, this.Ue[1] / 255, this.Ue[2] / 255, 1));
		this.Tf = !0;
		var e = this.Vb(0, 0, !0, !0),
			b = this.Vb(0, 0, !1, !0);
		this.Tf = !1;
		this.c.kg && (e = Math.round(e), b = Math.round(b));
		this.rn(e, b, null);
		e = this.Ge();
		a.Df();
		a.scale(e, e);
		a.uq(-this.wc());
		a.translate((this.xb + this.Ib) / -2, (this.yb + this.Hb) / -2);
		a.hf();
		this.te ? (this.Vc.left = this.$c.Bd(this.xb), this.Vc.top = this.$c.Cd(this.yb), this.Vc.right = this.$c.Bd(this.Ib), this.Vc.bottom = this.$c.Cd(this.Hb), this.df || !this.Vc.Uj(this.dj) ? (f(this.fg), b = this.Xo(), this.df = !1, this.dj.Li(this.Vc)) : b = this.fg) : b = this.G;
		var d, g, h = null,
			c = 0;
		for (d = b.length; c < d; ++c) g = b[c], g !== h && (this.gx(b[c], a), h = g);
		this.te && (this.fg = b);
		this.Cf && (b = this.jb.length ? this.jb[0].nc : 0, c = this.jb.length ? this.jb[0].index : 0, 0 === this.jb.length || 1 === this.jb.length && !a.nq(b) && 1 === this.opacity ? (1 === this.jb.length ? (a.Pd(b), a.sj(this.jc.dk(), 1 / this.c.wa, 1 / this.c.ua, 0, 0, 1, 1, e, this.wc(), this.xb, this.yb, (this.xb + this.Ib) / 2, (this.yb + this.Hb) / 2, this.c.Jc.Fa, this.Kb[c]), a.kn(b) && (this.c.Ta = !0)) : a.Pd(0), a.Ne(this.jc.dk()), a.rj(this.opacity), a.se(this.c.zc), a.oh(this.nd, this.hd), a.Df(), a.hf(), e = this.c.wa / 2, b = this.c.ua / 2, a.Rk(-e, b, e, b, e, -b, -e, -b), a.se(null)) : this.jc.sq(a, this, null, this.jc.dk()))
	};
	b.prototype.gx = function(a, b) {
		if (a.visible && 0 !== a.width && 0 !== a.height) {
			a.Ua();
			var c = a.Ab;
			c.right < this.xb || c.bottom < this.yb || c.left > this.Ib || c.top > this.Hb || (b.wn(a.Mh), a.Hu ? this.ix(a, b) : (b.Pd(0), b.oh(a.nd, a.hd), a.De(b)))
		}
	};
	b.prototype.hx = function(a, b) {
		if (a.visible && 0 !== a.width && 0 !== a.height) {
			a.Ua();
			var c = a.Ab;
			c.right < this.xb || c.bottom < this.yb || c.left > this.Ib || c.top > this.Hb || (a.Mh = this.c.Mh++, 0 === a.fd && 1 === a.opacity && a.rg && a.Ni && (b.wn(a.Mh), a.Ni(b)))
		}
	};
	b.prototype.ix = function(a, b) {
		var c = a.jb[0].nc,
			e = a.jb[0].index,
			d = this.Ge();
		if (1 !== a.jb.length || b.nq(c) || b.Az(c) || (a.M || a.V.wc()) && b.Pk(c) || 1 !== a.opacity || a.type.pb.et) this.jc.sq(b, this, a, this.Cf ? this.c.zc : this.jc.dk()), b.Df(), b.scale(d, d), b.uq(-this.wc()), b.translate((this.xb + this.Ib) / -2, (this.yb + this.Hb) / -2), b.hf();
		else {
			b.Pd(c);
			b.oh(a.nd, a.hd);
			b.kn(c) && (this.c.Ta = !0);
			var f = 0,
				g = 0,
				h = 0,
				l = 0;
			b.Pk(c) && (c = a.Ab, f = this.ud(c.left, c.top, !0, !0), g = this.ud(c.left, c.top, !1, !0), h = this.ud(c.right, c.bottom, !0, !0), c = this.ud(c.right, c.bottom, !1, !0), f = f / windowWidth, g = 1 - g / windowHeight, h = h / windowWidth, l = 1 - c / windowHeight);
			b.sj(this.Cf ? this.c.zc : this.jc.dk(), 1 / a.width, 1 / a.height, f, g, h, l, d, this.wc(), this.xb, this.yb, (this.xb + this.Ib) / 2, (this.yb + this.Hb) / 2, this.c.Jc.Fa, a.Kb[e]);
			a.De(b)
		}
	};
	b.prototype.Vb = function(a, b, c, e) {
		var d = this.c.devicePixelRatio;
		this.c.$g && (a *= d, b *= d);
		var d = this.c.Dt,
			f = this.c.Et,
			d = (this.jc.scrollX - d) * this.Ld + d,
			f = (this.jc.scrollY - f) * this.Md + f,
			g = d,
			h = f,
			l = 1 / this.Ge(!e);
		e ? (g -= this.c.wa * l / 2, h -= this.c.ua * l / 2) : (g -= this.c.width * l / 2, h -= this.c.height * l / 2);
		g += a * l;
		h += b * l;
		b = this.wc();
		0 !== b && (g -= d, h -= f, a = Math.cos(b), b = Math.sin(b), e = g * a - h * b, h = h * a + g * b, g = e + d, h += f);
		return c ? g : h
	};
	b.prototype.ud = function(a, b, c, e) {
		var d = this.c.Dt,
			f = this.c.Et,
			g = (this.jc.scrollX - d) * this.Ld + d,
			h = (this.jc.scrollY - f) * this.Md + f,
			f = g,
			d = h,
			l = this.wc();
		if (0 !== l) {
			a -= g;
			b -= h;
			var n = Math.cos(-l),
				l = Math.sin(-l),
				D = a * n - b * l;
			b = b * n + a * l;
			a = D + g;
			b += h
		}
		g = 1 / this.Ge(!e);
		e ? (f -= this.c.wa * g / 2, d -= this.c.ua * g / 2) : (f -= this.c.width * g / 2, d -= this.c.height * g / 2);
		f = (a - f) / g;
		d = (b - d) / g;
		a = this.c.devicePixelRatio;
		this.c.$g && !e && (f /= a, d /= a);
		return c ? f : d
	};
	b.prototype.Nc = function() {
		var a, b, c, e = {
			s: this.scale,
			a: this.M,
			vl: this.xb,
			vt: this.yb,
			vr: this.Ib,
			vb: this.Hb,
			v: this.visible,
			bc: this.Ue,
			t: this.ff,
			px: this.Ld,
			py: this.Md,
			o: this.opacity,
			zr: this.pd,
			fx: [],
			cg: this.Rj,
			instances: []
		};
		a = 0;
		for (b = this.Da.length; a < b; a++) c = this.Da[a], e.fx.push({
			name: c.name,
			active: c.sc,
			params: this.Kb[c.index]
		});
		return e
	};
	b.prototype.kd = function(a) {
		var b, e, d;
		this.scale = a.s;
		this.M = a.a;
		this.xb = a.vl;
		this.yb = a.vt;
		this.Ib = a.vr;
		this.Hb = a.vb;
		this.visible = a.v;
		this.Ue = a.bc;
		this.ff = a.t;
		this.Ld = a.px;
		this.Md = a.py;
		this.opacity = a.o;
		this.pd = a.zr;
		this.Rj = a.cg || [];
		Ha(this.ie, this.lu);
		var f = new ba;
		b = 0;
		for (d = this.Rj.length; b < d; ++b) f.add(this.Rj[b]);
		e = b = 0;
		for (d = this.ie.length; b < d; ++b) f.contains(this.ie[b][2]) || (this.ie[e] = this.ie[b], ++e);
		Da(this.ie, e);
		e = a.fx;
		b = 0;
		for (d = e.length; b < d; b++) if (a = this.To(e[b].name)) a.sc = e[b].active, this.Kb[a.index] = e[b].params;
		this.gf();
		this.G.sort(c);
		this.wi = !0
	};
	Jc = b
})();
(function() {
	function a(a, b) {
		var c, e = a.length;
		switch (e) {
		case 0:
			return !0;
		case 1:
			return a[0] === b[0];
		case 2:
			return a[0] === b[0] && a[1] === b[1];
		default:
			for (c = 0; c < e; c++) if (a[c] !== b[c]) return !1;
			return !0
		}
	}
	function c(a, b) {
		return a.index - b.index
	}
	function b(b) {
		var e, d, f, g;
		2 === b.length ? b[0].index > b[1].index && (e = b[0], b[0] = b[1], b[1] = e) : 2 < b.length && b.sort(c);
		b.length >= t.length && (t.length = b.length + 1);
		t[b.length] || (t[b.length] = []);
		g = t[b.length];
		e = 0;
		for (d = g.length; e < d; e++) if (f = g[e], a(b, f)) return f;
		g.push(b);
		return b
	}

	function d(a, b) {
		this.c = a;
		this.xu = {};
		this.Zr = {};
		this.fp = !1;
		this.os = new ba;
		this.Co = [];
		this.ko = [];
		this.name = b[0];
		var c = b[1];
		this.Tg = [];
		var e, d;
		e = 0;
		for (d = c.length; e < d; e++) this.qs(c[e], null, this.Tg)
	}
	function f(a) {
		this.type = a;
		this.G = [];
		this.gb = [];
		this.bb = !0
	}
	function h(a, b, c) {
		this.sheet = a;
		this.parent = b;
		this.c = a.c;
		this.wb = [];
		this.ph = [];
		this.ns = this.In = this.Kq = this.kp = this.group = this.ju = !1;
		this.Gc = [];
		this.we = [];
		this.Pe = [];
		this.fk = "";
		this.Vh = this.kp = this.group = !1;
		this.Nl = null;
		c[1] && (this.fk = c[1][1].toLowerCase(), this.group = !0, this.kp = !! c[1][0], this.Nl = [], this.Vh = this.kp, this.c.Ei.push(this), this.c.Si[this.fk] = this);
		this.Le = c[2];
		this.Xa = c[4];
		this.group || (this.c.Hr[this.Xa.toString()] = this);
		var e = c[5];
		a = 0;
		for (b = e.length; a < b; a++) {
			var d = new Kc(this, e[a]);
			d.index = a;
			this.Gc.push(d);
			this.Ar(d.type)
		}
		e = c[6];
		a = 0;
		for (b = e.length; a < b; a++) d = new Lc(this, e[a]), d.index = a, this.we.push(d);
		if (8 === c.length) for (c = c[7], a = 0, b = c.length; a < b; a++) this.sheet.qs(c[a], this, this.Pe);
		this.Cm = !1;
		this.Gc.length && (this.Cm = null == this.Gc[0].type && this.Gc[0].Xc == M.prototype.L.Su)
	}
	function e(a, b) {
		var c, e, d;
		if (a && (-1 === b.indexOf(a) && b.push(a), a.td)) for (c = 0, e = a.Ud.length; c < e; c++) d = a.Ud[c], a !== d && -1 === b.indexOf(d) && b.push(d)
	}
	function g(a, b) {
		this.fe = a;
		this.sheet = a.sheet;
		this.c = a.c;
		this.Oa = [];
		this.Qb = [];
		this.fa = {};
		this.index = -1;
		this.Kj = !1;
		this.Xc = this.c.Gg(b[1]);
		this.trigger = 0 < b[3];
		this.Yr = 2 === b[3];
		this.yf = b[4];
		this.wm = b[5];
		this.Yy = b[6];
		this.Xa = b[7];
		this.c.Ki[this.Xa.toString()] = this; - 1 === b[0] ? (this.type = null, this.mc = this.wq, this.Gh = null, this.Ve = -1) : (this.type = this.c.da[b[0]], this.mc = this.Yy ? this.Qz : this.vq, b[2] ? (this.Gh = this.type.km(b[2]), this.Ve = this.type.Qo(b[2])) : (this.Gh = null, this.Ve = -1), this.fe.parent && this.fe.parent.yn());
		this.Yr && (this.mc = this.Rz);
		if (10 === b.length) {
			var c, e, d = b[9];
			c = 0;
			for (e = d.length; c < e; c++) {
				var f = new Mc(this, d[c]);
				this.Oa.push(f)
			}
			this.Qb.length = d.length
		}
	}
	function l(a, b) {
		this.fe = a;
		this.sheet = a.sheet;
		this.c = a.c;
		this.Oa = [];
		this.Qb = [];
		this.fa = {};
		this.index = -1;
		this.Kj = !1;
		this.Xc = this.c.Gg(b[1]); - 1 === b[0] ? (this.type = null, this.mc = this.wq, this.Gh = null, this.Ve = -1) : (this.type = this.c.da[b[0]], this.mc = this.vq, b[2] ? (this.Gh = this.type.km(b[2]), this.Ve = this.type.Qo(b[2])) : (this.Gh = null, this.Ve = -1));
		this.Xa = b[3];
		this.c.Di[this.Xa.toString()] = this;
		if (6 === b.length) {
			var c, e, d = b[5];
			c = 0;
			for (e = d.length; c < e; c++) {
				var f = new Mc(this, d[c]);
				this.Oa.push(f)
			}
			this.Qb.length = d.length
		}
	}
	function n() {
		v++;
		u.length === v && u.push(new Nc);
		return u[v]
	}
	function k(a, b) {
		this.Me = a;
		this.fe = a.fe;
		this.sheet = a.sheet;
		this.c = a.c;
		this.type = b[0];
		this.uf = null;
		this.sg = 0;
		this.get = null;
		this.Pr = 0;
		this.jc = null;
		this.key = 0;
		this.object = null;
		this.index = 0;
		this.hl = this.ri = this.hl = this.ri = this.$r = this.Ph = this.il = null;
		this.Re = !1;
		var c, e, d;
		switch (b[0]) {
		case 0:
		case 7:
			this.uf = new Oc(this, b[1]);
			this.sg = 0;
			this.get = this.xy;
			break;
		case 1:
			this.uf = new Oc(this, b[1]);
			this.sg = 0;
			this.get = this.yy;
			break;
		case 5:
			this.uf = new Oc(this, b[1]);
			this.sg = 0;
			this.get = this.Cy;
			break;
		case 3:
		case 8:
			this.Pr = b[1];
			this.get = this.uy;
			break;
		case 6:
			this.jc = this.c.Gp[b[1]];
			this.get = this.Dy;
			break;
		case 9:
			this.key = b[1];
			this.get = this.By;
			break;
		case 4:
			this.object = this.c.da[b[1]];
			this.get = this.Ey;
			this.fe.Ar(this.object);
			this.Me instanceof Lc ? this.fe.yn() : this.fe.parent && this.fe.parent.yn();
			break;
		case 10:
			this.index = b[1];
			a.type.Ea ? (this.get = this.zy, this.Re = !0) : this.get = this.Ay;
			break;
		case 11:
			this.il = b[1];
			this.Ph = null;
			this.get = this.wy;
			break;
		case 2:
		case 12:
			this.$r = b[1];
			this.get = this.ty;
			break;
		case 13:
			for (this.get = this.Fy, this.ri = [], this.hl = [], c = 1, e = b.length; c < e; c++) d = new Mc(this.Me, b[c]), this.ri.push(d), this.hl.push(0)
		}
	}

	function m(a, b, c) {
		this.sheet = a;
		this.parent = b;
		this.c = a.c;
		this.wb = [];
		this.name = c[1];
		this.jl = c[2];
		this.jp = c[3];
		this.sk = !! c[4];
		this.Bm = !! c[5];
		this.Xa = c[6];
		this.c.Cj[this.Xa.toString()] = this;
		this.data = this.jp;
		this.parent ? (this.ki = this.sk || this.Bm ? -1 : this.c.bA++, this.c.ow.push(this)) : (this.ki = -1, this.c.nw.push(this))
	}
	function q(a, b, c) {
		this.sheet = a;
		this.parent = b;
		this.c = a.c;
		this.wb = [];
		this.hk = null;
		this.Ly = c[1];
		this.sc = !0
	}
	function p() {
		this.pu = [];
		this.reset(null)
	}
	var t = [];
	d.prototype.toString = function() {
		return this.name
	};
	d.prototype.qs = function(a, b, c) {
		switch (a[0]) {
		case 0:
			a = new Pc(this, b, a);
			if (a.Le) for (c.push(a), c = 0, b = a.Gc.length; c < b; c++) a.Gc[c].trigger && this.rs(a, c);
			else a.As() ? this.rs(a, 0) : c.push(a);
			break;
		case 1:
			a = new zc(this, b, a);
			c.push(a);
			break;
		case 2:
			a = new Qc(this, b, a), c.push(a)
		}
	};
	d.prototype.cc = function() {
		var a, b;
		a = 0;
		for (b = this.Tg.length; a < b; a++) this.Tg[a].cc(a < b - 1 && this.Tg[a + 1].Cm)
	};
	d.prototype.Qq = function() {
		J(this.Co);
		J(this.ko);
		this.yr(this);
		J(this.ko)
	};
	d.prototype.yr = function(a) {
		var b, c, e, d, f = a.Co,
			g = a.ko,
			h = this.os.jf();
		b = 0;
		for (c = h.length; b < c; ++b) e = h[b], d = e.hk, !e.sc || a === d || -1 < g.indexOf(d) || (g.push(d), d.yr(a), f.push(d))
	};
	d.prototype.mc = function(a) {
		this.c.GB || (this.fp = !0, a || (this.c.rp = !0));
		var b, c;
		b = 0;
		for (c = this.Tg.length; b < c; b++) {
			var e = this.Tg[b];
			e.mc();
			this.c.uo(e.wb);
			this.c.Xg && this.c.ed()
		}
		a || (this.c.rp = !1)
	};
	d.prototype.rs = function(a, b) {
		a.Le || this.c.Mn.push(a);
		var c, e, d = a.Gc[b],
			f;
		d.type ? f = d.type.name : f = "system";
		var g = (c = d.Yr) ? this.Zr : this.xu;
		g[f] || (g[f] = []);
		f = g[f];
		g = d.Xc;
		if (c) {
			if (d.Oa.length && (d = d.Oa[0], 1 === d.type && 2 === d.uf.type)) {
				d = d.uf.value.toLowerCase();
				c = 0;
				for (e = f.length; c < e; c++) if (f[c].method == g) {
					c = f[c].Vj;
					c[d] ? c[d].push([a, b]) : c[d] = [
						[a, b]
					];
					return
				}
				c = {};
				c[d] = [
					[a, b]
				];
				f.push({
					method: g,
					Vj: c
				})
			}
		} else {
			c = 0;
			for (e = f.length; c < e; c++) if (f[c].method == g) {
				f[c].Vj.push([a, b]);
				return
			}
			nd && g === nd.prototype.L.Ci ? f.unshift({
				method: g,
				Vj: [
					[a, b]
				]
			}) : f.push({
				method: g,
				Vj: [
					[a, b]
				]
			})
		}
	};
	nc = d;
	f.prototype.ep = function() {
		return this.bb ? this.type.G.length : this.G.length
	};
	f.prototype.Vd = function() {
		return this.bb ? this.type.G : this.G
	};
	f.prototype.Nk = function(a) {
		a && (a.c.Hc().rd.Le ? (this.bb && (J(this.G), Ha(this.gb, a.type.G), this.bb = !1), a = this.gb.indexOf(a), -1 !== a && (this.G.push(this.gb[a]), this.gb.splice(a, 1))) : (this.bb = !1, J(this.G), this.G[0] = a))
	};
	Wb = f;
	window._c2hh_ = "417E4E0E570EED14CF766147927F77190F28B24E";
	h.prototype.cc = function(a) {
		var c, e = this.parent;
		if (this.group) for (this.In = !0; e;) {
			if (!e.group) {
				this.In = !1;
				break
			}
			e = e.parent
		}
		this.Kq = !this.As() && (!this.parent || this.parent.group && this.parent.In);
		this.ns = !! a;
		this.ph = this.wb.slice(0);
		for (e = this.parent; e;) {
			a = 0;
			for (c = e.wb.length; a < c; a++) this.lw(e.wb[a]);
			e = e.parent
		}
		this.wb = b(this.wb);
		this.ph = b(this.ph);
		a = 0;
		for (c = this.Gc.length; a < c; a++) this.Gc[a].cc();
		a = 0;
		for (c = this.we.length; a < c; a++) this.we[a].cc();
		a = 0;
		for (c = this.Pe.length; a < c; a++) this.Pe[a].cc(a < c - 1 && this.Pe[a + 1].Cm)
	};
	h.prototype.xn = function(a) {
		if (this.Vh !== !! a) {
			this.Vh = !! a;
			var b;
			a = 0;
			for (b = this.Nl.length; a < b; ++a) this.Nl[a].Cu();
			0 < b && this.c.qb.Oh && this.c.qb.Oh.Qq()
		}
	};
	h.prototype.Ar = function(a) {
		e(a, this.wb)
	};
	h.prototype.lw = function(a) {
		e(a, this.ph)
	};
	h.prototype.yn = function() {
		this.ju = !0;
		this.parent && this.parent.yn()
	};
	h.prototype.As = function() {
		return this.Gc.length ? this.Gc[0].trigger : !1
	};
	h.prototype.mc = function() {
		var a, b, c = !1,
			e = this.c,
			d = this.c.Hc();
		d.rd = this;
		var f = this.Gc;
		this.Cm || (d.Eo = !1);
		if (this.Le) {
			0 === f.length && (c = !0);
			d.Fc = 0;
			for (a = f.length; d.Fc < a; d.Fc++) b = f[d.Fc], b.trigger || (b = b.mc()) && (c = !0);
			(d.di = c) && this.sn()
		} else {
			d.Fc = 0;
			for (a = f.length; d.Fc < a; d.Fc++) if (b = f[d.Fc].mc(), !b) {
				d.di = !1;
				this.Kq && e.Xg && e.ed();
				return
			}
			d.di = !0;
			this.sn()
		}
		this.nx(d)
	};
	h.prototype.nx = function(a) {
		a.di && this.ns && (a.Eo = !0);
		this.Kq && this.c.Xg && this.c.ed()
	};
	h.prototype.Oz = function(a) {
		this.c.Hc().rd = this;
		this.Gc[a].mc() && (this.sn(), this.c.Hc().di = !0)
	};
	h.prototype.sn = function() {
		var a = this.c.Hc(),
			b;
		a.Dd = 0;
		for (b = this.we.length; a.Dd < b; a.Dd++) if (this.we[a.Dd].mc()) return;
		this.Tt()
	};
	h.prototype.Lz = function() {
		var a = this.c.Hc(),
			b;
		for (b = this.we.length; a.Dd < b; a.Dd++) if (this.we[a.Dd].mc()) return;
		this.Tt()
	};
	h.prototype.Tt = function() {
		if (this.Pe.length) {
			var a, b, c, e, d = this.Pe.length - 1;
			this.c.mn(this);
			if (this.ju) for (a = 0, b = this.Pe.length; a < b; a++) c = this.Pe[a], (e = !this.In || !this.group && a < d) && this.c.ln(c.wb), c.mc(), e ? this.c.pi(c.wb) : this.c.uo(c.wb);
			else for (a = 0, b = this.Pe.length; a < b; a++) this.Pe[a].mc();
			this.c.gn()
		}
	};
	h.prototype.Pz = function() {
		var a = this.c.Hc();
		a.rd = this;
		var b = !1,
			c;
		a.Fc = 0;
		for (c = this.Gc.length; a.Fc < c; a.Fc++) if (this.Gc[a.Fc].mc()) b = !0;
		else if (!this.Le) return !1;
		return this.Le ? b : !0
	};
	h.prototype.Mz = function() {
		this.c.Qh++;
		var a = this.c.Hc().Fc,
			b = this.c.mn(this);
		if (!this.Le) for (b.Fc = a + 1, a = this.Gc.length; b.Fc < a; b.Fc++) if (!this.Gc[b.Fc].mc()) {
			this.c.gn();
			return
		}
		this.sn();
		this.c.gn()
	};
	h.prototype.Sy = function(a) {
		var b = a.index;
		if (0 === b) return !0;
		for (--b; 0 <= b; --b) if (this.Gc[b].type === a.type) return !1;
		return !0
	};
	Pc = h;
	g.prototype.cc = function() {
		var a, b, c;
		a = 0;
		for (b = this.Oa.length; a < b; a++) c = this.Oa[a], c.cc(), c.Re && (this.Kj = !0)
	};
	g.prototype.Rz = function() {
		return !0
	};
	g.prototype.wq = function() {
		var a, b;
		a = 0;
		for (b = this.Oa.length; a < b; a++) this.Qb[a] = this.Oa[a].get();
		return hb(this.Xc.apply(this.c.Gf, this.Qb), this.wm)
	};
	g.prototype.Qz = function() {
		var a, b;
		a = 0;
		for (b = this.Oa.length; a < b; a++) this.Qb[a] = this.Oa[a].get();
		a = this.Xc.apply(this.Gh ? this.Gh : this.type, this.Qb);
		this.type.xe();
		return a
	};
	g.prototype.vq = function() {
		var a, b, c, e, d, f, g, h, l = this.type,
			k = l.Ma(),
			p = this.fe.Le && !this.trigger;
		b = 0;
		var n = l.td,
			m = l.Ea,
			q = l.Wf,
			t = this.Ve,
			v = -1 < t,
			u = this.Kj,
			F = this.Oa,
			R = this.Qb,
			T = this.wm,
			N = this.Xc,
			I;
		if (u) for (b = 0, d = F.length; b < d; ++b) f = F[b], f.Re || (R[b] = f.get(0));
		else for (b = 0, d = F.length; b < d; ++b) R[b] = F[b].get(0);
		if (k.bb) {
			J(k.G);
			J(k.gb);
			I = l.G;
			a = 0;
			for (e = I.length; a < e; ++a) {
				h = I[a];
				if (u) for (b = 0, d = F.length; b < d; ++b) f = F[b], f.Re && (R[b] = f.get(a));
				v ? (b = 0, m && (b = h.type.Pi[q]), b = N.apply(h.Ca[t + b], R)) : b = N.apply(h, R);
				(g = hb(b, T)) ? k.G.push(h) : p && k.gb.push(h)
			}
			l.finish && l.finish(!0);
			k.bb = !1;
			l.xe();
			return k.ep()
		}
		c = 0;
		I = (g = p && !this.fe.Sy(this)) ? k.gb : k.G;
		var U = !1;
		a = 0;
		for (e = I.length; a < e; ++a) {
			h = I[a];
			if (u) for (b = 0, d = F.length; b < d; ++b) f = F[b], f.Re && (R[b] = f.get(a));
			v ? (b = 0, m && (b = h.type.Pi[q]), b = N.apply(h.Ca[t + b], R)) : b = N.apply(h, R);
			if (hb(b, T)) if (U = !0, g) {
				if (k.G.push(h), n) for (b = 0, d = h.siblings.length; b < d; b++) f = h.siblings[b], f.type.Ma().G.push(f)
			} else {
				I[c] = h;
				if (n) for (b = 0, d = h.siblings.length; b < d; b++) f = h.siblings[b], f.type.Ma().G[c] = f;
				c++
			} else if (g) {
				I[c] = h;
				if (n) for (b = 0, d = h.siblings.length; b < d; b++) f = h.siblings[b], f.type.Ma().gb[c] = f;
				c++
			} else if (p && (k.gb.push(h), n)) for (b = 0, d = h.siblings.length; b < d; b++) f = h.siblings[b], f.type.Ma().gb.push(f)
		}
		Da(I, c);
		if (n) for (m = l.Ud, a = 0, e = m.length; a < e; a++) h = m[a].Ma(), g ? Da(h.gb, c) : Da(h.G, c);
		c = U;
		if (g && !U) for (a = 0, e = k.G.length; a < e; a++) {
			h = k.G[a];
			if (u) for (b = 0, d = F.length; b < d; b++) f = F[b], f.Re && (R[b] = f.get(a));
			b = v ? N.apply(h.Ca[t], R) : N.apply(h, R);
			if (hb(b, T)) {
				U = !0;
				break
			}
		}
		l.finish && l.finish(c || p);
		return p ? U : k.ep()
	};
	Kc = g;
	l.prototype.cc = function() {
		var a, b, c;
		a = 0;
		for (b = this.Oa.length; a < b; a++) c = this.Oa[a], c.cc(), c.Re && (this.Kj = !0)
	};
	l.prototype.wq = function() {
		var a = this.c,
			b, c, e = this.Oa,
			d = this.Qb;
		b = 0;
		for (c = e.length; b < c; ++b) d[b] = e[b].get();
		return this.Xc.apply(a.Gf, d)
	};
	l.prototype.vq = function() {
		var a = this.type,
			b = this.Ve,
			c = a.Wf,
			e = this.Kj,
			d = this.Oa,
			f = this.Qb,
			g = this.Xc,
			h = a.Ma().Vd(),
			a = a.Ea,
			l = -1 < b,
			k, p, n, m, q, t;
		if (e) for (p = 0, m = d.length; p < m; ++p) q = d[p], q.Re || (f[p] = q.get(0));
		else for (p = 0, m = d.length; p < m; ++p) f[p] = d[p].get(0);
		k = 0;
		for (n = h.length; k < n; ++k) {
			t = h[k];
			if (e) for (p = 0, m = d.length; p < m; ++p) q = d[p], q.Re && (f[p] = q.get(k));
			l ? (p = 0, a && (p = t.type.Pi[c]), g.apply(t.Ca[b + p], f)) : g.apply(t, f)
		}
		return !1
	};
	Lc = l;
	var u = [],
		v = -1;
	k.prototype.cc = function() {
		var a, b;
		if (11 === this.type) this.Ph = this.c.gs(this.il, this.fe.parent);
		else if (13 === this.type) for (a = 0, b = this.ri.length; a < b; a++) this.ri[a].cc();
		this.uf && this.uf.cc()
	};
	k.prototype.gz = function(a) {
		this.Re || !a || a.pb.zn || (this.Re = !0)
	};
	k.prototype.au = function() {
		this.Re = !0
	};
	k.prototype.xy = function(a) {
		this.sg = a || 0;
		a = n();
		this.uf.get(a);
		v--;
		return a.data
	};
	k.prototype.yy = function(a) {
		this.sg = a || 0;
		a = n();
		this.uf.get(a);
		v--;
		return ka(a.data) ? a.data : ""
	};
	k.prototype.Ey = function() {
		return this.object
	};
	k.prototype.uy = function() {
		return this.Pr
	};
	k.prototype.Cy = function(a) {
		this.sg = a || 0;
		a = n();
		this.uf.get(a);
		v--;
		return a.Ic() ? this.c.Zf(a.data) : this.c.ck(a.data)
	};
	k.prototype.Dy = function() {
		return this.jc
	};
	k.prototype.By = function() {
		return this.key
	};
	k.prototype.Ay = function() {
		return this.index
	};
	k.prototype.zy = function(a) {
		a = a || 0;
		var b = this.Me.type,
			c = null,
			c = b.Ma(),
			e = c.Vd();
		if (e.length) c = e[a % e.length].type;
		else if (c.gb.length) c = c.gb[a % c.gb.length].type;
		else if (b.G.length) c = b.G[a % b.G.length].type;
		else return 0;
		return this.index + c.cm[b.Wf]
	};
	k.prototype.wy = function() {
		return this.Ph
	};
	k.prototype.ty = function() {
		return this.$r
	};
	k.prototype.Fy = function() {
		var a, b;
		a = 0;
		for (b = this.ri.length; a < b; a++) this.hl[a] = this.ri[a].get();
		return this.hl
	};
	Mc = k;
	m.prototype.cc = function() {
		this.wb = b(this.wb)
	};
	m.prototype.qg = function(a) {
		var b = this.c.es();
		this.parent && !this.sk && b ? (this.ki >= b.length && (b.length = this.ki + 1), b[this.ki] = a) : this.data = a
	};
	m.prototype.Uh = function() {
		var a = this.c.es();
		return !this.parent || this.sk || !a || this.Bm ? this.data : this.ki >= a.length || "undefined" === typeof a[this.ki] ? this.jp : a[this.ki]
	};
	m.prototype.mc = function() {
		!this.parent || this.sk || this.Bm || this.qg(this.jp)
	};
	zc = m;
	q.prototype.toString = function() {
		return "include:" + this.hk.toString()
	};
	q.prototype.cc = function() {
		this.hk = this.c.Go[this.Ly];
		this.sheet.os.add(this);
		this.wb = b(this.wb);
		for (var a = this.parent; a;) a.group && a.Nl.push(this), a = a.parent;
		this.Cu()
	};
	q.prototype.mc = function() {
		this.parent && this.c.Qk(this.c.da);
		this.hk.fp || this.hk.mc(!0);
		this.parent && this.c.pi(this.c.da)
	};
	q.prototype.Cu = function() {
		for (var a = this.parent; a;) {
			if (a.group && !a.Vh) {
				this.sc = !1;
				return
			}
			a = a.parent
		}
		this.sc = !0
	};
	Qc = q;
	p.prototype.reset = function(a) {
		this.rd = a;
		this.Dd = this.Fc = 0;
		J(this.pu);
		this.Eo = this.di = !1
	};
	wc = p
})();
(function() {
	function a(a, b) {
		this.Me = a;
		this.c = a.c;
		this.type = b[0];
		this.get = [this.Ix, this.Ex, this.Rx, this.Ux, this.rx, this.Sx, this.Mx, this.Bx, this.Lx, this.Qx, this.tx, this.Px, this.Cx, this.Nx, this.Jx, this.Kx, this.Fx, this.Gx, this.Ax, this.Tx, this.Ox, this.Hx, this.zx, this.Dx][this.type];
		var c = null;
		this.hg = this.Oa = this.Qb = this.Xc = this.Fn = this.second = this.first = this.value = null;
		this.Ve = -1;
		this.Xe = null;
		this.Iu = -1;
		this.Ph = this.il = null;
		this.qj = !1;
		switch (this.type) {
		case 0:
		case 1:
		case 2:
			this.value = b[1];
			break;
		case 3:
			this.first = new Oc(a, b[1]);
			break;
		case 18:
			this.first = new Oc(a, b[1]);
			this.second = new Oc(a, b[2]);
			this.Fn = new Oc(a, b[3]);
			break;
		case 19:
			this.Xc = this.c.Gg(b[1]);
			this.Xc !== M.prototype.sb.random && this.Xc !== M.prototype.sb.zw || this.Me.au();
			this.Qb = [];
			this.Oa = [];
			3 === b.length ? (c = b[2], this.Qb.length = c.length + 1) : this.Qb.length = 1;
			break;
		case 20:
			this.hg = this.c.da[b[1]];
			this.Ve = -1;
			this.Xc = this.c.Gg(b[2]);
			this.qj = b[3];
			Uc.Function && this.Xc === Uc.Function.prototype.sb.zA && this.Me.au();
			b[4] ? this.Xe = new Oc(a, b[4]) : this.Xe = null;
			this.Qb = [];
			this.Oa = [];
			6 === b.length ? (c = b[5], this.Qb.length = c.length + 1) : this.Qb.length = 1;
			break;
		case 21:
			this.hg = this.c.da[b[1]];
			this.qj = b[2];
			b[3] ? this.Xe = new Oc(a, b[3]) : this.Xe = null;
			this.Iu = b[4];
			break;
		case 22:
			this.hg = this.c.da[b[1]];
			this.hg.km(b[2]);
			this.Ve = this.hg.Qo(b[2]);
			this.Xc = this.c.Gg(b[3]);
			this.qj = b[4];
			b[5] ? this.Xe = new Oc(a, b[5]) : this.Xe = null;
			this.Qb = [];
			this.Oa = [];
			7 === b.length ? (c = b[6], this.Qb.length = c.length + 1) : this.Qb.length = 1;
			break;
		case 23:
			this.il = b[1], this.Ph = null
		}
		this.Me.gz(this.hg);
		4 <= this.type && 17 >= this.type && (this.first = new Oc(a, b[1]), this.second = new Oc(a, b[2]));
		if (c) {
			var d, f;
			d = 0;
			for (f = c.length; d < f; d++) this.Oa.push(new Oc(a, c[d]))
		}
	}
	function c() {
		++h;
		f.length === h && f.push(new Nc);
		return f[h]
	}
	function b(a, b, c) {
		var d, f;
		d = 0;
		for (f = a.length; d < f; ++d) a[d].get(c), b[d + 1] = c.data
	}
	function d(a, b) {
		this.type = a || Rc.Ai;
		this.data = b || 0;
		this.oi = null;
		this.type == Rc.Ai && (this.data = Math.floor(this.data))
	}
	a.prototype.cc = function() {
		23 === this.type && (this.Ph = this.Me.c.gs(this.il, this.Me.fe.parent));
		this.first && this.first.cc();
		this.second && this.second.cc();
		this.Fn && this.Fn.cc();
		this.Xe && this.Xe.cc();
		if (this.Oa) {
			var a, b;
			a = 0;
			for (b = this.Oa.length; a < b; a++) this.Oa[a].cc()
		}
	};
	var f = [],
		h = -1;
	a.prototype.Tx = function(a) {
		var d = this.Oa,
			f = this.Qb;
		f[0] = a;
		a = c();
		b(d, f, a);
		--h;
		this.Xc.apply(this.c.Gf, f)
	};
	a.prototype.Ox = function(a) {
		var d = this.hg,
			f = this.Qb,
			n = this.Oa,
			k = this.Xe,
			m = this.Xc,
			q = this.Me.sg,
			p = d.Ma(),
			t = p.Vd();
		if (!t.length) if (p.gb.length) t = p.gb;
		else {
			this.qj ? a.Oc("") : a.ub(0);
			return
		}
		f[0] = a;
		a.oi = d;
		a = c();
		b(n, f, a);
		k && (k.get(a), a.Ic() && (q = a.data, t = d.G));
		--h;
		d = t.length;
		if (q >= d || q <= -d) q %= d;
		0 > q && (q += d);
		m.apply(t[q], f)
	};
	a.prototype.zx = function(a) {
		var d = this.hg,
			f = this.Qb,
			n = this.Oa,
			k = this.Xe,
			m = this.Ve,
			q = this.Xc,
			p = this.Me.sg,
			t = d.Ma(),
			u = t.Vd();
		if (!u.length) if (t.gb.length) u = t.gb;
		else {
			this.qj ? a.Oc("") : a.ub(0);
			return
		}
		f[0] = a;
		a.oi = d;
		a = c();
		b(n, f, a);
		k && (k.get(a), a.Ic() && (p = a.data, u = d.G));
		--h;
		n = u.length;
		if (p >= n || p <= -n) p %= n;
		0 > p && (p += n);
		p = u[p];
		u = 0;
		d.Ea && (u = p.type.Pi[d.Wf]);
		q.apply(p.Ca[m + u], f)
	};
	a.prototype.Hx = function(a) {
		var b = this.Xe,
			d = this.hg,
			f = this.Iu,
			k = this.Me.sg,
			m = d.Ma(),
			q = m.Vd();
		if (!q.length) if (m.gb.length) q = m.gb;
		else {
			this.qj ? a.Oc("") : a.ub(0);
			return
		}
		if (b) {
			m = c();
			b.get(m);
			if (m.Ic()) {
				k = m.data;
				q = d.G;
				0 !== q.length && (k %= q.length, 0 > k && (k += q.length));
				k = d.Vo(k);
				d = k.yc[f];
				ka(d) ? a.Oc(d) : a.na(d);
				--h;
				return
			}--h
		}
		b = q.length;
		if (k >= b || k <= -b) k %= b;
		0 > k && (k += b);
		k = q[k];
		q = 0;
		d.Ea && (q = k.type.cm[d.Wf]);
		d = k.yc[f + q];
		ka(d) ? a.Oc(d) : a.na(d)
	};
	a.prototype.Ix = function(a) {
		a.type = Rc.Ai;
		a.data = this.value
	};
	a.prototype.Ex = function(a) {
		a.type = Rc.yi;
		a.data = this.value
	};
	a.prototype.Rx = function(a) {
		a.type = Rc.String;
		a.data = this.value
	};
	a.prototype.Ux = function(a) {
		this.first.get(a);
		a.Ic() && (a.data = -a.data)
	};
	a.prototype.rx = function(a) {
		this.first.get(a);
		var b = c();
		this.second.get(b);
		a.Ic() && b.Ic() && (a.data += b.data, b.Yi() && a.ij());
		--h
	};
	a.prototype.Sx = function(a) {
		this.first.get(a);
		var b = c();
		this.second.get(b);
		a.Ic() && b.Ic() && (a.data -= b.data, b.Yi() && a.ij());
		--h
	};
	a.prototype.Mx = function(a) {
		this.first.get(a);
		var b = c();
		this.second.get(b);
		a.Ic() && b.Ic() && (a.data *= b.data, b.Yi() && a.ij());
		--h
	};
	a.prototype.Bx = function(a) {
		this.first.get(a);
		var b = c();
		this.second.get(b);
		a.Ic() && b.Ic() && (a.data /= b.data, a.ij());
		--h
	};
	a.prototype.Lx = function(a) {
		this.first.get(a);
		var b = c();
		this.second.get(b);
		a.Ic() && b.Ic() && (a.data %= b.data, b.Yi() && a.ij());
		--h
	};
	a.prototype.Qx = function(a) {
		this.first.get(a);
		var b = c();
		this.second.get(b);
		a.Ic() && b.Ic() && (a.data = Math.pow(a.data, b.data), b.Yi() && a.ij());
		--h
	};
	a.prototype.tx = function(a) {
		this.first.get(a);
		var b = c();
		this.second.get(b);
		b.aj() || a.aj() ? this.wx(a, b) : this.ux(a, b);
		--h
	};
	a.prototype.wx = function(a, b) {
		a.aj() && b.aj() ? this.yx(a, b) : this.xx(a, b)
	};
	a.prototype.yx = function(a, b) {
		a.data += b.data
	};
	a.prototype.xx = function(a, b) {
		a.aj() ? a.data += (Math.round(1E10 * b.data) / 1E10).toString() : a.Oc(a.data.toString() + b.data)
	};
	a.prototype.ux = function(a, b) {
		a.ub(a.data && b.data ? 1 : 0)
	};
	a.prototype.Px = function(a) {
		this.first.get(a);
		var b = c();
		this.second.get(b);
		a.Ic() && b.Ic() && (a.data || b.data ? a.ub(1) : a.ub(0));
		--h
	};
	a.prototype.Ax = function(a) {
		this.first.get(a);
		a.data ? this.second.get(a) : this.Fn.get(a)
	};
	a.prototype.Cx = function(a) {
		this.first.get(a);
		var b = c();
		this.second.get(b);
		a.ub(a.data === b.data ? 1 : 0);
		--h
	};
	a.prototype.Nx = function(a) {
		this.first.get(a);
		var b = c();
		this.second.get(b);
		a.ub(a.data !== b.data ? 1 : 0);
		--h
	};
	a.prototype.Jx = function(a) {
		this.first.get(a);
		var b = c();
		this.second.get(b);
		a.ub(a.data < b.data ? 1 : 0);
		--h
	};
	a.prototype.Kx = function(a) {
		this.first.get(a);
		var b = c();
		this.second.get(b);
		a.ub(a.data <= b.data ? 1 : 0);
		--h
	};
	a.prototype.Fx = function(a) {
		this.first.get(a);
		var b = c();
		this.second.get(b);
		a.ub(a.data > b.data ? 1 : 0);
		--h
	};
	a.prototype.Gx = function(a) {
		this.first.get(a);
		var b = c();
		this.second.get(b);
		a.ub(a.data >= b.data ? 1 : 0);
		--h
	};
	a.prototype.Dx = function(a) {
		var b = this.Ph.Uh();
		ja(b) ? a.na(b) : a.Oc(b)
	};
	Oc = a;
	d.prototype.Yi = function() {
		return this.type === Rc.yi
	};
	d.prototype.Ic = function() {
		return this.type === Rc.Ai || this.type === Rc.yi
	};
	d.prototype.aj = function() {
		return this.type === Rc.String
	};
	d.prototype.ij = function() {
		this.Yi() || (this.aj() && (this.data = parseFloat(this.data)), this.type = Rc.yi)
	};
	d.prototype.ub = function(a) {
		this.type = Rc.Ai;
		this.data = Math.floor(a)
	};
	d.prototype.na = function(a) {
		this.type = Rc.yi;
		this.data = a
	};
	d.prototype.Oc = function(a) {
		this.type = Rc.String;
		this.data = a
	};
	d.prototype.$z = function(a) {
		ja(a) ? (this.type = Rc.yi, this.data = a) : ka(a) ? (this.type = Rc.String, this.data = a.toString()) : (this.type = Rc.Ai, this.data = 0)
	};
	Nc = d;
	Rc = {
		Ai: 0,
		yi: 1,
		String: 2
	}
})();

function M(a) {
	this.c = a;
	this.Qd = []
}
M.prototype.Nc = function() {
	var a = {},
		c, b, d, f, h, e, g, l;
	a.waits = [];
	var n = a.waits,
		k;
	c = 0;
	for (b = this.Qd.length; c < b; c++) {
		e = this.Qd[c];
		k = {
			t: e.time,
			st: e.hu,
			s: e.Dq,
			ev: e.Oi.Xa,
			sm: [],
			sols: {}
		};
		e.Oi.we[e.Dd] && (k.act = e.Oi.we[e.Dd].Xa);
		d = 0;
		for (f = e.wb.length; d < f; d++) k.sm.push(e.wb[d].Xa);
		for (h in e.yd) if (e.yd.hasOwnProperty(h)) {
			g = this.c.da[parseInt(h, 10)];
			l = {
				sa: e.yd[h].tn,
				insts: []
			};
			d = 0;
			for (f = e.yd[h].$f.length; d < f; d++) l.insts.push(e.yd[h].$f[d].uid);
			k.sols[g.Xa.toString()] = l
		}
		n.push(k)
	}
	return a
};
M.prototype.kd = function(a) {
	a = a.waits;
	var c, b, d, f, h, e, g, l, n, k, m;
	J(this.Qd);
	c = 0;
	for (b = a.length; c < b; c++) if (e = a[c], l = this.c.Hr[e.ev.toString()]) {
		n = -1;
		d = 0;
		for (f = l.we.length; d < f; d++) if (l.we[d].Xa === e.act) {
			n = d;
			break
		}
		if (-1 !== n) {
			g = {
				yd: {},
				wb: [],
				Do: !1
			};
			g.time = e.t;
			g.hu = e.st || "";
			g.Dq = !! e.s;
			g.Oi = l;
			g.Dd = n;
			d = 0;
			for (f = e.sm.length; d < f; d++)(l = this.c.qm(e.sm[d])) && g.wb.push(l);
			for (h in e.sols) if (e.sols.hasOwnProperty(h) && (l = this.c.qm(parseInt(h, 10)))) {
				n = e.sols[h];
				k = {
					tn: n.sa,
					$f: []
				};
				d = 0;
				for (f = n.insts.length; d < f; d++)(m = this.c.Th(n.insts[d])) && k.$f.push(m);
				g.yd[l.index.toString()] = k
			}
			this.Qd.push(g)
		}
	}
};
(function() {
	function a() {}
	function c() {}
	function b() {}
	var d = M.prototype;
	a.prototype.Uu = function() {
		return !0
	};
	a.prototype.ir = function() {
		return !0
	};
	a.prototype.zv = function() {
		return !0
	};
	a.prototype.Tu = function(a) {
		var b = this.c.lm(),
			c = b.fa.Every_lastTime || 0,
			d = this.c.Jc.Fa;
		"undefined" === typeof b.fa.Every_seconds && (b.fa.Every_seconds = a);
		var f = b.fa.Every_seconds;
		if (d >= c + f) return b.fa.Every_lastTime = c + f, d >= b.fa.Every_lastTime + .04 && (b.fa.Every_lastTime = d), b.fa.Every_seconds = a, !0;
		d < c - .1 && (b.fa.Every_lastTime = d);
		return !1
	};
	a.prototype.Qu = function(a, b, c) {
		return Tc(a.Uh(), b, c)
	};
	a.prototype.av = function(a) {
		return (a = this.c.Si[a.toLowerCase()]) && a.Vh
	};
	a.prototype.Su = function() {
		var a = this.c.Hc();
		return a.Eo ? !1 : !a.di
	};
	a.prototype.Yn = function() {
		return !0
	};
	a.prototype.pv = function() {
		return !0
	};
	a.prototype.Zn = function() {
		return !0
	};
	a.prototype.Av = function() {
		return !0
	};
	a.prototype.Xn = function() {
		return !0
	};
	a.prototype.Nu = function(a, b, c) {
		return Va(Na(a), Na(c)) <= Na(b)
	};
	a.prototype.$u = function(a, b) {
		return Za(Na(a), Na(b))
	};
	a.prototype.Zu = function(a, b, c) {
		a = Ta(a);
		b = Ta(b);
		c = Ta(c);
		return Za(c, b) ? Za(a, b) && !Za(a, c) : !(!Za(a, b) && Za(a, c))
	};
	d.L = new a;
	c.prototype.Xu = function(a) {
		this.c.tk || this.c.Oj || (this.c.Oj = a)
	};
	c.prototype.Ru = function(a, b, c, d) {
		if (b && a && (b = this.c.yo(a, b, c, d))) {
			this.c.ke++;
			var f;
			this.c.trigger(Object.getPrototypeOf(a.pb).L.Bi, b);
			if (b.td) for (c = 0, d = b.siblings.length; c < d; c++) f = b.siblings[c], this.c.trigger(Object.getPrototypeOf(f.type.pb).L.Bi, f);
			this.c.ke--;
			a = a.Ma();
			a.bb = !1;
			J(a.G);
			a.G[0] = b;
			if (b.td) for (c = 0, d = b.siblings.length; c < d; c++) f = b.siblings[c], a = f.type.Ma(), a.bb = !1, J(a.G), a.G[0] = f
		}
	};
	c.prototype.Wv = function(a, b) {
		0 === a.jl ? ja(b) ? a.qg(b) : a.qg(parseFloat(b)) : 1 === a.jl && a.qg(b.toString())
	};
	c.prototype.Mu = function(a, b) {
		0 === a.jl ? ja(b) ? a.qg(a.Uh() + b) : a.qg(a.Uh() + parseFloat(b)) : 1 === a.jl && a.qg(a.Uh() + b.toString())
	};
	c.prototype.bw = function(a, b) {
		0 === a.jl && (ja(b) ? a.qg(a.Uh() - b) : a.qg(a.Uh() - parseFloat(b)))
	};
	c.prototype.Rv = function(a, b) {
		var c = this.c.Si[a.toLowerCase()];
		if (c) switch (b) {
		case 0:
			c.xn(!1);
			break;
		case 1:
			c.xn(!0);
			break;
		case 2:
			c.xn(!c.Vh)
		}
	};
	c.prototype.Vv = function(a) {
		0 > a && (a = 0);
		this.c.vg = a
	};
	var f = [],
		h = [];
	c.prototype.fw = function(a) {
		if (!(0 > a)) {
			var b, c, d, k = this.c.Hc(),
				m;
			f.length ? m = f.pop() : m = {
				yd: {},
				wb: []
			};
			m.Do = !1;
			m.time = this.c.Jc.Fa + a;
			m.hu = "";
			m.Dq = !1;
			m.Oi = k.rd;
			m.Dd = k.Dd + 1;
			a = 0;
			for (b = this.c.da.length; a < b; a++) d = this.c.da[a], c = d.Ma(), c.bb && -1 === k.rd.wb.indexOf(d) || (m.wb.push(d), d = void 0, h.length ? d = h.pop() : d = {
				$f: []
			}, d.tn = !1, d.tn = c.bb, Ha(d.$f, c.G), m.yd[a.toString()] = d);
			this.Qd.push(m);
			return !0
		}
	};
	d.xa = new c;
	b.prototype["int"] = function(a, b) {
		ka(b) ? (a.ub(parseInt(b, 10)), isNaN(a.data) && (a.data = 0)) : a.ub(b)
	};
	b.prototype["float"] = function(a, b) {
		ka(b) ? (a.na(parseFloat(b)), isNaN(a.data) && (a.data = 0)) : a.na(b)
	};
	b.prototype.random = function(a, b, c) {
		void 0 === c ? a.na(Math.random() * b) : a.na(Math.random() * (c - b) + b)
	};
	b.prototype.sqrt = function(a, b) {
		a.na(Math.sqrt(b))
	};
	b.prototype.abs = function(a, b) {
		a.na(Math.abs(b))
	};
	b.prototype.round = function(a, b) {
		a.ub(Math.round(b))
	};
	b.prototype.floor = function(a, b) {
		a.ub(Math.floor(b))
	};
	b.prototype.ceil = function(a, b) {
		a.ub(Math.ceil(b))
	};
	b.prototype.sin = function(a, b) {
		a.na(Math.sin(Na(b)))
	};
	b.prototype.cos = function(a, b) {
		a.na(Math.cos(Na(b)))
	};
	b.prototype.tan = function(a, b) {
		a.na(Math.tan(Na(b)))
	};
	b.prototype.asin = function(a, b) {
		a.na(Oa(Math.asin(b)))
	};
	b.prototype.acos = function(a, b) {
		a.na(Oa(Math.acos(b)))
	};
	b.prototype.atan = function(a, b) {
		a.na(Oa(Math.atan(b)))
	};
	b.prototype.exp = function(a, b) {
		a.na(Math.exp(b))
	};
	b.prototype.log10 = function(a, b) {
		a.na(Math.log(b) / Math.LN10)
	};
	b.prototype.max = function(a) {
		var b = arguments[1];
		"number" !== typeof b && (b = 0);
		var c, d, f;
		c = 2;
		for (d = arguments.length; c < d; c++) f = arguments[c], "number" === typeof f && b < f && (b = f);
		a.na(b)
	};
	b.prototype.min = function(a) {
		var b = arguments[1];
		"number" !== typeof b && (b = 0);
		var c, d, f;
		c = 2;
		for (d = arguments.length; c < d; c++) f = arguments[c], "number" === typeof f && b > f && (b = f);
		a.na(b)
	};
	b.prototype.Ha = function(a) {
		a.na(this.c.Ha)
	};
	b.prototype.vg = function(a) {
		a.na(this.c.vg)
	};
	b.prototype.time = function(a) {
		a.na(this.c.Jc.Fa)
	};
	b.prototype.tg = function(a) {
		a.ub(this.c.tg)
	};
	b.prototype.Wm = function(a) {
		a.ub(this.c.Wm)
	};
	b.prototype.Mo = function(a) {
		a.ub(this.c.Mo)
	};
	b.prototype.M = function(a, b, c, d, f) {
		a.na(Oa(Ua(b, c, d, f)))
	};
	b.prototype.$y = function(a) {
		a.ub(this.c.qb.width)
	};
	b.prototype.left = function(a, b, c) {
		a.Oc(ka(b) ? b.substr(0, c) : "")
	};
	b.prototype.right = function(a, b, c) {
		a.Oc(ka(b) ? b.substr(b.length - c) : "")
	};
	b.prototype.replace = function(a, b, c, d) {
		ka(b) && ka(c) && ka(d) ? a.Oc(b.replace(new RegExp(zb(c), "gi"), d)) : a.Oc(ka(b) ? b : "")
	};
	b.prototype.trim = function(a, b) {
		a.Oc(ka(b) ? b.trim() : "")
	};
	b.prototype.zw = function(a) {
		var b = ta(Math.random() * (arguments.length - 1));
		a.$z(arguments[b + 1])
	};
	b.prototype.wo = function(a) {
		a.na(this.c.wo / 1E3)
	};
	b.prototype.fj = function(a) {
		a.na(this.c.fj)
	};
	d.sb = new b;
	d.Nz = function() {
		var a, b, c, d, k, m, q = this.c.Hc();
		a = 0;
		for (c = this.Qd.length; a < c; a++) {
			d = this.Qd[a];
			if (-1 === d.time) {
				if (!d.Dq) continue
			} else if (d.time > this.c.Jc.Fa) continue;
			q.rd = d.Oi;
			q.Dd = d.Dd;
			q.Fc = 0;
			for (b in d.yd) d.yd.hasOwnProperty(b) && (k = this.c.da[parseInt(b, 10)].Ma(), m = d.yd[b], k.bb = m.tn, Ha(k.G, m.$f), k = m, J(k.$f), h.push(k));
			d.Oi.Lz();
			this.c.uo(d.wb);
			d.Do = !0
		}
		b = a = 0;
		for (c = this.Qd.length; a < c; a++) d = this.Qd[a], this.Qd[b] = d, d.Do ? (pb(d.yd), J(d.wb), f.push(d)) : b++;
		Da(this.Qd, b)
	}
})();
(function() {
	Vb = function(a, b) {
		var d = a[1],
			f = a[3],
			h = a[4],
			e = a[5],
			g = a[6],
			l = a[7],
			n = a[8];
		b.L || (b.L = {});
		b.xa || (b.xa = {});
		b.sb || (b.sb = {});
		var k = b.L,
			m = b.xa,
			q = b.sb;
		f && (k.EA = function(a, b) {
			return Tc(this.x, a, b)
		}, k.FA = function(a, b) {
			return Tc(this.y, a, b)
		}, k.LA = function() {
			var a = this.V;
			this.Ua();
			var b = this.Ab;
			return !(b.right < a.xb || b.bottom < a.yb || b.left > a.Ib || b.top > a.Hb)
		}, k.MA = function() {
			this.Ua();
			var a = this.Ab,
				b = this.c.qb;
			return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
		}, k.YA = function(a, b, c) {
			var d = this.Ma(),
				e = d.Vd();
			if (!e.length) return !1;
			var f = e[0],
				g = f,
				h = eb(f.x, f.y, b, c),
				k, l, m;
			k = 1;
			for (l = e.length; k < l; k++) if (f = e[k], m = eb(f.x, f.y, b, c), 0 === a && m < h || 1 === a && m > h) h = m, g = f;
			d.Nk(g);
			return !0
		}, m.qB = function(a) {
			this.x !== a && (this.x = a, this.ra())
		}, m.rB = function(a) {
			this.y !== a && (this.y = a, this.ra())
		}, m.Sv = function(a, b) {
			if (this.x !== a || this.y !== b) this.x = a, this.y = b, this.ra()
		}, m.Tv = function(a, b) {
			var c = a.jy(this);
			if (c) {
				var d;
				c.Fe ? (d = c.Fe(b, !0), c = c.Fe(b, !1)) : (d = c.x, c = c.y);
				if (this.x !== d || this.y !== c) this.x = d, this.y = c, this.ra()
			}
		}, m.RA = function(a) {
			0 !== a && (this.x += Math.cos(this.M) * a, this.y += Math.sin(this.M) * a, this.ra())
		}, m.QA = function(a, b) {
			0 !== b && (this.x += Math.cos(Na(a)) * b, this.y += Math.sin(Na(a)) * b, this.ra())
		}, q.fo = function(a) {
			a.na(this.x)
		}, q.ho = function(a) {
			a.na(this.y)
		}, q.Ha = function(a) {
			a.na(this.c.Wg(this))
		});
		h && (k.DA = function(a, b) {
			return Tc(this.width, a, b)
		}, k.AA = function(a, b) {
			return Tc(this.height, a, b)
		}, m.pB = function(a) {
			this.width !== a && (this.width = a, this.ra())
		}, m.jB = function(a) {
			this.height !== a && (this.height = a, this.ra())
		}, m.mB = function(a, b) {
			if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.ra()
		}, q.vB = function(a) {
			a.na(this.width)
		}, q.HA = function(a) {
			a.na(this.height)
		}, q.wA = function(a) {
			this.Ua();
			a.na(this.Ab.left)
		}, q.yA = function(a) {
			this.Ua();
			a.na(this.Ab.top)
		}, q.xA = function(a) {
			this.Ua();
			a.na(this.Ab.right)
		}, q.vA = function(a) {
			this.Ua();
			a.na(this.Ab.bottom)
		});
		e && (k.Nu = function(a, b) {
			return Va(this.M, Na(b)) <= Na(a)
		}, k.$u = function(a) {
			return Za(this.M, Na(a))
		}, k.Zu = function(a, b) {
			var c = Ta(a),
				d = Ta(b),
				e = Ra(this.M);
			return Za(d, c) ? Za(e, c) && !Za(e, d) : !(!Za(e, c) && Za(e, d))
		}, m.ao = function(a) {
			a = Na(Pa(a));
			isNaN(a) || this.M === a || (this.M = a, this.ra())
		}, m.cB = function(a) {
			0 === a || isNaN(a) || (this.M += Na(a), this.M = Ra(this.M), this.ra())
		}, m.dB = function(a) {
			0 === a || isNaN(a) || (this.M -= Na(a), this.M = Ra(this.M), this.ra())
		}, m.eB = function(a, b) {
			var c = Ya(this.M, Na(b), Na(a));
			isNaN(c) || this.M === c || (this.M = c, this.ra())
		}, m.fB = function(a, b, c) {
			a = Ya(this.M, Math.atan2(c - this.y, b - this.x), Na(a));
			isNaN(a) || this.M === a || (this.M = a, this.ra())
		}, m.nB = function(a, b) {
			var c = Math.atan2(b - this.y, a - this.x);
			isNaN(c) || this.M === c || (this.M = c, this.ra())
		}, q.uA = function(a) {
			a.na(Sa(this.M))
		});
		d || (k.BA = function(a, b, c) {
			return Tc(this.yc[a], b, c)
		}, k.JA = function(a) {
			return this.yc[a]
		}, k.ZA = function(a, b) {
			var c = this.Ma(),
				d = c.Vd();
			if (!d.length) return !1;
			var e = d[0],
				f = e,
				g = e.yc[b],
				h, k, l;
			h = 1;
			for (k = d.length; h < k; h++) if (e = d[h], l = e.yc[b], 0 === a && l < g || 1 === a && l > g) g = l, f = e;
			c.Nk(f);
			return !0
		}, k.XA = function(a) {
			var b, c, d, e, f;
			if (this.c.lm().wm) {
				f = this.Ma();
				if (f.bb) for (f.bb = !1, J(f.G), J(f.gb), d = this.G, b = 0, c = d.length; b < c; b++) e = d[b], e.uid === a ? f.gb.push(e) : f.G.push(e);
				else {
					d = b = 0;
					for (c = f.G.length; b < c; b++) e = f.G[b], f.G[d] = e, e.uid === a ? f.gb.push(e) : d++;
					Da(f.G, d)
				}
				this.xe();
				return !!f.G.length
			}
			e = this.c.Th(a);
			if (!e) return !1;
			f = this.Ma();
			if (!f.bb && -1 === f.G.indexOf(e)) return !1;
			if (this.Ea) for (a = e.type.Jb, b = 0, c = a.length; b < c; b++) {
				if (a[b] === this) return f.Nk(e), this.xe(), !0
			} else if (e.type === this) return f.Nk(e), this.xe(), !0;
			return !1
		}, k.Bi = function() {
			return !0
		}, k.rv = function() {
			return !0
		}, m.kB = function(a, b) {
			var c = this.yc;
			ja(c[a]) ? c[a] = ja(b) ? b : parseFloat(b) : ka(c[a]) && (c[a] = ka(b) ? b : b.toString())
		}, m.tA = function(a, b) {
			var c = this.yc;
			ja(c[a]) ? c[a] = ja(b) ? c[a] + b : c[a] + parseFloat(b) : ka(c[a]) && (c[a] = ka(b) ? c[a] + b : c[a] + b.toString())
		}, m.sB = function(a, b) {
			var c = this.yc;
			ja(c[a]) && (c[a] = ja(b) ? c[a] - b : c[a] - parseFloat(b))
		}, m.gB = function(a, b) {
			this.yc[a] = b ? 1 : 0
		}, m.tB = function(a) {
			this.yc[a] = 1 - this.yc[a]
		}, m.qd = function() {
			this.c.Eg(this)
		}, m.hv || (m.hv = function(a) {
			var b, c;
			try {
				b = JSON.parse(a)
			} catch (d) {
				return
			}
			this.c.Lm(this, b, !0);
			this.Lf && this.Lf();
			if (this.Ca) for (a = 0, b = this.Ca.length; a < b; ++a) c = this.Ca[a], c.Lf && c.Lf()
		}), q.GA = function(a) {
			var b = a.oi.G.length,
				c, d, e;
			c = 0;
			for (d = this.c.We.length; c < d; c++) e = this.c.We[c], a.oi.Ea ? 0 <= e.type.Jb.indexOf(a.oi) && b++ : e.type === a.oi && b++;
			a.ub(b)
		}, q.aB = function(a) {
			a.ub(a.oi.Ma().Vd().length)
		}, q.uB = function(a) {
			a.ub(this.uid)
		}, q.IA = function(a) {
			a.ub(this.ek())
		}, q.Yq || (q.Yq = function(a) {
			a.Oc(JSON.stringify(this.c.xq(this, !0)))
		}));
		g && (k.NA = function() {
			return this.visible
		}, m.oB = function(a) {
			!a !== !this.visible && (this.visible = a, this.c.Ta = !0)
		}, k.CA = function(a, b) {
			return Tc(Rb(100 * this.opacity), a, b)
		}, m.lB = function(a) {
			a = a / 100;
			0 > a ? a = 0 : 1 < a && (a = 1);
			a !== this.opacity && (this.opacity = a, this.c.Ta = !0)
		}, q.Opacity = function(a) {
			a.na(Rb(100 * this.opacity))
		});
		l && (k.KA = function(a) {
			return a ? this.V === a : !1
		}, k.$A = function(a) {
			var b = this.Ma(),
				c = b.Vd();
			if (!c.length) return !1;
			var d = c[0],
				e = d,
				f, g;
			f = 1;
			for (g = c.length; f < g; f++) if (d = c[f], 0 === a) {
				if (d.V.index > e.V.index || d.V.index === e.V.index && d.vf() > e.vf()) e = d
			} else if (d.V.index < e.V.index || d.V.index === e.V.index && d.vf() < e.vf()) e = d;
			b.Nk(e);
			return !0
		}, m.UA = function() {
			var a = this.V,
				b = a.G;
			b.length && b[b.length - 1] === this || (a.pj(this, !1), a.Mj(this, !1), this.c.Ta = !0)
		}, m.SA = function() {
			var a = this.V,
				b = a.G;
			b.length && b[0] === this || (a.pj(this, !1), a.yz(this), this.c.Ta = !0)
		}, m.TA = function(a) {
			a && a != this.V && (this.V.pj(this, !0), this.V = a, a.Mj(this, !0), this.c.Ta = !0)
		}, m.xB = function(a, b) {
			var c = 0 === a;
			if (b) {
				var d = b.ey(this);
				d && d.uid !== this.uid && (this.V.index !== d.V.index && (this.V.pj(this, !0), this.V = d.V, d.V.Mj(this, !0)), this.V.hz(this, d, c), this.c.Ta = !0)
			}
		}, q.PA = function(a) {
			a.ub(this.V.it)
		}, q.OA = function(a) {
			a.Oc(this.V.name)
		}, q.wB = function(a) {
			a.ub(this.vf())
		});
		n && (m.hB = function(a, b) {
			if (this.c.ja) {
				var c = this.type.Uo(b);
				if (!(0 > c)) {
					var d = 1 === a;
					this.Ig[c] !== d && (this.Ig[c] = d, this.gf(), this.c.Ta = !0)
				}
			}
		}, m.iB = function(a, b, c) {
			if (this.c.ja) {
				var d = this.type.Uo(a);
				0 > d || (a = this.type.Da[d], d = this.Kb[d], b = Math.floor(b), 0 > b || b >= d.length || (1 === this.c.ja.oy(a.nc, b) && (c /= 100), d[b] !== c && (d[b] = c, a.sc && (this.c.Ta = !0))))
			}
		})
	};
	oc = function() {
		this.ro = this.no = !0;
		this.type.xl = !0;
		this.c.Ta = !0;
		var a, b, d = this.oo;
		a = 0;
		for (b = d.length; a < b; ++a) d[a](this);
		this.V.te && this.Ua()
	};
	pc = function(a) {
		a && this.oo.push(a)
	};
	rc = function() {
		if (this.no) {
			var a = this.Ab,
				b = this.Bb;
			a.set(this.x, this.y, this.x + this.width, this.y + this.height);
			a.offset(-this.Hd * this.width, -this.Id * this.height);
			this.M ? (a.offset(-this.x, -this.y), b.cu(a, this.M), b.offset(this.x, this.y), b.Ir(a)) : b.Wk(a);
			a.normalize();
			this.no = !1;
			this.mA()
		}
	};
	var a = new xa(0, 0, 0, 0);
	sc = function() {
		if (this.V.te) {
			var c = this.V.$c,
				b = this.Ab;
			a.set(c.Bd(b.left), c.Cd(b.top), c.Bd(b.right), c.Cd(b.bottom));
			this.Nd.Uj(a) || (this.Nd.right < this.Nd.left ? c.update(this, null, a) : c.update(this, this.Nd, a), this.Nd.Li(a), this.V.df = !0)
		}
	};
	tc = function() {
		if (this.ro && this.Of) {
			this.Ua();
			var c = this.type.Ml,
				b = this.Ab;
			a.set(c.Bd(b.left), c.Cd(b.top), c.Bd(b.right), c.Cd(b.bottom));
			this.Pg.Uj(a) || (this.Pg.right < this.Pg.left ? c.update(this, null, a) : c.update(this, this.Pg, a), this.Pg.Li(a), this.ro = !1)
		}
	};
	qc = function(a, b) {
		return this.Ab.gd(a, b) && this.Bb.gd(a, b) ? this.Ra && !this.Ra.ai() ? (this.Ra.Jh(this.width, this.height, this.M), this.Ra.gd(a - this.x, b - this.y)) : !0 : !1
	};
	kc = function() {
		this.type.Nn();
		return this.Xh
	};
	uc = function() {
		this.V.Sq();
		return this.kf
	};
	vc = function() {
		J(this.jb);
		var a, b, d, f = !0;
		a = 0;
		for (b = this.Ig.length; a < b; a++) this.Ig[a] && (d = this.type.Da[a], this.jb.push(d), d.bf || (f = !1));
		this.Hu = !! this.jb.length;
		this.rg = f
	};
	lc = function() {
		return "Inst" + this.Ot
	};
	Yb = function(a) {
		if (a && a.td && a.type != this) {
			var b, d, f;
			b = 0;
			for (d = a.siblings.length; b < d; b++) if (f = a.siblings[b], f.type == this) return f
		}
		a = this.Ma().Vd();
		return a.length ? a[0] : null
	};
	Zb = function(a) {
		var b = this.Ma().Vd();
		return b.length ? b[a.ek() % b.length] : null
	};
	Xb = function() {
		if (this.vj && !this.Ea) {
			var a, b;
			a = 0;
			for (b = this.G.length; a < b; a++) this.G[a].Xh = a;
			var d = a,
				f = this.c.We;
			a = 0;
			for (b = f.length; a < b; ++a) f[a].type === this && (f[a].Xh = d++);
			this.vj = !1
		}
	};
	ic = function(a) {
		if (a < this.G.length) return this.G[a];
		a -= this.G.length;
		var b = this.c.We,
			d, f;
		d = 0;
		for (f = b.length; d < f; ++d) if (b[d].type === this) {
			if (0 === a) return b[d];
			--a
		}
		return null
	};
	$b = function() {
		return this.qh[this.Sf]
	};
	ac = function() {
		this.Sf++;
		this.Sf === this.qh.length ? this.qh.push(new Wb(this)) : this.qh[this.Sf].bb = !0
	};
	bc = function() {
		this.Sf++;
		this.Sf === this.qh.length && this.qh.push(new Wb(this));
		var a = this.qh[this.Sf],
			b = this.qh[this.Sf - 1];
		b.bb ? a.bb = !0 : (a.bb = !1, Ha(a.G, b.G), Ha(a.gb, b.gb))
	};
	cc = function() {
		this.Sf--
	};
	dc = function(a) {
		var b, d, f, h, e, g = 0;
		if (!this.Ea) for (b = 0, d = this.Jb.length; b < d; b++) for (e = this.Jb[b], f = 0, h = e.gc.length; f < h; f++) {
			if (a === e.gc[f].name) return this.fa.lastBehIndex = g, e.gc[f];
			g++
		}
		b = 0;
		for (d = this.gc.length; b < d; b++) {
			if (a === this.gc[b].name) return this.fa.lastBehIndex = g, this.gc[b];
			g++
		}
		return null
	};
	ec = function(a) {
		return this.km(a) ? this.fa.lastBehIndex : -1
	};
	fc = function(a) {
		var b, d;
		b = 0;
		for (d = this.Da.length; b < d; b++) if (this.Da[b].name === a) return b;
		return -1
	};
	hc = function() {
		if (this.td && !this.Ea) {
			var a, b, d, f, h, e, g;
			this.Nn();
			e = this.Ma();
			var l = e.bb,
				n = (a = this.c.Hc()) && a.rd && a.rd.Le;
			a = 0;
			for (b = this.Ud.length; a < b; a++) if (h = this.Ud[a], h !== this && (h.Nn(), g = h.Ma(), g.bb = l, !l)) {
				J(g.G);
				d = 0;
				for (f = e.G.length; d < f; ++d) g.G[d] = h.Vo(e.G[d].Xh);
				if (n) for (J(g.gb), d = 0, f = e.gb.length; d < f; ++d) g.gb[d] = h.Vo(e.gb[d].Xh)
			}
		}
	};
	jc = function() {
		return "Type" + this.Xa
	};
	Tc = function(a, b, d) {
		if ("undefined" === typeof a || "undefined" === typeof d) return !1;
		switch (b) {
		case 0:
			return a === d;
		case 1:
			return a !== d;
		case 2:
			return a < d;
		case 3:
			return a <= d;
		case 4:
			return a > d;
		case 5:
			return a >= d;
		default:
			return !1
		}
	}
})();
var ld = {};

function od(a) {
	this.c = a
}(function() {
	function a(a) {
		a = Math.pow(10, a / 20);
		isFinite(a) || (a = 0);
		0 > a && (a = 0);
		1 < a && (a = 1);
		return a
	}
	function c(a) {
		0 > a && (a = 0);
		1 < a && (a = 1);
		return Math.log(a) / Math.log(10) * 20
	}
	function b(a) {
		a = a.toLowerCase();
		return ca.hasOwnProperty(a) && ca[a].length ? ca[a][0].he() : G.destination
	}
	function d() {
		return G.createGain ? G.createGain() : G.createGainNode()
	}
	function f(a) {
		return G.createDelay ? G.createDelay(a) : G.createDelayNode(a)
	}
	function h(a) {
		a.start ? a.start(0) : a.noteOn(0)
	}
	function e(a, b, c) {
		a.start ? a.start(0, b) : a.noteGrainOn(0, b, c - b)
	}
	function g(a) {
		try {
			a.stop ? a.stop(0) : a.noteOff(0)
		} catch (b) {}
	}
	function l(a, b, c, e, f, g) {
		this.type = "filter";
		this.Pb = [a, b, c, e, f, g];
		this.Za = d();
		this.Ba = d();
		this.Ba.gain.value = g;
		this.ya = d();
		this.ya.gain.value = 1 - g;
		this.ic = G.createBiquadFilter();
		this.ic.type = "number" === typeof this.ic.type ? a : Ed[a];
		this.ic.frequency.value = b;
		this.ic.detune && (this.ic.detune.value = c);
		this.ic.Q.value = e;
		this.ic.gain.value = f;
		this.Za.connect(this.ic);
		this.Za.connect(this.ya);
		this.ic.connect(this.Ba)
	}
	function n(a, b, c) {
		this.type = "delay";
		this.Pb = [a, b, c];
		this.Za = d();
		this.Ba = d();
		this.Ba.gain.value = c;
		this.ya = d();
		this.ya.gain.value = 1 - c;
		this.Hk = d();
		this.Ce = f(a);
		this.Ce.delayTime.value = a;
		this.Vl = d();
		this.Vl.gain.value = b;
		this.Za.connect(this.Hk);
		this.Za.connect(this.ya);
		this.Hk.connect(this.Ba);
		this.Hk.connect(this.Ce);
		this.Ce.connect(this.Vl);
		this.Vl.connect(this.Hk)
	}
	function k(a, b, c, e) {
		this.type = "convolve";
		this.Pb = [b, c, e];
		this.Za = d();
		this.Ba = d();
		this.Ba.gain.value = c;
		this.ya = d();
		this.ya.gain.value = 1 - c;
		this.Kh = G.createConvolver();
		a && (this.Kh.normalize = b, this.Kh.buffer = a);
		this.Za.connect(this.Kh);
		this.Za.connect(this.ya);
		this.Kh.connect(this.Ba)
	}
	function m(a, b, c, e, g) {
		this.type = "flanger";
		this.Pb = [a, b, c, e, g];
		this.Za = d();
		this.ya = d();
		this.ya.gain.value = 1 - g / 2;
		this.Ba = d();
		this.Ba.gain.value = g / 2;
		this.dm = d();
		this.dm.gain.value = e;
		this.Ce = f(a + b);
		this.Ce.delayTime.value = a;
		this.Mc = G.createOscillator();
		this.Mc.frequency.value = c;
		this.ae = d();
		this.ae.gain.value = b;
		this.Za.connect(this.Ce);
		this.Za.connect(this.ya);
		this.Ce.connect(this.Ba);
		this.Ce.connect(this.dm);
		this.dm.connect(this.Ce);
		this.Mc.connect(this.ae);
		this.ae.connect(this.Ce.delayTime);
		h(this.Mc)
	}
	function q(a, b, c, e, f, g) {
		this.type = "phaser";
		this.Pb = [a, b, c, e, f, g];
		this.Za = d();
		this.ya = d();
		this.ya.gain.value = 1 - g / 2;
		this.Ba = d();
		this.Ba.gain.value = g / 2;
		this.ic = G.createBiquadFilter();
		this.ic.type = "number" === typeof this.ic.type ? 7 : "allpass";
		this.ic.frequency.value = a;
		this.ic.detune && (this.ic.detune.value = b);
		this.ic.Q.value = c;
		this.Mc = G.createOscillator();
		this.Mc.frequency.value = f;
		this.ae = d();
		this.ae.gain.value = e;
		this.Za.connect(this.ic);
		this.Za.connect(this.ya);
		this.ic.connect(this.Ba);
		this.Mc.connect(this.ae);
		this.ae.connect(this.ic.frequency);
		h(this.Mc)
	}
	function p(a) {
		this.type = "gain";
		this.Pb = [a];
		this.ib = d();
		this.ib.gain.value = a
	}
	function t(a, b) {
		this.type = "tremolo";
		this.Pb = [a, b];
		this.ib = d();
		this.ib.gain.value = 1 - b / 2;
		this.Mc = G.createOscillator();
		this.Mc.frequency.value = a;
		this.ae = d();
		this.ae.gain.value = b / 2;
		this.Mc.connect(this.ae);
		this.ae.connect(this.ib.gain);
		h(this.Mc)
	}
	function u(a, b) {
		this.type = "ringmod";
		this.Pb = [a, b];
		this.Za = d();
		this.Ba = d();
		this.Ba.gain.value = b;
		this.ya = d();
		this.ya.gain.value = 1 - b;
		this.Tk = d();
		this.Tk.gain.value = 0;
		this.Mc = G.createOscillator();
		this.Mc.frequency.value = a;
		this.Mc.connect(this.Tk.gain);
		h(this.Mc);
		this.Za.connect(this.Tk);
		this.Za.connect(this.ya);
		this.Tk.connect(this.Ba)
	}
	function v(a, b, c, e, f) {
		this.type = "distortion";
		this.Pb = [a, b, c, e, f];
		this.Za = d();
		this.jn = d();
		this.hn = d();
		this.Uz(c, Math.pow(10, e / 20));
		this.Ba = d();
		this.Ba.gain.value = f;
		this.ya = d();
		this.ya.gain.value = 1 - f;
		this.Sn = G.createWaveShaper();
		this.Tl = new Float32Array(65536);
		this.$x(a, b);
		this.Sn.Tl = this.Tl;
		this.Za.connect(this.jn);
		this.Za.connect(this.ya);
		this.jn.connect(this.Sn);
		this.Sn.connect(this.hn);
		this.hn.connect(this.Ba)
	}
	function r(a, b, c, d, e) {
		this.type = "compressor";
		this.Pb = [a, b, c, d, e];
		this.ib = G.createDynamicsCompressor();
		try {
			this.ib.threshold.value = a, this.ib.knee.value = b, this.ib.ratio.value = c, this.ib.attack.value = d, this.ib.release.value = e
		} catch (f) {}
	}
	function z(a, b) {
		this.type = "analyser";
		this.Pb = [a, b];
		this.ib = G.createAnalyser();
		this.ib.fftSize = a;
		this.ib.smoothingTimeConstant = b;
		this.Yx = new Float32Array(this.ib.frequencyBinCount);
		this.fu = new Uint8Array(a);
		this.Mk = 0
	}
	function B() {
		this.Aa = null;
		this.Om = 0;
		this.rh = [];
		this.Qp = this.Gm = this.Fm = 0
	}
	function D(a, b) {
		this.src = a;
		this.Sa = S;
		this.Ze = b;
		this.wl = !1;
		var c = this;
		this.Op = this.gq = null;
		this.oj = [];
		this.un = 0;
		this.Vq = this.Jo = this.mu = this.cn = !1;
		1 === S && b && (this.Sa = 0, this.gq = d());
		this.Fh = this.kb = null;
		var e;
		switch (this.Sa) {
		case 0:
			this.kb = new Audio;
			this.kb.crossOrigin = "anonymous";
			this.kb.addEventListener("canplaythrough", function() {
				c.Vq = !0
			});
			1 === S && G.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.mu = !0, this.kb.addEventListener("canplay", function() {
				c.Op || (c.Op = G.createMediaElementSource(c.kb), c.Op.connect(c.gq))
			}));
			this.kb.autoplay = !1;
			this.kb.DB = "auto";
			this.kb.src = a;
			break;
		case 1:
			e = new XMLHttpRequest;
			e.open("GET", a, !0);
			e.responseType = "arraybuffer";
			e.onload = function() {
				c.Fh = e.response;
				c.Gw()
			};
			e.onerror = function() {
				c.Jo = !0
			};
			e.send();
			break;
		case 2:
			this.kb = !0;
			break;
		case 3:
			this.kb = !0
		}
	}
	function A(a, c) {
		var e = this;
		this.tag = c;
		this.de = this.Yf = !0;
		this.src = a.src;
		this.buffer = a;
		this.Sa = S;
		this.Ze = a.Ze;
		this.playbackRate = 1;
		this.Ui = !0;
		this.Wd = this.qe = !1;
		this.Od = 0;
		this.rk = this.Zi = this.yf = !1;
		this.volume = 1;
		this.dq = function(a) {
			if (!e.Wd && !e.qe) {
				var b = this;
				b || (b = a.target);
				b === e.ul && (e.Ui = !0, e.de = !0, O = e.tag, H.trigger(od.prototype.L.rl, P))
			}
		};
		this.ul = null;
		this.Wi = 1 === N && !this.Ze || 2 === N;
		this.kj = 1;
		this.startTime = this.Wi ? H.Jc.Fa : H.zg.Fa;
		this.ac = this.vc = null;
		this.zf = !1;
		this.$b = null;
		this.At = this.zt = this.yt = this.xt = this.Ct = this.Bt = 0;
		this.U = null;
		var f = !1;
		1 !== this.Sa || 0 !== this.buffer.Sa || this.buffer.mu || (this.Sa = 0);
		switch (this.Sa) {
		case 0:
			this.Ze ? (this.U = a.kb, f = !a.wl, a.wl = !0) : (this.U = new Audio, this.U.crossOrigin = "anonymous", this.U.autoplay = !1, this.U.src = a.kb.src, f = !0);
			f && this.U.addEventListener("ended", function() {
				O = e.tag;
				e.de = !0;
				H.trigger(od.prototype.L.rl, P)
			});
			break;
		case 1:
			this.vc = d();
			this.vc.connect(b(c));
			1 === this.buffer.Sa ? a.kb && (this.U = G.createBufferSource(), this.U.buffer = a.kb, this.U.connect(this.vc)) : (this.U = this.buffer.kb, this.buffer.gq.connect(this.vc), this.buffer.wl || (this.buffer.wl = !0, this.buffer.kb.addEventListener("ended", function() {
				O = e.tag;
				e.de = !0;
				H.trigger(od.prototype.L.rl, P)
			})));
			break;
		case 2:
			this.U = new window.Media(Q + this.src, null, null, function(a) {

				a === window.Media.MEDIA_STOPPED && (e.Ui = !0, e.de = !0, O = e.tag, H.trigger(od.prototype.L.rl, P))
			});
			break;
		case 3:
			this.U = !0
		}
	}
	function C(a) {
		J(gb);
		if (a.length) {
			var b, c, d;
			b = 0;
			for (c = F.length; b < c; b++) d = F[b], Sb(a, d.tag) && gb.push(d)
		} else R && !R.Ti() && (J(gb), gb[0] = R)
	}
	function E(a, b) {
		ca.hasOwnProperty(a) ? ca[a].push(b) : ca[a] = [b];
		var c, d, e, f, g = G.destination;
		if (ca.hasOwnProperty(a) && (e = ca[a], e.length)) for (g = e[0].he(), c = 0, d = e.length; c < d; c++) f = e[c], c + 1 === d ? f.ye(G.destination) : f.ye(e[c + 1].he());
		C(a);
		c = 0;
		for (d = gb.length; c < d; c++) gb[c].Gz(g);
		Ea && Hb === a && (Ea.disconnect(), Ea.connect(g))
	}
	function w() {}
	function x() {}
	var K = od.prototype;
	K.Va = function(a) {
		this.pb = a;
		this.c = a.c
	};
	K.Va.prototype.qa = function() {};
	var H = null,
		P = null,
		O = "",
		Q = "",
		S = 0,
		G = null,
		L = [],
		F = [],
		R = null,
		T = !1,
		N = 0,
		I = !1,
		U = 1,
		za = 0,
		Y = 0,
		Qa = 1,
		oa = 1,
		sb = 10,
		fb = 1E4,
		Cd = 1,
		Ea = null,
		Hb = "",
		pa = !1,
		ub = [],
		ca = {},
		Ed = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ");
	l.prototype.ye = function(a) {
		this.Ba.disconnect();
		this.Ba.connect(a);
		this.ya.disconnect();
		this.ya.connect(a)
	};
	l.prototype.remove = function() {
		this.Za.disconnect();
		this.ic.disconnect();
		this.Ba.disconnect();
		this.ya.disconnect()
	};
	l.prototype.he = function() {
		return this.Za
	};
	n.prototype.ye = function(a) {
		this.Ba.disconnect();
		this.Ba.connect(a);
		this.ya.disconnect();
		this.ya.connect(a)
	};
	n.prototype.remove = function() {
		this.Za.disconnect();
		this.Hk.disconnect();
		this.Ce.disconnect();
		this.Vl.disconnect();
		this.Ba.disconnect();
		this.ya.disconnect()
	};
	n.prototype.he = function() {
		return this.Za
	};
	k.prototype.ye = function(a) {
		this.Ba.disconnect();
		this.Ba.connect(a);
		this.ya.disconnect();
		this.ya.connect(a)
	};
	k.prototype.remove = function() {
		this.Za.disconnect();
		this.Kh.disconnect();
		this.Ba.disconnect();
		this.ya.disconnect()
	};
	k.prototype.he = function() {
		return this.Za
	};
	m.prototype.ye = function(a) {
		this.ya.disconnect();
		this.ya.connect(a);
		this.Ba.disconnect();
		this.Ba.connect(a)
	};
	m.prototype.remove = function() {
		this.Za.disconnect();
		this.Ce.disconnect();
		this.Mc.disconnect();
		this.ae.disconnect();
		this.ya.disconnect();
		this.Ba.disconnect();
		this.dm.disconnect()
	};
	m.prototype.he = function() {
		return this.Za
	};
	q.prototype.ye = function(a) {
		this.ya.disconnect();
		this.ya.connect(a);
		this.Ba.disconnect();
		this.Ba.connect(a)
	};
	q.prototype.remove = function() {
		this.Za.disconnect();
		this.ic.disconnect();
		this.Mc.disconnect();
		this.ae.disconnect();
		this.ya.disconnect();
		this.Ba.disconnect()
	};
	q.prototype.he = function() {
		return this.Za
	};
	p.prototype.ye = function(a) {
		this.ib.disconnect();
		this.ib.connect(a)
	};
	p.prototype.remove = function() {
		this.ib.disconnect()
	};
	p.prototype.he = function() {
		return this.ib
	};
	t.prototype.ye = function(a) {
		this.ib.disconnect();
		this.ib.connect(a)
	};
	t.prototype.remove = function() {
		this.Mc.disconnect();
		this.ae.disconnect();
		this.ib.disconnect()
	};
	t.prototype.he = function() {
		return this.ib
	};
	u.prototype.ye = function(a) {
		this.Ba.disconnect();
		this.Ba.connect(a);
		this.ya.disconnect();
		this.ya.connect(a)
	};
	u.prototype.remove = function() {
		this.Mc.disconnect();
		this.Tk.disconnect();
		this.Za.disconnect();
		this.Ba.disconnect();
		this.ya.disconnect()
	};
	u.prototype.he = function() {
		return this.Za
	};
	v.prototype.Uz = function(a, b) {.01 > a && (a = .01);
		this.jn.gain.value = a;
		this.hn.gain.value = Math.pow(1 / a, .6) * b
	};
	v.prototype.shape = function(a, b, c) {
		var d = 1.05 * c * b - b;
		c = 0 > a ? -1 : 1;
		a = 0 > a ? -a : a;
		b = a < b ? a : b + d * (1 - Math.exp(-(1 / d) * (a - b)));
		return b * c
	};
	v.prototype.$x = function(a, b) {
		for (var c = Math.pow(10, a / 20), d = Math.pow(10, b / 20), e = 0, f = 0; 32768 > f; ++f) e = f / 32768, e = this.shape(e, c, d), this.Tl[32768 + f] = e, this.Tl[32768 - f - 1] = -e
	};
	v.prototype.ye = function(a) {
		this.Ba.disconnect();
		this.Ba.connect(a);
		this.ya.disconnect();
		this.ya.connect(a)
	};
	v.prototype.remove = function() {
		this.Za.disconnect();
		this.jn.disconnect();
		this.Sn.disconnect();
		this.hn.disconnect();
		this.Ba.disconnect();
		this.ya.disconnect()
	};
	v.prototype.he = function() {
		return this.Za
	};
	r.prototype.ye = function(a) {
		this.ib.disconnect();
		this.ib.connect(a)
	};
	r.prototype.remove = function() {
		this.ib.disconnect()
	};
	r.prototype.he = function() {
		return this.ib
	};
	z.prototype.Sb = function() {
		this.ib.getFloatFrequencyData(this.Yx);
		this.ib.getByteTimeDomainData(this.fu);
		for (var a = this.ib.fftSize, b = 0, d = this.Mk = 0, e = 0; b < a; b++) e = (this.fu[b] - 128) / 128, 0 > e && (e = -e), this.Mk < e && (this.Mk = e), d += e * e;
		this.Mk = c(this.Mk);
		c(Math.sqrt(d / a))
	};
	z.prototype.ye = function(a) {
		this.ib.disconnect();
		this.ib.connect(a)
	};
	z.prototype.remove = function() {
		this.ib.disconnect()
	};
	z.prototype.he = function() {
		return this.ib
	};
	B.prototype.Uk = function(a) {
		if (this.Aa = a) this.Fm = this.Aa.x, this.Gm = this.Aa.y;
		J(this.rh)
	};
	B.prototype.um = function() {
		return !!this.Aa
	};
	B.prototype.Sb = function(a) {
		this.Aa && 0 !== a && (this.Qp = Ua(this.Fm, this.Gm, this.Aa.x, this.Aa.y), a = eb(this.Fm, this.Gm, this.Aa.x, this.Aa.y) / a, 4 > this.rh.length || this.rh.shift(), this.rh.push(a), this.Fm = this.Aa.x, this.Gm = this.Aa.y)
	};
	B.prototype.ks = function() {
		if (!this.rh.length) return 0;
		var a, b, c = 0;
		a = 0;
		for (b = this.rh.length; a < b; a++) c += this.rh[a];
		return c / this.rh.length
	};
	B.prototype.Zo = function() {
		return Math.cos(this.Qp) * this.ks()
	};
	B.prototype.$o = function() {
		return Math.sin(this.Qp) * this.ks()
	};
	var gc = !1,
		Sc = !1;
	D.prototype.Gw = function() {
		if (!this.kb && this.Fh) {
			var a = this;
			if (G.decodeAudioData) G.decodeAudioData(this.Fh, function(b) {
				a.kb = b;
				a.Fh = null;
				var c, d, e;
				if (ia(a.dn) || I) ia(a.Pl) || (c = a.Pl.Kh, c.normalize = a.ht, c.buffer = b);
				else if (a.oj.length) {
					c = 0;
					for (d = a.oj.length; c < d; c++) {
						b = a.oj[c];
						e = new A(a, b.su);
						e.Bq(!0);
						if ("undefined" !== typeof b.jt && (b.Aa = H.Th(b.jt), !b.Aa)) continue;
						if (b.Aa) {
							var f = db(b.Aa.x, b.Aa.y, -b.Aa.V.wc(), za, Y, !0),
								g = db(b.Aa.x, b.Aa.y, -b.Aa.V.wc(), za, Y, !1);
							e.Aq(f, g, Oa(b.Aa.M - b.Aa.V.wc()), b.gp, b.Sp, b.Vp);
							e.Uk(b.Aa)
						} else e.Aq(b.x, b.y, b.R, b.gp, b.Sp, b.Vp);
						e.play(a.Lp, a.Uq, a.un);
						a.cn && e.pause();
						F.push(e)
					}
					J(a.oj)
				} else e = new A(a, a.dn || ""), e.play(a.Lp, a.Uq, a.un), a.cn && e.pause(), F.push(e)
			}, function() {
				a.Jo = !0
			});
			else if (this.kb = G.createBuffer(this.Fh, !1), this.Fh = null, ia(this.dn) || I) ia(this.Pl) || (b = this.Pl.Kh, b.normalize = this.ht, b.buffer = this.kb);
			else {
				var b = new A(this, this.dn);
				b.play(this.Lp, this.Uq, this.un);
				this.cn && b.pause();
				F.push(b)
			}
		}
	};
	D.prototype.vs = function() {
		switch (this.Sa) {
		case 0:
			var a = 4 <= this.kb.readyState;
			a && (this.Vq = !0);
			return a || this.Vq;
		case 1:
			return !!this.Fh || !! this.kb;
		case 2:
			return !0;
		case 3:
			return !0
		}
		return !1
	};
	D.prototype.Ty = function() {
		switch (this.Sa) {
		case 0:
			return this.vs();
		case 1:
			return !!this.kb;
		case 2:
			return !0;
		case 3:

			return !0
		}
		return !1
	};
	D.prototype.Ky = function() {
		switch (this.Sa) {
		case 0:
			return !!this.kb.error;
		case 1:
			return this.Jo
		}
		return !1
	};
	A.prototype.Ti = function() {
		switch (this.Sa) {
		case 0:
			return this.U.ended;
		case 1:
			return 1 === this.buffer.Sa ? !this.Yf && !this.de && this.U.loop || this.Wd ? !1 : this.Ui : this.U.ended;
		case 2:
			return this.Ui;
		case 3:
			!0
		}
		return !0
	};
	A.prototype.xw = function() {
		return this.Yf || this.de ? !0 : this.Ti()
	};
	A.prototype.Bq = function(a) {
		1 === S && (!this.zf && a ? this.vc && (this.ac || (this.ac = G.createPanner(), this.ac.panningModel = "number" === typeof this.ac.panningModel ? Qa : ["equalpower", "HRTF", "soundfield"][Qa], this.ac.distanceModel = "number" === typeof this.ac.distanceModel ? oa : ["linear", "inverse", "exponential"][oa], this.ac.refDistance = sb, this.ac.maxDistance = fb, this.ac.rolloffFactor = Cd), this.vc.disconnect(), this.vc.connect(this.ac), this.ac.connect(b(this.tag)), this.zf = !0) : this.zf && !a && this.vc && (this.ac.disconnect(), this.vc.disconnect(), this.vc.connect(b(this.tag)), this.zf = !1))
	};
	A.prototype.Aq = function(a, b, c, d, e, f) {
		this.zf && 1 === S && (this.ac.setPosition(a, b, 0), this.ac.setOrientation(Math.cos(Na(c)), Math.sin(Na(c)), 0), this.ac.coneInnerAngle = d, this.ac.coneOuterAngle = e, this.ac.coneOuterGain = f, this.Bt = a, this.Ct = b, this.xt = c, this.yt = d, this.zt = e, this.At = f)
	};
	A.prototype.Uk = function(a) {
		this.zf && 1 === S && (this.$b || (this.$b = new B), this.$b.Uk(a))
	};
	A.prototype.Sb = function(a) {
		if (this.zf && 1 === S && this.$b && this.$b.um() && this.Vi()) {
			this.$b.Sb(a);
			a = this.$b.Aa;
			var b = db(a.x, a.y, -a.V.wc(), za, Y, !0),
				c = db(a.x, a.y, -a.V.wc(), za, Y, !1);
			this.ac.setPosition(b, c, 0);
			b = 0;
			"undefined" !== typeof this.$b.Aa.M && (b = a.M - a.V.wc(), this.ac.setOrientation(Math.cos(b), Math.sin(b), 0));
			b = db(this.$b.Zo(), this.$b.$o(), -a.V.wc(), 0, 0, !0);
			c = db(this.$b.Zo(), this.$b.$o(), -a.V.wc(), 0, 0, !1);
			this.ac.setVelocity(b, c, 0)
		}
	};
	A.prototype.play = function(a, b, c) {
		var d = this.U;
		this.yf = a;
		this.volume = b;
		c = c || 0;
		switch (this.Sa) {
		case 0:
			1 !== d.playbackRate && (d.playbackRate = 1);
			d.volume !== b * U && (d.volume = b * U);
			d.loop !== a && (d.loop = a);
			d.muted && (d.muted = !1);
			if (d.currentTime !== c) try {
				d.currentTime = c
			} catch (f) {}
			if (this.Ze && pa && !H.Yb) ub.push(this);
			else try {
				this.U.play()
			} catch (g) {
				console && console.log && console.log("[C2] WARNING: exception trying to play audio '" + this.buffer.src + "': ", g)
			}
			break;
		case 1:
			this.muted = !1;
			this.kj = 1;
			if (1 === this.buffer.Sa) this.vc.gain.value = b * U, this.Yf || (this.U = G.createBufferSource(), this.U.buffer = this.buffer.kb, this.U.connect(this.vc)), this.U.onended = this.dq, this.ul = this.U, this.U.loop = a, this.Ui = !1, 0 === c ? h(this.U) : e(this.U, c, this.Sh());
			else {
				1 !== d.playbackRate && (d.playbackRate = 1);
				d.loop !== a && (d.loop = a);
				d.volume = b * U;
				if (d.currentTime !== c) try {
					d.currentTime = c
				} catch (k) {}
				this.Ze && pa && !H.Yb ? ub.push(this) : d.play()
			}
			break;
		case 2:
			(!this.Yf && this.de || 0 !== c) && d.seekTo(c);
			d.play();
			this.Ui = !1;
			break;
		case 3:
			H.Yc ? AppMobi.context.playSound(this.src, a) : AppMobi.player.playSound(this.src, a)
		}
		this.playbackRate = 1;
		this.startTime = (this.Wi ? H.Jc.Fa : H.zg.Fa) - c;
		this.Wd = this.de = this.Yf = !1
	};
	A.prototype.stop = function() {
		switch (this.Sa) {
		case 0:
			this.U.paused || this.U.pause();
			break;
		case 1:
			1 === this.buffer.Sa ? g(this.U) : this.U.paused || this.U.pause();
			break;
		case 2:
			this.U.stop();
			break;
		case 3:
			H.Yc && AppMobi.context.stopSound(this.src)
		}
		this.de = !0;
		this.Wd = !1
	};
	A.prototype.pause = function() {
		if (!(this.Yf || this.de || this.Ti() || this.Wd)) {
			switch (this.Sa) {
			case 0:
				this.U.paused || this.U.pause();
				break;
			case 1:
				1 === this.buffer.Sa ? (this.Od = this.Wo(!0), this.yf && (this.Od = this.Od % this.Sh()), this.Wd = !0, g(this.U)) : this.U.paused || this.U.pause();
				break;
			case 2:
				this.U.pause();
				break;
			case 3:
				H.Yc && AppMobi.context.stopSound(this.src)
			}
			this.Wd = !0
		}
	};
	A.prototype.Kz = function() {
		if (!(this.Yf || this.de || this.Ti()) && this.Wd) {
			switch (this.Sa) {
			case 0:
				this.U.play();
				break;
			case 1:
				1 === this.buffer.Sa ? (this.U = G.createBufferSource(), this.U.buffer = this.buffer.kb, this.U.connect(this.vc), this.U.onended = this.dq, this.ul = this.U, this.U.loop = this.yf, this.vc.gain.value = U * this.volume * this.kj, this.On(), this.startTime = (this.Wi ? H.Jc.Fa : H.zg.Fa) - this.Od / (this.playbackRate || .001), e(this.U, this.Od, this.Sh())) : this.U.play();
				break;
			case 2:
				this.U.play();
				break;
			case 3:
				H.Yc && AppMobi.context.resumeSound(this.src)
			}
			this.Wd = !1
		}
	};
	A.prototype.seek = function(a) {
		if (!(this.Yf || this.de || this.Ti())) switch (this.Sa) {
		case 0:
			try {
				this.U.currentTime = a
			} catch (b) {}
			break;
		case 1:
			if (1 === this.buffer.Sa) this.Wd ? this.Od = a : (this.pause(), this.Od = a, this.Kz());
			else try {
				this.U.currentTime = a
			} catch (c) {}
			break;
		case 3:
			H.Yc && AppMobi.context.seekSound(this.src, a)
		}
	};
	A.prototype.Gz = function(a) {
		1 === this.Sa && (this.zf ? (this.ac.disconnect(), this.ac.connect(a)) : (this.vc.disconnect(), this.vc.connect(a)))
	};
	A.prototype.Sh = function() {
		var a = 0;
		switch (this.Sa) {
		case 0:
			"undefined" !== typeof this.U.duration && (a = this.U.duration);
			break;
		case 1:
			a = this.buffer.kb.duration;
			break;
		case 2:
			a = this.U.getDuration();
			break;
		case 3:
			H.Yc && (a = AppMobi.context.getDurationSound(this.src))
		}
		return a
	};
	A.prototype.Wo = function(a) {
		var b = this.Sh(),
			c = 0;
		switch (this.Sa) {
		case 0:
			"undefined" !== typeof this.U.currentTime && (c = this.U.currentTime);
			break;
		case 1:
			if (1 === this.buffer.Sa) {
				if (this.Wd) return this.Od;
				c = (this.Wi ? H.Jc.Fa : H.zg.Fa) - this.startTime
			} else "undefined" !== typeof this.U.currentTime && (c = this.U.currentTime);
			break;
		case 3:
			H.Yc && (c = AppMobi.context.getPlaybackTimeSound(this.src))
		}
		a && (c *= this.playbackRate);
		!this.yf && c > b && (c = b);
		return c
	};
	A.prototype.Vi = function() {
		return !this.Wd && !this.Yf && !this.de && !this.Ti()
	};
	A.prototype.Zz = function(a) {
		this.volume = a;
		this.Fu()
	};
	A.prototype.Fu = function() {
		var a = this.volume * U;
		isFinite(a) || (a = 0);
		switch (this.Sa) {
		case 0:
			"undefined" !== typeof this.U.volume && this.U.volume !== a && (this.U.volume = a);
			break;
		case 1:
			1 === this.buffer.Sa ? this.vc.gain.value = a * this.kj : "undefined" !== typeof this.U.volume && this.U.volume !== a && (this.U.volume = a)
		}
	};
	A.prototype.Zl = function(a) {
		switch (this.Sa) {
		case 0:
			this.U.muted !== !! a && (this.U.muted = !! a);
			break;
		case 1:
			1 === this.buffer.Sa ? (this.kj = a ? 0 : 1, this.vc.gain.value = U * this.volume * this.kj) : this.U.muted !== !! a && (this.U.muted = !! a)
		}
	};
	A.prototype.Vz = function() {
		this.Zi = !0;
		this.Zl(this.Zi || this.rk)
	};
	A.prototype.$t = function(a) {
		this.rk = !! a;
		this.Zl(this.Zi || this.rk)
	};
	A.prototype.On = function() {
		var a = this.playbackRate;
		this.Wi && (a *= H.vg);
		switch (this.Sa) {
		case 0:
			this.U.playbackRate !== a && (this.U.playbackRate = a);
			break;
		case 1:
			1 === this.buffer.Sa ? this.U.playbackRate.value !== a && (this.U.playbackRate.value = a) : this.U.playbackRate !== a && (this.U.playbackRate = a)
		}
	};
	A.prototype.Xz = function(a) {
		switch (this.Sa) {
		case 0:
			a ? this.Vi() ? (this.qe = !0, this.U.pause()) : this.qe = !1 : this.qe && (this.U.play(), this.qe = !1);
			break;
		case 1:
			a ? this.Vi() ? (this.qe = !0, 1 === this.buffer.Sa ? (this.Od = this.Wo(!0), this.yf && (this.Od = this.Od % this.Sh()), g(this.U)) : this.U.pause()) : this.qe = !1 : this.qe && (1 === this.buffer.Sa ? (this.U = G.createBufferSource(), this.U.buffer = this.buffer.kb, this.U.connect(this.vc), this.U.onended = this.dq, this.ul = this.U, this.U.loop = this.yf, this.vc.gain.value = U * this.volume * this.kj, this.On(), this.startTime = (this.Wi ? H.Jc.Fa : H.zg.Fa) - this.Od / (this.playbackRate || .001), e(this.U, this.Od, this.Sh())) : this.U.play(), this.qe = !1);
			break;
		case 2:
			a ? this.Vi() ? (this.U.pause(), this.qe = !0) : this.qe = !1 : this.qe && (this.qe = !1, this.U.play())
		}
	};
	K.Ja = function(a) {
		this.type = a;
		H = this.c = a.c;
		P = this;
		this.vd = null;
		this.zk = -600;
		!(this.c.bj || this.c.xm && (this.c.kk || this.c.ym)) || this.c.lk || this.c.Cb || this.c.np || (pa = !0);
		G = null;
		"undefined" !== typeof AudioContext ? (S = 1, G = new AudioContext) : "undefined" !== typeof webkitAudioContext && (S = 1, G = new webkitAudioContext);
		if (this.c.bj && 1 === S || pa) {
			var b = /os\s9/i.test(navigator.userAgent),
				c = function() {
					var a = G.createBuffer(1, 1, 22050),
						b = G.createBufferSource();
					b.buffer = a;
					b.connect(G.destination);
					h(b)
				},
				d = function() {
					var a, b, c;
					if (pa) {
						if (!I) for (a = 0, b = ub.length; a < b; ++a) c = ub[a], c.de || c.Wd || c.U.play();
						J(ub)
					}
				};
			document.addEventListener("touchstart", function() {
				!gc && G && (c(), gc = !0);
				b || d()
			}, !0);
			document.addEventListener("touchend", function() {
				!Sc && G && (c(), Sc = !0);
				b && d()
			}, !0)
		}
		1 !== S && (this.c.je && "undefined" !== typeof window.Media ? S = 2 : this.c.us && (S = 3));
		2 === S && (Q = location.href, a = Q.lastIndexOf("/"), -1 < a && (Q = Q.substr(0, a + 1)), Q = Q.replace("file://", ""));
		if (this.c.ws && this.c.Uy && "undefined" === typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.c.Eg(this);
		else {
			if (this.c.Yc) T = this.c.xm;
			else try {
				T = !! (new Audio).canPlayType('audio/ogg; codecs="vorbis"')
			} catch (e) {
				T = !1
			}
			this.c.Hn(this)
		}
	};
	var Fa = K.Ja.prototype;
	Fa.qa = function() {
		this.c.Gi = this;
		N = this.ca[0];
		this.pg = this.ca[1];
		this.sz = 0 !== this.ca[2];
		Qa = this.ca[3];
		oa = this.ca[4];
		this.zk = -this.ca[5];
		sb = this.ca[6];
		fb = this.ca[7];
		Cd = this.ca[8];
		this.vd = new B;
		var a = this.c.wa || this.c.width,
			c = this.c.ua || this.c.height;
		1 === S && ("undefined" !== typeof G.listener.dopplerFactor && (G.listener.dopplerFactor = 0), G.listener.setPosition(a / 2, c / 2, this.zk), G.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(a, c) {
			Ea && Ea.disconnect();
			Hb = c.toLowerCase();
			Ea = G.createMediaStreamSource(a);
			Ea.connect(b(Hb))
		});
		this.c.Br(function(a) {
			P.pz(a)
		});
		var d = this;
		this.c.io(function(a) {
			d.Wp(a)
		})
	};
	Fa.Wp = function(a) {
		var b, c, d;
		b = 0;
		for (c = F.length; b < c; b++) d = F[b], d.$b && d.$b.Aa === a && (d.$b.Aa = null, d.zf && d.Vi() && d.yf && d.stop());
		this.vd.Aa === a && (this.vd.Aa = null)
	};
	Fa.Nc = function() {
		var a = {
			silent: I,
			masterVolume: U,
			listenerZ: this.zk,
			listenerUid: this.vd.um() ? this.vd.Aa.uid : -1,
			playing: [],
			effects: {}
		},
			b = a.playing,
			c, d, e, f, g, h;
		c = 0;
		for (d = F.length; c < d; c++) e = F[c], !e.Vi() || 3 === this.pg || e.Ze && 1 === this.pg || !e.Ze && 2 === this.pg || (f = e.Wo(), e.yf && (f = f % e.Sh()), f = {
			tag: e.tag,
			buffersrc: e.buffer.src,
			is_music: e.Ze,
			playbackTime: f,
			volume: e.volume,
			looping: e.yf,
			muted: e.Zi,
			playbackRate: e.playbackRate,
			paused: e.Wd,
			resume_position: e.Od
		}, e.zf && (f.pan = {}, h = f.pan, e.$b && e.$b.um() ? h.objUid = e.$b.Aa.uid : (h.x = e.Bt, h.y = e.Ct, h.a = e.xt), h.ia = e.yt, h.oa = e.zt, h.og = e.At), b.push(f));
		b = a.effects;
		for (g in ca) if (ca.hasOwnProperty(g)) {
			e = [];
			c = 0;
			for (d = ca[g].length; c < d; c++) e.push({
				type: ca[g][c].type,
				params: ca[g][c].Pb
			});
			b[g] = e
		}
		return a
	};
	var Ib = [];
	Fa.kd = function(a) {
		var b = a.silent;
		U = a.masterVolume;
		this.zk = a.listenerZ;
		this.vd.Uk(null);
		var c = a.listenerUid; - 1 !== c && (this.vd.Om = c, Ib.push(this.vd));
		var c = a.playing,
			d, e, f, g, h, D, A, C, w, x, H;
		if (3 !== this.pg) for (d = 0, e = F.length; d < e; d++) w = F[d], w.Ze && 1 === this.pg || (w.Ze || 2 !== this.pg) && w.stop();
		for (h in ca) if (ca.hasOwnProperty(h)) for (d = 0, e = ca[h].length; d < e; d++) ca[h][d].remove();
		pb(ca);
		for (h in a.effects) if (a.effects.hasOwnProperty(h)) for (D = a.effects[h], d = 0, e = D.length; d < e; d++) switch (f = D[d].type, x = D[d].params, f) {
		case "filter":
			E(h, new l(x[0], x[1], x[2], x[3], x[4], x[5]));
			break;
		case "delay":
			E(h, new n(x[0], x[1], x[2]));
			break;
		case "convolve":
			f = x[2];
			w = this.jm(f, !1);
			w.kb ? f = new k(w.kb, x[0], x[1], f) : (f = new k(null, x[0], x[1], f), w.ht = x[0], w.Pl = f);
			E(h, f);
			break;
		case "flanger":
			E(h, new m(x[0], x[1], x[2], x[3], x[4]));
			break;
		case "phaser":
			E(h, new q(x[0], x[1], x[2], x[3], x[4], x[5]));
			break;
		case "gain":
			E(h, new p(x[0]));
			break;
		case "tremolo":
			E(h, new t(x[0], x[1]));
			break;
		case "ringmod":
			E(h, new u(x[0], x[1]));
			break;
		case "distortion":
			E(h, new v(x[0], x[1], x[2], x[3], x[4]));
			break;
		case "compressor":
			E(h, new r(x[0], x[1], x[2], x[3], x[4]));
			break;
		case "analyser":
			E(h, new z(x[0], x[1]))
		}
		d = 0;
		for (e = c.length; d < e; d++) 3 === this.pg || (a = c[d], f = a.buffersrc, g = a.is_music, h = a.tag, D = a.playbackTime, A = a.looping, C = a.volume, H = (x = a.pan) && x.hasOwnProperty("objUid") ? x.objUid : -1, g && 1 === this.pg) || !g && 2 === this.pg || ((w = this.Po(f, h, g, A, C)) ? (w.Od = a.resume_position, w.Bq( !! x), w.play(A, C, D), w.On(), w.Fu(), w.Zl(w.Zi || w.rk), a.paused && w.pause(), a.muted && w.Vz(), w.Zl(w.Zi || w.rk), x && (-1 !== H ? (w.$b = w.$b || new B, w.$b.Om = H, Ib.push(w.$b)) : w.Aq(x.x, x.y, x.a, x.ia, x.oa, x.og))) : (w = this.jm(f, g), w.un = D, w.cn = a.paused, x && (-1 !== H ? w.oj.push({
			jt: H,
			gp: x.ia,
			Sp: x.oa,
			Vp: x.og,
			su: h
		}) : w.oj.push({
			x: x.x,
			y: x.y,
			R: x.a,
			gp: x.ia,
			Sp: x.oa,
			Vp: x.og,
			su: h
		}))));
		if (b && !I) {
			d = 0;
			for (e = F.length; d < e; d++) F[d].$t(!0);
			I = !0
		} else if (!b && I) {
			d = 0;
			for (e = F.length; d < e; d++) F[d].$t(!1);
			I = !1
		}
	};
	Fa.Lf = function() {
		var a, b, c, d;
		a = 0;
		for (b = Ib.length; a < b; a++) c = Ib[a], d = this.c.Th(c.Om), c.Uk(d), c.Om = -1, d && (za = d.x, Y = d.y);
		J(Ib)
	};
	Fa.pz = function(a) {
		if (!this.sz) {
			!a && G && G.resume && G.resume();
			var b, c;
			b = 0;
			for (c = F.length; b < c; b++) F[b].Xz(a);
			a && G && G.suspend && G.suspend()
		}
	};
	Fa.Sb = function() {
		var a = this.c.Ha,
			b, c, d;
		b = 0;
		for (c = F.length; b < c; b++) d = F[b], d.Sb(a), 0 !== N && d.On();
		var e, f;
		for (e in ca) if (ca.hasOwnProperty(e)) for (d = ca[e], b = 0, c = d.length; b < c; b++) f = d[b], f.Sb && f.Sb();
		1 === S && this.vd.um() && (this.vd.Sb(a), za = this.vd.Aa.x, Y = this.vd.Aa.y, G.listener.setPosition(this.vd.Aa.x, this.vd.Aa.y, this.zk), G.listener.setVelocity(this.vd.Zo(), this.vd.$o(), 0))
	};
	var Jb = [];
	Fa.Wz = function(a) {
		var b, c, d, e, f, g = 0;
		b = 0;
		for (c = a.length; b < c; ++b) if (d = a[b], e = d[0], d = 2 * d[1], (f = 4 < e.length && ".ogg" === e.substr(e.length - 4)) && T || !f && !T) Jb.push({
			filename: e,
			size: d,
			Aa: null
		}), g += d;
		return g
	};
	Fa.cA = function() {
		var a, b, c, d;
		a = 0;
		for (b = Jb.length; a < b; ++a) c = Jb[a], d = this.c.em + c.filename, c.Aa = this.jm(d, !1)
	};
	Fa.ky = function() {
		var a = 0,
			b, c, d;
		b = 0;
		for (c = Jb.length; b < c; ++b) d = Jb[b], d.Aa.Ty() || d.Aa.Ky() || this.c.Cb || this.c.ym ? a += d.size : d.Aa.vs() && (a += Math.floor(d.size / 2));
		return a
	};
	Fa.jm = function(a, b) {
		var c, d, e, f = null;
		c = 0;
		for (d = L.length; c < d; c++) if (e = L[c], e.src === a) {
			f = e;
			break
		}
		f || (f = new D(a, b), L.push(f));
		return f
	};
	Fa.Po = function(a, b, c, d, e) {
		var f, g, h;
		f = 0;
		for (g = F.length; f < g; f++) if (h = F[f], h.src === a && (h.xw() || c)) return h.tag = b, h;
		a = this.jm(a, c);
		if (!a.kb) return "<preload>" !== b && (a.dn = b, a.Lp = d, a.Uq = e), null;
		h = new A(a, b);
		F.push(h);
		return h
	};
	var gb = [];
	w.prototype.rl = function(a) {
		return Sb(O, a)
	};
	K.L = new w;
	x.prototype.Play = function(b, c, d, e) {
		!I && (d = a(d), R = this.Po(this.c.em + b[0] + (T ? ".ogg" : ".m4a"), e, b[1], 0 !== c, d)) && (R.Bq(!1), R.play(0 !== c, d))
	};
	x.prototype.Xv = function(b, c) {
		C(b);
		var d = a(c),
			e, f;
		e = 0;
		for (f = gb.length; e < f; e++) gb[e].Zz(d)
	};
	x.prototype.Nv = function(a) {
		if (!I) {
			var b = a[1];
			a = this.c.em + a[0] + (T ? ".ogg" : ".m4a");
			3 === S ? this.c.Yc ? AppMobi.context.loadSound(a) : AppMobi.player.loadSound(a) : 2 !== S && this.Po(a, "<preload>", b, !1)
		}
	};
	K.xa = new x;
	K.sb = new function() {}
})();

function pd(a) {
	this.c = a
}(function() {
	function a() {}
	var c = pd.prototype;
	c.Va = function(a) {
		this.pb = a;
		this.c = a.c
	};
	c.Va.prototype.qa = function() {};
	c.Ja = function(a) {
		this.type = a;
		this.c = a.c
	};
	c.Ja.prototype.qa = function() {
		var a = this;
		window.addEventListener("resize", function() {
			a.c.trigger(pd.prototype.L.Hv, a)
		});
		"undefined" !== typeof navigator.onLine && (window.addEventListener("online", function() {
			a.c.trigger(pd.prototype.L.Cv, a)
		}), window.addEventListener("offline", function() {
			a.c.trigger(pd.prototype.L.Bv, a)
		}));
		"undefined" !== typeof window.applicationCache && (window.applicationCache.addEventListener("updateready", function() {
			a.c.fj = 1;
			a.c.trigger(pd.prototype.L.qr, a)
		}), window.applicationCache.addEventListener("progress", function(c) {
			a.c.fj = c.loaded / c.total
		}));
		this.c.Yc || (document.addEventListener("appMobi.device.update.available", function() {
			a.c.trigger(pd.prototype.L.qr, a)
		}), document.addEventListener("backbutton", function() {
			a.c.trigger(pd.prototype.L.Wn, a)
		}), document.addEventListener("menubutton", function() {
			a.c.trigger(pd.prototype.L.jr, a)
		}), document.addEventListener("searchbutton", function() {
			a.c.trigger(pd.prototype.L.Iv, a)
		}), document.addEventListener("tizenhwkey", function(c) {
			var f;
			switch (c.keyName) {
			case "back":
				f = a.c.trigger(pd.prototype.L.Wn, a);
				!f && window.tizen && window.tizen.application.getCurrentApplication().exit();
				break;
			case "menu":
				(f = a.c.trigger(pd.prototype.L.jr, a)) || c.preventDefault()
			}
		}));
		this.c.sp && WinJS.Application && (WinJS.Application.onbackclick = function() {
			return !!a.c.trigger(pd.prototype.L.Wn, a)
		});
		this.c.Br(function(c) {
			c ? a.c.trigger(pd.prototype.L.Dv, a) : a.c.trigger(pd.prototype.L.Ev, a)
		})
	};
	a.prototype.Cv = function() {
		return !0
	};
	a.prototype.Bv = function() {
		return !0
	};
	a.prototype.qr = function() {
		return !0
	};
	a.prototype.Ev = function() {
		return !0
	};
	a.prototype.Dv = function() {
		return !0
	};
	a.prototype.Hv = function() {
		return !0
	};
	a.prototype.Wn = function() {
		return !0
	};
	a.prototype.jr = function() {
		return !0
	};
	a.prototype.Iv = function() {
		return !0
	};
	c.L = new a;
	c.xa = new function() {};
	c.sb = new function() {}
})();

function qd(a) {
	this.c = a
}(function() {
	function a() {}
	var c = qd.prototype;
	c.Va = function(a) {
		this.pb = a;
		this.c = a.c
	};
	c.Va.prototype.qa = function() {};
	c.Ja = function(a) {
		this.type = a;
		this.c = a.c;
		this.cj = Array(256);
		this.gl = Array(256);
		this.xg = 0
	};
	var b = c.Ja.prototype;
	b.qa = function() {
		var a = this;
		this.c.Cb || (jQuery(document).keydown(function(b) {
			a.nz(b)
		}), jQuery(document).keyup(function(b) {
			a.oz(b)
		}))
	};
	var d = [32, 33, 34, 35, 36, 37, 38, 39, 40, 44];
	b.nz = function(a) {
		var b = !1;
		window != window.top && -1 < d.indexOf(a.which) && (a.preventDefault(), b = !0, a.stopPropagation());
		if (this.cj[a.which]) this.gl[a.which] && !b && a.preventDefault();
		else {
			this.cj[a.which] = !0;
			this.xg = a.which;
			this.c.Yb = !0;
			this.c.trigger(qd.prototype.L.ov, this);
			var c = this.c.trigger(qd.prototype.L.er, this),
				g = this.c.trigger(qd.prototype.L.yv, this);
			this.c.Yb = !1;
			if (c || g) this.gl[a.which] = !0, b || a.preventDefault()
		}
	};
	b.oz = function(a) {
		this.cj[a.which] = !1;
		this.xg = a.which;
		this.c.Yb = !0;
		this.c.trigger(qd.prototype.L.br, this);
		var b = this.c.trigger(qd.prototype.L.hr, this),
			c = this.c.trigger(qd.prototype.L.gr, this);
		this.c.Yb = !1;
		if (b || c || this.gl[a.which]) this.gl[a.which] = !0, a.preventDefault()
	};
	b.nj = function() {
		var a;
		for (a = 0; 256 > a; ++a) if (this.cj[a]) {
			this.cj[a] = !1;
			this.xg = a;
			this.c.trigger(qd.prototype.L.br, this);
			var b = this.c.trigger(qd.prototype.L.hr, this),
				c = this.c.trigger(qd.prototype.L.gr, this);
			if (b || c) this.gl[a] = !0
		}
	};
	b.Nc = function() {
		return {
			triggerKey: this.xg
		}
	};
	b.kd = function(a) {
		this.xg = a.triggerKey
	};
	a.prototype.bv = function(a) {
		return this.cj[a]
	};
	a.prototype.er = function(a) {
		return a === this.xg
	};
	a.prototype.ov = function() {
		return !0
	};
	a.prototype.br = function() {
		return !0
	};
	a.prototype.hr = function(a) {
		return a === this.xg
	};
	a.prototype.yv = function(a) {
		return a === this.xg
	};
	a.prototype.gr = function(a) {
		return a === this.xg
	};
	c.L = new a;
	c.xa = new function() {};
	c.sb = new function() {}
})();

function rd(a) {
	this.c = a
}(function() {
	function a() {}
	function c() {}
	var b = rd.prototype;
	b.Va = function(a) {
		this.pb = a;
		this.c = a.c
	};
	b.Va.prototype.qa = function() {};
	b.Ja = function(a) {
		this.type = a;
		this.c = a.c;
		this.po = Array(4);
		this.vu = this.Kn = this.yj = this.jh = this.ih = 0;
		this.dp = !1
	};
	var d = b.Ja.prototype;
	d.qa = function() {
		var a = this;
		if (!this.c.Cb) {
			jQuery(document).mousemove(function(b) {
				a.$p(b)
			});
			jQuery(document).mousedown(function(b) {
				a.Zp(b)
			});
			jQuery(document).mouseup(function(b) {
				a.aq(b)
			});
			jQuery(document).dblclick(function(b) {
				a.mz(b)
			});
			var b = function(b) {
					a.qz(b)
				};
			document.addEventListener("mousewheel", b, !1);
			document.addEventListener("DOMMouseScroll", b, !1)
		}
	};
	var f = {
		left: 0,
		top: 0
	};
	d.$p = function(a) {
		var b = this.c.Cb ? f : jQuery(this.c.canvas).offset();
		this.ih = a.pageX - b.left;
		this.jh = a.pageY - b.top
	};
	d.dt = function() {
		return 0 < this.c.sd ? !0 : 0 <= this.ih && 0 <= this.jh && this.ih < this.c.width && this.jh < this.c.height
	};
	d.Zp = function(a) {
		this.dt() && (this.po[a.which] = !0, this.c.Yb = !0, this.c.trigger(rd.prototype.L.nv, this), this.yj = a.which - 1, this.Kn = 0, this.c.trigger(rd.prototype.L.cr, this), this.c.trigger(rd.prototype.L.mr, this), this.c.Yb = !1)
	};
	d.aq = function(a) {
		this.po[a.which] && (this.c.rm && !this.c.$h && a.preventDefault(), this.c.rm = !0, this.po[a.which] = !1, this.c.Yb = !0, this.yj = a.which - 1, this.c.trigger(rd.prototype.L.Gv, this), this.c.Yb = !1)
	};
	d.mz = function(a) {
		this.dt() && (a.preventDefault(), this.c.Yb = !0, this.yj = a.which - 1, this.Kn = 1, this.c.trigger(rd.prototype.L.cr, this), this.c.trigger(rd.prototype.L.mr, this), this.c.Yb = !1)
	};
	d.qz = function(a) {
		this.vu = 0 > (a.wheelDelta ? a.wheelDelta : a.detail ? -a.detail : 0) ? 0 : 1;
		this.dp = !1;
		this.c.Yb = !0;
		this.c.trigger(rd.prototype.L.Mv, this);
		this.c.Yb = !1;
		this.dp && Tb(a) && a.preventDefault()
	};
	a.prototype.cr = function(a, b) {
		return a === this.yj && b === this.Kn
	};
	a.prototype.nv = function() {
		return !0
	};
	a.prototype.Gv = function(a) {
		return a === this.yj
	};
	a.prototype.mr = function(a, b, c) {
		return a !== this.yj || b !== this.Kn ? !1 : this.c.cl(c, this.ih, this.jh)
	};
	a.prototype.Mv = function(a) {
		this.dp = !0;
		return a === this.vu
	};
	b.L = new a;
	b.xa = new function() {};
	c.prototype.fo = function(a, b) {
		var c, d, f, k, m;
		ia(b) ? (c = this.c.Zf(0), d = c.scale, f = c.pd, k = c.Ld, m = c.M, c.scale = 1, c.pd = 1, c.Ld = 1, c.M = 0, a.na(c.Vb(this.ih, this.jh, !0)), c.scale = d, c.pd = f, c.Ld = k, c.M = m) : (c = ja(b) ? this.c.Zf(b) : this.c.ck(b)) ? a.na(c.Vb(this.ih, this.jh, !0)) : a.na(0)
	};
	c.prototype.ho = function(a, b) {
		var c, d, f, k, m;
		ia(b) ? (c = this.c.Zf(0), d = c.scale, f = c.pd, k = c.Md, m = c.M, c.scale = 1, c.pd = 1, c.Md = 1, c.M = 0, a.na(c.Vb(this.ih, this.jh, !1)), c.scale = d, c.pd = f, c.Md = k, c.M = m) : (c = ja(b) ? this.c.Zf(b) : this.c.ck(b)) ? a.na(c.Vb(this.ih, this.jh, !1)) : a.na(0)
	};
	b.sb = new c
})();

function nd(a) {
	this.c = a
}(function() {
	function a() {
		if (0 === this.Bo.length) {
			var a = document.createElement("canvas");
			a.width = this.width;
			a.height = this.height;
			var b = a.getContext("2d");
			this.uj ? b.drawImage(this.Gb, this.lj, this.mj, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.Gb, 0, 0, this.width, this.height);
			this.Bo = a.toDataURL("image/png")
		}
		return this.Bo
	}
	function c() {}
	function b(a) {
		a[0] = 0;
		a[1] = 0;
		a[2] = 0;
		q.push(a)
	}
	function d(a, b) {
		return a < b ? "" + a + "," + b : "" + b + "," + a
	}
	function f(a, b, c, e) {
		b = b.uid;
		c = c.uid;
		var f = d(b, c);
		if (a.hasOwnProperty(f)) a[f][2] = e;
		else {
			var g = q.length ? q.pop() : [0, 0, 0];
			g[0] = b;
			g[1] = c;
			g[2] = e;
			a[f] = g
		}
	}
	function h(a, c, e) {
		c = d(c.uid, e.uid);
		a.hasOwnProperty(c) && (b(a[c]), delete a[c])
	}
	function e(a, b, c) {
		b = d(b.uid, c.uid);
		if (a.hasOwnProperty(b)) return p = a[b][2], !0;
		p = -2;
		return !1
	}
	function g() {}
	var l = nd.prototype;
	l.Va = function(a) {
		this.pb = a;
		this.c = a.c
	};
	var n = l.Va.prototype;
	n.qa = function() {
		if (!this.Ea) {
			var b, c, d, e, f, g, h, k, l;
			this.Te = [];
			this.gk = !1;
			b = 0;
			for (c = this.Ed.length; b < c; b++) {
				f = this.Ed[b];
				h = {};
				h.name = f[0];
				h.speed = f[1];
				h.loop = f[2];
				h.tq = f[3];
				h.qn = f[4];
				h.Gt = f[5];
				h.Xa = f[6];
				h.frames = [];
				d = 0;
				for (e = f[7].length; d < e; d++) g = f[7][d], k = {}, k.Hq = g[0], k.ru = g[1], k.lj = g[2], k.mj = g[3], k.width = g[4], k.height = g[5], k.duration = g[6], k.Hd = g[7], k.Id = g[8], k.hp = g[9], k.en = g[10], k.Ht = g[11], k.uj = 0 !== k.width, k.Bo = "", k.BB = a, l = {
					left: 0,
					top: 0,
					right: 1,
					bottom: 1
				}, k.Cq = l, k.Tb = null, (l = this.c.Wx(g[0])) ? k.Gb = l : (k.Gb = new Image, k.Gb.Dw = g[0], k.Gb.Cw = g[1], k.Gb.vw = null, this.c.Ju(k.Gb, g[0])), h.frames.push(k), this.Te.push(k);
				this.Ed[b] = h
			}
		}
	};
	n.Eu = function() {
		var a, b, c;
		a = 0;
		for (b = this.G.length; a < b; a++) c = this.G[a], c.Rl = c.Ae.Tb
	};
	n.Yp = function() {
		if (!this.Ea) {
			var a, b, c;
			a = 0;
			for (b = this.Te.length; a < b; ++a) c = this.Te[a], c.Gb.vw = null, c.Tb = null;
			this.gk = !1;
			this.Eu()
		}
	};
	n.bq = function() {
		if (!this.Ea && this.G.length) {
			var a, b, c;
			a = 0;
			for (b = this.Te.length; a < b; ++a) c = this.Te[a], c.Tb = this.c.ja.Nm(c.Gb, this.c.Wa, c.Ht);
			this.Eu()
		}
	};
	n.bz = function() {
		if (!this.Ea && !this.gk && this.c.ja) {
			var a, b, c;
			a = 0;
			for (b = this.Te.length; a < b; ++a) c = this.Te[a], c.Tb = this.c.ja.Nm(c.Gb, this.c.Wa, c.Ht);
			this.gk = !0
		}
	};
	n.Pq = function() {
		if (!this.Ea && !this.G.length && this.gk) {
			var a, b, c;
			a = 0;
			for (b = this.Te.length; a < b; ++a) c = this.Te[a], this.c.ja.deleteTexture(c.Tb), c.Tb = null;
			this.gk = !1
		}
	};
	var k = [];
	n.kq = function(a) {
		var b, c, d;
		J(k);
		b = 0;
		for (c = this.Te.length; b < c; ++b) d = this.Te[b].Gb, -1 === k.indexOf(d) && (a.drawImage(d, 0, 0), k.push(d))
	};
	l.Ja = function(a) {
		this.type = a;
		this.c = a.c;
		a = this.type.Ed[0].frames[0].en;
		this.pe ? this.Ra.Xk(a) : this.Ra = new Ab(a)
	};
	var m = l.Ja.prototype;
	m.qa = function() {
		this.visible = 0 === this.ca[0];
		this.vm = this.qk = !1;
		this.Of = 0 !== this.ca[3];
		1 === this.type.Ed.length && 1 === this.type.Ed[0].frames.length || 0 === this.type.Ed[0].speed || (this.c.Hn(this), this.qk = !0);
		this.rb = this.ds(this.ca[1]) || this.type.Ed[0];
		this.ka = this.ca[2];
		0 > this.ka && (this.ka = 0);
		this.ka >= this.rb.frames.length && (this.ka = this.rb.frames.length - 1);
		var a = this.rb.frames[this.ka];
		this.Ra.Xk(a.en);
		this.Hd = a.Hd;
		this.Id = a.Id;
		this.Tj = this.rb.speed;
		this.pe ? this.rf.reset() : this.rf = new yb;
		this.Xf = this.rf.Fa;
		this.Eh = !0;
		this.Mf = 0;
		this.Dh = !0;
		this.Ii = this.Cr = "";
		this.Nr = 0;
		this.Il = -1;
		this.type.bz();
		var b, c, d, e, f, g, h, a = 0;
		for (b = this.type.Ed.length; a < b; a++) for (e = this.type.Ed[a], c = 0, d = e.frames.length; c < d; c++) f = e.frames[c], 0 === f.width && (f.width = f.Gb.width, f.height = f.Gb.height), f.uj && (h = f.Gb, g = f.Cq, g.left = f.lj / h.width, g.top = f.mj / h.height, g.right = (f.lj + f.width) / h.width, g.bottom = (f.mj + f.height) / h.height, 0 === f.lj && 0 === f.mj && f.width === h.width && f.height === h.height && (f.uj = !1));
		this.Ae = this.rb.frames[this.ka];
		this.Rl = this.Ae.Tb
	};
	m.Nc = function() {
		var a = {
			a: this.rb.Xa,
			f: this.ka,
			cas: this.Tj,
			fs: this.Xf,
			ar: this.Mf,
			at: this.rf.Fa
		};
		this.Eh || (a.ap = this.Eh);
		this.Dh || (a.af = this.Dh);
		return a
	};
	m.kd = function(a) {
		var b = this.ay(a.a);
		b && (this.rb = b);
		this.ka = a.f;
		0 > this.ka && (this.ka = 0);
		this.ka >= this.rb.frames.length && (this.ka = this.rb.frames.length - 1);
		this.Tj = a.cas;
		this.Xf = a.fs;
		this.Mf = a.ar;
		this.rf.reset();
		this.rf.Fa = a.at;
		this.Eh = a.hasOwnProperty("ap") ? a.ap : !0;
		this.Dh = a.hasOwnProperty("af") ? a.af : !0;
		this.Ae = this.rb.frames[this.ka];
		this.Rl = this.Ae.Tb;
		this.Ra.Xk(this.Ae.en);
		this.Hd = this.Ae.Hd;
		this.Id = this.Ae.Id
	};
	m.lo = function(a) {
		this.ka = a ? 0 : this.rb.frames.length - 1;
		this.Eh = !1;
		this.Cr = this.rb.name;
		this.vm = !0;
		this.c.trigger(nd.prototype.L.lv, this);
		this.c.trigger(nd.prototype.L.$q, this);
		this.vm = !1;
		this.Mf = 0
	};
	m.j = function() {
		return this.rf.Fa
	};
	m.Sb = function() {
		this.rf.add(this.c.Wg(this));
		this.Ii.length && this.Tr();
		0 <= this.Il && this.Ur();
		var a = this.rf.Fa,
			b = this.rb,
			c = b.frames[this.ka],
			d = c.duration / this.Tj;
		this.Eh && a >= this.Xf + d && (this.Dh ? this.ka++ : this.ka--, this.Xf += d, this.ka >= b.frames.length && (b.Gt ? (this.Dh = !1, this.ka = b.frames.length - 2) : b.loop ? this.ka = b.qn : (this.Mf++, this.Mf >= b.tq ? this.lo(!1) : this.ka = b.qn)), 0 > this.ka && (b.Gt ? (this.ka = 1, this.Dh = !0, b.loop || (this.Mf++, this.Mf >= b.tq && this.lo(!0))) : b.loop ? this.ka = b.qn : (this.Mf++, this.Mf >= b.tq ? this.lo(!0) : this.ka = b.qn)), 0 > this.ka ? this.ka = 0 : this.ka >= b.frames.length && (this.ka = b.frames.length - 1), a > this.Xf + b.frames[this.ka].duration / this.Tj && (this.Xf = a), a = b.frames[this.ka], this.Ci(c, a), this.c.Ta = !0)
	};
	m.ds = function(a) {
		var b, c, d;
		b = 0;
		for (c = this.type.Ed.length; b < c; b++) if (d = this.type.Ed[b], Sb(d.name, a)) return d;
		return null
	};
	m.ay = function(a) {
		var b, c, d;
		b = 0;
		for (c = this.type.Ed.length; b < c; b++) if (d = this.type.Ed[b], d.Xa === a) return d;
		return null
	};
	m.Tr = function() {
		var a = this.rb.frames[this.ka],
			b = this.ds(this.Ii);
		this.Ii = "";
		!b || Sb(b.name, this.rb.name) && this.Eh || (this.rb = b, this.Tj = b.speed, 0 > this.ka && (this.ka = 0), this.ka >= this.rb.frames.length && (this.ka = this.rb.frames.length - 1), 1 === this.Nr && (this.ka = 0), this.Eh = !0, this.Xf = this.rf.Fa, this.Dh = !0, this.Ci(a, this.rb.frames[this.ka]), this.c.Ta = !0)
	};
	m.Ur = function() {
		var a = this.rb.frames[this.ka],
			b = this.ka;
		this.ka = ta(this.Il);
		0 > this.ka && (this.ka = 0);
		this.ka >= this.rb.frames.length && (this.ka = this.rb.frames.length - 1);
		b !== this.ka && (this.Ci(a, this.rb.frames[this.ka]), this.Xf = this.rf.Fa, this.c.Ta = !0);
		this.Il = -1
	};
	m.Ci = function(a, b) {
		var c = a.width,
			d = a.height,
			e = b.width,
			f = b.height;
		c != e && (this.width *= e / c);
		d != f && (this.height *= f / d);
		this.Hd = b.Hd;
		this.Id = b.Id;
		this.Ra.Xk(b.en);
		this.ra();
		this.Ae = b;
		this.Rl = b.Tb;
		c = 0;
		for (d = this.Ca.length; c < d; c++) e = this.Ca[c], e.pt && e.pt(a, b);
		this.c.trigger(nd.prototype.L.Ci, this)
	};
	m.Uf = function(a) {
		a.globalAlpha = this.opacity;
		var b = this.Ae,
			c = b.uj,
			d = b.Gb,
			e = this.x,
			f = this.y,
			g = this.width,
			h = this.height;
		if (0 === this.M && 0 <= g && 0 <= h) e -= this.Hd * g, f -= this.Id * h, this.c.kg && (e = Math.round(e), f = Math.round(f)), c ? a.drawImage(d, b.lj, b.mj, b.width, b.height, e, f, g, h) : a.drawImage(d, e, f, g, h);
		else {
			this.c.kg && (e = Math.round(e), f = Math.round(f));
			a.save();
			var k = 0 < g ? 1 : -1,
				l = 0 < h ? 1 : -1;
			a.translate(e, f);
			1 === k && 1 === l || a.scale(k, l);
			a.rotate(this.M * k * l);
			e = 0 - this.Hd * na(g);
			f = 0 - this.Id * na(h);
			c ? a.drawImage(d, b.lj, b.mj, b.width, b.height, e, f, na(g), na(h)) : a.drawImage(d, e, f, na(g), na(h));
			a.restore()
		}
	};
	m.Ni = function(a) {
		this.De(a)
	};
	m.De = function(a) {
		a.se(this.Rl);
		a.rj(this.opacity);
		var b = this.Ae,
			c = this.Bb;
		if (this.c.kg) {
			var d = Math.round(this.x) - this.x,
				e = Math.round(this.y) - this.y;
			b.uj ? a.mh(c.oc + d, c.pc + e, c.bd + d, c.cd + e, c.Tc + d, c.Uc + e, c.Rc + d, c.Sc + e, b.Cq) : a.Rk(c.oc + d, c.pc + e, c.bd + d, c.cd + e, c.Tc + d, c.Uc + e, c.Rc + d, c.Sc + e)
		} else b.uj ? a.mh(c.oc, c.pc, c.bd, c.cd, c.Tc, c.Uc, c.Rc, c.Sc, b.Cq) : a.Rk(c.oc, c.pc, c.bd, c.cd, c.Tc, c.Uc, c.Rc, c.Sc)
	};
	m.gy = function(a) {
		var b = this.Ae,
			c, d;
		c = 0;
		for (d = b.hp.length; c < d; c++) if (Sb(a, b.hp[c][0])) return c;
		return -1
	};
	m.Fe = function(a, b) {
		var c = this.Ae,
			d = c.hp,
			e;
		ka(a) ? e = this.gy(a) : e = a - 1;
		e = ta(e);
		if (0 > e || e >= d.length) return b ? this.x : this.y;
		var f = (d[e][1] - c.Hd) * this.width,
			d = d[e][2],
			d = (d - c.Id) * this.height,
			c = Math.cos(this.M);
		e = Math.sin(this.M);
		var g = f * c - d * e,
			d = d * c + f * e,
			f = g + this.x,
			d = d + this.y;
		return b ? f : d
	};
	var q = [],
		p = -2,
		t = [];
	c.prototype.qv = function(a) {
		if (!a) return !1;
		var c = this.c,
			d = c.lm(),
			g = d.type,
			k = null;
		d.fa.collmemory ? k = d.fa.collmemory : (k = {}, d.fa.collmemory = k);
		d.fa.spriteCreatedDestroyCallback || (d.fa.spriteCreatedDestroyCallback = !0, c.io(function(a) {
			var c = d.fa.collmemory;
			a = a.uid;
			var e, f;
			for (e in c) c.hasOwnProperty(e) && (f = c[e], f[0] === a || f[1] === a) && (b(c[e]), delete c[e])
		}));
		var l = g.Ma(),
			m = a.Ma(),
			l = l.Vd(),
			n, q, r, v, u, z, B, F = this.c.tg,
			R = F - 1,
			T = c.Hc().rd;
		for (q = 0; q < l.length; q++) {
			r = l[q];
			m.bb ? (r.Ua(), this.c.So(r.V, a, r.Ab, t), n = t) : n = m.Vd();
			for (v = 0; v < n.length; v++) u = n[v], c.sh(r, u) || c.yw(r, u) ? (z = e(k, r, u), z = !z || p < R, f(k, r, u, F), z && (c.ln(T.wb), z = g.Ma(), B = a.Ma(), z.bb = !1, B.bb = !1, g === a ? (z.G.length = 2, z.G[0] = r, z.G[1] = u, g.xe()) : (z.G.length = 1, B.G.length = 1, z.G[0] = r, B.G[0] = u, g.xe(), a.xe()), T.Mz(), c.pi(T.wb))) : h(k, r, u);
			J(t)
		}
		return !1
	};
	var u = null,
		v = new ba,
		r = !1,
		z = [],
		B = new xa(0, 0, 0, 0);
	n.finish = function(a) {
		if (r) {
			if (a) {
				var b = this.c.Hc().rd.Le;
				a = u.Ma();
				var c = v.jf(),
					d, e;
				if (a.bb) {
					a.bb = !1;
					J(a.G);
					d = 0;
					for (e = c.length; d < e; ++d) a.G[d] = c[d];
					if (b) for (J(a.gb), d = 0, e = u.G.length; d < e; ++d) c = u.G[d], v.contains(c) || a.gb.push(c)
				} else if (b) for (b = a.G.length, d = 0, e = c.length; d < e; ++d) a.G[b + d] = c[d], La(a.gb, c[d]);
				else Ha(a.G, c);
				u.xe()
			}
			v.clear();
			r = !1
		}
	};
	c.prototype.cv = function(a) {
		if (a) {
			var b = !1,
				c, d, e, f = this.c.lm(),
				g = f.type,
				f = f.wm;
			c = a.Ma();
			d = this.c.Hc().rd.Le;
			var h;
			c.bb ? (this.Ua(), B.Li(this.Ab), B.offset(0, 0), this.c.So(this.V, a, B, z), h = z) : h = d ? c.gb : c.G;
			u = a;
			r = g !== a && !f;
			c = 0;
			for (d = h.length; c < d; c++) if (e = h[c], this.c.sh(this, e)) {
				b = !0;
				if (f) break;
				g !== a && v.add(e)
			}
			J(z);
			a = b
		} else a = !1;
		return a
	};
	c.prototype.Yu = function(a) {
		return this.Ii.length ? Sb(this.Ii, a) : Sb(this.rb.name, a)
	};
	c.prototype.$q = function(a) {
		return Sb(this.Cr, a)
	};
	c.prototype.lv = function() {
		return !0
	};
	c.prototype.Ci = function() {
		return !0
	};
	l.L = new c;
	g.prototype.Zv = function(a, b, c) {
		if (a && b && (b = this.c.yo(a, b, this.Fe(c, !0), this.Fe(c, !1)))) {
			"undefined" !== typeof b.M && (b.M = this.M, b.ra());
			this.c.ke++;
			var d, e, f;
			this.c.trigger(Object.getPrototypeOf(a.pb).L.Bi, b);
			if (b.td) for (d = 0, e = b.siblings.length; d < e; d++) f = b.siblings[d], this.c.trigger(Object.getPrototypeOf(f.type.pb).L.Bi, f);
			this.c.ke--;
			d = this.c.cy();
			c = !1;
			if (ia(d.fa.Spawn_LastExec) || d.fa.Spawn_LastExec < this.c.Qh) c = !0, d.fa.Spawn_LastExec = this.c.Qh;
			if (a != this.type && (a = a.Ma(), a.bb = !1, c ? (J(a.G), a.G[0] = b) : a.G.push(b), b.td)) for (d = 0, e = b.siblings.length; d < e; d++) f = b.siblings[d], a = f.type.Ma(), a.bb = !1, c ? (J(a.G), a.G[0] = f) : a.G.push(f)
		}
	};
	g.prototype.Pv = function(a, b) {
		this.Ii = a;
		this.Nr = b;
		this.qk || (this.c.Hn(this), this.qk = !0);
		this.vm || this.Tr()
	};
	g.prototype.Qv = function(a) {
		this.Il = a;
		this.qk || (this.c.Hn(this), this.qk = !0);
		this.vm || this.Ur()
	};
	l.xa = new g;
	l.sb = new function() {}
})();

function sd(a) {
	this.c = a
}(function() {
	function a(a, b) {
		return a.length ? a.pop() : new b
	}
	function c(a, b, c) {
		if (c) {
			var d;
			c = 0;
			for (d = b.length; c < d; c++) a.length < e && a.push(b[c]);
			J(b)
		} else for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (a.length < e && a.push(b[d]), delete b[d])
	}
	function b(b, c, d) {
		var e = b.hi;
		d = d.replace(/\s\s*$/, "");
		c >= e.length && e.push(a(g, Object));
		c = e[c];
		c.text = d;
		c.width = b.Np(d);
		b.xj = qa(b.xj, c.width)
	}
	function d() {}
	var f = sd.prototype;
	f.qa = function() {};
	f.Va = function(a) {
		this.pb = a;
		this.c = a.c
	};
	var h = f.Va.prototype;
	h.qa = function() {
		this.Ea || (this.Gb = new Image, this.c.Ju(this.Gb, this.Hq), this.Tb = null)
	};
	h.Yp = function() {
		this.Ea || (this.Tb = null)
	};
	h.bq = function() {
		if (!this.Ea && this.G.length) {
			this.Tb || (this.Tb = this.c.ja.Nm(this.Gb, this.c.Wa, this.Iq));
			var a, b;
			a = 0;
			for (b = this.G.length; a < b; a++) this.G[a].Tb = this.Tb
		}
	};
	h.Pq = function() {
		this.Ea || this.G.length || !this.Tb || (this.c.ja.deleteTexture(this.Tb), this.Tb = null)
	};
	h.kq = function(a) {
		a.drawImage(this.Gb, 0, 0)
	};
	f.Ja = function(a) {
		this.type = a;
		this.c = a.c
	};
	h = f.Ja.prototype;
	h.Lk = function() {
		c(g, this.hi, !0);
		c(l, this.Kl, !1);
		c(n, this.Ll, !1);
		pb(this.Og)
	};
	h.qa = function() {
		this.Gb = this.type.Gb;
		this.Jl = this.ca[0];
		this.Mg = this.ca[1];
		this.characterSet = this.ca[2];
		this.text = this.ca[3];
		this.Ng = this.ca[4];
		this.visible = 0 === this.ca[5];
		this.tm = this.ca[6] / 2;
		this.Qn = this.ca[7] / 2;
		this.rA = 0 === this.ca[9];
		this.Ji = this.ca[10];
		this.lineHeight = this.ca[11];
		this.ti = this.xj = 0;
		this.pe ? (J(this.hi), pb(this.Kl), pb(this.Ll), pb(this.Og)) : (this.hi = [], this.Kl = {}, this.Ll = {}, this.Og = {});
		this.el = !0;
		this.Fp = this.width;
		this.c.ja && (this.type.Tb || (this.type.Tb = this.c.ja.Nm(this.type.Gb, this.c.Wa, this.type.Iq)), this.Tb = this.type.Tb);
		this.$v()
	};
	h.Nc = function() {
		var a = {
			t: this.text,
			csc: this.Ng,
			csp: this.Ji,
			lh: this.lineHeight,
			tw: this.xj,
			th: this.ti,
			lrt: this.Zy,
			ha: this.tm,
			va: this.Qn,
			cw: {}
		},
			b;
		for (b in this.Og) a.cw[b] = this.Og[b];
		return a
	};
	h.kd = function(a) {
		this.text = a.t;
		this.Ng = a.csc;
		this.Ji = a.csp;
		this.lineHeight = a.lh;
		this.xj = a.tw;
		this.ti = a.th;
		this.Zy = a.lrt;
		a.hasOwnProperty("ha") && (this.tm = a.ha);
		a.hasOwnProperty("va") && (this.Qn = a.va);
		for (var b in a.cw) this.Og[b] = a.cw[b];
		this.el = !0;
		this.Fp = this.width
	};
	var e = 1E3,
		g = [],
		l = [],
		n = [];
	h.$v = function() {
		for (var b = this.Gb, c = b.width, d = b.height, b = this.Jl, e = this.Mg, f = b / c, g = e / d, h = this.characterSet, c = Math.floor(c / b), d = Math.floor(d / e), k = 0; k < h.length && !(k >= c * d); k++) {
			var m = k % c,
				A = Math.floor(k / c),
				C = h.charAt(k);
			if (this.c.ja) {
				var E = this.Ll,
					w = m * f,
					x = A * g,
					m = (m + 1) * f,
					A = (A + 1) * g;
				void 0 === E[C] && (E[C] = a(n, xa));
				E[C].left = w;
				E[C].top = x;
				E[C].right = m;
				E[C].bottom = A
			} else E = this.Kl, m = m * b, A = A * e, w = b, x = e, void 0 === E[C] && (E[C] = a(l, Object)), E[C].x = m, E[C].y = A, E[C].fc = w, E[C].ls = x
		}
	};
	var k = [];
	f.dw = function(a) {
		J(k);
		for (var b = "", c, d = 0; d < a.length;) if (c = a.charAt(d), "\n" === c) b.length && (k.push(b), b = ""), k.push("\n"), ++d;
		else if (" " === c || "\t" === c || "-" === c) {
			do b += a.charAt(d), d++;
			while (d < a.length && (" " === a.charAt(d) || "\t" === a.charAt(d)));
			k.push(b);
			b = ""
		} else d < a.length && (b += c, d++);
		b.length && k.push(b)
	};
	f.gw = function(b) {
		var d = b.text,
			e = b.hi;
		if (d && d.length) {
			var f = b.width;
			if (2 >= f) c(g, e, !0);
			else {
				var h = b.Ng,
					k = b.Ji;
				if (d.length * (b.Jl * h + k) - k <= f && -1 === d.indexOf("\n") && (k = b.Np(d), k <= f)) {
					c(g, e, !0);
					e.push(a(g, Object));
					e[0].text = d;
					e[0].width = k;
					b.xj = k;
					b.ti = b.Mg * h + b.lineHeight;
					return
				}
				this.hw(b);
				b.ti = e.length * (b.Mg * h + b.lineHeight)
			}
		} else c(g, e, !0)
	};
	f.hw = function(a) {
		var c = a.rA,
			d = a.text,
			f = a.hi,
			h = a.width;
		c && (this.dw(d), d = k);
		var l = "",
			m, n, D, A = 0,
			C = !1;
		for (D = 0; D < d.length; D++)"\n" === d[D] ? (!0 === C ? C = !1 : (b(a, A, l), A++), l = "") : (C = !1, m = l, l += d[D], n = a.Np(l.replace(/\s\s*$/, "")), n > h && ("" === m ? (b(a, A, l), l = "", C = !0) : (b(a, A, m), l = d[D]), A++, c || " " !== l || (l = "")));
		l.replace(/\s\s*$/, "").length && (b(a, A, l), A++);
		for (D = A; D < f.length; D++) g.length < e && g.push(f[D]);
		f.length = A
	};
	h.Np = function(a) {
		for (var b = this.Ji, c = a.length, d = 0, e = 0; e < c; e++) d += this.Ro(a.charAt(e)) * this.Ng + b;
		return d - (0 < d ? b : 0)
	};
	h.Ro = function(a) {
		var b = this.Og;
		return void 0 !== b[a] ? b[a] : this.Jl
	};
	h.Pt = function() {
		if (this.el || this.width !== this.Fp) this.ti = this.xj = 0, this.type.pb.gw(this), this.el = !1, this.Fp = this.width
	};
	h.Uf = function(a) {
		var b = this.Gb;
		if ("" !== this.text && null != b && (this.Pt(), !(this.height < this.Mg * this.Ng + this.lineHeight))) {
			a.globalAlpha = this.opacity;
			var b = this.x,
				c = this.y;
			this.c.kg && (b = Math.round(b), c = Math.round(c));
			var d = this.V.xb,
				e = this.V.yb,
				f = this.V.Ib,
				g = this.V.Hb;
			a.save();
			a.translate(b, c);
			a.rotate(this.M);
			for (var h = this.tm, k = this.Ng, l = this.Mg * k, m = this.lineHeight, n = this.Ji, w = this.hi, x, K = -(this.Hd * this.width), H = -(this.Id * this.height), H = H + this.Qn * qa(0, this.height - this.ti), P, O, Q, S = 0; S < w.length; S++) {
				var G = w[S].text;
				x = h * qa(0, this.width - w[S].width);
				P = K + x;
				H += m;
				if (c + H + l < e) H += l;
				else {
					for (var L = 0; L < G.length; L++) {
						O = G.charAt(L);
						x = this.Ro(O);
						var F = this.Kl[O];
						if (b + P + x * k + n < d) P += x * k + n;
						else {
							if (P + x * k > this.width + 1E-5) break;
							void 0 !== F && (O = P, Q = H, 0 === this.M && (O = Math.round(O), Q = Math.round(Q)), a.drawImage(this.Gb, F.x, F.y, F.fc, F.ls, O, Q, F.fc * k, F.ls * k));
							P += x * k + n;
							if (b + P > f) break
						}
					}
					H += l;
					if (H + l + m > this.height || c + H > g) break
				}
			}
			a.restore()
		}
	};
	var m = new ya;
	h.De = function(a) {
		a.se(this.Tb);
		a.rj(this.opacity);
		if (this.text && (this.Pt(), !(this.height < this.Mg * this.Ng + this.lineHeight))) {
			this.Ua();
			var b = this.Bb,
				c = 0,
				d = 0;
			this.c.kg && (c = Math.round(this.x) - this.x, d = Math.round(this.y) - this.y);
			var e = this.V.xb,
				f = this.V.yb,
				g = this.V.Ib,
				h = this.V.Hb,
				k = this.M,
				l = this.tm,
				n = this.Qn,
				E = this.Ng,
				w = this.Mg * E,
				x = this.lineHeight,
				K = this.Ji,
				H = this.hi,
				P = this.ti,
				O, Q, S;
			0 !== k && (Q = Math.cos(k), S = Math.sin(k));
			for (var c = b.oc + c, b = b.pc + d, G, n = n * qa(0, this.height - P), L, F, P = 0; P < H.length; P++) if (d = H[P].text, G = O = l * qa(0, this.width - H[P].width), n += x, 0 === k && b + n + w < f) n += w;
			else {
				for (var R = 0; R < d.length; R++) {
					var T = d.charAt(R);
					O = this.Ro(T);
					T = this.Ll[T];
					if (c + G + O * E + K < e) G += O * E + K;
					else {
						if (G + O * E > this.width + 1E-5) break;
						if (void 0 !== T) {
							var N = this.Jl * E,
								I = this.Mg * E;
							L = G;
							F = n;
							0 === k && (L = Math.round(L), F = Math.round(F));
							m.oc = L;
							m.pc = F;
							m.bd = L + N;
							m.cd = F;
							m.Rc = L;
							m.Sc = F + I;
							m.Tc = L + N;
							m.Uc = F + I;
							0 !== k && (L = m, F = Q, N = S, I = void 0, I = L.oc * F - L.pc * N, L.pc = L.pc * F + L.oc * N, L.oc = I, I = L.bd * F - L.cd * N, L.cd = L.cd * F + L.bd * N, L.bd = I, I = L.Rc * F - L.Sc * N, L.Sc = L.Sc * F + L.Rc * N, L.Rc = I, I = L.Tc * F - L.Uc * N, L.Uc = L.Uc * F + L.Tc * N, L.Tc = I);
							m.offset(c, b);
							a.mh(m.oc, m.pc, m.bd, m.cd, m.Tc, m.Uc, m.Rc, m.Sc, T)
						}
						G += O * E + K;
						if (0 === k && c + G > g) break
					}
				}
				n += w;
				if (n + w + x > this.height || b + n > h) break
			}
		}
	};
	f.L = new function() {};
	d.prototype.Uv = function(a) {
		ja(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
		a = a.toString();
		this.text !== a && (this.text = a, this.el = !0, this.c.Ta = !0)
	};
	h.j = function(a, b) {
		var c = parseInt(b, 10);
		this.Og[a] !== c && (this.Og[a] = c, this.el = !0, this.c.Ta = !0)
	};
	f.xa = new d;
	f.sb = new function() {}
})();

function td(a) {
	this.c = a
}(function() {
	function a(a) {
		l = a.x;
		n = a.y;
		k = a.z
	}
	function c(a, c, d, e) {
		var f;
		f = m.length ? m.pop() : new b;
		f.init(a, c, d, e);
		return f
	}
	function b() {
		this.$k = this.id = this.gi = this.fi = this.y = this.x = this.Cn = this.Bn = this.Ep = this.time = this.Fq = 0;
		this.fl = this.Ln = !1
	}
	function d() {}
	function f() {}
	var h = td.prototype;
	h.Va = function(a) {
		this.pb = a;
		this.c = a.c
	};
	h.Va.prototype.qa = function() {};
	h.Ja = function(a) {
		this.type = a;
		this.c = a.c;
		this.touches = [];
		this.Pp = !1
	};
	var e = h.Ja.prototype,
		g = {
			left: 0,
			top: 0
		};
	e.Zj = function(a) {
		var b, c;
		b = 0;
		for (c = this.touches.length; b < c; b++) if (this.touches[b].id === a) return b;
		return -1
	};
	var l = 0,
		n = 0,
		k = 0,
		m = [];
	b.prototype.init = function(a, b, c, d) {
		var e = qb();
		this.Fq = this.Ep = this.time = e;
		this.Bn = a;
		this.Cn = b;
		this.x = a;
		this.y = b;
		this.fi = a;
		this.gi = b;
		this.id = c;
		this.$k = d;
		this.fl = this.Ln = !1
	};
	b.prototype.update = function(a, b, c) {
		this.Ep = this.time;
		this.time = a;
		this.fi = this.x;
		this.gi = this.y;
		this.x = b;
		this.y = c;
		!this.fl && 15 <= eb(this.Bn, this.Cn, this.x, this.y) && (this.fl = !0)
	};
	b.prototype.fz = function(a, b) {
		!this.Ln && 500 <= qb() - this.Fq && !this.fl && 15 > eb(this.Bn, this.Cn, this.x, this.y) && (this.Ln = !0, a.If = this.$k, a.zj = this.id, a.Ri = b, a.c.trigger(td.prototype.L.wv, a), a.Qf = this.x, a.Rf = this.y, a.c.trigger(td.prototype.L.xv, a), a.Ri = 0)
	};
	var q = -1E3,
		p = -1E3,
		t = -1E4;
	b.prototype.bt = function(a, b) {
		if (!this.Ln) {
			var c = qb();
			333 >= c - this.Fq && !this.fl && 15 > eb(this.Bn, this.Cn, this.x, this.y) && (a.If = this.$k, a.zj = this.id, a.Ri = b, 666 >= c - t && 25 > eb(q, p, this.x, this.y) ? (a.c.trigger(td.prototype.L.sv, a), a.Qf = this.x, a.Rf = this.y, a.c.trigger(td.prototype.L.tv, a), p = q = -1E3, t = -1E4) : (a.c.trigger(td.prototype.L.Jv, a), a.Qf = this.x, a.Rf = this.y, a.c.trigger(td.prototype.L.Kv, a), q = this.x, p = this.y, t = c), a.Ri = 0)
		}
	};
	e.qa = function() {
		this.Vy = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
		this.Ri = this.zj = this.If = this.Rf = this.Qf = this.wr = this.ur = this.tr = this.kw = this.jw = this.iw = this.bn = this.an = this.$m = 0;
		this.oA = 0 !== this.ca[0];
		var b = 0 < this.c.sd ? document : this.c.canvas,
			c = document;
		this.c.Yc ? c = b = window.Canvas : this.c.He && (c = b = window);
		var d = this;
		window.navigator.pointerEnabled ? (b.addEventListener("pointerdown", function(a) {
			d.ot(a)
		}, !1), b.addEventListener("pointermove", function(a) {
			d.nt(a)
		}, !1), c.addEventListener("pointerup", function(a) {
			d.Ym(a, !1)
		}, !1), c.addEventListener("pointercancel", function(a) {
			d.Ym(a, !0)
		}, !1), this.c.canvas && (this.c.canvas.addEventListener("MSGestureHold", function(a) {
			a.preventDefault()
		}, !1), document.addEventListener("MSGestureHold", function(a) {
			a.preventDefault()
		}, !1), this.c.canvas.addEventListener("gesturehold", function(a) {
			a.preventDefault()
		}, !1), document.addEventListener("gesturehold", function(a) {
			a.preventDefault()
		}, !1))) : window.navigator.msPointerEnabled ? (b.addEventListener("MSPointerDown", function(a) {
			d.ot(a)
		}, !1), b.addEventListener("MSPointerMove", function(a) {
			d.nt(a)
		}, !1), c.addEventListener("MSPointerUp", function(a) {
			d.Ym(a, !1)
		}, !1), c.addEventListener("MSPointerCancel", function(a) {
			d.Ym(a, !0)
		}, !1), this.c.canvas && (this.c.canvas.addEventListener("MSGestureHold", function(a) {
			a.preventDefault()
		}, !1), document.addEventListener("MSGestureHold", function(a) {
			a.preventDefault()
		}, !1))) : (b.addEventListener("touchstart", function(a) {
			d.tt(a)
		}, !1), b.addEventListener("touchmove", function(a) {
			d.qt(a)
		}, !1), c.addEventListener("touchend", function(a) {
			d.cq(a, !1)
		}, !1), c.addEventListener("touchcancel", function(a) {
			d.cq(a, !0)
		}, !1));
		if (this.Vy) {
			var e = function(a) {
					a = a.reading;
					d.tr = a.accelerationX;
					d.ur = a.accelerationY;
					d.wr = a.accelerationZ
				},
				f = function(a) {
					a = a.reading;
					d.$m = a.yawDegrees;
					d.an = a.pitchDegrees;
					d.bn = a.rollDegrees
				},
				g = Windows.Devices.Sensors.Accelerometer.getDefault();
			g && (g.reportInterval = Math.max(g.minimumReportInterval, 16), g.addEventListener("readingchanged", e));
			var h = Windows.Devices.Sensors.Inclinometer.getDefault();
			h && (h.reportInterval = Math.max(h.minimumReportInterval, 16), h.addEventListener("readingchanged", f));
			document.addEventListener("visibilitychange", function() {
				document.hidden || document.msHidden ? (g && g.removeEventListener("readingchanged", e), h && h.removeEventListener("readingchanged", f)) : (g && g.addEventListener("readingchanged", e), h && h.addEventListener("readingchanged", f))
			}, !1)
		} else window.addEventListener("deviceorientation", function(a) {
			d.$m = a.alpha || 0;
			d.an = a.beta || 0;
			d.bn = a.gamma || 0
		}, !1), window.addEventListener("devicemotion", function(a) {
			a.accelerationIncludingGravity && (d.iw = a.accelerationIncludingGravity.x || 0, d.jw = a.accelerationIncludingGravity.y || 0, d.kw = a.accelerationIncludingGravity.z || 0);
			a.acceleration && (d.tr = a.acceleration.x || 0, d.ur = a.acceleration.y || 0, d.wr = a.acceleration.z || 0)
		}, !1);
		this.oA && !this.c.Cb && (jQuery(document).mousemove(function(a) {
			d.$p(a)
		}), jQuery(document).mousedown(function(a) {
			d.Zp(a)
		}), jQuery(document).mouseup(function(a) {
			d.aq(a)
		}));
		!this.c.bj && this.c.je && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(a, null, {
			frequency: 40
		});
		this.c.gA(this)
	};
	e.nt = function(a) {
		if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
			a.preventDefault && a.preventDefault();
			var b = this.Zj(a.pointerId),
				c = qb();
			if (0 <= b) {
				var d = this.c.Cb ? g : jQuery(this.c.canvas).offset(),
					b = this.touches[b];
				2 > c - b.time || b.update(c, a.pageX - d.left, a.pageY - d.top)
			}
		}
	};
	e.ot = function(a) {
		if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
			a.preventDefault && Tb(a) && a.preventDefault();
			var b = this.c.Cb ? g : jQuery(this.c.canvas).offset(),
				d = a.pageX - b.left,
				b = a.pageY - b.top;
			qb();
			this.If = this.touches.length;
			this.zj = a.pointerId;
			this.touches.push(c(d, b, a.pointerId, this.If));
			this.c.Yb = !0;
			this.c.trigger(td.prototype.L.lr, this);
			this.c.trigger(td.prototype.L.or, this);
			this.Qf = d;
			this.Rf = b;
			this.c.trigger(td.prototype.L.$n, this);
			this.c.Yb = !1
		}
	};
	e.Ym = function(a, b) {
		if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
			a.preventDefault && Tb(a) && a.preventDefault();
			var c = this.Zj(a.pointerId);
			this.If = 0 <= c ? this.touches[c].$k : -1;
			this.zj = 0 <= c ? this.touches[c].id : -1;
			this.c.Yb = !0;
			this.c.trigger(td.prototype.L.kr, this);
			this.c.trigger(td.prototype.L.nr, this);
			0 <= c && (b || this.touches[c].bt(this, c), 100 > m.length && m.push(this.touches[c]), this.touches.splice(c, 1));
			this.c.Yb = !1
		}
	};
	e.qt = function(a) {
		a.preventDefault && a.preventDefault();
		var b = qb(),
			c, d, e, f;
		c = 0;
		for (d = a.changedTouches.length; c < d; c++) if (e = a.changedTouches[c], f = this.Zj(e.identifier), 0 <= f) {
			var h = this.c.Cb ? g : jQuery(this.c.canvas).offset();
			f = this.touches[f];
			2 > b - f.time || f.update(b, e.pageX - h.left, e.pageY - h.top)
		}
	};
	e.tt = function(a) {
		a.preventDefault && Tb(a) && a.preventDefault();
		var b = this.c.Cb ? g : jQuery(this.c.canvas).offset();
		qb();
		this.c.Yb = !0;
		var d, e, f, h;
		d = 0;
		for (e = a.changedTouches.length; d < e; d++) if (f = a.changedTouches[d], h = this.Zj(f.identifier), -1 === h) {
			h = f.pageX - b.left;
			var k = f.pageY - b.top;
			this.If = this.touches.length;
			this.zj = f.identifier;
			this.touches.push(c(h, k, f.identifier, this.If));
			this.c.trigger(td.prototype.L.lr, this);
			this.c.trigger(td.prototype.L.or, this);
			this.Qf = h;
			this.Rf = k;
			this.c.trigger(td.prototype.L.$n, this)
		}
		this.c.Yb = !1
	};
	e.cq = function(a, b) {
		a.preventDefault && Tb(a) && a.preventDefault();
		this.c.Yb = !0;
		var c, d, e;
		c = 0;
		for (d = a.changedTouches.length; c < d; c++) e = a.changedTouches[c], e = this.Zj(e.identifier), 0 <= e && (this.If = this.touches[e].$k, this.zj = this.touches[e].id, this.c.trigger(td.prototype.L.kr, this), this.c.trigger(td.prototype.L.nr, this), b || this.touches[e].bt(this, e), 100 > m.length && m.push(this.touches[e]), this.touches.splice(e, 1));
		this.c.Yb = !1
	};
	e.j = function() {
		return this.c.je && 0 === this.$m && 0 !== k ? 90 * k : this.$m
	};
	e.k = function() {
		return this.c.je && 0 === this.an && 0 !== n ? 90 * n : this.an
	};
	e.u = function() {
		return this.c.je && 0 === this.bn && 0 !== l ? 90 * l : this.bn
	};
	e.Zp = function(a) {
		this.tt({
			changedTouches: [{
				pageX: a.pageX,
				pageY: a.pageY,
				identifier: 0
			}]
		});
		this.Pp = !0
	};
	e.$p = function(a) {
		this.Pp && this.qt({
			changedTouches: [{
				pageX: a.pageX,
				pageY: a.pageY,
				identifier: 0
			}]
		})
	};
	e.aq = function(a) {
		a.preventDefault && this.c.rm && !this.c.$h && a.preventDefault();
		this.c.rm = !0;
		this.cq({
			changedTouches: [{
				pageX: a.pageX,
				pageY: a.pageY,
				identifier: 0
			}]
		});
		this.Pp = !1
	};
	e.Gn = function() {
		var a, b, c, d = qb();
		a = 0;
		for (b = this.touches.length; a < b; ++a) c = this.touches[a], c.time <= d - 50 && (c.Ep = d), c.fz(this, a)
	};
	d.prototype.or = function() {
		return !0
	};
	d.prototype.nr = function() {
		return !0
	};
	d.prototype.$n = function(a) {
		return a ? this.c.cl(a, this.Qf, this.Rf) : !1
	};
	var u = [];
	d.prototype.dv = function(a) {
		if (!a) return !1;
		var b = a.Ma(),
			c = b.Vd(),
			d, e, f, g, h, k;
		f = 0;
		for (g = c.length; f < g; f++) {
			var l = c[f];
			l.Ua();
			h = 0;
			for (k = this.touches.length; h < k; h++) if (e = this.touches[h], d = l.V.Vb(e.x, e.y, !0), e = l.V.Vb(e.x, e.y, !1), l.gd(d, e)) {
				u.push(l);
				break
			}
		}
		return u.length ? (b.bb = !1, Ha(b.G, u), a.xe(), J(u), !0) : !1
	};
	d.prototype.lr = function(a) {
		a = Math.floor(a);
		return a === this.If
	};
	d.prototype.kr = function(a) {
		a = Math.floor(a);
		return a === this.If
	};
	d.prototype.wv = function() {
		return !0
	};
	d.prototype.Jv = function() {
		return !0
	};
	d.prototype.sv = function() {
		return !0
	};
	d.prototype.xv = function(a) {
		return a ? this.c.cl(a, this.Qf, this.Rf) : !1
	};
	d.prototype.Kv = function(a) {
		return a ? this.c.cl(a, this.Qf, this.Rf) : !1
	};
	d.prototype.tv = function(a) {
		return a ? this.c.cl(a, this.Qf, this.Rf) : !1
	};
	h.L = new d;
	f.prototype.fo = function(a, b) {
		var c = this.Ri;
		if (0 > c || c >= this.touches.length) a.na(0);
		else {
			var d, e, f, g, h;
			ia(b) ? (d = this.c.Zf(0), e = d.scale, f = d.pd, g = d.Ld, h = d.M, d.scale = 1, d.pd = 1, d.Ld = 1, d.M = 0, a.na(d.Vb(this.touches[c].x, this.touches[c].y, !0)), d.scale = e, d.pd = f, d.Ld = g, d.M = h) : (d = ja(b) ? this.c.Zf(b) : this.c.ck(b)) ? a.na(d.Vb(this.touches[c].x, this.touches[c].y, !0)) : a.na(0)
		}
	};
	f.prototype.ho = function(a, b) {
		var c = this.Ri;
		if (0 > c || c >= this.touches.length) a.na(0);
		else {
			var d, e, f, g, h;
			ia(b) ? (d = this.c.Zf(0), e = d.scale, f = d.pd, g = d.Md, h = d.M, d.scale = 1, d.pd = 1, d.Md = 1, d.M = 0, a.na(d.Vb(this.touches[c].x, this.touches[c].y, !1)), d.scale = e, d.pd = f, d.Md = g, d.M = h) : (d = ja(b) ? this.c.Zf(b) : this.c.ck(b)) ? a.na(d.Vb(this.touches[c].x, this.touches[c].y, !1)) : a.na(0)
		}
	};
	h.sb = new f
})();

function ud(a) {
	this.c = a
}(function() {
	function a() {}
	function c() {}
	function b() {}
	var d = ud.prototype;
	d.Va = function(a) {
		this.pb = a;
		this.c = a.c
	};
	d.Va.prototype.qa = function() {};
	d.Ja = function(a) {
		this.type = a;
		this.c = a.c
	};
	var f = d.Ja.prototype,
		h = "",
		e = "undefined" !== typeof window.is_scirra_arcade;
	e && (h = "arcade" + window.scirra_arcade_id);
	var g = !1;
	try {
		localStorage.getItem("test"), g = !0
	} catch (l) {
		g = !1
	}
	f.qa = function() {
		g || fa("[Construct 2] Webstorage plugin: local storage is not supported on this platform.")
	};
	a.prototype.jv = function(a) {
		return g ? null != localStorage.getItem(h + a) : !1
	};
	a.prototype.Fv = function() {
		return !0
	};
	d.L = new a;
	c.prototype.aw = function(a, b) {
		if (g) try {
			localStorage.setItem(h + a, b)
		} catch (c) {
			this.c.trigger(ud.prototype.L.Fv, this)
		}
	};
	d.xa = new c;
	b.prototype.kv = function(a, b) {
		g ? a.Oc(localStorage.getItem(h + b) || "") : a.Oc("")
	};
	b.prototype.Yq = function(a) {
		if (g) {
			var b = {},
				c, d, f;
			c = 0;
			for (d = localStorage.length; c < d; c++) f = localStorage.key(c), e ? f.substr(0, h.length) === h && (b[f.substr(h.length)] = localStorage.getItem(f)) : b[f] = localStorage.getItem(f);
			a.Oc(JSON.stringify({
				c2dictionary: !0,
				data: b
			}))
		} else a.Oc("")
	};
	d.sb = new b
})();

function vd(a) {
	this.c = a
}(function() {
	var a = vd.prototype;
	a.Va = function(a) {
		this.pb = a;
		this.c = a.c
	};
	a.Va.prototype.qa = function() {};
	a.Ja = function(a) {
		this.type = a;
		this.c = a.c
	};
	var c = a.Ja.prototype;
	c.qa = function() {
		this.iz = this.ca[0];
		this.returnValue = "";
		var a = document.createElement("script");
		a.setAttribute("type", "text/javascript");
		a.setAttribute("src", this.iz);
		"undefined" != typeof a && document.getElementsByTagName("head")[0].appendChild(a)
	};
	c.Uf = function() {};
	a.L = {};
	a.xa = {};
	a.xa.Vu = function(a) {
		this.returnValue = "";
		try {
			this.returnValue = eval(a)
		} catch (c) {
			this.returnValue = c
		}
	};
	a.sb = {};
	a.sb.bB = function(a) {
		a.Oc(this.returnValue)
	}
})();

function wd(a) {
	this.c = a
}(function() {
	function a() {}
	var c = wd.prototype;
	c.Va = function(a) {
		this.behavior = a;
		this.c = a.c
	};
	c.Va.prototype.qa = function() {};
	c.Ja = function(a, b) {
		this.type = a;
		this.behavior = a.behavior;
		this.F = b;
		this.c = a.c
	};
	var b = c.Ja.prototype;
	b.qa = function() {
		var a = this.ca[0];
		this.Kf = this.ca[1];
		this.bk = this.ca[2];
		this.sw = 0 !== this.ca[3];
		this.zq = 0 !== this.ca[4];
		this.Wc = Math.cos(this.F.M) * a;
		this.uc = Math.sin(this.F.M) * a;
		this.fi = this.F.x;
		this.gi = this.F.y;
		this.xf = this.F.M;
		this.Jn = 0;
		this.enabled = 0 !== this.ca[5]
	};
	b.Nc = function() {
		return {
			acc: this.Kf,
			g: this.bk,
			dx: this.Wc,
			dy: this.uc,
			lx: this.fi,
			ly: this.gi,
			lka: this.xf,
			t: this.Jn,
			e: this.enabled
		}
	};
	b.kd = function(a) {
		this.Kf = a.acc;
		this.bk = a.g;
		this.Wc = a.dx;
		this.uc = a.dy;
		this.fi = a.lx;
		this.gi = a.ly;
		this.xf = a.lka;
		this.Jn = a.t;
		this.enabled = a.e
	};
	b.Sb = function() {
		if (this.enabled) {
			var a = this.c.Wg(this.F),
				b, c;
			this.F.M !== this.xf && (this.zq && (b = eb(0, 0, this.Wc, this.uc), this.Wc = Math.cos(this.F.M) * b, this.uc = Math.sin(this.F.M) * b), this.xf = this.F.M);
			0 !== this.Kf && (b = eb(0, 0, this.Wc, this.uc), c = 0 === this.Wc && 0 === this.uc ? this.F.M : Ua(0, 0, this.Wc, this.uc), b += this.Kf * a, 0 > b && (b = 0), this.Wc = Math.cos(c) * b, this.uc = Math.sin(c) * b);
			0 !== this.bk && (this.uc += this.bk * a);
			this.fi = this.F.x;
			this.gi = this.F.y;
			if (0 !== this.Wc || 0 !== this.uc) if (this.F.x += this.Wc * a, this.F.y += this.uc * a, this.Jn += eb(0, 0, this.Wc * a, this.uc * a), this.zq && (this.F.M = Ua(0, 0, this.Wc, this.uc), this.F.ra(), this.xf = this.F.M), this.F.ra(), this.sw && (b = this.c.si(this.F))) this.c.St(this.F, b), b = eb(0, 0, this.Wc, this.uc), c = this.c.ww(this.F, this.fi, this.gi), this.Wc = Math.cos(c) * b, this.uc = Math.sin(c) * b, this.F.x += this.Wc * a, this.F.y += this.uc * a, this.F.ra(), this.zq && (this.xf = this.F.M = c, this.F.ra()), this.c.Dz(this.F, this.Wc / b, this.uc / b, Math.max(2.5 * b * a, 30)) || this.c.Ez(this.F)
		}
	};
	c.L = new function() {};
	a.prototype.rr = function(a) {
		this.bk = a
	};
	a.prototype.Ov = function(a) {
		a = Na(a);
		var b = eb(0, 0, this.Wc, this.uc);
		this.Wc = Math.cos(a) * b;
		this.uc = Math.sin(a) * b
	};
	c.xa = new a;
	c.sb = new function() {}
})();

function xd(a) {
	this.c = a
}(function() {
	function a() {}
	var c = xd.prototype;
	c.Va = function(a) {
		this.behavior = a;
		this.c = a.c
	};
	c.Va.prototype.qa = function() {};
	c.Ja = function(a, b) {
		this.type = a;
		this.behavior = a.behavior;
		this.F = b;
		this.c = a.c
	};
	var b = c.Ja.prototype;
	b.qa = function() {
		this.xr = 1 === this.ca[0];
		this.Wj = this.ca[1];
		this.nl = this.ca[2];
		this.am = this.ca[3];
		this.Iw = this.ca[4];
		this.Cc = this.xr ? 0 : 3;
		this.pe ? this.Oe.reset() : this.Oe = new yb;
		this.ni = this.F.opacity ? this.F.opacity : 1;
		this.xr && (0 === this.Wj ? (this.Cc = 1, 0 === this.nl && (this.Cc = 2)) : (this.F.opacity = 0, this.c.Ta = !0))
	};
	b.Nc = function() {
		return {
			fit: this.Wj,
			wt: this.nl,
			fot: this.am,
			s: this.Cc,
			st: this.Oe.Fa,
			mo: this.ni
		}
	};
	b.kd = function(a) {
		this.Wj = a.fit;
		this.nl = a.wt;
		this.am = a.fot;
		this.Cc = a.s;
		this.Oe.reset();
		this.Oe.Fa = a.st;
		this.ni = a.mo
	};
	b.Sb = function() {
		this.Oe.add(this.c.Wg(this.F));
		0 === this.Cc && (this.F.opacity = this.Oe.Fa / this.Wj * this.ni, this.c.Ta = !0, this.F.opacity >= this.ni && (this.F.opacity = this.ni, this.Cc = 1, this.Oe.reset(), this.c.trigger(xd.prototype.L.uv, this.F)));
		1 === this.Cc && this.Oe.Fa >= this.nl && (this.Cc = 2, this.Oe.reset(), this.c.trigger(xd.prototype.L.Lv, this.F));
		2 === this.Cc && 0 !== this.am && (this.F.opacity = this.ni - this.Oe.Fa / this.am * this.ni, this.c.Ta = !0, 0 > this.F.opacity && (this.F.opacity = 0, this.Cc = 3, this.Oe.reset(), this.c.trigger(xd.prototype.L.dr, this.F), 1 === this.Iw && this.c.Eg(this.F)))
	};
	b.j = function() {
		this.Cc = 0;
		this.Oe.reset();
		0 === this.Wj ? (this.Cc = 1, 0 === this.nl && (this.Cc = 2)) : (this.F.opacity = 0, this.c.Ta = !0)
	};
	a.prototype.dr = function() {
		return !0
	};
	a.prototype.uv = function() {
		return !0
	};
	a.prototype.Lv = function() {
		return !0
	};
	c.L = new a;
	c.xa = new function() {};
	c.sb = new function() {}
})();

function yd(a) {
	this.c = a
}(function() {
	function a() {}
	function c() {}
	var b = yd.prototype;
	b.Va = function(a) {
		this.behavior = a;
		this.c = a.c
	};
	b.Va.prototype.qa = function() {};
	b.Ja = function(a, b) {
		this.type = a;
		this.behavior = a.behavior;
		this.F = b;
		this.c = a.c
	};
	var d = b.Ja.prototype;
	d.qa = function() {
		this.uh = this.Ff = this.Cc = this.Xm = this.Zm = 0
	};
	d.Nc = function() {
		return {
			ontime: this.Zm,
			offtime: this.Xm,
			stage: this.Cc,
			stagetimeleft: this.Ff,
			timeleft: this.uh
		}
	};
	d.kd = function(a) {
		this.Zm = a.ontime;
		this.Xm = a.offtime;
		this.Cc = a.stage;
		this.Ff = a.stagetimeleft;
		this.uh = a.timeleft
	};
	d.Sb = function() {
		if (!(0 >= this.uh)) {
			var a = this.c.Wg(this.F);
			this.uh -= a;
			0 >= this.uh ? (this.uh = 0, this.F.visible = !0, this.c.Ta = !0, this.c.trigger(yd.prototype.L.vv, this.F)) : (this.Ff -= a, 0 >= this.Ff && (0 === this.Cc ? (this.F.visible = !1, this.Cc = 1, this.Ff += this.Xm) : (this.F.visible = !0, this.Cc = 0, this.Ff += this.Zm), this.c.Ta = !0))
		}
	};
	a.prototype.vv = function() {
		return !0
	};
	b.L = new a;
	c.prototype.Wu = function(a, b, c) {
		this.Zm = a;
		this.Xm = b;
		this.Cc = 1;
		this.Ff = b;
		this.uh = c;
		this.F.visible = !1;
		this.c.Ta = !0
	};
	b.xa = new c;
	b.sb = new function() {}
})();

function zd(a, c) {
	for (var b in c.prototype) c.prototype.hasOwnProperty(b) && (a.prototype[b] = c.prototype[b])
}
var Ad = 2 / 180 * Math.PI,
	Bd = 8 / 180 * Math.PI,
	Fd = .5 * Math.PI,
	Gd = Fd * Fd,
	Hd = 2 / 180 * Math.PI,
	Id = Number.MIN_VALUE * Number.MIN_VALUE;

function Jd(a, c) {
	return a.x * c.x + a.y * c.y
}
function Kd(a, c) {
	return a.x * c.y - a.y * c.x
}
function Ld(a) {
	return Z(1 * a.y, -1 * a.x)
}
function Md(a, c) {
	return Z(a.n.x * c.x + a.q.x * c.y, a.n.y * c.x + a.q.y * c.y)
}
function Nd(a, c) {
	return Z(Jd(c, a.n), Jd(c, a.q))
}

function Od(a, c) {
	var b = Md(a.B, c);
	b.x += a.position.x;
	b.y += a.position.y;
	return b
}
function Pd(a, c) {
	var b = Qd(c, a.position),
		d = b.x * a.B.n.x + b.y * a.B.n.y;
	b.y = b.x * a.B.q.x + b.y * a.B.q.y;
	b.x = d;
	return b
}
function Qd(a, c) {
	return Z(a.x - c.x, a.y - c.y)
}
function Rd(a, c, b) {
	return a < c ? c : a > b ? b : a
}
function Sd() {
	this.n = Z(0, 0);
	this.q = Z(0, 0);
	this.n.Set(1, 0);
	this.q.Set(0, 1)
}
function Td(a) {
	var c = new Sd;
	c.Set(a);
	return c
}
Sd.prototype.Set = function(a) {
	var c = Math.cos(a);
	a = Math.sin(a);
	this.n.Set(c, a);
	this.q.Set(-a, c)
};
Sd.prototype.qc = function() {
	var a = new Sd;
	Ud(a, this);
	return a
};

function Ud(a, c) {
	a.n.P(c.n);
	a.q.P(c.q)
}
Sd.prototype.ta = function() {
	this.n.Set(0, 0);
	this.q.Set(0, 0)
};
Sd.prototype.yh = function() {
	return Math.atan2(this.n.y, this.n.x)
};

function Vd(a, c) {
	var b = a.n.x * a.q.y - a.q.x * a.n.y;
	0 !== b && (b = 1 / b);
	c.n.x = b * a.q.y;
	c.q.x = -b * a.q.x;
	c.n.y = -b * a.n.y;
	c.q.y = b * a.n.x
}
function Wd(a, c, b, d) {
	var f = a.n.x * a.q.y - a.q.x * a.n.y;
	0 !== f && (f = 1 / f);
	c.x = f * (a.q.y * b - a.q.x * d);
	c.y = f * (a.n.x * d - a.n.y * b);
	return c
}

function Xd(a, c, b) {
	this.n = new Yd(0, 0, 0);
	this.q = new Yd(0, 0, 0);
	this.j = new Yd(0, 0, 0);
	a && this.n.P(a);
	c && this.q.P(c);
	b && this.j.P(b)
}
Xd.prototype.qc = function() {
	return new Xd(this.n, this.q, this.j)
};
Xd.prototype.ta = function() {
	this.n.Set(0, 0, 0);
	this.q.Set(0, 0, 0);
	this.j.Set(0, 0, 0)
};

function oe(a, c, b, d) {
	var f = a.n.x,
		h = a.q.x,
		e = a.n.y;
	a = a.q.y;
	var g = f * a - h * e;
	0 != g && (g = 1 / g);
	c.x = g * (a * b - h * d);
	c.y = g * (f * d - e * b);
	return c
}

function pe(a, c, b, d, f) {
	var h = a.n.x,
		e = a.n.y,
		g = a.n.z,
		l = a.q.x,
		n = a.q.y,
		k = a.q.z,
		m = a.j.x,
		q = a.j.y;
	a = a.j.z;
	var p = h * (n * a - k * q) + e * (k * m - l * a) + g * (l * q - n * m);
	0 != p && (p = 1 / p);
	c.x = p * (b * (n * a - k * q) + d * (k * m - l * a) + f * (l * q - n * m));
	c.y = p * (h * (d * a - f * q) + e * (f * m - b * a) + g * (b * q - d * m));
	c.z = p * (h * (n * f - k * d) + e * (k * b - l * f) + g * (l * d - n * b));
	return c
}
function qe() {
	this.S = Z(0, 0);
	this.Ec = Z(0, 0);
	this.D = Z(0, 0)
}
qe.prototype.Set = function(a) {
	this.S.P(a.S);
	this.Ec.P(a.Ec);
	this.D.P(a.D);
	this.ve = a.ve;
	this.R = a.R;
	this.od = a.od
};
qe.prototype.qc = function() {
	var a = new qe;
	a.S.P(this.S);
	a.Ec.P(this.Ec);
	a.D.P(this.D);
	a.ve = this.ve;
	a.R = this.R;
	a.od = this.od;
	return a
};
qe.prototype.Rd = function(a, c) {
	void 0 === c && (c = 0);
	a.position.x = (1 - c) * this.Ec.x + c * this.D.x;
	a.position.y = (1 - c) * this.Ec.y + c * this.D.y;
	a.B.Set((1 - c) * this.ve + c * this.R);
	var b = a.B;
	a.position.x -= b.n.x * this.S.x + b.q.x * this.S.y;
	a.position.y -= b.n.y * this.S.x + b.q.y * this.S.y
};
qe.prototype.Dg = function(a) {
	void 0 === a && (a = 0);
	if (this.od < a && 1 - this.od > Number.MIN_VALUE) {
		var c = (a - this.od) / (1 - this.od);
		this.Ec.x = (1 - c) * this.Ec.x + c * this.D.x;
		this.Ec.y = (1 - c) * this.Ec.y + c * this.D.y;
		this.ve = (1 - c) * this.ve + c * this.R;
		this.od = a
	}
};

function re(a, c) {
	this.position = Z(0, 0);
	this.B = new Sd;
	a && this.position.P(a);
	c && Ud(this.B, c)
}
re.prototype.Set = function(a) {
	this.position.P(a.position);
	Ud(this.B, a.B)
};
re.prototype.yh = function() {
	return Math.atan2(this.B.n.y, this.B.n.x)
};

function se(a, c) {
	this.x = a;
	this.y = c
}
var te = [];

function Z(a, c) {
	if (0 < te.length) {
		var b = te.pop();
		b.Set(a, c);
		return b
	}
	return new se(a, c)
}
function ue(a) {
	te.push(a)
}
y = se.prototype;
y.ta = function() {
	this.y = this.x = 0
};
y.Set = function(a, c) {
	this.x = a;
	this.y = c
};
y.P = function(a) {
	this.x = a.x;
	this.y = a.y
};
y.Fg = function() {
	return Z(-this.x, -this.y)
};
y.qc = function() {
	return Z(this.x, this.y)
};
y.lf = function(a) {
	this.x += a.x;
	this.y += a.y
};
y.sr = function(a) {
	this.x -= a.x;
	this.y -= a.y
};
y.ee = function(a) {
	this.x *= a;
	this.y *= a
};

function ve(a) {
	return Math.sqrt(we(a))
}
function we(a) {
	return a.x * a.x + a.y * a.y
}
function xe(a) {
	var c = ve(a);
	c < Number.MIN_VALUE || (c = 1 / c, a.x *= c, a.y *= c)
}
function Yd(a, c, b) {
	this.x = a;
	this.y = c;
	this.z = b
}
y = Yd.prototype;
y.ta = function() {
	this.z = this.y = this.x = 0
};
y.Set = function(a, c, b) {
	this.x = a;
	this.y = c;
	this.z = b
};
y.P = function(a) {
	this.x = a.x;
	this.y = a.y;
	this.z = a.z
};
y.Fg = function() {
	return new Yd(-this.x, -this.y, -this.z)
};
y.qc = function() {
	return new Yd(this.x, this.y, this.z)
};
y.lf = function(a) {
	this.x += a.x;
	this.y += a.y;
	this.z += a.z
};
y.sr = function(a) {
	this.x -= a.x;
	this.y -= a.y;
	this.z -= a.z
};
y.ee = function(a) {
	this.x *= a;
	this.y *= a;
	this.z *= a
};

function ye() {
	this.$a = .005
}
y = ye.prototype;
y.Ah = function() {};
y.qc = function() {};
y.Set = function(a) {
	this.$a = a.$a
};
y.xi = function() {};
y.Ej = function() {};
y.pl = function() {};
y.bo = function() {};

function ze(a) {
	this.$a = .005;
	this.$a = a;
	this.j = a * a;
	this.lb = Z(0, 0)
}
zd(ze, ye);
y = ze.prototype;
y.Ah = function() {
	return "b2CircleShape"
};
y.qc = function() {
	var a = new ze(this.$a);
	a.Set(this);
	return a
};
y.Set = function(a) {
	ye.prototype.Set.call(this, a);
	a instanceof ze && this.lb.P(a.lb)
};
y.xi = function(a, c) {
	var b = c.B,
		d = c.position.x + (b.n.x * this.lb.x + b.q.x * this.lb.y),
		b = c.position.y + (b.n.y * this.lb.x + b.q.y * this.lb.y);
	a.j.Set(d - this.$a, b - this.$a);
	a.k.Set(d + this.$a, b + this.$a)
};
y.Ej = function(a, c) {
	a.j = c * Math.PI * this.j;
	a.k.P(this.lb);
	a.u = a.j * (.5 * this.j + (this.lb.x * this.lb.x + this.lb.y * this.lb.y))
};
y.pl = function(a, c, b, d) {
	b = Od(b, this.lb);
	var f = -(Jd(a, b) - c);
	if (f < -this.$a + Number.MIN_VALUE) return 0;
	if (f > this.$a) return d.P(b), Math.PI * this.j;
	c = f * f;
	f = this.j * (Math.asin(f / this.$a) + Math.PI / 2) + f * Math.sqrt(this.j - c);
	c = -2 / 3 * Math.pow(this.j - c, 1.5) / f;
	d.x = b.x + a.x * c;
	d.y = b.y + a.y * c;
	return f
};
y.bo = function(a) {
	a.T = [this.lb];
	a.j = 1;
	a.$a = this.$a
};

function Ae(a, c) {
	this.$a = .005;
	this.j = a;
	this.k = c;
	this.u = Z(this.k.x - this.j.x, this.k.y - this.j.y);
	xe(this.u);
	this.C = Z(this.u.y, -this.u.x);
	Z(-.04 * (this.C.x - this.u.x) + this.j.x, -.04 * (this.C.y - this.u.y) + this.j.y);
	Z(-.04 * (this.C.x + this.u.x) + this.k.x, -.04 * (this.C.y + this.u.y) + this.k.y);
	Z(-this.C.x, -this.C.y)
}
zd(Ae, ye);
Ae.prototype.Ah = function() {
	return "b2EdgeShape"
};
Ae.prototype.xi = function(a, c) {
	var b = c.B,
		d = c.position.x + (b.n.x * this.j.x + b.q.x * this.j.y),
		f = c.position.y + (b.n.y * this.j.x + b.q.y * this.j.y),
		h = c.position.x + (b.n.x * this.k.x + b.q.x * this.k.y),
		b = c.position.y + (b.n.y * this.k.x + b.q.y * this.k.y);
	d < h ? (a.j.x = d, a.k.x = h) : (a.j.x = h, a.k.x = d);
	f < b ? (a.j.y = f, a.k.y = b) : (a.j.y = b, a.k.y = f)
};
Ae.prototype.Ej = function(a) {
	a.j = 0;
	a.k.P(this.j);
	a.u = 0
};
Ae.prototype.pl = function(a, c, b, d) {
	void 0 === c && (c = 0);
	var f = Z(a.x * c, a.y * c),
		h = Od(b, this.j);
	b = Od(b, this.k);
	var e = Jd(a, h) - c;
	a = Jd(a, b) - c;
	if (0 < e) {
		if (0 < a) return 0;
		h.x = -a / (e - a) * h.x + e / (e - a) * b.x;
		h.y = -a / (e - a) * h.y + e / (e - a) * b.y
	} else 0 < a && (b.x = -a / (e - a) * h.x + e / (e - a) * b.x, b.y = -a / (e - a) * h.y + e / (e - a) * b.y);
	d.x = (f.x + h.x + b.x) / 3;
	d.y = (f.y + h.y + b.y) / 3;
	return .5 * ((h.x - f.x) * (b.y - f.y) - (h.y - f.y) * (b.x - f.x))
};

function Be() {
	this.j = 0;
	this.k = Z(0, 0);
	this.u = 0
}
function Ce() {
	this.$a = .005;
	this.j = Z(0, 0);
	this.T = [];
	this.ob = []
}
zd(Ce, ye);
y = Ce.prototype;
y.Ah = function() {
	return "b2PolygonShape"
};
y.qc = function() {
	var a = new Ce;
	a.Set(this);
	return a
};
y.Set = function(a) {
	ye.prototype.Set.call(this, a);
	if (a instanceof Ce) {
		this.j.P(a.j);
		this.hb = a.hb;
		De(this, this.hb);
		for (var c = 0; c < this.hb; c++) this.T[c].P(a.T[c]), this.ob[c].P(a.ob[c])
	}
};

function Ee(a, c) {
	var b = c.length;
	a.hb = b;
	De(a, b);
	for (b = b = 0; b < a.hb; b++) a.T[b].P(c[b]);
	for (b = 0; b < a.hb; ++b) {
		var d = Qd(a.T[b + 1 < a.hb ? b + 1 : 0], a.T[b]);
		a.ob[b].P(Ld(d));
		xe(a.ob[b])
	}
	for (var b = a.T, d = a.hb, f = Z(0, 0), h = 0, e = 1 / 3, g = 0; g < d; ++g) {
		var l = b[g],
			n = g + 1 < d ? b[g + 1] : b[0],
			k = .5 * ((l.x - 0) * (n.y - 0) - (l.y - 0) * (n.x - 0)),
			h = h + k;
		f.x += k * e * (0 + l.x + n.x);
		f.y += k * e * (0 + l.y + n.y)
	}
	f.x *= 1 / h;
	f.y *= 1 / h;
	a.j = f
}

function Fe(a, c, b) {
	a.hb = 4;
	De(a, 4);
	a.T[0].Set(-c, -b);
	a.T[1].Set(c, -b);
	a.T[2].Set(c, b);
	a.T[3].Set(-c, b);
	a.ob[0].Set(0, -1);
	a.ob[1].Set(1, 0);
	a.ob[2].Set(0, 1);
	a.ob[3].Set(-1, 0);
	a.j.ta()
}
y.xi = function(a, c) {
	for (var b = c.B, d = this.T[0], f = c.position.x + (b.n.x * d.x + b.q.x * d.y), h = c.position.y + (b.n.y * d.x + b.q.y * d.y), e = f, g = h, l = 1; l < this.hb; ++l) var d = this.T[l],
		n = c.position.x + (b.n.x * d.x + b.q.x * d.y),
		d = c.position.y + (b.n.y * d.x + b.q.y * d.y),
		f = f < n ? f : n,
		h = h < d ? h : d,
		e = e > n ? e : n,
		g = g > d ? g : d;
	a.j.x = f - this.$a;
	a.j.y = h - this.$a;
	a.k.x = e + this.$a;
	a.k.y = g + this.$a
};
y.Ej = function(a, c) {
	if (2 == this.hb) a.k.x = .5 * (this.T[0].x + this.T[1].x), a.k.y = .5 * (this.T[0].y + this.T[1].y), a.j = 0, a.u = 0;
	else {
		for (var b = 0, d = 0, f = 0, h = 0, e = 1 / 3, g = 0; g < this.hb; ++g) var l = this.T[g],
			n = g + 1 < this.hb ? this.T[g + 1] : this.T[0],
			k = l.x - 0,
			m = l.y - 0,
			q = n.x - 0,
			p = n.y - 0,
			t = k * p - m * q,
			u = .5 * t,
			f = f + u,
			b = b + u * e * (0 + l.x + n.x),
			d = d + u * e * (0 + l.y + n.y),
			l = k,
			h = h + t * (e * (.25 * (l * l + q * l + q * q) + (0 * l + 0 * q)) + 0 + (e * (.25 * (m * m + p * m + p * p) + (0 * m + 0 * p)) + 0));
		a.j = c * f;
		a.k.Set(1 / f * b, 1 / f * d);
		a.u = c * h
	}
};
y.pl = function(a, c, b, d) {
	var f = Nd(b.B, a),
		h = c - Jd(a, b.position),
		e = [],
		g = 0,
		l = -1;
	c = -1;
	var n = !1;
	for (a = a = 0; a < this.hb; ++a) {
		e[a] = Jd(f, this.T[a]) - h;
		var k = e[a] < -Number.MIN_VALUE;
		0 < a && (k ? n || (l = a - 1, g++) : n && (c = a - 1, g++));
		n = k
	}
	switch (g) {
	case 0:
		return n ? (a = new Be, this.Ej(a, 1), d.P(Od(b, a.k)), a.j) : 0;
	case 1:
		-1 == l ? l = this.hb - 1 : c = this.hb - 1
	}
	a = (l + 1) % this.hb;
	f = (c + 1) % this.hb;
	h = (0 - e[l]) / (e[a] - e[l]);
	e = (0 - e[c]) / (e[f] - e[c]);
	l = Z(this.T[l].x * (1 - h) + this.T[a].x * h, this.T[l].y * (1 - h) + this.T[a].y * h);
	c = Z(this.T[c].x * (1 - e) + this.T[f].x * e, this.T[c].y * (1 - e) + this.T[f].y * e);
	e = 0;
	h = Z(0, 0);
	for (g = this.T[a]; a != f;) a = (a + 1) % this.hb, n = a == f ? c : this.T[a], k = .5 * ((g.x - l.x) * (n.y - l.y) - (g.y - l.y) * (n.x - l.x)), e += k, h.x += k * (l.x + g.x + n.x) / 3, h.y += k * (l.y + g.y + n.y) / 3, g = n;
	h.ee(1 / e);
	d.P(Od(b, h));
	return e
};
y.bo = function(a) {
	a.T = this.T;
	a.j = this.hb;
	a.$a = this.$a
};
y.ql = function(a) {
	for (var c = 0, b = this.T[0].x * a.x + this.T[0].y * a.y, d = 1; d < this.hb; ++d) {
		var f = this.T[d].x * a.x + this.T[d].y * a.y;
		f > b && (c = d, b = f)
	}
	return c
};
y.Hj = function(a) {
	for (var c = 0, b = this.T[0].x * a.x + this.T[0].y * a.y, d = 1; d < this.hb; ++d) {
		var f = this.T[d].x * a.x + this.T[d].y * a.y;
		f > b && (c = d, b = f)
	}
	return this.T[c]
};

function De(a, c) {
	a.T = [];
	a.ob = [];
	for (var b = a.T.length; b < c; b++) a.T[b] = Z(0, 0), a.ob[b] = Z(0, 0)
}
new Sd;

function Ge() {
	this.k = this.j = this.u = this.Ub = 0
}
function He(a, c) {
	a.Ub = c;
	a.u = a.Ub & 255;
	a.j = (a.Ub & 65280) >> 8 & 255;
	a.k = (a.Ub & 16711680) >> 16 & 255;
	a.C = (a.Ub & 4278190080) >> 24 & 255
}
Ge.prototype.Set = function(a) {
	He(this, a.Ub)
};
Ge.prototype.qc = function() {
	var a = new Ge;
	a.Set(this);
	return a
};

function Ie() {
	this.ue = Z(0, 0);
	this.id = new Ge
}
Ie.prototype.Set = function(a) {
	this.ue.P(a.ue);
	this.id.Set(a.id)
};

function Je() {
	this.j = Z(0, 0);
	this.k = Z(0, 0)
}
var Ke = [];

function Oe() {
	if (0 < Ke.length) {
		var a = Ke.pop();
		a.ta();
		return a
	}
	return new Je
}
Je.prototype.ta = function() {
	this.j.Set(0, 0);
	this.k.Set(0, 0)
};

function Pe(a, c) {
	var b;
	return b = (b = (b = (b = a.j.x <= c.j.x) && a.j.y <= c.j.y) && c.k.x <= a.k.x) && c.k.y <= a.k.y
}
Je.prototype.Jj = function(a) {
	return 0 < a.j.x - this.k.x || 0 < a.j.y - this.k.y || 0 < this.j.x - a.k.x || 0 < this.j.y - a.k.y ? !1 : !0
};

function Qe(a, c, b) {
	a.j.x = Math.min(c.j.x, b.j.x);
	a.j.y = Math.min(c.j.y, b.j.y);
	a.k.x = Math.max(c.k.x, b.k.x);
	a.k.y = Math.max(c.k.y, b.k.y)
}
function Re(a, c, b, d) {
	var f = 0,
		h = c[0].ue,
		e = c[1].ue,
		g = b.x * h.x + b.y * h.y - d;
	b = b.x * e.x + b.y * e.y - d;
	0 >= g && a[f++].Set(c[0]);
	0 >= b && a[f++].Set(c[1]);
	0 > g * b && (b = g / (g - b), d = a[f].ue, d.x = h.x + b * (e.x - h.x), d.y = h.y + b * (e.y - h.y), a[f].id = 0 < g ? c[0].id : c[1].id, f++);
	return f
}

function Se(a, c, b, d, f) {
	for (var h = c.B.n.x * a.ob[b].x + c.B.q.x * a.ob[b].y, e = c.B.n.y * a.ob[b].x + c.B.q.y * a.ob[b].y, g = f.B.n.x * h + f.B.n.y * e, l = f.B.q.x * h + f.B.q.y * e, n = 0, k = Number.MAX_VALUE, m = 0; m < d.hb; m++) {
		var q = d.T[m].x * g + d.T[m].y * l;
		q < k && (k = q, n = m)
	}
	return (f.position.x + (f.B.n.x * d.T[n].x + f.B.q.x * d.T[n].y) - (c.position.x + (c.B.n.x * a.T[b].x + c.B.q.x * a.T[b].y))) * h + (f.position.y + (f.B.n.y * d.T[n].x + f.B.q.y * d.T[n].y) - (c.position.y + (c.B.n.y * a.T[b].x + c.B.q.y * a.T[b].y))) * e
}

function Te(a, c, b, d) {
	for (var f = d.position.x + (d.B.n.x * b.j.x + d.B.q.x * b.j.y), h = d.position.y + (d.B.n.y * b.j.x + d.B.q.y * b.j.y), f = f - (c.position.x + (c.B.n.x * a.j.x + c.B.q.x * a.j.y)), h = h - (c.position.y + (c.B.n.y * a.j.x + c.B.q.y * a.j.y)), e = f * c.B.n.x + h * c.B.n.y, h = f * c.B.q.x + h * c.B.q.y, f = 0, g = -Number.MAX_VALUE, l = 0; l < a.hb; ++l) {
		var n = a.ob[l].x * e + a.ob[l].y * h;
		n > g && (g = n, f = l)
	}
	e = Se(a, c, f, b, d);
	h = f - 1;
	0 > h && (h = a.hb - 1);
	g = Se(a, c, h, b, d);
	l = f + 1;
	l >= a.hb && (l = 0);
	var n = Se(a, c, l, b, d),
		k = 0,
		m = 0;
	if (g > e && g > n) for (k = h, m = g;;) if (f = k - 1, 0 > f && (f = a.hb - 1), e = Se(a, c, f, b, d), e > m) k = f, m = e;
	else break;
	else if (n > e) for (k = l, m = n;;) if (f = k + 1, f >= a.hb && (f = 0), e = Se(a, c, f, b, d), e > m) k = f, m = e;
	else break;
	else k = f, m = e;
	return {
		Gr: k,
		vn: m
	}
}

function Ue(a, c, b) {
	var d = new Ve,
		f = b.lg,
		h = b.j,
		e = b.mg,
		g = b.k,
		l, n;
	d.j = c.count;
	for (var k = d.T, m = 0; m < d.j; m++) {
		var q = k[m];
		q.Wb = c.Wb[m];
		q.Xb = c.Xb[m];
		l = We(f, q.Wb);
		n = We(e, q.Xb);
		q.dd = Od(h, l);
		q.Se = Od(g, n);
		q.fc = Qd(q.Se, q.dd);
		q.R = 0
	}
	1 < d.j && (l = c.j, n = Xe(d), n < .5 * l || 2 * l < n || n < Number.MIN_VALUE) && (d.j = 0);
	0 == d.j && (q = k[0], q.Wb = 0, q.Xb = 0, l = We(f, 0), n = We(e, 0), q.dd = Od(h, l), q.Se = Od(g, n), q.fc = Qd(q.Se, q.dd), d.j = 1);
	for (f = 0; 20 > f;) {
		h = [];
		for (e = 0; e < d.j; e++) h[e] = {}, h[e].Wb = d.T[e].Wb, h[e].Xb = d.T[e].Xb;
		if (2 == d.j) e = d, g = e.k.fc, k = e.u.fc, l = Qd(k, g), g = -(g.x * l.x + g.y * l.y), 0 >= g ? (e.k.R = 1, e.j = 1) : (k = k.x * l.x + k.y * l.y, 0 >= k ? (e.u.R = 1, e.j = 1, e.k.Set(e.u)) : (l = 1 / (k + g), e.k.R = k * l, e.u.R = g * l, e.j = 2));
		else if (3 == d.j) {
			var e = d,
				p = e.k.fc,
				t = e.u.fc,
				u = e.C.fc,
				v = Qd(t, p),
				g = Jd(t, v),
				k = -Jd(p, v),
				r = Qd(u, p);
			l = Jd(u, r);
			n = -Jd(p, r);
			q = Qd(u, t);
			m = Jd(u, q);
			q = -Jd(t, q);
			r = Kd(v, r);
			v = r * Kd(t, u);
			u = r * Kd(u, p);
			p = r * Kd(p, t);
			0 >= k && 0 >= n ? (e.k.R = 1, e.j = 1) : 0 < g && 0 < k && 0 >= p ? (l = 1 / (g + k), e.k.R = g * l, e.u.R = k * l, e.j = 2) : 0 < l && 0 < n && 0 >= u ? (g = 1 / (l + n), e.k.R = l * g, e.C.R = n * g, e.j = 2, e.u.Set(e.C)) : 0 >= g && 0 >= q ? (e.u.R = 1, e.j = 1, e.k.Set(e.u)) : 0 >= l && 0 >= m ? (e.C.R = 1, e.j = 1, e.k.Set(e.C)) : 0 < m && 0 < q && 0 >= v ? (g = 1 / (m + q), e.u.R = m * g, e.C.R = q * g, e.j = 2, e.k.Set(e.C)) : (g = 1 / (v + u + p), e.k.R = v * g, e.u.R = u * g, e.C.R = p * g, e.j = 3)
		}
		if (3 == d.j) break;
		e = d;
		1 == e.j ? e = e.k.fc.Fg() : 2 == e.j ? (g = Qd(e.u.fc, e.k.fc), e = 0 < Kd(g, e.k.fc.Fg()) ? Z(-1 * g.y, 1 * g.x) : Ld(g)) : e = Z(0, 0);
		if (we(e) < Id) break;
		g = e.Fg();
		d.T[d.j].Wb = b.lg.ql(Nd(b.j.B, g));
		d.T[d.j].dd = Od(b.j, We(b.lg, d.T[d.j].Wb));
		d.T[d.j].Xb = b.mg.ql(Nd(b.k.B, e));
		d.T[d.j].Se = Od(b.k, We(b.mg, d.T[d.j].Xb));
		d.T[d.j].fc = Qd(d.T[d.j].Se, d.T[d.j].dd);
		ue(e);
		ue(g);
		f++;
		g = !1;
		for (e = 0; e < h.length; e++) if (d.T[d.j].Wb == h[e].Wb && d.T[d.j].Xb == h[e].Xb) {
			g = !0;
			break
		}
		if (g) break;
		d.j++
	}
	f = a.j;
	h = a.k;
	1 == d.j ? (f.P(d.k.dd), h.P(d.k.Se)) : 2 == d.j ? (f.x = d.k.R * d.k.dd.x + d.u.R * d.u.dd.x, f.y = d.k.R * d.k.dd.y + d.u.R * d.u.dd.y, h.x = d.k.R * d.k.Se.x + d.u.R * d.u.Se.x, h.y = d.k.R * d.k.Se.y + d.u.R * d.u.Se.y) : 3 == d.j && (h.x = f.x = d.k.R * d.k.dd.x + d.u.R * d.u.dd.x + d.C.R * d.C.dd.x, h.y = f.y = d.k.R * d.k.dd.y + d.u.R * d.u.dd.y + d.C.R * d.C.dd.y);
	a.u = ve(Qd(a.j, a.k));
	c.j = Xe(d);
	c.count = d.j;
	f = d.T;
	for (h = 0; h < d.j; h++) c.Wb[h] = f[h].Wb, c.Xb[h] = f[h].Xb;
	b.u && (c = b.lg.$a, b = b.mg.$a, a.u > c + b && a.u > Number.MIN_VALUE ? (a.u -= c + b, d = Qd(a.k, a.j), xe(d), a.j.x += c * d.x, a.j.y += c * d.y, a.k.x -= b * d.x, a.k.y -= b * d.y, ue(d)) : (b = Z(0, 0), b.x = .5 * (a.j.x + a.k.x), b.y = .5 * (a.j.y + a.k.y), a.j.x = a.k.x = b.x, a.j.y = a.k.y = b.y, a.u = 0, ue(b)))
}
function Ye() {}
function Ze() {
	this.j = Z(0, 0);
	this.k = Z(0, 0);
	this.u = 0
}
function $e() {}
$e.prototype.Set = function(a) {
	a.bo(this)
};
$e.prototype.ql = function(a) {
	for (var c = 0, b = this.T[0].x * a.x + this.T[0].y * a.y, d = 1; d < this.j; d++) {
		var f = this.T[d].x * a.x + this.T[d].y * a.y;
		f > b && (c = d, b = f)
	}
	return c
};
$e.prototype.Hj = function(a) {
	return this.T[this.ql(a)]
};

function We(a, c) {
	void 0 === c && (c = 0);
	return a.T[c]
}
function af() {
	this.j = null
}
af.prototype.Fj = function(a) {
	bf(this, a);
	a.qd()
};

function cf(a, c, b) {
	if (null !== a.j) {
		var d = [];
		for (d.push(a.j); 0 < d.length;) if (a = d.pop(), a.Qa.Jj(b)) if (null === a.Fd) {
			if (!c(a.Ee)) break
		} else d.push(a.Fd), d.push(a.tf)
	}
}

function df(a, c) {
	if (null === a.j) a.j = c, a.j.parent = null;
	else {
		var b;
		b = c.Qa;
		b = Z((b.j.x + b.k.x) / 2, (b.j.y + b.k.y) / 2);
		for (var d = a.j; null !== d.Fd;) var f = d.Fd,
			d = d.tf,
			h = Math.abs((f.Qa.j.x + f.Qa.k.x) / 2 - b.x) + Math.abs((f.Qa.j.y + f.Qa.k.y) / 2 - b.y),
			e = Math.abs((d.Qa.j.x + d.Qa.k.x) / 2 - b.x) + Math.abs((d.Qa.j.y + d.Qa.k.y) / 2 - b.y),
			d = h < e ? f : d;
		ue(b);
		b = d;
		f = b.parent;
		d = ef();
		d.parent = f;
		Qe(d.Qa, c.Qa, b.Qa);
		if (f) for (b.parent.Fd == b ? f.Fd = d : f.tf = d, d.Fd = b, d.tf = c, b.parent = d, c.parent = d; f && !Pe(f.Qa, d.Qa);) Qe(f.Qa, f.Fd.Qa, f.tf.Qa), d = f, f = f.parent;
		else d.Fd = b, d.tf = c, b.parent = d, c.parent = d, a.j = d
	}
}
function bf(a, c) {
	if (c == a.j) a.j = null;
	else {
		var b = c.parent,
			d = b.parent,
			f;
		f = b.Fd == c ? b.tf : b.Fd;
		if (d) for (d.Fd == b ? d.Fd = f : d.tf = f, f.parent = d; d;) {
			f = d.Qa;
			Qe(d.Qa, d.Fd.Qa, d.tf.Qa);
			if (Pe(f, d.Qa)) break;
			d = d.parent
		} else a.j = f, f.parent = null;
		b.qd()
	}
}
function ff() {
	this.k = new af;
	this.j = []
}
ff.prototype.Fj = function(a) {
	La(this.j, a);
	this.k.Fj(a)
};
ff.prototype.Jj = function(a, c) {
	return a.Qa.Jj(c.Qa)
};

function gf(a, c) {
	for (var b = []; 0 < a.j.length;) {
		var d = a.j.pop();
		cf(a.k, function(a) {
			a != d.Ee && b.push(new hf(d.Ee, a));
			return !0
		}, d.Qa)
	}
	for (var f = 0; f < b.length;) {
		var h = b[f];
		c(h.$j, h.ak);
		for (f++; f < b.length;) {
			var e = b[f];
			if (!(e.$j == h.$j && e.ak == h.ak || e.$j == h.ak && e.ak == h.$j)) break;
			f++
		}
	}
}
function jf(a) {
	this.Qa = Oe();
	this.Ee = this.parent = this.tf = this.Fd = null;
	"undefined" != typeof a && (this.Ee = a)
}
var kf = [];

function ef(a) {
	if (0 < kf.length) {
		var c = kf.pop();
		"undefined" != typeof a && (c.Ee = a);
		c.Qa.ta();
		return c
	}
	return new jf(a)
}
jf.prototype.qd = function() {
	this.Ee = this.parent = this.tf = this.Fd = null;
	kf.push(this)
};

function hf(a, c) {
	this.$j = a;
	this.ak = c
}
function lf() {
	this.ab = this.Nb = 0;
	this.pa = [];
	for (var a = 0; 2 > a; a++) this.pa[a] = new mf;
	this.Kc = Z(0, 0);
	this.za = Z(0, 0)
}
lf.prototype.Dc = function() {
	for (var a = 0; 2 > a; a++) this.pa[a].Dc();
	this.Kc.ta();
	this.za.ta();
	this.Nb = this.ab = 0
};
lf.prototype.Set = function(a) {
	this.Nb = a.Nb;
	for (var c = 0; 2 > c; c++) this.pa[c].Set(a.pa[c]);
	this.Kc.P(a.Kc);
	this.za.P(a.za);
	this.ab = a.ab
};
lf.prototype.qc = function() {
	var a = new lf;
	a.Set(this);
	return a
};

function mf() {
	this.za = Z(0, 0);
	this.Je = new Ge;
	this.Dc()
}
mf.prototype.Dc = function() {
	this.za.ta();
	this.mi = this.li = 0;
	He(this.Je, 0)
};
mf.prototype.Set = function(a) {
	this.za.P(a.za);
	this.li = a.li;
	this.mi = a.mi;
	this.Je.Set(a.Je)
};

function nf() {
	var a = of,
		c = pf,
		b = qf,
		d, f, h = 0;
	switch (a.ab) {
	case wf:
		d = Nd(c.B, a.j);
		f = Nd(b.B, a.j.Fg());
		d = a.k.Hj(d);
		f = a.u.Hj(f);
		c = Od(c, d);
		b = Od(b, f);
		h = (b.x - c.x) * a.j.x + (b.y - c.y) * a.j.y;
		break;
	case Bf:
		h = Md(c.B, a.j);
		c = Od(c, a.za);
		f = Nd(b.B, h.Fg());
		f = a.u.Hj(f);
		b = Od(b, f);
		h = (b.x - c.x) * h.x + (b.y - c.y) * h.y;
		break;
	case If:
		h = Md(b.B, a.j), b = Od(b, a.za), d = Nd(c.B, h.Fg()), d = a.k.Hj(d), c = Od(c, d), h = (c.x - b.x) * h.x + (c.y - b.y) * h.y
	}
	return h
}
var wf = 1,
	Bf = 2,
	If = 4;

function Ve() {
	this.k = new Jf;
	this.u = new Jf;
	this.C = new Jf;
	this.T = [this.k, this.u, this.C]
}
function Xe(a) {
	return 1 == a.j ? 0 : 2 == a.j ? ve(Qd(a.k.fc, a.u.fc)) : 3 == a.j ? Kd(Qd(a.u.fc, a.k.fc), Qd(a.C.fc, a.k.fc)) : 0
}
function Kf() {
	this.Wb = [0, 0, 0];
	this.Xb = [0, 0, 0]
}
function Jf() {}
Jf.prototype.Set = function(a) {
	this.dd.P(a.dd);
	this.Se.P(a.Se);
	this.fc.P(a.fc);
	this.R = a.R;
	this.Wb = a.Wb;
	this.Xb = a.Xb
};

function Lf() {
	this.lg = new $e;
	this.mg = new $e;
	this.nu = new qe;
	this.ou = new qe
}

function Mf(a, c) {
	this.Y = "Body" + Nf++;
	this.H = new re;
	this.H.position.P(a.position);
	this.H.B.Set(a.M);
	this.m = new qe;
	this.m.S.ta();
	this.m.od = 1;
	this.m.ve = this.m.R = a.M;
	this.m.D.x = this.H.B.n.x * this.m.S.x + this.H.B.q.x * this.m.S.y;
	this.m.D.y = this.H.B.n.y * this.m.S.x + this.H.B.q.y * this.m.S.y;
	this.m.D.x += this.H.position.x;
	this.m.D.y += this.H.position.y;
	this.m.Ec.P(this.m.D);
	this.A = a.O.qc();
	this.k = Z(0, 0);
	this.I = a.Hi;
	this.mb = a.j;
	this.Ga = a.k;
	this.Yd = a.C;
	this.ea = a.sc;
	this.Zd = c;
	this.Db = null;
	this.Gd = new Of;
	this.ba = new Pf;
	this.J = a.u;
	this.fb = a.ej;
	this.Ka = a.Fi;
	this.O = this.C = 0;
	this.ab = a.type;
	this.X = 2 == this.ab ? 1 : 0;
	this.N = 2 == this.ab ? 1 : 0;
	this.W = this.j = 0;
	this.La = a.I;
	this.u = new Qf;
	this.K = []
}
function Rf(a, c) {
	var b = new Sf(a, 0, c);
	if (a.ea) {
		var d = a.Zd.j.j;
		b.lc.xi(b.j, a.H);
		var f = d.k,
			h = b.j,
			e = ef(b);
		e.Qa.j.x = h.j.x - .1;
		e.Qa.j.y = h.j.y - .1;
		e.Qa.k.x = h.k.x + .1;
		e.Qa.k.y = h.k.y + .1;
		df(f, e);
		d.j.push(e);
		b.k = e
	}
	d = a.u;
	f = b.Zq;
	null == d.j[f] && (h = new Tf(b), e = d.u, null != e ? e.next = h : d.k = h, h.Jf(e), d.u = h, d.j[f] = h);
	b.Mp = a;
	0 < b.C && Uf(a);
	a.Zd.u = !0
}
y = Mf.prototype;
y.qd = function() {
	ue(this.A);
	ue(this.k)
};

function Vf(a, c, b) {
	a.H.B.Set(b);
	a.H.position.P(c);
	c = a.H.B;
	var d = a.m.S;
	a.m.D.x = c.n.x * d.x + c.q.x * d.y;
	a.m.D.y = c.n.y * d.x + c.q.y * d.y;
	a.m.D.x += a.H.position.x;
	a.m.D.y += a.H.position.y;
	a.m.Ec.P(a.m.D);
	a.m.ve = a.m.R = b;
	b = a.Zd.j.j;
	for (c = a.u.eb(); c; c = c.Pa()) Wf(c.Ee, b, a.H, a.H);
	Xf(a.Zd.j)
}
y.Rd = function() {
	return this.H
};
y.yh = function() {
	return this.m.R
};
y.ao = function(a) {
	Vf(this, this.H.position, a)
};

function Yf(a, c) {
	0 != a.ab && a.A.P(c)
}
y.tl = function(a) {
	void 0 === a && (a = 0);
	0 != this.ab && (this.J = a)
};
y.wh = function(a, c) {
	2 == this.ab && (Zf(this, !0), this.k.x += a.x, this.k.y += a.y, this.C += (c.x - this.m.D.x) * a.y - (c.y - this.m.D.y) * a.x)
};
y.Vn = function(a) {
	void 0 === a && (a = 0);
	2 == this.ab && (Zf(this, !0), this.C += a)
};

function Uf(a) {
	a.X = 0;
	a.N = 0;
	a.j = 0;
	a.W = 0;
	a.m.S.ta();
	if (0 != a.ab && 1 != a.ab) {
		for (var c = Z(0, 0), b = a.u.eb(); b; b = b.Pa()) {
			var d = b.Ee;
			if (0 != d.C) {
				var f = void 0,
					f = new Be;
				d.lc.Ej(f, d.C);
				d = f;
				a.X += d.j;
				c.x += d.k.x * d.j;
				c.y += d.k.y * d.j;
				a.j += d.u
			}
		}
		0 < a.X ? (a.N = 1 / a.X, c.x *= a.N, c.y *= a.N) : (a.X = 1, a.N = 1);
		0 < a.j && !a.mb ? (a.j -= a.X * (c.x * c.x + c.y * c.y), a.j *= a.La, a.W = 1 / a.j) : (a.j = 0, a.W = 0);
		b = a.m.D.qc();
		a.m.S.P(c);
		a.m.Ec.P(Od(a.H, a.m.S));
		a.m.D.P(a.m.Ec);
		a.A.x += a.J * -(a.m.D.y - b.y);
		a.A.y += a.J * +(a.m.D.x - b.x);
		ue(c);
		ue(b)
	}
}

function $f(a, c) {
	var b = a.H.B,
		b = Z(b.n.x * c.x + b.q.x * c.y, b.n.y * c.x + b.q.y * c.y);
	b.x += a.H.position.x;
	b.y += a.H.position.y;
	return b
}
y.Pc = function() {
	return this.ab
};

function Zf(a, c) {
	if (a.Yd != c) {
		a.Yd = c;
		a.O = 0;
		c || (a.A.ta(), a.J = 0, a.k.ta(), a.C = 0);
		for (var b = 0; b < a.K.length; b++) ag(a.K[b], a)
	}
}
y.Bh = function() {
	return this.ea
};
y.zh = function() {
	return this.Gd
};

function bg(a) {
	cg.B.Set(a.m.ve);
	var c = cg.B,
		b = a.m.S;
	cg.position.x = a.m.Ec.x - (c.n.x * b.x + c.q.x * b.y);
	cg.position.y = a.m.Ec.y - (c.n.y * b.x + c.q.y * b.y);
	c = a.Zd.j.j;
	for (b = a.u.eb(); b; b = b.Pa()) Wf(b.Ee, c, cg, a.H)
}
function dg(a) {
	a.H.B.Set(a.m.R);
	var c = a.H.B,
		b = a.m.S;
	a.H.position.x = a.m.D.x - (c.n.x * b.x + c.q.x * b.y);
	a.H.position.y = a.m.D.y - (c.n.y * b.x + c.q.y * b.y)
}
function eg(a, c) {
	if (2 != a.ab && 2 != c.ab) return !1;
	for (var b = a.Db; b; b = b.next) if (b.ne == c && 0 == b.dg.Zs) return !1;
	return !0
}
y.Dg = function(a) {
	this.m.Dg(a);
	this.m.D.P(this.m.Ec);
	this.m.R = this.m.ve;
	dg(this)
};
var Nf = 0;

function fg() {
	this.position = Z(0, 0);
	this.O = Z(0, 0);
	this.Fi = this.ej = this.u = this.M = 0;
	this.C = this.k = !0;
	this.Hi = this.j = !1;
	this.type = 0;
	this.sc = !0;
	this.I = 1
}
function gg() {
	this.k = [];
	for (var a = 0; a <= hg; a++) this.k[a] = null;
	this.u = [];
	for (a = 0; a <= hg; a++) this.u[a] = null;
	this.j = {}
}
gg.prototype.eb = function(a) {
	return this.k[a]
};

function ag(a, c) {
	var b = c.Pc(),
		d = c.Y,
		f = c.Yd,
		h = c.Bh();
	2 == b ? ig(a, c, d, jg) : kg(a, d, jg);
	0 != b ? ig(a, c, d, lg) : kg(a, d, lg);
	0 != b && h && f ? ig(a, c, d, mg) : kg(a, d, mg);
	f ? ig(a, c, d, ng) : kg(a, d, ng);
	h ? ig(a, c, d, og) : kg(a, d, og)
}
gg.prototype.sl = function(a) {
	var c = a.Y;
	if (null != this.j[c]) {
		La(a.K, this);
		for (a = 0; a <= hg; a++) kg(this, c, a);
		delete this.j[c]
	}
};

function kg(a, c, b) {
	var d = a.j[c];
	null != d && (c = d[b], null != c && (d[b] = null, d = c.j, c = c.Pa(), null == d ? a.k[b] = c : d.next = c, null == c ? a.u[b] = d : c.Jf(d)))
}

function ig(a, c, b, d) {
	var f = a.j[b];
	if (null == f) {
		for (var f = [], h = 0; h <= hg; h++) f[h] = null;
		a.j[b] = f
	}
	null == f[d] && (f[d] = new pg(c), c = a.u[d], null != c ? c.next = f[d] : a.k[d] = f[d], f[d].Jf(c), a.u[d] = f[d])
}
var jg = 0,
	lg = 1,
	og = 2,
	mg = 3,
	ng = 4,
	hg = 5;

function pg(a) {
	this.body = a;
	this.j = this.next = null
}
pg.prototype.Jf = function(a) {
	this.j = a
};
pg.prototype.cb = function() {
	return this.body
};
pg.prototype.Pa = function() {
	return this.next
};

function qg() {}
qg.prototype.j = function(a, c) {
	var b = a.I.qc(),
		d = c.I.qc();
	return b.j == d.j && 0 != b.j ? 0 < b.j : 0 != (b.u & d.k) && 0 != (b.k & d.u)
};
var rg = new qg;

function sg() {
	this.j = [];
	this.k = []
}
function tg() {}
tg.prototype.BeginContact = function() {};
tg.prototype.EndContact = function() {};

function ug(a) {
	this.Zd = a;
	this.u = rg;
	this.k = vg;
	this.C = new wg;
	this.j = new ff
}

function Xf(a) {
	gf(a.j, function(c, b) {
		a: {
			var d = c.cb(),
				f = b.cb();
			if (d != f && eg(f, d) && a.u.j(c, b)) {
				for (d = f.Gd.eb(xg); d; d = d.Pa()) if (f = d.tc.Zb, f == c) {
					if (f = d.tc.Mb, f == b) break a
				} else if (f == b && (f = d.tc.Mb, f == c)) break a;
				a.C.u(c, b)
			}
		}
	})
}
ug.prototype.qd = function(a) {
	a.vi && this.k.EndContact(a);
	0 < a.le.Nb && (Zf(a.Zb.cb(), !0), Zf(a.Mb.cb(), !0));
	yg(a.Dl, a);
	yg(a.El, a);
	yg(a.Tn, a);
	this.C.qd(a)
};

function zg() {
	this.k = 1;
	this.u = 65535;
	this.j = 0
}
zg.prototype.qc = function() {
	var a = new zg;
	a.k = this.k;
	a.u = this.u;
	a.j = this.j;
	return a
};

function Sf(a, c, b) {
	this.Zq = "Fixture" + Ag++;
	this.I = b.j.qc();
	this.j = Oe();
	this.Mp = a;
	this.lc = b.shape.qc();
	this.C = b.Rg;
	this.O = b.Ug;
	this.K = b.nh;
	this.u = b.k
}
Sf.prototype.cb = function() {
	return this.Mp
};
Sf.prototype.qd = function() {
	Ke.push(this.j)
};
Sf.prototype.Fj = function(a) {
	null != this.k && (a.Fj(this.k), this.k = null)
};

function Wf(a, c, b, d) {
	if (a.k) {
		var f = Oe(),
			h = Oe();
		a.lc.xi(f, b);
		a.lc.xi(h, d);
		Qe(a.j, f, h);
		Ke.push(f);
		Ke.push(h);
		b = Qd(d.position, b.position);
		d = a.k;
		f = c.k;
		a = a.j;
		if (Pe(d.Qa, a)) a = !1;
		else {
			bf(f, d);
			var h = .1 + 2 * Math.abs(b.x),
				e = .1 + 2 * Math.abs(b.y);
			d.Qa.j.x = a.j.x - h;
			d.Qa.j.y = a.j.y - e;
			d.Qa.k.x = a.k.x + h;
			d.Qa.k.y = a.k.y + e;
			df(f, d);
			a = !0
		}
		a && c.j.push(d);
		ue(b)
	}
}
var Ag = 0;

function Bg() {
	this.j = new zg;
	this.j.k = 1;
	this.j.u = 65535;
	this.j.j = 0;
	this.shape = null;
	this.Ug = .2;
	this.Rg = this.nh = 0;
	this.k = !1
}

function Qf() {
	this.u = this.k = null;
	this.j = {}
}
Qf.prototype.eb = function() {
	return this.k
};

function Tf(a) {
	this.Ee = a;
	this.j = this.next = null
}
Tf.prototype.Jf = function(a) {
	this.j = a
};
Tf.prototype.Pa = function() {
	return this.next
};

function Cg(a, c) {
	this.ea = a;
	this.C = c;
	this.k = [];
	this.O = [];
	this.I = [];
	this.u = [];
	this.j = []
}
function Dg(a) {
	a.k = [];
	a.O = [];
	a.I = [];
	a.u = [];
	a.j = []
}
function Eg(a, c) {
	if (null != a.ea) for (var b = 0; b < a.u.length; ++b) for (var d = c[b], f = new sg, h = 0; h < d.I; ++h) f.j[h] = d.u[h].Ob, f.k[h] = d.u[h].Hf
}

function Fg(a, c) {
	a.k.push(c);
	0 != c.Pc() && (a.I.push(c), 2 == c.Pc() && a.O.push(c))
}
function Gg(a, c, b, d, f) {
	this.Ha = a;
	var h = 0;
	0 < a && (h = 1 / a);
	this.j = h;
	this.hc = c;
	this.Ok = b;
	this.ll = d;
	this.Ag = f
}
function Hg(a, c) {
	this.j = new ug(this);
	this.C = new Ig;
	this.u = !1;
	this.xh = new gg;
	this.Gd = new Of;
	this.Db = null;
	this.O = new Pf;
	this.K = 0;
	this.Y = c;
	this.k = a;
	this.I = 0;
	this.dz = Jg(this, new fg)
}
var Kg = 1 - 100 * Number.MIN_VALUE;

function Jg(a, c) {
	var b = new Mf(c, a),
		d = a.xh,
		f = b.Y;
	null == d.j[f] && (ig(d, b, f, hg), ag(d, b), b.K.push(d));
	return b
}

function Lg(a, c) {
	for (var b = c.Db; b;) {
		var d = b,
			b = b.next;
		Mg(a, d.dg)
	}
	for (b = c.ba.eb(); b; b = b.Pa()) b.Bw.sl(c);
	for (b = c.Gd.eb(xg); b; b = b.Pa()) a.j.qd(b.tc);
	for (b = c.u.eb(); b; b = b.Pa()) {
		var d = c,
			f = b.Ee,
			h = d.u,
			e = f.Zq,
			g = h.j[e];
		if (null != g) {
			var l = g.j,
				g = g.Pa();
			null == l ? h.k = g : l.next = g;
			null == g ? h.u = l : g.Jf(l);
			delete h.j[e]
		}
		for (h = d.Gd.eb(xg); h; h = h.Pa()) f != h.tc.Zb && f != h.tc.Mb || d.Zd.j.qd(h.tc);
		d.ea && f.Fj(d.Zd.j.j);
		f.qd();
		f.Mp = null;
		Uf(d)
	}
	c.qd();
	a.xh.sl(c)
}

function Ng(a, c) {
	var b = c.u();
	b.hj = null;
	if (b.fh = a.Db) a.Db.hj = b;
	a.Db = b;
	a.K++;
	b.wd.dg = b;
	b.wd.ne = b.aa;
	b.wd.prev = null;
	if (b.wd.next = b.Z.Db) b.Z.Db.prev = b.wd;
	b.Z.Db = b.wd;
	b.xd.dg = b;
	b.xd.ne = b.Z;
	b.xd.prev = null;
	if (b.xd.next = b.aa.Db) b.aa.Db.prev = b.xd;
	b.aa.Db = b.xd;
	var d = c.j,
		f = c.k;
	if (!c.O) for (var h = f.Gd.eb(xg); h; h = h.Pa()) Ug(h.tc, f) == d && (h.tc.Yj = !0);
	return b
}

function Mg(a, c) {
	var b = c.Zs;
	c.hj && (c.hj.fh = c.fh);
	c.fh && (c.fh.hj = c.hj);
	c == a.Db && (a.Db = c.fh);
	var d = c.Z,
		f = c.aa;
	Zf(d, !0);
	Zf(f, !0);
	c.wd.prev && (c.wd.prev.next = c.wd.next);
	c.wd.next && (c.wd.next.prev = c.wd.prev);
	c.wd == d.Db && (d.Db = c.wd.next);
	c.wd.prev = null;
	c.wd.next = null;
	c.xd.prev && (c.xd.prev.next = c.xd.next);
	c.xd.next && (c.xd.next.prev = c.xd.prev);
	c.xd == f.Db && (f.Db = c.xd.next);
	c.xd.prev = null;
	c.xd.next = null;
	a.K--;
	if (!b) for (b = f.Gd.eb(xg); b; b = b.Pa()) Ug(b.tc, f) == d && (b.tc.Yj = !0)
}
Hg.prototype.rr = function(a) {
	this.k = a
};
Hg.prototype.Hg = function(a, c, b) {
	var d, f;
	this.u && (Xf(this.j), this.u = !1);
	for (var h = new Gg(a, this.I * a, c, b, !0), e = this.j, g = e.Zd.Gd.eb(xg); g; g = g.Pa()) {
		var l = g.tc,
			n = l.Zb,
			k = l.Mb,
			m = n.cb(),
			q = k.cb();
		if (0 != m.Yd || 0 != q.Yd) {
			if (l.Yj) {
				if (0 == eg(q, m)) {
					e.qd(l);
					continue
				}
				if (0 == e.u.j(n, k)) {
					e.qd(l);
					continue
				}
				l.Yj = !1
			}
			0 == e.j.Jj(n.k, k.k) ? e.qd(l) : Vg(l, e.k)
		}
	}
	if (0 < h.Ha) {
		for (var p = this.O.eb(); p; p = p.Pa()) p.Bw.Hg(h);
		for (var t = new Cg(this.j.k, this.C), u = this.xh.eb(hg); u; u = u.Pa()) u.body.tb = !1;
		for (var v = this.Gd.eb(xg); v; v = v.Pa()) v.tc.tb = !1;
		for (var r = this.Db; r; r = r.fh) r.tb = !1;
		for (u = this.xh.eb(mg); u; u = u.Pa()) {
			var z = u.body;
			if (!z.tb) {
				Dg(t);
				Wg.length = 0;
				var B = Wg;
				B.push(z);
				for (z.tb = !0; 0 < B.length;) {
					var D = B.pop();
					Fg(t, D);
					D.Yd || Zf(D, !0);
					if (0 != D.Pc()) {
						for (v = D.Gd.eb(Xg); v; v = v.Pa()) {
							var A = v.tc;
							if (!A.tb) {
								t.u.push(A);
								A.tb = !0;
								var C = Ug(A, D);
								C.tb || (B.push(C), C.tb = !0)
							}
						}
						for (var E = D.Db; E; E = E.next)!E.dg.tb && E.ne.Bh() && (t.j.push(E.dg), E.dg.tb = !0, E.ne.tb || (B.push(E.ne), E.ne.tb = !0))
					}
				}
				for (var w = t, x = h, K = this.Y, H = w, P = x, O = this.k, Q = 0; Q < H.O.length; Q++) {
					var S = H.O[Q];
					S.A.x += P.Ha * (O.x + S.N * S.k.x);
					S.A.y += P.Ha * (O.y + S.N * S.k.y);
					S.J += P.Ha * S.W * S.C;
					S.A.ee(Rd(1 - P.Ha * S.fb, 0, 1));
					S.J *= Rd(1 - P.Ha * S.Ka, 0, 1)
				}
				Yg(w.C, w.u, w.u.length);
				for (var G = w, L = x, F = G.C, R = 0; R < F.k; ++R) {
					var T = F.j[R],
						N = T.j,
						I = T.k,
						U = N.N,
						za = N.W,
						Y = I.N,
						Qa = I.W,
						oa = T.C.x,
						sb = T.C.y,
						fb = sb,
						Cd = -oa,
						Ea = 0,
						Hb = 0;
					if (L.Ag) for (Hb = T.I, Ea = 0; Ea < Hb; ++Ea) {
						var pa = T.u[Ea];
						pa.Ob *= L.hc;
						pa.Hf *= L.hc;
						var ub = pa.Ob * oa + pa.Hf * fb,
							ca = pa.Ob * sb + pa.Hf * Cd;
						N.J -= za * (pa.Eb.x * ca - pa.Eb.y * ub);
						N.A.x -= U * ub;
						N.A.y -= U * ca;
						I.J += Qa * (pa.Fb.x * ca - pa.Fb.y * ub);
						I.A.x += Y * ub;
						I.A.y += Y * ca
					} else for (Hb = T.I, Ea = 0; Ea < Hb; ++Ea) {
						var Ed = T.u[Ea];
						Ed.Ob = 0;
						Ed.Hf = 0
					}
				}
				for (var gc = 0; gc < G.j.length; gc++) G.j[gc].mf(L);
				for (var Sc = 0; Sc < L.ll; Sc++) {
					for (var Fa = 0; Fa < G.j.length; Fa++) G.j[Fa].of(L);
					Zg(G.C)
				}
				for (var Ib = 0; Ib < G.j.length; Ib++);
				for (var Jb = G.C, gb = 0; gb < Jb.k; ++gb) for (var Le = Jb.j[gb], xi = Le.ea, Dd = 0; Dd < Le.I; ++Dd) {
					var Og = xi.pa[Dd],
						Pg = Le.u[Dd];
					Og.li = Pg.Ob;
					Og.mi = Pg.Hf
				}
				for (var Qg = w, tb = x, Me = 0; Me < Qg.I.length; ++Me) {
					var ea = Qg.I[Me],
						Rg = tb.Ha * ea.A.x,
						Sg = tb.Ha * ea.A.y;
					4 < Rg * Rg + Sg * Sg && (xe(ea.A), ea.A.x = 2 * ea.A.x * tb.j, ea.A.y = 2 * ea.A.y * tb.j);
					var Tg = tb.Ha * ea.J;
					Tg * Tg > Gd && (ea.J = 0 > ea.J ? -Fd * tb.j : Fd * tb.j);
					ea.m.Ec.P(ea.m.D);
					ea.m.ve = ea.m.R;
					ea.m.D.x += tb.Ha * ea.A.x;
					ea.m.D.y += tb.Ha * ea.A.y;
					ea.m.R += tb.Ha * ea.J;
					dg(ea)
				}
				for (var Ne = w, yi = x, Gh = 0; Gh < yi.Ok; Gh++) {
					for (var Mi = $g(Ne.C, .2), rf = !0, sf = 0; sf < Ne.j.length; sf++) var Ni = Ne.j[sf].nf(.2),
						rf = rf && Ni;
					if (Mi && rf) break
				}
				Eg(w, w.C.j);
				if (K) {
					for (var Zd = w, Oi = x, $d = Number.MAX_VALUE, tf = 0; tf < Zd.I.length; tf++) {
						var Lb = Zd.I[tf];
						!Lb.Ga || Math.abs(Lb.J) > Hd || 1E-4 < Jd(Lb.A, Lb.A) ? $d = Lb.O = 0 : (Lb.O += Oi.Ha, $d = Math.min($d, Lb.O))
					}
					if (.5 <= $d) for (var uf = 0; uf < Zd.k.length; uf++) Zf(Zd.k[uf], !1)
				}
			}
		}
		for (u = this.xh.eb(mg); u; u = u.Pa()) bg(u.body);
		Xf(this.j);
		for (var va = new Cg(this.j.k, this.C), ae = this.xh.eb(hg); ae; ae = ae.Pa()) {
			var wb = ae.body;
			wb.tb = !1;
			wb.m.od = 0
		}
		for (var Ja = this.Gd.eb(xg); Ja; Ja = Ja.Pa()) Ja.tc.tb = !1, Ja.tc.j = null;
		for (var be = this.Db; be; be = be.fh) be.tb = !1;
		for (;;) {
			for (var Ih = null, vf = 1, ce = this.Gd.eb(ah); ce; ce = ce.Pa()) {
				var jb = ce.tc,
					Jh = jb.Zb.cb(),
					Kh = jb.Mb.cb();
				if (2 == Jh.Pc() && Jh.Yd || 2 == Kh.Pc() && Kh.Yd) {
					var $a = 1;
					if (null != jb.j) $a = jb.j;
					else if (jb.vi) $a = 1, jb.j = $a;
					else {
						var xc = jb.Zb.cb(),
							$c = jb.Mb.cb(),
							ad = xc.m.od;
						xc.m.od < $c.m.od ? (ad = $c.m.od, xc.m.Dg(ad)) : $c.m.od < xc.m.od && (ad = xc.m.od, $c.m.Dg(ad));
						var Lh = jb,
							Pi = xc.m,
							Qi = $c.m;
						bh.lg.Set(Lh.Zb.lc);
						bh.mg.Set(Lh.Mb.lc);
						bh.nu = Pi;
						bh.ou = Qi;
						bh.kA = .005;
						var bd = bh;
						ch++;
						var xf = bd.lg,
							yf = bd.mg,
							zf = bd.nu,
							Af = bd.ou,
							de = xf.$a + yf.$a,
							ee = bd.kA,
							kb = 0,
							cd = 0,
							yc = 0;
						dh.count = 0;
						for (eh.u = !1;;) {
							zf.Rd(pf, kb);
							Af.Rd(qf, kb);
							eh.lg = xf;
							eh.mg = yf;
							eh.j = pf;
							eh.k = qf;
							Ue(fh, dh, eh);
							if (0 >= fh.u) {
								kb = 1;
								break
							}
							var Si = yf,
								V = of,
								Aa = dh,
								lb = pf,
								mb = qf;
							V.k = xf;
							V.u = Si;
							var Mb = void 0,
								nb = void 0,
								Cb = void 0,
								Nb = void 0,
								ob = void 0,
								Db = void 0,
								Ac = 0,
								Bc = 0,
								Cc = 0,
								Dc = 0,
								fe = 0,
								ge = 0,
								W = void 0,
								X = void 0,
								ab = 0;
							if (1 == Aa.count) V.ab = wf, Mb = We(V.k, Aa.Wb[0]), Nb = We(V.u, Aa.Xb[0]), X = Mb, W = lb.B, Ac = lb.position.x + (W.n.x * X.x + W.q.x * X.y), Bc = lb.position.y + (W.n.y * X.x + W.q.y * X.y), X = Nb, W = mb.B, Cc = mb.position.x + (W.n.x * X.x + W.q.x * X.y), Dc = mb.position.y + (W.n.y * X.x + W.q.y * X.y), V.j.x = Cc - Ac, V.j.y = Dc - Bc, xe(V.j);
							else {
								if (Aa.Xb[0] == Aa.Xb[1]) V.ab = Bf, nb = We(V.k, Aa.Wb[0]), Cb = We(V.k, Aa.Wb[1]), Nb = We(V.u, Aa.Xb[0]), V.za.x = .5 * (nb.x + Cb.x), V.za.y = .5 * (nb.y + Cb.y), V.j = Ld(Qd(Cb, nb)), xe(V.j), X = V.j, W = lb.B, fe = W.n.x * X.x + W.q.x * X.y, ge = W.n.y * X.x + W.q.y * X.y, X = V.za, W = lb.B, Ac = lb.position.x + (W.n.x * X.x + W.q.x * X.y), Bc = lb.position.y + (W.n.y * X.x + W.q.y * X.y), X = Nb, W = mb.B, Cc = mb.position.x + (W.n.x * X.x + W.q.x * X.y), Dc = mb.position.y + (W.n.y * X.x + W.q.y * X.y), ab = (Cc - Ac) * fe + (Dc - Bc) * ge;
								else if (Aa.Wb[0] == Aa.Wb[0]) V.ab = If, ob = We(V.u, Aa.Xb[0]), Db = We(V.u, Aa.Xb[1]), Mb = We(V.k, Aa.Wb[0]), V.za.x = .5 * (ob.x + Db.x), V.za.y = .5 * (ob.y + Db.y), V.j = Ld(Qd(Db, ob)), xe(V.j), X = V.j, W = mb.B, fe = W.n.x * X.x + W.q.x * X.y, ge = W.n.y * X.x + W.q.y * X.y, X = V.za, W = mb.B, Cc = mb.position.x + (W.n.x * X.x + W.q.x * X.y), Dc = mb.position.y + (W.n.y * X.x + W.q.y * X.y), X = Mb, W = lb.B, Ac = lb.position.x + (W.n.x * X.x + W.q.x * X.y), Bc = lb.position.y + (W.n.y * X.x + W.q.y * X.y), ab = (Ac - Cc) * fe + (Bc - Dc) * ge;
								else {
									var nb = We(V.k, Aa.Wb[0]),
										Cb = We(V.k, Aa.Wb[1]),
										ob = We(V.u, Aa.Xb[0]),
										Db = We(V.u, Aa.Xb[1]),
										Eb = Md(lb.B, Qd(Cb, nb)),
										Fb = Md(mb.B, Qd(Db, ob)),
										Nh = Eb.x * Eb.x + Eb.y * Eb.y,
										Cf = Fb.x * Fb.x + Fb.y * Fb.y,
										he = Qd(Fb, Eb),
										Oh = Eb.x * he.x + Eb.y * he.y,
										Ph = Fb.x * he.x + Fb.y * he.y,
										dd = Eb.x * Fb.x + Eb.y * Fb.y,
										Qh = Nh * Cf - dd * dd,
										ab = 0;
									0 != Qh && (ab = Rd((dd * Ph - Oh * Cf) / Qh, 0, 1));
									0 > (dd * ab + Ph) / Cf && (ab = Rd((dd - Oh) / Nh, 0, 1));
									Mb = Z(0, 0);
									Mb.x = nb.x + ab * (Cb.x - nb.x);
									Mb.y = nb.y + ab * (Cb.y - nb.y);
									Nb = Z(0, 0);
									Nb.x = ob.x + ab * (Db.x - ob.x);
									Nb.y = ob.y + ab * (Db.y - ob.y);
									0 == ab || 1 == ab ? (V.ab = If, V.j = Ld(Qd(Db, ob)), xe(V.j), V.za = Nb) : (V.ab = Bf, V.j = Ld(Qd(Cb, nb)), V.za = Mb)
								}
								if (0 > ab) {
									var ie = V.j;
									ie.x = -ie.x;
									ie.y = -ie.y
								}
							}
							var ed = nf();
							if (0 >= ed) {
								kb = 1;
								break
							}
							0 == cd && (yc = ed > de ? Math.max(de - ee, .75 * de) : Math.max(ed - ee, .02 * de));
							if (ed - yc < .5 * ee) {
								if (0 == cd) {
									kb = 1;
									break
								}
								break
							}
							var Df = kb,
								je = kb,
								fd = 1,
								Ef = ed;
							zf.Rd(pf, fd);
							Af.Rd(qf, fd);
							var Ff = nf();
							if (Ff >= yc) {
								kb = 1;
								break
							}
							for (var ke = 0;;) {
								var Ec = 0,
									Ec = ke & 1 ? je + (yc - Ef) * (fd - je) / (Ff - Ef) : .5 * (je + fd);
								zf.Rd(pf, Ec);
								Af.Rd(qf, Ec);
								var le = nf();
								if (Math.abs(le - yc) < .025 * ee) {
									Df = Ec;
									break
								}
								le > yc ? (je = Ec, Ef = le) : (fd = Ec, Ff = le);
								ke++;
								gh++;
								if (50 == ke) break
							}
							hh = Math.max(hh, ke);
							if (Df < (1 + 100 * Number.MIN_VALUE) * kb) break;
							kb = Df;
							cd++;
							ih++;
							if (1E3 == cd) break
						}
						jh = Math.max(jh, cd);
						$a = kb;
						0 < $a && 1 > $a && ($a = (1 - $a) * ad + $a);
						jb.j = $a
					}
					Number.MIN_VALUE < $a && $a < vf && (Ih = jb, vf = $a)
				}
			}
			d = Ih;
			f = vf;
			var Ob = d,
				Fc = f;
			if (null === Ob || Kg < Fc) break;
			var gd = Ob.Zb.cb(),
				hd = Ob.Mb.cb();
			kh.Set(gd.m);
			lh.Set(hd.m);
			gd.Dg(Fc);
			hd.Dg(Fc);
			Vg(Ob, this.j.k);
			Ob.j = null;
			if (Ob.I || !Ob.enabled) gd.m.Set(kh), hd.m.Set(lh), dg(gd), dg(hd);
			else if (Ob.vi) {
				var me = gd;
				2 != me.Pc() && (me = hd);
				Dg(va);
				Wg.length = 0;
				var id = Wg;
				id.push(me);
				for (me.tb = !0; 0 < id.length;) if (wb = id.pop(), Fg(va, wb), wb.Yd || Zf(wb, !0), 2 == wb.Pc()) {
					for (Ja = wb.Gd.eb(Xg); Ja && 32 != va.Y; Ja = Ja.Pa()) {
						var ne = Ja.tc;
						if (!ne.tb) {
							va.u.push(ne);
							ne.tb = !0;
							var Gc = Ug(ne, wb);
							Gc.tb || (0 != Gc.Pc() && (Gc.Dg(Fc), Zf(Gc, !0), id.push(Gc)), Gc.tb = !0)
						}
					}
					for (var bb = wb.Db; bb; bb = bb.next) 32 != va.K && !bb.dg.tb && bb.ne.Bh() && (va.j.push(bb.dg), bb.dg.tb = !0, bb.ne.tb || (0 != bb.ne.Pc() && (bb.ne.Dg(Fc), Zf(bb.ne, !0), id.push(bb.ne)), bb.ne.tb = !0))
				}
				var cb = va,
					Wa = new Gg((1 - Fc) * h.Ha, 0, h.ll, h.Ok, !1),
					Xa = 0,
					Pb = 0;
				Yg(cb.C, cb.u, cb.u.length);
				for (var Gf = cb.C, Xa = 0; Xa < cb.j.length; ++Xa) cb.j[Xa].mf(Wa);
				for (Xa = 0; Xa < Wa.ll; ++Xa) for (Zg(Gf), Pb = 0; Pb < cb.j.length; ++Pb) cb.j[Pb].of(Wa);
				for (Xa = 0; Xa < cb.I.length; ++Xa) {
					var ga = cb.I[Xa],
						Vh = Wa.Ha * ga.A.x,
						Wh = Wa.Ha * ga.A.y;
					4 < Vh * Vh + Wh * Wh && (xe(ga.A), ga.A.x = 2 * ga.A.x * Wa.j, ga.A.y = 2 * ga.A.y * Wa.j);
					var Xh = Wa.Ha * ga.J;
					Xh * Xh > Gd && (ga.J = 0 > ga.J ? -Fd * Wa.j : Fd * Wa.j);
					ga.m.Ec.P(ga.m.D);
					ga.m.ve = ga.m.R;
					ga.m.D.x += Wa.Ha * ga.A.x;
					ga.m.D.y += Wa.Ha * ga.A.y;
					ga.m.R += Wa.Ha * ga.J;
					dg(ga)
				}
				for (Xa = 0; Xa < Wa.Ok; ++Xa) {
					for (var Vi = $g(Gf, .75), Hf = !0, Pb = 0; Pb < cb.j.length; ++Pb) var Wi = cb.j[Pb].nf(.2),
						Hf = Hf && Wi;
					if (Vi && Hf) break
				}
				Eg(cb, Gf.j);
				for (var Ga = 0; Ga < va.k.length; Ga++) if (va.k[Ga].tb = !1, va.k[Ga].Yd && 2 == va.k[Ga].Pc()) for (bg(va.k[Ga]), Ja = va.k[Ga].Gd.eb(xg); Ja; Ja = Ja.Pa()) Ja.tc.j = null;
				for (Ga = 0; Ga < va.Y; Ga++) va.u[Ga].tb = !1, va.u[Ga].j = null;
				for (Ga = 0; Ga < va.K; Ga++) va.j[Ga].tb = !1;
				Xf(this.j)
			}
		}
		this.I = h.j
	}
};
Hg.prototype.zh = function() {
	return this.Gd
};
var Wg = [];

function mh(a, c) {
	this.k = "Contact" + nh++;
	this.le = new lf;
	this.C = new lf;
	this.vi = !1;
	var b = a.cb(),
		d = c.cb();
	this.O = 2 != b.Pc() || b.I || 2 != d.Pc() || d.I;
	this.I = a.u || c.u;
	this.Yj = !1;
	this.Zb = a;
	this.Mb = c;
	this.enabled = !0;
	this.Dl = b.zh();
	this.El = d.zh();
	this.Tn = d.Zd.zh();
	oh(this)
}
mh.prototype.Dc = function(a, c) {
	this.le.Dc();
	this.C.Dc();
	this.vi = !1;
	var b = a.cb(),
		d = c.cb();
	this.O = 2 != b.Pc() || b.I || 2 != d.Pc() || d.I;
	this.I = a.u || c.u;
	this.Yj = !1;
	this.Zb = a;
	this.Mb = c;
	this.enabled = !0;
	this.Dl = b.zh();
	this.El = d.zh();
	this.Tn = d.Zd.zh();
	oh(this)
};

function oh(a) {
	ph(a.Dl, a);
	ph(a.El, a);
	ph(a.Tn, a);
	qh(a)
}
function qh(a) {
	var c = !1,
		b = !1;
	!a.I && a.enabled && (a.vi && (c = !0), a.O && (b = !0));
	rh(a.Dl, a, c, b);
	rh(a.El, a, c, b);
	rh(a.Tn, a, c, b)
}
function Ug(a, c) {
	var b = a.Zb.cb();
	return b != c ? b : a.Mb.cb()
}

function Vg(a, c) {
	var b = a.C;
	a.C = a.le;
	a.le = b;
	a.enabled = !0;
	var d = !1,
		b = a.vi,
		f = a.Zb.cb(),
		h = a.Mb.cb(),
		e = a.Zb.j.Jj(a.Mb.j);
	if (a.I) {
		if (e) {
			var d = a.Zb.lc,
				f = f.Rd(),
				e = a.Mb.lc,
				g = h.Rd(),
				h = new Ye;
			h.lg = new $e;
			h.lg.Set(d);
			h.mg = new $e;
			h.mg.Set(e);
			h.j = f;
			h.k = g;
			h.u = !0;
			f = new Kf;
			f.count = 0;
			d = new Ze;
			Ue(d, f, h);
			d = d.u < 10 * Number.MIN_VALUE
		}
		a.le.Nb = 0
	} else {
		a.O = 2 != f.Pc() || f.I || 2 != h.Pc() || h.I ? !0 : !1;
		if (e) for (a.u(), d = 0 < a.le.Nb, e = 0; e < a.le.Nb; e++) {
			g = a.le.pa[e];
			g.li = 0;
			for (var l = g.mi = 0; l < a.C.Nb; l++) {
				var n = a.C.pa[l];
				if (n.Je.Ub == g.Je.Ub) {
					g.li = n.li;
					g.mi = n.mi;
					break
				}
			}
		} else a.le.Nb = 0;
		d != b && (Zf(f, !0), Zf(h, !0))
	}
	a.vi = d;
	d != b && qh(a);
	!b && d && c.BeginContact(a);
	b && !d && c.EndContact(a)
}
mh.prototype.u = function() {};
var bh = new Lf,
	nh = 0;

function sh(a, c) {
	mh.call(this, a, c)
}
zd(sh, mh);
sh.prototype.Dc = function(a, c) {
	mh.prototype.Dc.call(this, a, c)
};
sh.prototype.u = function() {
	var a = this.le,
		c = this.Zb.lc,
		b = this.Zb.cb().H,
		d = this.Mb.lc,
		f = this.Mb.cb().H;
	a.Nb = 0;
	var h = f.position.x + (f.B.n.x * d.lb.x + f.B.q.x * d.lb.y) - (b.position.x + (b.B.n.x * c.lb.x + b.B.q.x * c.lb.y)),
		b = f.position.y + (f.B.n.y * d.lb.x + f.B.q.y * d.lb.y) - (b.position.y + (b.B.n.y * c.lb.x + b.B.q.y * c.lb.y)),
		f = c.$a + d.$a;
	h * h + b * b > f * f || (a.ab = 1, a.za.P(c.lb), a.Kc.ta(), a.Nb = 1, a.pa[0].za.P(d.lb), He(a.pa[0].Je, 0))
};

function th() {
	this.O = Z(0, 0);
	this.Lb = Z(0, 0);
	this.C = Z(0, 0);
	this.gg = new Sd;
	this.K = new Sd;
	this.u = [];
	for (var a = 0; 2 > a; a++) this.u[a] = new uh
}
function uh() {
	this.Lb = Z(0, 0);
	this.Eb = Z(0, 0);
	this.Fb = Z(0, 0)
}
uh.prototype.Dc = function() {
	this.Lb.Set(0, 0);
	this.Eb.Set(0, 0);
	this.Fb.Set(0, 0)
};

function wg() {
	this.j = {};
	this.k = {};
	vh(this, sh, "b2CircleShape", "b2CircleShape");
	vh(this, wh, "b2PolygonShape", "b2CircleShape");
	vh(this, xh, "b2PolygonShape", "b2PolygonShape");
	vh(this, yh, "b2EdgeShape", "b2CircleShape");
	vh(this, zh, "b2PolygonShape", "b2EdgeShape")
}
function vh(a, c, b, d) {
	a.k[b] = a.k[b] || {};
	a.k[b][d] = a.k[b][d] || [];
	a.j[b] = a.j[b] || {};
	a.j[b][d] = new Ah;
	a.j[b][d].Rr = c;
	a.j[b][d].Lt = !0;
	b != d && (a.j[d] = a.j[d] || {}, a.j[d][b] = new Ah, a.j[d][b].Rr = c, a.j[d][b].Lt = !1)
}
wg.prototype.u = function(a, c) {
	var b = a.lc.Ah(),
		d = c.lc.Ah(),
		f = this.j[b][d],
		h = f.Rr;
	return null != h ? f.Lt ? 0 < this.k[b][d].length ? (b = this.k[b][d].pop(), b.Dc(a, c), b) : new h(a, c) : 0 < this.k[d][b].length ? (b = this.k[d][b].pop(), b.Dc(c, a), b) : new h(c, a) : null
};
wg.prototype.qd = function(a) {
	this.k[a.Zb.lc.Ah()][a.Mb.lc.Ah()].push(a)
};

function Of() {
	this.k = [];
	for (var a = 0; a <= xg; a++) this.k[a] = null;
	this.u = [];
	for (a = 0; a <= xg; a++) this.u[a] = null;
	this.j = {}
}
Of.prototype.eb = function(a) {
	return this.k[a]
};

function ph(a, c) {
	var b = c.k;
	if (null == a.j[b]) {
		a.j[b] = [];
		for (var d = 0; d <= xg; d++) a.j[b][d] = null;
		Bh(a, c, b, xg)
	}
}
function rh(a, c, b, d) {
	b ? Bh(a, c, c.k, Xg) : Ch(a, c.k, Xg);
	d ? Bh(a, c, c.k, ah) : Ch(a, c.k, ah)
}
function yg(a, c) {
	var b = c.k;
	if (null != a.j[b]) {
		for (var d = 0; d <= xg; d++) Ch(a, b, d);
		delete a.j[b]
	}
}
function Ch(a, c, b) {
	var d = a.j[c];
	if (null != d && (c = d[b], null != c)) {
		d[b] = null;
		var d = c.j,
			f = c.Pa();
		null == d ? a.k[b] = f : d.next = f;
		null == f ? a.u[b] = d : f.Jf(d);
		Dh.push(c)
	}
}

function Bh(a, c, b, d) {
	b = a.j[b];
	if (null == b[d]) {
		if (0 < Dh.length) {
			var f = Dh.pop();
			f.next = null;
			f.j = null;
			f.tc = c;
			c = f
		} else c = new Eh(c);
		b[d] = c;
		c = a.u[d];
		null != c ? (c.next = b[d], b[d].Jf(c)) : a.k[d] = b[d];
		a.u[d] = b[d]
	}
}
var Xg = 0,
	ah = 1,
	xg = 2;

function Eh(a) {
	this.tc = a;
	this.j = this.next = null
}
var Dh = [];
Eh.prototype.Jf = function(a) {
	this.j = a
};
Eh.prototype.Pa = function() {
	return this.next
};

function Ah() {}
function Ig() {
	this.j = []
}

function Yg(a, c, b) {
	for (a.k = b; a.j.length < a.k;) a.j[a.j.length] = new th;
	for (var d = 0; d < b; d++) {
		var f = c[d],
			h = f.Zb,
			e = f.Mb,
			g = h.lc.$a,
			l = e.lc.$a,
			n = h.cb(),
			k = e.cb(),
			f = f.le,
			m = Math.sqrt(h.O * e.O),
			q, h = h.K,
			e = e.K;
		q = h > e ? h : e;
		var e = n.A.x,
			h = n.A.y,
			p = k.A.x,
			t = k.A.y,
			u = n.J,
			v = k.J,
			r = f,
			z = n.H,
			B = g,
			D = k.H,
			A = l,
			C = Fh;
		if (0 != r.Nb) {
			var E = 0,
				w = void 0,
				x = void 0,
				K = 0,
				H = 0,
				P = 0,
				O = 0,
				Q = 0,
				w = 0;
			switch (r.ab) {
			case 1:
				x = z.B;
				w = r.za;
				E = z.position.x + x.n.x * w.x + x.q.x * w.y;
				z = z.position.y + x.n.y * w.x + x.q.y * w.y;
				x = D.B;
				w = r.pa[0].za;
				r = D.position.x + x.n.x * w.x + x.q.x * w.y;
				D = D.position.y + x.n.y * w.x + x.q.y * w.y;
				w = r - E;
				x = D - z;
				K = w * w + x * x;
				K > Id ? (K = Math.sqrt(K), C.j.x = w / K, C.j.y = x / K) : (C.j.x = 1, C.j.y = 0);
				w = z + B * C.j.y;
				D = D - A * C.j.y;
				C.pa[0].x = .5 * (E + B * C.j.x + (r - A * C.j.x));
				C.pa[0].y = .5 * (w + D);
				break;
			case 2:
				x = z.B;
				w = r.Kc;
				K = x.n.x * w.x + x.q.x * w.y;
				H = x.n.y * w.x + x.q.y * w.y;
				x = z.B;
				w = r.za;
				P = z.position.x + x.n.x * w.x + x.q.x * w.y;
				O = z.position.y + x.n.y * w.x + x.q.y * w.y;
				C.j.x = K;
				C.j.y = H;
				for (E = 0; E < r.Nb; E++) x = D.B, w = r.pa[E].za, Q = D.position.x + x.n.x * w.x + x.q.x * w.y, w = D.position.y + x.n.y * w.x + x.q.y * w.y, C.pa[E].x = Q + .5 * (B - (Q - P) * K - (w - O) * H - A) * K, C.pa[E].y = w + .5 * (B - (Q - P) * K - (w - O) * H - A) * H;
				break;
			case 4:
				for (x = D.B, w = r.Kc, K = x.n.x * w.x + x.q.x * w.y, H = x.n.y * w.x + x.q.y * w.y, x = D.B, w = r.za, P = D.position.x + x.n.x * w.x + x.q.x * w.y, O = D.position.y + x.n.y * w.x + x.q.y * w.y, C.j.x = -K, C.j.y = -H, E = 0; E < r.Nb; E++) x = z.B, w = r.pa[E].za, Q = z.position.x + x.n.x * w.x + x.q.x * w.y, w = z.position.y + x.n.y * w.x + x.q.y * w.y, C.pa[E].x = Q + .5 * (A - (Q - P) * K - (w - O) * H - B) * K, C.pa[E].y = w + .5 * (A - (Q - P) * K - (w - O) * H - B) * H
			}
		}
		A = Fh.j.x;
		C = Fh.j.y;
		B = a.j[d];
		B.j = n;
		B.k = k;
		B.ea = f;
		B.C.x = A;
		B.C.y = C;
		B.I = f.Nb;
		B.Ug = m;
		B.nh = q;
		B.O.x = f.Kc.x;
		B.O.y = f.Kc.y;
		B.Lb.x = f.za.x;
		B.Lb.y = f.za.y;
		B.Y = g + l;
		B.type = f.ab;
		for (g = 0; g < B.I; ++g) m = f.pa[g], l = B.u[g], l.Ob = m.li, l.Hf = m.mi, l.Lb.P(m.za), m = l.Eb.x = Fh.pa[g].x - n.m.D.x, q = l.Eb.y = Fh.pa[g].y - n.m.D.y, D = l.Fb.x = Fh.pa[g].x - k.m.D.x, E = l.Fb.y = Fh.pa[g].y - k.m.D.y, r = m * C - q * A, w = D * C - E * A, r *= r, w *= w, l.gg = 1 / (n.N + k.N + n.W * r + k.W * w), x = n.X * n.N + k.X * k.N, x += n.X * n.W * r + k.X * k.W * w, l.qx = 1 / x, w = C, x = -A, r = m * x - q * w, w = D * x - E * w, r *= r, w *= w, l.fA = 1 / (n.N + k.N + n.W * r + k.W * w), l.kl = 0, m = B.C.x * (p + -v * E - e - -u * q) + B.C.y * (t + v * D - h - u * m), -1 > m && (l.kl += -B.nh * m);
		2 == B.I && (t = B.u[0], p = B.u[1], f = n.N, n = n.W, e = k.N, k = k.W, h = t.Eb.x * C - t.Eb.y * A, t = t.Fb.x * C - t.Fb.y * A, u = p.Eb.x * C - p.Eb.y * A, g = p.Fb.x * C - p.Fb.y * A, p = f + e + n * h * h + k * t * t, v = f + e + n * u * u + k * g * g, k = f + e + n * h * u + k * t * g, p * p < 100 * (p * v - k * k) ? (B.K.n.Set(p, k), B.K.q.Set(k, v), Vd(B.K, B.gg)) : B.I = 1)
	}
}

function Zg(a) {
	for (var c = 0; c < a.k; c++) {
		for (var b = a.j[c], d = b.C.x, f = b.C.y, h = 0; h < b.I; h++) {
			var e = b,
				g = b.u[h],
				l = e.C.y,
				n = -e.C.x,
				k = e.Ug * g.Ob,
				k = Rd(g.Hf - g.fA * ((e.k.A.x - e.k.J * g.Fb.y - e.j.A.x + e.j.J * g.Eb.y) * l + (e.k.A.y + e.k.J * g.Fb.x - e.j.A.y - e.j.J * g.Eb.x) * n), -k, k),
				m = k - g.Hf,
				l = m * l,
				n = m * n;
			e.j.A.x -= e.j.N * l;
			e.j.A.y -= e.j.N * n;
			e.j.J -= e.j.W * (g.Eb.x * n - g.Eb.y * l);
			e.k.A.x += e.k.N * l;
			e.k.A.y += e.k.N * n;
			e.k.J += e.k.W * (g.Fb.x * n - g.Fb.y * l);
			g.Hf = k
		}
		if (1 == b.I) h = b.u[0], e = h.Ob - h.gg * ((b.k.A.x - b.k.J * h.Fb.y - b.j.A.x + b.j.J * h.Eb.y) * d + (b.k.A.y + b.k.J * h.Fb.x - b.j.A.y - b.j.J * h.Eb.x) * f - h.kl), e = 0 < e ? e : 0, g = e - h.Ob, d = g * d, f = g * f, b.j.A.x -= b.j.N * d, b.j.A.y -= b.j.N * f, b.j.J -= b.j.W * (h.Eb.x * f - h.Eb.y * d), b.k.A.x += b.k.N * d, b.k.A.y += b.k.N * f, b.k.J += b.k.W * (h.Fb.x * f - h.Fb.y * d), h.Ob = e;
		else for (h = b.u[0], e = b.u[1], g = h.Ob, n = e.Ob, k = (b.k.A.x - b.k.J * h.Fb.y - b.j.A.x + b.j.J * h.Eb.y) * d + (b.k.A.y + b.k.J * h.Fb.x - b.j.A.y - b.j.J * h.Eb.x) * f - h.kl, f = (b.k.A.x - b.k.J * e.Fb.y - b.j.A.x + b.j.J * e.Eb.y) * d + (b.k.A.y + b.k.J * e.Fb.x - b.j.A.y - b.j.J * e.Eb.x) * f - e.kl, k -= b.K.n.x * g + b.K.q.x * n, f -= b.K.n.y * g + b.K.q.y * n;;) {
			d = -(b.gg.n.x * k + b.gg.q.x * f);
			if (0 <= d && (l = -(b.gg.n.y * k + b.gg.q.y * f), 0 <= l)) {
				Hh(b, h, e, d - g, l - n);
				h.Ob = d;
				e.Ob = l;
				break
			}
			d = -h.gg * k;
			if (0 <= d && 0 <= b.K.n.y * d + f) {
				Hh(b, h, e, d - g, -n);
				h.Ob = d;
				e.Ob = 0;
				break
			}
			d = -e.gg * f;
			if (0 <= d && 0 <= b.K.q.x * d + k) {
				Hh(b, h, e, -g, d - n);
				h.Ob = 0;
				e.Ob = d;
				break
			}
			if (0 <= k && 0 <= f) {
				Hh(b, h, e, -g, -n);
				h.Ob = 0;
				e.Ob = 0;
				break
			}
			break
		}
	}
}

function Hh(a, c, b, d, f) {
	var h = d * a.C.x;
	d *= a.C.y;
	var e = f * a.C.x;
	f *= a.C.y;
	a.j.A.x -= a.j.N * (h + e);
	a.j.A.y -= a.j.N * (d + f);
	a.j.J -= a.j.W * (c.Eb.x * d - c.Eb.y * h + b.Eb.x * f - b.Eb.y * e);
	a.k.A.x += a.k.N * (h + e);
	a.k.A.y += a.k.N * (d + f);
	a.k.J += a.k.W * (c.Fb.x * d - c.Fb.y * h + b.Fb.x * f - b.Fb.y * e);
	c.Ob = 0;
	b.Ob = 0
}

function $g(a, c) {
	void 0 === c && (c = 0);
	for (var b = 0, d = 0; d < a.k; d++) {
		var f = a.j[d],
			h = f.j,
			e = f.k,
			g = h.X * h.N,
			l = h.X * h.W,
			n = e.X * e.N,
			k = e.X * e.W,
			m = f,
			q = Mh;
		switch (m.type) {
		case 1:
			var p = m.j.H.B,
				t = m.Lb,
				u = m.j.H.position.x + (p.n.x * t.x + p.q.x * t.y),
				v = m.j.H.position.y + (p.n.y * t.x + p.q.y * t.y),
				p = m.k.H.B,
				t = m.u[0].Lb,
				r = m.k.H.position.x + (p.n.x * t.x + p.q.x * t.y),
				p = m.k.H.position.y + (p.n.y * t.x + p.q.y * t.y),
				t = r - u,
				z = p - v,
				B = t * t + z * z;
			B > Id ? (B = Math.sqrt(B), q.j.x = t / B, q.j.y = z / B) : (q.j.x = 1, q.j.y = 0);
			q.pa[0].x = .5 * (u + r);
			q.pa[0].y = .5 * (v + p);
			q.k[0] = t * q.j.x + z * q.j.y - m.Y;
			break;
		case 2:
			q.j.x = m.j.H.B.n.x * m.O.x + m.j.H.B.q.x * m.O.y;
			q.j.y = m.j.H.B.n.y * m.O.x + m.j.H.B.q.y * m.O.y;
			u = m.j.H.position.x + (m.j.H.B.n.x * m.Lb.x + m.j.H.B.q.x * m.Lb.y);
			v = m.j.H.position.y + (m.j.H.B.n.y * m.Lb.x + m.j.H.B.q.y * m.Lb.y);
			for (r = 0; r < m.I; r++) p = m.k.H.position.x + (m.k.H.B.n.x * m.u[r].Lb.x + m.k.H.B.q.x * m.u[r].Lb.y), t = m.k.H.position.y + (m.k.H.B.n.y * m.u[r].Lb.x + m.k.H.B.q.y * m.u[r].Lb.y), q.k[r] = (p - u) * q.j.x + (t - v) * q.j.y - m.Y, q.pa[r].x = p, q.pa[r].y = t;
			break;
		case 4:
			q.j.x = m.k.H.B.n.x * m.O.x + m.k.H.B.q.x * m.O.y;
			q.j.y = m.k.H.B.n.y * m.O.x + m.k.H.B.q.y * m.O.y;
			u = m.k.H.position.x + (m.k.H.B.n.x * m.Lb.x + m.k.H.B.q.x * m.Lb.y);
			v = m.k.H.position.y + (m.k.H.B.n.y * m.Lb.x + m.k.H.B.q.y * m.Lb.y);
			for (r = 0; r < m.I; r++) p = m.j.H.position.x + (m.j.H.B.n.x * m.u[r].Lb.x + m.j.H.B.q.x * m.u[r].Lb.y), t = m.j.H.position.y + (m.j.H.B.n.y * m.u[r].Lb.x + m.j.H.B.q.y * m.u[r].Lb.y), q.k[r] = (p - u) * q.j.x + (t - v) * q.j.y - m.Y, q.pa[r].Set(p, t);
			q.j.x *= -1;
			q.j.y *= -1
		}
		q = Mh.j;
		for (m = 0; m < f.I; m++) t = f.u[m], p = Mh.pa[m], z = Mh.k[m], u = p.x - h.m.D.x, v = p.y - h.m.D.y, r = p.x - e.m.D.x, p = p.y - e.m.D.y, b = b < z ? b : z, z = -t.qx * Rd(c * (z + .005), -.2, 0), t = z * q.x, z *= q.y, h.m.D.x -= g * t, h.m.D.y -= g * z, h.m.R -= l * (u * z - v * t), dg(h), e.m.D.x += n * t, e.m.D.y += n * z, e.m.R += k * (r * z - p * t), dg(e)
	}
	return -.0075 < b
}
function yh(a, c) {
	mh.call(this, a, c)
}
zd(yh, mh);
yh.prototype.Dc = function(a, c) {
	mh.prototype.Dc.call(this, a, c)
};
yh.prototype.u = function() {};

function wh(a, c) {
	mh.call(this, a, c)
}
zd(wh, mh);
wh.prototype.Dc = function(a, c) {
	mh.prototype.Dc.call(this, a, c)
};
wh.prototype.u = function() {
	a: {
		var a = this.le,
			c = this.Zb.lc,
			b = this.Zb.cb().H,
			d = this.Mb.lc,
			f = this.Mb.cb().H;
		a.Nb = 0;
		for (var h = f.position.x + (f.B.n.x * d.lb.x + f.B.q.x * d.lb.y) - b.position.x, e = f.position.y + (f.B.n.y * d.lb.x + f.B.q.y * d.lb.y) - b.position.y, f = h * b.B.n.x + e * b.B.n.y, b = h * b.B.q.x + e * b.B.q.y, h = 0, e = -Number.MAX_VALUE, g = c.$a + d.$a, l = 0; l < c.hb; ++l) {
			var n = c.ob[l].x * (f - c.T[l].x) + c.ob[l].y * (b - c.T[l].y);
			if (n > g) break a;
			n > e && (e = n, h = l)
		}
		n = h + 1;
		n >= c.hb && (n = 0);
		var l = c.T[h],
			k = c.T[n];
		e < Number.MIN_VALUE ? (a.Nb = 1, a.ab = 2, a.Kc.P(c.ob[h]), a.za.x = .5 * (l.x + k.x), a.za.y = .5 * (l.y + k.y), a.pa[0].za.P(d.lb), He(a.pa[0].Je, 0)) : 0 >= (f - l.x) * (k.x - l.x) + (b - l.y) * (k.y - l.y) ? (f - l.x) * (f - l.x) + (b - l.y) * (b - l.y) > g * g || (a.Nb = 1, a.ab = 2, a.Kc.x = f - l.x, a.Kc.y = b - l.y, xe(a.Kc), a.za.P(l), a.pa[0].za.P(d.lb), He(a.pa[0].Je, 0)) : 0 >= (f - k.x) * (l.x - k.x) + (b - k.y) * (l.y - k.y) ? (f - k.x) * (f - k.x) + (b - k.y) * (b - k.y) > g * g || (a.Nb = 1, a.ab = 2, a.Kc.x = f - k.x, a.Kc.y = b - k.y, xe(a.Kc), a.za.P(k), a.pa[0].za.P(d.lb), He(a.pa[0].Je, 0)) : (n = .5 * (l.x + k.x), l = .5 * (l.y + k.y), e = (f - n) * c.ob[h].x + (b - l) * c.ob[h].y, e > g || (a.Nb = 1, a.ab = 2, a.Kc.x = c.ob[h].x, a.Kc.y = c.ob[h].y, xe(a.Kc), a.za.Set(n, l), a.pa[0].za.P(d.lb), He(a.pa[0].Je, 0)))
	}
};

function zh(a, c) {
	mh.call(this, a, c)
}
zd(zh, mh);
zh.prototype.Dc = function(a, c) {
	mh.prototype.Dc.call(this, a, c)
};
zh.prototype.u = function() {};

function xh(a, c) {
	mh.call(this, a, c)
}
zd(xh, mh);
xh.prototype.Dc = function(a, c) {
	mh.prototype.Dc.call(this, a, c)
};
xh.prototype.u = function() {
	var a = this.le,
		c = this.Zb.lc,
		b = this.Zb.cb().H,
		d = this.Mb.lc,
		f = this.Mb.cb().H;
	a.Nb = 0;
	var h = c.$a + d.$a,
		e = Te(c, b, d, f),
		g = e.Gr;
	if (!(e.vn > h)) {
		var l = Te(d, f, c, b);
		if (!(l.vn > h)) {
			var n = c,
				k = d,
				m = b,
				q = f,
				p = 0;
			a.ab = 2;
			l.vn > .98 * e.vn + .001 && (n = d, k = c, m = f, q = b, g = l.Gr, a.ab = 4, p = 1);
			c = g;
			b = k;
			d = q;
			k = Rh;
			void 0 === c && (c = 0);
			for (var e = m.B.n.x * n.ob[c].x + m.B.q.x * n.ob[c].y, l = m.B.n.y * n.ob[c].x + m.B.q.y * n.ob[c].y, f = d.B.n.x * e + d.B.n.y * l, l = d.B.q.x * e + d.B.q.y * l, e = f, f = 0, t = Number.MAX_VALUE, u = 0; u < b.hb; u++) {
				var v = e * b.ob[u].x + l * b.ob[u].y;
				v < t && (t = v, f = u)
			}
			e = f + 1;
			e >= b.hb && (e = 0);
			k[0].ue.x = d.position.x + (d.B.n.x * b.T[f].x + d.B.q.x * b.T[f].y);
			k[0].ue.y = d.position.y + (d.B.n.y * b.T[f].x + d.B.q.y * b.T[f].y);
			l = k[0].id;
			l.u = c;
			l.Ub = l.Ub & 4294967040 | l.u & 255;
			l = k[0].id;
			l.j = f;
			l.Ub = l.Ub & 4294902015 | l.j << 8 & 65280;
			f = k[0].id;
			f.k = 0;
			f.Ub = f.Ub & 4278255615 | f.k << 16 & 16711680;
			k[1].ue.x = d.position.x + (d.B.n.x * b.T[e].x + d.B.q.x * b.T[e].y);
			k[1].ue.y = d.position.y + (d.B.n.y * b.T[e].x + d.B.q.y * b.T[e].y);
			b = k[1].id;
			b.u = c;
			b.Ub = b.Ub & 4294967040 | b.u & 255;
			c = k[1].id;
			c.j = e;
			c.Ub = c.Ub & 4294902015 | c.j << 8 & 65280;
			c = k[1].id;
			c.k = 1;
			c.Ub = c.Ub & 4278255615 | c.k << 16 & 16711680;
			c = n.T[g];
			g = g + 1 < n.hb ? n.T[g + 1] : n.T[0];
			Sh.Set(g.x - c.x, g.y - c.y);
			xe(Sh);
			Th.x = Sh.y;
			Th.y = -Sh.x;
			Uh.Set(.5 * (c.x + g.x), .5 * (c.y + g.y));
			Yh.x = m.B.n.x * Sh.x + m.B.q.x * Sh.y;
			Yh.y = m.B.n.y * Sh.x + m.B.q.y * Sh.y;
			Zh.x = -Yh.x;
			Zh.y = -Yh.y;
			$h.x = Yh.y;
			$h.y = -Yh.x;
			ai.x = m.position.x + (m.B.n.x * c.x + m.B.q.x * c.y);
			ai.y = m.position.y + (m.B.n.y * c.x + m.B.q.y * c.y);
			bi.x = m.position.x + (m.B.n.x * g.x + m.B.q.x * g.y);
			bi.y = m.position.y + (m.B.n.y * g.x + m.B.q.y * g.y);
			if (!(2 > Re(ci, Rh, Zh, -Yh.x * ai.x - Yh.y * ai.y + h) || 2 > Re(di, ci, Yh, Yh.x * bi.x + Yh.y * bi.y + h))) {
				a.Kc.P(Th);
				a.za.P(Uh);
				m = $h.x * ai.x + $h.y * ai.y;
				for (n = g = 0; 2 > n; ++n) $h.x * di[n].ue.x + $h.y * di[n].ue.y - m <= h && (c = di[n].ue.x - q.position.x, k = di[n].ue.y - q.position.y, a.pa[g].za.x = c * q.B.n.x + k * q.B.n.y, a.pa[g].za.y = c * q.B.q.x + k * q.B.q.y, a.pa[g].Je.Set(di[n].id), c = a.pa[g].Je, c.C = p, c.Ub = c.Ub & 16777215 | c.C << 24 & 4278190080, g++);
				a.Nb = g
			}
		}
	}
};

function ei() {
	this.I = "Controller" + fi++;
	this.Zd = null;
	this.j = new gg
}
ei.prototype.Hg = function() {};
ei.prototype.sl = function(a) {
	this.j.sl(a);
	a = a.ba;
	var c = this.I,
		b = a.k[c];
	if (null != b) {
		var d = b.j(),
			b = b.Pa();
		null == d ? a.j = b : d.k(b);
		null == b || b.Jf(d);
		delete a.k[c]
	}
};
var fi = 0;

function gi() {
	ei.call(this);
	this.u = Z(0, -1);
	this.Rg = this.offset = 0;
	this.C = Z(0, 0);
	this.k = null
}
zd(gi, ei);
gi.prototype.Hg = function() {
	this.k = this.Zd.k.qc();
	for (var a = this.j.eb(ng); a; a = a.Pa()) {
		for (var c = a.body, b = Z(0, 0), d = Z(0, 0), f = 0, h = 0, e = c.u.eb(); e; e = e.Pa()) {
			var g = Z(0, 0),
				l = e.Ee.lc.pl(this.u, this.offset, c.Rd(), g),
				f = f + l;
			b.x += l * g.x;
			b.y += l * g.y;
			var n = 0,
				n = 1,
				h = h + l * n;
			d.x += l * g.x * n;
			d.y += l * g.y * n
		}
		f < Number.MIN_VALUE || (b.x /= f, b.y /= f, d.x /= h, d.y /= h, h = this.k.Fg(), h.ee(this.Rg * f), c.wh(h, d), h = Z(c.A.x - c.J * (b.y - c.m.D.y), c.A.y + c.J * (b.x - c.m.D.x)), h.sr(this.C), h.ee(-2 * f), c.wh(h, b), c.Vn(-c.j / c.X * f * c.J * 1), ue(b), ue(d))
	}
};

function hi() {
	ei.call(this);
	this.k = Z(0, 0)
}
zd(hi, ei);
hi.prototype.Hg = function(a) {
	a = Z(this.k.x * a.Ha, this.k.y * a.Ha);
	for (var c = this.j.eb(ng); c; c = c.Pa()) {
		var b = c.body,
			d = b.A;
		Yf(b, Z(d.x + a.x, d.y + a.y))
	}
	ue(a)
};

function ii() {
	ei.call(this);
	this.k = Z(0, 0)
}
zd(ii, ei);
ii.prototype.Hg = function() {
	for (var a = this.j.eb(ng); a; a = a.Pa()) {
		var c = a.body;
		c.wh(this.k, c.m.D)
	}
};

function Pf() {
	this.j = null;
	this.k = {}
}
Pf.prototype.eb = function() {
	return this.j
};

function ji() {
	ei.call(this)
}
zd(ji, ei);
ji.prototype.Hg = function() {
	for (var a = null, c = null, b = 0, d = null, f = null, h = 0, e = 0, g = 0, h = null, l = this.j.eb(hg); l; l = l.Pa()) for (var a = l.body, c = a.m.D, b = a.X, n = this.j.eb(hg); n; n = n.Pa()) if (d = n.body, a.Yd || d.Yd) f = d.m.D, h = f.x - c.x, e = f.y - c.y, g = h * h + e * e, g < Number.MIN_VALUE || (h = Z(h, e), h.ee(1 / g / Math.sqrt(g) * b * d.X), a.Yd && a.wh(h, c), h.ee(-1), d.Yd && d.wh(h, f), ue(h))
};

function ki() {
	ei.call(this);
	this.u = new Sd;
	this.k = 0
}
zd(ki, ei);
ki.prototype.Hg = function(a) {
	a = a.Ha;
	if (!(a <= Number.MIN_VALUE)) {
		a > this.k && 0 < this.k && (a = this.k);
		for (var c = this.j.eb(ng); c; c = c.Pa()) {
			var b = c.body,
				d;
			d = Md(this.u, Nd(b.H.B, b.A));
			d = Md(b.H.B, d);
			Yf(b, Z(b.A.x + d.x * a, b.A.y + d.y * a))
		}
	}
};

function li(a) {
	this.wd = new mi;
	this.xd = new mi;
	this.pf = Z(0, 0);
	this.qf = Z(0, 0);
	this.ab = a.type;
	this.fh = this.hj = null;
	this.Z = a.j;
	this.aa = a.k;
	this.Zs = a.O
}
y = li.prototype;
y.Pc = function() {
	return this.ab
};
y.Bh = function() {
	return this.Z.Bh() && this.aa.Bh()
};
y.mf = function() {};
y.of = function() {};
y.nf = function() {
	return !1
};

function ni() {
	this.type = 0;
	this.k = this.j = null;
	this.O = !1
}
function mi() {}
function oi(a) {
	li.call(this, a);
	this.la = Z(0, 0);
	this.ma = Z(0, 0);
	this.j = Z(0, 0);
	this.la.P(a.K);
	this.ma.P(a.Y);
	this.I = a.length;
	this.C = a.I;
	this.K = a.C;
	this.O = this.u = this.k = 0
}
zd(oi, li);
oi.prototype.mf = function(a) {
	var c, b = 0,
		d = this.Z,
		f = this.aa;
	c = d.H.B;
	var h = this.la.x - d.m.S.x,
		e = this.la.y - d.m.S.y,
		b = c.n.x * h + c.q.x * e,
		e = c.n.y * h + c.q.y * e,
		h = b;
	c = f.H.B;
	var g = this.ma.x - f.m.S.x,
		l = this.ma.y - f.m.S.y,
		b = c.n.x * g + c.q.x * l,
		l = c.n.y * g + c.q.y * l,
		g = b;
	this.j.x = f.m.D.x + g - d.m.D.x - h;
	this.j.y = f.m.D.y + l - d.m.D.y - e;
	b = Math.sqrt(this.j.x * this.j.x + this.j.y * this.j.y);.005 < b ? this.j.ee(1 / b) : this.j.ta();
	c = h * this.j.y - e * this.j.x;
	var n = g * this.j.y - l * this.j.x;
	c = d.N + d.W * c * c + f.N + f.W * n * n;
	this.X = 0 != c ? 1 / c : 0;
	if (0 < this.C) {
		var b = b - this.I,
			n = 2 * Math.PI * this.C,
			k = this.X * n * n;
		this.u = a.Ha * (2 * this.X * this.K * n + a.Ha * k);
		this.u = 0 != this.u ? 1 / this.u : 0;
		this.O = b * a.Ha * k * this.u;
		this.X = c + this.u;
		this.X = 0 != this.X ? 1 / this.X : 0
	}
	a.Ag ? (this.k *= a.hc, a = this.k * this.j.x, c = this.k * this.j.y, d.A.x -= d.N * a, d.A.y -= d.N * c, d.J -= d.W * (h * c - e * a), f.A.x += f.N * a, f.A.y += f.N * c, f.J += f.W * (g * c - l * a)) : this.k = 0
};
oi.prototype.of = function() {
	var a = this.la.x - this.Z.m.S.x,
		c = this.la.y - this.Z.m.S.y,
		b = this.Z.H.B.n.x * a + this.Z.H.B.q.x * c,
		c = this.Z.H.B.n.y * a + this.Z.H.B.q.y * c,
		a = b,
		d = this.ma.x - this.aa.m.S.x,
		f = this.ma.y - this.aa.m.S.y,
		b = this.aa.H.B.n.x * d + this.aa.H.B.q.x * f,
		f = this.aa.H.B.n.y * d + this.aa.H.B.q.y * f,
		d = b,
		h = -this.X * (this.j.x * (this.aa.A.x - this.aa.J * f - (this.Z.A.x - this.Z.J * c)) + this.j.y * (this.aa.A.y + this.aa.J * d - (this.Z.A.y + this.Z.J * a)) + this.O + this.u * this.k);
	this.k += h;
	b = h * this.j.x;
	h *= this.j.y;
	this.Z.A.x -= this.Z.N * b;
	this.Z.A.y -= this.Z.N * h;
	this.Z.J -= this.Z.W * (a * h - c * b);
	this.aa.A.x += this.aa.N * b;
	this.aa.A.y += this.aa.N * h;
	this.aa.J += this.aa.W * (d * h - f * b)
};
oi.prototype.nf = function() {
	if (0 < this.C) return !0;
	var a = this.la.x - this.Z.m.S.x,
		c = this.la.y - this.Z.m.S.y,
		b = this.Z.H.B.n.x * a + this.Z.H.B.q.x * c,
		c = this.Z.H.B.n.y * a + this.Z.H.B.q.y * c,
		a = b,
		d = this.ma.x - this.aa.m.S.x,
		f = this.ma.y - this.aa.m.S.y,
		b = this.aa.H.B.n.x * d + this.aa.H.B.q.x * f,
		f = this.aa.H.B.n.y * d + this.aa.H.B.q.y * f,
		d = b,
		h = this.aa.m.D.x + d - this.Z.m.D.x - a,
		e = this.aa.m.D.y + f - this.Z.m.D.y - c,
		g = Math.sqrt(h * h + e * e),
		b = Rd(g - this.I, -.2, .2),
		l = -this.X * b;
	this.j.Set(h / g, e / g);
	h = l * this.j.x;
	l *= this.j.y;
	this.Z.m.D.x -= this.Z.N * h;
	this.Z.m.D.y -= this.Z.N * l;
	this.Z.m.R -= this.Z.W * (a * l - c * h);
	this.aa.m.D.x += this.aa.N * h;
	this.aa.m.D.y += this.aa.N * l;
	this.aa.m.R += this.aa.W * (d * l - f * h);
	dg(this.Z);
	dg(this.aa);
	return .005 > Math.abs(b)
};

function pi() {
	ni.call(this);
	this.K = Z(0, 0);
	this.Y = Z(0, 0);
	this.type = 3;
	this.length = 1;
	this.C = this.I = 0
}
zd(pi, ni);
pi.prototype.u = function() {
	return new oi(this)
};

function qi(a) {
	li.call(this, a);
	this.u = Z(0, 0);
	this.C = Z(0, 0);
	this.O = new Sd;
	this.j = Z(0, 0);
	this.u.P(a.C);
	this.C.P(a.I);
	this.O.ta();
	this.I = 0;
	this.j.ta();
	this.k = 0;
	this.K = a.K;
	this.Y = a.Y
}
zd(qi, li);
qi.prototype.mf = function(a) {
	var c, b = 0,
		d = this.Z,
		f = this.aa;
	c = d.H.B;
	var h = this.u.x - d.m.S.x,
		e = this.u.y - d.m.S.y,
		b = c.n.x * h + c.q.x * e,
		e = c.n.y * h + c.q.y * e,
		h = b;
	c = f.H.B;
	var g = this.C.x - f.m.S.x,
		l = this.C.y - f.m.S.y,
		b = c.n.x * g + c.q.x * l,
		l = c.n.y * g + c.q.y * l,
		g = b;
	c = d.N;
	var b = f.N,
		n = d.W,
		k = f.W,
		m = new Sd;
	m.n.x = c + b;
	m.q.x = 0;
	m.n.y = 0;
	m.q.y = c + b;
	m.n.x += n * e * e;
	m.q.x += -n * h * e;
	m.n.y += -n * h * e;
	m.q.y += n * h * h;
	m.n.x += k * l * l;
	m.q.x += -k * g * l;
	m.n.y += -k * g * l;
	m.q.y += k * g * g;
	Vd(m, this.O);
	this.I = n + k;
	0 < this.I && (this.I = 1 / this.I);
	a.Ag ? (this.j.x *= a.hc, this.j.y *= a.hc, this.k *= a.hc, a = this.j, d.A.x -= c * a.x, d.A.y -= c * a.y, d.J -= n * (h * a.y - e * a.x + this.k), f.A.x += b * a.x, f.A.y += b * a.y, f.J += k * (g * a.y - l * a.x + this.k)) : (this.j.ta(), this.k = 0)
};
qi.prototype.of = function(a) {
	var c, b = 0,
		d = this.Z,
		f = this.aa,
		h = d.A,
		e = d.J,
		g = f.A,
		l = f.J,
		n = d.N,
		k = f.N,
		m = d.W,
		q = f.W;
	c = d.H.B;
	var p = this.u.x - d.m.S.x,
		t = this.u.y - d.m.S.y,
		b = c.n.x * p + c.q.x * t,
		t = c.n.y * p + c.q.y * t,
		p = b;
	c = f.H.B;
	var u = this.C.x - f.m.S.x,
		v = this.C.y - f.m.S.y,
		b = c.n.x * u + c.q.x * v,
		v = c.n.y * u + c.q.y * v,
		u = b;
	c = 0;
	var b = -this.I * (l - e),
		r = this.k;
	c = a.Ha * this.Y;
	this.k = Rd(this.k + b, -c, c);
	b = this.k - r;
	e -= m * b;
	l += q * b;
	c = Md(this.O, Z(-(g.x - l * v - h.x + e * t), -(g.y + l * u - h.y - e * p)));
	b = this.j.qc();
	this.j.lf(c);
	c = a.Ha * this.K;
	we(this.j) > c * c && (xe(this.j), this.j.ee(c));
	c = Qd(this.j, b);
	h.x -= n * c.x;
	h.y -= n * c.y;
	e -= m * (p * c.y - t * c.x);
	g.x += k * c.x;
	g.y += k * c.y;
	l += q * (u * c.y - v * c.x);
	d.J = e;
	f.J = l
};
qi.prototype.nf = function() {
	return !0
};

function ri() {
	ni.call(this);
	this.C = Z(0, 0);
	this.I = Z(0, 0);
	this.type = 9;
	this.Y = this.K = 0
}
zd(ri, ni);
ri.prototype.u = function() {
	return new qi(this)
};

function si(a) {
	li.call(this, a);
	this.Y = Z(0, 0);
	this.ea = Z(0, 0);
	this.la = Z(0, 0);
	this.ma = Z(0, 0);
	this.j = new ti;
	var c = a.C.ab,
		b = a.I.ab;
	this.K = this.I = this.O = this.C = null;
	var d = 0,
		f = 0;
	this.Ga = a.C.Z;
	this.Z = a.C.aa;
	1 == c ? (this.C = a.C, this.Y.P(this.C.la), this.la.P(this.C.ma), d = ui(this.C)) : (this.O = a.C, this.Y.P(this.O.la), this.la.P(this.O.ma), d = this.O.Gj());
	this.Ka = a.I.Z;
	this.aa = a.I.aa;
	1 == b ? (this.I = a.I, this.ea.P(this.I.la), this.ma.P(this.I.ma), f = ui(this.I)) : (this.K = a.I, this.ea.P(this.K.la), this.ma.P(this.K.ma), f = this.K.Gj());
	this.k = a.ng;
	this.ba = d + this.k * f;
	this.u = 0
}
zd(si, li);
si.prototype.mf = function(a) {
	var c = this.Ga,
		b = this.Ka,
		d = this.Z,
		f = this.aa,
		h = 0,
		e = 0,
		g = 0,

		l = 0,
		n = g = 0,
		k = 0;
	this.j.ta();
	this.C ? (this.j.u = -1, k += d.W) : (c = c.H.B, e = this.O.Jd, h = c.n.x * e.x + c.q.x * e.y, e = c.n.y * e.x + c.q.y * e.y, c = d.H.B, g = this.la.x - d.m.S.x, l = this.la.y - d.m.S.y, n = c.n.x * g + c.q.x * l, l = c.n.y * g + c.q.y * l, g = n * e - l * h, this.j.j.Set(-h, -e), this.j.u = -g, k += d.N + d.W * g * g);
	this.I ? (this.j.C = -this.k, k += this.k * this.k * f.W) : (c = b.H.B, e = this.K.Jd, h = c.n.x * e.x + c.q.x * e.y, e = c.n.y * e.x + c.q.y * e.y, c = f.H.B, g = this.ma.x - f.m.S.x, l = this.ma.y - f.m.S.y, n = c.n.x * g + c.q.x * l, l = c.n.y * g + c.q.y * l, g = n * e - l * h, this.j.k.Set(-this.k * h, -this.k * e), this.j.C = -this.k * g, k += this.k * this.k * (f.N + f.W * g * g));
	this.X = 0 < k ? 1 / k : 0;
	a.Ag ? (d.A.x += d.N * this.u * this.j.j.x, d.A.y += d.N * this.u * this.j.j.y, d.J += d.W * this.u * this.j.u, f.A.x += f.N * this.u * this.j.k.x, f.A.y += f.N * this.u * this.j.k.y, f.J += f.W * this.u * this.j.C) : this.u = 0
};
si.prototype.of = function() {
	var a = this.Z,
		c = this.aa,
		b = this.j,
		d = a.A,
		f = a.J,
		h = c.A,
		e = c.J;
	void 0 === f && (f = 0);
	void 0 === e && (e = 0);
	b = -this.X * (b.j.x * d.x + b.j.y * d.y + b.u * f + (b.k.x * h.x + b.k.y * h.y) + b.C * e);
	this.u += b;
	a.A.x += a.N * b * this.j.j.x;
	a.A.y += a.N * b * this.j.j.y;
	a.J += a.W * b * this.j.u;
	c.A.x += c.N * b * this.j.k.x;
	c.A.y += c.N * b * this.j.k.y;
	c.J += c.W * b * this.j.C
};
si.prototype.nf = function() {
	var a = this.Z,
		c = this.aa,
		b = 0,
		d = 0;
	this.C ? b = ui(this.C) : b = this.O.Gj();
	this.I ? d = ui(this.I) : d = this.K.Gj();
	b = -this.X * (this.ba - (b + this.k * d));
	a.m.D.x += a.N * b * this.j.j.x;
	a.m.D.y += a.N * b * this.j.j.y;
	a.m.R += a.W * b * this.j.u;
	c.m.D.x += c.N * b * this.j.k.x;
	c.m.D.y += c.N * b * this.j.k.y;
	c.m.R += c.W * b * this.j.C;
	dg(a);
	dg(c);
	return !0
};

function vi() {
	ni.call(this);
	this.type = 6;
	this.I = this.C = null;
	this.ng = 1
}
zd(vi, ni);
vi.prototype.u = function() {
	return new si(this)
};

function ti() {
	this.j = Z(0, 0);
	this.k = Z(0, 0)
}
ti.prototype.ta = function() {
	this.j.ta();
	this.u = 0;
	this.k.ta();
	this.C = 0
};
ti.prototype.Set = function(a, c, b, d) {
	void 0 === c && (c = 0);
	void 0 === d && (d = 0);
	this.j.P(a);
	this.u = c;
	this.k.P(b);
	this.C = d
};

function wi(a) {
	li.call(this, a);
	this.la = Z(0, 0);
	this.ma = Z(0, 0);
	this.Jd = Z(0, 0);
	this.Sd = Z(0, 0);
	this.k = Z(0, 0);
	this.K = Z(0, 0);
	this.ba = new Sd;
	this.j = Z(0, 0);
	this.la.P(a.Y);
	this.ma.P(a.ea);
	this.Jd.P(a.C);
	this.Sd.x = -this.Jd.y;
	this.Sd.y = this.Jd.x;
	this.j.ta();
	this.La = this.mb = 0;
	this.rc = a.ba;
	this.Qc = a.mb;
	this.co = a.Ga;
	this.eo = a.Ka;
	this.Ch = a.I;
	this.Ij = a.K;
	this.fb = 0;
	this.k.ta();
	this.K.ta()
}
zd(wi, li);
wi.prototype.Gj = function() {
	var a = this.Z,
		c = this.aa,
		b = $f(a, this.la),
		d = $f(c, this.ma),
		c = d.x - b.x,
		b = d.y - b.y,
		a = Md(a.H.B, this.Jd);
	return a.x * c + a.y * b
};
wi.prototype.mf = function(a) {
	var c = this.Z,
		b = this.aa,
		d, f = 0;
	this.pf.P(c.m.S);
	this.qf.P(b.m.S);
	var h = c.Rd();
	b.Rd();
	d = c.H.B;
	var e = this.la.x - this.pf.x,
		g = this.la.y - this.pf.y,
		f = d.n.x * e + d.q.x * g,
		g = d.n.y * e + d.q.y * g,
		e = f;
	d = b.H.B;
	var l = this.ma.x - this.qf.x,
		n = this.ma.y - this.qf.y,
		f = d.n.x * l + d.q.x * n,
		n = d.n.y * l + d.q.y * n,
		l = f;
	d = b.m.D.x + l - c.m.D.x - e;
	f = b.m.D.y + n - c.m.D.y - g;
	this.Y = c.N;
	this.ea = b.N;
	this.Ga = c.W;
	this.Ka = b.W;
	this.k.P(Md(h.B, this.Jd));
	this.u = (d + e) * this.k.y - (f + g) * this.k.x;
	this.C = l * this.k.y - n * this.k.x;
	this.mb = this.Y + this.ea + this.Ga * this.u * this.u + this.Ka * this.C * this.C;
	this.mb = this.mb > Number.MIN_VALUE ? 1 / this.mb : 0;
	this.K.P(Md(h.B, this.Sd));
	this.I = (d + e) * this.K.y - (f + g) * this.K.x;
	this.O = l * this.K.y - n * this.K.x;
	h = this.Y;
	e = this.ea;
	g = this.Ga;
	l = this.Ka;
	this.ba.n.x = h + e + g * this.I * this.I + l * this.O * this.O;
	this.ba.n.y = g * this.I * this.u + l * this.O * this.C;
	this.ba.q.x = this.ba.n.y;
	this.ba.q.y = h + e + g * this.u * this.u + l * this.C * this.C;
	this.Ch ? (d = this.k.x * d + this.k.y * f, .01 > Math.abs(this.Qc - this.rc) ? this.fb = 3 : d <= this.rc ? 1 != this.fb && (this.fb = 1, this.j.y = 0) : d >= this.Qc ? 2 != this.fb && (this.fb = 2, this.j.y = 0) : (this.fb = 0, this.j.y = 0)) : this.fb = 0;
	0 == this.Ij && (this.La = 0);
	a.Ag ? (this.j.x *= a.hc, this.j.y *= a.hc, this.La *= a.hc, a = this.j.x * this.K.x + (this.La + this.j.y) * this.k.x, d = this.j.x * this.K.y + (this.La + this.j.y) * this.k.y, f = this.j.x * this.I + (this.La + this.j.y) * this.u, h = this.j.x * this.O + (this.La + this.j.y) * this.C, c.A.x -= this.Y * a, c.A.y -= this.Y * d, c.J -= this.Ga * f, b.A.x += this.ea * a, b.A.y += this.ea * d, b.J += this.Ka * h) : (this.j.ta(), this.La = 0)
};
wi.prototype.of = function(a) {
	var c = this.Z,
		b = this.aa,
		d = c.A,
		f = c.J,
		h = b.A,
		e = b.J,
		g = 0,
		l = 0,
		n = 0,
		k = 0;
	this.Ij && 3 != this.fb && (k = this.mb * (this.eo - (this.k.x * (h.x - d.x) + this.k.y * (h.y - d.y) + this.C * e - this.u * f)), g = this.La, l = a.Ha * this.co, this.La = Rd(this.La + k, -l, l), k = this.La - g, g = k * this.k.x, l = k * this.k.y, n = k * this.u, k *= this.C, d.x -= this.Y * g, d.y -= this.Y * l, f -= this.Ga * n, h.x += this.ea * g, h.y += this.ea * l, e += this.Ka * k);
	l = this.K.x * (h.x - d.x) + this.K.y * (h.y - d.y) + this.O * e - this.I * f;
	this.Ch && 0 != this.fb ? (n = this.k.x * (h.x - d.x) + this.k.y * (h.y - d.y) + this.C * e - this.u * f, g = this.j.qc(), a = Wd(this.ba, Z(0, 0), -l, -n), this.j.lf(a), 1 == this.fb ? this.j.y = Math.max(this.j.y, 0) : 2 == this.fb && (this.j.y = Math.min(this.j.y, 0)), l = -l - (this.j.y - g.y) * this.ba.q.x, n = 0, n = 0 != this.ba.n.x ? l / this.ba.n.x + g.x : g.x, this.j.x = n, a.x = this.j.x - g.x, a.y = this.j.y - g.y, g = a.x * this.K.x + a.y * this.k.x, l = a.x * this.K.y + a.y * this.k.y, n = a.x * this.I + a.y * this.u, k = a.x * this.O + a.y * this.C) : (a = 0, a = 0 != this.ba.n.x ? -l / this.ba.n.x : 0, this.j.x += a, g = a * this.K.x, l = a * this.K.y, n = a * this.I, k = a * this.O);
	d.x -= this.Y * g;
	d.y -= this.Y * l;
	f -= this.Ga * n;
	h.x += this.ea * g;
	h.y += this.ea * l;
	e += this.Ka * k;
	c.A.P(d);
	c.J = f;
	b.A.P(h);
	b.J = e
};
wi.prototype.nf = function() {
	var a = this.Z,
		c = this.aa,
		b = a.m.D,
		d = a.m.R,
		f = c.m.D,
		h = c.m.R,
		e, g = 0,
		l = 0,
		n = 0,
		k = 0,
		m = e = 0,
		q = 0,
		l = !1,
		p = 0,
		t = Td(d),
		n = Td(h);
	e = t;
	var q = this.la.x - this.pf.x,
		u = this.la.y - this.pf.y,
		g = e.n.x * q + e.q.x * u,
		u = e.n.y * q + e.q.y * u,
		q = g;
	e = n;
	n = this.ma.x - this.qf.x;
	k = this.ma.y - this.qf.y;
	g = e.n.x * n + e.q.x * k;
	k = e.n.y * n + e.q.y * k;
	n = g;
	e = f.x + n - b.x - q;
	g = f.y + k - b.y - u;
	if (this.Ch) {
		this.k = Md(t, this.Jd);
		this.u = (e + q) * this.k.y - (g + u) * this.k.x;
		this.C = n * this.k.y - k * this.k.x;
		var v = this.k.x * e + this.k.y * g;.01 > Math.abs(this.Qc - this.rc) ? (p = Rd(v, -.2, .2), m = Math.abs(v), l = !0) : v <= this.rc ? (p = Rd(v - this.rc + .005, -.2, 0), m = this.rc - v, l = !0) : v >= this.Qc && (p = Rd(v - this.Qc + .005, 0, .2), m = v - this.Qc, l = !0)
	}
	this.K = Md(t, this.Sd);
	this.I = (e + q) * this.K.y - (g + u) * this.K.x;
	this.O = n * this.K.y - k * this.K.x;
	t = Z(0, 0);
	u = this.K.x * e + this.K.y * g;
	m = Math.max(m, Math.abs(u));
	q = 0;
	l ? (l = this.Y, n = this.ea, k = this.Ga, e = this.Ka, this.ba.n.x = l + n + k * this.I * this.I + e * this.O * this.O, this.ba.n.y = k * this.I * this.u + e * this.O * this.C, this.ba.q.x = this.ba.n.y, this.ba.q.y = l + n + k * this.u * this.u + e * this.C * this.C, Wd(this.ba, t, -u, -p)) : (l = this.Y, n = this.ea, k = this.Ga, e = this.Ka, p = l + n + k * this.I * this.I + e * this.O * this.O, t.x = 0 != p ? -u / p : 0, t.y = 0);
	p = t.x * this.K.x + t.y * this.k.x;
	l = t.x * this.K.y + t.y * this.k.y;
	u = t.x * this.I + t.y * this.u;
	t = t.x * this.O + t.y * this.C;
	b.x -= this.Y * p;
	b.y -= this.Y * l;
	d -= this.Ga * u;
	f.x += this.ea * p;
	f.y += this.ea * l;
	h += this.Ka * t;
	a.m.R = d;
	c.m.R = h;
	dg(a);
	dg(c);
	return .005 >= m && q <= Ad
};

function zi() {
	ni.call(this);
	this.Y = Z(0, 0);
	this.ea = Z(0, 0);
	this.C = Z(0, 0);
	this.type = 7;
	this.C.Set(1, 0);
	this.I = !1;
	this.mb = this.ba = 0;
	this.K = !1;
	this.Ka = this.Ga = 0
}
zd(zi, ni);
zi.prototype.u = function() {
	return new wi(this)
};

function Ai(a) {
	li.call(this, a);
	this.la = Z(0, 0);
	this.ma = Z(0, 0);
	this.Jd = Z(0, 0);
	this.Sd = Z(0, 0);
	this.K = Z(0, 0);
	this.ba = Z(0, 0);
	this.k = new Xd;
	this.j = new Yd(0, 0, 0);
	this.la.P(a.Y);
	this.ma.P(a.ea);
	this.Jd.P(a.C);
	this.Sd.x = -this.Jd.y;
	this.Sd.y = this.Jd.x;
	this.ew = a.mb;
	this.j.ta();
	this.La = this.mb = 0;
	this.rc = a.ba;
	this.Qc = a.La;
	this.co = a.Ga;
	this.eo = a.Ka;
	this.Ch = a.I;
	this.Ij = a.K;
	this.fb = 0;
	this.K.ta();
	this.ba.ta()
}
zd(Ai, li);
Ai.prototype.Gj = function() {
	var a = this.Z,
		c = this.aa,
		b = $f(a, this.la),
		d = $f(c, this.ma),
		c = d.x - b.x,
		b = d.y - b.y,
		a = Md(a.H.B, this.Jd);
	return a.x * c + a.y * b
};
Ai.prototype.mf = function(a) {
	var c = this.Z,
		b = this.aa,
		d, f = 0;
	this.pf.P(c.m.S);
	this.qf.P(b.m.S);
	var h = c.Rd();
	b.Rd();
	d = c.H.B;
	var e = this.la.x - this.pf.x,
		g = this.la.y - this.pf.y,
		f = d.n.x * e + d.q.x * g,
		g = d.n.y * e + d.q.y * g,
		e = f;
	d = b.H.B;
	var l = this.ma.x - this.qf.x,
		n = this.ma.y - this.qf.y,
		f = d.n.x * l + d.q.x * n,
		n = d.n.y * l + d.q.y * n,
		l = f;
	d = b.m.D.x + l - c.m.D.x - e;
	f = b.m.D.y + n - c.m.D.y - g;
	this.Y = c.N;
	this.ea = b.N;
	this.Ga = c.W;
	this.Ka = b.W;
	this.K.P(Md(h.B, this.Jd));
	this.u = (d + e) * this.K.y - (f + g) * this.K.x;
	this.C = l * this.K.y - n * this.K.x;
	this.mb = this.Y + this.ea + this.Ga * this.u * this.u + this.Ka * this.C * this.C;
	this.mb > Number.MIN_VALUE && (this.mb = 1 / this.mb);
	this.ba.P(Md(h.B, this.Sd));
	this.I = (d + e) * this.ba.y - (f + g) * this.ba.x;
	this.O = l * this.ba.y - n * this.ba.x;
	h = this.Y;
	e = this.ea;
	g = this.Ga;
	l = this.Ka;
	this.k.n.x = h + e + g * this.I * this.I + l * this.O * this.O;
	this.k.n.y = g * this.I + l * this.O;
	this.k.n.z = g * this.I * this.u + l * this.O * this.C;
	this.k.q.x = this.k.n.y;
	this.k.q.y = g + l;
	this.k.q.z = g * this.u + l * this.C;
	this.k.j.x = this.k.n.z;
	this.k.j.y = this.k.q.z;
	this.k.j.z = h + e + g * this.u * this.u + l * this.C * this.C;
	this.Ch ? (d = this.K.x * d + this.K.y * f, .01 > Math.abs(this.Qc - this.rc) ? this.fb = 3 : d <= this.rc ? 1 != this.fb && (this.fb = 1, this.j.z = 0) : d >= this.Qc ? 2 != this.fb && (this.fb = 2, this.j.z = 0) : (this.fb = 0, this.j.z = 0)) : this.fb = 0;
	0 == this.Ij && (this.La = 0);
	a.Ag ? (this.j.x *= a.hc, this.j.y *= a.hc, this.La *= a.hc, a = this.j.x * this.ba.x + (this.La + this.j.z) * this.K.x, d = this.j.x * this.ba.y + (this.La + this.j.z) * this.K.y, f = this.j.x * this.I + this.j.y + (this.La + this.j.z) * this.u, h = this.j.x * this.O + this.j.y + (this.La + this.j.z) * this.C, c.A.x -= this.Y * a, c.A.y -= this.Y * d, c.J -= this.Ga * f, b.A.x += this.ea * a, b.A.y += this.ea * d, b.J += this.Ka * h) : (this.j.ta(), this.La = 0)
};
Ai.prototype.of = function(a) {
	var c = this.Z,
		b = this.aa,
		d = c.A,
		f = c.J,
		h = b.A,
		e = b.J,
		g = 0,
		l = 0,
		n = 0,
		k = 0;
	this.Ij && 3 != this.fb && (k = this.mb * (this.eo - (this.K.x * (h.x - d.x) + this.K.y * (h.y - d.y) + this.C * e - this.u * f)), g = this.La, a = a.Ha * this.co, this.La = Rd(this.La + k, -a, a), k = this.La - g, g = k * this.K.x, l = k * this.K.y, n = k * this.u, k *= this.C, d.x -= this.Y * g, d.y -= this.Y * l, f -= this.Ga * n, h.x += this.ea * g, h.y += this.ea * l, e += this.Ka * k);
	n = this.ba.x * (h.x - d.x) + this.ba.y * (h.y - d.y) + this.O * e - this.I * f;
	l = e - f;
	this.Ch && 0 != this.fb ? (a = this.K.x * (h.x - d.x) + this.K.y * (h.y - d.y) + this.C * e - this.u * f, g = this.j.qc(), a = pe(this.k, new Yd(0, 0, 0), -n, -l, -a), this.j.lf(a), 1 == this.fb ? this.j.z = Math.max(this.j.z, 0) : 2 == this.fb && (this.j.z = Math.min(this.j.z, 0)), n = -n - (this.j.z - g.z) * this.k.j.x, l = -l - (this.j.z - g.z) * this.k.j.y, l = oe(this.k, Z(0, 0), n, l), l.x += g.x, l.y += g.y, this.j.x = l.x, this.j.y = l.y, a.x = this.j.x - g.x, a.y = this.j.y - g.y, a.z = this.j.z - g.z, g = a.x * this.ba.x + a.z * this.K.x, l = a.x * this.ba.y + a.z * this.K.y, n = a.x * this.I + a.y + a.z * this.u, k = a.x * this.O + a.y + a.z * this.C, d.x -= this.Y * g, d.y -= this.Y * l, f -= this.Ga * n, h.x += this.ea * g, h.y += this.ea * l, e += this.Ka * k) : (a = oe(this.k, Z(0, 0), -n, -l), this.j.x += a.x, this.j.y += a.y, g = a.x * this.ba.x, l = a.x * this.ba.y, n = a.x * this.I + a.y, k = a.x * this.O + a.y, d.x -= this.Y * g, d.y -= this.Y * l, f -= this.Ga * n, h.x += this.ea * g, h.y += this.ea * l, e += this.Ka * k);
	c.A.P(d);
	c.J = f;
	b.A.P(h);
	b.J = e
};
Ai.prototype.nf = function() {
	var a = this.Z,
		c = this.aa,
		b = a.m.D,
		d = a.m.R,
		f = c.m.D,
		h = c.m.R,
		e, g = 0,
		l = 0,
		n = 0,
		k = g = e = 0,
		m = 0,
		l = !1,
		q = 0,
		p = Td(d),
		t = Td(h);
	e = p;
	var m = this.la.x - this.pf.x,
		u = this.la.y - this.pf.y,
		g = e.n.x * m + e.q.x * u,
		u = e.n.y * m + e.q.y * u,
		m = g;
	e = t;
	t = this.ma.x - this.qf.x;
	n = this.ma.y - this.qf.y;
	g = e.n.x * t + e.q.x * n;
	n = e.n.y * t + e.q.y * n;
	t = g;
	e = f.x + t - b.x - m;
	g = f.y + n - b.y - u;
	if (this.Ch) {
		this.K = Md(p, this.Jd);
		this.u = (e + m) * this.K.y - (g + u) * this.K.x;
		this.C = t * this.K.y - n * this.K.x;
		var v = this.K.x * e + this.K.y * g;.01 > Math.abs(this.Qc - this.rc) ? (q = Rd(v, -.2, .2), k = Math.abs(v), l = !0) : v <= this.rc ? (q = Rd(v - this.rc + .005, -.2, 0), k = this.rc - v, l = !0) : v >= this.Qc && (q = Rd(v - this.Qc + .005, 0, .2), k = v - this.Qc, l = !0)
	}
	this.ba = Md(p, this.Sd);
	this.I = (e + m) * this.ba.y - (g + u) * this.ba.x;
	this.O = t * this.ba.y - n * this.ba.x;
	p = new Yd(0, 0, 0);
	u = this.ba.x * e + this.ba.y * g;
	t = h - d - this.ew;
	k = Math.max(k, Math.abs(u));
	m = Math.abs(t);
	l ? (l = this.Y, n = this.ea, e = this.Ga, g = this.Ka, this.k.n.x = l + n + e * this.I * this.I + g * this.O * this.O, this.k.n.y = e * this.I + g * this.O, this.k.n.z = e * this.I * this.u + g * this.O * this.C, this.k.q.x = this.k.n.y, this.k.q.y = e + g, this.k.q.z = e * this.u + g * this.C, this.k.j.x = this.k.n.z, this.k.j.y = this.k.q.z, this.k.j.z = l + n + e * this.u * this.u + g * this.C * this.C, pe(this.k, p, -u, -t, -q)) : (l = this.Y, n = this.ea, e = this.Ga, g = this.Ka, q = e * this.I + g * this.O, v = e + g, this.k.n.Set(l + n + e * this.I * this.I + g * this.O * this.O, q, 0), this.k.q.Set(q, v, 0), q = oe(this.k, Z(0, 0), -u, -t), p.x = q.x, p.y = q.y, p.z = 0);
	q = p.x * this.ba.x + p.z * this.K.x;
	l = p.x * this.ba.y + p.z * this.K.y;
	u = p.x * this.I + p.y + p.z * this.u;
	p = p.x * this.O + p.y + p.z * this.C;
	b.x -= this.Y * q;
	b.y -= this.Y * l;
	d -= this.Ga * u;
	f.x += this.ea * q;
	f.y += this.ea * l;
	h += this.Ka * p;
	a.m.R = d;
	c.m.R = h;
	dg(a);
	dg(c);
	return .005 >= k && m <= Ad
};

function Bi() {
	ni.call(this);
	this.Y = Z(0, 0);
	this.ea = Z(0, 0);
	this.C = Z(0, 0);
	this.type = 2;
	this.C.Set(1, 0);
	this.mb = 0;
	this.I = !1;
	this.La = this.ba = 0;
	this.K = !1;
	this.Ka = this.Ga = 0
}
zd(Bi, ni);
Bi.prototype.u = function() {
	return new Ai(this)
};

function Ci(a) {
	li.call(this, a);
	this.Y = Z(0, 0);
	this.ea = Z(0, 0);
	this.la = Z(0, 0);
	this.ma = Z(0, 0);
	this.j = Z(0, 0);
	this.k = Z(0, 0);
	this.I = this.Z.Zd.dz;
	this.Y.x = a.C.x - this.I.H.position.x;
	this.Y.y = a.C.y - this.I.H.position.y;
	this.ea.x = a.I.x - this.I.H.position.x;
	this.ea.y = a.I.y - this.I.H.position.y;
	this.la.P(a.K);
	this.ma.P(a.Y);
	this.u = a.ng;
	this.Ka = 0 + 0 * this.u;
	this.Qc = Math.min(0, this.Ka - this.u * Di);
	this.Sd = Math.min(0, (this.Ka - Di) / this.u);
	this.K = this.O = this.C = 0
}
zd(Ci, li);
Ci.prototype.mf = function(a) {
	var c = this.Z,
		b = this.aa,
		d;
	d = c.H.B;
	var f = this.la.x - c.m.S.x,
		h = this.la.y - c.m.S.y,
		e = d.n.x * f + d.q.x * h,
		h = d.n.y * f + d.q.y * h,
		f = e;
	d = b.H.B;
	var g = this.ma.x - b.m.S.x,
		l = this.ma.y - b.m.S.y,
		e = d.n.x * g + d.q.x * l,
		l = d.n.y * g + d.q.y * l,
		g = e;
	d = b.m.D.x + g;
	var e = b.m.D.y + l,
		n = this.I.H.position.x + this.ea.x,
		k = this.I.H.position.y + this.ea.y;
	this.j.Set(c.m.D.x + f - (this.I.H.position.x + this.Y.x), c.m.D.y + h - (this.I.H.position.y + this.Y.y));
	this.k.Set(d - n, e - k);
	d = ve(this.j);
	e = ve(this.k);.005 < d ? this.j.ee(1 / d) : this.j.ta();.005 < e ? this.k.ee(1 / e) : this.k.ta();
	0 < this.Ka - d - this.u * e ? this.C = this.rc = 0 : this.rc = 2;
	d < this.Qc ? this.O = this.La = 0 : this.La = 2;
	e < this.Sd ? this.K = this.fb = 0 : this.fb = 2;
	d = f * this.j.y - h * this.j.x;
	e = g * this.k.y - l * this.k.x;
	this.ba = c.N + c.W * d * d;
	this.Ga = b.N + b.W * e * e;
	this.mb = this.ba + this.u * this.u * this.Ga;
	this.ba = 1 / this.ba;
	this.Ga = 1 / this.Ga;
	this.mb = 1 / this.mb;
	a.Ag ? (this.C *= a.hc, this.O *= a.hc, this.K *= a.hc, a = (-this.C - this.O) * this.j.x, d = (-this.C - this.O) * this.j.y, e = (-this.u * this.C - this.K) * this.k.x, n = (-this.u * this.C - this.K) * this.k.y, c.A.x += c.N * a, c.A.y += c.N * d, c.J += c.W * (f * d - h * a), b.A.x += b.N * e, b.A.y += b.N * n, b.J += b.W * (g * n - l * e)) : this.K = this.O = this.C = 0
};
Ci.prototype.of = function() {
	var a = this.Z,
		c = this.aa,
		b;
	b = a.H.B;
	var d = this.la.x - a.m.S.x,
		f = this.la.y - a.m.S.y,
		h = b.n.x * d + b.q.x * f,
		f = b.n.y * d + b.q.y * f,
		d = h;
	b = c.H.B;
	var e = this.ma.x - c.m.S.x,
		g = this.ma.y - c.m.S.y,
		h = b.n.x * e + b.q.x * g,
		g = b.n.y * e + b.q.y * g,
		e = h,
		l = h = b = 0,
		n = 0;
	b = n = b = n = l = h = b = 0;
	2 == this.rc && (b = a.A.x + -a.J * f, h = a.A.y + a.J * d, l = c.A.x + -c.J * g, n = c.A.y + c.J * e, b = -(this.j.x * b + this.j.y * h) - this.u * (this.k.x * l + this.k.y * n), n = this.mb * -b, b = this.C, this.C = Math.max(0, this.C + n), n = this.C - b, b = -n * this.j.x, h = -n * this.j.y, l = -this.u * n * this.k.x, n = -this.u * n * this.k.y, a.A.x += a.N * b, a.A.y += a.N * h, a.J += a.W * (d * h - f * b), c.A.x += c.N * l, c.A.y += c.N * n, c.J += c.W * (e * n - g * l));
	2 == this.La && (b = a.A.x + -a.J * f, h = a.A.y + a.J * d, b = -(this.j.x * b + this.j.y * h), n = -this.ba * b, b = this.O, this.O = Math.max(0, this.O + n), n = this.O - b, b = -n * this.j.x, h = -n * this.j.y, a.A.x += a.N * b, a.A.y += a.N * h, a.J += a.W * (d * h - f * b));
	2 == this.fb && (l = c.A.x + -c.J * g, n = c.A.y + c.J * e, b = -(this.k.x * l + this.k.y * n), n = -this.Ga * b, b = this.K, this.K = Math.max(0, this.K + n), n = this.K - b, l = -n * this.k.x, n = -n * this.k.y, c.A.x += c.N * l, c.A.y += c.N * n, c.J += c.W * (e * n - g * l))
};
Ci.prototype.nf = function() {
	var a = this.Z,
		c = this.aa,
		b, d = this.I.H.position.x + this.Y.x,
		f = this.I.H.position.y + this.Y.y,
		h = this.I.H.position.x + this.ea.x,
		e = this.I.H.position.y + this.ea.y,
		g = 0,
		l = 0,
		n = 0,
		k = 0,
		m = b = 0,
		q = 0,
		p = 0,
		t = m = p = b = m = b = 0;
	2 == this.rc && (b = a.H.B, g = this.la.x - a.m.S.x, l = this.la.y - a.m.S.y, m = b.n.x * g + b.q.x * l, l = b.n.y * g + b.q.y * l, g = m, b = c.H.B, n = this.ma.x - c.m.S.x, k = this.ma.y - c.m.S.y, m = b.n.x * n + b.q.x * k, k = b.n.y * n + b.q.y * k, n = m, b = a.m.D.x + g, m = a.m.D.y + l, q = c.m.D.x + n, p = c.m.D.y + k, this.j.Set(b - d, m - f), this.k.Set(q - h, p - e), b = ve(this.j), m = ve(this.k), .005 < b ? this.j.ee(1 / b) : this.j.ta(), .005 < m ? this.k.ee(1 / m) : this.k.ta(), b = this.Ka - b - this.u * m, t = Math.max(t, -b), b = Rd(b + .005, -.2, 0), p = -this.mb * b, b = -p * this.j.x, m = -p * this.j.y, q = -this.u * p * this.k.x, p = -this.u * p * this.k.y, a.m.D.x += a.N * b, a.m.D.y += a.N * m, a.m.R += a.W * (g * m - l * b), c.m.D.x += c.N * q, c.m.D.y += c.N * p, c.m.R += c.W * (n * p - k * q), dg(a), dg(c));
	2 == this.La && (b = a.H.B, g = this.la.x - a.m.S.x, l = this.la.y - a.m.S.y, m = b.n.x * g + b.q.x * l, l = b.n.y * g + b.q.y * l, g = m, b = a.m.D.x + g, m = a.m.D.y + l, this.j.Set(b - d, m - f), b = ve(this.j), .005 < b ? (this.j.x *= 1 / b, this.j.y *= 1 / b) : this.j.ta(), b = this.Qc - b, t = Math.max(t, -b), b = Rd(b + .005, -.2, 0), p = -this.ba * b, b = -p * this.j.x, m = -p * this.j.y, a.m.D.x += a.N * b, a.m.D.y += a.N * m, a.m.R += a.W * (g * m - l * b), dg(a));
	2 == this.fb && (b = c.H.B, n = this.ma.x - c.m.S.x, k = this.ma.y - c.m.S.y, m = b.n.x * n + b.q.x * k, k = b.n.y * n + b.q.y * k, n = m, q = c.m.D.x + n, p = c.m.D.y + k, this.k.Set(q - h, p - e), m = ve(this.k), .005 < m ? (this.k.x *= 1 / m, this.k.y *= 1 / m) : this.k.ta(), b = this.Sd - m, t = Math.max(t, -b), b = Rd(b + .005, -.2, 0), p = -this.Ga * b, q = -p * this.k.x, p = -p * this.k.y, c.m.D.x += c.N * q, c.m.D.y += c.N * p, c.m.R += c.W * (n * p - k * q), dg(c));
	return .005 > t
};
var Di = 1;

function Ei() {
	ni.call(this);
	this.C = Z(0, 0);
	this.I = Z(0, 0);
	this.K = Z(0, 0);
	this.Y = Z(0, 0);
	this.type = 4;
	this.C.Set(-1, 1);
	this.I.Set(1, 1);
	this.K.Set(-1, 0);
	this.Y.Set(1, 0);
	this.ng = 1;
	this.O = !0
}
zd(Ei, ni);
Ei.prototype.u = function() {
	return new Ci(this)
};

function Fi(a) {
	li.call(this, a);
	this.ba = new Sd;
	this.K = new Sd;
	this.Y = new Sd;
	this.ea = new Sd;
	this.k = new Yd(0, 0, 0);
	this.C = Z(0, 0);
	this.O = Z(0, 0);
	this.la = Z(0, 0);
	this.ma = Z(0, 0);
	this.j = new Yd(0, 0, 0);
	this.X = new Xd;
	this.la.P(a.C);
	this.ma.P(a.I);
	this.La = a.Y;
	this.j.ta();
	this.I = 0;
	this.Ga = a.ea;
	this.fb = a.ba;
	this.Sd = a.mb;
	this.Qc = a.Ka;
	this.Ka = a.K;
	this.rc = a.Ga;
	this.u = 0
}
zd(Fi, li);

function ui(a) {
	return a.aa.m.R - a.Z.m.R - a.La
}
Fi.prototype.mf = function(a) {
	var c = this.Z,
		b = this.aa,
		d, f = 0;
	d = c.H.B;
	var h = this.la.x - c.m.S.x,
		e = this.la.y - c.m.S.y,
		f = d.n.x * h + d.q.x * e,
		e = d.n.y * h + d.q.y * e,
		h = f;
	d = b.H.B;
	var g = this.ma.x - b.m.S.x,
		l = this.ma.y - b.m.S.y,
		f = d.n.x * g + d.q.x * l,
		l = d.n.y * g + d.q.y * l,
		g = f;
	d = c.N;
	var f = b.N,
		n = c.W,
		k = b.W;
	this.X.n.x = d + f + e * e * n + l * l * k;
	this.X.q.x = -e * h * n - l * g * k;
	this.X.j.x = -e * n - l * k;
	this.X.n.y = this.X.q.x;
	this.X.q.y = d + f + h * h * n + g * g * k;
	this.X.j.y = h * n + g * k;
	this.X.n.z = this.X.j.x;
	this.X.q.z = this.X.j.y;
	this.X.j.z = n + k;
	this.mb = 1 / (n + k);
	this.rc || (this.I = 0);
	if (this.Ka) {
		var m = b.m.R - c.m.R - this.La;
		Math.abs(this.fb - this.Ga) < 2 * Ad ? this.u = 3 : m <= this.Ga ? (1 != this.u && (this.j.z = 0), this.u = 1) : m >= this.fb ? (2 != this.u && (this.j.z = 0), this.u = 2) : (this.u = 0, this.j.z = 0)
	} else this.u = 0;
	a.Ag ? (this.j.x *= a.hc, this.j.y *= a.hc, this.I *= a.hc, a = this.j.x, m = this.j.y, c.A.x -= d * a, c.A.y -= d * m, c.J -= n * (h * m - e * a + this.I + this.j.z), b.A.x += f * a, b.A.y += f * m, b.J += k * (g * m - l * a + this.I + this.j.z)) : (this.j.ta(), this.I = 0)
};
Fi.prototype.of = function(a) {
	var c = this.Z,
		b = this.aa,
		d = 0,
		f = d = 0,
		h = 0,
		e = 0,
		g = 0,
		l = c.A,
		n = c.J,
		k = b.A,
		m = b.J,
		q = c.N,
		p = b.N,
		t = c.W,
		u = b.W;
	this.rc && 3 != this.u && (f = this.mb * -(m - n - this.Qc), h = this.I, e = a.Ha * this.Sd, this.I = Rd(this.I + f, -e, e), f = this.I - h, n -= t * f, m += u * f);
	if (this.Ka && 0 != this.u) {
		a = c.H.B;
		f = this.la.x - c.m.S.x;
		h = this.la.y - c.m.S.y;
		d = a.n.x * f + a.q.x * h;
		h = a.n.y * f + a.q.y * h;
		f = d;
		a = b.H.B;
		e = this.ma.x - b.m.S.x;
		g = this.ma.y - b.m.S.y;
		d = a.n.x * e + a.q.x * g;
		g = a.n.y * e + a.q.y * g;
		e = d;
		a = k.x + -m * g - l.x - -n * h;
		var v = k.y + m * e - l.y - n * f;
		pe(this.X, this.k, -a, -v, -(m - n));
		3 == this.u ? this.j.lf(this.k) : 1 == this.u ? (d = this.j.z + this.k.z, 0 > d && (oe(this.X, this.O, -a, -v), this.k.x = this.O.x, this.k.y = this.O.y, this.k.z = -this.j.z, this.j.x += this.O.x, this.j.y += this.O.y, this.j.z = 0)) : 2 == this.u && (d = this.j.z + this.k.z, 0 < d && (oe(this.X, this.O, -a, -v), this.k.x = this.O.x, this.k.y = this.O.y, this.k.z = -this.j.z, this.j.x += this.O.x, this.j.y += this.O.y, this.j.z = 0));
		l.x -= q * this.k.x;
		l.y -= q * this.k.y;
		n -= t * (f * this.k.y - h * this.k.x + this.k.z);
		k.x += p * this.k.x;
		k.y += p * this.k.y;
		m += u * (e * this.k.y - g * this.k.x + this.k.z)
	} else a = c.H.B, f = this.la.x - c.m.S.x, h = this.la.y - c.m.S.y, d = a.n.x * f + a.q.x * h, h = a.n.y * f + a.q.y * h, f = d, a = b.H.B, e = this.ma.x - b.m.S.x, g = this.ma.y - b.m.S.y, d = a.n.x * e + a.q.x * g, g = a.n.y * e + a.q.y * g, e = d, oe(this.X, this.C, -(k.x + -m * g - l.x - -n * h), -(k.y + m * e - l.y - n * f)), this.j.x += this.C.x, this.j.y += this.C.y, l.x -= q * this.C.x, l.y -= q * this.C.y, n -= t * (f * this.C.y - h * this.C.x), k.x += p * this.C.x, k.y += p * this.C.y, m += u * (e * this.C.y - g * this.C.x);
	c.A.P(l);
	c.J = n;
	b.A.P(k);
	b.J = m
};
Fi.prototype.nf = function() {
	var a = 0,
		c, b = this.Z,
		d = this.aa,
		f = 0,
		h = c = 0,
		e = 0,
		h = 0;
	if (this.Ka && 0 != this.u) {
		var a = d.m.R - b.m.R - this.La,
			g = 0;
		3 == this.u ? (a = Rd(a - this.Ga, -Bd, Bd), g = -this.mb * a, f = Math.abs(a)) : 1 == this.u ? (a -= this.Ga, f = -a, a = Rd(a + Ad, -Bd, 0), g = -this.mb * a) : 2 == this.u && (f = a -= this.fb, a = Rd(a - Ad, 0, Bd), g = -this.mb * a);
		b.m.R -= b.W * g;
		d.m.R += d.W * g;
		dg(b);
		dg(d)
	}
	c = b.H.B;
	g = this.la.x - b.m.S.x;
	a = this.la.y - b.m.S.y;
	h = c.n.x * g + c.q.x * a;
	a = c.n.y * g + c.q.y * a;
	g = h;
	c = d.H.B;
	var l = this.ma.x - d.m.S.x,
		n = this.ma.y - d.m.S.y,
		h = c.n.x * l + c.q.x * n,
		n = c.n.y * l + c.q.y * n,
		l = h,
		e = d.m.D.x + l - b.m.D.x - g,
		h = d.m.D.y + n - b.m.D.y - a,
		k = e * e + h * h;
	c = Math.sqrt(k);
	var m = b.N,
		q = d.N,
		p = b.W,
		t = d.W;
	k > .05 * .05 && (k = 1 / (m + q), e = k * -e, h = k * -h, b.m.D.x -= .5 * m * e, b.m.D.y -= .5 * m * h, d.m.D.x += .5 * q * e, d.m.D.y += .5 * q * h, e = d.m.D.x + l - b.m.D.x - g, h = d.m.D.y + n - b.m.D.y - a);
	this.K.n.x = m + q;
	this.K.q.x = 0;
	this.K.n.y = 0;
	this.K.q.y = m + q;
	this.Y.n.x = p * a * a;
	this.Y.q.x = -p * g * a;
	this.Y.n.y = -p * g * a;
	this.Y.q.y = p * g * g;
	this.ea.n.x = t * n * n;
	this.ea.q.x = -t * l * n;
	this.ea.n.y = -t * l * n;
	this.ea.q.y = t * l * l;
	Ud(this.ba, this.K);
	m = this.ba;
	q = this.Y;
	m.n.lf(q.n);
	m.q.lf(q.q);
	m = this.ba;
	q = this.ea;
	m.n.lf(q.n);
	m.q.lf(q.q);
	Wd(this.ba, Gi, -e, -h);
	e = Gi.x;
	h = Gi.y;
	b.m.D.x -= b.N * e;
	b.m.D.y -= b.N * h;
	b.m.R -= b.W * (g * h - a * e);
	d.m.D.x += d.N * e;
	d.m.D.y += d.N * h;
	d.m.R += d.W * (l * h - n * e);
	dg(b);
	dg(d);
	return .005 >= c && f <= Ad
};
var Gi = Z(0, 0);

function Hi() {
	ni.call(this);
	this.C = Z(0, 0);
	this.I = Z(0, 0);
	this.type = 1;
	this.C.ta();
	this.I.ta();
	this.Ka = this.mb = this.ba = this.ea = this.Y = 0;
	this.Ga = this.K = !1
}
zd(Hi, ni);

function Ii(a, c, b, d) {
	a.j = c;
	a.k = b;
	a.C = Pd(a.j.H, d);
	a.I = Pd(a.k.H, d);
	a.Y = a.k.yh() - a.j.yh()
}
Hi.prototype.u = function() {
	return new Fi(this)
};

function Ji(a) {
	li.call(this, a);
	this.k = Z(0, 0);
	this.u = Z(0, 0);
	this.j = new Yd(0, 0, 0);
	this.X = new Xd;
	this.k.P(a.C);
	this.u.P(a.I);
	this.C = a.K
}
zd(Ji, li);
Ji.prototype.mf = function(a) {
	var c, b = 0,
		d = this.Z,
		f = this.aa;
	c = d.H.B;
	var h = this.k.x - d.m.S.x,
		e = this.k.y - d.m.S.y,
		b = c.n.x * h + c.q.x * e,
		e = c.n.y * h + c.q.y * e,
		h = b;
	c = f.H.B;
	var g = this.u.x - f.m.S.x,
		l = this.u.y - f.m.S.y,
		b = c.n.x * g + c.q.x * l,
		l = c.n.y * g + c.q.y * l,
		g = b;
	c = d.N;
	var b = f.N,
		n = d.W,
		k = f.W;
	this.X.n.x = c + b + e * e * n + l * l * k;
	this.X.q.x = -e * h * n - l * g * k;
	this.X.j.x = -e * n - l * k;
	this.X.n.y = this.X.q.x;
	this.X.q.y = c + b + h * h * n + g * g * k;
	this.X.j.y = h * n + g * k;
	this.X.n.z = this.X.j.x;
	this.X.q.z = this.X.j.y;
	this.X.j.z = n + k;
	a.Ag ? (this.j.x *= a.hc, this.j.y *= a.hc, this.j.z *= a.hc, d.A.x -= c * this.j.x, d.A.y -= c * this.j.y, d.J -= n * (h * this.j.y - e * this.j.x + this.j.z), f.A.x += b * this.j.x, f.A.y += b * this.j.y, f.J += k * (g * this.j.y - l * this.j.x + this.j.z)) : this.j.ta()
};
Ji.prototype.of = function() {
	var a, c = 0,
		b = this.Z,
		d = this.aa,
		f = b.A,
		h = b.J,
		e = d.A,
		g = d.J,
		l = b.N,
		n = d.N,
		k = b.W,
		m = d.W;
	a = b.H.B;
	var q = this.k.x - b.m.S.x,
		p = this.k.y - b.m.S.y,
		c = a.n.x * q + a.q.x * p,
		p = a.n.y * q + a.q.y * p,
		q = c;
	a = d.H.B;
	var t = this.u.x - d.m.S.x,
		u = this.u.y - d.m.S.y,
		c = a.n.x * t + a.q.x * u,
		u = a.n.y * t + a.q.y * u,
		t = c;
	a = new Yd(0, 0, 0);
	pe(this.X, a, -(e.x - g * u - f.x + h * p), -(e.y + g * t - f.y - h * q), -(g - h));
	this.j.lf(a);
	f.x -= l * a.x;
	f.y -= l * a.y;
	h -= k * (q * a.y - p * a.x + a.z);
	e.x += n * a.x;
	e.y += n * a.y;
	g += m * (t * a.y - u * a.x + a.z);
	b.J = h;
	d.J = g
};
Ji.prototype.nf = function() {
	var a, c = 0,
		b = this.Z,
		d = this.aa;
	a = b.H.B;
	var f = this.k.x - b.m.S.x,
		h = this.k.y - b.m.S.y,
		c = a.n.x * f + a.q.x * h,
		h = a.n.y * f + a.q.y * h,
		f = c;
	a = d.H.B;
	var e = this.u.x - d.m.S.x,
		g = this.u.y - d.m.S.y,
		c = a.n.x * e + a.q.x * g,
		g = a.n.y * e + a.q.y * g,
		e = c;
	a = b.N;
	var c = d.N,
		l = b.W,
		n = d.W,
		k = d.m.D.x + e - b.m.D.x - f,
		m = d.m.D.y + g - b.m.D.y - h,
		q = d.m.R - b.m.R - this.C,
		p = Math.sqrt(k * k + m * m),
		t = Math.abs(q);.05 < p && (l *= 1, n *= 1);
	this.X.n.x = a + c + h * h * l + g * g * n;
	this.X.q.x = -h * f * l - g * e * n;
	this.X.j.x = -h * l - g * n;
	this.X.n.y = this.X.q.x;
	this.X.q.y = a + c + f * f * l + e * e * n;
	this.X.j.y = f * l + e * n;
	this.X.n.z = this.X.j.x;
	this.X.q.z = this.X.j.y;
	this.X.j.z = l + n;
	var u = new Yd(0, 0, 0);
	pe(this.X, u, -k, -m, -q);
	b.m.D.x -= a * u.x;
	b.m.D.y -= a * u.y;
	b.m.R -= l * (f * u.y - h * u.x + u.z);
	d.m.D.x += c * u.x;
	d.m.D.y += c * u.y;
	d.m.R += n * (e * u.y - g * u.x + u.z);
	dg(b);
	dg(d);
	return .005 >= p && t <= Ad
};

function Ki() {
	ni.call(this);
	this.C = Z(0, 0);
	this.I = Z(0, 0);
	this.type = 8;
	this.K = 0
}
zd(Ki, ni);
Ki.prototype.u = function() {
	return new Ji(this)
};
var Rh = [new Ie, new Ie],
	ci = [new Ie, new Ie],
	di = [new Ie, new Ie],
	Sh = Z(0, 0),
	Th = Z(0, 0),
	Uh = Z(0, 0),
	$h = Z(0, 0),
	Yh = Z(0, 0),
	Zh = Z(0, 0),
	ai = Z(0, 0),
	bi = Z(0, 0),
	ch = 0,
	ih = 0,
	jh = 0,
	gh = 0,
	hh = 0,
	dh = new Kf,
	eh = new Ye,
	pf = new re,
	qf = new re,
	of = new function() {
		this.za = Z(0, 0);
		this.j = Z(0, 0)
	},
	fh = new Ze,
	cg = new re,
	vg = new tg;
new function() {
	this.position = Z(0, 0);
	Z(0, 0);
	Z(0, 0);
	this.id = new Ge
};
new re;
var kh = new qe,
	lh = new qe,
	bh = new Lf,
	Fh = new function() {
		this.j = Z(0, 0);
		this.pa = [];
		for (var a = this.Nb = 0; 2 > a; a++) this.pa[a] = Z(0, 0)
	},
	Mh = new function() {
		this.j = Z(0, 0);
		this.k = [];
		this.pa = [];
		for (var a = 0; 2 > a; a++) this.pa[a] = Z(0, 0)
	};

function Li(a, c, b, d, f, h) {
	var e;
	if (e = (b + .1 >= a && a >= f - .1 || b - .1 <= a && a <= f + .1) && (d + .1 >= c && c >= h - .1 || d - .1 <= c && c <= h + .1)) e = .1 < Math.abs(f - b) ? .1 > Math.abs((h - d) / (f - b) * (a - b) + d - c) : .1 > Math.abs(a - b);
	return e
}

function Ri(a, c) {
	var b = Ti(a),
		d = [],
		f, h, e, g, l, n, k, m, q;
	l = 0;
	for (n = b.length; l < n; l++) {
		h = b[l];
		f = [];
		f.length = h.length;
		k = q = 0;
		for (m = h.length; k < m; k++) e = h[k], g = h[(k + 1) % m], q += e.x * g.y - e.y * g.x, f[k] = Z(e.x, e.y);
		q = Math.abs(q / 2);
		q >= .001 * c && d.push(f)
	}
	return d
}

function Ti(a) {
	var c = [],
		b = 0,
		d = 0,
		f = 0,
		h = 0,
		e = 0,
		g = e = 0,
		l = 0,
		n = 0,
		k = 0,
		h = 0,
		m, q, p, t, u, v = h = b = 0,
		r = 0,
		f = [],
		l = [],
		z = !1,
		B = [],
		D = [];
	for (D.push(a); D.length;) {
		c = D[0];
		d = c.length;
		z = !0;
		for (b = 0; b < d; b++) if (n = b, k = b < d - 1 ? b + 1 : b + 1 - d, h = b < d - 2 ? b + 2 : b + 2 - d, a = c[n], m = c[k], q = c[h], h = a.x, f = a.y, l = m.x, e = m.y, g = q.x, q = q.y, h = h * e + l * q + g * f - f * l - e * g - q * h, 0 > h) {
			z = !1;
			l = 1E9;
			for (f = 0; f < d; f++) if (f !== n && f !== k) {
				b = f;
				h = f < d - 1 ? f + 1 : 0;
				p = c[b];
				t = c[h];
				g = a.x;
				q = a.y;
				var A = m.x,
					C = m.y,
					e = p.x;
				p = p.y;
				var E = t.x;
				t = t.y;
				var w = A - g,
					x = C - q,
					K = E - e,
					H = t - p,
					K = (K * (p - q) - H * (e - g)) / (x * K - w * H),
					w = g + K * w,
					x = q + K * x,
					g = Li(A, C, g, q, w, x),
					e = Li(w, x, e, p, E, t);
				if (q = g && e ? Z(w, x) : null) e = m.x - q.x, g = m.y - q.y, e = e * e + g * g, e < l && (r = b, v = h, u = q, l = e)
			}
			if (1E9 === l) return [];
			f = [];
			l = [];
			b = r;
			h = v;
			p = c[b];
			t = c[h];
			v = u.y;
			r = t.y;.1 > Math.abs(t.x - u.x) && .1 > Math.abs(r - v) || f.push(u);
			v = u.y;
			r = p.y;.1 > Math.abs(p.x - u.x) && .1 > Math.abs(r - v) || l.push(u);
			r = -1;
			for (v = n;;) {
				if (v !== h) f.push(c[v]);
				else {
					if (0 > r || r >= d) return [];
					Li(t.x, t.y, c[r].x, c[r].y, a.x, a.y) || f.push(c[v]);
					break
				}
				r = v;
				0 > v - 1 ? v = d - 1 : v--
			}
			f.reverse();
			r = -1;
			for (v = k;;) {
				if (v !== b) l.push(c[v]);
				else {
					if (0 > r || r >= d) return [];
					v !== b || Li(p.x, p.y, c[r].x, c[r].y, m.x, m.y) || l.push(c[v]);
					break
				}
				r = v;
				v + 1 > d - 1 ? v = 0 : v++
			}
			D.push(f, l);
			D.shift();
			break
		}
		z && B.push(D.shift())
	}
	return B
}

function Ui(a) {
	for (var c = 0; 4E3 > c; c++) te.push(new se(0, 0));
	this.c = a;
	this.Ad = new Hg(Z(0, 10), !0);
	this.Lu = 10;
	this.Cp = -1;
	a = new tg;
	a.behavior = this;
	a.BeginContact = function(a) {
		this.behavior.c.St(a.Zb.cb().sf.F, a.Mb.cb().sf.F)
	};
	this.Ad.j.k = a;
	a = new qg;
	a.behavior = this;
	a.j = function(a, c) {
		if (this.behavior.mw) return !0;
		var f = a.cb().sf.F.type,
			h = c.cb().sf.F.type,
			e = f.fa.Physics_DisabledCollisions;
		return e && e.contains(h) ? !1 : (e = h.fa.Physics_DisabledCollisions) && e.contains(f) ? !1 : !0
	};
	this.Ad.j.u = a;
	this.dA = 0;
	this.ll = 8;
	this.Ok = 3;
	this.mw = !0
}(function() {
	function a() {}
	var c = Ui.prototype;
	c.Va = function(a) {
		this.behavior = a;
		this.c = a.c
	};
	c.Va.prototype.qa = function() {};
	c.Ja = function(a, b) {
		this.type = a;
		this.behavior = a.behavior;
		this.F = b;
		this.c = a.c;
		this.Ad = this.behavior.Ad
	};
	var b = c.Ja.prototype;
	b.qa = function() {
		this.ip = 0 !== this.ca[0];
		this.Or = this.ca[1];
		this.lq = 0 !== this.ca[2];
		this.Rg = this.ca[3];
		this.Ug = this.ca[4];
		this.nh = this.ca[5];
		this.ej = this.ca[6];
		this.Fi = this.ca[7];
		this.Hi = 0 !== this.ca[8];
		this.enabled = 0 !== this.ca[9];
		this.body = null;
		this.F.Ua();
		this.Dm = this.F.x;
		this.Em = this.F.y;
		this.xf = this.F.M;
		this.zp = this.Dp = 0;
		this.Qt = this.Bp = !1;
		this.wp = null;
		this.xp = -1;
		this.$d ? (this.$d.length = 0, this.Ke.length = 0, this.bg.clear()) : (this.$d = [], this.Ke = [], this.bg = new ba);
		var a = this;
		this.pe || (this.ft = function(b) {
			a.Wp(b)
		});
		this.c.io(this.ft)
	};
	b.Kt = function() {
		this.F.Ua();
		this.xo();
		this.wp = this.F.rb;
		this.xp = this.F.ka
	};
	b.Lk = function() {
		this.Xl();
		this.Ke.length = 0;
		this.bg.clear();
		this.body && (Lg(this.Ad, this.body), this.body = null);
		this.c.Hz(this.ft)
	};
	b.Nc = function() {
		var a = {
			e: this.enabled,
			im: this.ip,
			pr: this.lq,
			d: this.Rg,
			fr: this.Ug,
			re: this.nh,
			ld: this.ej,
			ad: this.Fi,
			b: this.Hi,
			mcj: this.Ke
		};
		if (this.enabled) {
			var b = Z(0, 0);
			b.P(this.body.A);
			a.vx = b.x;
			a.vy = b.y;
			a.om = this.body.J
		}
		return a
	};
	b.kd = function(a) {
		this.Xl();
		this.Ke.length = 0;
		this.bg.clear();
		this.body && (Lg(this.Ad, this.body), this.body = null);
		this.enabled = a.e;
		this.ip = a.im;
		this.lq = a.pr;
		this.Rg = a.d;
		this.Ug = a.fr;
		this.nh = a.re;
		this.ej = a.ld;
		this.Fi = a.ad;
		this.Hi = a.b;
		this.Dm = this.F.x;
		this.Em = this.F.y;
		this.xf = this.F.M;
		this.Dp = this.F.width;
		this.zp = this.F.height;
		this.enabled && (this.xo(), Yf(this.body, Z(a.vx, a.vy)), this.body.tl(a.om), 0 === a.vx && 0 === a.vy && 0 === a.om || Zf(this.body, !0), this.Ke = a.mcj)
	};
	b.Lf = function() {
		this.enabled && this.rq();
		this.behavior.Cp = this.c.tg - 1
	};
	b.Wp = function(a) {
		var b, c, d, l = a.uid;
		d = b = 0;
		for (c = this.Ke.length; b < c; b++) this.Ke[d] = this.Ke[b], d < this.$d.length && (this.$d[d] = this.$d[b]), this.Ke[b].Pb[1] == l ? Mg(this.Ad, this.$d[b]) : d++;
		this.Ke.length = d;
		d < this.$d.length && (this.$d.length = d);
		this.bg.remove(a)
	};
	b.Xl = function() {
		var a, b;
		a = 0;
		for (b = this.$d.length; a < b; a++) Mg(this.Ad, this.$d[a]);
		this.$d.length = 0
	};
	b.rq = function() {
		var a, b, c;
		a = 0;
		for (b = this.Ke.length; a < b; a++) switch (c = this.Ke[a], c.type) {
		case 0:
			this.Mw(c.Pb[0], c.Pb[1], c.Pb[2], c.Pb[3], c.Pb[4]);
			break;
		case 1:
			this.Ow(c.Pb[0], c.Pb[1]);
			break;
		case 2:
			this.Nw(c.Pb[0], c.Pb[1], c.Pb[2], c.Pb[3])
		}
	};
	b.Jw = function() {
		this.body && (this.Xl(), Lg(this.Ad, this.body), this.body = null, this.F.fa.Td = null)
	};
	var d = [];
	b.xo = function() {
		if (this.enabled) {
			var a = this.F,
				b = !1,
				c = null,
				g = null,
				l, n, k, m, q, p, t, u, v, r, z, B, D;
			if (this.body) {
				b = !0;
				c = Z(0, 0);
				c.P(this.body.A);
				g = this.body.J;
				u = this.bg.jf();
				l = 0;
				for (n = u.length; l < n; l++) v = u[l].fa.Td.sf, v.Xl();
				this.Jw()
			}
			v = new Bg;
			v.Rg = this.Rg;
			v.Ug = this.Ug;
			v.nh = this.nh;
			l = new fg;
			l.type = this.ip ? 0 : 2;
			a.Ua();
			l.position.x = .02 * a.Bb.gh();
			l.position.y = .02 * a.Bb.hh();
			l.M = a.M;
			l.j = this.lq;
			l.ej = this.ej;
			l.Fi = this.Fi;
			l.Hi = this.Hi;
			u = this.F.Ra && !this.F.Ra.ai();
			this.body = Jg(this.Ad, l);
			this.body.sf = this;
			l = this.Or;
			u || this.F.ug || 0 !== this.Or || (l = 1);
			n = Math.max(Math.abs(a.width), 1);
			k = Math.max(Math.abs(a.height), 1);
			r = 0 > a.width;
			z = 0 > a.height;
			if (0 === l) if (a.ug) for (B = a.Bb.gh() - a.x, t = a.Bb.hh() - a.y, a.zB(d), u = [], l = 0, n = d.length; l < n; ++l) {
				r = d[l];
				z = r.Fz;
				if (r.Bf) {
					if (!r.Bf.Ol) {
						q = r.Bf.ec;
						m = r.Bf.oe;
						for (k = 0; k < m; ++k) u.push(Z(q[2 * k], q[2 * k + 1]));
						k = r.id & 3758096384;
						(-2147483648 === k || 1073741824 === k || 536870912 === k || k & -2147483648 && k & 1073741824 && k & 536870912) && u.reverse();
						r.Bf.Ol = Ri(u, (z.right - z.left) * (z.bottom - z.top));
						k = 0;
						for (m = u.length; k < m; ++k) ue(u[k]);
						u.length = 0
					}
					k = 0;
					for (m = r.Bf.Ol.length; k < m; ++k) {
						D = r.Bf.Ol[k];
						q = 0;
						for (p = D.length; q < p; ++q) u.push(Z(.02 * (z.left + D[q].x - B), .02 * (z.top + D[q].y - t)));
						v.shape = new Ce;
						Ee(v.shape, u);
						Rf(this.body, v);
						q = 0;
						for (p = u.length; q < p; ++q) ue(u[q]);
						u.length = 0
					}
				} else u.push(Z(.02 * (z.left - B), .02 * (z.top - t))), u.push(Z(.02 * (z.right - B), .02 * (z.top - t))), u.push(Z(.02 * (z.right - B), .02 * (z.bottom - t))), u.push(Z(.02 * (z.left - B), .02 * (z.bottom - t))), v.shape = new Ce, Ee(v.shape, u), Rf(this.body, v);
				k = 0;
				for (m = u.length; k < m; ++k) ue(u[k]);
				u.length = 0
			} else {
				l = a.M;
				a.M = 0;
				a.ra();
				a.Ua();
				B = a.Bb.gh() - a.x;
				t = a.Bb.hh() - a.y;
				a.M = l;
				a.ra();
				a.Ra.Jh(r ? -n : n, z ? -k : k, 0);
				q = a.Ra.ec;
				m = a.Ra.oe;
				u = [];
				u.length = m;
				for (l = 0; l < m; l++) u[l] = Z(q[2 * l] - B, q[2 * l + 1] - t);
				r !== z && u.reverse();
				B = Ri(u, n * k);
				for (l = 0; l < m; l++) ue(u[l]);
				if (B.length) for (l = 0, n = B.length; l < n; l++) {
					u = B[l];
					k = 0;
					for (m = u.length; k < m; k++) t = u[k], t.x *= .02, t.y *= .02;
					v.shape = new Ce;
					Ee(v.shape, u);
					Rf(this.body, v);
					k = 0;
					for (m = u.length; k < m; k++) ue(u[k])
				} else v.shape = new Ce, Fe(v.shape, .01 * n, .01 * k), Rf(this.body, v)
			} else 1 === l ? (v.shape = new Ce, Fe(v.shape, .01 * n, .01 * k)) : v.shape = new ze(.01 * Math.min(n, k)), Rf(this.body, v);
			a.fa.Td = this.body;
			this.Dp = a.width;
			this.zp = a.height;
			if (b) for (Yf(this.body, c), this.body.tl(g), ue(c), this.rq(), u = this.bg.jf(), l = 0, n = u.length; l < n; l++) v = u[l].fa.Td.sf, v.rq();
			d.length = 0
		}
	};
	b.Sb = function() {
		if (this.enabled) {
			var a = this.F,
				b;
			0 === this.behavior.dA ? b = this.c.vg / 60 : (b = this.c.Wg(this.F), b > 1 / 30 && (b = 1 / 30));
			if (this.c.tg > this.behavior.Cp && 0 < this.c.vg) {
				this.Ad.Hg(b, this.behavior.ll, this.behavior.Ok);
				for (b = this.Ad.xh.eb(jg); b; b = b.Pa()) b.body.k.ta(), b.body.C = 0;
				this.behavior.Cp = this.c.tg
			}
			if (this.Qt || a.width !== this.Dp || a.height !== this.zp || a.rb !== this.wp || a.ka !== this.xp || a.ug && a.Ft) this.xo(), this.Qt = !1, this.wp = a.rb, this.xp = a.ka, a.ug && a.Ft && (a.Ft = !1);
			b = a.M !== this.xf;
			if (a.x !== this.Dm || a.y !== this.Em) {
				a.Ua();
				var c = a.Bb.gh(),
					d = a.Bb.hh(),
					l = c - this.Dm,
					n = d - this.Em,
					k = this.body,
					c = Z(.02 * c, .02 * d);
				Vf(k, c, k.yh());
				Yf(this.body, Z(l, n));
				this.Bp = !0;
				Zf(this.body, !0)
			} else this.Bp && (this.Bp = !1, Yf(this.body, Z(0, 0)), l = this.body, n = Z(.02 * a.Bb.gh(), .02 * a.Bb.hh()), Vf(l, n, l.yh()));
			b && (this.body.ao(a.M), Zf(this.body, !0));
			l = this.body.H.position;
			b = l.x / .02;
			l = l.y / .02;
			n = this.body.yh();
			if (b !== a.x || l !== a.y || n !== a.M) if (a.x = b, a.y = l, a.M = n, a.ra(), a.Ua(), b = a.Bb.gh() - a.x, l = a.Bb.hh() - a.y, 0 !== b || 0 !== l) a.x -= b, a.y -= l, a.ra();
			this.Dm = a.x;
			this.Em = a.y;
			this.xf = a.M
		}
	};
	b.mm = function(a) {
		return -1 !== a && this.F.Fe ? 0 === a && this.body ? (this.body.H.position.x + this.body.m.S.x) / .02 : this.F.Fe(a, !0) : this.F.x
	};
	b.nm = function(a) {
		return -1 !== a && this.F.Fe ? 0 === a && this.body ? (this.body.H.position.y + this.body.m.S.y) / .02 : this.F.Fe(a, !1) : this.F.y
	};
	c.L = new function() {};
	a.prototype.wh = function(a, b, c) {
		if (this.enabled) {
			var d = this.mm(c);
			c = this.nm(c);
			this.body.wh(Z(a, b), Z(.02 * d, .02 * c))
		}
	};
	a.prototype.Vn = function(a) {
		this.enabled && this.body.Vn(Na(a))
	};
	a.prototype.tl = function(a) {
		this.enabled && (this.body.tl(Na(a)), Zf(this.body, !0))
	};
	b.Mw = function(a, b, c, d, l) {
		if (this.enabled) {
			var n = this.c.Th(b);

			if (n && n != this.F && n.fa.Td) {
				n.fa.Td.sf.bg.add(this.F);
				var k = this.mm(a),
					m = this.nm(a),
					q, p;
				n.Fe ? (q = n.Fe(c, !0), p = n.Fe(c, !1)) : (q = n.x, p = n.y);
				c = k - q;
				a = m - p;
				b = new pi;
				n = n.fa.Td;
				k = Z(.02 * k, .02 * m);
				q = Z(.02 * q, .02 * p);
				b.j = this.body;
				b.k = n;
				b.K.P(Pd(b.j.H, k));
				b.Y.P(Pd(b.k.H, q));
				n = q.x - k.x;
				k = q.y - k.y;
				b.length = Math.sqrt(n * n + k * k);
				b.I = 0;
				b.C = 0;
				b.length = .02 * Math.sqrt(c * c + a * a);
				b.C = d;
				b.I = l;
				this.$d.push(Ng(this.Ad, b))
			}
		}
	};
	b.Ow = function(a, b) {
		if (this.enabled) {
			var c = this.c.Th(b);
			if (c && c != this.F && c.fa.Td) {
				c.fa.Td.sf.bg.add(this.F);
				var d = this.mm(a),
					l = this.nm(a),
					n = new Hi;
				Ii(n, this.body, c.fa.Td, Z(.02 * d, .02 * l));
				this.$d.push(Ng(this.Ad, n))
			}
		}
	};
	b.Nw = function(a, b, c, d) {
		if (this.enabled && (b = this.c.Th(b)) && b != this.F && b.fa.Td) {
			b.fa.Td.sf.bg.add(this.F);
			var l = this.mm(a);
			a = this.nm(a);
			var n = new Hi;
			Ii(n, this.body, b.fa.Td, Z(.02 * l, .02 * a));
			n.K = !0;
			n.ea = Na(c);
			n.ba = Na(d);
			this.$d.push(Ng(this.Ad, n))
		}
	};
	a.prototype.Yv = function(a) {
		if (a !== this.behavior.Lu) {
			this.Ad.rr(Z(0, a));
			this.behavior.Lu = a;
			var b, c = this.behavior.Um.jf();
			a = 0;
			for (b = c.length; a < b; a++) c[a].fa.Td && Zf(c[a].fa.Td, !0)
		}
	};
	c.xa = new a;
	c.sb = new function() {}
})();

function Xi(a) {
	this.c = a
}(function() {
	var a = Xi.prototype;
	a.Va = function(a) {
		this.behavior = a;
		this.c = a.c
	};
	a.Va.prototype.qa = function() {};
	a.Ja = function(a, c) {
		this.type = a;
		this.behavior = a.behavior;
		this.F = c;
		this.c = a.c
	};
	var c = a.Ja.prototype;
	c.qa = function() {
		this.speed = Na(this.ca[0]);
		this.Kf = Na(this.ca[1])
	};
	c.Nc = function() {
		return {
			speed: this.speed,
			acc: this.Kf
		}
	};
	c.kd = function(a) {
		this.speed = a.speed;
		this.Kf = a.acc
	};
	c.Sb = function() {
		var a = this.c.Wg(this.F);
		0 !== a && (0 !== this.Kf && (this.speed += this.Kf * a), 0 !== this.speed && (this.F.M = Ra(this.F.M + this.speed * a), this.F.ra()))
	};
	a.L = new function() {};
	a.xa = new function() {};
	a.sb = new function() {}
})();

function Yi(a) {
	this.c = a
}(function() {
	function a() {}
	var c = Yi.prototype;
	c.Va = function(a) {
		this.behavior = a;
		this.c = a.c
	};
	c.Va.prototype.qa = function() {};
	c.Ja = function(a, b) {
		this.type = a;
		this.behavior = a.behavior;
		this.F = b;
		this.c = a.c;
		this.xc = 0
	};
	var b = c.Ja.prototype,
		d = 2 * Math.PI,
		f = Math.PI / 2,
		h = 3 * Math.PI / 2;
	b.qa = function() {
		this.sc = 1 === this.ca[0];
		this.Ik = this.ca[1];
		this.Wq = this.ca[2];
		this.jg = this.ca[3];
		this.jg += Math.random() * this.ca[4];
		0 === this.jg ? this.xc = 0 : (this.xc = this.ca[5] / this.jg * d, this.xc += Math.random() * this.ca[6] / this.jg * d);
		this.Kd = this.ca[7];
		this.Kd += Math.random() * this.ca[8];
		this.ng = this.Yh = this.Ya = 0;
		this.init()
	};
	b.Nc = function() {
		return {
			i: this.xc,
			a: this.sc,
			mv: this.Ik,
			w: this.Wq,
			p: this.jg,
			mag: this.Kd,
			iv: this.Ya,
			iv2: this.Yh,
			r: this.ng,
			lkv: this.Xd,
			lkv2: this.vk
		}
	};
	b.kd = function(a) {
		this.xc = a.i;
		this.sc = a.a;
		this.Ik = a.mv;
		this.Wq = a.w;
		this.jg = a.p;
		this.Kd = a.mag;
		this.Ya = a.iv;
		this.Yh = a.iv2 || 0;
		this.ng = a.r;
		this.Xd = a.lkv;
		this.vk = a.lkv2 || 0
	};
	b.init = function() {
		switch (this.Ik) {
		case 0:
			this.Ya = this.F.x;
			break;
		case 1:
			this.Ya = this.F.y;
			break;
		case 2:
			this.Ya = this.F.width;
			this.ng = this.F.height / this.F.width;
			break;
		case 3:
			this.Ya = this.F.width;
			break;
		case 4:
			this.Ya = this.F.height;
			break;
		case 5:
			this.Ya = this.F.M;
			this.Kd = Na(this.Kd);
			break;
		case 6:
			this.Ya = this.F.opacity;
			break;
		case 7:
			this.Ya = 0;
			break;
		case 8:
			this.Ya = this.F.x, this.Yh = this.F.y
		}
		this.Xd = this.Ya;
		this.vk = this.Yh
	};
	b.Bg = function(a) {
		a = a % d;
		switch (this.Wq) {
		case 0:
			return Math.sin(a);
		case 1:
			return a <= f ? a / f : a <= h ? 1 - 2 * (a - f) / Math.PI : (a - h) / f - 1;
		case 2:
			return 2 * a / d - 1;
		case 3:
			return -2 * a / d + 1;
		case 4:
			return a < Math.PI ? -1 : 1
		}
		return 0
	};
	b.Sb = function() {
		var a = this.c.Wg(this.F);
		if (this.sc && 0 !== a) {
			0 === this.jg ? this.xc = 0 : (this.xc += a / this.jg * d, this.xc = this.xc % d);
			switch (this.Ik) {
			case 0:
				this.F.x !== this.Xd && (this.Ya += this.F.x - this.Xd);
				this.F.x = this.Ya + this.Bg(this.xc) * this.Kd;
				this.Xd = this.F.x;
				break;
			case 1:
				this.F.y !== this.Xd && (this.Ya += this.F.y - this.Xd);
				this.F.y = this.Ya + this.Bg(this.xc) * this.Kd;
				this.Xd = this.F.y;
				break;
			case 2:
				this.F.width = this.Ya + this.Bg(this.xc) * this.Kd;
				this.F.height = this.F.width * this.ng;
				break;
			case 3:
				this.F.width = this.Ya + this.Bg(this.xc) * this.Kd;
				break;
			case 4:
				this.F.height = this.Ya + this.Bg(this.xc) * this.Kd;
				break;
			case 5:
				this.F.M !== this.Xd && (this.Ya = Ra(this.Ya + (this.F.M - this.Xd)));
				this.F.M = Ra(this.Ya + this.Bg(this.xc) * this.Kd);
				this.Xd = this.F.M;
				break;
			case 6:
				this.F.opacity = this.Ya + this.Bg(this.xc) * this.Kd / 100;
				0 > this.F.opacity ? this.F.opacity = 0 : 1 < this.F.opacity && (this.F.opacity = 1);
				break;
			case 8:
				this.F.x !== this.Xd && (this.Ya += this.F.x - this.Xd), this.F.y !== this.vk && (this.Yh += this.F.y - this.vk), this.F.x = this.Ya + Math.cos(this.F.M) * this.Bg(this.xc) * this.Kd, this.F.y = this.Yh + Math.sin(this.F.M) * this.Bg(this.xc) * this.Kd, this.Xd = this.F.x, this.vk = this.F.y
			}
			this.F.ra()
		}
	};
	b.pt = function(a, b) {
		switch (this.Ik) {
		case 2:
			this.Ya *= b.width / a.width;
			this.ng = b.height / b.width;
			break;
		case 3:
			this.Ya *= b.width / a.width;
			break;
		case 4:
			this.Ya *= b.height / a.height
		}
	};
	a.prototype.Bh = function() {
		return this.sc
	};
	c.L = new a;
	c.xa = new function() {};
	c.sb = new function() {}
})();

function Zi(a) {
	this.c = a
}(function() {
	var a = Zi.prototype;
	a.Va = function(a) {
		this.behavior = a;
		this.c = a.c
	};
	a.Va.prototype.qa = function() {};
	a.Ja = function(a, b) {
		this.type = a;
		this.behavior = a.behavior;
		this.F = b;
		this.c = a.c;
		this.mode = 0
	};
	a = a.Ja.prototype;
	a.qa = function() {
		this.mode = this.ca[0]
	};
	a.Sb = function() {};
	a.Gn = function() {
		this.F.Ua();
		var a = this.F.Ab,
			b = this.F.V.jc,
			d = !1;
		0 === this.mode ? (0 > this.F.x && (this.F.x = 0, d = !0), 0 > this.F.y && (this.F.y = 0, d = !0), this.F.x > b.width && (this.F.x = b.width, d = !0), this.F.y > b.height && (this.F.y = b.height, d = !0)) : (0 > a.left && (this.F.x -= a.left, d = !0), 0 > a.top && (this.F.y -= a.top, d = !0), a.right > b.width && (this.F.x -= a.right - b.width, d = !0), a.bottom > b.height && (this.F.y -= a.bottom - b.height, d = !0));
		d && this.F.ra()
	}
})();

function $i(a) {
	this.c = a
}(function() {
	var a = $i.prototype;
	a.Va = function(a) {
		this.behavior = a;
		this.c = a.c
	};
	a.Va.prototype.qa = function() {};
	a.Ja = function(a, b) {
		this.type = a;
		this.behavior = a.behavior;
		this.F = b;
		this.c = a.c
	};
	a = a.Ja.prototype;
	a.qa = function() {
		this.mode = this.ca[0]
	};
	a.Sb = function() {
		var a = this.F;
		a.Ua();
		var b = a.Ab,
			d = a.V,
			f = d.jc,
			h = 0,
			e = 0,
			g = 0,
			l = 0;
		0 === this.mode ? (e = f.width, l = f.height) : (h = d.xb, e = d.Ib, g = d.yb, l = d.Hb);
		b.right < h ? (a.x = e - 1 + (a.x - b.left), a.ra()) : b.left > e ? (a.x = h + 1 - (b.right - a.x), a.ra()) : b.bottom < g ? (a.y = l - 1 + (a.y - b.top), a.ra()) : b.top > l && (a.y = g + 1 - (b.bottom - a.y), a.ra())
	}
})();

function md() {
	return [od, vd, pd, qd, rd, nd, sd, td, ud, Ui, yd, Zi, wd, Yi, $i, Xi, xd, M.prototype.L.ir, M.prototype.xa.Vv, M.prototype.xa.Wv, M.prototype.xa.Rv, Ui.prototype.xa.Yv, nd.prototype.xa.Pv, od.prototype.xa.Xv, M.prototype.L.av, qd.prototype.L.bv, nd.prototype.xa.ao, M.prototype.L.Uu, nd.prototype.xa.Sv, nd.prototype.sb.fo, nd.prototype.sb.ho, td.prototype.L.dv, nd.prototype.L.$q, nd.prototype.L.qv, nd.prototype.xa.Zv, nd.prototype.xa.qd, yd.prototype.xa.Wu, M.prototype.xa.bw, M.prototype.xa.Mu, M.prototype.xa.fw, nd.prototype.L.cv, M.prototype.L.Tu, M.prototype.L.Qu, M.prototype.xa.Xu, ud.prototype.xa.aw, sd.prototype.xa.Uv, nd.prototype.L.Bi, nd.prototype.xa.Qv, M.prototype.sb.random, xd.prototype.L.dr, nd.prototype.L.Yu, nd.prototype.xa.Tv, M.prototype.xa.Ru, M.prototype.sb.$y, ud.prototype.L.jv, ud.prototype.sb.kv, wd.prototype.xa.Ov, td.prototype.L.$n, vd.prototype.xa.Vu, od.prototype.xa.Play, qd.prototype.L.er, M.prototype.L.Yn, od.prototype.xa.Nv]
};