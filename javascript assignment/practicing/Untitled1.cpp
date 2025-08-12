#include<stdio.h>
int main()
{
	int i,num;
	printf("enter any number =");
	scanf("%d",&num);
	for(i=2; i<num; i++){
		if(num%i==0)
			printf("number is not prime");
		
		else if(num==i)
			printf("number is prime");
	}
	return 0;
}
