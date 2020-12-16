#include <iostream>
#include <fstream>
#include <string>
using namespace std;
int main(){
    ifstream file("input");
    string line;
    int count = 0;
    int pos = 0;
    int index = 0;
    while(getline(file, line)){
        if(line.at(index) == '#')
            ++count;
        pos += 3;
        index = pos % 31; // size of a row is 31 
    }

    cout << count;
}