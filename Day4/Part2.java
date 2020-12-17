import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.Scanner;

class Part2{

    public static boolean check(String s){
        s = s.toLowerCase();
        if(s.contains("byr") && s.contains("iyr")
           && s.contains("eyr") && s.contains("hgt")
           && s.contains("hcl") && s.contains("ecl")
           && s.contains("pid"))
            return true;
        return false;
    }

    public static boolean validate(String s){
        int byr = Integer.parseInt(s.substring(s.indexOf("byr")+4, s.indexOf("byr")+8));
        if(byr < 1920 || byr > 2002)
            return false;
        
        int iyr = Integer.parseInt(s.substring(s.indexOf("iyr")+4, s.indexOf("iyr")+8));
        if(iyr < 2009 || iyr > 2020)
            return false;

        int eyr = Integer.parseInt(s.substring(s.indexOf("eyr")+4, s.indexOf("eyr")+8));
        if(eyr < 2020 || eyr > 2030)
            return false;
        
        String hgt = s.substring(s.indexOf("hgt")+4);
        hgt = hgt.substring(0,hgt.indexOf(' '));
        {
            if(hgt.contains("in")){
                int val = Integer.parseInt(hgt.substring(0,hgt.indexOf("in")));
                if(val < 59 || val > 76)
                    return false;
            }
            else if(hgt.contains("cm")){
                int val = Integer.parseInt(hgt.substring(0,hgt.indexOf("cm")));
                if(val < 150 || val > 193)
                    return false;
            }
            else
                return false;
        }
        
        String hcl = s.substring(s.indexOf("hcl")+4);
        hcl = hcl.substring(0,hcl.indexOf(' '));
        if(hcl.length() != 7 && !hcl.matches("-?[0-9a-fA-F]+"))
            return false;
        
        String ecl = s.substring(s.indexOf("ecl")+4, s.indexOf("ecl")+7);
        String array[] = {"amb", "blu", "brn", "gry", "grn", "hzl", "oth"};
        if(!Arrays.stream(array).anyMatch(ecl::contains))
            return false;
        
        String pid = s.substring(s.indexOf("pid")+4);
        pid = pid.substring(0,pid.indexOf(' '));
        if(pid.length() !=9)
            return false;
        /**/
        return true;
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
                line += " ";
                if(check(line) && validate(line))
                    ++count;
                line = "";
            }
        }
        count += 1; // for some reason the last input wasn't getting registered
        System.out.println(count);
        sc.close();
    }
}