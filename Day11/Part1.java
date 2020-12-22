import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;
class Part1{
    public static boolean empty(char c){
        if(c == '.' || c == 'L')
            return true;
        return false;
    }
    public static ArrayList<ArrayList<Character>> function(ArrayList<ArrayList<Character>> list){
        ArrayList<ArrayList<Character>> lookup = new ArrayList<>(list);
        int row = list.size()-2;
        int col = list.get(0).size()-2;

        for(int i = 1;i <= row; i++){
            for(int j = 1; j <= col; j++){
                int count = 0;
                System.out.print(j);
                if(lookup.get(i).get(j) == 'L'){
                    if(empty(lookup.get(i-1).get(j-1)) &&
                    empty(lookup.get(i-1).get(j)) &&
                    empty(lookup.get(i-1).get(j+1)) &&
                    empty(lookup.get(i).get(j-1)) &&
                    empty(lookup.get(i).get(j+1)) &&
                    empty(lookup.get(i+1).get(j-1)) &&
                    empty(lookup.get(i+1).get(j)) &&
                    empty(lookup.get(i+1).get(j+1))
                    ){
                        list.get(i).set(j, '#');
                        list.set(i, list.get(i));
                    }
                }
            }
            System.out.println();
        }


        return list;

    }
    public static void main(String [] args) throws FileNotFoundException{
        File file = new File("D:\\WorkDirectory\\adventofcode2020\\Day11\\test");
        Scanner sc = new Scanner(file);

        // Read and Add padding to the grid.
        ArrayList<ArrayList<Character>> list = new ArrayList<>();
        while(sc.hasNext()){

            String str = sc.nextLine();
            ArrayList<Character> mini_list = new ArrayList<>();
            mini_list.add('.');
            for(int i = 0;i<str.length();i++){
                if(str.charAt(i) == 'L')
                    mini_list.add('#');
                else
                    mini_list.add('.');
            }
            mini_list.add('.');
            list.add(mini_list);
        }
        ArrayList<Character> padding = new ArrayList<>();
        int x = list.get(0).size();
        for(int i =0;i<x;i++){
            padding.add('.');
        }
        list.add(0,padding);
        list.add(padding);

        System.out.println(list);
        System.out.println(function(list));
        
        // final matrix => list
        sc.close();
    }
}