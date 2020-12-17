#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int seat_id(string s){
    string row_matrix = s.substr(0,7);
    string column_matrix = s.substr(7,3);
    int row = -1, col  = -1;
    int low = 0, high = 127;
    for(int i = 0;i<7;i++){
        if(row_matrix.at(i) == 'F'){
            high = (low+high)/2;
        }
        else{
            low = (low+high)/2 + 1;
        }
    }
    row = low;
    low = 0;
    high = 7;
    for(int i = 0;i<3;i++){
        if(column_matrix.at(i) == 'L'){
            high = (low+high)/2;
        }
        else{
            low = (low+high)/2 + 1;
        }
    }
    col = low;
    return row*8 + col;
}
int main(){
    ifstream file("input");
    string line;
    int max_seat_id = INT32_MIN;
    vector<int> list;
    while(getline(file, line)){
        list.push_back(seat_id(line));
    }
    sort(list.begin(), list.end());
    int curr = list.at(0);
    for(int i = 1;i<list.size();i++){
        int next = list.at(i);
        if(next - curr == 2)
            break;
        curr = next;
    }
    cout << curr+1; // note the curr is going to be one lower than Your ID
}