int func(int* arr, int n)
{
    vector<int> v(n);
    v[n-1]=arr[n-1];
    for(int i=n-2;i>=0;--i)
    {
        v[i]=max(v[i+1],arr[i]);
    }
    int ans=1;
    for(int i=0;i<n-1;++i)
    {
        if(v[i]<arr[i])
        {
            ++ans;
        }
    }

    return ans;

}