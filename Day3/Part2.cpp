#include <iostream>
#include <fstream>
#include <string>
using namespace std;
int main(){
    ifstream file("input");
    string line;
    int x_position[5] = {0,0,0,0,0};
    int index[5] = {0,0,0,0,0};
    int count[5] = {0,0,0,0,0};
    int i = 0;
    while(getline(file, line)){
        if(line.at(index[0]) == '#')
            ++count[0];
        x_position[0] += 1;
        index[0] = x_position[0] % 31;
        if(line.at(index[1]) == '#')
            ++count[1];
        x_position[1] += 3;
        index[1] = x_position[1] % 31;
        if(line.at(index[2]) == '#')
            ++count[2];
        x_position[2] += 5;
        index[2] = x_position[2] % 31;
        if(line.at(index[3]) == '#')
            ++count[3];
        x_position[3] += 7;
        index[3] = x_position[3] % 31;
        
        if(i % 2 == 0){
            if(line.at(index[4]) == '#')
                ++count[4];
            x_position[4] += 1;
            index[4] = x_position[4] % 31;
        }
        ++i;
    }
    int ans = 1;
    for(int i =0;i<5;i++){
        ans *= count[i];
    }
    cout << ans;

}