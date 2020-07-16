#include <iostream>
using namespace std;
 
// khai bao ham
int max(int so1, int so2);
 
int main ()
{
   // Khai bao bien cuc bo:
   int a = 100;
   int b = 200;
   int c = 500;
  
 
   // goi ham de tim gia tri lon nhat.
   if(c > b){
       cout<<"Gia tri lon nhat la: " << c << endl;
   }else{
       cout<<"Gia tri lon nhat la: " << b << endl;
   }

 
   return 0;
}


