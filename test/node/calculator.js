module.exports = function calculator(expr) {
  try { 
  	if(typeof(expr)!='string') { console.log('TypeError: Expression should be a string.'); }
  		
	return eval(expr);
  }
  catch (e) { console.log('Error: "' + expr + '" is not valid expression.')}
}
