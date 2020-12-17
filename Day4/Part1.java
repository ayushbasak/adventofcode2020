import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

class Part1{
    public static boolean check(String s){
        s = s.toLowerCase();
        if(s.contains("byr") && s.contains("iyr")
           && s.contains("eyr") && s.contains("hgt")
           && s.contains("hcl") && s.contains("ecl")
           && s.contains("pid"))
            return true;
        return false;
    }
    public static void main(String [] args)throws FileNotFoundException{
        File file = new File("D:\\WorkDirectory\\adventofcode2020\\Day4\\input");
        Scanner sc = new Scanner(file);
        int count = 0;
        String line = "";
        while(sc.hasNext()){
            String buffer = sc.nextLine();
            // System.out.println(buffer);

            if(buffer.length() > 0){
                line += buffer;
                line += " ";
            }
            else{
                if(check(line))
                    ++count;
                line = "";
            }
        }
        count += 1; // for some reason the last input wasn't getting registered
        System.out.println(count);
        sc.close();
    }
}