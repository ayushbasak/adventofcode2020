import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

class Part1{
    public static void main(String [] args) throws FileNotFoundException{
        File file = new File("input");
        Scanner sc = new Scanner(file);
        int count = 0;
        while(sc.hasNextLine()){
            String line = sc.nextLine();
            // String format
            // <low>-<high> <character>: <string>
            int low = Integer.parseInt(line.substring(0,line.indexOf('-')));
            int high = Integer.parseInt(line.substring(line.indexOf('-')+1,line.indexOf(' ')));
            char character = line.charAt(line.indexOf(' ')+1);
            String remainingString = line.substring(line.lastIndexOf(' ')+1);

            int len = remainingString.length();
            int c = 0;
            for(int i = 0;i<len;i++){
                if(remainingString.charAt(i) == character)
                    ++c;
            }
            if(c >= low && c <= high)
                ++count;
        }
        System.out.println(count);
        sc.close();
    }
}