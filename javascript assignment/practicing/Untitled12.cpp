#include<stdio.h>
int main()
{
	int num, i;
	printf("enter number =");
	scanf("%d",&num);
	
	if(num<=0 || num==1){
		printf("not a prime");
	}
	
	for(i=2; i<num; i++){
		if(num%i==0){
			printf("number is not prime");
			break;
	}	
	else {
	
		printf("number is prime");
		break;
	}
	}
	return 0;
}
