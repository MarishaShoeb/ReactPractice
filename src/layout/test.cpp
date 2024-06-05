#include <iostream>
#include <bits/stdc++.h>

using namespace std;

//{ Driver Code Starts
// Initial template for C++

// } Driver Code Ends
// User function template in C++

class Solution
{
public:
    // Function to return the count of number of elements in union of two arrays.
    int doUnion(int a[], int n, int b[], int m)
    {
        int j = 0, i = 0;
        vector<int> vec;

        while (n >= m)
        {
            if (a[i] < b[j] && vec.back() != a[i])
            {
                vec.push_back(a[i]);
                i++;
            }
            else if (a[i] > b[j])
            {
                vec.push_back(b[j]);
                j++;
            }
            else
            {
                vec.push_back(a[i]);
                j++;
                i++;
            }
        }
    }
};

//{ Driver Code Starts.

int main()
{

    int t;
    cin >> t;

    while (t--)
    {

        int n, m;
        cin >> n >> m;
        int a[n], b[m];

        for (int i = 0; i < n; i++)
            cin >> a[i];

        for (int i = 0; i < m; i++)
            cin >> b[i];
        Solution ob;
        cout << ob.doUnion(a, n, b, m) << endl;
    }

    return 0;
}
// } Driver Code Ends

int main()
{
    cout << endl;

    return 0;
}