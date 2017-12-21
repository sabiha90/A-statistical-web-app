function display(){alert("Hello!");}

function calculate_mean(){

    
	var numbers = document.getElementById("mean").value;
	var array = numbers.split(',');
	//alert(array.length);


	var total = 0;
	for (var i=0;i<array.length;i+=1)
	{
		total += parseInt(array[i]);
	}
	var avg = total/array.length;
	
	var result = document.getElementById("result");
	result.innerHTML = "The mean is:" + avg;
	return false;
}
function median() {
    // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
    var numbers = document.getElementById("mean").value;
	var array = numbers.split(',');
	var res_arr = []
	for (var i=0;i<array.length;i+=1)
	{
		res_arr.push(parseInt(array[i]));
	}
	res_arr.sort()
	numsLen = res_arr.length;
	if(numsLen%2 == 0)
	{
		median = (res_arr[numsLen/2-1] + res_arr[numsLen/2])/2;
	}
	else
	{
		median = res_arr[(numsLen-1)/2];
	}
	alert(median);
	var result = document.getElementById("median");
	result.innerHTML = "The median is:" + median;
	return false;


}
