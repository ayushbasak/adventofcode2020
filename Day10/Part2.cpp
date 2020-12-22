#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

int traverse(vector<int> list, int i, unordered_map<int, int> umap){
    if(umap.find(i) != umap.end())
        return umap[i];

    if(i == list.size())
        return 1;

    int total = 0;
    
    if((i+1 < list.size()) && ((list.at(i+1) - list.at(i)) <= 3))
        total += traverse(list, i+1, umap);
    if((i+2 < list.size()) && ((list.at(i+2) - list.at(i)) <= 3))
        total += traverse(list, i+2, umap);
    if((i+3 < list.size()) && ((list.at(i+3) - list.at(i)) <= 3))
        total += traverse(list, i+3, umap);
    
    umap[i] = total;
    return total;
}

int main(){
    ifstream file("test");
    string line;
    vector<int> list;
    while(getline(file, line)){
        list.push_back(stoi(line));
    }
    
    sort(list.begin(), list.end());
    unordered_map<int, int> umap;
    cout << traverse(list, 0, umap);
}