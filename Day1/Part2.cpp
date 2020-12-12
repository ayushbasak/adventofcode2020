#include <iostream>
#include <fstream>
#include <string>
#include <vector>
using namespace std;
int main(){
    ifstream file("input");
    string line;
    vector<int> list;
    while(getline(file, line)){
        list.push_back(atoi(line.c_str()));
    }
    int len = list.size();
    int a=1,b=1,c=1;
    for(int i = 0;i<len;i++){
        for(int j = 0;j<len;j++){
            for(int k = 0;k<len;k++){
                a = list.at(i);
                b = list.at(j);
                c = list.at(k);
                if(a + b + c == 2020)
                    goto jump;
            }
        }
    }
    jump: 
    cout << a*b*c;
    file.close();
}