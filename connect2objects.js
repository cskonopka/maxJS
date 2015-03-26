function bang()
{
	_p = this.patcher
	tog1 = _p.newobject("toggle", 125, 20, 40, 10);
	tog2 = _p.newobject("toggle", 125, 125, 40, 10);	
	_p.connect(tog1, 0, tog2, 0);
}
