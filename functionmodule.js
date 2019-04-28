exports.search=function(arr,key)
{
	for(i=0;i<arr.length;i++)
	{
		if(arr[i]==10)
		{
			return i;
		}
	}
	return -1;
}



exports.add=function(arr1){
	sum =0;
	
	for(i=0;i<arr1.length;i++){
		sum+=arr1[i];
	
	}
		return sum;
}
	