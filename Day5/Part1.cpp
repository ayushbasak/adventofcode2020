#include <iostream>
#include <fstream>
#include <string>
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
    while(getline(file, line)){
        max_seat_id = max(max_seat_id, seat_id(line));
    }
    cout << max_seat_id;
}