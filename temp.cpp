#include <iostream>
#include <vector>
using namespace std;

int LargestPrimeFactor(int n)
{
    vector<int> v;
    int i=2;
    if(n>=i*i)
    {
        v.push_back(i);
    }
    i=3;
    while(i*i<=n)
    {
        int f=1;
        for(int j=0;j<v.size();++j)
        {
            if(i%v[j]==0)
            {
                i+=2;
                f=0;
                break;
            }
        }
        if(f==1)
        {
            v.push_back(i);
        }
    }
    int f=1;
    for(int i=v.size()-1;i>=0;--i)
    {
        if(n%v[i]==0)
        {
            return v[i];
        }
    }

    return n;
}

int main()
{
    int x;
    cin>>x;

    cout<<LargestPrimeFactor(x)<<endl;

    return 0;
}