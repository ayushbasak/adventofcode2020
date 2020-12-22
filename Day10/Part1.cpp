#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int main(){
    ifstream file("input");
    string line;
    vector<int> list;
    while(getline(file, line)){
        list.push_back(stoi(line));
    }
    int curr = 0;
    int diff_1 = 0;
    int diff_2 = 0;
    int diff_3 = 0;
    int max = *max_element(list.begin(), list.end());
    while(true){
        if(curr == max)
            break;
        if(find(list.begin(), list.end(), curr+1) != list.end()){
            curr +=1;
            diff_1 +=1;
        }
        else if(find(list.begin(), list.end(), curr+2) != list.end()){
            curr +=2;
            diff_2 +=1;
        }
        else if(find(list.begin(), list.end(), curr+3) != list.end()){
            curr +=3;
            diff_3 +=1;
        }
    }
    cout << diff_1 << "  " << diff_2 << "  " << diff_3 << endl;
    int ans = (diff_1) * (diff_3 + 1); //an extra difference of 3 due to built-in joltage adapter
    cout << ans;
}