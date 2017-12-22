function display(){alert("Hello!");}

function display_stats(){
	var numbers = document.getElementById("mean").value;
	var array = numbers.split(',');
	calculate_mean(array) ;
	median(array);
	mode(array);
	standard_dev(array);
	
	return false;

}
function calculate_mean(arr){

    
	
	//alert(array.length);

	//console.log(arr);
	var total = 0;
	
	for (var i=0;i<arr.length;i+=1)
	{
		
		total += parseInt(arr[i]);
	}
	var avg = total/arr.length;
	
	var result = document.getElementById("avg");
	result.innerHTML = "The mean is:" + avg;
	return avg;
}
function median(array) {
    // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
    
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
	
	var result = document.getElementById("median");
	result.innerHTML = "The median is:" + median;
	return median;

}
function mode(array) {
    // as result can be bimodal or multi-modal,
    // the returned result is provided as an array
    // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
    
    var modes = [], count = [], i, number, maxIndex = 0;
 
    for (i = 0; i < array.length; i += 1) {
        number = parseInt(array[i]);
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
 
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
 
    var result = document.getElementById("mode");
	result.innerHTML = "The mode is:" + modes;
	return modes;
}
function standard_dev(array){
	var res_arr = [];
    var avg = calculate_mean(array);
    for(var i=0;i<array.length;i+=1)
    {
    	diff = Math.pow(parseInt(array[i])-avg,2);
    	res_arr.push(diff);
    }
    var total = 0;

    for(var j=0;j<res_arr.length; j += 1)
    {
    	
    	total += res_arr[j];
    }
    var pop_sd = Math.sqrt(total/res_arr.length);
    var sample_sd = Math.sqrt(total/(res_arr.length-1));
    //console.log(sample_sd);
    var result1 = document.getElementById("pop_sd");
	result1.innerHTML = "The population standard deviation is:" + pop_sd;
	var result2 = document.getElementById("samp_sd");
	result2.innerHTML = "The sample standard deviation is:" + sample_sd;
	return pop_sd,sample_sd;
	
}
function calculate_zscore()
{
	
	var num = document.getElementById("z-score").value;
	var mean = document.getElementById("avg").innerHTML.split(':')[1];
	var sd = document.getElementById("pop_sd").innerHTML.split(':')[1]
	var zscore = (num-mean)/sd;
	console.log(zscore);
	var p2 = document.getElementById("zscore");
	p2.innerHTML = "The z-score is:" + zscore;
	return false;
	
}
